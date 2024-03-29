// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.21.9
// source: country.proto

package logistics

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
	CountryService_List_FullMethodName    = "/logistics.CountryService/List"
	CountryService_Suggest_FullMethodName = "/logistics.CountryService/Suggest"
)

// CountryServiceClient is the client API for CountryService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CountryServiceClient interface {
	List(ctx context.Context, in *ListCountryRequest, opts ...grpc.CallOption) (*ListCountryResponse, error)
	Suggest(ctx context.Context, in *SuggestCountryRequest, opts ...grpc.CallOption) (*ListCountryResponse, error)
}

type countryServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCountryServiceClient(cc grpc.ClientConnInterface) CountryServiceClient {
	return &countryServiceClient{cc}
}

func (c *countryServiceClient) List(ctx context.Context, in *ListCountryRequest, opts ...grpc.CallOption) (*ListCountryResponse, error) {
	out := new(ListCountryResponse)
	err := c.cc.Invoke(ctx, CountryService_List_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *countryServiceClient) Suggest(ctx context.Context, in *SuggestCountryRequest, opts ...grpc.CallOption) (*ListCountryResponse, error) {
	out := new(ListCountryResponse)
	err := c.cc.Invoke(ctx, CountryService_Suggest_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CountryServiceServer is the server API for CountryService service.
// All implementations should embed UnimplementedCountryServiceServer
// for forward compatibility
type CountryServiceServer interface {
	List(context.Context, *ListCountryRequest) (*ListCountryResponse, error)
	Suggest(context.Context, *SuggestCountryRequest) (*ListCountryResponse, error)
}

// UnimplementedCountryServiceServer should be embedded to have forward compatible implementations.
type UnimplementedCountryServiceServer struct {
}

func (UnimplementedCountryServiceServer) List(context.Context, *ListCountryRequest) (*ListCountryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedCountryServiceServer) Suggest(context.Context, *SuggestCountryRequest) (*ListCountryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Suggest not implemented")
}

// UnsafeCountryServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CountryServiceServer will
// result in compilation errors.
type UnsafeCountryServiceServer interface {
	mustEmbedUnimplementedCountryServiceServer()
}

func RegisterCountryServiceServer(s grpc.ServiceRegistrar, srv CountryServiceServer) {
	s.RegisterService(&CountryService_ServiceDesc, srv)
}

func _CountryService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListCountryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CountryServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: CountryService_List_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CountryServiceServer).List(ctx, req.(*ListCountryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CountryService_Suggest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestCountryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CountryServiceServer).Suggest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: CountryService_Suggest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CountryServiceServer).Suggest(ctx, req.(*SuggestCountryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// CountryService_ServiceDesc is the grpc.ServiceDesc for CountryService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CountryService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "logistics.CountryService",
	HandlerType: (*CountryServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _CountryService_List_Handler,
		},
		{
			MethodName: "Suggest",
			Handler:    _CountryService_Suggest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "country.proto",
}
