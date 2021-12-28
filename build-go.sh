#!/usr/bin/env sh

#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/mindbox.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/logistics.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/orders.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/meta.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/payments.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/slack.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/feedbacks.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/mercaux.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/internal/products.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/internal/release_plan.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/internal/stocks.proto
#protoc -I. --micro_out=. --go_out=plugins=grpc:. proto/internal/errors.proto

ls ./proto/logistics/ | xargs -I {} protoc -I ./proto/logistics --grpc-gateway_out=. -I $GOPATH/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@v1.16.0/third_party/googleapis --swagger_out=logtostderr=true:./swagger/logistics ./proto/logistics/{}
ls ./proto/logistics/ | xargs -I {} protoc -I ./proto/logistics -I $GOPATH/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@v1.16.0/third_party/googleapis --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./proto/logistics/{}
ls ./proto/logistics/ | xargs -I {} protoc -I ./proto/logistics --grpc-gateway_out=. -I $GOPATH/pkg/mod/github.com/grpc-ecosystem/grpc-gateway@v1.16.0/third_party/googleapis --grpc-gateway_opt logtostderr=true --grpc-gateway_opt generate_unbound_methods=true ./proto/logistics/{}
