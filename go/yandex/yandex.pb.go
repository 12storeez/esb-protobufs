// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.9
// source: proto/yandex.proto

package yandex

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

type HandleEventRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TicketKey    string `protobuf:"bytes,1,opt,name=ticket_key,json=ticketKey,proto3" json:"ticket_key,omitempty"`
	SlackChannel string `protobuf:"bytes,2,opt,name=slack_channel,json=slackChannel,proto3" json:"slack_channel,omitempty"`
}

func (x *HandleEventRequest) Reset() {
	*x = HandleEventRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_yandex_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HandleEventRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HandleEventRequest) ProtoMessage() {}

func (x *HandleEventRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_yandex_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HandleEventRequest.ProtoReflect.Descriptor instead.
func (*HandleEventRequest) Descriptor() ([]byte, []int) {
	return file_proto_yandex_proto_rawDescGZIP(), []int{0}
}

func (x *HandleEventRequest) GetTicketKey() string {
	if x != nil {
		return x.TicketKey
	}
	return ""
}

func (x *HandleEventRequest) GetSlackChannel() string {
	if x != nil {
		return x.SlackChannel
	}
	return ""
}

type HandleEventResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status  string   `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Message string   `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	Code    int64    `protobuf:"varint,3,opt,name=code,proto3" json:"code,omitempty"`
	Errors  []*Error `protobuf:"bytes,4,rep,name=errors,proto3" json:"errors,omitempty"`
}

func (x *HandleEventResponse) Reset() {
	*x = HandleEventResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_yandex_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HandleEventResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HandleEventResponse) ProtoMessage() {}

func (x *HandleEventResponse) ProtoReflect() protoreflect.Message {
	mi := &file_proto_yandex_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HandleEventResponse.ProtoReflect.Descriptor instead.
func (*HandleEventResponse) Descriptor() ([]byte, []int) {
	return file_proto_yandex_proto_rawDescGZIP(), []int{1}
}

func (x *HandleEventResponse) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *HandleEventResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *HandleEventResponse) GetCode() int64 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *HandleEventResponse) GetErrors() []*Error {
	if x != nil {
		return x.Errors
	}
	return nil
}

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
		mi := &file_proto_yandex_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Error) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Error) ProtoMessage() {}

func (x *Error) ProtoReflect() protoreflect.Message {
	mi := &file_proto_yandex_proto_msgTypes[2]
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
	return file_proto_yandex_proto_rawDescGZIP(), []int{2}
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

var File_proto_yandex_proto protoreflect.FileDescriptor

var file_proto_yandex_proto_rawDesc = []byte{
	0x0a, 0x12, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x79, 0x61, 0x6e, 0x64, 0x65, 0x78, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x79, 0x61, 0x6e, 0x64, 0x65, 0x78, 0x22, 0x58, 0x0a, 0x12,
	0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x5f, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x4b, 0x65,
	0x79, 0x12, 0x23, 0x0a, 0x0d, 0x73, 0x6c, 0x61, 0x63, 0x6b, 0x5f, 0x63, 0x68, 0x61, 0x6e, 0x6e,
	0x65, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x73, 0x6c, 0x61, 0x63, 0x6b, 0x43,
	0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x22, 0x82, 0x01, 0x0a, 0x13, 0x48, 0x61, 0x6e, 0x64, 0x6c,
	0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04,
	0x63, 0x6f, 0x64, 0x65, 0x12, 0x25, 0x0a, 0x06, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x18, 0x04,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x79, 0x61, 0x6e, 0x64, 0x65, 0x78, 0x2e, 0x45, 0x72,
	0x72, 0x6f, 0x72, 0x52, 0x06, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x73, 0x22, 0x4d, 0x0a, 0x05, 0x45,
	0x72, 0x72, 0x6f, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65,
	0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x32, 0xfc, 0x01, 0x0a, 0x06, 0x59,
	0x61, 0x6e, 0x64, 0x65, 0x78, 0x12, 0x4e, 0x0a, 0x11, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x1a, 0x2e, 0x79, 0x61, 0x6e,
	0x64, 0x65, 0x78, 0x2e, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x79, 0x61, 0x6e, 0x64, 0x65, 0x78, 0x2e,
	0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x4e, 0x0a, 0x11, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x1a, 0x2e, 0x79, 0x61, 0x6e,
	0x64, 0x65, 0x78, 0x2e, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x79, 0x61, 0x6e, 0x64, 0x65, 0x78, 0x2e,
	0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x52, 0x0a, 0x15, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x4e,
	0x65, 0x77, 0x43, 0x6f, 0x6d, 0x6d, 0x65, 0x6e, 0x74, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x1a,
	0x2e, 0x79, 0x61, 0x6e, 0x64, 0x65, 0x78, 0x2e, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x79, 0x61, 0x6e,
	0x64, 0x65, 0x78, 0x2e, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x0b, 0x5a, 0x09, 0x67, 0x6f, 0x2f,
	0x79, 0x61, 0x6e, 0x64, 0x65, 0x78, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_yandex_proto_rawDescOnce sync.Once
	file_proto_yandex_proto_rawDescData = file_proto_yandex_proto_rawDesc
)

func file_proto_yandex_proto_rawDescGZIP() []byte {
	file_proto_yandex_proto_rawDescOnce.Do(func() {
		file_proto_yandex_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_yandex_proto_rawDescData)
	})
	return file_proto_yandex_proto_rawDescData
}

var file_proto_yandex_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_proto_yandex_proto_goTypes = []interface{}{
	(*HandleEventRequest)(nil),  // 0: yandex.HandleEventRequest
	(*HandleEventResponse)(nil), // 1: yandex.HandleEventResponse
	(*Error)(nil),               // 2: yandex.Error
}
var file_proto_yandex_proto_depIdxs = []int32{
	2, // 0: yandex.HandleEventResponse.errors:type_name -> yandex.Error
	0, // 1: yandex.Yandex.HandleCreateEvent:input_type -> yandex.HandleEventRequest
	0, // 2: yandex.Yandex.HandleUpdateEvent:input_type -> yandex.HandleEventRequest
	0, // 3: yandex.Yandex.HandleNewCommentEvent:input_type -> yandex.HandleEventRequest
	1, // 4: yandex.Yandex.HandleCreateEvent:output_type -> yandex.HandleEventResponse
	1, // 5: yandex.Yandex.HandleUpdateEvent:output_type -> yandex.HandleEventResponse
	1, // 6: yandex.Yandex.HandleNewCommentEvent:output_type -> yandex.HandleEventResponse
	4, // [4:7] is the sub-list for method output_type
	1, // [1:4] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_proto_yandex_proto_init() }
func file_proto_yandex_proto_init() {
	if File_proto_yandex_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_yandex_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HandleEventRequest); i {
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
		file_proto_yandex_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HandleEventResponse); i {
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
		file_proto_yandex_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_yandex_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_yandex_proto_goTypes,
		DependencyIndexes: file_proto_yandex_proto_depIdxs,
		MessageInfos:      file_proto_yandex_proto_msgTypes,
	}.Build()
	File_proto_yandex_proto = out.File
	file_proto_yandex_proto_rawDesc = nil
	file_proto_yandex_proto_goTypes = nil
	file_proto_yandex_proto_depIdxs = nil
}
