// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.9
// source: proto/notifications.proto

package notifications

import (
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

type SendRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	From           string        `protobuf:"bytes,1,opt,name=from,proto3" json:"from,omitempty"`
	To             string        `protobuf:"bytes,2,opt,name=to,proto3" json:"to,omitempty"`
	Title          string        `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Message        string        `protobuf:"bytes,4,opt,name=message,proto3" json:"message,omitempty"`
	Attachments    []string      `protobuf:"bytes,5,rep,name=attachments,proto3" json:"attachments,omitempty"`
	Channel        string        `protobuf:"bytes,6,opt,name=channel,proto3" json:"channel,omitempty"`
	Payload        *Payload      `protobuf:"bytes,7,opt,name=payload,proto3" json:"payload,omitempty"`
	IncomingSystem *string       `protobuf:"bytes,8,opt,name=incoming_system,json=incomingSystem,proto3,oneof" json:"incoming_system,omitempty"`
	AttachmentsV2  []*Attachment `protobuf:"bytes,9,rep,name=attachments_v2,json=attachmentsV2,proto3" json:"attachments_v2,omitempty"`
}

func (x *SendRequest) Reset() {
	*x = SendRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notifications_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendRequest) ProtoMessage() {}

func (x *SendRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notifications_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendRequest.ProtoReflect.Descriptor instead.
func (*SendRequest) Descriptor() ([]byte, []int) {
	return file_proto_notifications_proto_rawDescGZIP(), []int{0}
}

func (x *SendRequest) GetFrom() string {
	if x != nil {
		return x.From
	}
	return ""
}

func (x *SendRequest) GetTo() string {
	if x != nil {
		return x.To
	}
	return ""
}

func (x *SendRequest) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *SendRequest) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *SendRequest) GetAttachments() []string {
	if x != nil {
		return x.Attachments
	}
	return nil
}

func (x *SendRequest) GetChannel() string {
	if x != nil {
		return x.Channel
	}
	return ""
}

func (x *SendRequest) GetPayload() *Payload {
	if x != nil {
		return x.Payload
	}
	return nil
}

func (x *SendRequest) GetIncomingSystem() string {
	if x != nil && x.IncomingSystem != nil {
		return *x.IncomingSystem
	}
	return ""
}

func (x *SendRequest) GetAttachmentsV2() []*Attachment {
	if x != nil {
		return x.AttachmentsV2
	}
	return nil
}

type Attachment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Link string `protobuf:"bytes,1,opt,name=link,proto3" json:"link,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *Attachment) Reset() {
	*x = Attachment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notifications_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Attachment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Attachment) ProtoMessage() {}

func (x *Attachment) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notifications_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Attachment.ProtoReflect.Descriptor instead.
func (*Attachment) Descriptor() ([]byte, []int) {
	return file_proto_notifications_proto_rawDescGZIP(), []int{1}
}

func (x *Attachment) GetLink() string {
	if x != nil {
		return x.Link
	}
	return ""
}

func (x *Attachment) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type Payload struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ThreadId               string             `protobuf:"bytes,1,opt,name=thread_id,json=threadId,proto3" json:"thread_id,omitempty"`
	IsSplitByBlocksEnabled bool               `protobuf:"varint,2,opt,name=is_split_by_blocks_enabled,json=isSplitByBlocksEnabled,proto3" json:"is_split_by_blocks_enabled,omitempty"`
	SlackAttachments       []*SlackAttachment `protobuf:"bytes,3,rep,name=slack_attachments,json=slackAttachments,proto3" json:"slack_attachments,omitempty"`
}

func (x *Payload) Reset() {
	*x = Payload{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notifications_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Payload) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Payload) ProtoMessage() {}

func (x *Payload) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notifications_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Payload.ProtoReflect.Descriptor instead.
func (*Payload) Descriptor() ([]byte, []int) {
	return file_proto_notifications_proto_rawDescGZIP(), []int{2}
}

func (x *Payload) GetThreadId() string {
	if x != nil {
		return x.ThreadId
	}
	return ""
}

func (x *Payload) GetIsSplitByBlocksEnabled() bool {
	if x != nil {
		return x.IsSplitByBlocksEnabled
	}
	return false
}

func (x *Payload) GetSlackAttachments() []*SlackAttachment {
	if x != nil {
		return x.SlackAttachments
	}
	return nil
}

