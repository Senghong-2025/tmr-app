# TMR App

Desktop app built with Electron, Vue 3, Vite, Tailwind CSS, and TypeScript.

The app opens an embedded web view for:

`https://trm-7pr.pages.dev/`

## Requirements

- Node.js 20 or newer
- npm

## Install

### macOS

```bash
npm install
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

## Project Scripts

- `npm run dev` starts the renderer, Electron TypeScript watcher, and Electron app
- `npm run build` builds the renderer and Electron process
- `npm run preview` previews the Vite build
