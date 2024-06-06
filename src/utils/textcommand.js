// 定义一个命令接口
class Command {
    execute() {}
    undo() {}
}

// 具体命令类
class AddTextCommand extends Command {
    constructor(textEditor, text) {
        super();
        this.textEditor = textEditor;
        this.text = text;
        this.backup = textEditor.getText();
    }

    execute() {
        this.textEditor.addText(this.text);
    }

    undo() {
        this.textEditor.restoreText(this.backup);
    }
}

// 文本编辑器类
class TextEditor {
    constructor() {
        this.text = '';
    }

    addText(text) {
        this.text += text;
    }

    restoreText(backup) {
        this.text = backup;
    }
}

// 命令栈类
class CommandStack {
    constructor() {
        this.commands = [];
        this.currentCommandIndex = -1;
    }

    execute(command) {
        command.execute();
        this.commands.splice(this.currentCommandIndex + 1, this.commands.length, command);
        this.currentCommandIndex++;
    }

    undo() {
        if (this.currentCommandIndex >= 0) {
            this.commands[this.currentCommandIndex].undo();
            this.currentCommandIndex--;
        }
    }

    redo() {
        if (this.currentCommandIndex < this.commands.length - 1) {
            this.currentCommandIndex++;
            this.commands[this.currentCommandIndex].execute();
        }
    }
}

// 使用示例
const textEditor = new TextEditor();
const commandStack = new CommandStack();

// 执行命令
commandStack.execute(new AddTextCommand(textEditor, 'Hello, '));
commandStack.execute(new AddTextCommand(textEditor, 'World!'));
console.log(textEditor.text); // 输出: Hello, World!

// 撤销命令
commandStack.undo();
console.log(textEditor.text); // 输出: Hello,

// 重做命令
commandStack.redo();
console.log(textEditor.text); // 输出: Hello, World!
