#!/bin/sh

for file in ./proto/*
do
  if [ -d "$file" ]; then
    dirname=$(basename "$file")

    ### Генерация единого сваггера для нескольких прото файлов
    protoc -I $file -I ../tmp/googleapis --openapiv2_out=allow_merge=true,merge_file_name=$dirname.json:./swagger/$dirname $file/*.proto

    if grep -r -q "annotations.proto" $file; then
      ### Генерация клиента и сервера с пакетом annotations.proto:
      ls $file/ | xargs -I {} protoc -I $file -I ../tmp/googleapis --go_out=. --go-grpc_out=require_unimplemented_servers=false:. $file/{}
    else
      ### Генерация прото:
      ls $file/ | xargs -I {} protoc -I . --go_out=. --go-grpc_out=require_unimplemented_servers=false:. $file/{}
    fi

    if grep -r -q "google.api.http" $file; then
      ### Генерация прокси:
      ls $file/ |grep "google.api.http"| xargs -I {} protoc -I $file --grpc-gateway_out=. -I ../tmp/googleapis --grpc-gateway_opt logtostderr=true --grpc-gateway_opt generate_unbound_methods=true $file/{}
    fi
  elif [ -f "$file" ]; then
    if grep -q "annotations.proto" $file; then
      #Генерация клиента и сервера с пакетом annotations.proto:
      protoc -I . -I ../tmp/googleapis --go_out=. --go-grpc_out=require_unimplemented_servers=false:. $file
    else
      ### Генерация прото:
      protoc -I . --go_out=. --go-grpc_out=require_unimplemented_servers=false:. $file
    fi

    if grep -q "google.api.http" $file; then
      #Генерация прокси:
      protoc -I . --grpc-gateway_out=. -I ../tmp/googleapis --grpc-gateway_opt logtostderr=true --grpc-gateway_opt generate_unbound_methods=true $file
    fi
  fi
done