type SlackAttachment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Link string `protobuf:"bytes,1,opt,name=link,proto3" json:"link,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Id   string `protobuf:"bytes,3,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *SlackAttachment) Reset() {
	*x = SlackAttachment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notifications_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SlackAttachment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SlackAttachment) ProtoMessage() {}

func (x *SlackAttachment) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notifications_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SlackAttachment.ProtoReflect.Descriptor instead.
func (*SlackAttachment) Descriptor() ([]byte, []int) {
	return file_proto_notifications_proto_rawDescGZIP(), []int{3}
}

func (x *SlackAttachment) GetLink() string {
	if x != nil {
		return x.Link
	}
	return ""
}

func (x *SlackAttachment) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SlackAttachment) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type SendResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status  string    `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Message string    `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Code    int64     `protobuf:"varint,3,opt,name=code,proto3" json:"code,omitempty"`
	Errors  []*Error  `protobuf:"bytes,4,rep,name=errors,proto3" json:"errors,omitempty"`
	Data    *SendData `protobuf:"bytes,5,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *SendResponse) Reset() {
	*x = SendResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notifications_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendResponse) ProtoMessage() {}

func (x *SendResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notifications_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendResponse.ProtoReflect.Descriptor instead.
func (*SendResponse) Descriptor() ([]byte, []int) {
	return file_proto_notifications_proto_rawDescGZIP(), []int{4}
}

func (x *SendResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *SendResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *SendResponse) GetCode() int64 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *SendResponse) GetErrors() []*Error {
	if x != nil {
		return x.Errors
	}
	return nil
}

func (x *SendResponse) GetData() *SendData {
	if x != nil {
		return x.Data
	}
	return nil
}

type SendData struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ThreadId    string                `protobuf:"bytes,1,opt,name=thread_id,json=threadId,proto3" json:"thread_id,omitempty"`
	ChannelId   string                `protobuf:"bytes,2,opt,name=channel_id,json=channelId,proto3" json:"channel_id,omitempty"`
	Attachments []*AttachmentResponse `protobuf:"bytes,3,rep,name=attachments,proto3" json:"attachments,omitempty"`
}

func (x *SendData) Reset() {
	*x = SendData{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notifications_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SendData) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendData) ProtoMessage() {}

func (x *SendData) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notifications_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendData.ProtoReflect.Descriptor instead.
func (*SendData) Descriptor() ([]byte, []int) {
	return file_proto_notifications_proto_rawDescGZIP(), []int{5}
}

func (x *SendData) GetThreadId() string {
	if x != nil {
		return x.ThreadId
	}
	return ""
}

func (x *SendData) GetChannelId() string {
	if x != nil {
		return x.ChannelId
	}
	return ""
}

func (x *SendData) GetAttachments() []*AttachmentResponse {
	if x != nil {
		return x.Attachments
	}
	return nil
}

type AttachmentResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Link      string `protobuf:"bytes,1,opt,name=link,proto3" json:"link,omitempty"`
	Name      string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	SlackLink string `protobuf:"bytes,3,opt,name=slack_link,json=slackLink,proto3" json:"slack_link,omitempty"`
	SlackId   string `protobuf:"bytes,4,opt,name=slack_id,json=slackId,proto3" json:"slack_id,omitempty"`
}

func (x *AttachmentResponse) Reset() {
	*x = AttachmentResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notifications_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AttachmentResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AttachmentResponse) ProtoMessage() {}

func (x *AttachmentResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notifications_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AttachmentResponse.ProtoReflect.Descriptor instead.
func (*AttachmentResponse) Descriptor() ([]byte, []int) {
	return file_proto_notifications_proto_rawDescGZIP(), []int{6}
}

func (x *AttachmentResponse) GetLink() string {
	if x != nil {
		return x.Link
	}
	return ""
}

func (x *AttachmentResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AttachmentResponse) GetSlackLink() string {
	if x != nil {
		return x.SlackLink
	}
	return ""
}

func (x *AttachmentResponse) GetSlackId() string {
	if x != nil {
		return x.SlackId
	}
	return ""
}

// Error
type Error struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Target  string `protobuf:"bytes,1,opt,name=target,proto3" json:"target,omitempty"`
	Code    int64  `protobuf:"varint,2,opt,name=code,proto3" json:"code,omitempty"`
	Message string `protobuf:"bytes,3,opt,name=message,proto3" json:"message,omitempty"`
}

func (x *Error) Reset() {
	*x = Error{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_notifications_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Error) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Error) ProtoMessage() {}

func (x *Error) ProtoReflect() protoreflect.Message {
	mi := &file_proto_notifications_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Error.ProtoReflect.Descriptor instead.
func (*Error) Descriptor() ([]byte, []int) {
	return file_proto_notifications_proto_rawDescGZIP(), []int{7}
}

func (x *Error) GetTarget() string {
	if x != nil {
		return x.Target
	}
	return ""
}

func (x *Error) GetCode() int64 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *Error) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

var File_proto_notifications_proto protoreflect.FileDescriptor

var file_proto_notifications_proto_rawDesc = []byte{
	0x0a, 0x19, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x6e, 0x6f, 0x74,
	0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0xd3, 0x02, 0x0a, 0x0b, 0x53,
	0x65, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x66, 0x72,
	0x6f, 0x6d, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x66, 0x72, 0x6f, 0x6d, 0x12, 0x0e,
	0x0a, 0x02, 0x74, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x74, 0x6f, 0x12, 0x14,
	0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74,
	0x69, 0x74, 0x6c, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x20,
	0x0a, 0x0b, 0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x05, 0x20,
	0x03, 0x28, 0x09, 0x52, 0x0b, 0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x73,
	0x12, 0x18, 0x0a, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x30, 0x0a, 0x07, 0x70, 0x61,
	0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x6e, 0x6f,
	0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x50, 0x61, 0x79, 0x6c,
	0x6f, 0x61, 0x64, 0x52, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x2c, 0x0a, 0x0f,
	0x69, 0x6e, 0x63, 0x6f, 0x6d, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x18,
	0x08, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x0e, 0x69, 0x6e, 0x63, 0x6f, 0x6d, 0x69, 0x6e,
	0x67, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x88, 0x01, 0x01, 0x12, 0x40, 0x0a, 0x0e, 0x61, 0x74,
	0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x76, 0x32, 0x18, 0x09, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x19, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x2e, 0x41, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x0d, 0x61,
	0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x56, 0x32, 0x42, 0x12, 0x0a, 0x10,
	0x5f, 0x69, 0x6e, 0x63, 0x6f, 0x6d, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d,
	0x22, 0x34, 0x0a, 0x0a, 0x41, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x6c, 0x69, 0x6e, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x69,
	0x6e, 0x6b, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0xaf, 0x01, 0x0a, 0x07, 0x50, 0x61, 0x79, 0x6c, 0x6f,
	0x61, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x68, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x68, 0x72, 0x65, 0x61, 0x64, 0x49, 0x64, 0x12,
	0x3a, 0x0a, 0x1a, 0x69, 0x73, 0x5f, 0x73, 0x70, 0x6c, 0x69, 0x74, 0x5f, 0x62, 0x79, 0x5f, 0x62,
	0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x5f, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x16, 0x69, 0x73, 0x53, 0x70, 0x6c, 0x69, 0x74, 0x42, 0x79, 0x42, 0x6c,
	0x6f, 0x63, 0x6b, 0x73, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x12, 0x4b, 0x0a, 0x11, 0x73,
	0x6c, 0x61, 0x63, 0x6b, 0x5f, 0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x73,
	0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x53, 0x6c, 0x61, 0x63, 0x6b, 0x41, 0x74, 0x74, 0x61,
	0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x10, 0x73, 0x6c, 0x61, 0x63, 0x6b, 0x41, 0x74, 0x74,
	0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x22, 0x49, 0x0a, 0x0f, 0x53, 0x6c, 0x61, 0x63,
	0x6b, 0x41, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6c,
	0x69, 0x6e, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x69, 0x6e, 0x6b, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x22, 0xaf, 0x01, 0x0a, 0x0c, 0x53, 0x65, 0x6e, 0x64, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x18, 0x0a, 0x07,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x2c, 0x0a, 0x06, 0x65, 0x72,
	0x72, 0x6f, 0x72, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x6e, 0x6f, 0x74,
	0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72,
	0x52, 0x06, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x12, 0x2b, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x53, 0x65, 0x6e, 0x64, 0x44, 0x61, 0x74, 0x61, 0x52,
	0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x8b, 0x01, 0x0a, 0x08, 0x53, 0x65, 0x6e, 0x64, 0x44, 0x61,
	0x74, 0x61, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x68, 0x72, 0x65, 0x61, 0x64, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x68, 0x72, 0x65, 0x61, 0x64, 0x49, 0x64, 0x12,
	0x1d, 0x0a, 0x0a, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x49, 0x64, 0x12, 0x43,
	0x0a, 0x0b, 0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x03, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x41, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x52, 0x0b, 0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65,
	0x6e, 0x74, 0x73, 0x22, 0x76, 0x0a, 0x12, 0x41, 0x74, 0x74, 0x61, 0x63, 0x68, 0x6d, 0x65, 0x6e,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x69, 0x6e,
	0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x69, 0x6e, 0x6b, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x6c, 0x61, 0x63, 0x6b, 0x5f, 0x6c, 0x69, 0x6e, 0x6b, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x73, 0x6c, 0x61, 0x63, 0x6b, 0x4c, 0x69, 0x6e, 0x6b,
	0x12, 0x19, 0x0a, 0x08, 0x73, 0x6c, 0x61, 0x63, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x73, 0x6c, 0x61, 0x63, 0x6b, 0x49, 0x64, 0x22, 0x4d, 0x0a, 0x05, 0x45,
	0x72, 0x72, 0x6f, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65,
	0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x32, 0x52, 0x0a, 0x0d, 0x6e, 0x6f,
	0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x41, 0x0a, 0x04, 0x53,
	0x65, 0x6e, 0x64, 0x12, 0x1a, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x53, 0x65, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1b, 0x2e, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x53, 0x65, 0x6e, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x12,
	0x5a, 0x10, 0x67, 0x6f, 0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_notifications_proto_rawDescOnce sync.Once
	file_proto_notifications_proto_rawDescData = file_proto_notifications_proto_rawDesc
)

func file_proto_notifications_proto_rawDescGZIP() []byte {
	file_proto_notifications_proto_rawDescOnce.Do(func() {
		file_proto_notifications_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_notifications_proto_rawDescData)
	})
	return file_proto_notifications_proto_rawDescData
}

var file_proto_notifications_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_proto_notifications_proto_goTypes = []interface{}{
	(*SendRequest)(nil),        // 0: notifications.SendRequest
	(*Attachment)(nil),         // 1: notifications.Attachment
	(*Payload)(nil),            // 2: notifications.Payload
	(*SlackAttachment)(nil),    // 3: notifications.SlackAttachment
	(*SendResponse)(nil),       // 4: notifications.SendResponse
	(*SendData)(nil),           // 5: notifications.SendData
	(*AttachmentResponse)(nil), // 6: notifications.AttachmentResponse
	(*Error)(nil),              // 7: notifications.Error
}
var file_proto_notifications_proto_depIdxs = []int32{
	2, // 0: notifications.SendRequest.payload:type_name -> notifications.Payload
	1, // 1: notifications.SendRequest.attachments_v2:type_name -> notifications.Attachment
	3, // 2: notifications.Payload.slack_attachments:type_name -> notifications.SlackAttachment
	7, // 3: notifications.SendResponse.errors:type_name -> notifications.Error
	5, // 4: notifications.SendResponse.data:type_name -> notifications.SendData
	6, // 5: notifications.SendData.attachments:type_name -> notifications.AttachmentResponse
	0, // 6: notifications.notifications.Send:input_type -> notifications.SendRequest
	4, // 7: notifications.notifications.Send:output_type -> notifications.SendResponse
	7, // [7:8] is the sub-list for method output_type
	6, // [6:7] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_proto_notifications_proto_init() }
func file_proto_notifications_proto_init() {
	if File_proto_notifications_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_notifications_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendRequest); i {
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
		file_proto_notifications_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Attachment); i {
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
		file_proto_notifications_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Payload); i {
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
		file_proto_notifications_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SlackAttachment); i {
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
		file_proto_notifications_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendResponse); i {
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
		file_proto_notifications_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SendData); i {
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
		file_proto_notifications_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AttachmentResponse); i {
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
		file_proto_notifications_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Error); i {
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
	file_proto_notifications_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_notifications_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_notifications_proto_goTypes,
		DependencyIndexes: file_proto_notifications_proto_depIdxs,
		MessageInfos:      file_proto_notifications_proto_msgTypes,
	}.Build()
	File_proto_notifications_proto = out.File
	file_proto_notifications_proto_rawDesc = nil
	file_proto_notifications_proto_goTypes = nil
	file_proto_notifications_proto_depIdxs = nil
}
