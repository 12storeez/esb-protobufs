// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package geo

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

// GeoClient is the client API for Geo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GeoClient interface {
	CountryDetails(ctx context.Context, in *CountryDetailsParams, opts ...grpc.CallOption) (*Country, error)
	SuggestCountry(ctx context.Context, in *SuggestCountryParams, opts ...grpc.CallOption) (*SuggestCountryResponse, error)
	SuggestCity(ctx context.Context, in *SuggestCityParams, opts ...grpc.CallOption) (*SuggestCityResponse, error)
	CityDetails(ctx context.Context, in *CityDetailsParams, opts ...grpc.CallOption) (*City, error)
	CityByIP(ctx context.Context, in *CityByIPParams, opts ...grpc.CallOption) (*CityByIPResponse, error)
	SuggestAddress(ctx context.Context, in *SuggestAddressParams, opts ...grpc.CallOption) (*SuggestAddressResponse, error)
	AddressDetails(ctx context.Context, in *AddressDetailsParams, opts ...grpc.CallOption) (*Address, error)
	AddressZones(ctx context.Context, in *AddressZonesParams, opts ...grpc.CallOption) (*AddressZonesResponse, error)
}

type geoClient struct {
	cc grpc.ClientConnInterface
}

func NewGeoClient(cc grpc.ClientConnInterface) GeoClient {
	return &geoClient{cc}
}

