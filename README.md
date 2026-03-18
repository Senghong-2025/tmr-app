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

Download a packaged `.dmg` from a GitHub release, remove macOS quarantine attributes, and open it:

```bash
curl -L "https://github.com/<owner>/<repo>/releases/download/<tag>/<file>.dmg" -o ~/Downloads/<file>.dmg \
&& xattr -cr ~/Downloads/<file>.dmg \
&& open ~/Downloads/<file>.dmg
```

Example:

```bash
curl -L "https://github.com/cheat2001/eyebreak/releases/download/v2.3.0/EyeBreak-v2.3.0.dmg" -o ~/Downloads/EyeBreak-v2.3.0.dmg \
&& xattr -cr ~/Downloads/EyeBreak-v2.3.0.dmg \
&& open ~/Downloads/EyeBreak-v2.3.0.dmg
```

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
