# esb-protobufs

## Генерация файлов для Go

### Файлы для gRPC
    protoc -I . -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --go_out=. --go-grpc_out=. proto/geo.proto

### Файлы для HTTP запросов
    protoc -I . --grpc-gateway_out=. \
      -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
        --grpc-gateway_opt logtostderr=true \
        --grpc-gateway_opt generate_unbound_methods=true \
        proto/geo.proto 

## Генерация файлов для Typescript
    node ./app.js

## Обновление версии
Перед тем как зарелизить новую версию, необходимо поднять версию пакета в `package.json`,
чтобы это обновление автоматически подтянулось в [NPM пакет](https://www.npmjs.com/package/esb-protobufs)