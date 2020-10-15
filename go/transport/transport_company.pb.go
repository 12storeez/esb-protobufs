// Code generated by protoc-gen-go. DO NOT EDIT.
// source: proto/transport_company.proto

package transport

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type TransportCompanyType int32

const (
	TransportCompanyType_boxberry   TransportCompanyType = 0
	TransportCompanyType_cdek       TransportCompanyType = 1
	TransportCompanyType_pochta     TransportCompanyType = 2
	TransportCompanyType_ups        TransportCompanyType = 3
	TransportCompanyType_dpd        TransportCompanyType = 4
	TransportCompanyType_dhl        TransportCompanyType = 5
	TransportCompanyType_redexpress TransportCompanyType = 6
)

var TransportCompanyType_name = map[int32]string{
	0: "boxberry",
	1: "cdek",
	2: "pochta",
	3: "ups",
	4: "dpd",
	5: "dhl",
	6: "redexpress",
}

var TransportCompanyType_value = map[string]int32{
	"boxberry":   0,
	"cdek":       1,
	"pochta":     2,
	"ups":        3,
	"dpd":        4,
	"dhl":        5,
	"redexpress": 6,
}

func (x TransportCompanyType) String() string {
	return proto.EnumName(TransportCompanyType_name, int32(x))
}

func (TransportCompanyType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{0}
}

type TransportCompanyAddSupportedDeliveryMethodParams struct {
	TransportCompanyId   int32    `protobuf:"varint,1,opt,name=transport_company_id,json=transportCompanyId,proto3" json:"transport_company_id,omitempty"`
	DeliveryId           int32    `protobuf:"varint,2,opt,name=delivery_id,json=deliveryId,proto3" json:"delivery_id,omitempty"`
	OriginZip            string   `protobuf:"bytes,3,opt,name=origin_zip,json=originZip,proto3" json:"origin_zip,omitempty"`
	CountryIsoCode       string   `protobuf:"bytes,4,opt,name=country_iso_code,json=countryIsoCode,proto3" json:"country_iso_code,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TransportCompanyAddSupportedDeliveryMethodParams) Reset() {
	*m = TransportCompanyAddSupportedDeliveryMethodParams{}
}
func (m *TransportCompanyAddSupportedDeliveryMethodParams) String() string {
	return proto.CompactTextString(m)
}
func (*TransportCompanyAddSupportedDeliveryMethodParams) ProtoMessage() {}
func (*TransportCompanyAddSupportedDeliveryMethodParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{0}
}

func (m *TransportCompanyAddSupportedDeliveryMethodParams) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransportCompanyAddSupportedDeliveryMethodParams.Unmarshal(m, b)
}
func (m *TransportCompanyAddSupportedDeliveryMethodParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransportCompanyAddSupportedDeliveryMethodParams.Marshal(b, m, deterministic)
}
func (m *TransportCompanyAddSupportedDeliveryMethodParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransportCompanyAddSupportedDeliveryMethodParams.Merge(m, src)
}
func (m *TransportCompanyAddSupportedDeliveryMethodParams) XXX_Size() int {
	return xxx_messageInfo_TransportCompanyAddSupportedDeliveryMethodParams.Size(m)
}
func (m *TransportCompanyAddSupportedDeliveryMethodParams) XXX_DiscardUnknown() {
	xxx_messageInfo_TransportCompanyAddSupportedDeliveryMethodParams.DiscardUnknown(m)
}

var xxx_messageInfo_TransportCompanyAddSupportedDeliveryMethodParams proto.InternalMessageInfo

func (m *TransportCompanyAddSupportedDeliveryMethodParams) GetTransportCompanyId() int32 {
	if m != nil {
		return m.TransportCompanyId
	}
	return 0
}

func (m *TransportCompanyAddSupportedDeliveryMethodParams) GetDeliveryId() int32 {
	if m != nil {
		return m.DeliveryId
	}
	return 0
}

func (m *TransportCompanyAddSupportedDeliveryMethodParams) GetOriginZip() string {
	if m != nil {
		return m.OriginZip
	}
	return ""
}

func (m *TransportCompanyAddSupportedDeliveryMethodParams) GetCountryIsoCode() string {
	if m != nil {
		return m.CountryIsoCode
	}
	return ""
}

type TransportAddSupportedDeliveryMethodResponse struct {
	Id                   int32    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TransportAddSupportedDeliveryMethodResponse) Reset() {
	*m = TransportAddSupportedDeliveryMethodResponse{}
}
func (m *TransportAddSupportedDeliveryMethodResponse) String() string {
	return proto.CompactTextString(m)
}
func (*TransportAddSupportedDeliveryMethodResponse) ProtoMessage() {}
func (*TransportAddSupportedDeliveryMethodResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{1}
}

func (m *TransportAddSupportedDeliveryMethodResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransportAddSupportedDeliveryMethodResponse.Unmarshal(m, b)
}
func (m *TransportAddSupportedDeliveryMethodResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransportAddSupportedDeliveryMethodResponse.Marshal(b, m, deterministic)
}
func (m *TransportAddSupportedDeliveryMethodResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransportAddSupportedDeliveryMethodResponse.Merge(m, src)
}
func (m *TransportAddSupportedDeliveryMethodResponse) XXX_Size() int {
	return xxx_messageInfo_TransportAddSupportedDeliveryMethodResponse.Size(m)
}
func (m *TransportAddSupportedDeliveryMethodResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_TransportAddSupportedDeliveryMethodResponse.DiscardUnknown(m)
}

var xxx_messageInfo_TransportAddSupportedDeliveryMethodResponse proto.InternalMessageInfo

func (m *TransportAddSupportedDeliveryMethodResponse) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

type TransportCompanyToggleSupportedDeliveryMethodParams struct {
	TransportCompanyId   int32    `protobuf:"varint,1,opt,name=transport_company_id,json=transportCompanyId,proto3" json:"transport_company_id,omitempty"`
	DeliveryId           int32    `protobuf:"varint,2,opt,name=delivery_id,json=deliveryId,proto3" json:"delivery_id,omitempty"`
	IsActive             bool     `protobuf:"varint,3,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TransportCompanyToggleSupportedDeliveryMethodParams) Reset() {
	*m = TransportCompanyToggleSupportedDeliveryMethodParams{}
}
func (m *TransportCompanyToggleSupportedDeliveryMethodParams) String() string {
	return proto.CompactTextString(m)
}
func (*TransportCompanyToggleSupportedDeliveryMethodParams) ProtoMessage() {}
func (*TransportCompanyToggleSupportedDeliveryMethodParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{2}
}

