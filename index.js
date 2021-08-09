const {app} = require("electron");
const electron = require('electron');

app.on("ready", ()=>{
	var screen = electron.screen.getPrimaryDisplay();
	var windowDims = {
		width: 220,
		height: 110 //210
	}
	var Options = {
		alwaysOnTop:true,
		frame: false,
		x: (screen.size.width-windowDims.width)-50,
		y: (screen.size.height-windowDims.height)-50,
		width: windowDims.width,
		height: windowDims.height,
		resizable: false,
		transparent: true
	}
	console.log(Options);
	var YT = new electron.BrowserWindow(Options);
	YT.loadURL(`file://${__dirname}/index.html`);
});

//width: 373px; height:210px;\
