// import { Eventhook } from "../eventhook";

// export const PRE_EXECUTE = 'PRE_EXECUTE';
// export const PRE_REDO = 'PRE_REDO';
// export const PRE_UNDO = 'PRE_UNDO';
// const POST_EXECUTE = 'POST_EXECUTE';

class CommandStack extends Eventhook{

    constructor() {
        // super();
        this.redoable = [];
        this.undoable = [];
        this.saveLocation = 0;
    }
    canRedo() {
        return this.redoable.length > 0;
    }
    canUndo() {
        return this.undoable.length == 0 ? false : this.undoable[this.undoable.length - 1].canUndo();
    }
    redo() {
        if (!this.canRedo())
            return;
        var command = this.redoable.pop();
        this.notifyListeners(command, PRE_REDO);
        command.redo();
        this.undoable.push(command);
        this.notifyListeners(command, 'POST_REDO');
    }
    undo() {
        if (!this.canUndo()) return;
        var command = this.undoable.pop();
        this.notifyListeners(command, PRE_UNDO);
        command.undo();
        this.redoable.push(command);
        this.notifyListeners(command, 'POST_UNDO');
    }
    notifyListeners(command, state) {
        setTimeout(()=>{
            this.emit(state,{
                command,
                state
            })
            // for (let k in this.listeners) {
            //     this.listeners[k] && this.listeners[k]({
            //         command,
            //         state
            //     });
            // }
            //通知activator，有command被执行了
            // 如果没有 activator ，则派发事件
            let event = window.IDE?.activator
            event?.emit?.("commandFired", {
                    state,
                    dirty: this.isDirty(),
                    command,
                });
        });

    }
    flush() {
        this.flushRedo();
        this.flushUndo();
        this.saveLocation = 0;
        this.notifyListeners();
    }
    flushRedo() {
        while (this.redoable && this.redoable.length > 0)
            this.redoable.pop().dispose();
    }
    flushUndo() {
        while (this.undoable && this.undoable.length > 0)
            this.undoable.pop().dispose();
    }
    execute(c) {
        if (c == null || (c.canExecute && !c.canExecute()))
            return;
        console.log('execute', c);
        this.flushRedo();
        // this.notifyListeners(c, PRE_EXECUTE);
        try {
            c.execute();
            if (this.getUndoLimit() > 0)
                while (this.undoable.length > this.getUndoLimit()) {
                    this.undoable.splice(0, 1);
                    if (this.saveLocation > -1)
                        this.saveLocation--;
                }
            if (this.saveLocation > this.undoable.length)
                this.saveLocation = -1;
            if(c.isCollect == false) return
            this.undoable.push(c);
        } finally {
            this.notifyListeners(c, POST_EXECUTE);
        }
    }
    getUndoLimit() {
        return 15;
    }
    markSaveLocation() {
        this.saveLocation = this.undoable.length;
    }
    isDirty() {
        return this.undoable.length != this.saveLocation;
    }
    dispose() {
        this.redoable = [];
        this.undoable = [];
    }
};

// export default CommandStack