func (m *TransportCompanyToggleSupportedDeliveryMethodParams) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransportCompanyToggleSupportedDeliveryMethodParams.Unmarshal(m, b)
}
func (m *TransportCompanyToggleSupportedDeliveryMethodParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransportCompanyToggleSupportedDeliveryMethodParams.Marshal(b, m, deterministic)
}
func (m *TransportCompanyToggleSupportedDeliveryMethodParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransportCompanyToggleSupportedDeliveryMethodParams.Merge(m, src)
}
func (m *TransportCompanyToggleSupportedDeliveryMethodParams) XXX_Size() int {
	return xxx_messageInfo_TransportCompanyToggleSupportedDeliveryMethodParams.Size(m)
}
func (m *TransportCompanyToggleSupportedDeliveryMethodParams) XXX_DiscardUnknown() {
	xxx_messageInfo_TransportCompanyToggleSupportedDeliveryMethodParams.DiscardUnknown(m)
}

var xxx_messageInfo_TransportCompanyToggleSupportedDeliveryMethodParams proto.InternalMessageInfo

func (m *TransportCompanyToggleSupportedDeliveryMethodParams) GetTransportCompanyId() int32 {
	if m != nil {
		return m.TransportCompanyId
	}
	return 0
}

func (m *TransportCompanyToggleSupportedDeliveryMethodParams) GetDeliveryId() int32 {
	if m != nil {
		return m.DeliveryId
	}
	return 0
}

func (m *TransportCompanyToggleSupportedDeliveryMethodParams) GetIsActive() bool {
	if m != nil {
		return m.IsActive
	}
	return false
}

