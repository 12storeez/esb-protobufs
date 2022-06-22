// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.18.1
// source: zone_to_geo.proto

package logistics

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ZoneToGeoId struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GeoId string `protobuf:"bytes,1,opt,name=geo_id,json=geoId,proto3" json:"geo_id,omitempty"`
}

func (x *ZoneToGeoId) Reset() {
	*x = ZoneToGeoId{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ZoneToGeoId) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ZoneToGeoId) ProtoMessage() {}

func (x *ZoneToGeoId) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ZoneToGeoId.ProtoReflect.Descriptor instead.
func (*ZoneToGeoId) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{0}
}

func (x *ZoneToGeoId) GetGeoId() string {
	if x != nil {
		return x.GeoId
	}
	return ""
}

type ZoneToGeo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Zone           *Zone  `protobuf:"bytes,1,opt,name=zone,proto3" json:"zone,omitempty"`
	GeoId          string `protobuf:"bytes,2,opt,name=geo_id,json=geoId,proto3" json:"geo_id,omitempty"`
	Description    string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	CountryIsoCode string `protobuf:"bytes,4,opt,name=country_iso_code,json=countryIsoCode,proto3" json:"country_iso_code,omitempty"`
	City           string `protobuf:"bytes,5,opt,name=city,proto3" json:"city,omitempty"`
	CityGeoId      string `protobuf:"bytes,6,opt,name=city_geo_id,json=cityGeoId,proto3" json:"city_geo_id,omitempty"`
	Region         string `protobuf:"bytes,7,opt,name=region,proto3" json:"region,omitempty"`
}

func (x *ZoneToGeo) Reset() {
	*x = ZoneToGeo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ZoneToGeo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ZoneToGeo) ProtoMessage() {}

func (x *ZoneToGeo) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ZoneToGeo.ProtoReflect.Descriptor instead.
func (*ZoneToGeo) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{1}
}

func (x *ZoneToGeo) GetZone() *Zone {
	if x != nil {
		return x.Zone
	}
	return nil
}

func (x *ZoneToGeo) GetGeoId() string {
	if x != nil {
		return x.GeoId
	}
	return ""
}

func (x *ZoneToGeo) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *ZoneToGeo) GetCountryIsoCode() string {
	if x != nil {
		return x.CountryIsoCode
	}
	return ""
}

func (x *ZoneToGeo) GetCity() string {
	if x != nil {
		return x.City
	}
	return ""
}

func (x *ZoneToGeo) GetCityGeoId() string {
	if x != nil {
		return x.CityGeoId
	}
	return ""
}

func (x *ZoneToGeo) GetRegion() string {
	if x != nil {
		return x.Region
	}
	return ""
}

type ZoneToGeoUpdateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ZoneId int32  `protobuf:"varint,1,opt,name=zone_id,json=zoneId,proto3" json:"zone_id,omitempty"`
	GeoId  string `protobuf:"bytes,2,opt,name=geo_id,json=geoId,proto3" json:"geo_id,omitempty"`
}

func (x *ZoneToGeoUpdateRequest) Reset() {
	*x = ZoneToGeoUpdateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ZoneToGeoUpdateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ZoneToGeoUpdateRequest) ProtoMessage() {}

func (x *ZoneToGeoUpdateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ZoneToGeoUpdateRequest.ProtoReflect.Descriptor instead.
func (*ZoneToGeoUpdateRequest) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{2}
}

func (x *ZoneToGeoUpdateRequest) GetZoneId() int32 {
	if x != nil {
		return x.ZoneId
	}
	return 0
}

func (x *ZoneToGeoUpdateRequest) GetGeoId() string {
	if x != nil {
		return x.GeoId
	}
	return ""
}

type ListZoneToGeoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit  int32  `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset int32  `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
	Search string `protobuf:"bytes,3,opt,name=search,proto3" json:"search,omitempty"`
	Sort   string `protobuf:"bytes,4,opt,name=sort,proto3" json:"sort,omitempty"`
}

func (x *ListZoneToGeoRequest) Reset() {
	*x = ListZoneToGeoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListZoneToGeoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListZoneToGeoRequest) ProtoMessage() {}

