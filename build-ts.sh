#!/usr/bin/env sh
OUT_DIR="typescript"
OUT_FILE_TS="index.d.ts"
OUT_FILE_JS="index.js"

mkdir $OUT_DIR

echo ./$OUT_DIR/$OUT_FILE
# shellcheck disable=SC2046
npx pbjs --keep-case --no-convert --no-verify --no-create  -t static-module  $(ls -d ./proto/*) > ./$OUT_DIR/$OUT_FILE_JS
npx pbts --no-comments -o  ./$OUT_DIR/$OUT_FILE_TS ./$OUT_DIR/$OUT_FILE_JS
