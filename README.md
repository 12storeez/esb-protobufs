# esb-protobufs

## Генерация файлов для Go

### protoc плагины:
- protoc-gen-go
- protoc-gen-grpc-gateway
- protoc-gen-swagger
- protoc-gen-openapiv2 (для генерации единого сваггера)

### Генерация клиента и сервера с пакетом annotations.proto:
`protoc -I . -I $GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --go_out=. --go-grpc_out=require_unimplemented_servers=false:. proto/notifications/slack.proto`

### Генерация прото:
`protoc -I . --go_out=. --go-grpc_out=require_unimplemented_servers=false:. proto/notifications/slack.proto`

### Генерация прокси:
`protoc -I . --grpc-gateway_out=. -I $GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --grpc-gateway_opt logtostderr=true --grpc-gateway_opt generate_unbound_methods=true proto/notifications/slack.proto`

### Генерация даты для свагера:
`protoc -I . --grpc-gateway_out=. -I $GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis --swagger_out=logtostderr=true:. proto/notifications/slack.proto`

### Генерация единого сваггера для нескольких прото файлов (на примере логистики):
`protoc -I ./proto/logistics -I $GOPATH/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@v1.16.0/third_party/googleapis --openapiv2_out=allow_merge=true,merge_file_name=logistics.json:./swagger/logistics proto/logistics/*.proto`

### Импорт протобафов
`-I ./proto/logistics` - указывает корневой путь до протобафов, что позволяет внутри импортировать их просто как import "name.proto", чтобы импорт из одного протобафа в другой работал корректно.
При работе вне пакета достаточно `-I ./proto` и `-I . `

## Генерация файлов для Typescript
    `sh ./build-ts.sh`

## Обновление версии
Перед тем как зарелизить новую версию, необходимо поднять версию пакета в `package.json`,
чтобы это обновление автоматически подтянулось в [NPM пакет](https://www.npmjs.com/package/esb-protobufs)

## Генерация c помощью Makefile
`make go-unix || make go-win` - скачает последний образ protobuf-generator из cr-yandex и сгенериует (изменит) протофайлы в дирекории go.
Важно: в переменной PWD нужно указать абсолютный путь до клонированного репозитория esb-protobufs