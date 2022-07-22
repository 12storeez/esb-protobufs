// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.18.1
// source: status.proto

package feedbacks

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// FeedbacksStatusesServiceClient is the client API for FeedbacksStatusesService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FeedbacksStatusesServiceClient interface {
	List(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ListStatusResponse, error)
}

type feedbacksStatusesServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFeedbacksStatusesServiceClient(cc grpc.ClientConnInterface) FeedbacksStatusesServiceClient {
	return &feedbacksStatusesServiceClient{cc}
}

func (c *feedbacksStatusesServiceClient) List(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ListStatusResponse, error) {
	out := new(ListStatusResponse)
	err := c.cc.Invoke(ctx, "/feedbacks.FeedbacksStatusesService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FeedbacksStatusesServiceServer is the server API for FeedbacksStatusesService service.
// All implementations should embed UnimplementedFeedbacksStatusesServiceServer
// for forward compatibility
type FeedbacksStatusesServiceServer interface {
	List(context.Context, *emptypb.Empty) (*ListStatusResponse, error)
}

// UnimplementedFeedbacksStatusesServiceServer should be embedded to have forward compatible implementations.
type UnimplementedFeedbacksStatusesServiceServer struct {
}

func (UnimplementedFeedbacksStatusesServiceServer) List(context.Context, *emptypb.Empty) (*ListStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}

// UnsafeFeedbacksStatusesServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FeedbacksStatusesServiceServer will
// result in compilation errors.
type UnsafeFeedbacksStatusesServiceServer interface {
	mustEmbedUnimplementedFeedbacksStatusesServiceServer()
}

func RegisterFeedbacksStatusesServiceServer(s grpc.ServiceRegistrar, srv FeedbacksStatusesServiceServer) {
	s.RegisterService(&FeedbacksStatusesService_ServiceDesc, srv)
}

func _FeedbacksStatusesService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeedbacksStatusesServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.FeedbacksStatusesService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeedbacksStatusesServiceServer).List(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// FeedbacksStatusesService_ServiceDesc is the grpc.ServiceDesc for FeedbacksStatusesService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FeedbacksStatusesService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "feedbacks.FeedbacksStatusesService",
	HandlerType: (*FeedbacksStatusesServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _FeedbacksStatusesService_List_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "status.proto",
}
