// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.9
// source: store_delivery_type_pickup.proto

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
	StoreDeliveryTypePickupService_List_FullMethodName    = "/logistics.StoreDeliveryTypePickupService/List"
	StoreDeliveryTypePickupService_Create_FullMethodName  = "/logistics.StoreDeliveryTypePickupService/Create"
	StoreDeliveryTypePickupService_Get_FullMethodName     = "/logistics.StoreDeliveryTypePickupService/Get"
	StoreDeliveryTypePickupService_Update_FullMethodName  = "/logistics.StoreDeliveryTypePickupService/Update"
	StoreDeliveryTypePickupService_Delete_FullMethodName  = "/logistics.StoreDeliveryTypePickupService/Delete"
	StoreDeliveryTypePickupService_Suggest_FullMethodName = "/logistics.StoreDeliveryTypePickupService/Suggest"
)

// StoreDeliveryTypePickupServiceClient is the client API for StoreDeliveryTypePickupService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type StoreDeliveryTypePickupServiceClient interface {
	List(ctx context.Context, in *ListStoreDeliveryTypePickupRequest, opts ...grpc.CallOption) (*ListStoreDeliveryTypePickupResponse, error)
	Create(ctx context.Context, in *CreateStoreDeliveryTypePickup, opts ...grpc.CallOption) (*StoreDeliveryTypePickup, error)
	Get(ctx context.Context, in *StoreDeliveryTypePickupId, opts ...grpc.CallOption) (*StoreDeliveryTypePickup, error)
	Update(ctx context.Context, in *UpdateStoreDeliveryTypePickup, opts ...grpc.CallOption) (*StoreDeliveryTypePickup, error)
	Delete(ctx context.Context, in *StoreDeliveryTypePickupId, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Suggest(ctx context.Context, in *SuggestStoreDeliveryTypePickupRequest, opts ...grpc.CallOption) (*SuggestStoreDeliveryTypePickupResponse, error)
}

type storeDeliveryTypePickupServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewStoreDeliveryTypePickupServiceClient(cc grpc.ClientConnInterface) StoreDeliveryTypePickupServiceClient {
	return &storeDeliveryTypePickupServiceClient{cc}
}