func (x *ListZoneToGeoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListZoneToGeoRequest.ProtoReflect.Descriptor instead.
func (*ListZoneToGeoRequest) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{3}
}

func (x *ListZoneToGeoRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *ListZoneToGeoRequest) GetOffset() int32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

func (x *ListZoneToGeoRequest) GetSearch() string {
	if x != nil {
		return x.Search
	}
	return ""
}

func (x *ListZoneToGeoRequest) GetSort() string {
	if x != nil {
		return x.Sort
	}
	return ""
}

type ListZoneToGeoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*ZoneToGeo `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	Total   int32        `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *ListZoneToGeoResponse) Reset() {
	*x = ListZoneToGeoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListZoneToGeoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListZoneToGeoResponse) ProtoMessage() {}

func (x *ListZoneToGeoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListZoneToGeoResponse.ProtoReflect.Descriptor instead.
func (*ListZoneToGeoResponse) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{4}
}

func (x *ListZoneToGeoResponse) GetResults() []*ZoneToGeo {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *ListZoneToGeoResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

type SuggestZoneToGeoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit  int32  `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Search string `protobuf:"bytes,2,opt,name=search,proto3" json:"search,omitempty"`
}

func (x *SuggestZoneToGeoRequest) Reset() {
	*x = SuggestZoneToGeoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SuggestZoneToGeoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SuggestZoneToGeoRequest) ProtoMessage() {}

func (x *SuggestZoneToGeoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SuggestZoneToGeoRequest.ProtoReflect.Descriptor instead.
func (*SuggestZoneToGeoRequest) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{5}
}

func (x *SuggestZoneToGeoRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *SuggestZoneToGeoRequest) GetSearch() string {
	if x != nil {
		return x.Search
	}
	return ""
}

type SuggestZoneToGeo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GeoId       string `protobuf:"bytes,1,opt,name=geo_id,json=geoId,proto3" json:"geo_id,omitempty"`
	Description string `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	City        string `protobuf:"bytes,3,opt,name=city,proto3" json:"city,omitempty"`
	Region      string `protobuf:"bytes,4,opt,name=region,proto3" json:"region,omitempty"`
}

func (x *SuggestZoneToGeo) Reset() {
	*x = SuggestZoneToGeo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SuggestZoneToGeo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SuggestZoneToGeo) ProtoMessage() {}

func (x *SuggestZoneToGeo) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SuggestZoneToGeo.ProtoReflect.Descriptor instead.
func (*SuggestZoneToGeo) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{6}
}

func (x *SuggestZoneToGeo) GetGeoId() string {
	if x != nil {
		return x.GeoId
	}
	return ""
}

func (x *SuggestZoneToGeo) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *SuggestZoneToGeo) GetCity() string {
	if x != nil {
		return x.City
	}
	return ""
}

func (x *SuggestZoneToGeo) GetRegion() string {
	if x != nil {
		return x.Region
	}
	return ""
}

type SuggestZoneToGeoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*SuggestZoneToGeo `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	Total   int32               `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *SuggestZoneToGeoResponse) Reset() {
	*x = SuggestZoneToGeoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SuggestZoneToGeoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SuggestZoneToGeoResponse) ProtoMessage() {}

func (x *SuggestZoneToGeoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SuggestZoneToGeoResponse.ProtoReflect.Descriptor instead.
func (*SuggestZoneToGeoResponse) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{7}
}

func (x *SuggestZoneToGeoResponse) GetResults() []*SuggestZoneToGeo {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *SuggestZoneToGeoResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

// Validate ZoneToGeo
type ValidateZoneToGeoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GeoIds []string `protobuf:"bytes,1,rep,name=geo_ids,json=geoIds,proto3" json:"geo_ids,omitempty"`
	ZoneId int32    `protobuf:"varint,2,opt,name=zone_id,json=zoneId,proto3" json:"zone_id,omitempty"`
}

func (x *ValidateZoneToGeoRequest) Reset() {
	*x = ValidateZoneToGeoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ValidateZoneToGeoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ValidateZoneToGeoRequest) ProtoMessage() {}

