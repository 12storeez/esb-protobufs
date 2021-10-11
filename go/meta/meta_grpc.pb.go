// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package meta

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

// MobileClient is the client API for Mobile service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MobileClient interface {
	Contacts(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ResponseMobileAPIContacts, error)
	About(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ResponseMobileApiAbout, error)
	Faq(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ResponseFaq, error)
	Countries(ctx context.Context, in *ParamsCountries, opts ...grpc.CallOption) (*ResponseCountries, error)
	SocialNetworks(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ResponseSocialNetworks, error)
}

type mobileClient struct {
	cc grpc.ClientConnInterface
}

func NewMobileClient(cc grpc.ClientConnInterface) MobileClient {
	return &mobileClient{cc}
}

func (c *mobileClient) Contacts(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ResponseMobileAPIContacts, error) {
	out := new(ResponseMobileAPIContacts)
	err := c.cc.Invoke(ctx, "/meta.Mobile/Contacts", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) About(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ResponseMobileApiAbout, error) {
	out := new(ResponseMobileApiAbout)
	err := c.cc.Invoke(ctx, "/meta.Mobile/About", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) Faq(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ResponseFaq, error) {
	out := new(ResponseFaq)
	err := c.cc.Invoke(ctx, "/meta.Mobile/Faq", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) Countries(ctx context.Context, in *ParamsCountries, opts ...grpc.CallOption) (*ResponseCountries, error) {
	out := new(ResponseCountries)
	err := c.cc.Invoke(ctx, "/meta.Mobile/Countries", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mobileClient) SocialNetworks(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*ResponseSocialNetworks, error) {
	out := new(ResponseSocialNetworks)
	err := c.cc.Invoke(ctx, "/meta.Mobile/SocialNetworks", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MobileServer is the server API for Mobile service.
// All implementations should embed UnimplementedMobileServer
// for forward compatibility
type MobileServer interface {
	Contacts(context.Context, *empty.Empty) (*ResponseMobileAPIContacts, error)
	About(context.Context, *empty.Empty) (*ResponseMobileApiAbout, error)
	Faq(context.Context, *empty.Empty) (*ResponseFaq, error)
	Countries(context.Context, *ParamsCountries) (*ResponseCountries, error)
	SocialNetworks(context.Context, *empty.Empty) (*ResponseSocialNetworks, error)
}

// UnimplementedMobileServer should be embedded to have forward compatible implementations.
type UnimplementedMobileServer struct {
}

func (UnimplementedMobileServer) Contacts(context.Context, *empty.Empty) (*ResponseMobileAPIContacts, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Contacts not implemented")
}
func (UnimplementedMobileServer) About(context.Context, *empty.Empty) (*ResponseMobileApiAbout, error) {
	return nil, status.Errorf(codes.Unimplemented, "method About not implemented")
}
func (UnimplementedMobileServer) Faq(context.Context, *empty.Empty) (*ResponseFaq, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Faq not implemented")
}
func (UnimplementedMobileServer) Countries(context.Context, *ParamsCountries) (*ResponseCountries, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Countries not implemented")
}
func (UnimplementedMobileServer) SocialNetworks(context.Context, *empty.Empty) (*ResponseSocialNetworks, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SocialNetworks not implemented")
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

func _Mobile_Contacts_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).Contacts(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/meta.Mobile/Contacts",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).Contacts(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_About_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).About(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/meta.Mobile/About",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).About(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_Faq_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).Faq(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/meta.Mobile/Faq",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).Faq(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_Countries_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ParamsCountries)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).Countries(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/meta.Mobile/Countries",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).Countries(ctx, req.(*ParamsCountries))
	}
	return interceptor(ctx, in, info, handler)
}

func _Mobile_SocialNetworks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MobileServer).SocialNetworks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/meta.Mobile/SocialNetworks",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MobileServer).SocialNetworks(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// Mobile_ServiceDesc is the grpc.ServiceDesc for Mobile service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Mobile_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "meta.Mobile",
	HandlerType: (*MobileServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Contacts",
			Handler:    _Mobile_Contacts_Handler,
		},
		{
			MethodName: "About",
			Handler:    _Mobile_About_Handler,
		},
		{
			MethodName: "Faq",
			Handler:    _Mobile_Faq_Handler,
		},
		{
			MethodName: "Countries",
			Handler:    _Mobile_Countries_Handler,
		},
		{
			MethodName: "SocialNetworks",
			Handler:    _Mobile_SocialNetworks_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/meta.proto",
}

// StoresClient is the client API for Stores service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type StoresClient interface {
	All(ctx context.Context, in *ParamsStores, opts ...grpc.CallOption) (*ResponseAllOfflineStoresInfo, error)
	ByID(ctx context.Context, in *ParamsOfflineStoreInfoByID, opts ...grpc.CallOption) (*ResponseOfflineStoreInfoByID, error)
	Cities(ctx context.Context, in *ParamsStoresCities, opts ...grpc.CallOption) (*ResponseStoresCities, error)
}

type storesClient struct {
	cc grpc.ClientConnInterface
}

func NewStoresClient(cc grpc.ClientConnInterface) StoresClient {
	return &storesClient{cc}
}

func (c *storesClient) All(ctx context.Context, in *ParamsStores, opts ...grpc.CallOption) (*ResponseAllOfflineStoresInfo, error) {
	out := new(ResponseAllOfflineStoresInfo)
	err := c.cc.Invoke(ctx, "/meta.Stores/All", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storesClient) ByID(ctx context.Context, in *ParamsOfflineStoreInfoByID, opts ...grpc.CallOption) (*ResponseOfflineStoreInfoByID, error) {
	out := new(ResponseOfflineStoreInfoByID)
	err := c.cc.Invoke(ctx, "/meta.Stores/ByID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *storesClient) Cities(ctx context.Context, in *ParamsStoresCities, opts ...grpc.CallOption) (*ResponseStoresCities, error) {
	out := new(ResponseStoresCities)
	err := c.cc.Invoke(ctx, "/meta.Stores/Cities", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// StoresServer is the server API for Stores service.
// All implementations should embed UnimplementedStoresServer
// for forward compatibility
type StoresServer interface {
	All(context.Context, *ParamsStores) (*ResponseAllOfflineStoresInfo, error)
	ByID(context.Context, *ParamsOfflineStoreInfoByID) (*ResponseOfflineStoreInfoByID, error)
	Cities(context.Context, *ParamsStoresCities) (*ResponseStoresCities, error)
}

// UnimplementedStoresServer should be embedded to have forward compatible implementations.
type UnimplementedStoresServer struct {
}

func (UnimplementedStoresServer) All(context.Context, *ParamsStores) (*ResponseAllOfflineStoresInfo, error) {
	return nil, status.Errorf(codes.Unimplemented, "method All not implemented")
}
func (UnimplementedStoresServer) ByID(context.Context, *ParamsOfflineStoreInfoByID) (*ResponseOfflineStoreInfoByID, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ByID not implemented")
}
func (UnimplementedStoresServer) Cities(context.Context, *ParamsStoresCities) (*ResponseStoresCities, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Cities not implemented")
}

// UnsafeStoresServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to StoresServer will
// result in compilation errors.
type UnsafeStoresServer interface {
	mustEmbedUnimplementedStoresServer()
}

func RegisterStoresServer(s grpc.ServiceRegistrar, srv StoresServer) {
	s.RegisterService(&Stores_ServiceDesc, srv)
}

func _Stores_All_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ParamsStores)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoresServer).All(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/meta.Stores/All",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoresServer).All(ctx, req.(*ParamsStores))
	}
	return interceptor(ctx, in, info, handler)
}

func _Stores_ByID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ParamsOfflineStoreInfoByID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoresServer).ByID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/meta.Stores/ByID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoresServer).ByID(ctx, req.(*ParamsOfflineStoreInfoByID))
	}
	return interceptor(ctx, in, info, handler)
}

func _Stores_Cities_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ParamsStoresCities)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StoresServer).Cities(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/meta.Stores/Cities",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StoresServer).Cities(ctx, req.(*ParamsStoresCities))
	}
	return interceptor(ctx, in, info, handler)
}

// Stores_ServiceDesc is the grpc.ServiceDesc for Stores service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Stores_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "meta.Stores",
	HandlerType: (*StoresServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "All",
			Handler:    _Stores_All_Handler,
		},
		{
			MethodName: "ByID",
			Handler:    _Stores_ByID_Handler,
		},
		{
			MethodName: "Cities",
			Handler:    _Stores_Cities_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/meta.proto",
}
