// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.18.1
// source: delivery_method.proto

package logistics

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

// DeliveryMethodServiceClient is the client API for DeliveryMethodService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DeliveryMethodServiceClient interface {
	List(ctx context.Context, in *ListDeliveryMethodRequest, opts ...grpc.CallOption) (*ListDeliveryMethodResponse, error)
	Create(ctx context.Context, in *DeliveryMethod, opts ...grpc.CallOption) (*DeliveryMethod, error)
	Get(ctx context.Context, in *DeliveryMethodId, opts ...grpc.CallOption) (*DeliveryMethod, error)
	Update(ctx context.Context, in *DeliveryMethod, opts ...grpc.CallOption) (*DeliveryMethod, error)
	Delete(ctx context.Context, in *DeliveryMethodId, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type deliveryMethodServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDeliveryMethodServiceClient(cc grpc.ClientConnInterface) DeliveryMethodServiceClient {
	return &deliveryMethodServiceClient{cc}
}

func (c *deliveryMethodServiceClient) List(ctx context.Context, in *ListDeliveryMethodRequest, opts ...grpc.CallOption) (*ListDeliveryMethodResponse, error) {
	out := new(ListDeliveryMethodResponse)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryMethodService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryMethodServiceClient) Create(ctx context.Context, in *DeliveryMethod, opts ...grpc.CallOption) (*DeliveryMethod, error) {
	out := new(DeliveryMethod)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryMethodService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryMethodServiceClient) Get(ctx context.Context, in *DeliveryMethodId, opts ...grpc.CallOption) (*DeliveryMethod, error) {
	out := new(DeliveryMethod)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryMethodService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryMethodServiceClient) Update(ctx context.Context, in *DeliveryMethod, opts ...grpc.CallOption) (*DeliveryMethod, error) {
	out := new(DeliveryMethod)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryMethodService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryMethodServiceClient) Delete(ctx context.Context, in *DeliveryMethodId, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryMethodService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DeliveryMethodServiceServer is the server API for DeliveryMethodService service.
// All implementations should embed UnimplementedDeliveryMethodServiceServer
// for forward compatibility
type DeliveryMethodServiceServer interface {
	List(context.Context, *ListDeliveryMethodRequest) (*ListDeliveryMethodResponse, error)
	Create(context.Context, *DeliveryMethod) (*DeliveryMethod, error)
	Get(context.Context, *DeliveryMethodId) (*DeliveryMethod, error)
	Update(context.Context, *DeliveryMethod) (*DeliveryMethod, error)
	Delete(context.Context, *DeliveryMethodId) (*emptypb.Empty, error)
}

// UnimplementedDeliveryMethodServiceServer should be embedded to have forward compatible implementations.
type UnimplementedDeliveryMethodServiceServer struct {
}

func (UnimplementedDeliveryMethodServiceServer) List(context.Context, *ListDeliveryMethodRequest) (*ListDeliveryMethodResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedDeliveryMethodServiceServer) Create(context.Context, *DeliveryMethod) (*DeliveryMethod, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedDeliveryMethodServiceServer) Get(context.Context, *DeliveryMethodId) (*DeliveryMethod, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedDeliveryMethodServiceServer) Update(context.Context, *DeliveryMethod) (*DeliveryMethod, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedDeliveryMethodServiceServer) Delete(context.Context, *DeliveryMethodId) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}

// UnsafeDeliveryMethodServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DeliveryMethodServiceServer will
// result in compilation errors.
type UnsafeDeliveryMethodServiceServer interface {
	mustEmbedUnimplementedDeliveryMethodServiceServer()
}

func RegisterDeliveryMethodServiceServer(s grpc.ServiceRegistrar, srv DeliveryMethodServiceServer) {
	s.RegisterService(&DeliveryMethodService_ServiceDesc, srv)
}

func _DeliveryMethodService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDeliveryMethodRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryMethodServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryMethodService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryMethodServiceServer).List(ctx, req.(*ListDeliveryMethodRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryMethodService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryMethod)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryMethodServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryMethodService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryMethodServiceServer).Create(ctx, req.(*DeliveryMethod))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryMethodService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryMethodId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryMethodServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryMethodService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryMethodServiceServer).Get(ctx, req.(*DeliveryMethodId))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryMethodService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryMethod)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryMethodServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryMethodService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryMethodServiceServer).Update(ctx, req.(*DeliveryMethod))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryMethodService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryMethodId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryMethodServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryMethodService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryMethodServiceServer).Delete(ctx, req.(*DeliveryMethodId))
	}
	return interceptor(ctx, in, info, handler)
}

// DeliveryMethodService_ServiceDesc is the grpc.ServiceDesc for DeliveryMethodService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DeliveryMethodService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.DeliveryMethodService",
	HandlerType: (*DeliveryMethodServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _DeliveryMethodService_List_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _DeliveryMethodService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _DeliveryMethodService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _DeliveryMethodService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _DeliveryMethodService_Delete_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "delivery_method.proto",
}
