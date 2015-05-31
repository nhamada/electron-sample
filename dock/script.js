var remote = require('remote');
var app = remote.require('app');

var bounceID = undefined;

var App = {
	bounceForCritical:function(){
		if(bounceID != undefined) this.cancelBounce();
		setTimeout(function(){
			bounceID = app.dock.bounce('critical');
		}, 5000);
	},
	bounceForInfo:function(){
		if(bounceID != undefined) this.cancelBounce();
		setTimeout(function(){
			bounceID = app.dock.bounce('informational');
		}, 5000);
	},
	cancelBounce:function(){
		if(bounceID != undefined){
			app.dock.cancelBounce(bounceID);
			bounceID = undefined;
		}
	},
	setBadge:function(){
		app.dock.setBadge('Test');
	},
	clearBadge:function(){
		app.dock.setBadge('');
	},
	showIcon:function(){
		app.dock.show();
	},
	hideIcon:function(){
		app.dock.hide();
	}
};