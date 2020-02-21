#!/usr/bin/env sh
OUT_DIR="typescript"
OUT_FILE="index.d.ts"

mkdir $OUT_DIR

echo ./$OUT_DIR/$OUT_FILE
# shellcheck disable=SC2046
npx pbjs -t static-module -w commonjs -o ./$OUT_DIR/index.js  $(ls -d ./proto/*)
npx pbts -o ./$OUT_DIR/$OUT_FILE $OUT_DIR/index.js
