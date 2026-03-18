import { app, BrowserWindow, session, shell } from 'electron'
import path from 'node:path'

const isDev = !app.isPackaged
const rendererDevUrl = 'http://127.0.0.1:5173'
const remoteAppUrl = 'https://trm-7pr.pages.dev/'

function isAllowedInAppUrl(url: string) {
  if (isDev && url.startsWith(rendererDevUrl)) {
    return true
  }

  if (url === remoteAppUrl) {
    return true
  }

  try {
    return new URL(url).origin === new URL(remoteAppUrl).origin
  } catch {
    return false
  }
}

function configureNavigation(window: BrowserWindow) {
  window.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('blob:') || url.startsWith('data:') || isAllowedInAppUrl(url)) {
      return { action: 'allow' }
    }

    void shell.openExternal(url)
    return { action: 'deny' }
  })

  window.webContents.on('will-navigate', (event, url) => {
    if (isAllowedInAppUrl(url)) {
      return
    }

    event.preventDefault()
    void shell.openExternal(url)
  })
}

function configureDownloads() {
  session.defaultSession.on('will-download', (_event, item) => {
    const downloadPath = path.join(app.getPath('downloads'), item.getFilename())
    item.setSavePath(downloadPath)
  })
}

function createWindow() {
  const window = new BrowserWindow({
    width: 430,
    height: 932,
    minWidth: 390,
    minHeight: 640,
    backgroundColor: '#09090b',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  configureNavigation(window)

  if (isDev) {
    void window.loadURL(rendererDevUrl)
    window.webContents.openDevTools({ mode: 'detach' })
    return
  }

  void window.loadURL(remoteAppUrl)
}

app.whenReady().then(() => {
  configureDownloads()
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
