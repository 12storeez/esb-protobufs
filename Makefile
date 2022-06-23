.PHONY: push test go
# Тут необходимо указать путь до репозитория esb-protobufs
PWD = ~/go/src/esb-protobufs

# Если в директории swagger есть папка соответствующая папке протобафа, то файл swagger сгенерируется, если нет, то нет.
# Например, чтобы сгенерировать файл для сервиса нотификаций, нужно создать директорию  swagger/notifications.
# Иначе будут ошибки вида: "./swagger/*: No such file or directory". Если swagger не нужен, то не обращаем внимание.

# Если в .proto файле (хотя бы одном, в случае с директорией) есть текст "annotations.proto", то
# используем для всех протобафов директории скрипт "Генерация клиента и сервера с пакетом annotations.proto"
# если нет, то используем скрипт "Генерация прото"

# Если в .proto файле  (хотя бы одном, в случае с директорией) есть текст "google.api.http", то
# используем скрипт "Генерация прокси"

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

# Скачать и запустить последнюю версию protobuf-generator из yandex registry
go:
	docker run --rm -v $(PWD):/app -w /app cr.yandex/crpio465qcfelrmo3fv8/esb-protobufs/protobuf-generator

.DEFAULT_GOAL := go
