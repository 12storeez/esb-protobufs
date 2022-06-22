// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.18.1
// source: delivery_calendar.proto

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

// DeliveryCalendarServiceClient is the client API for DeliveryCalendarService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DeliveryCalendarServiceClient interface {
	List(ctx context.Context, in *ListDeliveryCalendarRequest, opts ...grpc.CallOption) (*ListDeliveryCalendarResponse, error)
	Create(ctx context.Context, in *CreateDeliveryCalendar, opts ...grpc.CallOption) (*DeliveryCalendar, error)
	Update(ctx context.Context, in *UpdateDeliveryCalendar, opts ...grpc.CallOption) (*DeliveryCalendar, error)
	Get(ctx context.Context, in *DeliveryCalendarId, opts ...grpc.CallOption) (*DeliveryCalendar, error)
	Delete(ctx context.Context, in *DeliveryCalendarId, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type deliveryCalendarServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDeliveryCalendarServiceClient(cc grpc.ClientConnInterface) DeliveryCalendarServiceClient {
	return &deliveryCalendarServiceClient{cc}
}

func (c *deliveryCalendarServiceClient) List(ctx context.Context, in *ListDeliveryCalendarRequest, opts ...grpc.CallOption) (*ListDeliveryCalendarResponse, error) {
	out := new(ListDeliveryCalendarResponse)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryCalendarService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryCalendarServiceClient) Create(ctx context.Context, in *CreateDeliveryCalendar, opts ...grpc.CallOption) (*DeliveryCalendar, error) {
	out := new(DeliveryCalendar)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryCalendarService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryCalendarServiceClient) Update(ctx context.Context, in *UpdateDeliveryCalendar, opts ...grpc.CallOption) (*DeliveryCalendar, error) {
	out := new(DeliveryCalendar)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryCalendarService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryCalendarServiceClient) Get(ctx context.Context, in *DeliveryCalendarId, opts ...grpc.CallOption) (*DeliveryCalendar, error) {
	out := new(DeliveryCalendar)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryCalendarService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *deliveryCalendarServiceClient) Delete(ctx context.Context, in *DeliveryCalendarId, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/logistics.DeliveryCalendarService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DeliveryCalendarServiceServer is the server API for DeliveryCalendarService service.
// All implementations should embed UnimplementedDeliveryCalendarServiceServer
// for forward compatibility
type DeliveryCalendarServiceServer interface {
	List(context.Context, *ListDeliveryCalendarRequest) (*ListDeliveryCalendarResponse, error)
	Create(context.Context, *CreateDeliveryCalendar) (*DeliveryCalendar, error)
	Update(context.Context, *UpdateDeliveryCalendar) (*DeliveryCalendar, error)
	Get(context.Context, *DeliveryCalendarId) (*DeliveryCalendar, error)
	Delete(context.Context, *DeliveryCalendarId) (*emptypb.Empty, error)
}

// UnimplementedDeliveryCalendarServiceServer should be embedded to have forward compatible implementations.
type UnimplementedDeliveryCalendarServiceServer struct {
}

func (UnimplementedDeliveryCalendarServiceServer) List(context.Context, *ListDeliveryCalendarRequest) (*ListDeliveryCalendarResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedDeliveryCalendarServiceServer) Create(context.Context, *CreateDeliveryCalendar) (*DeliveryCalendar, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedDeliveryCalendarServiceServer) Update(context.Context, *UpdateDeliveryCalendar) (*DeliveryCalendar, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedDeliveryCalendarServiceServer) Get(context.Context, *DeliveryCalendarId) (*DeliveryCalendar, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedDeliveryCalendarServiceServer) Delete(context.Context, *DeliveryCalendarId) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}

// UnsafeDeliveryCalendarServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DeliveryCalendarServiceServer will
// result in compilation errors.
type UnsafeDeliveryCalendarServiceServer interface {
	mustEmbedUnimplementedDeliveryCalendarServiceServer()
}

func RegisterDeliveryCalendarServiceServer(s grpc.ServiceRegistrar, srv DeliveryCalendarServiceServer) {
	s.RegisterService(&DeliveryCalendarService_ServiceDesc, srv)
}

func _DeliveryCalendarService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDeliveryCalendarRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryCalendarServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryCalendarService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryCalendarServiceServer).List(ctx, req.(*ListDeliveryCalendarRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryCalendarService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDeliveryCalendar)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryCalendarServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryCalendarService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryCalendarServiceServer).Create(ctx, req.(*CreateDeliveryCalendar))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryCalendarService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDeliveryCalendar)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryCalendarServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryCalendarService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryCalendarServiceServer).Update(ctx, req.(*UpdateDeliveryCalendar))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryCalendarService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryCalendarId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryCalendarServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryCalendarService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryCalendarServiceServer).Get(ctx, req.(*DeliveryCalendarId))
	}
	return interceptor(ctx, in, info, handler)
}

func _DeliveryCalendarService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeliveryCalendarId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DeliveryCalendarServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.DeliveryCalendarService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DeliveryCalendarServiceServer).Delete(ctx, req.(*DeliveryCalendarId))
	}
	return interceptor(ctx, in, info, handler)
}

// DeliveryCalendarService_ServiceDesc is the grpc.ServiceDesc for DeliveryCalendarService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DeliveryCalendarService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.DeliveryCalendarService",
	HandlerType: (*DeliveryCalendarServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _DeliveryCalendarService_List_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _DeliveryCalendarService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _DeliveryCalendarService_Update_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _DeliveryCalendarService_Get_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _DeliveryCalendarService_Delete_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "delivery_calendar.proto",
}
