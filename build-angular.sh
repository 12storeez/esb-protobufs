#!/usr/bin/env sh

protoc --plugin=protoc-gen-ng=./node_modules/.bin/protoc-gen-ng --ng_out=./angular -I ./proto $(find ./proto -iname "*.proto")

    cat >> index.ts <<EOF
$(
  for i in $(find ./angular -iname "*.pbsc.ts"); do
    echo  "export * from '${i%.ts}';"
  done
)
EOF


