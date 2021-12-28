// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.1
// source: delivery_mode.proto

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

type DeliveryModeId struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *DeliveryModeId) Reset() {
	*x = DeliveryModeId{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_mode_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeliveryModeId) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeliveryModeId) ProtoMessage() {}

func (x *DeliveryModeId) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_mode_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeliveryModeId.ProtoReflect.Descriptor instead.
func (*DeliveryModeId) Descriptor() ([]byte, []int) {
	return file_delivery_mode_proto_rawDescGZIP(), []int{0}
}

func (x *DeliveryModeId) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type DeliveryMode struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             int32  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	TitleRu        string `protobuf:"bytes,2,opt,name=title_ru,json=titleRu,proto3" json:"title_ru,omitempty"`
	IsActive       bool   `protobuf:"varint,3,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	IsBackupMethod bool   `protobuf:"varint,4,opt,name=is_backup_method,json=isBackupMethod,proto3" json:"is_backup_method,omitempty"`
	CreatedAt      string `protobuf:"bytes,5,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt      string `protobuf:"bytes,6,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
}

func (x *DeliveryMode) Reset() {
	*x = DeliveryMode{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_mode_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeliveryMode) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeliveryMode) ProtoMessage() {}

func (x *DeliveryMode) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_mode_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeliveryMode.ProtoReflect.Descriptor instead.
func (*DeliveryMode) Descriptor() ([]byte, []int) {
	return file_delivery_mode_proto_rawDescGZIP(), []int{1}
}

func (x *DeliveryMode) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *DeliveryMode) GetTitleRu() string {
	if x != nil {
		return x.TitleRu
	}
	return ""
}

func (x *DeliveryMode) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *DeliveryMode) GetIsBackupMethod() bool {
	if x != nil {
		return x.IsBackupMethod
	}
	return false
}

func (x *DeliveryMode) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *DeliveryMode) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

type ListDeliveryModeRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit  int32  `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset int32  `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
	Search string `protobuf:"bytes,3,opt,name=search,proto3" json:"search,omitempty"`
	Sort   string `protobuf:"bytes,4,opt,name=sort,proto3" json:"sort,omitempty"`
}

func (x *ListDeliveryModeRequest) Reset() {
	*x = ListDeliveryModeRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_mode_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListDeliveryModeRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListDeliveryModeRequest) ProtoMessage() {}

func (x *ListDeliveryModeRequest) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_mode_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListDeliveryModeRequest.ProtoReflect.Descriptor instead.
func (*ListDeliveryModeRequest) Descriptor() ([]byte, []int) {
	return file_delivery_mode_proto_rawDescGZIP(), []int{2}
}

func (x *ListDeliveryModeRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *ListDeliveryModeRequest) GetOffset() int32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

func (x *ListDeliveryModeRequest) GetSearch() string {
	if x != nil {
		return x.Search
	}
	return ""
}

func (x *ListDeliveryModeRequest) GetSort() string {
	if x != nil {
		return x.Sort
	}
	return ""
}

type ListDeliveryModeResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*DeliveryMode `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	Total   int32           `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *ListDeliveryModeResponse) Reset() {
	*x = ListDeliveryModeResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_mode_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListDeliveryModeResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListDeliveryModeResponse) ProtoMessage() {}

func (x *ListDeliveryModeResponse) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_mode_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListDeliveryModeResponse.ProtoReflect.Descriptor instead.
func (*ListDeliveryModeResponse) Descriptor() ([]byte, []int) {
	return file_delivery_mode_proto_rawDescGZIP(), []int{3}
}

