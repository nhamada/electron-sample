var remote = require('remote');
var app = remote.require('app');
var Tray = remote.require('tray');
var Menu = remote.require('menu');

var appIcon = null;
var currentHighlight = true;

var App = {
	addTray:function(){
		if(appIcon == null){
			var iconPath = __dirname + '/icons/s16_f_business_30_1bg.png';
			var pressedIconPath = __dirname + '/icons/s16_f_business_30_0bg.png';
			appIcon = new Tray(iconPath.toString());
			appIcon.setPressedImage(pressedIconPath.toString());
			appIcon.setHighlightMode(currentHighlight);
			var contextMenu = Menu.buildFromTemplate([
				{ label:'Item1', type:'radio', checked:true },
				{ label:'Item2', type:'radio' },
				{ label:'Item3', type:'radio' },
				{ label:'Item4', type:'radio' }
			]);
			appIcon.setContextMenu(contextMenu);
		} else {
		}
	},
	removeTray:function(){
		if(appIcon != null){
			appIcon.destroy();
			appIcon = null;
		}
	},
	toggleHighlight:function(){
		if(appIcon != null){
			currentHighlight = !currentHighlight;
			appIcon.setHighlightMode(currentHighlight);
		}
	},
	setTitle:function(){
		if(appIcon != null){
			appIcon.setTitle('Tray Example');
		}
	},
	removeTitle:function(){
		if(appIcon != null){
			appIcon.setTitle('');
		}
	}
};