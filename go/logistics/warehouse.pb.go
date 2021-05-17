// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.14.0
// source: proto/logistics/warehouse.proto

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

type WarehouseId struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	WarehouseId int32 `protobuf:"varint,1,opt,name=warehouse_id,json=warehouseId,proto3" json:"warehouse_id,omitempty"`
}

func (x *WarehouseId) Reset() {
	*x = WarehouseId{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_warehouse_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WarehouseId) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WarehouseId) ProtoMessage() {}

func (x *WarehouseId) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_warehouse_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WarehouseId.ProtoReflect.Descriptor instead.
func (*WarehouseId) Descriptor() ([]byte, []int) {
	return file_proto_logistics_warehouse_proto_rawDescGZIP(), []int{0}
}

func (x *WarehouseId) GetWarehouseId() int32 {
	if x != nil {
		return x.WarehouseId
	}
	return 0
}

type Warehouse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	WarehouseId    int32  `protobuf:"varint,1,opt,name=warehouse_id,json=warehouseId,proto3" json:"warehouse_id,omitempty"`
	Name           string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	PostalCode     string `protobuf:"bytes,3,opt,name=postal_code,json=postalCode,proto3" json:"postal_code,omitempty"`
	CountryIsoCode string `protobuf:"bytes,4,opt,name=country_iso_code,json=countryIsoCode,proto3" json:"country_iso_code,omitempty"`
	IsActive       bool   `protobuf:"varint,5,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	Created        string `protobuf:"bytes,6,opt,name=created,proto3" json:"created,omitempty"`
	Updated        string `protobuf:"bytes,7,opt,name=updated,proto3" json:"updated,omitempty"`
}

func (x *Warehouse) Reset() {
	*x = Warehouse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_warehouse_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Warehouse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Warehouse) ProtoMessage() {}

func (x *Warehouse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_warehouse_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Warehouse.ProtoReflect.Descriptor instead.
func (*Warehouse) Descriptor() ([]byte, []int) {
	return file_proto_logistics_warehouse_proto_rawDescGZIP(), []int{1}
}

func (x *Warehouse) GetWarehouseId() int32 {
	if x != nil {
		return x.WarehouseId
	}
	return 0
}

func (x *Warehouse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Warehouse) GetPostalCode() string {
	if x != nil {
		return x.PostalCode
	}
	return ""
}

func (x *Warehouse) GetCountryIsoCode() string {
	if x != nil {
		return x.CountryIsoCode
	}
	return ""
}

func (x *Warehouse) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *Warehouse) GetCreated() string {
	if x != nil {
		return x.Created
	}
	return ""
}

func (x *Warehouse) GetUpdated() string {
	if x != nil {
		return x.Updated
	}
	return ""
}

type ListWarehousesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit  int32 `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset int32 `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
}

func (x *ListWarehousesRequest) Reset() {
	*x = ListWarehousesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_warehouse_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListWarehousesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListWarehousesRequest) ProtoMessage() {}

func (x *ListWarehousesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_warehouse_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListWarehousesRequest.ProtoReflect.Descriptor instead.
func (*ListWarehousesRequest) Descriptor() ([]byte, []int) {
	return file_proto_logistics_warehouse_proto_rawDescGZIP(), []int{2}
}

func (x *ListWarehousesRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *ListWarehousesRequest) GetOffset() int32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

type ListWarehousesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*Warehouse `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	Total   int32        `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *ListWarehousesResponse) Reset() {
	*x = ListWarehousesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_warehouse_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListWarehousesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListWarehousesResponse) ProtoMessage() {}

func (x *ListWarehousesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_warehouse_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListWarehousesResponse.ProtoReflect.Descriptor instead.
func (*ListWarehousesResponse) Descriptor() ([]byte, []int) {
	return file_proto_logistics_warehouse_proto_rawDescGZIP(), []int{3}
}

func (x *ListWarehousesResponse) GetResults() []*Warehouse {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *ListWarehousesResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

var File_proto_logistics_warehouse_proto protoreflect.FileDescriptor

var file_proto_logistics_warehouse_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2f, 0x77, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x09, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x1a, 0x1c, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74,
	0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x30, 0x0a, 0x0b, 0x57, 0x61, 0x72, 0x65, 0x68,
	0x6f, 0x75, 0x73, 0x65, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x77, 0x61, 0x72, 0x65, 0x68, 0x6f,
	0x75, 0x73, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x77, 0x61,
	0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x49, 0x64, 0x22, 0xde, 0x01, 0x0a, 0x09, 0x57, 0x61,
	0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x77, 0x61, 0x72, 0x65, 0x68,
	0x6f, 0x75, 0x73, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x77,
	0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1f,
	0x0a, 0x0b, 0x70, 0x6f, 0x73, 0x74, 0x61, 0x6c, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0a, 0x70, 0x6f, 0x73, 0x74, 0x61, 0x6c, 0x43, 0x6f, 0x64, 0x65, 0x12,
	0x28, 0x0a, 0x10, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x5f, 0x69, 0x73, 0x6f, 0x5f, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x72, 0x79, 0x49, 0x73, 0x6f, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f,
	0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73,
	0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x12, 0x18, 0x0a, 0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x22, 0x45, 0x0a, 0x15, 0x4c, 0x69,
	0x73, 0x74, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x66, 0x66,
	0x73, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65,
	0x74, 0x22, 0x5e, 0x0a, 0x16, 0x4c, 0x69, 0x73, 0x74, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75,
	0x73, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x07, 0x72,
	0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x6c,
	0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75,
	0x73, 0x65, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x74,
	0x6f, 0x74, 0x61, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61,
	0x6c, 0x32, 0xe1, 0x03, 0x0a, 0x0a, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x73,
	0x12, 0x51, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x14, 0x2e, 0x6c, 0x6f, 0x67,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65,
	0x1a, 0x16, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x57, 0x61, 0x72,
	0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x49, 0x64, 0x22, 0x19, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x13,
	0x22, 0x0e, 0x2f, 0x76, 0x31, 0x2f, 0x77, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x73,
	0x3a, 0x01, 0x2a, 0x12, 0x5a, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x16, 0x2e, 0x6c, 0x6f, 0x67,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65,
	0x49, 0x64, 0x1a, 0x14, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x57,
	0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x22, 0x25, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1f,
	0x12, 0x1d, 0x2f, 0x76, 0x31, 0x2f, 0x77, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x73,
	0x2f, 0x7b, 0x77, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x5f, 0x69, 0x64, 0x7d, 0x12,
	0x63, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x20, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73,
	0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x6c, 0x6f, 0x67, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f,
	0x75, 0x73, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x16, 0x82, 0xd3,
	0xe4, 0x93, 0x02, 0x10, 0x12, 0x0e, 0x2f, 0x76, 0x31, 0x2f, 0x77, 0x61, 0x72, 0x65, 0x68, 0x6f,
	0x75, 0x73, 0x65, 0x73, 0x12, 0x5e, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x14,
	0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x57, 0x61, 0x72, 0x65, 0x68,
	0x6f, 0x75, 0x73, 0x65, 0x1a, 0x14, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73,
	0x2e, 0x57, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x22, 0x28, 0x82, 0xd3, 0xe4, 0x93,
	0x02, 0x22, 0x32, 0x1d, 0x2f, 0x76, 0x31, 0x2f, 0x77, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73,
	0x65, 0x73, 0x2f, 0x7b, 0x77, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73, 0x65, 0x5f, 0x69, 0x64,
	0x7d, 0x3a, 0x01, 0x2a, 0x12, 0x5f, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x16,
	0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x57, 0x61, 0x72, 0x65, 0x68,
	0x6f, 0x75, 0x73, 0x65, 0x49, 0x64, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x25,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1f, 0x2a, 0x1d, 0x2f, 0x76, 0x31, 0x2f, 0x77, 0x61, 0x72, 0x65,
	0x68, 0x6f, 0x75, 0x73, 0x65, 0x73, 0x2f, 0x7b, 0x77, 0x61, 0x72, 0x65, 0x68, 0x6f, 0x75, 0x73,
	0x65, 0x5f, 0x69, 0x64, 0x7d, 0x42, 0x0e, 0x5a, 0x0c, 0x67, 0x6f, 0x2f, 0x6c, 0x6f, 0x67, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_logistics_warehouse_proto_rawDescOnce sync.Once
	file_proto_logistics_warehouse_proto_rawDescData = file_proto_logistics_warehouse_proto_rawDesc
)

func file_proto_logistics_warehouse_proto_rawDescGZIP() []byte {
	file_proto_logistics_warehouse_proto_rawDescOnce.Do(func() {
		file_proto_logistics_warehouse_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_logistics_warehouse_proto_rawDescData)
	})
	return file_proto_logistics_warehouse_proto_rawDescData
}

var file_proto_logistics_warehouse_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_proto_logistics_warehouse_proto_goTypes = []interface{}{
	(*WarehouseId)(nil),            // 0: logistics.WarehouseId
	(*Warehouse)(nil),              // 1: logistics.Warehouse
	(*ListWarehousesRequest)(nil),  // 2: logistics.ListWarehousesRequest
	(*ListWarehousesResponse)(nil), // 3: logistics.ListWarehousesResponse
	(*emptypb.Empty)(nil),          // 4: google.protobuf.Empty
}
var file_proto_logistics_warehouse_proto_depIdxs = []int32{
	1, // 0: logistics.ListWarehousesResponse.results:type_name -> logistics.Warehouse
	1, // 1: logistics.Warehouses.Create:input_type -> logistics.Warehouse
	0, // 2: logistics.Warehouses.Get:input_type -> logistics.WarehouseId
	2, // 3: logistics.Warehouses.List:input_type -> logistics.ListWarehousesRequest
	1, // 4: logistics.Warehouses.Update:input_type -> logistics.Warehouse
	0, // 5: logistics.Warehouses.Delete:input_type -> logistics.WarehouseId
	0, // 6: logistics.Warehouses.Create:output_type -> logistics.WarehouseId
	1, // 7: logistics.Warehouses.Get:output_type -> logistics.Warehouse
	3, // 8: logistics.Warehouses.List:output_type -> logistics.ListWarehousesResponse
	1, // 9: logistics.Warehouses.Update:output_type -> logistics.Warehouse
	4, // 10: logistics.Warehouses.Delete:output_type -> google.protobuf.Empty
	6, // [6:11] is the sub-list for method output_type
	1, // [1:6] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_proto_logistics_warehouse_proto_init() }
func file_proto_logistics_warehouse_proto_init() {
	if File_proto_logistics_warehouse_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_logistics_warehouse_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WarehouseId); i {
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
		file_proto_logistics_warehouse_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Warehouse); i {
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
		file_proto_logistics_warehouse_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListWarehousesRequest); i {
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
		file_proto_logistics_warehouse_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListWarehousesResponse); i {
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
			RawDescriptor: file_proto_logistics_warehouse_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_logistics_warehouse_proto_goTypes,
		DependencyIndexes: file_proto_logistics_warehouse_proto_depIdxs,
		MessageInfos:      file_proto_logistics_warehouse_proto_msgTypes,
	}.Build()
	File_proto_logistics_warehouse_proto = out.File
	file_proto_logistics_warehouse_proto_rawDesc = nil
	file_proto_logistics_warehouse_proto_goTypes = nil
	file_proto_logistics_warehouse_proto_depIdxs = nil
}