type TransportCompanyToggleParams struct {
	Id                   int32    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	IsActive             bool     `protobuf:"varint,2,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TransportCompanyToggleParams) Reset()         { *m = TransportCompanyToggleParams{} }
func (m *TransportCompanyToggleParams) String() string { return proto.CompactTextString(m) }
func (*TransportCompanyToggleParams) ProtoMessage()    {}
func (*TransportCompanyToggleParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{3}
}

func (m *TransportCompanyToggleParams) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransportCompanyToggleParams.Unmarshal(m, b)
}
func (m *TransportCompanyToggleParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransportCompanyToggleParams.Marshal(b, m, deterministic)
}
func (m *TransportCompanyToggleParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransportCompanyToggleParams.Merge(m, src)
}
func (m *TransportCompanyToggleParams) XXX_Size() int {
	return xxx_messageInfo_TransportCompanyToggleParams.Size(m)
}
func (m *TransportCompanyToggleParams) XXX_DiscardUnknown() {
	xxx_messageInfo_TransportCompanyToggleParams.DiscardUnknown(m)
}

var xxx_messageInfo_TransportCompanyToggleParams proto.InternalMessageInfo

func (m *TransportCompanyToggleParams) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *TransportCompanyToggleParams) GetIsActive() bool {
	if m != nil {
		return m.IsActive
	}
	return false
}

type TransportCompanyGetResponse struct {
	Id                   int32                `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Title                string               `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Type                 TransportCompanyType `protobuf:"varint,3,opt,name=type,proto3,enum=transport.TransportCompanyType" json:"type,omitempty"`
	IsActive             bool                 `protobuf:"varint,4,opt,name=is_active,json=isActive,proto3" json:"is_active,omitempty"`
	Created              string               `protobuf:"bytes,5,opt,name=created,proto3" json:"created,omitempty"`
	Updated              string               `protobuf:"bytes,6,opt,name=updated,proto3" json:"updated,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *TransportCompanyGetResponse) Reset()         { *m = TransportCompanyGetResponse{} }
func (m *TransportCompanyGetResponse) String() string { return proto.CompactTextString(m) }
func (*TransportCompanyGetResponse) ProtoMessage()    {}
func (*TransportCompanyGetResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{4}
}

func (m *TransportCompanyGetResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransportCompanyGetResponse.Unmarshal(m, b)
}
func (m *TransportCompanyGetResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransportCompanyGetResponse.Marshal(b, m, deterministic)
}
func (m *TransportCompanyGetResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransportCompanyGetResponse.Merge(m, src)
}
func (m *TransportCompanyGetResponse) XXX_Size() int {
	return xxx_messageInfo_TransportCompanyGetResponse.Size(m)
}
func (m *TransportCompanyGetResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_TransportCompanyGetResponse.DiscardUnknown(m)
}

var xxx_messageInfo_TransportCompanyGetResponse proto.InternalMessageInfo

func (m *TransportCompanyGetResponse) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *TransportCompanyGetResponse) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *TransportCompanyGetResponse) GetType() TransportCompanyType {
	if m != nil {
		return m.Type
	}
	return TransportCompanyType_boxberry
}

func (m *TransportCompanyGetResponse) GetIsActive() bool {
	if m != nil {
		return m.IsActive
	}
	return false
}

func (m *TransportCompanyGetResponse) GetCreated() string {
	if m != nil {
		return m.Created
	}
	return ""
}

func (m *TransportCompanyGetResponse) GetUpdated() string {
	if m != nil {
		return m.Updated
	}
	return ""
}

type TransportCompanyID struct {
	Id                   int32    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TransportCompanyID) Reset()         { *m = TransportCompanyID{} }
func (m *TransportCompanyID) String() string { return proto.CompactTextString(m) }
func (*TransportCompanyID) ProtoMessage()    {}
func (*TransportCompanyID) Descriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{5}
}

func (m *TransportCompanyID) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransportCompanyID.Unmarshal(m, b)
}
func (m *TransportCompanyID) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransportCompanyID.Marshal(b, m, deterministic)
}
func (m *TransportCompanyID) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransportCompanyID.Merge(m, src)
}
func (m *TransportCompanyID) XXX_Size() int {
	return xxx_messageInfo_TransportCompanyID.Size(m)
}
func (m *TransportCompanyID) XXX_DiscardUnknown() {
	xxx_messageInfo_TransportCompanyID.DiscardUnknown(m)
}

var xxx_messageInfo_TransportCompanyID proto.InternalMessageInfo

func (m *TransportCompanyID) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

