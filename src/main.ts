import * as electron from 'electron';
import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow;
const mainWindowOptions: Electron.BrowserWindowOptions = {
    width: 800, height: 600
};


/* 
   Don't quit the application when using the close button.
    which is the default OSX convention/style.
   Do override when you're application is unique in behaviour. 
*/
app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

/*
   When electron app is ready create new window.
*/
app.on('ready', function () {
    mainWindow = new BrowserWindow(mainWindowOptions);
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Hook on closed event
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});