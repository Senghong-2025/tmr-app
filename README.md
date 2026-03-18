# TMR App

Electron desktop wrapper for `https://trm-7pr.pages.dev/`, built with Vue 3, Vite, Tailwind CSS, and TypeScript.

In development, the app loads the local Vite renderer. In production, the packaged app opens the remote site inside an Electron window and sends external links to the system browser.

## Stack

- Electron
- Vue 3
- Vite
- Tailwind CSS 4
- TypeScript
- electron-builder

## Requirements

- Node.js 20+
- npm

## Install

```bash
npm install
```

To clone the repository first:

```bash
git clone https://github.com/Senghong-2025/tmr-app.git
cd tmr-app
npm install
```

## Development

Start the desktop app in development mode:

```bash
npm run dev
```

This command starts:

- the Vite dev server on `http://127.0.0.1:5173`
- the Electron TypeScript watcher
- Electron with auto-reload

## Build

Create production build output:

```bash
npm run build
```

Generated folders:

- `dist/` for the renderer build
- `dist-electron/` for the Electron main/preload build

## Package Installers

Build packaged desktop installers with `electron-builder`:

```bash
npm run dist
```

Platform-specific packaging:

```bash
npm run dist:mac
npm run dist:win
```

Packaged artifacts are written to `release/`.

Typical outputs:

- macOS: `.dmg` and `.zip`
- Windows: NSIS installer `.exe`

## macOS App Icon

Generate the macOS `.icns` icon from the source asset:

```bash
npm run icon:mac
```

Expected files:

- source: `build/icon.svg`
- output: `build/mac/icon.icns`

## Available Scripts

- `npm run dev` starts the renderer, Electron TypeScript watcher, and Electron app
- `npm run build` builds the renderer and Electron processes
- `npm run dist` builds and packages the app for the current platform
- `npm run dist:mac` builds macOS artifacts
- `npm run dist:win` builds Windows artifacts
- `npm run preview` previews the Vite renderer build
- `npm run icon:mac` generates the macOS icon

## Notes

- The production app loads `https://trm-7pr.pages.dev/`.
- Downloads are saved to the user's default Downloads folder.
- `package.json` includes `npm run release:mac`, but the referenced `scripts/upload-mac-release.sh` file is not present in this repository. That script is not documented here until the implementation exists.
