const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "dobartek-pizza" is now active!');

	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		let config = vscode.workspace.getConfiguration('dobartekPizza');
        let url = config.get("url");

        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
