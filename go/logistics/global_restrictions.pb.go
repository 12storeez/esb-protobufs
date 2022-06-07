// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.19.2
// source: global_restrictions.proto

package logistics

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GlobalRestriction_Restriction int32

const (
	GlobalRestriction_price    GlobalRestriction_Restriction = 0
	GlobalRestriction_quantity GlobalRestriction_Restriction = 1
)

// Enum value maps for GlobalRestriction_Restriction.
var (
	GlobalRestriction_Restriction_name = map[int32]string{
		0: "price",
		1: "quantity",
	}
	GlobalRestriction_Restriction_value = map[string]int32{
		"price":    0,
		"quantity": 1,
	}
)

func (x GlobalRestriction_Restriction) Enum() *GlobalRestriction_Restriction {
	p := new(GlobalRestriction_Restriction)
	*p = x
	return p
}

func (x GlobalRestriction_Restriction) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (GlobalRestriction_Restriction) Descriptor() protoreflect.EnumDescriptor {
	return file_global_restrictions_proto_enumTypes[0].Descriptor()
}

func (GlobalRestriction_Restriction) Type() protoreflect.EnumType {
	return &file_global_restrictions_proto_enumTypes[0]
}

func (x GlobalRestriction_Restriction) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use GlobalRestriction_Restriction.Descriptor instead.
func (GlobalRestriction_Restriction) EnumDescriptor() ([]byte, []int) {
	return file_global_restrictions_proto_rawDescGZIP(), []int{0, 0}
}

type UpdateGlobalRestriction_Restriction int32

const (
	UpdateGlobalRestriction_price    UpdateGlobalRestriction_Restriction = 0
	UpdateGlobalRestriction_quantity UpdateGlobalRestriction_Restriction = 1
)

// Enum value maps for UpdateGlobalRestriction_Restriction.
var (
	UpdateGlobalRestriction_Restriction_name = map[int32]string{
		0: "price",
		1: "quantity",
	}
	UpdateGlobalRestriction_Restriction_value = map[string]int32{
		"price":    0,
		"quantity": 1,
	}
)

func (x UpdateGlobalRestriction_Restriction) Enum() *UpdateGlobalRestriction_Restriction {
	p := new(UpdateGlobalRestriction_Restriction)
	*p = x
	return p
}

func (x UpdateGlobalRestriction_Restriction) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (UpdateGlobalRestriction_Restriction) Descriptor() protoreflect.EnumDescriptor {
	return file_global_restrictions_proto_enumTypes[1].Descriptor()
}

func (UpdateGlobalRestriction_Restriction) Type() protoreflect.EnumType {
	return &file_global_restrictions_proto_enumTypes[1]
}

func (x UpdateGlobalRestriction_Restriction) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use UpdateGlobalRestriction_Restriction.Descriptor instead.
func (UpdateGlobalRestriction_Restriction) EnumDescriptor() ([]byte, []int) {
	return file_global_restrictions_proto_rawDescGZIP(), []int{1, 0}
}

