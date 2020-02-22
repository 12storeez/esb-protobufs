#!/usr/bin/env sh
OUT_DIR="typescript"
OUT_FILE="index.d.ts"

mkdir $OUT_DIR

echo ./$OUT_DIR/$OUT_FILE
# shellcheck disable=SC2046
npx pbjs --keep-case --no-convert --no-verify --es6 --no-create  -t static-module -w commonjs  $(ls -d ./proto/*) | npx pbts --no-comments -o  ./$OUT_DIR/$OUT_FILE -
