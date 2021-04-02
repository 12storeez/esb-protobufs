// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.14.0
// source: proto/logistics/delivery_method.proto

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

type DeliveryMethodRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	DeliveryMethodId int32 `protobuf:"varint,1,opt,name=delivery_method_id,json=deliveryMethodId,proto3" json:"delivery_method_id,omitempty"`
}

func (x *DeliveryMethodRequest) Reset() {
	*x = DeliveryMethodRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_delivery_method_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeliveryMethodRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeliveryMethodRequest) ProtoMessage() {}

func (x *DeliveryMethodRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_delivery_method_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeliveryMethodRequest.ProtoReflect.Descriptor instead.
func (*DeliveryMethodRequest) Descriptor() ([]byte, []int) {
	return file_proto_logistics_delivery_method_proto_rawDescGZIP(), []int{0}
}

func (x *DeliveryMethodRequest) GetDeliveryMethodId() int32 {
	if x != nil {
		return x.DeliveryMethodId
	}
	return 0
}

type GetDeliveryMethodRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetDeliveryMethodRequest) Reset() {
	*x = GetDeliveryMethodRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_delivery_method_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetDeliveryMethodRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetDeliveryMethodRequest) ProtoMessage() {}

func (x *GetDeliveryMethodRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_delivery_method_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetDeliveryMethodRequest.ProtoReflect.Descriptor instead.
func (*GetDeliveryMethodRequest) Descriptor() ([]byte, []int) {
	return file_proto_logistics_delivery_method_proto_rawDescGZIP(), []int{1}
}

func (x *GetDeliveryMethodRequest) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type CreateDeliveryMethodRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *CreateDeliveryMethodRequest) Reset() {
	*x = CreateDeliveryMethodRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_delivery_method_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateDeliveryMethodRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateDeliveryMethodRequest) ProtoMessage() {}

func (x *CreateDeliveryMethodRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_delivery_method_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateDeliveryMethodRequest.ProtoReflect.Descriptor instead.
func (*CreateDeliveryMethodRequest) Descriptor() ([]byte, []int) {
	return file_proto_logistics_delivery_method_proto_rawDescGZIP(), []int{2}
}

func (x *CreateDeliveryMethodRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CreateDeliveryMethodResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CreateDeliveryMethodResponse) Reset() {
	*x = CreateDeliveryMethodResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_delivery_method_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateDeliveryMethodResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateDeliveryMethodResponse) ProtoMessage() {}

func (x *CreateDeliveryMethodResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_delivery_method_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateDeliveryMethodResponse.ProtoReflect.Descriptor instead.
func (*CreateDeliveryMethodResponse) Descriptor() ([]byte, []int) {
	return file_proto_logistics_delivery_method_proto_rawDescGZIP(), []int{3}
}

func (x *CreateDeliveryMethodResponse) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type GetDeliveryMethod struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetDeliveryMethod) Reset() {
	*x = GetDeliveryMethod{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_delivery_method_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetDeliveryMethod) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetDeliveryMethod) ProtoMessage() {}

func (x *GetDeliveryMethod) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_delivery_method_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetDeliveryMethod.ProtoReflect.Descriptor instead.
func (*GetDeliveryMethod) Descriptor() ([]byte, []int) {
	return file_proto_logistics_delivery_method_proto_rawDescGZIP(), []int{4}
}

func (x *GetDeliveryMethod) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type UpdateDeliveryMethodRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	DeliveryMethodId int32  `protobuf:"varint,1,opt,name=delivery_method_id,json=deliveryMethodId,proto3" json:"delivery_method_id,omitempty"`
	Name             string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *UpdateDeliveryMethodRequest) Reset() {
	*x = UpdateDeliveryMethodRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_delivery_method_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateDeliveryMethodRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateDeliveryMethodRequest) ProtoMessage() {}

func (x *UpdateDeliveryMethodRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_delivery_method_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateDeliveryMethodRequest.ProtoReflect.Descriptor instead.
func (*UpdateDeliveryMethodRequest) Descriptor() ([]byte, []int) {
	return file_proto_logistics_delivery_method_proto_rawDescGZIP(), []int{5}
}

func (x *UpdateDeliveryMethodRequest) GetDeliveryMethodId() int32 {
	if x != nil {
		return x.DeliveryMethodId
	}
	return 0
}

func (x *UpdateDeliveryMethodRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type ListDeliveryMethodsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit  int32 `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
	Offset int32 `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
}

func (x *ListDeliveryMethodsRequest) Reset() {
	*x = ListDeliveryMethodsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_delivery_method_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListDeliveryMethodsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListDeliveryMethodsRequest) ProtoMessage() {}

func (x *ListDeliveryMethodsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_delivery_method_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListDeliveryMethodsRequest.ProtoReflect.Descriptor instead.
func (*ListDeliveryMethodsRequest) Descriptor() ([]byte, []int) {
	return file_proto_logistics_delivery_method_proto_rawDescGZIP(), []int{6}
}

func (x *ListDeliveryMethodsRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *ListDeliveryMethodsRequest) GetOffset() int32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

type ListDeliveryMethodsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Results []*DeliveryMethod `protobuf:"bytes,1,rep,name=results,proto3" json:"results,omitempty"`
	Total   int32             `protobuf:"varint,2,opt,name=total,proto3" json:"total,omitempty"`
}

func (x *ListDeliveryMethodsResponse) Reset() {
	*x = ListDeliveryMethodsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_delivery_method_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListDeliveryMethodsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListDeliveryMethodsResponse) ProtoMessage() {}

func (x *ListDeliveryMethodsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_delivery_method_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListDeliveryMethodsResponse.ProtoReflect.Descriptor instead.
func (*ListDeliveryMethodsResponse) Descriptor() ([]byte, []int) {
	return file_proto_logistics_delivery_method_proto_rawDescGZIP(), []int{7}
}

func (x *ListDeliveryMethodsResponse) GetResults() []*DeliveryMethod {
	if x != nil {
		return x.Results
	}
	return nil
}

func (x *ListDeliveryMethodsResponse) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

type DeliveryMethod struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       int32  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	IsActive bool   `protobuf:"varint,3,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	Created  string `protobuf:"bytes,4,opt,name=created,proto3" json:"created,omitempty"`
	Updated  string `protobuf:"bytes,5,opt,name=updated,proto3" json:"updated,omitempty"`
}

func (x *DeliveryMethod) Reset() {
	*x = DeliveryMethod{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_logistics_delivery_method_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeliveryMethod) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeliveryMethod) ProtoMessage() {}

func (x *DeliveryMethod) ProtoReflect() protoreflect.Message {
	mi := &file_proto_logistics_delivery_method_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeliveryMethod.ProtoReflect.Descriptor instead.
func (*DeliveryMethod) Descriptor() ([]byte, []int) {
	return file_proto_logistics_delivery_method_proto_rawDescGZIP(), []int{8}
}

func (x *DeliveryMethod) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *DeliveryMethod) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *DeliveryMethod) GetIsActive() bool {
	if x != nil {
		return x.IsActive
	}
	return false
}

func (x *DeliveryMethod) GetCreated() string {
	if x != nil {
		return x.Created
	}
	return ""
}

func (x *DeliveryMethod) GetUpdated() string {
	if x != nil {
		return x.Updated
	}
	return ""
}

var File_proto_logistics_delivery_method_proto protoreflect.FileDescriptor

var file_proto_logistics_delivery_method_proto_rawDesc = []byte{
	0x0a, 0x25, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2f, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x5f, 0x6d, 0x65, 0x74, 0x68, 0x6f,
	0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69,
	0x63, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61,
	0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x45, 0x0a,
	0x15, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x2c, 0x0a, 0x12, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x5f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x10, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68,
	0x6f, 0x64, 0x49, 0x64, 0x22, 0x2a, 0x0a, 0x18, 0x47, 0x65, 0x74, 0x44, 0x65, 0x6c, 0x69, 0x76,
	0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64,
	0x22, 0x31, 0x0a, 0x1b, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x22, 0x2e, 0x0a, 0x1c, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x44, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x02, 0x69, 0x64, 0x22, 0x23, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x22, 0x5f, 0x0a, 0x1b, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x2c, 0x0a, 0x12, 0x64, 0x65, 0x6c, 0x69, 0x76,
	0x65, 0x72, 0x79, 0x5f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x10, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74,
	0x68, 0x6f, 0x64, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x4a, 0x0a, 0x1a, 0x4c, 0x69, 0x73,
	0x74, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x16, 0x0a,
	0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6f,
	0x66, 0x66, 0x73, 0x65, 0x74, 0x22, 0x68, 0x0a, 0x1b, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x6c,
	0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x33, 0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64,
	0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74,
	0x61, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x22,
	0x85, 0x01, 0x0a, 0x0e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68,
	0x6f, 0x64, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x61, 0x63, 0x74,
	0x69, 0x76, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x41, 0x63, 0x74,
	0x69, 0x76, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x12, 0x18, 0x0a,
	0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x32, 0xe7, 0x04, 0x0a, 0x0f, 0x44, 0x65, 0x6c, 0x69,
	0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73, 0x12, 0x7a, 0x0a, 0x06, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x26, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79,
	0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x27, 0x2e,
	0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x1f, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x19, 0x22, 0x14,
	0x2f, 0x76, 0x31, 0x2f, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d, 0x6d, 0x65, 0x74,
	0x68, 0x6f, 0x64, 0x73, 0x3a, 0x01, 0x2a, 0x12, 0x68, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x23,
	0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x44, 0x65,
	0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e,
	0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x22, 0x21,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1b, 0x12, 0x19, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x65, 0x6c, 0x69,
	0x76, 0x65, 0x72, 0x79, 0x2d, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73, 0x2f, 0x7b, 0x69, 0x64,
	0x7d, 0x12, 0x73, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x25, 0x2e, 0x6c, 0x6f, 0x67, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65,
	0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x26, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x4c, 0x69, 0x73,
	0x74, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x1c, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x16,
	0x12, 0x14, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d, 0x6d,
	0x65, 0x74, 0x68, 0x6f, 0x64, 0x73, 0x12, 0x81, 0x01, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x12, 0x26, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68,
	0x6f, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x6c, 0x6f, 0x67, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65,
	0x74, 0x68, 0x6f, 0x64, 0x22, 0x34, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2e, 0x32, 0x29, 0x2f, 0x76,
	0x31, 0x2f, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2d, 0x6d, 0x65, 0x74, 0x68, 0x6f,
	0x64, 0x73, 0x2f, 0x7b, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x5f, 0x6d, 0x65, 0x74,
	0x68, 0x6f, 0x64, 0x5f, 0x69, 0x64, 0x7d, 0x3a, 0x01, 0x2a, 0x12, 0x75, 0x0a, 0x06, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x12, 0x20, 0x2e, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73,
	0x2e, 0x44, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x22, 0x31,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2b, 0x2a, 0x29, 0x2f, 0x76, 0x31, 0x2f, 0x64, 0x65, 0x6c, 0x69,
	0x76, 0x65, 0x72, 0x79, 0x2d, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73, 0x2f, 0x7b, 0x64, 0x65,
	0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x5f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x5f, 0x69, 0x64,
	0x7d, 0x42, 0x0e, 0x5a, 0x0c, 0x67, 0x6f, 0x2f, 0x6c, 0x6f, 0x67, 0x69, 0x73, 0x74, 0x69, 0x63,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_logistics_delivery_method_proto_rawDescOnce sync.Once
	file_proto_logistics_delivery_method_proto_rawDescData = file_proto_logistics_delivery_method_proto_rawDesc
)

func file_proto_logistics_delivery_method_proto_rawDescGZIP() []byte {
	file_proto_logistics_delivery_method_proto_rawDescOnce.Do(func() {
		file_proto_logistics_delivery_method_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_logistics_delivery_method_proto_rawDescData)
	})
	return file_proto_logistics_delivery_method_proto_rawDescData
}

var file_proto_logistics_delivery_method_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_proto_logistics_delivery_method_proto_goTypes = []interface{}{
	(*DeliveryMethodRequest)(nil),        // 0: logistics.DeliveryMethodRequest
	(*GetDeliveryMethodRequest)(nil),     // 1: logistics.GetDeliveryMethodRequest
	(*CreateDeliveryMethodRequest)(nil),  // 2: logistics.CreateDeliveryMethodRequest
	(*CreateDeliveryMethodResponse)(nil), // 3: logistics.CreateDeliveryMethodResponse
	(*GetDeliveryMethod)(nil),            // 4: logistics.GetDeliveryMethod
	(*UpdateDeliveryMethodRequest)(nil),  // 5: logistics.UpdateDeliveryMethodRequest
	(*ListDeliveryMethodsRequest)(nil),   // 6: logistics.ListDeliveryMethodsRequest
	(*ListDeliveryMethodsResponse)(nil),  // 7: logistics.ListDeliveryMethodsResponse
	(*DeliveryMethod)(nil),               // 8: logistics.DeliveryMethod
	(*emptypb.Empty)(nil),                // 9: google.protobuf.Empty
}
var file_proto_logistics_delivery_method_proto_depIdxs = []int32{
	8, // 0: logistics.ListDeliveryMethodsResponse.results:type_name -> logistics.DeliveryMethod
	2, // 1: logistics.DeliveryMethods.Create:input_type -> logistics.CreateDeliveryMethodRequest
	1, // 2: logistics.DeliveryMethods.Get:input_type -> logistics.GetDeliveryMethodRequest
	6, // 3: logistics.DeliveryMethods.List:input_type -> logistics.ListDeliveryMethodsRequest
	5, // 4: logistics.DeliveryMethods.Update:input_type -> logistics.UpdateDeliveryMethodRequest
	0, // 5: logistics.DeliveryMethods.Delete:input_type -> logistics.DeliveryMethodRequest
	3, // 6: logistics.DeliveryMethods.Create:output_type -> logistics.CreateDeliveryMethodResponse
	8, // 7: logistics.DeliveryMethods.Get:output_type -> logistics.DeliveryMethod
	7, // 8: logistics.DeliveryMethods.List:output_type -> logistics.ListDeliveryMethodsResponse
	8, // 9: logistics.DeliveryMethods.Update:output_type -> logistics.DeliveryMethod
	9, // 10: logistics.DeliveryMethods.Delete:output_type -> google.protobuf.Empty
	6, // [6:11] is the sub-list for method output_type
	1, // [1:6] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_proto_logistics_delivery_method_proto_init() }
func file_proto_logistics_delivery_method_proto_init() {
	if File_proto_logistics_delivery_method_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_logistics_delivery_method_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeliveryMethodRequest); i {
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
		file_proto_logistics_delivery_method_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetDeliveryMethodRequest); i {
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
		file_proto_logistics_delivery_method_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateDeliveryMethodRequest); i {
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
		file_proto_logistics_delivery_method_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateDeliveryMethodResponse); i {
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
		file_proto_logistics_delivery_method_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetDeliveryMethod); i {
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
		file_proto_logistics_delivery_method_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateDeliveryMethodRequest); i {
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
		file_proto_logistics_delivery_method_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListDeliveryMethodsRequest); i {
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
		file_proto_logistics_delivery_method_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListDeliveryMethodsResponse); i {
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
		file_proto_logistics_delivery_method_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeliveryMethod); i {
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
			RawDescriptor: file_proto_logistics_delivery_method_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_logistics_delivery_method_proto_goTypes,
		DependencyIndexes: file_proto_logistics_delivery_method_proto_depIdxs,
		MessageInfos:      file_proto_logistics_delivery_method_proto_msgTypes,
	}.Build()
	File_proto_logistics_delivery_method_proto = out.File
	file_proto_logistics_delivery_method_proto_rawDesc = nil
	file_proto_logistics_delivery_method_proto_goTypes = nil
	file_proto_logistics_delivery_method_proto_depIdxs = nil
}