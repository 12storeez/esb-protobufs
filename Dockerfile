FROM golang:1.18-alpine as builder

RUN apk add --update
RUN apk add --no-cache protoc
RUN apk add protobuf-dev
RUN apk add git
RUN apk add --no-cache --upgrade bash

RUN GO111MODULE=on \
    go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
RUN GO111MODULE=on \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
RUN GO111MODULE=on \
    go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@latest
RUN GO111MODULE=on \
    go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger@latest
RUN GO111MODULE=on \
    go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest

WORKDIR /tmp
RUN git clone --depth 1  https://github.com/googleapis/googleapis

COPY protoc-gen.sh /usr/bin
RUN chmod +x /usr/bin/protoc-gen.sh

WORKDIR /app
ENTRYPOINT [ "protoc-gen.sh" ]