func (c *geoClient) CountryDetails(ctx context.Context, in *CountryDetailsParams, opts ...grpc.CallOption) (*Country, error) {
	out := new(Country)
	err := c.cc.Invoke(ctx, "/geo.geo/CountryDetails", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geoClient) SuggestCountry(ctx context.Context, in *SuggestCountryParams, opts ...grpc.CallOption) (*SuggestCountryResponse, error) {
	out := new(SuggestCountryResponse)
	err := c.cc.Invoke(ctx, "/geo.geo/SuggestCountry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geoClient) SuggestCity(ctx context.Context, in *SuggestCityParams, opts ...grpc.CallOption) (*SuggestCityResponse, error) {
	out := new(SuggestCityResponse)
	err := c.cc.Invoke(ctx, "/geo.geo/SuggestCity", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geoClient) CityDetails(ctx context.Context, in *CityDetailsParams, opts ...grpc.CallOption) (*City, error) {
	out := new(City)
	err := c.cc.Invoke(ctx, "/geo.geo/CityDetails", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geoClient) CityByIP(ctx context.Context, in *CityByIPParams, opts ...grpc.CallOption) (*CityByIPResponse, error) {
	out := new(CityByIPResponse)
	err := c.cc.Invoke(ctx, "/geo.geo/CityByIP", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geoClient) SuggestAddress(ctx context.Context, in *SuggestAddressParams, opts ...grpc.CallOption) (*SuggestAddressResponse, error) {
	out := new(SuggestAddressResponse)
	err := c.cc.Invoke(ctx, "/geo.geo/SuggestAddress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geoClient) AddressDetails(ctx context.Context, in *AddressDetailsParams, opts ...grpc.CallOption) (*Address, error) {
	out := new(Address)
	err := c.cc.Invoke(ctx, "/geo.geo/AddressDetails", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geoClient) AddressZones(ctx context.Context, in *AddressZonesParams, opts ...grpc.CallOption) (*AddressZonesResponse, error) {
	out := new(AddressZonesResponse)
	err := c.cc.Invoke(ctx, "/geo.geo/AddressZones", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GeoServer is the server API for Geo service.
// All implementations should embed UnimplementedGeoServer
// for forward compatibility
type GeoServer interface {
	CountryDetails(context.Context, *CountryDetailsParams) (*Country, error)
	SuggestCountry(context.Context, *SuggestCountryParams) (*SuggestCountryResponse, error)
	SuggestCity(context.Context, *SuggestCityParams) (*SuggestCityResponse, error)
	CityDetails(context.Context, *CityDetailsParams) (*City, error)
	CityByIP(context.Context, *CityByIPParams) (*CityByIPResponse, error)
	SuggestAddress(context.Context, *SuggestAddressParams) (*SuggestAddressResponse, error)
	AddressDetails(context.Context, *AddressDetailsParams) (*Address, error)
	AddressZones(context.Context, *AddressZonesParams) (*AddressZonesResponse, error)
}

// UnimplementedGeoServer should be embedded to have forward compatible implementations.
type UnimplementedGeoServer struct {
}

func (UnimplementedGeoServer) CountryDetails(context.Context, *CountryDetailsParams) (*Country, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CountryDetails not implemented")
}
func (UnimplementedGeoServer) SuggestCountry(context.Context, *SuggestCountryParams) (*SuggestCountryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SuggestCountry not implemented")
}
func (UnimplementedGeoServer) SuggestCity(context.Context, *SuggestCityParams) (*SuggestCityResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SuggestCity not implemented")
}
func (UnimplementedGeoServer) CityDetails(context.Context, *CityDetailsParams) (*City, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CityDetails not implemented")
}
func (UnimplementedGeoServer) CityByIP(context.Context, *CityByIPParams) (*CityByIPResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CityByIP not implemented")
}
func (UnimplementedGeoServer) SuggestAddress(context.Context, *SuggestAddressParams) (*SuggestAddressResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SuggestAddress not implemented")
}
func (UnimplementedGeoServer) AddressDetails(context.Context, *AddressDetailsParams) (*Address, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddressDetails not implemented")
}
func (UnimplementedGeoServer) AddressZones(context.Context, *AddressZonesParams) (*AddressZonesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddressZones not implemented")
}

// UnsafeGeoServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GeoServer will
// result in compilation errors.
type UnsafeGeoServer interface {
	mustEmbedUnimplementedGeoServer()
}

func RegisterGeoServer(s grpc.ServiceRegistrar, srv GeoServer) {
	s.RegisterService(&Geo_ServiceDesc, srv)
}

func _Geo_CountryDetails_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CountryDetailsParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeoServer).CountryDetails(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/geo.geo/CountryDetails",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeoServer).CountryDetails(ctx, req.(*CountryDetailsParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Geo_SuggestCountry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestCountryParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeoServer).SuggestCountry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/geo.geo/SuggestCountry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeoServer).SuggestCountry(ctx, req.(*SuggestCountryParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Geo_SuggestCity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestCityParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeoServer).SuggestCity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/geo.geo/SuggestCity",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeoServer).SuggestCity(ctx, req.(*SuggestCityParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Geo_CityDetails_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CityDetailsParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeoServer).CityDetails(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/geo.geo/CityDetails",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeoServer).CityDetails(ctx, req.(*CityDetailsParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Geo_CityByIP_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CityByIPParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeoServer).CityByIP(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/geo.geo/CityByIP",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeoServer).CityByIP(ctx, req.(*CityByIPParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Geo_SuggestAddress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SuggestAddressParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeoServer).SuggestAddress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/geo.geo/SuggestAddress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeoServer).SuggestAddress(ctx, req.(*SuggestAddressParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Geo_AddressDetails_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddressDetailsParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeoServer).AddressDetails(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/geo.geo/AddressDetails",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeoServer).AddressDetails(ctx, req.(*AddressDetailsParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _Geo_AddressZones_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddressZonesParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeoServer).AddressZones(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/geo.geo/AddressZones",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeoServer).AddressZones(ctx, req.(*AddressZonesParams))
	}
	return interceptor(ctx, in, info, handler)
}

// Geo_ServiceDesc is the grpc.ServiceDesc for Geo service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Geo_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "geo.geo",
	HandlerType: (*GeoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CountryDetails",
			Handler:    _Geo_CountryDetails_Handler,
		},
		{
			MethodName: "SuggestCountry",
			Handler:    _Geo_SuggestCountry_Handler,
		},
		{
			MethodName: "SuggestCity",
			Handler:    _Geo_SuggestCity_Handler,
		},
		{
			MethodName: "CityDetails",
			Handler:    _Geo_CityDetails_Handler,
		},
		{
			MethodName: "CityByIP",
			Handler:    _Geo_CityByIP_Handler,
		},
		{
			MethodName: "SuggestAddress",
			Handler:    _Geo_SuggestAddress_Handler,
		},
		{
			MethodName: "AddressDetails",
			Handler:    _Geo_AddressDetails_Handler,
		},
		{
			MethodName: "AddressZones",
			Handler:    _Geo_AddressZones_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/geo.proto",
}
