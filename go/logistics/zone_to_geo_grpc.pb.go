// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.18.1
// source: zone_to_geo.proto

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

// ZoneToGeoServiceClient is the client API for ZoneToGeoService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ZoneToGeoServiceClient interface {
	List(ctx context.Context, in *ListZoneToGeoRequest, opts ...grpc.CallOption) (*ListZoneToGeoResponse, error)
	Validate(ctx context.Context, in *ValidateZoneToGeoRequest, opts ...grpc.CallOption) (*ValidateZoneToGeoResponse, error)
	Get(ctx context.Context, in *ZoneToGeoId, opts ...grpc.CallOption) (*ZoneToGeo, error)
	Update(ctx context.Context, in *ZoneToGeoUpdateRequest, opts ...grpc.CallOption) (*ZoneToGeo, error)
	Delete(ctx context.Context, in *ZoneToGeoId, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Suggest(ctx context.Context, in *SuggestZoneToGeoRequest, opts ...grpc.CallOption) (*SuggestZoneToGeoResponse, error)
}

type zoneToGeoServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewZoneToGeoServiceClient(cc grpc.ClientConnInterface) ZoneToGeoServiceClient {
	return &zoneToGeoServiceClient{cc}
}

func (c *zoneToGeoServiceClient) List(ctx context.Context, in *ListZoneToGeoRequest, opts ...grpc.CallOption) (*ListZoneToGeoResponse, error) {
	out := new(ListZoneToGeoResponse)
	err := c.cc.Invoke(ctx, "/logistics.ZoneToGeoService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneToGeoServiceClient) Validate(ctx context.Context, in *ValidateZoneToGeoRequest, opts ...grpc.CallOption) (*ValidateZoneToGeoResponse, error) {
	out := new(ValidateZoneToGeoResponse)
	err := c.cc.Invoke(ctx, "/logistics.ZoneToGeoService/Validate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneToGeoServiceClient) Get(ctx context.Context, in *ZoneToGeoId, opts ...grpc.CallOption) (*ZoneToGeo, error) {
	out := new(ZoneToGeo)
	err := c.cc.Invoke(ctx, "/logistics.ZoneToGeoService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneToGeoServiceClient) Update(ctx context.Context, in *ZoneToGeoUpdateRequest, opts ...grpc.CallOption) (*ZoneToGeo, error) {
	out := new(ZoneToGeo)
	err := c.cc.Invoke(ctx, "/logistics.ZoneToGeoService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneToGeoServiceClient) Delete(ctx context.Context, in *ZoneToGeoId, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/logistics.ZoneToGeoService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneToGeoServiceClient) Suggest(ctx context.Context, in *SuggestZoneToGeoRequest, opts ...grpc.CallOption) (*SuggestZoneToGeoResponse, error) {
	out := new(SuggestZoneToGeoResponse)
	err := c.cc.Invoke(ctx, "/logistics.ZoneToGeoService/Suggest", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ZoneToGeoServiceServer is the server API for ZoneToGeoService service.
// All implementations should embed UnimplementedZoneToGeoServiceServer
// for forward compatibility
type ZoneToGeoServiceServer interface {
	List(context.Context, *ListZoneToGeoRequest) (*ListZoneToGeoResponse, error)
	Validate(context.Context, *ValidateZoneToGeoRequest) (*ValidateZoneToGeoResponse, error)
	Get(context.Context, *ZoneToGeoId) (*ZoneToGeo, error)
	Update(context.Context, *ZoneToGeoUpdateRequest) (*ZoneToGeo, error)
	Delete(context.Context, *ZoneToGeoId) (*emptypb.Empty, error)
	Suggest(context.Context, *SuggestZoneToGeoRequest) (*SuggestZoneToGeoResponse, error)
}

// UnimplementedZoneToGeoServiceServer should be embedded to have forward compatible implementations.
type UnimplementedZoneToGeoServiceServer struct {
}

func (UnimplementedZoneToGeoServiceServer) List(context.Context, *ListZoneToGeoRequest) (*ListZoneToGeoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedZoneToGeoServiceServer) Validate(context.Context, *ValidateZoneToGeoRequest) (*ValidateZoneToGeoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Validate not implemented")
}
func (UnimplementedZoneToGeoServiceServer) Get(context.Context, *ZoneToGeoId) (*ZoneToGeo, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedZoneToGeoServiceServer) Update(context.Context, *ZoneToGeoUpdateRequest) (*ZoneToGeo, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedZoneToGeoServiceServer) Delete(context.Context, *ZoneToGeoId) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedZoneToGeoServiceServer) Suggest(context.Context, *SuggestZoneToGeoRequest) (*SuggestZoneToGeoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Suggest not implemented")
}

// UnsafeZoneToGeoServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ZoneToGeoServiceServer will
// result in compilation errors.
type UnsafeZoneToGeoServiceServer interface {
	mustEmbedUnimplementedZoneToGeoServiceServer()
}

func RegisterZoneToGeoServiceServer(s grpc.ServiceRegistrar, srv ZoneToGeoServiceServer) {
	s.RegisterService(&ZoneToGeoService_ServiceDesc, srv)
}

func _ZoneToGeoService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListZoneToGeoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneToGeoServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.ZoneToGeoService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneToGeoServiceServer).List(ctx, req.(*ListZoneToGeoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneToGeoService_Validate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ValidateZoneToGeoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneToGeoServiceServer).Validate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.ZoneToGeoService/Validate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneToGeoServiceServer).Validate(ctx, req.(*ValidateZoneToGeoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneToGeoService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ZoneToGeoId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneToGeoServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.ZoneToGeoService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneToGeoServiceServer).Get(ctx, req.(*ZoneToGeoId))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneToGeoService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ZoneToGeoUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneToGeoServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.ZoneToGeoService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneToGeoServiceServer).Update(ctx, req.(*ZoneToGeoUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneToGeoService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ZoneToGeoId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneToGeoServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.ZoneToGeoService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneToGeoServiceServer).Delete(ctx, req.(*ZoneToGeoId))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneToGeoService_Suggest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestZoneToGeoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneToGeoServiceServer).Suggest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/logistics.ZoneToGeoService/Suggest",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneToGeoServiceServer).Suggest(ctx, req.(*SuggestZoneToGeoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ZoneToGeoService_ServiceDesc is the grpc.ServiceDesc for ZoneToGeoService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ZoneToGeoService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.ZoneToGeoService",
	HandlerType: (*ZoneToGeoServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _ZoneToGeoService_List_Handler,
		},
		{
			MethodName: "Validate",
			Handler:    _ZoneToGeoService_Validate_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _ZoneToGeoService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _ZoneToGeoService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _ZoneToGeoService_Delete_Handler,
		},
		{
			MethodName: "Suggest",
			Handler:    _ZoneToGeoService_Suggest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "zone_to_geo.proto",
}
