// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.9
// source: category_delivery_type_restrictions.proto

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

type CategoryDeliveryTypeRestrictionId struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CategoryDeliveryTypeRestrictionId) Reset() {
	*x = CategoryDeliveryTypeRestrictionId{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_delivery_type_restrictions_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CategoryDeliveryTypeRestrictionId) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CategoryDeliveryTypeRestrictionId) ProtoMessage() {}

func (x *CategoryDeliveryTypeRestrictionId) ProtoReflect() protoreflect.Message {
	mi := &file_category_delivery_type_restrictions_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CategoryDeliveryTypeRestrictionId.ProtoReflect.Descriptor instead.
func (*CategoryDeliveryTypeRestrictionId) Descriptor() ([]byte, []int) {
	return file_category_delivery_type_restrictions_proto_rawDescGZIP(), []int{0}
}

func (x *CategoryDeliveryTypeRestrictionId) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type CreateCategoryDeliveryTypeRestriction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CategoryId     int32 `protobuf:"varint,1,opt,name=category_id,json=categoryId,proto3" json:"category_id,omitempty"`
	DeliveryTypeId int32 `protobuf:"varint,2,opt,name=delivery_type_id,json=deliveryTypeId,proto3" json:"delivery_type_id,omitempty"`
	MessageId      int32 `protobuf:"varint,3,opt,name=message_id,json=messageId,proto3" json:"message_id,omitempty"`
	PopupId        int32 `protobuf:"varint,4,opt,name=popup_id,json=popupId,proto3" json:"popup_id,omitempty"`
	IsActive       bool  `protobuf:"varint,5,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
}

func (x *CreateCategoryDeliveryTypeRestriction) Reset() {
	*x = CreateCategoryDeliveryTypeRestriction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_delivery_type_restrictions_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateCategoryDeliveryTypeRestriction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateCategoryDeliveryTypeRestriction) ProtoMessage() {}

func (x *CreateCategoryDeliveryTypeRestriction) ProtoReflect() protoreflect.Message {
	mi := &file_category_delivery_type_restrictions_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateCategoryDeliveryTypeRestriction.ProtoReflect.Descriptor instead.
func (*CreateCategoryDeliveryTypeRestriction) Descriptor() ([]byte, []int) {
	return file_category_delivery_type_restrictions_proto_rawDescGZIP(), []int{1}
}

func (x *CreateCategoryDeliveryTypeRestriction) GetCategoryId() int32 {
	if x != nil {
		return x.CategoryId
	}
	return 0
}

func (x *CreateCategoryDeliveryTypeRestriction) GetDeliveryTypeId() int32 {
	if x != nil {
		return x.DeliveryTypeId
	}
	return 0
}

func (x *CreateCategoryDeliveryTypeRestriction) GetMessageId() int32 {
	if x != nil {
		return x.MessageId
	}
	return 0
}

func (x *CreateCategoryDeliveryTypeRestriction) GetPopupId() int32 {
	if x != nil {
		return x.PopupId
	}
	return 0
}

func (x *CreateCategoryDeliveryTypeRestriction) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

type UpdateCategoryDeliveryTypeRestriction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	CategoryId     int32 `protobuf:"varint,2,opt,name=category_id,json=categoryId,proto3" json:"category_id,omitempty"`
	DeliveryTypeId int32 `protobuf:"varint,3,opt,name=delivery_type_id,json=deliveryTypeId,proto3" json:"delivery_type_id,omitempty"`
	MessageId      int32 `protobuf:"varint,4,opt,name=message_id,json=messageId,proto3" json:"message_id,omitempty"`
	PopupId        int32 `protobuf:"varint,5,opt,name=popup_id,json=popupId,proto3" json:"popup_id,omitempty"`
	IsActive       bool  `protobuf:"varint,6,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
}

func (x *UpdateCategoryDeliveryTypeRestriction) Reset() {
	*x = UpdateCategoryDeliveryTypeRestriction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_delivery_type_restrictions_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateCategoryDeliveryTypeRestriction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateCategoryDeliveryTypeRestriction) ProtoMessage() {}

