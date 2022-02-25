// Code generated by protoc-gen-grpc-gateway. DO NOT EDIT.
// source: winner.proto

/*
Package logistics is a reverse proxy.

It translates gRPC into RESTful JSON APIs.
*/
package logistics

import (
	"context"
	"io"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"github.com/grpc-ecosystem/grpc-gateway/v2/utilities"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
)

// Suppress "imported and not used" errors
var _ codes.Code
var _ io.Reader
var _ status.Status
var _ = runtime.String
var _ = utilities.NewDoubleArray
var _ = metadata.Join

var (
	filter_WinnerService_CalculateWinner_0 = &utilities.DoubleArray{Encoding: map[string]int{}, Base: []int(nil), Check: []int(nil)}
)

func request_WinnerService_CalculateWinner_0(ctx context.Context, marshaler runtime.Marshaler, client WinnerServiceClient, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq WinnerRequest
	var metadata runtime.ServerMetadata

	if err := req.ParseForm(); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}
	if err := runtime.PopulateQueryParameters(&protoReq, req.Form, filter_WinnerService_CalculateWinner_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := client.CalculateWinner(ctx, &protoReq, grpc.Header(&metadata.HeaderMD), grpc.Trailer(&metadata.TrailerMD))
	return msg, metadata, err

}

func local_request_WinnerService_CalculateWinner_0(ctx context.Context, marshaler runtime.Marshaler, server WinnerServiceServer, req *http.Request, pathParams map[string]string) (proto.Message, runtime.ServerMetadata, error) {
	var protoReq WinnerRequest
	var metadata runtime.ServerMetadata

	if err := req.ParseForm(); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}
	if err := runtime.PopulateQueryParameters(&protoReq, req.Form, filter_WinnerService_CalculateWinner_0); err != nil {
		return nil, metadata, status.Errorf(codes.InvalidArgument, "%v", err)
	}

	msg, err := server.CalculateWinner(ctx, &protoReq)
	return msg, metadata, err

}

// RegisterWinnerServiceHandlerServer registers the http handlers for service WinnerService to "mux".
// UnaryRPC     :call WinnerServiceServer directly.
// StreamingRPC :currently unsupported pending https://github.com/grpc/grpc-go/issues/906.
// Note that using this registration option will cause many gRPC library features to stop working. Consider using RegisterWinnerServiceHandlerFromEndpoint instead.
func RegisterWinnerServiceHandlerServer(ctx context.Context, mux *runtime.ServeMux, server WinnerServiceServer) error {

	mux.Handle("GET", pattern_WinnerService_CalculateWinner_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		var stream runtime.ServerTransportStream
		ctx = grpc.NewContextWithServerTransportStream(ctx, &stream)
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateIncomingContext(ctx, mux, req, "/logistics.WinnerService/CalculateWinner", runtime.WithHTTPPathPattern("/api/v1/winner/calculate"))
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := local_request_WinnerService_CalculateWinner_0(rctx, inboundMarshaler, server, req, pathParams)
		md.HeaderMD, md.TrailerMD = metadata.Join(md.HeaderMD, stream.Header()), metadata.Join(md.TrailerMD, stream.Trailer())
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_WinnerService_CalculateWinner_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

// RegisterWinnerServiceHandlerFromEndpoint is same as RegisterWinnerServiceHandler but
// automatically dials to "endpoint" and closes the connection when "ctx" gets done.
func RegisterWinnerServiceHandlerFromEndpoint(ctx context.Context, mux *runtime.ServeMux, endpoint string, opts []grpc.DialOption) (err error) {
	conn, err := grpc.Dial(endpoint, opts...)
	if err != nil {
		return err
	}
	defer func() {
		if err != nil {
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
			return
		}
		go func() {
			<-ctx.Done()
			if cerr := conn.Close(); cerr != nil {
				grpclog.Infof("Failed to close conn to %s: %v", endpoint, cerr)
			}
		}()
	}()

	return RegisterWinnerServiceHandler(ctx, mux, conn)
}

// RegisterWinnerServiceHandler registers the http handlers for service WinnerService to "mux".
// The handlers forward requests to the grpc endpoint over "conn".
func RegisterWinnerServiceHandler(ctx context.Context, mux *runtime.ServeMux, conn *grpc.ClientConn) error {
	return RegisterWinnerServiceHandlerClient(ctx, mux, NewWinnerServiceClient(conn))
}

// RegisterWinnerServiceHandlerClient registers the http handlers for service WinnerService
// to "mux". The handlers forward requests to the grpc endpoint over the given implementation of "WinnerServiceClient".
// Note: the gRPC framework executes interceptors within the gRPC handler. If the passed in "WinnerServiceClient"
// doesn't go through the normal gRPC flow (creating a gRPC client etc.) then it will be up to the passed in
// "WinnerServiceClient" to call the correct interceptors.
func RegisterWinnerServiceHandlerClient(ctx context.Context, mux *runtime.ServeMux, client WinnerServiceClient) error {

	mux.Handle("GET", pattern_WinnerService_CalculateWinner_0, func(w http.ResponseWriter, req *http.Request, pathParams map[string]string) {
		ctx, cancel := context.WithCancel(req.Context())
		defer cancel()
		inboundMarshaler, outboundMarshaler := runtime.MarshalerForRequest(mux, req)
		rctx, err := runtime.AnnotateContext(ctx, mux, req, "/logistics.WinnerService/CalculateWinner", runtime.WithHTTPPathPattern("/api/v1/winner/calculate"))
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}
		resp, md, err := request_WinnerService_CalculateWinner_0(rctx, inboundMarshaler, client, req, pathParams)
		ctx = runtime.NewServerMetadataContext(ctx, md)
		if err != nil {
			runtime.HTTPError(ctx, mux, outboundMarshaler, w, req, err)
			return
		}

		forward_WinnerService_CalculateWinner_0(ctx, mux, outboundMarshaler, w, req, resp, mux.GetForwardResponseOptions()...)

	})

	return nil
}

var (
	pattern_WinnerService_CalculateWinner_0 = runtime.MustPattern(runtime.NewPattern(1, []int{2, 0, 2, 1, 2, 2, 2, 3}, []string{"api", "v1", "winner", "calculate"}, ""))
)

var (
	forward_WinnerService_CalculateWinner_0 = runtime.ForwardResponseMessage
)
