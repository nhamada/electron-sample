var remote = require('remote');
var app = remote.require('app');
var BrowserWindow = remote.require('browser-window');
var dialog = remote.require('dialog');

var showMsg = function(message){
	var options = {
		title: 'Message from callback',
		type: 'info',
		buttons: ['OK', 'Cancel'],
		message: 'Callback passs',
		detail: message
	};
	var win = BrowserWindow.getFocusedWindow();
	dialog.showMessageBox(win, options);
};

var App = {
	showSaveDialog: function(flag){
		var options = {
			title: 'Save Dialog Example',
			defaultPath: app.getPath('userDesktop'),
			filters: [
				{name: 'Images', extensions: ['jpg', 'png', 'gif']}, 
				{name: 'Documents', extensions: ['txt', 'html']},
			]
		};
		if(flag){
			var win = BrowserWindow.getFocusedWindow();
			dialog.showSaveDialog(win, options, function(filename){
				showMsg(filename);
			});
		} else {
			dialog.showSaveDialog(options, function(filename){
				showMsg(filename);
			});
		}
	},
	showOpenDialog: function(flag){
		var options = {
			title: 'Open Dialog Example',
			defaultPath: app.getPath('userDesktop'),
			filters: [
				{name: 'Images', extensions: ['jpg', 'png', 'gif']}, 
				{name: 'Documents', extensions: ['txt', 'html']},
			],
			properties: ['openFile', 'multiSelections', 'createDirectory']
		};
		if(flag){
			var win = BrowserWindow.getFocusedWindow();
			dialog.showOpenDialog(win, options, function(filenames){
				showMsg(filenames);
			});
		} else {
			dialog.showOpenDialog(options, function(filenames){
				showMsg(filenames);
			});
		}
	},
	showMessageBox: function(flag){
		var options = {
			title: 'Message Box Example',
			type: 'info',
			buttons: ['OK', 'Cancel', 'Info'],
			message: 'Message Box Example',
			detail: 'Extra info'
		};
		if(flag){
			var win = BrowserWindow.getFocusedWindow();
			dialog.showMessageBox(win, options, function(response){
				showMsg(response.toString());
			});
		} else {
			dialog.showMessageBox(options, function(response){
				showMsg(response.toString());
			});
		}
	},
	showErrorBox: function(){
		dialog.showErrorBox('Error Box Example', 'Error Box');
	}
};