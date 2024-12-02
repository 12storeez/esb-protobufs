.PHONY: push test go

# Если в .proto файле (хотя бы одном, в случае с директорией) есть текст "annotations.proto", то
# используем для всех протобафов директории скрипт "Генерация клиента и сервера с пакетом annotations.proto"
# если нет, то используем скрипт "Генерация прото"

# Если в .proto файле  (хотя бы одном, в случае с директорией) есть текст "google.api.http", то
# используем скрипт "Генерация прокси"

# Для протофайлов в отдельных директориях:
# Генерируем единый сваггер для нескольких прото файлов, если хотя бы одном файле из директории есть текст "google.api.http"

# Скрипты для protoc указаны в Read.me

# Запушить новую версию protobuf-generator в yandex registry
push:
	cat login.json | docker login --username json_key --password-stdin cr.yandex
	docker build --rm=true -t cr.yandex/crpio465qcfelrmo3fv8/esb-protobufs/protobuf-generator .
	docker push cr.yandex/crpio465qcfelrmo3fv8/esb-protobufs/protobuf-generator

# Собрать и запустить контейнер локально
test:
	docker build --rm=true -f Dockerfile -t protobuf-generator .
	docker run --rm -v $(PWD):/app -w /app protobuf-generator

# Скачать и запустить последнюю версию protobuf-generator из yandex registry || для unix
go-unix:
	cat login.json | docker login --username json_key --password-stdin cr.yandex
	docker run --rm -v $(PWD):/app -w /app cr.yandex/crpio465qcfelrmo3fv8/esb-protobufs/protobuf-generator

# Скачать и запустить последнюю версию protobuf-generator из yandex registry || для windows
go-win:
	type login.json | docker login --username json_key --password-stdin cr.yandex
	docker run --rm -v $(CURDIR):/app -w /app cr.yandex/crpio465qcfelrmo3fv8/esb-protobufs/protobuf-generator

.DEFAULT_GOAL := go-unix
