var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

var mainWindow = null;

// Mac OS fix
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// init electron container
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1000, height: 625});
  mainWindow.loadURL('file://' + __dirname + '/public/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
