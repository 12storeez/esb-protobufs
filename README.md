# esb-protobufs

## Генерация файлов для Go

### protoc плагины:
- protoc-gen-go
- protoc-gen-grpc-gateway
- protoc-gen-swagger

### Генерация клиента и сервера с пакетом annotations.proto:
`protoc -I . -I $GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --go_out=. --go-grpc_out=require_unimplemented_servers=false:. proto/notifications/slack.proto`

### Генерация прото:
`protoc -I . --go_out=. --go-grpc_out=require_unimplemented_servers=false:. proto/notifications/slack.proto`

### Генерация прокси:
`protoc -I . --grpc-gateway_out=. -I $GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --grpc-gateway_opt logtostderr=true --grpc-gateway_opt generate_unbound_methods=true proto/notifications/slack.proto`

### Генерация даты для свагера:
`protoc -I . --grpc-gateway_out=. -I $GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --swagger_out=logtostderr=true:. proto/notifications/slack.proto`

## Генерация файлов для Typescript
    `sh ./build-ts.sh`

## Обновление версии
Перед тем как зарелизить новую версию, необходимо поднять версию пакета в `package.json`,
чтобы это обновление автоматически подтянулось в [NPM пакет](https://www.npmjs.com/package/esb-protobufs)