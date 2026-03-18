# TMR App

Desktop app built with Electron, Vue 3, Vite, Tailwind CSS, and TypeScript.

The app opens an embedded web view for:

`https://trm-7pr.pages.dev/`

## Requirements

- Node.js 20 or newer
- npm

## Install

### From GitHub

```bash
git clone https://github.com/Senghong-2025/tmr-app.git && cd tmr-app && npm install
```

### macOS

```bash
npm install
```

### Download macOS App From GitHub Release

If Finder reports `The disk image is corrupted`, the most common causes are:

- the downloaded file is not actually the release asset
- macOS Gatekeeper quarantined the unsigned app

Download the latest packaged `.dmg` from this repo's GitHub releases, fail fast on HTTP errors, verify the file type, then remove quarantine attributes before opening it:

```bash
curl -fL "https://github.com/Senghong-2025/tmr-app/releases/latest/download/TMR-App-mac.dmg" -o ~/Downloads/TMR-App-mac.dmg \
&& file ~/Downloads/TMR-App-mac.dmg \
&& xattr -cr ~/Downloads/TMR-App-mac.dmg \
&& open ~/Downloads/TMR-App-mac.dmg
```

If `file ~/Downloads/TMR-App-mac.dmg` does not print a disk-image type, the release asset name is wrong or the download failed.

If macOS still blocks the app after mounting the `.dmg`, copy `TMR App.app` into `/Applications` and run:

```bash
xattr -cr /Applications/TMR\ App.app
```

This build is currently ad-hoc signed and not notarized, so end users may still need the quarantine-removal step on macOS.

### Windows

```powershell
npm install
```

## Run In Development

### macOS

```bash
npm run dev
```

### Windows

```powershell
npm run dev
```

This starts:

- Vite dev server on `http://127.0.0.1:5173`
- TypeScript watch build for Electron
- Electron with auto-reload

## Build

```bash
npm run build
```

The build output is generated in:

- `dist/`
- `dist-electron/`

## Generate macOS App Icon

```bash
npm run icon:mac
```

This generates the `.icns` app icon used by macOS packaging from:

- `build/icon.svg`

Generated icon output:

- `build/mac/icon.icns`

## Package Desktop App

Build an installable desktop app:

```bash
npm run dist
```

Platform-specific packaging:

```bash
npm run dist:mac
npm run dist:win
```

Packaged installers are written to:

- `release/`

Typical outputs:

- macOS: `.dmg`
- Windows: `.exe`

## Project Scripts

- `npm run dev` starts the renderer, Electron TypeScript watcher, and Electron app
- `npm run build` builds the renderer and Electron process
- `npm run dist` builds and packages the desktop app
- `npm run dist:mac` builds a macOS installer
- `npm run dist:win` builds a Windows installer
- `npm run preview` previews the Vite build
