// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.18.1
// source: proto/feedbacks.proto

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

// MobileClient is the client API for Mobile service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MobileClient interface {
	App(ctx context.Context, in *ParamsApp, opts ...grpc.CallOption) (*ResponseOk, error)
	Store(ctx context.Context, in *ParamsStore, opts ...grpc.CallOption) (*ResponseOk, error)
	Order(ctx context.Context, in *ParamsOrder, opts ...grpc.CallOption) (*ResponseOk, error)
	Categories(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ResponseCategories, error)
	ReasonsByOrder(ctx context.Context, in *ParamsReasonsByOrder, opts ...grpc.CallOption) (*ResponseReasons, error)
	ReasonsByStore(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ResponseReasons, error)
	CanBeSaved(ctx context.Context, in *CanBeSavedParams, opts ...grpc.CallOption) (*ResponseOk, error)
}

type mobileClient struct {
	cc grpc.ClientConnInterface
}

func NewMobileClient(cc grpc.ClientConnInterface) MobileClient {
	return &mobileClient{cc}
}

func (c *mobileClient) App(ctx context.Context, in *ParamsApp, opts ...grpc.CallOption) (*ResponseOk, error) {
	out := new(ResponseOk)
	err := c.cc.Invoke(ctx, "/feedbacks.Mobile/App", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) Store(ctx context.Context, in *ParamsStore, opts ...grpc.CallOption) (*ResponseOk, error) {
	out := new(ResponseOk)
	err := c.cc.Invoke(ctx, "/feedbacks.Mobile/Store", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) Order(ctx context.Context, in *ParamsOrder, opts ...grpc.CallOption) (*ResponseOk, error) {
	out := new(ResponseOk)
	err := c.cc.Invoke(ctx, "/feedbacks.Mobile/Order", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) Categories(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ResponseCategories, error) {
	out := new(ResponseCategories)
	err := c.cc.Invoke(ctx, "/feedbacks.Mobile/Categories", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) ReasonsByOrder(ctx context.Context, in *ParamsReasonsByOrder, opts ...grpc.CallOption) (*ResponseReasons, error) {
	out := new(ResponseReasons)
	err := c.cc.Invoke(ctx, "/feedbacks.Mobile/ReasonsByOrder", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) ReasonsByStore(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ResponseReasons, error) {
	out := new(ResponseReasons)
	err := c.cc.Invoke(ctx, "/feedbacks.Mobile/ReasonsByStore", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) CanBeSaved(ctx context.Context, in *CanBeSavedParams, opts ...grpc.CallOption) (*ResponseOk, error) {
	out := new(ResponseOk)
	err := c.cc.Invoke(ctx, "/feedbacks.Mobile/CanBeSaved", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MobileServer is the server API for Mobile service.
// All implementations should embed UnimplementedMobileServer
// for forward compatibility
type MobileServer interface {
	App(context.Context, *ParamsApp) (*ResponseOk, error)
	Store(context.Context, *ParamsStore) (*ResponseOk, error)
	Order(context.Context, *ParamsOrder) (*ResponseOk, error)
	Categories(context.Context, *emptypb.Empty) (*ResponseCategories, error)
	ReasonsByOrder(context.Context, *ParamsReasonsByOrder) (*ResponseReasons, error)
	ReasonsByStore(context.Context, *emptypb.Empty) (*ResponseReasons, error)
	CanBeSaved(context.Context, *CanBeSavedParams) (*ResponseOk, error)
}

// UnimplementedMobileServer should be embedded to have forward compatible implementations.
type UnimplementedMobileServer struct {
}

func (UnimplementedMobileServer) App(context.Context, *ParamsApp) (*ResponseOk, error) {
	return nil, status.Errorf(codes.Unimplemented, "method App not implemented")
}
func (UnimplementedMobileServer) Store(context.Context, *ParamsStore) (*ResponseOk, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Store not implemented")
}
func (UnimplementedMobileServer) Order(context.Context, *ParamsOrder) (*ResponseOk, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Order not implemented")
}
func (UnimplementedMobileServer) Categories(context.Context, *emptypb.Empty) (*ResponseCategories, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Categories not implemented")
}
func (UnimplementedMobileServer) ReasonsByOrder(context.Context, *ParamsReasonsByOrder) (*ResponseReasons, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReasonsByOrder not implemented")
}
func (UnimplementedMobileServer) ReasonsByStore(context.Context, *emptypb.Empty) (*ResponseReasons, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReasonsByStore not implemented")
}
func (UnimplementedMobileServer) CanBeSaved(context.Context, *CanBeSavedParams) (*ResponseOk, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CanBeSaved not implemented")
}

// UnsafeMobileServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MobileServer will
// result in compilation errors.
type UnsafeMobileServer interface {
	mustEmbedUnimplementedMobileServer()
}

func RegisterMobileServer(s grpc.ServiceRegistrar, srv MobileServer) {
	s.RegisterService(&Mobile_ServiceDesc, srv)
}

func _Mobile_App_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ParamsApp)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).App(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Mobile/App",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).App(ctx, req.(*ParamsApp))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_Store_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ParamsStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).Store(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Mobile/Store",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).Store(ctx, req.(*ParamsStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_Order_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ParamsOrder)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).Order(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Mobile/Order",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).Order(ctx, req.(*ParamsOrder))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_Categories_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).Categories(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Mobile/Categories",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).Categories(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_ReasonsByOrder_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ParamsReasonsByOrder)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).ReasonsByOrder(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Mobile/ReasonsByOrder",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).ReasonsByOrder(ctx, req.(*ParamsReasonsByOrder))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_ReasonsByStore_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).ReasonsByStore(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Mobile/ReasonsByStore",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).ReasonsByStore(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_CanBeSaved_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CanBeSavedParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).CanBeSaved(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Mobile/CanBeSaved",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).CanBeSaved(ctx, req.(*CanBeSavedParams))
	}
	return interceptor(ctx, in, info, handler)
}

// Mobile_ServiceDesc is the grpc.ServiceDesc for Mobile service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Mobile_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "feedbacks.Mobile",
	HandlerType: (*MobileServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "App",
			Handler:    _Mobile_App_Handler,
		},
		{
			MethodName: "Store",
			Handler:    _Mobile_Store_Handler,
		},
		{
			MethodName: "Order",
			Handler:    _Mobile_Order_Handler,
		},
		{
			MethodName: "Categories",
			Handler:    _Mobile_Categories_Handler,
		},
		{
			MethodName: "ReasonsByOrder",
			Handler:    _Mobile_ReasonsByOrder_Handler,
		},
		{
			MethodName: "ReasonsByStore",
			Handler:    _Mobile_ReasonsByStore_Handler,
		},
		{
			MethodName: "CanBeSaved",
			Handler:    _Mobile_CanBeSaved_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/feedbacks.proto",
}

// StoreClient is the client API for Store service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type StoreClient interface {
	New(ctx context.Context, in *NewParams, opts ...grpc.CallOption) (*NewResponse, error)
	Patch(ctx context.Context, in *PatchParams, opts ...grpc.CallOption) (*ResponseOk, error)
	NewOrder(ctx context.Context, in *NewOrderParams, opts ...grpc.CallOption) (*NewOrderResponse, error)
	PatchOrder(ctx context.Context, in *PatchOrderParams, opts ...grpc.CallOption) (*ResponseOk, error)
}

type storeClient struct {
	cc grpc.ClientConnInterface
}

func NewStoreClient(cc grpc.ClientConnInterface) StoreClient {
	return &storeClient{cc}
}

func (c *storeClient) New(ctx context.Context, in *NewParams, opts ...grpc.CallOption) (*NewResponse, error) {
	out := new(NewResponse)
	err := c.cc.Invoke(ctx, "/feedbacks.Store/New", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storeClient) Patch(ctx context.Context, in *PatchParams, opts ...grpc.CallOption) (*ResponseOk, error) {
	out := new(ResponseOk)
	err := c.cc.Invoke(ctx, "/feedbacks.Store/Patch", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storeClient) NewOrder(ctx context.Context, in *NewOrderParams, opts ...grpc.CallOption) (*NewOrderResponse, error) {
	out := new(NewOrderResponse)
	err := c.cc.Invoke(ctx, "/feedbacks.Store/NewOrder", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storeClient) PatchOrder(ctx context.Context, in *PatchOrderParams, opts ...grpc.CallOption) (*ResponseOk, error) {
	out := new(ResponseOk)
	err := c.cc.Invoke(ctx, "/feedbacks.Store/PatchOrder", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// StoreServer is the server API for Store service.
// All implementations should embed UnimplementedStoreServer
// for forward compatibility
type StoreServer interface {
	New(context.Context, *NewParams) (*NewResponse, error)
	Patch(context.Context, *PatchParams) (*ResponseOk, error)
	NewOrder(context.Context, *NewOrderParams) (*NewOrderResponse, error)
	PatchOrder(context.Context, *PatchOrderParams) (*ResponseOk, error)
}

// UnimplementedStoreServer should be embedded to have forward compatible implementations.
type UnimplementedStoreServer struct {
}

func (UnimplementedStoreServer) New(context.Context, *NewParams) (*NewResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method New not implemented")
}
func (UnimplementedStoreServer) Patch(context.Context, *PatchParams) (*ResponseOk, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Patch not implemented")
}
func (UnimplementedStoreServer) NewOrder(context.Context, *NewOrderParams) (*NewOrderResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method NewOrder not implemented")
}
func (UnimplementedStoreServer) PatchOrder(context.Context, *PatchOrderParams) (*ResponseOk, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PatchOrder not implemented")
}

// UnsafeStoreServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to StoreServer will
// result in compilation errors.
type UnsafeStoreServer interface {
	mustEmbedUnimplementedStoreServer()
}

func RegisterStoreServer(s grpc.ServiceRegistrar, srv StoreServer) {
	s.RegisterService(&Store_ServiceDesc, srv)
}

func _Store_New_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NewParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreServer).New(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Store/New",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreServer).New(ctx, req.(*NewParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Store_Patch_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PatchParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreServer).Patch(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Store/Patch",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreServer).Patch(ctx, req.(*PatchParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Store_NewOrder_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NewOrderParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreServer).NewOrder(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Store/NewOrder",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreServer).NewOrder(ctx, req.(*NewOrderParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Store_PatchOrder_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PatchOrderParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoreServer).PatchOrder(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.Store/PatchOrder",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoreServer).PatchOrder(ctx, req.(*PatchOrderParams))
	}
	return interceptor(ctx, in, info, handler)
}

// Store_ServiceDesc is the grpc.ServiceDesc for Store service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Store_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "feedbacks.Store",
	HandlerType: (*StoreServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "New",
			Handler:    _Store_New_Handler,
		},
		{
			MethodName: "Patch",
			Handler:    _Store_Patch_Handler,
		},
		{
			MethodName: "NewOrder",
			Handler:    _Store_NewOrder_Handler,
		},
		{
			MethodName: "PatchOrder",
			Handler:    _Store_PatchOrder_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/feedbacks.proto",
}

// NPSClient is the client API for NPS service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NPSClient interface {
	New(ctx context.Context, in *NewNPSParams, opts ...grpc.CallOption) (*NewNpsResponse, error)
	Update(ctx context.Context, in *UpdateNPSParams, opts ...grpc.CallOption) (*ResponseOk, error)
}

type nPSClient struct {
	cc grpc.ClientConnInterface
}

func NewNPSClient(cc grpc.ClientConnInterface) NPSClient {
	return &nPSClient{cc}
}

func (c *nPSClient) New(ctx context.Context, in *NewNPSParams, opts ...grpc.CallOption) (*NewNpsResponse, error) {
	out := new(NewNpsResponse)
	err := c.cc.Invoke(ctx, "/feedbacks.NPS/New", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *nPSClient) Update(ctx context.Context, in *UpdateNPSParams, opts ...grpc.CallOption) (*ResponseOk, error) {
	out := new(ResponseOk)
	err := c.cc.Invoke(ctx, "/feedbacks.NPS/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NPSServer is the server API for NPS service.
// All implementations should embed UnimplementedNPSServer
// for forward compatibility
type NPSServer interface {
	New(context.Context, *NewNPSParams) (*NewNpsResponse, error)
	Update(context.Context, *UpdateNPSParams) (*ResponseOk, error)
}

// UnimplementedNPSServer should be embedded to have forward compatible implementations.
type UnimplementedNPSServer struct {
}

func (UnimplementedNPSServer) New(context.Context, *NewNPSParams) (*NewNpsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method New not implemented")
}
func (UnimplementedNPSServer) Update(context.Context, *UpdateNPSParams) (*ResponseOk, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}

// UnsafeNPSServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NPSServer will
// result in compilation errors.
type UnsafeNPSServer interface {
	mustEmbedUnimplementedNPSServer()
}

func RegisterNPSServer(s grpc.ServiceRegistrar, srv NPSServer) {
	s.RegisterService(&NPS_ServiceDesc, srv)
}

func _NPS_New_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NewNPSParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NPSServer).New(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.NPS/New",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NPSServer).New(ctx, req.(*NewNPSParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _NPS_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateNPSParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NPSServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.NPS/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NPSServer).Update(ctx, req.(*UpdateNPSParams))
	}
	return interceptor(ctx, in, info, handler)
}

// NPS_ServiceDesc is the grpc.ServiceDesc for NPS service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NPS_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "feedbacks.NPS",
	HandlerType: (*NPSServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "New",
			Handler:    _NPS_New_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _NPS_Update_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/feedbacks.proto",
}

// PortalFeedbackServiceClient is the client API for PortalFeedbackService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PortalFeedbackServiceClient interface {
	Delete(ctx context.Context, in *PortalFeedbackId, opts ...grpc.CallOption) (*emptypb.Empty, error)
	List(ctx context.Context, in *ListPortalFeedbackRequest, opts ...grpc.CallOption) (*ListPortalFeedbackResponse, error)
	Validate(ctx context.Context, in *ValidatePortalFeedbackRequest, opts ...grpc.CallOption) (*ValidatePortalFeedbackResponse, error)
}

type portalFeedbackServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPortalFeedbackServiceClient(cc grpc.ClientConnInterface) PortalFeedbackServiceClient {
	return &portalFeedbackServiceClient{cc}
}

func (c *portalFeedbackServiceClient) Delete(ctx context.Context, in *PortalFeedbackId, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/feedbacks.PortalFeedbackService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *portalFeedbackServiceClient) List(ctx context.Context, in *ListPortalFeedbackRequest, opts ...grpc.CallOption) (*ListPortalFeedbackResponse, error) {
	out := new(ListPortalFeedbackResponse)
	err := c.cc.Invoke(ctx, "/feedbacks.PortalFeedbackService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *portalFeedbackServiceClient) Validate(ctx context.Context, in *ValidatePortalFeedbackRequest, opts ...grpc.CallOption) (*ValidatePortalFeedbackResponse, error) {
	out := new(ValidatePortalFeedbackResponse)
	err := c.cc.Invoke(ctx, "/feedbacks.PortalFeedbackService/Validate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PortalFeedbackServiceServer is the server API for PortalFeedbackService service.
// All implementations should embed UnimplementedPortalFeedbackServiceServer
// for forward compatibility
type PortalFeedbackServiceServer interface {
	Delete(context.Context, *PortalFeedbackId) (*emptypb.Empty, error)
	List(context.Context, *ListPortalFeedbackRequest) (*ListPortalFeedbackResponse, error)
	Validate(context.Context, *ValidatePortalFeedbackRequest) (*ValidatePortalFeedbackResponse, error)
}

// UnimplementedPortalFeedbackServiceServer should be embedded to have forward compatible implementations.
type UnimplementedPortalFeedbackServiceServer struct {
}

func (UnimplementedPortalFeedbackServiceServer) Delete(context.Context, *PortalFeedbackId) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedPortalFeedbackServiceServer) List(context.Context, *ListPortalFeedbackRequest) (*ListPortalFeedbackResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedPortalFeedbackServiceServer) Validate(context.Context, *ValidatePortalFeedbackRequest) (*ValidatePortalFeedbackResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Validate not implemented")
}

// UnsafePortalFeedbackServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PortalFeedbackServiceServer will
// result in compilation errors.
type UnsafePortalFeedbackServiceServer interface {
	mustEmbedUnimplementedPortalFeedbackServiceServer()
}

func RegisterPortalFeedbackServiceServer(s grpc.ServiceRegistrar, srv PortalFeedbackServiceServer) {
	s.RegisterService(&PortalFeedbackService_ServiceDesc, srv)
}

func _PortalFeedbackService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PortalFeedbackId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PortalFeedbackServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.PortalFeedbackService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PortalFeedbackServiceServer).Delete(ctx, req.(*PortalFeedbackId))
	}
	return interceptor(ctx, in, info, handler)
}

func _PortalFeedbackService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPortalFeedbackRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PortalFeedbackServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.PortalFeedbackService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PortalFeedbackServiceServer).List(ctx, req.(*ListPortalFeedbackRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PortalFeedbackService_Validate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ValidatePortalFeedbackRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PortalFeedbackServiceServer).Validate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/feedbacks.PortalFeedbackService/Validate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PortalFeedbackServiceServer).Validate(ctx, req.(*ValidatePortalFeedbackRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PortalFeedbackService_ServiceDesc is the grpc.ServiceDesc for PortalFeedbackService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PortalFeedbackService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "feedbacks.PortalFeedbackService",
	HandlerType: (*PortalFeedbackServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Delete",
			Handler:    _PortalFeedbackService_Delete_Handler,
		},
		{
			MethodName: "List",
			Handler:    _PortalFeedbackService_List_Handler,
		},
		{
			MethodName: "Validate",
			Handler:    _PortalFeedbackService_Validate_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/feedbacks.proto",
}
