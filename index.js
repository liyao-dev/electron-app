const {app,BrowserWindow}  = require('electron')
function createWindow(){
    const win = new BrowserWindow({width:800,heigth:600})
    win.loadFile('index.html')
    win.webContents.openDevTools()
}
app.on('ready',createWindow)