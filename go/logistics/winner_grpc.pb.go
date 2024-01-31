// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.9
// source: winner.proto

package logistics

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	WinnerService_Calculate_FullMethodName = "/logistics.WinnerService/Calculate"
	WinnerService_Intervals_FullMethodName = "/logistics.WinnerService/Intervals"
)

// WinnerServiceClient is the client API for WinnerService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type WinnerServiceClient interface {
	Calculate(ctx context.Context, in *CalculateRequest, opts ...grpc.CallOption) (*CalculateResponse, error)
	Intervals(ctx context.Context, in *IntervalsRequest, opts ...grpc.CallOption) (*IntervalsResponse, error)
}

type winnerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewWinnerServiceClient(cc grpc.ClientConnInterface) WinnerServiceClient {
	return &winnerServiceClient{cc}
}

func (c *winnerServiceClient) Calculate(ctx context.Context, in *CalculateRequest, opts ...grpc.CallOption) (*CalculateResponse, error) {
	out := new(CalculateResponse)
	err := c.cc.Invoke(ctx, WinnerService_Calculate_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *winnerServiceClient) Intervals(ctx context.Context, in *IntervalsRequest, opts ...grpc.CallOption) (*IntervalsResponse, error) {
	out := new(IntervalsResponse)
	err := c.cc.Invoke(ctx, WinnerService_Intervals_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// WinnerServiceServer is the server API for WinnerService service.
// All implementations should embed UnimplementedWinnerServiceServer
// for forward compatibility
type WinnerServiceServer interface {
	Calculate(context.Context, *CalculateRequest) (*CalculateResponse, error)
	Intervals(context.Context, *IntervalsRequest) (*IntervalsResponse, error)
}

// UnimplementedWinnerServiceServer should be embedded to have forward compatible implementations.
type UnimplementedWinnerServiceServer struct {
}

func (UnimplementedWinnerServiceServer) Calculate(context.Context, *CalculateRequest) (*CalculateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Calculate not implemented")
}
func (UnimplementedWinnerServiceServer) Intervals(context.Context, *IntervalsRequest) (*IntervalsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Intervals not implemented")
}

// UnsafeWinnerServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to WinnerServiceServer will
// result in compilation errors.
type UnsafeWinnerServiceServer interface {
	mustEmbedUnimplementedWinnerServiceServer()
}

func RegisterWinnerServiceServer(s grpc.ServiceRegistrar, srv WinnerServiceServer) {
	s.RegisterService(&WinnerService_ServiceDesc, srv)
}

func _WinnerService_Calculate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CalculateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WinnerServiceServer).Calculate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: WinnerService_Calculate_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WinnerServiceServer).Calculate(ctx, req.(*CalculateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WinnerService_Intervals_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IntervalsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WinnerServiceServer).Intervals(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: WinnerService_Intervals_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WinnerServiceServer).Intervals(ctx, req.(*IntervalsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// WinnerService_ServiceDesc is the grpc.ServiceDesc for WinnerService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var WinnerService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.WinnerService",
	HandlerType: (*WinnerServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Calculate",
			Handler:    _WinnerService_Calculate_Handler,
		},
		{
			MethodName: "Intervals",
			Handler:    _WinnerService_Intervals_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "winner.proto",
}
