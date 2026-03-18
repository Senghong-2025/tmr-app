import { app, BrowserWindow } from 'electron'
import path from 'node:path'

const isDev = !app.isPackaged

function createWindow() {
  const window = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 960,
    minHeight: 640,
    backgroundColor: '#09090b',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (isDev) {
    void window.loadURL('http://127.0.0.1:5173')
    window.webContents.openDevTools({ mode: 'detach' })
    return
  }

  void window.loadFile(path.join(__dirname, '../dist/index.html'))
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
