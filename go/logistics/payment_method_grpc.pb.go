// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.9
// source: payment_method.proto

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

const (
	PaymentMethodService_List_FullMethodName    = "/logistics.PaymentMethodService/List"
	PaymentMethodService_Create_FullMethodName  = "/logistics.PaymentMethodService/Create"
	PaymentMethodService_Get_FullMethodName     = "/logistics.PaymentMethodService/Get"
	PaymentMethodService_Update_FullMethodName  = "/logistics.PaymentMethodService/Update"
	PaymentMethodService_Delete_FullMethodName  = "/logistics.PaymentMethodService/Delete"
	PaymentMethodService_Suggest_FullMethodName = "/logistics.PaymentMethodService/Suggest"
)

// PaymentMethodServiceClient is the client API for PaymentMethodService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PaymentMethodServiceClient interface {
	List(ctx context.Context, in *ListPaymentMethodRequest, opts ...grpc.CallOption) (*ListPaymentMethodResponse, error)
	Create(ctx context.Context, in *PaymentMethod, opts ...grpc.CallOption) (*PaymentMethod, error)
	Get(ctx context.Context, in *PaymentMethodId, opts ...grpc.CallOption) (*PaymentMethod, error)
	Update(ctx context.Context, in *PaymentMethod, opts ...grpc.CallOption) (*PaymentMethod, error)
	Delete(ctx context.Context, in *PaymentMethodId, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Suggest(ctx context.Context, in *SuggestPaymentMethodRequest, opts ...grpc.CallOption) (*SuggestPaymentMethodResponse, error)
}

type paymentMethodServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPaymentMethodServiceClient(cc grpc.ClientConnInterface) PaymentMethodServiceClient {
	return &paymentMethodServiceClient{cc}
}

func (c *paymentMethodServiceClient) List(ctx context.Context, in *ListPaymentMethodRequest, opts ...grpc.CallOption) (*ListPaymentMethodResponse, error) {
	out := new(ListPaymentMethodResponse)
	err := c.cc.Invoke(ctx, PaymentMethodService_List_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentMethodServiceClient) Create(ctx context.Context, in *PaymentMethod, opts ...grpc.CallOption) (*PaymentMethod, error) {
	out := new(PaymentMethod)
	err := c.cc.Invoke(ctx, PaymentMethodService_Create_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentMethodServiceClient) Get(ctx context.Context, in *PaymentMethodId, opts ...grpc.CallOption) (*PaymentMethod, error) {
	out := new(PaymentMethod)
	err := c.cc.Invoke(ctx, PaymentMethodService_Get_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentMethodServiceClient) Update(ctx context.Context, in *PaymentMethod, opts ...grpc.CallOption) (*PaymentMethod, error) {
	out := new(PaymentMethod)
	err := c.cc.Invoke(ctx, PaymentMethodService_Update_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentMethodServiceClient) Delete(ctx context.Context, in *PaymentMethodId, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, PaymentMethodService_Delete_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *paymentMethodServiceClient) Suggest(ctx context.Context, in *SuggestPaymentMethodRequest, opts ...grpc.CallOption) (*SuggestPaymentMethodResponse, error) {
	out := new(SuggestPaymentMethodResponse)
	err := c.cc.Invoke(ctx, PaymentMethodService_Suggest_FullMethodName, in, out, opts...)
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
	Get(context.Context, *PaymentMethodId) (*PaymentMethod, error)
	Update(context.Context, *PaymentMethod) (*PaymentMethod, error)
	Delete(context.Context, *PaymentMethodId) (*emptypb.Empty, error)
	Suggest(context.Context, *SuggestPaymentMethodRequest) (*SuggestPaymentMethodResponse, error)
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
func (UnimplementedPaymentMethodServiceServer) Get(context.Context, *PaymentMethodId) (*PaymentMethod, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedPaymentMethodServiceServer) Update(context.Context, *PaymentMethod) (*PaymentMethod, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedPaymentMethodServiceServer) Delete(context.Context, *PaymentMethodId) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedPaymentMethodServiceServer) Suggest(context.Context, *SuggestPaymentMethodRequest) (*SuggestPaymentMethodResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Suggest not implemented")
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
		FullMethod: PaymentMethodService_List_FullMethodName,
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
		FullMethod: PaymentMethodService_Create_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentMethodServiceServer).Create(ctx, req.(*PaymentMethod))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentMethodService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PaymentMethodId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentMethodServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PaymentMethodService_Get_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentMethodServiceServer).Get(ctx, req.(*PaymentMethodId))
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
		FullMethod: PaymentMethodService_Update_FullMethodName,
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
		FullMethod: PaymentMethodService_Delete_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentMethodServiceServer).Delete(ctx, req.(*PaymentMethodId))
	}
	return interceptor(ctx, in, info, handler)
}

func _PaymentMethodService_Suggest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestPaymentMethodRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PaymentMethodServiceServer).Suggest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: PaymentMethodService_Suggest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PaymentMethodServiceServer).Suggest(ctx, req.(*SuggestPaymentMethodRequest))
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
			MethodName: "Get",
			Handler:    _PaymentMethodService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _PaymentMethodService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _PaymentMethodService_Delete_Handler,
		},
		{
			MethodName: "Suggest",
			Handler:    _PaymentMethodService_Suggest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "payment_method.proto",
}
