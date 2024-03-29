// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.9
// source: proto/usedesk.proto

package usedesk

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	CSI_Save_FullMethodName = "/usedesk.CSI/Save"
)

// CSIClient is the client API for CSI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CSIClient interface {
	Save(ctx context.Context, in *SaveParams, opts ...grpc.CallOption) (*SaveResponse, error)
}

type cSIClient struct {
	cc grpc.ClientConnInterface
}

func NewCSIClient(cc grpc.ClientConnInterface) CSIClient {
	return &cSIClient{cc}
}

func (c *cSIClient) Save(ctx context.Context, in *SaveParams, opts ...grpc.CallOption) (*SaveResponse, error) {
	out := new(SaveResponse)
	err := c.cc.Invoke(ctx, CSI_Save_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CSIServer is the server API for CSI service.
// All implementations should embed UnimplementedCSIServer
// for forward compatibility
type CSIServer interface {
	Save(context.Context, *SaveParams) (*SaveResponse, error)
}

// UnimplementedCSIServer should be embedded to have forward compatible implementations.
type UnimplementedCSIServer struct {
}

func (UnimplementedCSIServer) Save(context.Context, *SaveParams) (*SaveResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Save not implemented")
}

// UnsafeCSIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CSIServer will
// result in compilation errors.
type UnsafeCSIServer interface {
	mustEmbedUnimplementedCSIServer()
}

func RegisterCSIServer(s grpc.ServiceRegistrar, srv CSIServer) {
	s.RegisterService(&CSI_ServiceDesc, srv)
}

func _CSI_Save_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SaveParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CSIServer).Save(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: CSI_Save_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CSIServer).Save(ctx, req.(*SaveParams))
	}
	return interceptor(ctx, in, info, handler)
}

// CSI_ServiceDesc is the grpc.ServiceDesc for CSI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CSI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "usedesk.CSI",
	HandlerType: (*CSIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Save",
			Handler:    _CSI_Save_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/usedesk.proto",
}
