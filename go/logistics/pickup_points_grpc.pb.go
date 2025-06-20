// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.9
// source: pickup_points.proto

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
	PickupPointsLogisticsService_PickupList_FullMethodName   = "/logistics.PickupPointsLogisticsService/PickupList"
	PickupPointsLogisticsService_PickupUpdate_FullMethodName = "/logistics.PickupPointsLogisticsService/PickupUpdate"
)

// PickupPointsLogisticsServiceClient is the client API for PickupPointsLogisticsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PickupPointsLogisticsServiceClient interface {
	PickupList(ctx context.Context, in *PickupPointsLogisticsRequest, opts ...grpc.CallOption) (*PickupPointsLogisticsResponse, error)
	PickupUpdate(ctx context.Context, in *PickupPointsLogisticsUpdateRequest, opts ...grpc.CallOption) (*PickupPointLogistics, error)
}

type pickupPointsLogisticsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPickupPointsLogisticsServiceClient(cc grpc.ClientConnInterface) PickupPointsLogisticsServiceClient {
	return &pickupPointsLogisticsServiceClient{cc}
}

func (c *pickupPointsLogisticsServiceClient) PickupList(ctx context.Context, in *PickupPointsLogisticsRequest, opts ...grpc.CallOption) (*PickupPointsLogisticsResponse, error) {
	out := new(PickupPointsLogisticsResponse)
	err := c.cc.Invoke(ctx, PickupPointsLogisticsService_PickupList_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *pickupPointsLogisticsServiceClient) PickupUpdate(ctx context.Context, in *PickupPointsLogisticsUpdateRequest, opts ...grpc.CallOption) (*PickupPointLogistics, error) {
	out := new(PickupPointLogistics)
	err := c.cc.Invoke(ctx, PickupPointsLogisticsService_PickupUpdate_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PickupPointsLogisticsServiceServer is the server API for PickupPointsLogisticsService service.
// All implementations should embed UnimplementedPickupPointsLogisticsServiceServer
// for forward compatibility
type PickupPointsLogisticsServiceServer interface {
	PickupList(context.Context, *PickupPointsLogisticsRequest) (*PickupPointsLogisticsResponse, error)
	PickupUpdate(context.Context, *PickupPointsLogisticsUpdateRequest) (*PickupPointLogistics, error)
}

// UnimplementedPickupPointsLogisticsServiceServer should be embedded to have forward compatible implementations.
type UnimplementedPickupPointsLogisticsServiceServer struct {
}

func (UnimplementedPickupPointsLogisticsServiceServer) PickupList(context.Context, *PickupPointsLogisticsRequest) (*PickupPointsLogisticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PickupList not implemented")
}
func (UnimplementedPickupPointsLogisticsServiceServer) PickupUpdate(context.Context, *PickupPointsLogisticsUpdateRequest) (*PickupPointLogistics, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PickupUpdate not implemented")
}

// UnsafePickupPointsLogisticsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PickupPointsLogisticsServiceServer will
// result in compilation errors.
type UnsafePickupPointsLogisticsServiceServer interface {
	mustEmbedUnimplementedPickupPointsLogisticsServiceServer()
}

func RegisterPickupPointsLogisticsServiceServer(s grpc.ServiceRegistrar, srv PickupPointsLogisticsServiceServer) {
	s.RegisterService(&PickupPointsLogisticsService_ServiceDesc, srv)
}

func _PickupPointsLogisticsService_PickupList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PickupPointsLogisticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PickupPointsLogisticsServiceServer).PickupList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PickupPointsLogisticsService_PickupList_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PickupPointsLogisticsServiceServer).PickupList(ctx, req.(*PickupPointsLogisticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PickupPointsLogisticsService_PickupUpdate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PickupPointsLogisticsUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PickupPointsLogisticsServiceServer).PickupUpdate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PickupPointsLogisticsService_PickupUpdate_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PickupPointsLogisticsServiceServer).PickupUpdate(ctx, req.(*PickupPointsLogisticsUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PickupPointsLogisticsService_ServiceDesc is the grpc.ServiceDesc for PickupPointsLogisticsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PickupPointsLogisticsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.PickupPointsLogisticsService",
	HandlerType: (*PickupPointsLogisticsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "PickupList",
			Handler:    _PickupPointsLogisticsService_PickupList_Handler,
		},
		{
			MethodName: "PickupUpdate",
			Handler:    _PickupPointsLogisticsService_PickupUpdate_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pickup_points.proto",
}
