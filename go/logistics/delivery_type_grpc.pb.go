// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.18.1
// source: delivery_type.proto

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

// DeliveryTypeServiceClient is the client API for DeliveryTypeService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DeliveryTypeServiceClient interface {
	List(ctx context.Context, in *ListDeliveryTypeRequest, opts ...grpc.CallOption) (*ListDeliveryTypeResponse, error)
	Create(ctx context.Context, in *CreateDeliveryTypeRequest, opts ...grpc.CallOption) (*DeliveryTypeShort, error)
	Get(ctx context.Context, in *DeliveryTypeId, opts ...grpc.CallOption) (*DeliveryType, error)
	Delete(ctx context.Context, in *DeliveryTypeId, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Update(ctx context.Context, in *UpdateDeliveryType, opts ...grpc.CallOption) (*DeliveryType, error)
}

type deliveryTypeServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDeliveryTypeServiceClient(cc grpc.ClientConnInterface) DeliveryTypeServiceClient {
	return &deliveryTypeServiceClient{cc}
}

func (c *deliveryTypeServiceClient) List(ctx context.Context, in *ListDeliveryTypeRequest, opts ...grpc.CallOption) (*ListDeliveryTypeResponse, error) {
	out := new(ListDeliveryTypeResponse)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryTypeService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryTypeServiceClient) Create(ctx context.Context, in *CreateDeliveryTypeRequest, opts ...grpc.CallOption) (*DeliveryTypeShort, error) {
	out := new(DeliveryTypeShort)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryTypeService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryTypeServiceClient) Get(ctx context.Context, in *DeliveryTypeId, opts ...grpc.CallOption) (*DeliveryType, error) {
	out := new(DeliveryType)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryTypeService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryTypeServiceClient) Delete(ctx context.Context, in *DeliveryTypeId, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryTypeService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryTypeServiceClient) Update(ctx context.Context, in *UpdateDeliveryType, opts ...grpc.CallOption) (*DeliveryType, error) {
	out := new(DeliveryType)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryTypeService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DeliveryTypeServiceServer is the server API for DeliveryTypeService service.
// All implementations should embed UnimplementedDeliveryTypeServiceServer
// for forward compatibility
type DeliveryTypeServiceServer interface {
	List(context.Context, *ListDeliveryTypeRequest) (*ListDeliveryTypeResponse, error)
	Create(context.Context, *CreateDeliveryTypeRequest) (*DeliveryTypeShort, error)
	Get(context.Context, *DeliveryTypeId) (*DeliveryType, error)
	Delete(context.Context, *DeliveryTypeId) (*emptypb.Empty, error)
	Update(context.Context, *UpdateDeliveryType) (*DeliveryType, error)
}

// UnimplementedDeliveryTypeServiceServer should be embedded to have forward compatible implementations.
type UnimplementedDeliveryTypeServiceServer struct {
}

func (UnimplementedDeliveryTypeServiceServer) List(context.Context, *ListDeliveryTypeRequest) (*ListDeliveryTypeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedDeliveryTypeServiceServer) Create(context.Context, *CreateDeliveryTypeRequest) (*DeliveryTypeShort, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedDeliveryTypeServiceServer) Get(context.Context, *DeliveryTypeId) (*DeliveryType, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedDeliveryTypeServiceServer) Delete(context.Context, *DeliveryTypeId) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedDeliveryTypeServiceServer) Update(context.Context, *UpdateDeliveryType) (*DeliveryType, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}

// UnsafeDeliveryTypeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DeliveryTypeServiceServer will
// result in compilation errors.
type UnsafeDeliveryTypeServiceServer interface {
	mustEmbedUnimplementedDeliveryTypeServiceServer()
}

func RegisterDeliveryTypeServiceServer(s grpc.ServiceRegistrar, srv DeliveryTypeServiceServer) {
	s.RegisterService(&DeliveryTypeService_ServiceDesc, srv)
}

func _DeliveryTypeService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDeliveryTypeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryTypeServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryTypeService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryTypeServiceServer).List(ctx, req.(*ListDeliveryTypeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryTypeService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDeliveryTypeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryTypeServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryTypeService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryTypeServiceServer).Create(ctx, req.(*CreateDeliveryTypeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryTypeService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryTypeId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryTypeServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryTypeService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryTypeServiceServer).Get(ctx, req.(*DeliveryTypeId))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryTypeService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryTypeId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryTypeServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryTypeService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryTypeServiceServer).Delete(ctx, req.(*DeliveryTypeId))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryTypeService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDeliveryType)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryTypeServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryTypeService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryTypeServiceServer).Update(ctx, req.(*UpdateDeliveryType))
	}
	return interceptor(ctx, in, info, handler)
}

// DeliveryTypeService_ServiceDesc is the grpc.ServiceDesc for DeliveryTypeService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DeliveryTypeService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.DeliveryTypeService",
	HandlerType: (*DeliveryTypeServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _DeliveryTypeService_List_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _DeliveryTypeService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _DeliveryTypeService_Get_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _DeliveryTypeService_Delete_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _DeliveryTypeService_Update_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "delivery_type.proto",
}