func (x *ListDeliveryModeResponse) GetResults() []*DeliveryMode {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *ListDeliveryModeResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

var File_delivery_mode_proto protoreflect.FileDescriptor

var file_delivery_mode_proto_rawDesc = []byte{
	0x0a, 0x13, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x5f, 0x6d, 0x6f, 0x64, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73,
	0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e,
	0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x20, 0x0a, 0x0e, 0x44,
	0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x49, 0x64, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x22, 0xbe, 0x01,
	0x0a, 0x0c, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x19,
	0x0a, 0x08, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x5f, 0x72, 0x75, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x07, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x52, 0x75, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f,
	0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73,
	0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x28, 0x0a, 0x10, 0x69, 0x73, 0x5f, 0x62, 0x61, 0x63,
	0x6b, 0x75, 0x70, 0x5f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x0e, 0x69, 0x73, 0x42, 0x61, 0x63, 0x6b, 0x75, 0x70, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12,
	0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x22, 0x73,
	0x0a, 0x17, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f,
	0x64, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d,
	0x69, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12,
	0x16, 0x0a, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x65, 0x61, 0x72, 0x63,
	0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x12,
	0x12, 0x0a, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73,
	0x6f, 0x72, 0x74, 0x22, 0x63, 0x0a, 0x18, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x6c, 0x69, 0x76,
	0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x31, 0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x44, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c,
	0x74, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x32, 0x86, 0x04, 0x0a, 0x13, 0x44, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x6e, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x22, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72,
	0x79, 0x4d, 0x6f, 0x64, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x6c,
	0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x1d, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x17, 0x12, 0x15, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d, 0x6d, 0x6f, 0x64, 0x65,
	0x12, 0x5c, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x17, 0x2e, 0x6c, 0x6f, 0x67,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d,
	0x6f, 0x64, 0x65, 0x1a, 0x17, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e,
	0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x22, 0x20, 0x82, 0xd3,
	0xe4, 0x93, 0x02, 0x1a, 0x22, 0x15, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x65,
	0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d, 0x6d, 0x6f, 0x64, 0x65, 0x3a, 0x01, 0x2a, 0x12, 0x5d,
	0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x19, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x49, 0x64,
	0x1a, 0x17, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x44, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x22, 0x22, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x1c, 0x12, 0x1a, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x65, 0x6c, 0x69, 0x76,
	0x65, 0x72, 0x79, 0x2d, 0x6d, 0x6f, 0x64, 0x65, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x12, 0x61, 0x0a,
	0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x17, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74,
	0x69, 0x63, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65,
	0x1a, 0x17, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x44, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x6f, 0x64, 0x65, 0x22, 0x25, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x1f, 0x32, 0x1a, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x65, 0x6c, 0x69, 0x76,
	0x65, 0x72, 0x79, 0x2d, 0x6d, 0x6f, 0x64, 0x65, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x3a, 0x01, 0x2a,
	0x12, 0x5f, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x19, 0x2e, 0x6c, 0x6f, 0x67,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d,
	0x6f, 0x64, 0x65, 0x49, 0x64, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x22, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x1c, 0x2a, 0x1a, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x64,
	0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d, 0x6d, 0x6f, 0x64, 0x65, 0x2f, 0x7b, 0x69, 0x64,
	0x7d, 0x42, 0x0e, 0x5a, 0x0c, 0x67, 0x6f, 0x2f, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_delivery_mode_proto_rawDescOnce sync.Once
	file_delivery_mode_proto_rawDescData = file_delivery_mode_proto_rawDesc
)

func file_delivery_mode_proto_rawDescGZIP() []byte {
	file_delivery_mode_proto_rawDescOnce.Do(func() {
		file_delivery_mode_proto_rawDescData = protoimpl.X.CompressGZIP(file_delivery_mode_proto_rawDescData)
	})
	return file_delivery_mode_proto_rawDescData
}

var file_delivery_mode_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_delivery_mode_proto_goTypes = []interface{}{
	(*DeliveryModeId)(nil),           // 0: logistics.DeliveryModeId
	(*DeliveryMode)(nil),             // 1: logistics.DeliveryMode
	(*ListDeliveryModeRequest)(nil),  // 2: logistics.ListDeliveryModeRequest
	(*ListDeliveryModeResponse)(nil), // 3: logistics.ListDeliveryModeResponse
	(*emptypb.Empty)(nil),            // 4: google.protobuf.Empty
}
var file_delivery_mode_proto_depIdxs = []int32{
	1, // 0: logistics.ListDeliveryModeResponse.results:type_name -> logistics.DeliveryMode
	2, // 1: logistics.DeliveryModeService.List:input_type -> logistics.ListDeliveryModeRequest
	1, // 2: logistics.DeliveryModeService.Create:input_type -> logistics.DeliveryMode
	0, // 3: logistics.DeliveryModeService.Get:input_type -> logistics.DeliveryModeId
	1, // 4: logistics.DeliveryModeService.Update:input_type -> logistics.DeliveryMode
	0, // 5: logistics.DeliveryModeService.Delete:input_type -> logistics.DeliveryModeId
	3, // 6: logistics.DeliveryModeService.List:output_type -> logistics.ListDeliveryModeResponse
	1, // 7: logistics.DeliveryModeService.Create:output_type -> logistics.DeliveryMode
	1, // 8: logistics.DeliveryModeService.Get:output_type -> logistics.DeliveryMode
	1, // 9: logistics.DeliveryModeService.Update:output_type -> logistics.DeliveryMode
	4, // 10: logistics.DeliveryModeService.Delete:output_type -> google.protobuf.Empty
	6, // [6:11] is the sub-list for method output_type
	1, // [1:6] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_delivery_mode_proto_init() }
func file_delivery_mode_proto_init() {
	if File_delivery_mode_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_delivery_mode_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeliveryModeId); i {
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
		file_delivery_mode_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeliveryMode); i {
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
		file_delivery_mode_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListDeliveryModeRequest); i {
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
		file_delivery_mode_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListDeliveryModeResponse); i {
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
			RawDescriptor: file_delivery_mode_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_delivery_mode_proto_goTypes,
		DependencyIndexes: file_delivery_mode_proto_depIdxs,
		MessageInfos:      file_delivery_mode_proto_msgTypes,
	}.Build()
	File_delivery_mode_proto = out.File
	file_delivery_mode_proto_rawDesc = nil
	file_delivery_mode_proto_goTypes = nil
	file_delivery_mode_proto_depIdxs = nil
}
