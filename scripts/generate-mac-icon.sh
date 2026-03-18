#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SRC_SVG="$ROOT_DIR/build/icon.svg"
OUT_DIR="$ROOT_DIR/build/mac"
ICONSET_DIR="$OUT_DIR/TMR App.iconset"
PNG_1024="$OUT_DIR/icon_1024x1024.png"
ICNS_OUT="$OUT_DIR/icon.icns"

mkdir -p "$OUT_DIR"
rm -rf "$ICONSET_DIR"
mkdir -p "$ICONSET_DIR"

qlmanage -t -s 1024 -o "$OUT_DIR" "$SRC_SVG" >/dev/null
mv "$OUT_DIR/icon.svg.png" "$PNG_1024"

sips -z 16 16 "$PNG_1024" --out "$ICONSET_DIR/icon_16x16.png" >/dev/null
sips -z 32 32 "$PNG_1024" --out "$ICONSET_DIR/icon_16x16@2x.png" >/dev/null
sips -z 32 32 "$PNG_1024" --out "$ICONSET_DIR/icon_32x32.png" >/dev/null
sips -z 64 64 "$PNG_1024" --out "$ICONSET_DIR/icon_32x32@2x.png" >/dev/null
sips -z 128 128 "$PNG_1024" --out "$ICONSET_DIR/icon_128x128.png" >/dev/null
sips -z 256 256 "$PNG_1024" --out "$ICONSET_DIR/icon_128x128@2x.png" >/dev/null
sips -z 256 256 "$PNG_1024" --out "$ICONSET_DIR/icon_256x256.png" >/dev/null
sips -z 512 512 "$PNG_1024" --out "$ICONSET_DIR/icon_256x256@2x.png" >/dev/null
sips -z 512 512 "$PNG_1024" --out "$ICONSET_DIR/icon_512x512.png" >/dev/null
cp "$PNG_1024" "$ICONSET_DIR/icon_512x512@2x.png"

iconutil -c icns "$ICONSET_DIR" -o "$ICNS_OUT"
