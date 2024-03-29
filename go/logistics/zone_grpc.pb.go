// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.9
// source: zone.proto

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
	ZoneService_List_FullMethodName    = "/logistics.ZoneService/List"
	ZoneService_Create_FullMethodName  = "/logistics.ZoneService/Create"
	ZoneService_Get_FullMethodName     = "/logistics.ZoneService/Get"
	ZoneService_Update_FullMethodName  = "/logistics.ZoneService/Update"
	ZoneService_Delete_FullMethodName  = "/logistics.ZoneService/Delete"
	ZoneService_Suggest_FullMethodName = "/logistics.ZoneService/Suggest"
)

// ZoneServiceClient is the client API for ZoneService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ZoneServiceClient interface {
	List(ctx context.Context, in *ListZoneRequest, opts ...grpc.CallOption) (*ListZoneResponse, error)
	Create(ctx context.Context, in *Zone, opts ...grpc.CallOption) (*Zone, error)
	Get(ctx context.Context, in *ZoneId, opts ...grpc.CallOption) (*Zone, error)
	Update(ctx context.Context, in *Zone, opts ...grpc.CallOption) (*Zone, error)
	Delete(ctx context.Context, in *ZoneId, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Suggest(ctx context.Context, in *SuggestZoneRequest, opts ...grpc.CallOption) (*SuggestZoneResponse, error)
}

type zoneServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewZoneServiceClient(cc grpc.ClientConnInterface) ZoneServiceClient {
	return &zoneServiceClient{cc}
}

func (c *zoneServiceClient) List(ctx context.Context, in *ListZoneRequest, opts ...grpc.CallOption) (*ListZoneResponse, error) {
	out := new(ListZoneResponse)
	err := c.cc.Invoke(ctx, ZoneService_List_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneServiceClient) Create(ctx context.Context, in *Zone, opts ...grpc.CallOption) (*Zone, error) {
	out := new(Zone)
	err := c.cc.Invoke(ctx, ZoneService_Create_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneServiceClient) Get(ctx context.Context, in *ZoneId, opts ...grpc.CallOption) (*Zone, error) {
	out := new(Zone)
	err := c.cc.Invoke(ctx, ZoneService_Get_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneServiceClient) Update(ctx context.Context, in *Zone, opts ...grpc.CallOption) (*Zone, error) {
	out := new(Zone)
	err := c.cc.Invoke(ctx, ZoneService_Update_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneServiceClient) Delete(ctx context.Context, in *ZoneId, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, ZoneService_Delete_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *zoneServiceClient) Suggest(ctx context.Context, in *SuggestZoneRequest, opts ...grpc.CallOption) (*SuggestZoneResponse, error) {
	out := new(SuggestZoneResponse)
	err := c.cc.Invoke(ctx, ZoneService_Suggest_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ZoneServiceServer is the server API for ZoneService service.
// All implementations should embed UnimplementedZoneServiceServer
// for forward compatibility
type ZoneServiceServer interface {
	List(context.Context, *ListZoneRequest) (*ListZoneResponse, error)
	Create(context.Context, *Zone) (*Zone, error)
	Get(context.Context, *ZoneId) (*Zone, error)
	Update(context.Context, *Zone) (*Zone, error)
	Delete(context.Context, *ZoneId) (*emptypb.Empty, error)
	Suggest(context.Context, *SuggestZoneRequest) (*SuggestZoneResponse, error)
}

// UnimplementedZoneServiceServer should be embedded to have forward compatible implementations.
type UnimplementedZoneServiceServer struct {
}

func (UnimplementedZoneServiceServer) List(context.Context, *ListZoneRequest) (*ListZoneResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedZoneServiceServer) Create(context.Context, *Zone) (*Zone, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedZoneServiceServer) Get(context.Context, *ZoneId) (*Zone, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedZoneServiceServer) Update(context.Context, *Zone) (*Zone, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedZoneServiceServer) Delete(context.Context, *ZoneId) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedZoneServiceServer) Suggest(context.Context, *SuggestZoneRequest) (*SuggestZoneResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Suggest not implemented")
}

// UnsafeZoneServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ZoneServiceServer will
// result in compilation errors.
type UnsafeZoneServiceServer interface {
	mustEmbedUnimplementedZoneServiceServer()
}

func RegisterZoneServiceServer(s grpc.ServiceRegistrar, srv ZoneServiceServer) {
	s.RegisterService(&ZoneService_ServiceDesc, srv)
}

func _ZoneService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListZoneRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ZoneService_List_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneServiceServer).List(ctx, req.(*ListZoneRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Zone)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ZoneService_Create_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneServiceServer).Create(ctx, req.(*Zone))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ZoneId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ZoneService_Get_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneServiceServer).Get(ctx, req.(*ZoneId))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Zone)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ZoneService_Update_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneServiceServer).Update(ctx, req.(*Zone))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ZoneId)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ZoneService_Delete_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneServiceServer).Delete(ctx, req.(*ZoneId))
	}
	return interceptor(ctx, in, info, handler)
}

func _ZoneService_Suggest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestZoneRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ZoneServiceServer).Suggest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ZoneService_Suggest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ZoneServiceServer).Suggest(ctx, req.(*SuggestZoneRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ZoneService_ServiceDesc is the grpc.ServiceDesc for ZoneService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ZoneService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.ZoneService",
	HandlerType: (*ZoneServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _ZoneService_List_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _ZoneService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _ZoneService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _ZoneService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _ZoneService_Delete_Handler,
		},
		{
			MethodName: "Suggest",
			Handler:    _ZoneService_Suggest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "zone.proto",
}