type TransportCompanyAddParams struct {
	Title                string               `protobuf:"bytes,1,opt,name=title,proto3" json:"title,omitempty"`
	Type                 TransportCompanyType `protobuf:"varint,2,opt,name=type,proto3,enum=transport.TransportCompanyType" json:"type,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *TransportCompanyAddParams) Reset()         { *m = TransportCompanyAddParams{} }
func (m *TransportCompanyAddParams) String() string { return proto.CompactTextString(m) }
func (*TransportCompanyAddParams) ProtoMessage()    {}
func (*TransportCompanyAddParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{6}
}

func (m *TransportCompanyAddParams) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransportCompanyAddParams.Unmarshal(m, b)
}
func (m *TransportCompanyAddParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransportCompanyAddParams.Marshal(b, m, deterministic)
}
func (m *TransportCompanyAddParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransportCompanyAddParams.Merge(m, src)
}
func (m *TransportCompanyAddParams) XXX_Size() int {
	return xxx_messageInfo_TransportCompanyAddParams.Size(m)
}
func (m *TransportCompanyAddParams) XXX_DiscardUnknown() {
	xxx_messageInfo_TransportCompanyAddParams.DiscardUnknown(m)
}

var xxx_messageInfo_TransportCompanyAddParams proto.InternalMessageInfo

func (m *TransportCompanyAddParams) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *TransportCompanyAddParams) GetType() TransportCompanyType {
	if m != nil {
		return m.Type
	}
	return TransportCompanyType_boxberry
}

type TransportCompanyUpdateParams struct {
	Id                   int32                `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Title                string               `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Type                 TransportCompanyType `protobuf:"varint,3,opt,name=type,proto3,enum=transport.TransportCompanyType" json:"type,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *TransportCompanyUpdateParams) Reset()         { *m = TransportCompanyUpdateParams{} }
func (m *TransportCompanyUpdateParams) String() string { return proto.CompactTextString(m) }
func (*TransportCompanyUpdateParams) ProtoMessage()    {}
func (*TransportCompanyUpdateParams) Descriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{7}
}

func (m *TransportCompanyUpdateParams) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransportCompanyUpdateParams.Unmarshal(m, b)
}
func (m *TransportCompanyUpdateParams) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransportCompanyUpdateParams.Marshal(b, m, deterministic)
}
func (m *TransportCompanyUpdateParams) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransportCompanyUpdateParams.Merge(m, src)
}
func (m *TransportCompanyUpdateParams) XXX_Size() int {
	return xxx_messageInfo_TransportCompanyUpdateParams.Size(m)
}
func (m *TransportCompanyUpdateParams) XXX_DiscardUnknown() {
	xxx_messageInfo_TransportCompanyUpdateParams.DiscardUnknown(m)
}

var xxx_messageInfo_TransportCompanyUpdateParams proto.InternalMessageInfo

func (m *TransportCompanyUpdateParams) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *TransportCompanyUpdateParams) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *TransportCompanyUpdateParams) GetType() TransportCompanyType {
	if m != nil {
		return m.Type
	}
	return TransportCompanyType_boxberry
}