type GlobalRestriction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int32                         `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	MessageId   *Message                      `protobuf:"bytes,2,opt,name=message_id,json=messageId,proto3" json:"message_id,omitempty"`
	PopupId     *Popup                        `protobuf:"bytes,3,opt,name=popup_id,json=popupId,proto3" json:"popup_id,omitempty"`
	Restriction GlobalRestriction_Restriction `protobuf:"varint,4,opt,name=restriction,proto3,enum=logistics.GlobalRestriction_Restriction" json:"restriction,omitempty"`
	Value       int32                         `protobuf:"varint,5,opt,name=value,proto3" json:"value,omitempty"`
	IsActive    bool                          `protobuf:"varint,6,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	CreatedAt   string                        `protobuf:"bytes,7,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt   string                        `protobuf:"bytes,8,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
}

func (x *GlobalRestriction) Reset() {
	*x = GlobalRestriction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_global_restrictions_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GlobalRestriction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GlobalRestriction) ProtoMessage() {}

func (x *GlobalRestriction) ProtoReflect() protoreflect.Message {
	mi := &file_global_restrictions_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GlobalRestriction.ProtoReflect.Descriptor instead.
func (*GlobalRestriction) Descriptor() ([]byte, []int) {
	return file_global_restrictions_proto_rawDescGZIP(), []int{0}
}

func (x *GlobalRestriction) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *GlobalRestriction) GetMessageId() *Message {
	if x != nil {
		return x.MessageId
	}
	return nil
}

func (x *GlobalRestriction) GetPopupId() *Popup {
	if x != nil {
		return x.PopupId
	}
	return nil
}

func (x *GlobalRestriction) GetRestriction() GlobalRestriction_Restriction {
	if x != nil {
		return x.Restriction
	}
	return GlobalRestriction_price
}

func (x *GlobalRestriction) GetValue() int32 {
	if x != nil {
		return x.Value
	}
	return 0
}

func (x *GlobalRestriction) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *GlobalRestriction) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *GlobalRestriction) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

type UpdateGlobalRestriction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int32                               `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	MessageId   int32                               `protobuf:"varint,2,opt,name=message_id,json=messageId,proto3" json:"message_id,omitempty"`
	PopupId     int32                               `protobuf:"varint,3,opt,name=popup_id,json=popupId,proto3" json:"popup_id,omitempty"`
	Restriction UpdateGlobalRestriction_Restriction `protobuf:"varint,4,opt,name=restriction,proto3,enum=logistics.UpdateGlobalRestriction_Restriction" json:"restriction,omitempty"`
	Value       int32                               `protobuf:"varint,5,opt,name=value,proto3" json:"value,omitempty"`
	IsActive    bool                                `protobuf:"varint,6,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
}

func (x *UpdateGlobalRestriction) Reset() {
	*x = UpdateGlobalRestriction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_global_restrictions_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateGlobalRestriction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateGlobalRestriction) ProtoMessage() {}

func (x *UpdateGlobalRestriction) ProtoReflect() protoreflect.Message {
	mi := &file_global_restrictions_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateGlobalRestriction.ProtoReflect.Descriptor instead.
func (*UpdateGlobalRestriction) Descriptor() ([]byte, []int) {
	return file_global_restrictions_proto_rawDescGZIP(), []int{1}
}

func (x *UpdateGlobalRestriction) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *UpdateGlobalRestriction) GetMessageId() int32 {
	if x != nil {
		return x.MessageId
	}
	return 0
}

func (x *UpdateGlobalRestriction) GetPopupId() int32 {
	if x != nil {
		return x.PopupId
	}
	return 0
}

func (x *UpdateGlobalRestriction) GetRestriction() UpdateGlobalRestriction_Restriction {
	if x != nil {
		return x.Restriction
	}
	return UpdateGlobalRestriction_price
}

func (x *UpdateGlobalRestriction) GetValue() int32 {
	if x != nil {
		return x.Value
	}
	return 0
}

func (x *UpdateGlobalRestriction) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

type ListGlobalRestrictionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit  int32  `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset int32  `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
	Search string `protobuf:"bytes,3,opt,name=search,proto3" json:"search,omitempty"`
	Sort   string `protobuf:"bytes,4,opt,name=sort,proto3" json:"sort,omitempty"`
}

func (x *ListGlobalRestrictionRequest) Reset() {
	*x = ListGlobalRestrictionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_global_restrictions_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListGlobalRestrictionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListGlobalRestrictionRequest) ProtoMessage() {}

func (x *ListGlobalRestrictionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_global_restrictions_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListGlobalRestrictionRequest.ProtoReflect.Descriptor instead.
func (*ListGlobalRestrictionRequest) Descriptor() ([]byte, []int) {
	return file_global_restrictions_proto_rawDescGZIP(), []int{2}
}

func (x *ListGlobalRestrictionRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *ListGlobalRestrictionRequest) GetOffset() int32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

func (x *ListGlobalRestrictionRequest) GetSearch() string {
	if x != nil {
		return x.Search
	}
	return ""
}

func (x *ListGlobalRestrictionRequest) GetSort() string {
	if x != nil {
		return x.Sort
	}
	return ""
}

type ListGlobalRestrictionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*GlobalRestriction `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	Total   int32                `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *ListGlobalRestrictionResponse) Reset() {
	*x = ListGlobalRestrictionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_global_restrictions_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListGlobalRestrictionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListGlobalRestrictionResponse) ProtoMessage() {}

func (x *ListGlobalRestrictionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_global_restrictions_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListGlobalRestrictionResponse.ProtoReflect.Descriptor instead.
func (*ListGlobalRestrictionResponse) Descriptor() ([]byte, []int) {
	return file_global_restrictions_proto_rawDescGZIP(), []int{3}
}

func (x *ListGlobalRestrictionResponse) GetResults() []*GlobalRestriction {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *ListGlobalRestrictionResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

var File_global_restrictions_proto protoreflect.FileDescriptor

var file_global_restrictions_proto_rawDesc = []byte{
	0x0a, 0x19, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x5f, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x6c, 0x6f, 0x67,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x0b, 0x70, 0x6f, 0x70, 0x75, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0xe8, 0x02, 0x0a, 0x11, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x74, 0x72,
	0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x31, 0x0a, 0x0a, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x6c, 0x6f, 0x67,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x09,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x49, 0x64, 0x12, 0x2b, 0x0a, 0x08, 0x70, 0x6f, 0x70,
	0x75, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x6c, 0x6f,
	0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x50, 0x6f, 0x70, 0x75, 0x70, 0x52, 0x07, 0x70,
	0x6f, 0x70, 0x75, 0x70, 0x49, 0x64, 0x12, 0x4a, 0x0a, 0x0b, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x28, 0x2e, 0x6c, 0x6f,
	0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65,
	0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x61,
	0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x41,
	0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x5f, 0x61, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f,
	0x61, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x64, 0x41, 0x74, 0x22, 0x26, 0x0a, 0x0b, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x09, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x10, 0x00, 0x12, 0x0c, 0x0a,
	0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x10, 0x01, 0x22, 0x90, 0x02, 0x0a, 0x17,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x74,
	0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x6d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x70, 0x6f, 0x70, 0x75, 0x70, 0x5f,
	0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07, 0x70, 0x6f, 0x70, 0x75, 0x70, 0x49,
	0x64, 0x12, 0x50, 0x0a, 0x0b, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2e, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52,
	0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x52, 0x65, 0x73, 0x74, 0x72,
	0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f,
	0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73,
	0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x22, 0x26, 0x0a, 0x0b, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x09, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x10, 0x00,
	0x12, 0x0c, 0x0a, 0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x10, 0x01, 0x22, 0x78,
	0x0a, 0x1c, 0x4c, 0x69, 0x73, 0x74, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x74,
	0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14,
	0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c,
	0x69, 0x6d, 0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x12, 0x16, 0x0a, 0x06,
	0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x65,
	0x61, 0x72, 0x63, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x73, 0x6f, 0x72, 0x74, 0x22, 0x6d, 0x0a, 0x1d, 0x4c, 0x69, 0x73, 0x74,
	0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x36, 0x0a, 0x07, 0x72, 0x65, 0x73,
	0x75, 0x6c, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x6c, 0x6f, 0x67,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73,
	0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74,
	0x73, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x32, 0x85, 0x03, 0x0a, 0x19, 0x47, 0x6c, 0x6f, 0x62,
	0x61, 0x6c, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x7d, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x27, 0x2e,
	0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x47, 0x6c,
	0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x28, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73,
	0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x22, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1c, 0x12, 0x1a, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x67, 0x6c,
	0x6f, 0x62, 0x61, 0x6c, 0x12, 0x71, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x22,
	0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x1a, 0x1c, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x47,
	0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x22, 0x25, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1f, 0x22, 0x1a, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x67, 0x6c,
	0x6f, 0x62, 0x61, 0x6c, 0x3a, 0x01, 0x2a, 0x12, 0x76, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x12, 0x22, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x1c, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2e, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x22, 0x2a, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x24, 0x32, 0x1f, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x76, 0x31, 0x2f, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x2f, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x3a, 0x01, 0x2a, 0x42,
	0x0e, 0x5a, 0x0c, 0x67, 0x6f, 0x2f, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_global_restrictions_proto_rawDescOnce sync.Once
	file_global_restrictions_proto_rawDescData = file_global_restrictions_proto_rawDesc
)

func file_global_restrictions_proto_rawDescGZIP() []byte {
	file_global_restrictions_proto_rawDescOnce.Do(func() {
		file_global_restrictions_proto_rawDescData = protoimpl.X.CompressGZIP(file_global_restrictions_proto_rawDescData)
	})
	return file_global_restrictions_proto_rawDescData
}

var file_global_restrictions_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_global_restrictions_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_global_restrictions_proto_goTypes = []interface{}{
	(GlobalRestriction_Restriction)(0),       // 0: logistics.GlobalRestriction.Restriction
	(UpdateGlobalRestriction_Restriction)(0), // 1: logistics.UpdateGlobalRestriction.Restriction
	(*GlobalRestriction)(nil),                // 2: logistics.GlobalRestriction
	(*UpdateGlobalRestriction)(nil),          // 3: logistics.UpdateGlobalRestriction
	(*ListGlobalRestrictionRequest)(nil),     // 4: logistics.ListGlobalRestrictionRequest
	(*ListGlobalRestrictionResponse)(nil),    // 5: logistics.ListGlobalRestrictionResponse
	(*Message)(nil),                          // 6: logistics.Message
	(*Popup)(nil),                            // 7: logistics.Popup
}
var file_global_restrictions_proto_depIdxs = []int32{
	6, // 0: logistics.GlobalRestriction.message_id:type_name -> logistics.Message
	7, // 1: logistics.GlobalRestriction.popup_id:type_name -> logistics.Popup
	0, // 2: logistics.GlobalRestriction.restriction:type_name -> logistics.GlobalRestriction.Restriction
	1, // 3: logistics.UpdateGlobalRestriction.restriction:type_name -> logistics.UpdateGlobalRestriction.Restriction
	2, // 4: logistics.ListGlobalRestrictionResponse.results:type_name -> logistics.GlobalRestriction
	4, // 5: logistics.GlobalRestrictionsService.List:input_type -> logistics.ListGlobalRestrictionRequest
	3, // 6: logistics.GlobalRestrictionsService.Create:input_type -> logistics.UpdateGlobalRestriction
	3, // 7: logistics.GlobalRestrictionsService.Update:input_type -> logistics.UpdateGlobalRestriction
	5, // 8: logistics.GlobalRestrictionsService.List:output_type -> logistics.ListGlobalRestrictionResponse
	2, // 9: logistics.GlobalRestrictionsService.Create:output_type -> logistics.GlobalRestriction
	2, // 10: logistics.GlobalRestrictionsService.Update:output_type -> logistics.GlobalRestriction
	8, // [8:11] is the sub-list for method output_type
	5, // [5:8] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_global_restrictions_proto_init() }
func file_global_restrictions_proto_init() {
	if File_global_restrictions_proto != nil {
		return
	}
	file_message_proto_init()
	file_popup_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_global_restrictions_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GlobalRestriction); i {
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
		file_global_restrictions_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateGlobalRestriction); i {
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
		file_global_restrictions_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListGlobalRestrictionRequest); i {
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
		file_global_restrictions_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListGlobalRestrictionResponse); i {
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
			RawDescriptor: file_global_restrictions_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_global_restrictions_proto_goTypes,
		DependencyIndexes: file_global_restrictions_proto_depIdxs,
		EnumInfos:         file_global_restrictions_proto_enumTypes,
		MessageInfos:      file_global_restrictions_proto_msgTypes,
	}.Build()
	File_global_restrictions_proto = out.File
	file_global_restrictions_proto_rawDesc = nil
	file_global_restrictions_proto_goTypes = nil
	file_global_restrictions_proto_depIdxs = nil
}