func (x *ValidateZoneToGeoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ValidateZoneToGeoRequest.ProtoReflect.Descriptor instead.
func (*ValidateZoneToGeoRequest) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{8}
}

func (x *ValidateZoneToGeoRequest) GetGeoIds() []string {
	if x != nil {
		return x.GeoIds
	}
	return nil
}

func (x *ValidateZoneToGeoRequest) GetZoneId() int32 {
	if x != nil {
		return x.ZoneId
	}
	return 0
}

type ValidateZoneToGeoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*ZoneToGeoConflict `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	Total   int32                `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *ValidateZoneToGeoResponse) Reset() {
	*x = ValidateZoneToGeoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ValidateZoneToGeoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ValidateZoneToGeoResponse) ProtoMessage() {}

func (x *ValidateZoneToGeoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ValidateZoneToGeoResponse.ProtoReflect.Descriptor instead.
func (*ValidateZoneToGeoResponse) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{9}
}

func (x *ValidateZoneToGeoResponse) GetResults() []*ZoneToGeoConflict {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *ValidateZoneToGeoResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

type ZoneToGeoConflict struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ZoneName    string `protobuf:"bytes,1,opt,name=zone_name,json=zoneName,proto3" json:"zone_name,omitempty"`
	GeoId       string `protobuf:"bytes,2,opt,name=geo_id,json=geoId,proto3" json:"geo_id,omitempty"`
	Description string `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
}

func (x *ZoneToGeoConflict) Reset() {
	*x = ZoneToGeoConflict{}
	if protoimpl.UnsafeEnabled {
		mi := &file_zone_to_geo_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ZoneToGeoConflict) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ZoneToGeoConflict) ProtoMessage() {}

func (x *ZoneToGeoConflict) ProtoReflect() protoreflect.Message {
	mi := &file_zone_to_geo_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ZoneToGeoConflict.ProtoReflect.Descriptor instead.
func (*ZoneToGeoConflict) Descriptor() ([]byte, []int) {
	return file_zone_to_geo_proto_rawDescGZIP(), []int{10}
}

func (x *ZoneToGeoConflict) GetZoneName() string {
	if x != nil {
		return x.ZoneName
	}
	return ""
}

func (x *ZoneToGeoConflict) GetGeoId() string {
	if x != nil {
		return x.GeoId
	}
	return ""
}

func (x *ZoneToGeoConflict) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

var File_zone_to_geo_proto protoreflect.FileDescriptor

var file_zone_to_geo_proto_rawDesc = []byte{
	0x0a, 0x11, 0x7a, 0x6f, 0x6e, 0x65, 0x5f, 0x74, 0x6f, 0x5f, 0x67, 0x65, 0x6f, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x09, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x1a, 0x1c,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d,
	0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0a, 0x7a, 0x6f, 0x6e, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x24, 0x0a, 0x0b, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47,
	0x65, 0x6f, 0x49, 0x64, 0x12, 0x15, 0x0a, 0x06, 0x67, 0x65, 0x6f, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x67, 0x65, 0x6f, 0x49, 0x64, 0x22, 0xdf, 0x01, 0x0a, 0x09,
	0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x12, 0x23, 0x0a, 0x04, 0x7a, 0x6f, 0x6e,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x73, 0x2e, 0x5a, 0x6f, 0x6e, 0x65, 0x52, 0x04, 0x7a, 0x6f, 0x6e, 0x65, 0x12, 0x15,
	0x0a, 0x06, 0x67, 0x65, 0x6f, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x67, 0x65, 0x6f, 0x49, 0x64, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x28, 0x0a, 0x10, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x72, 0x79, 0x5f, 0x69, 0x73, 0x6f, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0e, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x49, 0x73, 0x6f, 0x43, 0x6f, 0x64,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x69, 0x74, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x63, 0x69, 0x74, 0x79, 0x12, 0x1e, 0x0a, 0x0b, 0x63, 0x69, 0x74, 0x79, 0x5f, 0x67, 0x65,
	0x6f, 0x5f, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x69, 0x74, 0x79,
	0x47, 0x65, 0x6f, 0x49, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x18,
	0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x22, 0x48, 0x0a,
	0x16, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x7a, 0x6f, 0x6e, 0x65, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x7a, 0x6f, 0x6e, 0x65, 0x49, 0x64,
	0x12, 0x15, 0x0a, 0x06, 0x67, 0x65, 0x6f, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x67, 0x65, 0x6f, 0x49, 0x64, 0x22, 0x70, 0x0a, 0x14, 0x4c, 0x69, 0x73, 0x74, 0x5a,
	0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05,
	0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x12, 0x16, 0x0a,
	0x06, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73,
	0x65, 0x61, 0x72, 0x63, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x22, 0x5d, 0x0a, 0x15, 0x4c, 0x69, 0x73,
	0x74, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x2e, 0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e,
	0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c,
	0x74, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x22, 0x47, 0x0a, 0x17, 0x53, 0x75, 0x67, 0x67,
	0x65, 0x73, 0x74, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x65, 0x61,
	0x72, 0x63, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x65, 0x61, 0x72, 0x63,
	0x68, 0x22, 0x77, 0x0a, 0x10, 0x53, 0x75, 0x67, 0x67, 0x65, 0x73, 0x74, 0x5a, 0x6f, 0x6e, 0x65,
	0x54, 0x6f, 0x47, 0x65, 0x6f, 0x12, 0x15, 0x0a, 0x06, 0x67, 0x65, 0x6f, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x67, 0x65, 0x6f, 0x49, 0x64, 0x12, 0x20, 0x0a, 0x0b,
	0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x12,
	0x0a, 0x04, 0x63, 0x69, 0x74, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x69,
	0x74, 0x79, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x22, 0x67, 0x0a, 0x18, 0x53, 0x75,
	0x67, 0x67, 0x65, 0x73, 0x74, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x35, 0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x73, 0x2e, 0x53, 0x75, 0x67, 0x67, 0x65, 0x73, 0x74, 0x5a, 0x6f, 0x6e, 0x65, 0x54,
	0x6f, 0x47, 0x65, 0x6f, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x14, 0x0a,
	0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x74, 0x6f,
	0x74, 0x61, 0x6c, 0x22, 0x4c, 0x0a, 0x18, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x5a,
	0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x17, 0x0a, 0x07, 0x67, 0x65, 0x6f, 0x5f, 0x69, 0x64, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x06, 0x67, 0x65, 0x6f, 0x49, 0x64, 0x73, 0x12, 0x17, 0x0a, 0x07, 0x7a, 0x6f, 0x6e, 0x65,
	0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x7a, 0x6f, 0x6e, 0x65, 0x49,
	0x64, 0x22, 0x69, 0x0a, 0x19, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x5a, 0x6f, 0x6e,
	0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x36,
	0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x1c, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x5a, 0x6f, 0x6e, 0x65,
	0x54, 0x6f, 0x47, 0x65, 0x6f, 0x43, 0x6f, 0x6e, 0x66, 0x6c, 0x69, 0x63, 0x74, 0x52, 0x07, 0x72,
	0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x22, 0x69, 0x0a, 0x11,
	0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x43, 0x6f, 0x6e, 0x66, 0x6c, 0x69, 0x63,
	0x74, 0x12, 0x1b, 0x0a, 0x09, 0x7a, 0x6f, 0x6e, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x7a, 0x6f, 0x6e, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x15,
	0x0a, 0x06, 0x67, 0x65, 0x6f, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x67, 0x65, 0x6f, 0x49, 0x64, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x32, 0x9a, 0x05, 0x0a, 0x10, 0x5a, 0x6f, 0x6e, 0x65,
	0x54, 0x6f, 0x47, 0x65, 0x6f, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x66, 0x0a, 0x04,
	0x4c, 0x69, 0x73, 0x74, 0x12, 0x1f, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73,
	0x2e, 0x4c, 0x69, 0x73, 0x74, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x20, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x1b, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x15, 0x12,
	0x13, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x7a, 0x6f, 0x6e, 0x65, 0x2d, 0x74, 0x6f,
	0x2d, 0x67, 0x65, 0x6f, 0x12, 0x7e, 0x0a, 0x08, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65,
	0x12, 0x23, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x56, 0x61, 0x6c,
	0x69, 0x64, 0x61, 0x74, 0x65, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2e, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f,
	0x47, 0x65, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x27, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x21, 0x22, 0x1c, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x7a, 0x6f, 0x6e,
	0x65, 0x2d, 0x74, 0x6f, 0x2d, 0x67, 0x65, 0x6f, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74,
	0x65, 0x3a, 0x01, 0x2a, 0x12, 0x59, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x16, 0x2e, 0x6c, 0x6f,
	0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65,
	0x6f, 0x49, 0x64, 0x1a, 0x14, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e,
	0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x22, 0x24, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x1e, 0x12, 0x1c, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x7a, 0x6f, 0x6e, 0x65, 0x2d,
	0x74, 0x6f, 0x2d, 0x67, 0x65, 0x6f, 0x2f, 0x7b, 0x67, 0x65, 0x6f, 0x5f, 0x69, 0x64, 0x7d, 0x12,
	0x6a, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x21, 0x2e, 0x6c, 0x6f, 0x67, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x14, 0x2e, 0x6c,
	0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47,
	0x65, 0x6f, 0x22, 0x27, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x21, 0x32, 0x1c, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x76, 0x31, 0x2f, 0x7a, 0x6f, 0x6e, 0x65, 0x2d, 0x74, 0x6f, 0x2d, 0x67, 0x65, 0x6f, 0x2f,
	0x7b, 0x67, 0x65, 0x6f, 0x5f, 0x69, 0x64, 0x7d, 0x3a, 0x01, 0x2a, 0x12, 0x5e, 0x0a, 0x06, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x16, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2e, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x49, 0x64, 0x1a, 0x16, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x24, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1e, 0x2a, 0x1c, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x7a, 0x6f, 0x6e, 0x65, 0x2d, 0x74, 0x6f, 0x2d, 0x67,
	0x65, 0x6f, 0x2f, 0x7b, 0x67, 0x65, 0x6f, 0x5f, 0x69, 0x64, 0x7d, 0x12, 0x77, 0x0a, 0x07, 0x53,
	0x75, 0x67, 0x67, 0x65, 0x73, 0x74, 0x12, 0x22, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x73, 0x2e, 0x53, 0x75, 0x67, 0x67, 0x65, 0x73, 0x74, 0x5a, 0x6f, 0x6e, 0x65, 0x54, 0x6f,
	0x47, 0x65, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x6c, 0x6f, 0x67,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x53, 0x75, 0x67, 0x67, 0x65, 0x73, 0x74, 0x5a, 0x6f,
	0x6e, 0x65, 0x54, 0x6f, 0x47, 0x65, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x23, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1d, 0x12, 0x1b, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31,
	0x2f, 0x7a, 0x6f, 0x6e, 0x65, 0x2d, 0x74, 0x6f, 0x2d, 0x67, 0x65, 0x6f, 0x2f, 0x73, 0x75, 0x67,
	0x67, 0x65, 0x73, 0x74, 0x42, 0x0e, 0x5a, 0x0c, 0x67, 0x6f, 0x2f, 0x6c, 0x6f, 0x67, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_zone_to_geo_proto_rawDescOnce sync.Once
	file_zone_to_geo_proto_rawDescData = file_zone_to_geo_proto_rawDesc
)

func file_zone_to_geo_proto_rawDescGZIP() []byte {
	file_zone_to_geo_proto_rawDescOnce.Do(func() {
		file_zone_to_geo_proto_rawDescData = protoimpl.X.CompressGZIP(file_zone_to_geo_proto_rawDescData)
	})
	return file_zone_to_geo_proto_rawDescData
}

var file_zone_to_geo_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_zone_to_geo_proto_goTypes = []interface{}{
	(*ZoneToGeoId)(nil),               // 0: logistics.ZoneToGeoId
	(*ZoneToGeo)(nil),                 // 1: logistics.ZoneToGeo
	(*ZoneToGeoUpdateRequest)(nil),    // 2: logistics.ZoneToGeoUpdateRequest
	(*ListZoneToGeoRequest)(nil),      // 3: logistics.ListZoneToGeoRequest
	(*ListZoneToGeoResponse)(nil),     // 4: logistics.ListZoneToGeoResponse
	(*SuggestZoneToGeoRequest)(nil),   // 5: logistics.SuggestZoneToGeoRequest
	(*SuggestZoneToGeo)(nil),          // 6: logistics.SuggestZoneToGeo
	(*SuggestZoneToGeoResponse)(nil),  // 7: logistics.SuggestZoneToGeoResponse
	(*ValidateZoneToGeoRequest)(nil),  // 8: logistics.ValidateZoneToGeoRequest
	(*ValidateZoneToGeoResponse)(nil), // 9: logistics.ValidateZoneToGeoResponse
	(*ZoneToGeoConflict)(nil),         // 10: logistics.ZoneToGeoConflict
	(*Zone)(nil),                      // 11: logistics.Zone
	(*emptypb.Empty)(nil),             // 12: google.protobuf.Empty
}
var file_zone_to_geo_proto_depIdxs = []int32{
	11, // 0: logistics.ZoneToGeo.zone:type_name -> logistics.Zone
	1,  // 1: logistics.ListZoneToGeoResponse.results:type_name -> logistics.ZoneToGeo
	6,  // 2: logistics.SuggestZoneToGeoResponse.results:type_name -> logistics.SuggestZoneToGeo
	10, // 3: logistics.ValidateZoneToGeoResponse.results:type_name -> logistics.ZoneToGeoConflict
	3,  // 4: logistics.ZoneToGeoService.List:input_type -> logistics.ListZoneToGeoRequest
	8,  // 5: logistics.ZoneToGeoService.Validate:input_type -> logistics.ValidateZoneToGeoRequest
	0,  // 6: logistics.ZoneToGeoService.Get:input_type -> logistics.ZoneToGeoId
	2,  // 7: logistics.ZoneToGeoService.Update:input_type -> logistics.ZoneToGeoUpdateRequest
	0,  // 8: logistics.ZoneToGeoService.Delete:input_type -> logistics.ZoneToGeoId
	5,  // 9: logistics.ZoneToGeoService.Suggest:input_type -> logistics.SuggestZoneToGeoRequest
	4,  // 10: logistics.ZoneToGeoService.List:output_type -> logistics.ListZoneToGeoResponse
	9,  // 11: logistics.ZoneToGeoService.Validate:output_type -> logistics.ValidateZoneToGeoResponse
	1,  // 12: logistics.ZoneToGeoService.Get:output_type -> logistics.ZoneToGeo
	1,  // 13: logistics.ZoneToGeoService.Update:output_type -> logistics.ZoneToGeo
	12, // 14: logistics.ZoneToGeoService.Delete:output_type -> google.protobuf.Empty
	7,  // 15: logistics.ZoneToGeoService.Suggest:output_type -> logistics.SuggestZoneToGeoResponse
	10, // [10:16] is the sub-list for method output_type
	4,  // [4:10] is the sub-list for method input_type
	4,  // [4:4] is the sub-list for extension type_name
	4,  // [4:4] is the sub-list for extension extendee
	0,  // [0:4] is the sub-list for field type_name
}

func init() { file_zone_to_geo_proto_init() }
func file_zone_to_geo_proto_init() {
	if File_zone_to_geo_proto != nil {
		return
	}
	file_zone_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_zone_to_geo_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ZoneToGeoId); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ZoneToGeo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ZoneToGeoUpdateRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListZoneToGeoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListZoneToGeoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SuggestZoneToGeoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SuggestZoneToGeo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SuggestZoneToGeoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ValidateZoneToGeoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ValidateZoneToGeoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_zone_to_geo_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ZoneToGeoConflict); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_zone_to_geo_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_zone_to_geo_proto_goTypes,
		DependencyIndexes: file_zone_to_geo_proto_depIdxs,
		MessageInfos:      file_zone_to_geo_proto_msgTypes,
	}.Build()
	File_zone_to_geo_proto = out.File
	file_zone_to_geo_proto_rawDesc = nil
	file_zone_to_geo_proto_goTypes = nil
	file_zone_to_geo_proto_depIdxs = nil
}
