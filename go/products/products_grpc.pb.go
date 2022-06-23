// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.18.1
// source: proto/internal/products.proto

package products

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

// CatalogClient is the client API for Catalog service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CatalogClient interface {
	Get(ctx context.Context, in *Request, opts ...grpc.CallOption) (*GetResponse, error)
	GetByArticle(ctx context.Context, in *Article, opts ...grpc.CallOption) (*GetByArticleResponse, error)
}

type catalogClient struct {
	cc grpc.ClientConnInterface
}

func NewCatalogClient(cc grpc.ClientConnInterface) CatalogClient {
	return &catalogClient{cc}
}

func (c *catalogClient) Get(ctx context.Context, in *Request, opts ...grpc.CallOption) (*GetResponse, error) {
	out := new(GetResponse)
	err := c.cc.Invoke(ctx, "/products.Catalog/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogClient) GetByArticle(ctx context.Context, in *Article, opts ...grpc.CallOption) (*GetByArticleResponse, error) {
	out := new(GetByArticleResponse)
	err := c.cc.Invoke(ctx, "/products.Catalog/GetByArticle", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CatalogServer is the server API for Catalog service.
// All implementations should embed UnimplementedCatalogServer
// for forward compatibility
type CatalogServer interface {
	Get(context.Context, *Request) (*GetResponse, error)
	GetByArticle(context.Context, *Article) (*GetByArticleResponse, error)
}

// UnimplementedCatalogServer should be embedded to have forward compatible implementations.
type UnimplementedCatalogServer struct {
}

func (UnimplementedCatalogServer) Get(context.Context, *Request) (*GetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedCatalogServer) GetByArticle(context.Context, *Article) (*GetByArticleResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetByArticle not implemented")
}

// UnsafeCatalogServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CatalogServer will
// result in compilation errors.
type UnsafeCatalogServer interface {
	mustEmbedUnimplementedCatalogServer()
}

func RegisterCatalogServer(s grpc.ServiceRegistrar, srv CatalogServer) {
	s.RegisterService(&Catalog_ServiceDesc, srv)
}

func _Catalog_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/products.Catalog/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServer).Get(ctx, req.(*Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _Catalog_GetByArticle_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Article)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServer).GetByArticle(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/products.Catalog/GetByArticle",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServer).GetByArticle(ctx, req.(*Article))
	}
	return interceptor(ctx, in, info, handler)
}

// Catalog_ServiceDesc is the grpc.ServiceDesc for Catalog service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Catalog_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "products.Catalog",
	HandlerType: (*CatalogServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Get",
			Handler:    _Catalog_Get_Handler,
		},
		{
			MethodName: "GetByArticle",
			Handler:    _Catalog_GetByArticle_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/internal/products.proto",
}