type TransportCompanyOkResponse struct {
	Ok                   bool     `protobuf:"varint,1,opt,name=ok,proto3" json:"ok,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TransportCompanyOkResponse) Reset()         { *m = TransportCompanyOkResponse{} }
func (m *TransportCompanyOkResponse) String() string { return proto.CompactTextString(m) }
func (*TransportCompanyOkResponse) ProtoMessage()    {}
func (*TransportCompanyOkResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_64d0e24739b69be1, []int{8}
}

func (m *TransportCompanyOkResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TransportCompanyOkResponse.Unmarshal(m, b)
}
func (m *TransportCompanyOkResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TransportCompanyOkResponse.Marshal(b, m, deterministic)
}
func (m *TransportCompanyOkResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TransportCompanyOkResponse.Merge(m, src)
}
func (m *TransportCompanyOkResponse) XXX_Size() int {
	return xxx_messageInfo_TransportCompanyOkResponse.Size(m)
}
func (m *TransportCompanyOkResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_TransportCompanyOkResponse.DiscardUnknown(m)
}

var xxx_messageInfo_TransportCompanyOkResponse proto.InternalMessageInfo

func (m *TransportCompanyOkResponse) GetOk() bool {
	if m != nil {
		return m.Ok
	}
	return false
}

func init() {
	proto.RegisterEnum("transport.TransportCompanyType", TransportCompanyType_name, TransportCompanyType_value)
	proto.RegisterType((*TransportCompanyAddSupportedDeliveryMethodParams)(nil), "transport.TransportCompanyAddSupportedDeliveryMethodParams")
	proto.RegisterType((*TransportAddSupportedDeliveryMethodResponse)(nil), "transport.TransportAddSupportedDeliveryMethodResponse")
	proto.RegisterType((*TransportCompanyToggleSupportedDeliveryMethodParams)(nil), "transport.TransportCompanyToggleSupportedDeliveryMethodParams")
	proto.RegisterType((*TransportCompanyToggleParams)(nil), "transport.TransportCompanyToggleParams")
	proto.RegisterType((*TransportCompanyGetResponse)(nil), "transport.TransportCompanyGetResponse")
	proto.RegisterType((*TransportCompanyID)(nil), "transport.TransportCompanyID")
	proto.RegisterType((*TransportCompanyAddParams)(nil), "transport.TransportCompanyAddParams")
	proto.RegisterType((*TransportCompanyUpdateParams)(nil), "transport.TransportCompanyUpdateParams")
	proto.RegisterType((*TransportCompanyOkResponse)(nil), "transport.TransportCompanyOkResponse")
}

func init() { proto.RegisterFile("proto/transport_company.proto", fileDescriptor_64d0e24739b69be1) }

var fileDescriptor_64d0e24739b69be1 = []byte{
	// 610 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x55, 0xcd, 0x6e, 0xda, 0x4c,
	0x14, 0xc5, 0x06, 0x1c, 0xb8, 0x5f, 0x84, 0xac, 0xab, 0x2c, 0xf8, 0x9c, 0xa2, 0x44, 0x56, 0xda,
	0x46, 0x6d, 0x45, 0xa3, 0x20, 0x75, 0x53, 0xb5, 0x52, 0x0a, 0x52, 0x84, 0xaa, 0x36, 0x91, 0x9b,
	0x6e, 0xd8, 0x20, 0xe3, 0xb9, 0x05, 0x0b, 0xc2, 0x8c, 0xec, 0x21, 0x8a, 0xfb, 0x04, 0xdd, 0xf7,
	0x19, 0xfa, 0x30, 0xdd, 0xf4, 0x11, 0xfa, 0x2c, 0x15, 0x63, 0x70, 0xc1, 0x80, 0xa1, 0x52, 0xd5,
	0x9d, 0xef, 0xcf, 0x9c, 0x39, 0xf7, 0x1c, 0xeb, 0x0e, 0xd4, 0x44, 0xc0, 0x25, 0x7f, 0x2e, 0x03,
	0x77, 0x1c, 0x0a, 0x1e, 0xc8, 0xae, 0xc7, 0x6f, 0x85, 0x3b, 0x8e, 0xea, 0x2a, 0x8f, 0xe5, 0xa4,
	0x60, 0xff, 0xd0, 0xe0, 0xec, 0x66, 0x1e, 0x35, 0xe3, 0xae, 0x0b, 0xc6, 0x3e, 0x4c, 0xc4, 0x34,
	0x41, 0xac, 0x45, 0x23, 0xff, 0x8e, 0x82, 0xe8, 0x1d, 0xc9, 0x01, 0x67, 0xd7, 0x6e, 0xe0, 0xde,
	0x86, 0x78, 0x06, 0x07, 0x2b, 0xd0, 0x5d, 0x9f, 0x55, 0xb5, 0x63, 0xed, 0xb4, 0xe8, 0xa0, 0x4c,
	0xe1, 0xb5, 0x19, 0x1e, 0xc1, 0x7f, 0x6c, 0x86, 0x34, 0x6d, 0xd4, 0x55, 0x23, 0xcc, 0x53, 0x6d,
	0x86, 0x35, 0x00, 0x1e, 0xf8, 0x7d, 0x7f, 0xdc, 0xfd, 0xec, 0x8b, 0x6a, 0xfe, 0x58, 0x3b, 0x2d,
	0x3b, 0xe5, 0x38, 0xd3, 0xf1, 0x05, 0x9e, 0x82, 0xe9, 0xf1, 0xc9, 0x58, 0x4e, 0x8f, 0x87, 0xbc,
	0xeb, 0x71, 0x46, 0xd5, 0x82, 0x6a, 0xaa, 0xcc, 0xf2, 0xed, 0x90, 0x37, 0x39, 0x23, 0xfb, 0x15,
	0x3c, 0x4d, 0xe6, 0xd9, 0x3c, 0x88, 0x43, 0xa1, 0xe0, 0xe3, 0x90, 0xb0, 0x02, 0x7a, 0x42, 0x5c,
	0xf7, 0x99, 0xfd, 0x4d, 0x83, 0x46, 0x5a, 0x8f, 0x1b, 0xde, 0xef, 0x8f, 0xe8, 0x9f, 0x4b, 0x72,
	0x08, 0x65, 0x3f, 0xec, 0xba, 0x9e, 0xf4, 0xef, 0x48, 0x29, 0x52, 0x72, 0x4a, 0x7e, 0x78, 0xa1,
	0x62, 0xfb, 0x2d, 0x3c, 0x58, 0x4f, 0x73, 0xc6, 0x27, 0x35, 0xd7, 0x32, 0x98, 0x9e, 0x02, 0xfb,
	0xae, 0xc1, 0x61, 0x1a, 0xed, 0x92, 0xe4, 0x26, 0x91, 0xf0, 0x00, 0x8a, 0xd2, 0x97, 0xa3, 0x18,
	0xa8, 0xec, 0xc4, 0x01, 0x36, 0xa0, 0x20, 0x23, 0x11, 0x53, 0xad, 0x9c, 0x1f, 0xd5, 0x93, 0x99,
	0xeb, 0x2b, 0x4c, 0x23, 0x41, 0x8e, 0x6a, 0x5e, 0xe6, 0x55, 0x58, 0xe6, 0x85, 0x55, 0xd8, 0xf3,
	0x02, 0x72, 0x25, 0xb1, 0x6a, 0x51, 0xdd, 0x34, 0x0f, 0xa7, 0x95, 0x89, 0x60, 0xaa, 0x62, 0xc4,
	0x95, 0x59, 0x68, 0x9f, 0x00, 0xa6, 0xaf, 0x6b, 0xb7, 0x56, 0x6c, 0xfe, 0x04, 0xff, 0xaf, 0xf9,
	0xeb, 0x67, 0xda, 0x25, 0xe3, 0x69, 0xeb, 0xc6, 0xd3, 0xff, 0x60, 0x3c, 0x3b, 0x5a, 0xb5, 0xe9,
	0xa3, 0x22, 0xba, 0xc1, 0xa6, 0xbf, 0xa7, 0xac, 0xfd, 0x0c, 0xac, 0x74, 0xf5, 0x6a, 0xb8, 0x68,
	0x29, 0x1f, 0xaa, 0x8b, 0x4b, 0x8e, 0xce, 0x87, 0x4f, 0x08, 0x0e, 0xd6, 0x61, 0xe1, 0x3e, 0x94,
	0x7a, 0xfc, 0xbe, 0x47, 0x41, 0x10, 0x99, 0x39, 0x2c, 0x41, 0xc1, 0x63, 0x34, 0x34, 0x35, 0x04,
	0x30, 0x04, 0xf7, 0x06, 0xd2, 0x35, 0x75, 0xdc, 0x83, 0xfc, 0x44, 0x84, 0x66, 0x7e, 0xfa, 0xc1,
	0x04, 0x33, 0x0b, 0xea, 0x63, 0x30, 0x32, 0x8b, 0x58, 0x01, 0x08, 0x88, 0xd1, 0xbd, 0x08, 0x28,
	0x0c, 0x4d, 0xe3, 0xfc, 0x67, 0x11, 0xcc, 0xf4, 0x3d, 0x78, 0x05, 0x46, 0x53, 0xf9, 0x8a, 0x27,
	0x19, 0xa3, 0x25, 0xfe, 0x58, 0xb5, 0x8c, 0xae, 0x76, 0xcb, 0xce, 0xe1, 0x7b, 0xc8, 0x5f, 0x92,
	0xc4, 0xec, 0x3e, 0xeb, 0x51, 0x46, 0x79, 0xe1, 0xef, 0xb7, 0x73, 0xd8, 0x01, 0x23, 0x76, 0x0d,
	0x1f, 0x67, 0x9c, 0x59, 0x34, 0xd6, 0x7a, 0x98, 0xd1, 0xf8, 0xdb, 0x06, 0x3b, 0x87, 0xd7, 0x60,
	0xb4, 0x68, 0x44, 0x92, 0xb6, 0xd1, 0xdd, 0x19, 0xb1, 0x03, 0x46, 0xbc, 0x0a, 0x32, 0xd9, 0x2e,
	0x6e, 0x8b, 0xdd, 0xb1, 0xbf, 0x6a, 0x60, 0x6d, 0xde, 0xaa, 0xf8, 0x32, 0xdb, 0xbf, 0xcc, 0x15,
	0x6a, 0xbd, 0x58, 0x77, 0x78, 0xfb, 0x0a, 0xb7, 0x73, 0xf8, 0x45, 0x83, 0x5a, 0xe6, 0x92, 0xc6,
	0xd7, 0x5b, 0x95, 0xc8, 0xe6, 0xb6, 0xab, 0x40, 0x6f, 0x2a, 0x9d, 0xfd, 0xfe, 0xc2, 0xc3, 0xdb,
	0x33, 0xd4, 0x8b, 0xdb, 0xf8, 0x15, 0x00, 0x00, 0xff, 0xff, 0x44, 0x40, 0x04, 0xe6, 0x92, 0x07,
	0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// TransportCompanyClient is the client API for TransportCompany service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TransportCompanyClient interface {
	Create(ctx context.Context, in *TransportCompanyAddParams, opts ...grpc.CallOption) (*TransportCompanyID, error)
	Get(ctx context.Context, in *TransportCompanyID, opts ...grpc.CallOption) (*TransportCompanyGetResponse, error)
	Update(ctx context.Context, in *TransportCompanyUpdateParams, opts ...grpc.CallOption) (*TransportCompanyOkResponse, error)
	Delete(ctx context.Context, in *TransportCompanyID, opts ...grpc.CallOption) (*TransportCompanyOkResponse, error)
	Toggle(ctx context.Context, in *TransportCompanyToggleParams, opts ...grpc.CallOption) (*TransportCompanyOkResponse, error)
	AddSupportedDeliveryMethod(ctx context.Context, in *TransportCompanyAddSupportedDeliveryMethodParams, opts ...grpc.CallOption) (*TransportAddSupportedDeliveryMethodResponse, error)
	ToggleSupportedDeliveryMethod(ctx context.Context, in *TransportCompanyToggleSupportedDeliveryMethodParams, opts ...grpc.CallOption) (*TransportCompanyOkResponse, error)
}

type transportCompanyClient struct {
	cc *grpc.ClientConn
}

func NewTransportCompanyClient(cc *grpc.ClientConn) TransportCompanyClient {
	return &transportCompanyClient{cc}
}

func (c *transportCompanyClient) Create(ctx context.Context, in *TransportCompanyAddParams, opts ...grpc.CallOption) (*TransportCompanyID, error) {
	out := new(TransportCompanyID)
	err := c.cc.Invoke(ctx, "/transport.TransportCompany/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transportCompanyClient) Get(ctx context.Context, in *TransportCompanyID, opts ...grpc.CallOption) (*TransportCompanyGetResponse, error) {
	out := new(TransportCompanyGetResponse)
	err := c.cc.Invoke(ctx, "/transport.TransportCompany/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transportCompanyClient) Update(ctx context.Context, in *TransportCompanyUpdateParams, opts ...grpc.CallOption) (*TransportCompanyOkResponse, error) {
	out := new(TransportCompanyOkResponse)
	err := c.cc.Invoke(ctx, "/transport.TransportCompany/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transportCompanyClient) Delete(ctx context.Context, in *TransportCompanyID, opts ...grpc.CallOption) (*TransportCompanyOkResponse, error) {
	out := new(TransportCompanyOkResponse)
	err := c.cc.Invoke(ctx, "/transport.TransportCompany/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transportCompanyClient) Toggle(ctx context.Context, in *TransportCompanyToggleParams, opts ...grpc.CallOption) (*TransportCompanyOkResponse, error) {
	out := new(TransportCompanyOkResponse)
	err := c.cc.Invoke(ctx, "/transport.TransportCompany/Toggle", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transportCompanyClient) AddSupportedDeliveryMethod(ctx context.Context, in *TransportCompanyAddSupportedDeliveryMethodParams, opts ...grpc.CallOption) (*TransportAddSupportedDeliveryMethodResponse, error) {
	out := new(TransportAddSupportedDeliveryMethodResponse)
	err := c.cc.Invoke(ctx, "/transport.TransportCompany/AddSupportedDeliveryMethod", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *transportCompanyClient) ToggleSupportedDeliveryMethod(ctx context.Context, in *TransportCompanyToggleSupportedDeliveryMethodParams, opts ...grpc.CallOption) (*TransportCompanyOkResponse, error) {
	out := new(TransportCompanyOkResponse)
	err := c.cc.Invoke(ctx, "/transport.TransportCompany/ToggleSupportedDeliveryMethod", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TransportCompanyServer is the server API for TransportCompany service.
type TransportCompanyServer interface {
	Create(context.Context, *TransportCompanyAddParams) (*TransportCompanyID, error)
	Get(context.Context, *TransportCompanyID) (*TransportCompanyGetResponse, error)
	Update(context.Context, *TransportCompanyUpdateParams) (*TransportCompanyOkResponse, error)
	Delete(context.Context, *TransportCompanyID) (*TransportCompanyOkResponse, error)
	Toggle(context.Context, *TransportCompanyToggleParams) (*TransportCompanyOkResponse, error)
	AddSupportedDeliveryMethod(context.Context, *TransportCompanyAddSupportedDeliveryMethodParams) (*TransportAddSupportedDeliveryMethodResponse, error)
	ToggleSupportedDeliveryMethod(context.Context, *TransportCompanyToggleSupportedDeliveryMethodParams) (*TransportCompanyOkResponse, error)
}

// UnimplementedTransportCompanyServer can be embedded to have forward compatible implementations.
type UnimplementedTransportCompanyServer struct {
}

func (*UnimplementedTransportCompanyServer) Create(ctx context.Context, req *TransportCompanyAddParams) (*TransportCompanyID, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedTransportCompanyServer) Get(ctx context.Context, req *TransportCompanyID) (*TransportCompanyGetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedTransportCompanyServer) Update(ctx context.Context, req *TransportCompanyUpdateParams) (*TransportCompanyOkResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (*UnimplementedTransportCompanyServer) Delete(ctx context.Context, req *TransportCompanyID) (*TransportCompanyOkResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (*UnimplementedTransportCompanyServer) Toggle(ctx context.Context, req *TransportCompanyToggleParams) (*TransportCompanyOkResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Toggle not implemented")
}
func (*UnimplementedTransportCompanyServer) AddSupportedDeliveryMethod(ctx context.Context, req *TransportCompanyAddSupportedDeliveryMethodParams) (*TransportAddSupportedDeliveryMethodResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddSupportedDeliveryMethod not implemented")
}
func (*UnimplementedTransportCompanyServer) ToggleSupportedDeliveryMethod(ctx context.Context, req *TransportCompanyToggleSupportedDeliveryMethodParams) (*TransportCompanyOkResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ToggleSupportedDeliveryMethod not implemented")
}

func RegisterTransportCompanyServer(s *grpc.Server, srv TransportCompanyServer) {
	s.RegisterService(&_TransportCompany_serviceDesc, srv)
}

func _TransportCompany_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransportCompanyAddParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransportCompanyServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/transport.TransportCompany/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransportCompanyServer).Create(ctx, req.(*TransportCompanyAddParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransportCompany_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransportCompanyID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransportCompanyServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/transport.TransportCompany/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransportCompanyServer).Get(ctx, req.(*TransportCompanyID))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransportCompany_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransportCompanyUpdateParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransportCompanyServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/transport.TransportCompany/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransportCompanyServer).Update(ctx, req.(*TransportCompanyUpdateParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransportCompany_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransportCompanyID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransportCompanyServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/transport.TransportCompany/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransportCompanyServer).Delete(ctx, req.(*TransportCompanyID))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransportCompany_Toggle_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransportCompanyToggleParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransportCompanyServer).Toggle(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/transport.TransportCompany/Toggle",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransportCompanyServer).Toggle(ctx, req.(*TransportCompanyToggleParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransportCompany_AddSupportedDeliveryMethod_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransportCompanyAddSupportedDeliveryMethodParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransportCompanyServer).AddSupportedDeliveryMethod(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/transport.TransportCompany/AddSupportedDeliveryMethod",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransportCompanyServer).AddSupportedDeliveryMethod(ctx, req.(*TransportCompanyAddSupportedDeliveryMethodParams))
	}
	return interceptor(ctx, in, info, handler)
}

func _TransportCompany_ToggleSupportedDeliveryMethod_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransportCompanyToggleSupportedDeliveryMethodParams)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TransportCompanyServer).ToggleSupportedDeliveryMethod(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/transport.TransportCompany/ToggleSupportedDeliveryMethod",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TransportCompanyServer).ToggleSupportedDeliveryMethod(ctx, req.(*TransportCompanyToggleSupportedDeliveryMethodParams))
	}
	return interceptor(ctx, in, info, handler)
}

var _TransportCompany_serviceDesc = grpc.ServiceDesc{
	ServiceName: "transport.TransportCompany",
	HandlerType: (*TransportCompanyServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _TransportCompany_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _TransportCompany_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _TransportCompany_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _TransportCompany_Delete_Handler,
		},
		{
			MethodName: "Toggle",
			Handler:    _TransportCompany_Toggle_Handler,
		},
		{
			MethodName: "AddSupportedDeliveryMethod",
			Handler:    _TransportCompany_AddSupportedDeliveryMethod_Handler,
		},
		{
			MethodName: "ToggleSupportedDeliveryMethod",
			Handler:    _TransportCompany_ToggleSupportedDeliveryMethod_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/transport_company.proto",
}