func (c *storeDeliveryTypePickupServiceClient) List(ctx context.Context, in *ListStoreDeliveryTypePickupRequest, opts ...grpc.CallOption) (*ListStoreDeliveryTypePickupResponse, error) {
	out := new(ListStoreDeliveryTypePickupResponse)
	err := c.cc.Invoke(ctx, StoreDeliveryTypePickupService_List_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storeDeliveryTypePickupServiceClient) Create(ctx context.Context, in *CreateStoreDeliveryTypePickup, opts ...grpc.CallOption) (*StoreDeliveryTypePickup, error) {
	out := new(StoreDeliveryTypePickup)
	err := c.cc.Invoke(ctx, StoreDeliveryTypePickupService_Create_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storeDeliveryTypePickupServiceClient) Get(ctx context.Context, in *StoreDeliveryTypePickupId, opts ...grpc.CallOption) (*StoreDeliveryTypePickup, error) {
	out := new(StoreDeliveryTypePickup)
	err := c.cc.Invoke(ctx, StoreDeliveryTypePickupService_Get_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storeDeliveryTypePickupServiceClient) Update(ctx context.Context, in *UpdateStoreDeliveryTypePickup, opts ...grpc.CallOption) (*StoreDeliveryTypePickup, error) {
	out := new(StoreDeliveryTypePickup)
	err := c.cc.Invoke(ctx, StoreDeliveryTypePickupService_Update_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storeDeliveryTypePickupServiceClient) Delete(ctx context.Context, in *StoreDeliveryTypePickupId, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, StoreDeliveryTypePickupService_Delete_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storeDeliveryTypePickupServiceClient) Suggest(ctx context.Context, in *SuggestStoreDeliveryTypePickupRequest, opts ...grpc.CallOption) (*SuggestStoreDeliveryTypePickupResponse, error) {
	out := new(SuggestStoreDeliveryTypePickupResponse)
	err := c.cc.Invoke(ctx, StoreDeliveryTypePickupService_Suggest_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// StoreDeliveryTypePickupServiceServer is the server API for StoreDeliveryTypePickupService service.
// All implementations should embed UnimplementedStoreDeliveryTypePickupServiceServer
// for forward compatibility
type StoreDeliveryTypePickupServiceServer interface {
	List(context.Context, *ListStoreDeliveryTypePickupRequest) (*ListStoreDeliveryTypePickupResponse, error)
	Create(context.Context, *CreateStoreDeliveryTypePickup) (*StoreDeliveryTypePickup, error)
	Get(context.Context, *StoreDeliveryTypePickupId) (*StoreDeliveryTypePickup, error)
	Update(context.Context, *UpdateStoreDeliveryTypePickup) (*StoreDeliveryTypePickup, error)
	Delete(context.Context, *StoreDeliveryTypePickupId) (*emptypb.Empty, error)
	Suggest(context.Context, *SuggestStoreDeliveryTypePickupRequest) (*SuggestStoreDeliveryTypePickupResponse, error)
}

// UnimplementedStoreDeliveryTypePickupServiceServer should be embedded to have forward compatible implementations.
type UnimplementedStoreDeliveryTypePickupServiceServer struct {
}

func (UnimplementedStoreDeliveryTypePickupServiceServer) List(context.Context, *ListStoreDeliveryTypePickupRequest) (*ListStoreDeliveryTypePickupResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedStoreDeliveryTypePickupServiceServer) Create(context.Context, *CreateStoreDeliveryTypePickup) (*StoreDeliveryTypePickup, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedStoreDeliveryTypePickupServiceServer) Get(context.Context, *StoreDeliveryTypePickupId) (*StoreDeliveryTypePickup, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedStoreDeliveryTypePickupServiceServer) Update(context.Context, *UpdateStoreDeliveryTypePickup) (*StoreDeliveryTypePickup, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedStoreDeliveryTypePickupServiceServer) Delete(context.Context, *StoreDeliveryTypePickupId) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedStoreDeliveryTypePickupServiceServer) Suggest(context.Context, *SuggestStoreDeliveryTypePickupRequest) (*SuggestStoreDeliveryTypePickupResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Suggest not implemented")
}

// UnsafeStoreDeliveryTypePickupServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to StoreDeliveryTypePickupServiceServer will
// result in compilation errors.
type UnsafeStoreDeliveryTypePickupServiceServer interface {
	mustEmbedUnimplementedStoreDeliveryTypePickupServiceServer()
}

func RegisterStoreDeliveryTypePickupServiceServer(s grpc.ServiceRegistrar, srv StoreDeliveryTypePickupServiceServer) {
	s.RegisterService(&StoreDeliveryTypePickupService_ServiceDesc, srv)
}

func _StoreDeliveryTypePickupService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListStoreDeliveryTypePickupRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreDeliveryTypePickupServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: StoreDeliveryTypePickupService_List_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreDeliveryTypePickupServiceServer).List(ctx, req.(*ListStoreDeliveryTypePickupRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _StoreDeliveryTypePickupService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateStoreDeliveryTypePickup)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreDeliveryTypePickupServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: StoreDeliveryTypePickupService_Create_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreDeliveryTypePickupServiceServer).Create(ctx, req.(*CreateStoreDeliveryTypePickup))
	}
	return interceptor(ctx, in, info, handler)
}

func _StoreDeliveryTypePickupService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StoreDeliveryTypePickupId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreDeliveryTypePickupServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: StoreDeliveryTypePickupService_Get_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreDeliveryTypePickupServiceServer).Get(ctx, req.(*StoreDeliveryTypePickupId))
	}
	return interceptor(ctx, in, info, handler)
}

func _StoreDeliveryTypePickupService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateStoreDeliveryTypePickup)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreDeliveryTypePickupServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: StoreDeliveryTypePickupService_Update_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreDeliveryTypePickupServiceServer).Update(ctx, req.(*UpdateStoreDeliveryTypePickup))
	}
	return interceptor(ctx, in, info, handler)
}

func _StoreDeliveryTypePickupService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StoreDeliveryTypePickupId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreDeliveryTypePickupServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: StoreDeliveryTypePickupService_Delete_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreDeliveryTypePickupServiceServer).Delete(ctx, req.(*StoreDeliveryTypePickupId))
	}
	return interceptor(ctx, in, info, handler)
}

func _StoreDeliveryTypePickupService_Suggest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestStoreDeliveryTypePickupRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreDeliveryTypePickupServiceServer).Suggest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: StoreDeliveryTypePickupService_Suggest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreDeliveryTypePickupServiceServer).Suggest(ctx, req.(*SuggestStoreDeliveryTypePickupRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// StoreDeliveryTypePickupService_ServiceDesc is the grpc.ServiceDesc for StoreDeliveryTypePickupService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var StoreDeliveryTypePickupService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.StoreDeliveryTypePickupService",
	HandlerType: (*StoreDeliveryTypePickupServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _StoreDeliveryTypePickupService_List_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _StoreDeliveryTypePickupService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _StoreDeliveryTypePickupService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _StoreDeliveryTypePickupService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _StoreDeliveryTypePickupService_Delete_Handler,
		},
		{
			MethodName: "Suggest",
			Handler:    _StoreDeliveryTypePickupService_Suggest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "store_delivery_type_pickup.proto",
}