func (x *UpdateCategoryDeliveryTypeRestriction) ProtoReflect() protoreflect.Message {
	mi := &file_category_delivery_type_restrictions_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateCategoryDeliveryTypeRestriction.ProtoReflect.Descriptor instead.
func (*UpdateCategoryDeliveryTypeRestriction) Descriptor() ([]byte, []int) {
	return file_category_delivery_type_restrictions_proto_rawDescGZIP(), []int{2}
}

func (x *UpdateCategoryDeliveryTypeRestriction) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *UpdateCategoryDeliveryTypeRestriction) GetCategoryId() int32 {
	if x != nil {
		return x.CategoryId
	}
	return 0
}

func (x *UpdateCategoryDeliveryTypeRestriction) GetDeliveryTypeId() int32 {
	if x != nil {
		return x.DeliveryTypeId
	}
	return 0
}

func (x *UpdateCategoryDeliveryTypeRestriction) GetMessageId() int32 {
	if x != nil {
		return x.MessageId
	}
	return 0
}

func (x *UpdateCategoryDeliveryTypeRestriction) GetPopupId() int32 {
	if x != nil {
		return x.PopupId
	}
	return 0
}

func (x *UpdateCategoryDeliveryTypeRestriction) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

type CategoryDeliveryTypeRestriction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           int32              `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Category     *Category          `protobuf:"bytes,2,opt,name=category,proto3" json:"category,omitempty"`
	DeliveryType *DeliveryTypeShort `protobuf:"bytes,3,opt,name=delivery_type,json=deliveryType,proto3" json:"delivery_type,omitempty"`
	Message      *Message           `protobuf:"bytes,4,opt,name=message,proto3" json:"message,omitempty"`
	Popup        *Popup             `protobuf:"bytes,5,opt,name=popup,proto3" json:"popup,omitempty"`
	IsActive     bool               `protobuf:"varint,6,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	CreatedAt    string             `protobuf:"bytes,7,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	UpdatedAt    string             `protobuf:"bytes,8,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
}

func (x *CategoryDeliveryTypeRestriction) Reset() {
	*x = CategoryDeliveryTypeRestriction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_delivery_type_restrictions_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CategoryDeliveryTypeRestriction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CategoryDeliveryTypeRestriction) ProtoMessage() {}

func (x *CategoryDeliveryTypeRestriction) ProtoReflect() protoreflect.Message {
	mi := &file_category_delivery_type_restrictions_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CategoryDeliveryTypeRestriction.ProtoReflect.Descriptor instead.
func (*CategoryDeliveryTypeRestriction) Descriptor() ([]byte, []int) {
	return file_category_delivery_type_restrictions_proto_rawDescGZIP(), []int{3}
}

func (x *CategoryDeliveryTypeRestriction) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *CategoryDeliveryTypeRestriction) GetCategory() *Category {
	if x != nil {
		return x.Category
	}
	return nil
}

func (x *CategoryDeliveryTypeRestriction) GetDeliveryType() *DeliveryTypeShort {
	if x != nil {
		return x.DeliveryType
	}
	return nil
}

func (x *CategoryDeliveryTypeRestriction) GetMessage() *Message {
	if x != nil {
		return x.Message
	}
	return nil
}

func (x *CategoryDeliveryTypeRestriction) GetPopup() *Popup {
	if x != nil {
		return x.Popup
	}
	return nil
}

func (x *CategoryDeliveryTypeRestriction) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *CategoryDeliveryTypeRestriction) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

func (x *CategoryDeliveryTypeRestriction) GetUpdatedAt() string {
	if x != nil {
		return x.UpdatedAt
	}
	return ""
}

type ListCategoryDeliveryTypeRestrictionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit  int32  `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset int32  `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
	Search string `protobuf:"bytes,3,opt,name=search,proto3" json:"search,omitempty"`
	Sort   string `protobuf:"bytes,4,opt,name=sort,proto3" json:"sort,omitempty"`
}

func (x *ListCategoryDeliveryTypeRestrictionRequest) Reset() {
	*x = ListCategoryDeliveryTypeRestrictionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_delivery_type_restrictions_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListCategoryDeliveryTypeRestrictionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListCategoryDeliveryTypeRestrictionRequest) ProtoMessage() {}

func (x *ListCategoryDeliveryTypeRestrictionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_category_delivery_type_restrictions_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListCategoryDeliveryTypeRestrictionRequest.ProtoReflect.Descriptor instead.
func (*ListCategoryDeliveryTypeRestrictionRequest) Descriptor() ([]byte, []int) {
	return file_category_delivery_type_restrictions_proto_rawDescGZIP(), []int{4}
}

func (x *ListCategoryDeliveryTypeRestrictionRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *ListCategoryDeliveryTypeRestrictionRequest) GetOffset() int32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

func (x *ListCategoryDeliveryTypeRestrictionRequest) GetSearch() string {
	if x != nil {
		return x.Search
	}
	return ""
}

func (x *ListCategoryDeliveryTypeRestrictionRequest) GetSort() string {
	if x != nil {
		return x.Sort
	}
	return ""
}

type ListCategoryDeliveryTypeRestrictionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*CategoryDeliveryTypeRestriction `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	Total   int32                              `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *ListCategoryDeliveryTypeRestrictionResponse) Reset() {
	*x = ListCategoryDeliveryTypeRestrictionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_category_delivery_type_restrictions_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListCategoryDeliveryTypeRestrictionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListCategoryDeliveryTypeRestrictionResponse) ProtoMessage() {}

func (x *ListCategoryDeliveryTypeRestrictionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_category_delivery_type_restrictions_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListCategoryDeliveryTypeRestrictionResponse.ProtoReflect.Descriptor instead.
func (*ListCategoryDeliveryTypeRestrictionResponse) Descriptor() ([]byte, []int) {
	return file_category_delivery_type_restrictions_proto_rawDescGZIP(), []int{5}
}

func (x *ListCategoryDeliveryTypeRestrictionResponse) GetResults() []*CategoryDeliveryTypeRestriction {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *ListCategoryDeliveryTypeRestrictionResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

var File_category_delivery_type_restrictions_proto protoreflect.FileDescriptor

var file_category_delivery_type_restrictions_proto_rawDesc = []byte{
	0x0a, 0x29, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x5f, 0x64, 0x65, 0x6c, 0x69, 0x76,
	0x65, 0x72, 0x79, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x6c, 0x6f, 0x67,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x0e, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x13, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x5f, 0x74, 0x79, 0x70, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0b, 0x70, 0x6f, 0x70, 0x75, 0x70, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x33, 0x0a, 0x21, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65,
	0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x22, 0xc9, 0x01, 0x0a, 0x25, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79,
	0x49, 0x64, 0x12, 0x28, 0x0a, 0x10, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x5f, 0x74,
	0x79, 0x70, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x64, 0x65,
	0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x09, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x70,
	0x6f, 0x70, 0x75, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07, 0x70,
	0x6f, 0x70, 0x75, 0x70, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x61, 0x63, 0x74,
	0x69, 0x76, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x41, 0x63, 0x74,
	0x69, 0x76, 0x65, 0x22, 0xd9, 0x01, 0x0a, 0x25, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x43, 0x61,
	0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79,
	0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1f, 0x0a,
	0x0b, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x0a, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x49, 0x64, 0x12, 0x28,
	0x0a, 0x10, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x5f,
	0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x6d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x70, 0x6f, 0x70, 0x75, 0x70,
	0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x07, 0x70, 0x6f, 0x70, 0x75, 0x70,
	0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x22,
	0xd6, 0x02, 0x0a, 0x1f, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69,
	0x76, 0x65, 0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x2f, 0x0a, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2e, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x52, 0x08, 0x63, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x12, 0x41, 0x0a, 0x0d, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x6c, 0x6f,
	0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79,
	0x54, 0x79, 0x70, 0x65, 0x53, 0x68, 0x6f, 0x72, 0x74, 0x52, 0x0c, 0x64, 0x65, 0x6c, 0x69, 0x76,
	0x65, 0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x12, 0x2c, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x73, 0x2e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x07, 0x6d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x26, 0x0a, 0x05, 0x70, 0x6f, 0x70, 0x75, 0x70, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73,
	0x2e, 0x50, 0x6f, 0x70, 0x75, 0x70, 0x52, 0x05, 0x70, 0x6f, 0x70, 0x75, 0x70, 0x12, 0x1b, 0x0a,
	0x09, 0x69, 0x73, 0x5f, 0x61, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x08, 0x69, 0x73, 0x41, 0x63, 0x74, 0x69, 0x76, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x22, 0x86, 0x01, 0x0a, 0x2a, 0x4c, 0x69, 0x73,
	0x74, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72,
	0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x16, 0x0a,
	0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6f,
	0x66, 0x66, 0x73, 0x65, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x65, 0x61, 0x72, 0x63, 0x68, 0x12, 0x12, 0x0a,
	0x04, 0x73, 0x6f, 0x72, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x6f, 0x72,
	0x74, 0x22, 0x89, 0x01, 0x0a, 0x2b, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f,
	0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65,
	0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x44, 0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x43,
	0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54,
	0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x07,
	0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x32, 0xbe, 0x06,
	0x0a, 0x26, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0xa9, 0x01, 0x0a, 0x04, 0x4c, 0x69, 0x73,
	0x74, 0x12, 0x35, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x4c, 0x69,
	0x73, 0x74, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x36, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73,
	0x74, 0x69, 0x63, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72,
	0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73,
	0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x32, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2c, 0x12, 0x2a, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x63, 0x61,
	0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2d, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d,
	0x74, 0x79, 0x70, 0x65, 0x12, 0x9d, 0x01, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12,
	0x30, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x1a, 0x2a, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x43, 0x61,
	0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79,
	0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x35, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x2f, 0x3a, 0x01, 0x2a, 0x22, 0x2a, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x63, 0x61,
	0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2d, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d,
	0x74, 0x79, 0x70, 0x65, 0x12, 0xa2, 0x01, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12,
	0x30, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x43, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x1a, 0x2a, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x43, 0x61,
	0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79,
	0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x3a, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x34, 0x3a, 0x01, 0x2a, 0x32, 0x2f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x63, 0x61,
	0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2d, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d,
	0x74, 0x79, 0x70, 0x65, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x12, 0x98, 0x01, 0x0a, 0x03, 0x47, 0x65,
	0x74, 0x12, 0x2c, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x43, 0x61,
	0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79,
	0x70, 0x65, 0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x1a,
	0x2a, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x43, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x37, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x31, 0x12, 0x2f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x72, 0x65, 0x73,
	0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72,
	0x79, 0x2d, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d, 0x74, 0x79, 0x70, 0x65, 0x2f,
	0x7b, 0x69, 0x64, 0x7d, 0x12, 0x87, 0x01, 0x0a, 0x06, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x12,
	0x2c, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x43, 0x61, 0x74, 0x65,
	0x67, 0x6f, 0x72, 0x79, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x1a, 0x16, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x37, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x31, 0x2a, 0x2f, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x72, 0x65, 0x73, 0x74, 0x72, 0x69, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x2f, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x2d, 0x64, 0x65, 0x6c, 0x69,
	0x76, 0x65, 0x72, 0x79, 0x2d, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x42, 0x0e,
	0x5a, 0x0c, 0x67, 0x6f, 0x2f, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_category_delivery_type_restrictions_proto_rawDescOnce sync.Once
	file_category_delivery_type_restrictions_proto_rawDescData = file_category_delivery_type_restrictions_proto_rawDesc
)

func file_category_delivery_type_restrictions_proto_rawDescGZIP() []byte {
	file_category_delivery_type_restrictions_proto_rawDescOnce.Do(func() {
		file_category_delivery_type_restrictions_proto_rawDescData = protoimpl.X.CompressGZIP(file_category_delivery_type_restrictions_proto_rawDescData)
	})
	return file_category_delivery_type_restrictions_proto_rawDescData
}

var file_category_delivery_type_restrictions_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_category_delivery_type_restrictions_proto_goTypes = []interface{}{
	(*CategoryDeliveryTypeRestrictionId)(nil),           // 0: logistics.CategoryDeliveryTypeRestrictionId
	(*CreateCategoryDeliveryTypeRestriction)(nil),       // 1: logistics.CreateCategoryDeliveryTypeRestriction
	(*UpdateCategoryDeliveryTypeRestriction)(nil),       // 2: logistics.UpdateCategoryDeliveryTypeRestriction
	(*CategoryDeliveryTypeRestriction)(nil),             // 3: logistics.CategoryDeliveryTypeRestriction
	(*ListCategoryDeliveryTypeRestrictionRequest)(nil),  // 4: logistics.ListCategoryDeliveryTypeRestrictionRequest
	(*ListCategoryDeliveryTypeRestrictionResponse)(nil), // 5: logistics.ListCategoryDeliveryTypeRestrictionResponse
	(*Category)(nil),          // 6: logistics.Category
	(*DeliveryTypeShort)(nil), // 7: logistics.DeliveryTypeShort
	(*Message)(nil),           // 8: logistics.Message
	(*Popup)(nil),             // 9: logistics.Popup
	(*emptypb.Empty)(nil),     // 10: google.protobuf.Empty
}
var file_category_delivery_type_restrictions_proto_depIdxs = []int32{
	6,  // 0: logistics.CategoryDeliveryTypeRestriction.category:type_name -> logistics.Category
	7,  // 1: logistics.CategoryDeliveryTypeRestriction.delivery_type:type_name -> logistics.DeliveryTypeShort
	8,  // 2: logistics.CategoryDeliveryTypeRestriction.message:type_name -> logistics.Message
	9,  // 3: logistics.CategoryDeliveryTypeRestriction.popup:type_name -> logistics.Popup
	3,  // 4: logistics.ListCategoryDeliveryTypeRestrictionResponse.results:type_name -> logistics.CategoryDeliveryTypeRestriction
	4,  // 5: logistics.CategoryDeliveryTypeRestrictionService.List:input_type -> logistics.ListCategoryDeliveryTypeRestrictionRequest
	1,  // 6: logistics.CategoryDeliveryTypeRestrictionService.Create:input_type -> logistics.CreateCategoryDeliveryTypeRestriction
	2,  // 7: logistics.CategoryDeliveryTypeRestrictionService.Update:input_type -> logistics.UpdateCategoryDeliveryTypeRestriction
	0,  // 8: logistics.CategoryDeliveryTypeRestrictionService.Get:input_type -> logistics.CategoryDeliveryTypeRestrictionId
	0,  // 9: logistics.CategoryDeliveryTypeRestrictionService.Delete:input_type -> logistics.CategoryDeliveryTypeRestrictionId
	5,  // 10: logistics.CategoryDeliveryTypeRestrictionService.List:output_type -> logistics.ListCategoryDeliveryTypeRestrictionResponse
	3,  // 11: logistics.CategoryDeliveryTypeRestrictionService.Create:output_type -> logistics.CategoryDeliveryTypeRestriction
	3,  // 12: logistics.CategoryDeliveryTypeRestrictionService.Update:output_type -> logistics.CategoryDeliveryTypeRestriction
	3,  // 13: logistics.CategoryDeliveryTypeRestrictionService.Get:output_type -> logistics.CategoryDeliveryTypeRestriction
	10, // 14: logistics.CategoryDeliveryTypeRestrictionService.Delete:output_type -> google.protobuf.Empty
	10, // [10:15] is the sub-list for method output_type
	5,  // [5:10] is the sub-list for method input_type
	5,  // [5:5] is the sub-list for extension type_name
	5,  // [5:5] is the sub-list for extension extendee
	0,  // [0:5] is the sub-list for field type_name
}

func init() { file_category_delivery_type_restrictions_proto_init() }
func file_category_delivery_type_restrictions_proto_init() {
	if File_category_delivery_type_restrictions_proto != nil {
		return
	}
	file_category_proto_init()
	file_delivery_type_proto_init()
	file_message_proto_init()
	file_popup_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_category_delivery_type_restrictions_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CategoryDeliveryTypeRestrictionId); i {
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
		file_category_delivery_type_restrictions_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateCategoryDeliveryTypeRestriction); i {
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
		file_category_delivery_type_restrictions_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateCategoryDeliveryTypeRestriction); i {
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
		file_category_delivery_type_restrictions_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CategoryDeliveryTypeRestriction); i {
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
		file_category_delivery_type_restrictions_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListCategoryDeliveryTypeRestrictionRequest); i {
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
		file_category_delivery_type_restrictions_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListCategoryDeliveryTypeRestrictionResponse); i {
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
			RawDescriptor: file_category_delivery_type_restrictions_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_category_delivery_type_restrictions_proto_goTypes,
		DependencyIndexes: file_category_delivery_type_restrictions_proto_depIdxs,
		MessageInfos:      file_category_delivery_type_restrictions_proto_msgTypes,
	}.Build()
	File_category_delivery_type_restrictions_proto = out.File
	file_category_delivery_type_restrictions_proto_rawDesc = nil
	file_category_delivery_type_restrictions_proto_goTypes = nil
	file_category_delivery_type_restrictions_proto_depIdxs = nil
}
