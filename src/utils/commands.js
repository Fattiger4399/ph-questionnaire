// import {
//     createTool
// } from "./tools";

/**
 * 命令类，会在commandStack里执行
 */
class Command {
    execute() { }
    redo() {
        this.execute();
    }
    undo() { }
    canExecute() {
        return true;
    }
    dispose() { }
    canUndo() {
        return true;
    }
}

/**
 * 链式命令
 */
class ChainCommand extends Command {

    constructor() {
        super();
        this.commandList = [];
    }
    add(c, index) {
        if (c != null) {
            if (index == null) this.commandList.push(c);
            else this.commandList.splice(index, 0, c);
        }
    }
    canExecute() {
        if (this.commandList.length == 0)
            return false;
        for (var i = 0, len = this.commandList.length; i < len; i++) {
            var cmd = this.commandList[i];
            if (cmd == null)
                return false;
            if (!cmd.canExecute())
                return false;
        }
        return true;
    }
    canUndo() {
        if (this.commandList.length == 0)
            return false;
        for (var i = 0, len = this.commandList.length; i < len; i++) {
            var cmd = this.commandList[i];
            if (cmd == null)
                return false;
            if (!cmd.canUndo())
                return false;
        }
        return true;
    }
    dispose() {
        for (var i = 0, len = this.commandList.length; i < len; i++) {
            this.commandList[i].dispose();
        }
    }
    execute() {
        for (var i = 0, len = this.commandList.length; i < len; i++) {
            this.commandList[i].execute();
        }
    }
    undo() {
        for (var i = this.commandList.length - 1; i >= 0; i--)
            this.commandList[i].undo();
    }
    getCommands() {
        return this.commandList;
    }
    isEmpty() {
        return this.commandList == null || this.commandList.length == 0;
    }
    size() {
        return this.commandList.length;
    }
    chain(c) {
        if (c != null)
            this.add(c);
        return this;
    }
}

class SetPropertyCommand extends Command {
    state = "SETPROPERTY";
    constructor({
        model,
        props,
    }) {
        super();
        this.model = model;
        this.props = props;
    }
    canExecute() {
        //TODO 验证old和new，不能完全一致
        return this.model != null && this.props != null && this.props.constructor == Object;
    }
    execute() {
        this.oldProperties = {};
        let self = this;
        setTimeout(() => {
            for (let key in self.props) {
                self.oldProperties[key] = self.model[key];
                if (self.model instanceof Array) {
                    self.model.splice(key, 1, self.props[key]);
                } else
                    Vue.set(self.model, key, self.props[key]);
            }
        })
    }
    undo() {
        for (let key in this.oldProperties) {
            Vue.set(this.model, key, this.oldProperties[key]);
        }
    }
}




 