// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package logistics

import (
	context "context"
	empty "github.com/golang/protobuf/ptypes/empty"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// PaymentMethodServiceClient is the client API for PaymentMethodService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PaymentMethodServiceClient interface {
	List(ctx context.Context, in *ListPaymentMethodRequest, opts ...grpc.CallOption) (*ListPaymentMethodResponse, error)
	Create(ctx context.Context, in *PaymentMethod, opts ...grpc.CallOption) (*PaymentMethod, error)
	Update(ctx context.Context, in *PaymentMethod, opts ...grpc.CallOption) (*PaymentMethod, error)
	Delete(ctx context.Context, in *PaymentMethodId, opts ...grpc.CallOption) (*empty.Empty, error)
}

type paymentMethodServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPaymentMethodServiceClient(cc grpc.ClientConnInterface) PaymentMethodServiceClient {
	return &paymentMethodServiceClient{cc}
}

func (c *paymentMethodServiceClient) List(ctx context.Context, in *ListPaymentMethodRequest, opts ...grpc.CallOption) (*ListPaymentMethodResponse, error) {
	out := new(ListPaymentMethodResponse)
	err := c.cc.Invoke(ctx, "/logistics.PaymentMethodService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentMethodServiceClient) Create(ctx context.Context, in *PaymentMethod, opts ...grpc.CallOption) (*PaymentMethod, error) {
	out := new(PaymentMethod)
	err := c.cc.Invoke(ctx, "/logistics.PaymentMethodService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentMethodServiceClient) Update(ctx context.Context, in *PaymentMethod, opts ...grpc.CallOption) (*PaymentMethod, error) {
	out := new(PaymentMethod)
	err := c.cc.Invoke(ctx, "/logistics.PaymentMethodService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentMethodServiceClient) Delete(ctx context.Context, in *PaymentMethodId, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/logistics.PaymentMethodService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PaymentMethodServiceServer is the server API for PaymentMethodService service.
// All implementations should embed UnimplementedPaymentMethodServiceServer
// for forward compatibility
type PaymentMethodServiceServer interface {
	List(context.Context, *ListPaymentMethodRequest) (*ListPaymentMethodResponse, error)
	Create(context.Context, *PaymentMethod) (*PaymentMethod, error)
	Update(context.Context, *PaymentMethod) (*PaymentMethod, error)
	Delete(context.Context, *PaymentMethodId) (*empty.Empty, error)
}

// UnimplementedPaymentMethodServiceServer should be embedded to have forward compatible implementations.
type UnimplementedPaymentMethodServiceServer struct {
}

func (UnimplementedPaymentMethodServiceServer) List(context.Context, *ListPaymentMethodRequest) (*ListPaymentMethodResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedPaymentMethodServiceServer) Create(context.Context, *PaymentMethod) (*PaymentMethod, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedPaymentMethodServiceServer) Update(context.Context, *PaymentMethod) (*PaymentMethod, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedPaymentMethodServiceServer) Delete(context.Context, *PaymentMethodId) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}

// UnsafePaymentMethodServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PaymentMethodServiceServer will
// result in compilation errors.
type UnsafePaymentMethodServiceServer interface {
	mustEmbedUnimplementedPaymentMethodServiceServer()
}

func RegisterPaymentMethodServiceServer(s grpc.ServiceRegistrar, srv PaymentMethodServiceServer) {
	s.RegisterService(&PaymentMethodService_ServiceDesc, srv)
}

func _PaymentMethodService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPaymentMethodRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentMethodServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.PaymentMethodService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentMethodServiceServer).List(ctx, req.(*ListPaymentMethodRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentMethodService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentMethod)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentMethodServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.PaymentMethodService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentMethodServiceServer).Create(ctx, req.(*PaymentMethod))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentMethodService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentMethod)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentMethodServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.PaymentMethodService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentMethodServiceServer).Update(ctx, req.(*PaymentMethod))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentMethodService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentMethodId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentMethodServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.PaymentMethodService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentMethodServiceServer).Delete(ctx, req.(*PaymentMethodId))
	}
	return interceptor(ctx, in, info, handler)
}

// PaymentMethodService_ServiceDesc is the grpc.ServiceDesc for PaymentMethodService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PaymentMethodService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.PaymentMethodService",
	HandlerType: (*PaymentMethodServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _PaymentMethodService_List_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _PaymentMethodService_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _PaymentMethodService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _PaymentMethodService_Delete_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/logistics/payment_method.proto",
}
