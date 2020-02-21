import * as $protobuf from "protobufjs";
/** Namespace feedbacks. */
export namespace feedbacks {

    /** Represents a Mobile */
    class Mobile extends $protobuf.rpc.Service {

        /**
         * Constructs a new Mobile service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Mobile service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Mobile;

        /**
         * Calls App.
         * @param request RequestApp message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseOk
         */
        public app(request: feedbacks.IRequestApp, callback: feedbacks.Mobile.AppCallback): void;

        /**
         * Calls App.
         * @param request RequestApp message or plain object
         * @returns Promise
         */
        public app(request: feedbacks.IRequestApp): Promise<feedbacks.ResponseOk>;

        /**
         * Calls Store.
         * @param request RequestStore message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseOk
         */
        public store(request: feedbacks.IRequestStore, callback: feedbacks.Mobile.StoreCallback): void;

        /**
         * Calls Store.
         * @param request RequestStore message or plain object
         * @returns Promise
         */
        public store(request: feedbacks.IRequestStore): Promise<feedbacks.ResponseOk>;

        /**
         * Calls Order.
         * @param request RequestOrder message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseOk
         */
        public order(request: feedbacks.IRequestOrder, callback: feedbacks.Mobile.OrderCallback): void;

        /**
         * Calls Order.
         * @param request RequestOrder message or plain object
         * @returns Promise
         */
        public order(request: feedbacks.IRequestOrder): Promise<feedbacks.ResponseOk>;
    }

    namespace Mobile {

        /**
         * Callback as used by {@link feedbacks.Mobile#app}.
         * @param error Error, if any
         * @param [response] ResponseOk
         */
        type AppCallback = (error: (Error|null), response?: feedbacks.ResponseOk) => void;

        /**
         * Callback as used by {@link feedbacks.Mobile#store}.
         * @param error Error, if any
         * @param [response] ResponseOk
         */
        type StoreCallback = (error: (Error|null), response?: feedbacks.ResponseOk) => void;

        /**
         * Callback as used by {@link feedbacks.Mobile#order}.
         * @param error Error, if any
         * @param [response] ResponseOk
         */
        type OrderCallback = (error: (Error|null), response?: feedbacks.ResponseOk) => void;
    }

    /** Properties of a ResponseOk. */
    interface IResponseOk {

        /** ResponseOk ok */
        ok?: (boolean|null);
    }

    /** Represents a ResponseOk. */
    class ResponseOk implements IResponseOk {

        /**
         * Constructs a new ResponseOk.
         * @param [properties] Properties to set
         */
        constructor(properties?: feedbacks.IResponseOk);

        /** ResponseOk ok. */
        public ok: boolean;

        /**
         * Creates a new ResponseOk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseOk instance
         */
        public static create(properties?: feedbacks.IResponseOk): feedbacks.ResponseOk;

        /**
         * Encodes the specified ResponseOk message. Does not implicitly {@link feedbacks.ResponseOk.verify|verify} messages.
         * @param message ResponseOk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feedbacks.IResponseOk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseOk message, length delimited. Does not implicitly {@link feedbacks.ResponseOk.verify|verify} messages.
         * @param message ResponseOk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: feedbacks.IResponseOk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseOk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseOk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feedbacks.ResponseOk;

        /**
         * Decodes a ResponseOk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseOk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): feedbacks.ResponseOk;

        /**
         * Verifies a ResponseOk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseOk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseOk
         */
        public static fromObject(object: { [k: string]: any }): feedbacks.ResponseOk;

        /**
         * Creates a plain object from a ResponseOk message. Also converts values to other types if specified.
         * @param message ResponseOk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: feedbacks.ResponseOk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseOk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestApp. */
    interface IRequestApp {

        /** RequestApp clientId */
        clientId?: (number|Long|null);

        /** RequestApp appVersion */
        appVersion?: (string|null);

        /** RequestApp rate */
        rate?: (string|null);

        /** RequestApp reason */
        reason?: (number[]|null);

        /** RequestApp comment */
        comment?: (string|null);

        /** RequestApp date */
        date?: (string|null);
    }

    /** Represents a RequestApp. */
    class RequestApp implements IRequestApp {

        /**
         * Constructs a new RequestApp.
         * @param [properties] Properties to set
         */
        constructor(properties?: feedbacks.IRequestApp);

        /** RequestApp clientId. */
        public clientId: (number|Long);

        /** RequestApp appVersion. */
        public appVersion: string;

        /** RequestApp rate. */
        public rate: string;

        /** RequestApp reason. */
        public reason: number[];

        /** RequestApp comment. */
        public comment: string;

        /** RequestApp date. */
        public date: string;

        /**
         * Creates a new RequestApp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestApp instance
         */
        public static create(properties?: feedbacks.IRequestApp): feedbacks.RequestApp;

        /**
         * Encodes the specified RequestApp message. Does not implicitly {@link feedbacks.RequestApp.verify|verify} messages.
         * @param message RequestApp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feedbacks.IRequestApp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestApp message, length delimited. Does not implicitly {@link feedbacks.RequestApp.verify|verify} messages.
         * @param message RequestApp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: feedbacks.IRequestApp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestApp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feedbacks.RequestApp;

        /**
         * Decodes a RequestApp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestApp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): feedbacks.RequestApp;

        /**
         * Verifies a RequestApp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestApp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestApp
         */
        public static fromObject(object: { [k: string]: any }): feedbacks.RequestApp;

        /**
         * Creates a plain object from a RequestApp message. Also converts values to other types if specified.
         * @param message RequestApp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: feedbacks.RequestApp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestApp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestStore. */
    interface IRequestStore {

        /** RequestStore clientId */
        clientId?: (number|Long|null);

        /** RequestStore rate */
        rate?: (string|null);

        /** RequestStore reason */
        reason?: (number[]|null);

        /** RequestStore comment */
        comment?: (string|null);

        /** RequestStore city */
        city?: (string|null);

        /** RequestStore date */
        date?: (string|null);
    }

    /** Represents a RequestStore. */
    class RequestStore implements IRequestStore {

        /**
         * Constructs a new RequestStore.
         * @param [properties] Properties to set
         */
        constructor(properties?: feedbacks.IRequestStore);

        /** RequestStore clientId. */
        public clientId: (number|Long);

        /** RequestStore rate. */
        public rate: string;

        /** RequestStore reason. */
        public reason: number[];

        /** RequestStore comment. */
        public comment: string;

        /** RequestStore city. */
        public city: string;

        /** RequestStore date. */
        public date: string;

        /**
         * Creates a new RequestStore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestStore instance
         */
        public static create(properties?: feedbacks.IRequestStore): feedbacks.RequestStore;

        /**
         * Encodes the specified RequestStore message. Does not implicitly {@link feedbacks.RequestStore.verify|verify} messages.
         * @param message RequestStore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feedbacks.IRequestStore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestStore message, length delimited. Does not implicitly {@link feedbacks.RequestStore.verify|verify} messages.
         * @param message RequestStore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: feedbacks.IRequestStore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestStore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestStore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feedbacks.RequestStore;

        /**
         * Decodes a RequestStore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestStore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): feedbacks.RequestStore;

        /**
         * Verifies a RequestStore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestStore message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestStore
         */
        public static fromObject(object: { [k: string]: any }): feedbacks.RequestStore;

        /**
         * Creates a plain object from a RequestStore message. Also converts values to other types if specified.
         * @param message RequestStore
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: feedbacks.RequestStore, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestStore to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestOrder. */
    interface IRequestOrder {

        /** RequestOrder orderId */
        orderId?: (string|null);

        /** RequestOrder clientId */
        clientId?: (number|Long|null);

        /** RequestOrder paymentType */
        paymentType?: (string|null);

        /** RequestOrder deliveryType */
        deliveryType?: (string|null);

        /** RequestOrder rate */
        rate?: (string|null);

        /** RequestOrder reason */
        reason?: (number[]|null);

        /** RequestOrder comment */
        comment?: (string|null);

        /** RequestOrder dateOrder */
        dateOrder?: (string|null);

        /** RequestOrder dateRate */
        dateRate?: (string|null);

        /** RequestOrder storeName */
        storeName?: (string|null);

        /** RequestOrder transportCompany */
        transportCompany?: (string|null);

        /** RequestOrder country */
        country?: (string|null);

        /** RequestOrder city */
        city?: (string|null);
    }

    /** Represents a RequestOrder. */
    class RequestOrder implements IRequestOrder {

        /**
         * Constructs a new RequestOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: feedbacks.IRequestOrder);

        /** RequestOrder orderId. */
        public orderId: string;

        /** RequestOrder clientId. */
        public clientId: (number|Long);

        /** RequestOrder paymentType. */
        public paymentType: string;

        /** RequestOrder deliveryType. */
        public deliveryType: string;

        /** RequestOrder rate. */
        public rate: string;

        /** RequestOrder reason. */
        public reason: number[];

        /** RequestOrder comment. */
        public comment: string;

        /** RequestOrder dateOrder. */
        public dateOrder: string;

        /** RequestOrder dateRate. */
        public dateRate: string;

        /** RequestOrder storeName. */
        public storeName: string;

        /** RequestOrder transportCompany. */
        public transportCompany: string;

        /** RequestOrder country. */
        public country: string;

        /** RequestOrder city. */
        public city: string;

        /**
         * Creates a new RequestOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestOrder instance
         */
        public static create(properties?: feedbacks.IRequestOrder): feedbacks.RequestOrder;

        /**
         * Encodes the specified RequestOrder message. Does not implicitly {@link feedbacks.RequestOrder.verify|verify} messages.
         * @param message RequestOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: feedbacks.IRequestOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestOrder message, length delimited. Does not implicitly {@link feedbacks.RequestOrder.verify|verify} messages.
         * @param message RequestOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: feedbacks.IRequestOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): feedbacks.RequestOrder;

        /**
         * Decodes a RequestOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): feedbacks.RequestOrder;

        /**
         * Verifies a RequestOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestOrder
         */
        public static fromObject(object: { [k: string]: any }): feedbacks.RequestOrder;

        /**
         * Creates a plain object from a RequestOrder message. Also converts values to other types if specified.
         * @param message RequestOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: feedbacks.RequestOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace logistics. */
export namespace logistics {

    /** Represents a Logistics */
    class Logistics extends $protobuf.rpc.Service {

        /**
         * Constructs a new Logistics service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Logistics service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Logistics;

        /**
         * Calls Ping.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and PingResponse
         */
        public ping(request: google.protobuf.IEmpty, callback: logistics.Logistics.PingCallback): void;

        /**
         * Calls Ping.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public ping(request: google.protobuf.IEmpty): Promise<logistics.PingResponse>;

        /**
         * Calls UPSDuration.
         * @param request GetParamsUPS message or plain object
         * @param callback Node-style callback called with the error, if any, and GetResponseUPS
         */
        public uPSDuration(request: logistics.IGetParamsUPS, callback: logistics.Logistics.UPSDurationCallback): void;

        /**
         * Calls UPSDuration.
         * @param request GetParamsUPS message or plain object
         * @returns Promise
         */
        public uPSDuration(request: logistics.IGetParamsUPS): Promise<logistics.GetResponseUPS>;

        /**
         * Calls BoxberryDuration.
         * @param request GetParamsBoxberry message or plain object
         * @param callback Node-style callback called with the error, if any, and GetResponseBoxberry
         */
        public boxberryDuration(request: logistics.IGetParamsBoxberry, callback: logistics.Logistics.BoxberryDurationCallback): void;

        /**
         * Calls BoxberryDuration.
         * @param request GetParamsBoxberry message or plain object
         * @returns Promise
         */
        public boxberryDuration(request: logistics.IGetParamsBoxberry): Promise<logistics.GetResponseBoxberry>;

        /**
         * Calls BoxberryDurationByCity.
         * @param request GetParamsBoxberryDurationByCity message or plain object
         * @param callback Node-style callback called with the error, if any, and GetResponseBoxberryDurationByCity
         */
        public boxberryDurationByCity(request: logistics.IGetParamsBoxberryDurationByCity, callback: logistics.Logistics.BoxberryDurationByCityCallback): void;

        /**
         * Calls BoxberryDurationByCity.
         * @param request GetParamsBoxberryDurationByCity message or plain object
         * @returns Promise
         */
        public boxberryDurationByCity(request: logistics.IGetParamsBoxberryDurationByCity): Promise<logistics.GetResponseBoxberryDurationByCity>;

        /**
         * Calls BoxberryPointInformation.
         * @param request GetParamsPointInformation message or plain object
         * @param callback Node-style callback called with the error, if any, and GetResponsePointInformation
         */
        public boxberryPointInformation(request: logistics.IGetParamsPointInformation, callback: logistics.Logistics.BoxberryPointInformationCallback): void;

        /**
         * Calls BoxberryPointInformation.
         * @param request GetParamsPointInformation message or plain object
         * @returns Promise
         */
        public boxberryPointInformation(request: logistics.IGetParamsPointInformation): Promise<logistics.GetResponsePointInformation>;

        /**
         * Calls BoxberryOrderStatus.
         * @param request GetParamsOrderStatus message or plain object
         * @param callback Node-style callback called with the error, if any, and GetResponseOrderStatus
         */
        public boxberryOrderStatus(request: logistics.IGetParamsOrderStatus, callback: logistics.Logistics.BoxberryOrderStatusCallback): void;

        /**
         * Calls BoxberryOrderStatus.
         * @param request GetParamsOrderStatus message or plain object
         * @returns Promise
         */
        public boxberryOrderStatus(request: logistics.IGetParamsOrderStatus): Promise<logistics.GetResponseOrderStatus>;
    }

    namespace Logistics {

        /**
         * Callback as used by {@link logistics.Logistics#ping}.
         * @param error Error, if any
         * @param [response] PingResponse
         */
        type PingCallback = (error: (Error|null), response?: logistics.PingResponse) => void;

        /**
         * Callback as used by {@link logistics.Logistics#uPSDuration}.
         * @param error Error, if any
         * @param [response] GetResponseUPS
         */
        type UPSDurationCallback = (error: (Error|null), response?: logistics.GetResponseUPS) => void;

        /**
         * Callback as used by {@link logistics.Logistics#boxberryDuration}.
         * @param error Error, if any
         * @param [response] GetResponseBoxberry
         */
        type BoxberryDurationCallback = (error: (Error|null), response?: logistics.GetResponseBoxberry) => void;

        /**
         * Callback as used by {@link logistics.Logistics#boxberryDurationByCity}.
         * @param error Error, if any
         * @param [response] GetResponseBoxberryDurationByCity
         */
        type BoxberryDurationByCityCallback = (error: (Error|null), response?: logistics.GetResponseBoxberryDurationByCity) => void;

        /**
         * Callback as used by {@link logistics.Logistics#boxberryPointInformation}.
         * @param error Error, if any
         * @param [response] GetResponsePointInformation
         */
        type BoxberryPointInformationCallback = (error: (Error|null), response?: logistics.GetResponsePointInformation) => void;

        /**
         * Callback as used by {@link logistics.Logistics#boxberryOrderStatus}.
         * @param error Error, if any
         * @param [response] GetResponseOrderStatus
         */
        type BoxberryOrderStatusCallback = (error: (Error|null), response?: logistics.GetResponseOrderStatus) => void;
    }

    /** Properties of a PingResponse. */
    interface IPingResponse {

        /** PingResponse response */
        response?: (string|null);
    }

    /** Represents a PingResponse. */
    class PingResponse implements IPingResponse {

        /**
         * Constructs a new PingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IPingResponse);

        /** PingResponse response. */
        public response: string;

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingResponse instance
         */
        public static create(properties?: logistics.IPingResponse): logistics.PingResponse;

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link logistics.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link logistics.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.PingResponse;

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.PingResponse;

        /**
         * Verifies a PingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingResponse
         */
        public static fromObject(object: { [k: string]: any }): logistics.PingResponse;

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @param message PingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetParamsUPS. */
    interface IGetParamsUPS {

        /** GetParamsUPS originCountryCode */
        originCountryCode?: (string|null);

        /** GetParamsUPS originPostalCode */
        originPostalCode?: (string|null);

        /** GetParamsUPS destinationCountryCode */
        destinationCountryCode?: (string|null);

        /** GetParamsUPS destinationPostalCode */
        destinationPostalCode?: (string|null);

        /** GetParamsUPS shipDate */
        shipDate?: (string|null);

        /** GetParamsUPS shipTime */
        shipTime?: (string|null);
    }

    /** Represents a GetParamsUPS. */
    class GetParamsUPS implements IGetParamsUPS {

        /**
         * Constructs a new GetParamsUPS.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetParamsUPS);

        /** GetParamsUPS originCountryCode. */
        public originCountryCode: string;

        /** GetParamsUPS originPostalCode. */
        public originPostalCode: string;

        /** GetParamsUPS destinationCountryCode. */
        public destinationCountryCode: string;

        /** GetParamsUPS destinationPostalCode. */
        public destinationPostalCode: string;

        /** GetParamsUPS shipDate. */
        public shipDate: string;

        /** GetParamsUPS shipTime. */
        public shipTime: string;

        /**
         * Creates a new GetParamsUPS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetParamsUPS instance
         */
        public static create(properties?: logistics.IGetParamsUPS): logistics.GetParamsUPS;

        /**
         * Encodes the specified GetParamsUPS message. Does not implicitly {@link logistics.GetParamsUPS.verify|verify} messages.
         * @param message GetParamsUPS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetParamsUPS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetParamsUPS message, length delimited. Does not implicitly {@link logistics.GetParamsUPS.verify|verify} messages.
         * @param message GetParamsUPS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetParamsUPS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetParamsUPS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetParamsUPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetParamsUPS;

        /**
         * Decodes a GetParamsUPS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetParamsUPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetParamsUPS;

        /**
         * Verifies a GetParamsUPS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetParamsUPS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetParamsUPS
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetParamsUPS;

        /**
         * Creates a plain object from a GetParamsUPS message. Also converts values to other types if specified.
         * @param message GetParamsUPS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetParamsUPS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetParamsUPS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetResponseUPS. */
    interface IGetResponseUPS {

        /** GetResponseUPS deliveryDate */
        deliveryDate?: (string|null);

        /** GetResponseUPS deliveryTime */
        deliveryTime?: (string|null);
    }

    /** Represents a GetResponseUPS. */
    class GetResponseUPS implements IGetResponseUPS {

        /**
         * Constructs a new GetResponseUPS.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetResponseUPS);

        /** GetResponseUPS deliveryDate. */
        public deliveryDate: string;

        /** GetResponseUPS deliveryTime. */
        public deliveryTime: string;

        /**
         * Creates a new GetResponseUPS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetResponseUPS instance
         */
        public static create(properties?: logistics.IGetResponseUPS): logistics.GetResponseUPS;

        /**
         * Encodes the specified GetResponseUPS message. Does not implicitly {@link logistics.GetResponseUPS.verify|verify} messages.
         * @param message GetResponseUPS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetResponseUPS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetResponseUPS message, length delimited. Does not implicitly {@link logistics.GetResponseUPS.verify|verify} messages.
         * @param message GetResponseUPS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetResponseUPS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetResponseUPS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetResponseUPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetResponseUPS;

        /**
         * Decodes a GetResponseUPS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetResponseUPS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetResponseUPS;

        /**
         * Verifies a GetResponseUPS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetResponseUPS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetResponseUPS
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetResponseUPS;

        /**
         * Creates a plain object from a GetResponseUPS message. Also converts values to other types if specified.
         * @param message GetResponseUPS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetResponseUPS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetResponseUPS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetParamsBoxberry. */
    interface IGetParamsBoxberry {

        /** GetParamsBoxberry originCode */
        originCode?: (string|null);

        /** GetParamsBoxberry destionationCode */
        destionationCode?: (string|null);
    }

    /** Represents a GetParamsBoxberry. */
    class GetParamsBoxberry implements IGetParamsBoxberry {

        /**
         * Constructs a new GetParamsBoxberry.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetParamsBoxberry);

        /** GetParamsBoxberry originCode. */
        public originCode: string;

        /** GetParamsBoxberry destionationCode. */
        public destionationCode: string;

        /**
         * Creates a new GetParamsBoxberry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetParamsBoxberry instance
         */
        public static create(properties?: logistics.IGetParamsBoxberry): logistics.GetParamsBoxberry;

        /**
         * Encodes the specified GetParamsBoxberry message. Does not implicitly {@link logistics.GetParamsBoxberry.verify|verify} messages.
         * @param message GetParamsBoxberry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetParamsBoxberry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetParamsBoxberry message, length delimited. Does not implicitly {@link logistics.GetParamsBoxberry.verify|verify} messages.
         * @param message GetParamsBoxberry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetParamsBoxberry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetParamsBoxberry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetParamsBoxberry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetParamsBoxberry;

        /**
         * Decodes a GetParamsBoxberry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetParamsBoxberry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetParamsBoxberry;

        /**
         * Verifies a GetParamsBoxberry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetParamsBoxberry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetParamsBoxberry
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetParamsBoxberry;

        /**
         * Creates a plain object from a GetParamsBoxberry message. Also converts values to other types if specified.
         * @param message GetParamsBoxberry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetParamsBoxberry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetParamsBoxberry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetResponseBoxberry. */
    interface IGetResponseBoxberry {

        /** GetResponseBoxberry price */
        price?: (number|null);

        /** GetResponseBoxberry deliveryPeriod */
        deliveryPeriod?: (number|null);
    }

    /** Represents a GetResponseBoxberry. */
    class GetResponseBoxberry implements IGetResponseBoxberry {

        /**
         * Constructs a new GetResponseBoxberry.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetResponseBoxberry);

        /** GetResponseBoxberry price. */
        public price: number;

        /** GetResponseBoxberry deliveryPeriod. */
        public deliveryPeriod: number;

        /**
         * Creates a new GetResponseBoxberry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetResponseBoxberry instance
         */
        public static create(properties?: logistics.IGetResponseBoxberry): logistics.GetResponseBoxberry;

        /**
         * Encodes the specified GetResponseBoxberry message. Does not implicitly {@link logistics.GetResponseBoxberry.verify|verify} messages.
         * @param message GetResponseBoxberry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetResponseBoxberry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetResponseBoxberry message, length delimited. Does not implicitly {@link logistics.GetResponseBoxberry.verify|verify} messages.
         * @param message GetResponseBoxberry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetResponseBoxberry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetResponseBoxberry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetResponseBoxberry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetResponseBoxberry;

        /**
         * Decodes a GetResponseBoxberry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetResponseBoxberry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetResponseBoxberry;

        /**
         * Verifies a GetResponseBoxberry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetResponseBoxberry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetResponseBoxberry
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetResponseBoxberry;

        /**
         * Creates a plain object from a GetResponseBoxberry message. Also converts values to other types if specified.
         * @param message GetResponseBoxberry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetResponseBoxberry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetResponseBoxberry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetParamsBoxberryDurationByCity. */
    interface IGetParamsBoxberryDurationByCity {

        /** GetParamsBoxberryDurationByCity originCode */
        originCode?: (string|null);

        /** GetParamsBoxberryDurationByCity cityName */
        cityName?: (string|null);
    }

    /** Represents a GetParamsBoxberryDurationByCity. */
    class GetParamsBoxberryDurationByCity implements IGetParamsBoxberryDurationByCity {

        /**
         * Constructs a new GetParamsBoxberryDurationByCity.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetParamsBoxberryDurationByCity);

        /** GetParamsBoxberryDurationByCity originCode. */
        public originCode: string;

        /** GetParamsBoxberryDurationByCity cityName. */
        public cityName: string;

        /**
         * Creates a new GetParamsBoxberryDurationByCity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetParamsBoxberryDurationByCity instance
         */
        public static create(properties?: logistics.IGetParamsBoxberryDurationByCity): logistics.GetParamsBoxberryDurationByCity;

        /**
         * Encodes the specified GetParamsBoxberryDurationByCity message. Does not implicitly {@link logistics.GetParamsBoxberryDurationByCity.verify|verify} messages.
         * @param message GetParamsBoxberryDurationByCity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetParamsBoxberryDurationByCity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetParamsBoxberryDurationByCity message, length delimited. Does not implicitly {@link logistics.GetParamsBoxberryDurationByCity.verify|verify} messages.
         * @param message GetParamsBoxberryDurationByCity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetParamsBoxberryDurationByCity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetParamsBoxberryDurationByCity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetParamsBoxberryDurationByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetParamsBoxberryDurationByCity;

        /**
         * Decodes a GetParamsBoxberryDurationByCity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetParamsBoxberryDurationByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetParamsBoxberryDurationByCity;

        /**
         * Verifies a GetParamsBoxberryDurationByCity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetParamsBoxberryDurationByCity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetParamsBoxberryDurationByCity
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetParamsBoxberryDurationByCity;

        /**
         * Creates a plain object from a GetParamsBoxberryDurationByCity message. Also converts values to other types if specified.
         * @param message GetParamsBoxberryDurationByCity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetParamsBoxberryDurationByCity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetParamsBoxberryDurationByCity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetResponseBoxberryDurationByCity. */
    interface IGetResponseBoxberryDurationByCity {

        /** GetResponseBoxberryDurationByCity price */
        price?: (number|null);

        /** GetResponseBoxberryDurationByCity deliveryPeriod */
        deliveryPeriod?: (number|null);
    }

    /** Represents a GetResponseBoxberryDurationByCity. */
    class GetResponseBoxberryDurationByCity implements IGetResponseBoxberryDurationByCity {

        /**
         * Constructs a new GetResponseBoxberryDurationByCity.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetResponseBoxberryDurationByCity);

        /** GetResponseBoxberryDurationByCity price. */
        public price: number;

        /** GetResponseBoxberryDurationByCity deliveryPeriod. */
        public deliveryPeriod: number;

        /**
         * Creates a new GetResponseBoxberryDurationByCity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetResponseBoxberryDurationByCity instance
         */
        public static create(properties?: logistics.IGetResponseBoxberryDurationByCity): logistics.GetResponseBoxberryDurationByCity;

        /**
         * Encodes the specified GetResponseBoxberryDurationByCity message. Does not implicitly {@link logistics.GetResponseBoxberryDurationByCity.verify|verify} messages.
         * @param message GetResponseBoxberryDurationByCity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetResponseBoxberryDurationByCity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetResponseBoxberryDurationByCity message, length delimited. Does not implicitly {@link logistics.GetResponseBoxberryDurationByCity.verify|verify} messages.
         * @param message GetResponseBoxberryDurationByCity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetResponseBoxberryDurationByCity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetResponseBoxberryDurationByCity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetResponseBoxberryDurationByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetResponseBoxberryDurationByCity;

        /**
         * Decodes a GetResponseBoxberryDurationByCity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetResponseBoxberryDurationByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetResponseBoxberryDurationByCity;

        /**
         * Verifies a GetResponseBoxberryDurationByCity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetResponseBoxberryDurationByCity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetResponseBoxberryDurationByCity
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetResponseBoxberryDurationByCity;

        /**
         * Creates a plain object from a GetResponseBoxberryDurationByCity message. Also converts values to other types if specified.
         * @param message GetResponseBoxberryDurationByCity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetResponseBoxberryDurationByCity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetResponseBoxberryDurationByCity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetParamsPointInformation. */
    interface IGetParamsPointInformation {

        /** GetParamsPointInformation pointCode */
        pointCode?: (string|null);
    }

    /** Represents a GetParamsPointInformation. */
    class GetParamsPointInformation implements IGetParamsPointInformation {

        /**
         * Constructs a new GetParamsPointInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetParamsPointInformation);

        /** GetParamsPointInformation pointCode. */
        public pointCode: string;

        /**
         * Creates a new GetParamsPointInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetParamsPointInformation instance
         */
        public static create(properties?: logistics.IGetParamsPointInformation): logistics.GetParamsPointInformation;

        /**
         * Encodes the specified GetParamsPointInformation message. Does not implicitly {@link logistics.GetParamsPointInformation.verify|verify} messages.
         * @param message GetParamsPointInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetParamsPointInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetParamsPointInformation message, length delimited. Does not implicitly {@link logistics.GetParamsPointInformation.verify|verify} messages.
         * @param message GetParamsPointInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetParamsPointInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetParamsPointInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetParamsPointInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetParamsPointInformation;

        /**
         * Decodes a GetParamsPointInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetParamsPointInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetParamsPointInformation;

        /**
         * Verifies a GetParamsPointInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetParamsPointInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetParamsPointInformation
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetParamsPointInformation;

        /**
         * Creates a plain object from a GetParamsPointInformation message. Also converts values to other types if specified.
         * @param message GetParamsPointInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetParamsPointInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetParamsPointInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetResponsePointInformation. */
    interface IGetResponsePointInformation {

        /** GetResponsePointInformation workSchedule */
        workSchedule?: (string|null);

        /** GetResponsePointInformation address */
        address?: (string|null);

        /** GetResponsePointInformation metro */
        metro?: (string|null);
    }

    /** Represents a GetResponsePointInformation. */
    class GetResponsePointInformation implements IGetResponsePointInformation {

        /**
         * Constructs a new GetResponsePointInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetResponsePointInformation);

        /** GetResponsePointInformation workSchedule. */
        public workSchedule: string;

        /** GetResponsePointInformation address. */
        public address: string;

        /** GetResponsePointInformation metro. */
        public metro: string;

        /**
         * Creates a new GetResponsePointInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetResponsePointInformation instance
         */
        public static create(properties?: logistics.IGetResponsePointInformation): logistics.GetResponsePointInformation;

        /**
         * Encodes the specified GetResponsePointInformation message. Does not implicitly {@link logistics.GetResponsePointInformation.verify|verify} messages.
         * @param message GetResponsePointInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetResponsePointInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetResponsePointInformation message, length delimited. Does not implicitly {@link logistics.GetResponsePointInformation.verify|verify} messages.
         * @param message GetResponsePointInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetResponsePointInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetResponsePointInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetResponsePointInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetResponsePointInformation;

        /**
         * Decodes a GetResponsePointInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetResponsePointInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetResponsePointInformation;

        /**
         * Verifies a GetResponsePointInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetResponsePointInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetResponsePointInformation
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetResponsePointInformation;

        /**
         * Creates a plain object from a GetResponsePointInformation message. Also converts values to other types if specified.
         * @param message GetResponsePointInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetResponsePointInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetResponsePointInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetParamsOrderStatus. */
    interface IGetParamsOrderStatus {

        /** GetParamsOrderStatus orderId */
        orderId?: (string|null);
    }

    /** Represents a GetParamsOrderStatus. */
    class GetParamsOrderStatus implements IGetParamsOrderStatus {

        /**
         * Constructs a new GetParamsOrderStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetParamsOrderStatus);

        /** GetParamsOrderStatus orderId. */
        public orderId: string;

        /**
         * Creates a new GetParamsOrderStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetParamsOrderStatus instance
         */
        public static create(properties?: logistics.IGetParamsOrderStatus): logistics.GetParamsOrderStatus;

        /**
         * Encodes the specified GetParamsOrderStatus message. Does not implicitly {@link logistics.GetParamsOrderStatus.verify|verify} messages.
         * @param message GetParamsOrderStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetParamsOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetParamsOrderStatus message, length delimited. Does not implicitly {@link logistics.GetParamsOrderStatus.verify|verify} messages.
         * @param message GetParamsOrderStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetParamsOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetParamsOrderStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetParamsOrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetParamsOrderStatus;

        /**
         * Decodes a GetParamsOrderStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetParamsOrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetParamsOrderStatus;

        /**
         * Verifies a GetParamsOrderStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetParamsOrderStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetParamsOrderStatus
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetParamsOrderStatus;

        /**
         * Creates a plain object from a GetParamsOrderStatus message. Also converts values to other types if specified.
         * @param message GetParamsOrderStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetParamsOrderStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetParamsOrderStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetResponseOrderStatus. */
    interface IGetResponseOrderStatus {

        /** GetResponseOrderStatus statuses */
        statuses?: (logistics.Istatus[]|null);
    }

    /** Represents a GetResponseOrderStatus. */
    class GetResponseOrderStatus implements IGetResponseOrderStatus {

        /**
         * Constructs a new GetResponseOrderStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.IGetResponseOrderStatus);

        /** GetResponseOrderStatus statuses. */
        public statuses: logistics.Istatus[];

        /**
         * Creates a new GetResponseOrderStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetResponseOrderStatus instance
         */
        public static create(properties?: logistics.IGetResponseOrderStatus): logistics.GetResponseOrderStatus;

        /**
         * Encodes the specified GetResponseOrderStatus message. Does not implicitly {@link logistics.GetResponseOrderStatus.verify|verify} messages.
         * @param message GetResponseOrderStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.IGetResponseOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetResponseOrderStatus message, length delimited. Does not implicitly {@link logistics.GetResponseOrderStatus.verify|verify} messages.
         * @param message GetResponseOrderStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.IGetResponseOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetResponseOrderStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetResponseOrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.GetResponseOrderStatus;

        /**
         * Decodes a GetResponseOrderStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetResponseOrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.GetResponseOrderStatus;

        /**
         * Verifies a GetResponseOrderStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetResponseOrderStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetResponseOrderStatus
         */
        public static fromObject(object: { [k: string]: any }): logistics.GetResponseOrderStatus;

        /**
         * Creates a plain object from a GetResponseOrderStatus message. Also converts values to other types if specified.
         * @param message GetResponseOrderStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.GetResponseOrderStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetResponseOrderStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a status. */
    interface Istatus {

        /** status date */
        date?: (string|null);

        /** status name */
        name?: (string|null);

        /** status comment */
        comment?: (string|null);
    }

    /** Represents a status. */
    class status implements Istatus {

        /**
         * Constructs a new status.
         * @param [properties] Properties to set
         */
        constructor(properties?: logistics.Istatus);

        /** status date. */
        public date: string;

        /** status name. */
        public name: string;

        /** status comment. */
        public comment: string;

        /**
         * Creates a new status instance using the specified properties.
         * @param [properties] Properties to set
         * @returns status instance
         */
        public static create(properties?: logistics.Istatus): logistics.status;

        /**
         * Encodes the specified status message. Does not implicitly {@link logistics.status.verify|verify} messages.
         * @param message status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: logistics.Istatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified status message, length delimited. Does not implicitly {@link logistics.status.verify|verify} messages.
         * @param message status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: logistics.Istatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a status message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): logistics.status;

        /**
         * Decodes a status message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): logistics.status;

        /**
         * Verifies a status message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a status message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns status
         */
        public static fromObject(object: { [k: string]: any }): logistics.status;

        /**
         * Creates a plain object from a status message. Also converts values to other types if specified.
         * @param message status
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: logistics.status, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this status to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace meta. */
export namespace meta {

    /** Represents a Mobile */
    class Mobile extends $protobuf.rpc.Service {

        /**
         * Constructs a new Mobile service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Mobile service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Mobile;

        /**
         * Calls Contacts.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseMobileAPIContacts
         */
        public contacts(request: google.protobuf.IEmpty, callback: meta.Mobile.ContactsCallback): void;

        /**
         * Calls Contacts.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public contacts(request: google.protobuf.IEmpty): Promise<meta.ResponseMobileAPIContacts>;

        /**
         * Calls About.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseMobileApiAbout
         */
        public about(request: google.protobuf.IEmpty, callback: meta.Mobile.AboutCallback): void;

        /**
         * Calls About.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public about(request: google.protobuf.IEmpty): Promise<meta.ResponseMobileApiAbout>;

        /**
         * Calls Faq.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseFaq
         */
        public faq(request: google.protobuf.IEmpty, callback: meta.Mobile.FaqCallback): void;

        /**
         * Calls Faq.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public faq(request: google.protobuf.IEmpty): Promise<meta.ResponseFaq>;
    }

    namespace Mobile {

        /**
         * Callback as used by {@link meta.Mobile#contacts}.
         * @param error Error, if any
         * @param [response] ResponseMobileAPIContacts
         */
        type ContactsCallback = (error: (Error|null), response?: meta.ResponseMobileAPIContacts) => void;

        /**
         * Callback as used by {@link meta.Mobile#about}.
         * @param error Error, if any
         * @param [response] ResponseMobileApiAbout
         */
        type AboutCallback = (error: (Error|null), response?: meta.ResponseMobileApiAbout) => void;

        /**
         * Callback as used by {@link meta.Mobile#faq}.
         * @param error Error, if any
         * @param [response] ResponseFaq
         */
        type FaqCallback = (error: (Error|null), response?: meta.ResponseFaq) => void;
    }

    /** Represents a Stores */
    class Stores extends $protobuf.rpc.Service {

        /**
         * Constructs a new Stores service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Stores service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Stores;

        /**
         * Calls All.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseAllOfflineStoresInfo
         */
        public all(request: google.protobuf.IEmpty, callback: meta.Stores.AllCallback): void;

        /**
         * Calls All.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public all(request: google.protobuf.IEmpty): Promise<meta.ResponseAllOfflineStoresInfo>;

        /**
         * Calls ByID.
         * @param request paramsOfflineStoreInfoByID message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseOfflineStoreInfoByID
         */
        public byID(request: meta.IparamsOfflineStoreInfoByID, callback: meta.Stores.ByIDCallback): void;

        /**
         * Calls ByID.
         * @param request paramsOfflineStoreInfoByID message or plain object
         * @returns Promise
         */
        public byID(request: meta.IparamsOfflineStoreInfoByID): Promise<meta.ResponseOfflineStoreInfoByID>;

        /**
         * Calls Cities.
         * @param request paramsStoresCities message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseStoresCities
         */
        public cities(request: meta.IparamsStoresCities, callback: meta.Stores.CitiesCallback): void;

        /**
         * Calls Cities.
         * @param request paramsStoresCities message or plain object
         * @returns Promise
         */
        public cities(request: meta.IparamsStoresCities): Promise<meta.ResponseStoresCities>;

        /**
         * Calls ByCity.
         * @param request paramsStoresByCity message or plain object
         * @param callback Node-style callback called with the error, if any, and responseStoresByCity
         */
        public byCity(request: meta.IparamsStoresByCity, callback: meta.Stores.ByCityCallback): void;

        /**
         * Calls ByCity.
         * @param request paramsStoresByCity message or plain object
         * @returns Promise
         */
        public byCity(request: meta.IparamsStoresByCity): Promise<meta.responseStoresByCity>;
    }

    namespace Stores {

        /**
         * Callback as used by {@link meta.Stores#all}.
         * @param error Error, if any
         * @param [response] ResponseAllOfflineStoresInfo
         */
        type AllCallback = (error: (Error|null), response?: meta.ResponseAllOfflineStoresInfo) => void;

        /**
         * Callback as used by {@link meta.Stores#byID}.
         * @param error Error, if any
         * @param [response] ResponseOfflineStoreInfoByID
         */
        type ByIDCallback = (error: (Error|null), response?: meta.ResponseOfflineStoreInfoByID) => void;

        /**
         * Callback as used by {@link meta.Stores#cities}.
         * @param error Error, if any
         * @param [response] ResponseStoresCities
         */
        type CitiesCallback = (error: (Error|null), response?: meta.ResponseStoresCities) => void;

        /**
         * Callback as used by {@link meta.Stores#byCity}.
         * @param error Error, if any
         * @param [response] responseStoresByCity
         */
        type ByCityCallback = (error: (Error|null), response?: meta.responseStoresByCity) => void;
    }

    /** Properties of a ResponseAllOfflineStoresInfo. */
    interface IResponseAllOfflineStoresInfo {

        /** ResponseAllOfflineStoresInfo stores */
        stores?: (meta.IOfflineStore[]|null);
    }

    /** Represents a ResponseAllOfflineStoresInfo. */
    class ResponseAllOfflineStoresInfo implements IResponseAllOfflineStoresInfo {

        /**
         * Constructs a new ResponseAllOfflineStoresInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IResponseAllOfflineStoresInfo);

        /** ResponseAllOfflineStoresInfo stores. */
        public stores: meta.IOfflineStore[];

        /**
         * Creates a new ResponseAllOfflineStoresInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseAllOfflineStoresInfo instance
         */
        public static create(properties?: meta.IResponseAllOfflineStoresInfo): meta.ResponseAllOfflineStoresInfo;

        /**
         * Encodes the specified ResponseAllOfflineStoresInfo message. Does not implicitly {@link meta.ResponseAllOfflineStoresInfo.verify|verify} messages.
         * @param message ResponseAllOfflineStoresInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IResponseAllOfflineStoresInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseAllOfflineStoresInfo message, length delimited. Does not implicitly {@link meta.ResponseAllOfflineStoresInfo.verify|verify} messages.
         * @param message ResponseAllOfflineStoresInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IResponseAllOfflineStoresInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseAllOfflineStoresInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseAllOfflineStoresInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.ResponseAllOfflineStoresInfo;

        /**
         * Decodes a ResponseAllOfflineStoresInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseAllOfflineStoresInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.ResponseAllOfflineStoresInfo;

        /**
         * Verifies a ResponseAllOfflineStoresInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseAllOfflineStoresInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseAllOfflineStoresInfo
         */
        public static fromObject(object: { [k: string]: any }): meta.ResponseAllOfflineStoresInfo;

        /**
         * Creates a plain object from a ResponseAllOfflineStoresInfo message. Also converts values to other types if specified.
         * @param message ResponseAllOfflineStoresInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.ResponseAllOfflineStoresInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseAllOfflineStoresInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OfflineStore. */
    interface IOfflineStore {

        /** OfflineStore storeId */
        storeId?: (number|null);

        /** OfflineStore title */
        title?: (string|null);

        /** OfflineStore address */
        address?: (string|null);

        /** OfflineStore phone */
        phone?: (string|null);

        /** OfflineStore geo */
        geo?: (string|null);

        /** OfflineStore city */
        city?: (string|null);

        /** OfflineStore country */
        country?: (string|null);

        /** OfflineStore active */
        active?: (boolean|null);

        /** OfflineStore pictureUrl */
        pictureUrl?: (string|null);

        /** OfflineStore schedule */
        schedule?: (string|null);

        /** OfflineStore cityId */
        cityId?: (number|null);
    }

    /** Represents an OfflineStore. */
    class OfflineStore implements IOfflineStore {

        /**
         * Constructs a new OfflineStore.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IOfflineStore);

        /** OfflineStore storeId. */
        public storeId: number;

        /** OfflineStore title. */
        public title: string;

        /** OfflineStore address. */
        public address: string;

        /** OfflineStore phone. */
        public phone: string;

        /** OfflineStore geo. */
        public geo: string;

        /** OfflineStore city. */
        public city: string;

        /** OfflineStore country. */
        public country: string;

        /** OfflineStore active. */
        public active: boolean;

        /** OfflineStore pictureUrl. */
        public pictureUrl: string;

        /** OfflineStore schedule. */
        public schedule: string;

        /** OfflineStore cityId. */
        public cityId: number;

        /**
         * Creates a new OfflineStore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OfflineStore instance
         */
        public static create(properties?: meta.IOfflineStore): meta.OfflineStore;

        /**
         * Encodes the specified OfflineStore message. Does not implicitly {@link meta.OfflineStore.verify|verify} messages.
         * @param message OfflineStore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IOfflineStore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OfflineStore message, length delimited. Does not implicitly {@link meta.OfflineStore.verify|verify} messages.
         * @param message OfflineStore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IOfflineStore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OfflineStore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OfflineStore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.OfflineStore;

        /**
         * Decodes an OfflineStore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OfflineStore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.OfflineStore;

        /**
         * Verifies an OfflineStore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OfflineStore message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OfflineStore
         */
        public static fromObject(object: { [k: string]: any }): meta.OfflineStore;

        /**
         * Creates a plain object from an OfflineStore message. Also converts values to other types if specified.
         * @param message OfflineStore
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.OfflineStore, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OfflineStore to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a paramsOfflineStoreInfoByID. */
    interface IparamsOfflineStoreInfoByID {

        /** paramsOfflineStoreInfoByID storeId */
        storeId?: (number|null);
    }

    /** Represents a paramsOfflineStoreInfoByID. */
    class paramsOfflineStoreInfoByID implements IparamsOfflineStoreInfoByID {

        /**
         * Constructs a new paramsOfflineStoreInfoByID.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IparamsOfflineStoreInfoByID);

        /** paramsOfflineStoreInfoByID storeId. */
        public storeId: number;

        /**
         * Creates a new paramsOfflineStoreInfoByID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns paramsOfflineStoreInfoByID instance
         */
        public static create(properties?: meta.IparamsOfflineStoreInfoByID): meta.paramsOfflineStoreInfoByID;

        /**
         * Encodes the specified paramsOfflineStoreInfoByID message. Does not implicitly {@link meta.paramsOfflineStoreInfoByID.verify|verify} messages.
         * @param message paramsOfflineStoreInfoByID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IparamsOfflineStoreInfoByID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified paramsOfflineStoreInfoByID message, length delimited. Does not implicitly {@link meta.paramsOfflineStoreInfoByID.verify|verify} messages.
         * @param message paramsOfflineStoreInfoByID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IparamsOfflineStoreInfoByID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a paramsOfflineStoreInfoByID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns paramsOfflineStoreInfoByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.paramsOfflineStoreInfoByID;

        /**
         * Decodes a paramsOfflineStoreInfoByID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns paramsOfflineStoreInfoByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.paramsOfflineStoreInfoByID;

        /**
         * Verifies a paramsOfflineStoreInfoByID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a paramsOfflineStoreInfoByID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns paramsOfflineStoreInfoByID
         */
        public static fromObject(object: { [k: string]: any }): meta.paramsOfflineStoreInfoByID;

        /**
         * Creates a plain object from a paramsOfflineStoreInfoByID message. Also converts values to other types if specified.
         * @param message paramsOfflineStoreInfoByID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.paramsOfflineStoreInfoByID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this paramsOfflineStoreInfoByID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseOfflineStoreInfoByID. */
    interface IResponseOfflineStoreInfoByID {

        /** ResponseOfflineStoreInfoByID store */
        store?: (meta.IOfflineStore|null);
    }

    /** Represents a ResponseOfflineStoreInfoByID. */
    class ResponseOfflineStoreInfoByID implements IResponseOfflineStoreInfoByID {

        /**
         * Constructs a new ResponseOfflineStoreInfoByID.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IResponseOfflineStoreInfoByID);

        /** ResponseOfflineStoreInfoByID store. */
        public store?: (meta.IOfflineStore|null);

        /**
         * Creates a new ResponseOfflineStoreInfoByID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseOfflineStoreInfoByID instance
         */
        public static create(properties?: meta.IResponseOfflineStoreInfoByID): meta.ResponseOfflineStoreInfoByID;

        /**
         * Encodes the specified ResponseOfflineStoreInfoByID message. Does not implicitly {@link meta.ResponseOfflineStoreInfoByID.verify|verify} messages.
         * @param message ResponseOfflineStoreInfoByID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IResponseOfflineStoreInfoByID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseOfflineStoreInfoByID message, length delimited. Does not implicitly {@link meta.ResponseOfflineStoreInfoByID.verify|verify} messages.
         * @param message ResponseOfflineStoreInfoByID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IResponseOfflineStoreInfoByID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseOfflineStoreInfoByID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseOfflineStoreInfoByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.ResponseOfflineStoreInfoByID;

        /**
         * Decodes a ResponseOfflineStoreInfoByID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseOfflineStoreInfoByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.ResponseOfflineStoreInfoByID;

        /**
         * Verifies a ResponseOfflineStoreInfoByID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseOfflineStoreInfoByID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseOfflineStoreInfoByID
         */
        public static fromObject(object: { [k: string]: any }): meta.ResponseOfflineStoreInfoByID;

        /**
         * Creates a plain object from a ResponseOfflineStoreInfoByID message. Also converts values to other types if specified.
         * @param message ResponseOfflineStoreInfoByID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.ResponseOfflineStoreInfoByID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseOfflineStoreInfoByID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseMobileAPIContacts. */
    interface IResponseMobileAPIContacts {

        /** ResponseMobileAPIContacts contacts */
        contacts?: (meta.IContact[]|null);
    }

    /** Represents a ResponseMobileAPIContacts. */
    class ResponseMobileAPIContacts implements IResponseMobileAPIContacts {

        /**
         * Constructs a new ResponseMobileAPIContacts.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IResponseMobileAPIContacts);

        /** ResponseMobileAPIContacts contacts. */
        public contacts: meta.IContact[];

        /**
         * Creates a new ResponseMobileAPIContacts instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseMobileAPIContacts instance
         */
        public static create(properties?: meta.IResponseMobileAPIContacts): meta.ResponseMobileAPIContacts;

        /**
         * Encodes the specified ResponseMobileAPIContacts message. Does not implicitly {@link meta.ResponseMobileAPIContacts.verify|verify} messages.
         * @param message ResponseMobileAPIContacts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IResponseMobileAPIContacts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseMobileAPIContacts message, length delimited. Does not implicitly {@link meta.ResponseMobileAPIContacts.verify|verify} messages.
         * @param message ResponseMobileAPIContacts message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IResponseMobileAPIContacts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseMobileAPIContacts message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseMobileAPIContacts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.ResponseMobileAPIContacts;

        /**
         * Decodes a ResponseMobileAPIContacts message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseMobileAPIContacts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.ResponseMobileAPIContacts;

        /**
         * Verifies a ResponseMobileAPIContacts message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseMobileAPIContacts message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseMobileAPIContacts
         */
        public static fromObject(object: { [k: string]: any }): meta.ResponseMobileAPIContacts;

        /**
         * Creates a plain object from a ResponseMobileAPIContacts message. Also converts values to other types if specified.
         * @param message ResponseMobileAPIContacts
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.ResponseMobileAPIContacts, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseMobileAPIContacts to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Contact. */
    interface IContact {

        /** Contact title */
        title?: (string|null);

        /** Contact subtitle */
        subtitle?: (string|null);

        /** Contact text */
        text?: (string|null);
    }

    /** Represents a Contact. */
    class Contact implements IContact {

        /**
         * Constructs a new Contact.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IContact);

        /** Contact title. */
        public title: string;

        /** Contact subtitle. */
        public subtitle: string;

        /** Contact text. */
        public text: string;

        /**
         * Creates a new Contact instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Contact instance
         */
        public static create(properties?: meta.IContact): meta.Contact;

        /**
         * Encodes the specified Contact message. Does not implicitly {@link meta.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link meta.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.Contact;

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.Contact;

        /**
         * Verifies a Contact message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Contact
         */
        public static fromObject(object: { [k: string]: any }): meta.Contact;

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @param message Contact
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Contact to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseMobileApiAbout. */
    interface IResponseMobileApiAbout {

        /** ResponseMobileApiAbout about */
        about?: (string|null);

        /** ResponseMobileApiAbout mission */
        mission?: (string|null);

        /** ResponseMobileApiAbout blocks */
        blocks?: (meta.IBlock[]|null);

        /** ResponseMobileApiAbout imageUrl */
        imageUrl?: (string|null);
    }

    /** Represents a ResponseMobileApiAbout. */
    class ResponseMobileApiAbout implements IResponseMobileApiAbout {

        /**
         * Constructs a new ResponseMobileApiAbout.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IResponseMobileApiAbout);

        /** ResponseMobileApiAbout about. */
        public about: string;

        /** ResponseMobileApiAbout mission. */
        public mission: string;

        /** ResponseMobileApiAbout blocks. */
        public blocks: meta.IBlock[];

        /** ResponseMobileApiAbout imageUrl. */
        public imageUrl: string;

        /**
         * Creates a new ResponseMobileApiAbout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseMobileApiAbout instance
         */
        public static create(properties?: meta.IResponseMobileApiAbout): meta.ResponseMobileApiAbout;

        /**
         * Encodes the specified ResponseMobileApiAbout message. Does not implicitly {@link meta.ResponseMobileApiAbout.verify|verify} messages.
         * @param message ResponseMobileApiAbout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IResponseMobileApiAbout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseMobileApiAbout message, length delimited. Does not implicitly {@link meta.ResponseMobileApiAbout.verify|verify} messages.
         * @param message ResponseMobileApiAbout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IResponseMobileApiAbout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseMobileApiAbout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseMobileApiAbout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.ResponseMobileApiAbout;

        /**
         * Decodes a ResponseMobileApiAbout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseMobileApiAbout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.ResponseMobileApiAbout;

        /**
         * Verifies a ResponseMobileApiAbout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseMobileApiAbout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseMobileApiAbout
         */
        public static fromObject(object: { [k: string]: any }): meta.ResponseMobileApiAbout;

        /**
         * Creates a plain object from a ResponseMobileApiAbout message. Also converts values to other types if specified.
         * @param message ResponseMobileApiAbout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.ResponseMobileApiAbout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseMobileApiAbout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Block. */
    interface IBlock {

        /** Block title */
        title?: (string|null);

        /** Block value */
        value?: (string|null);
    }

    /** Represents a Block. */
    class Block implements IBlock {

        /**
         * Constructs a new Block.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IBlock);

        /** Block title. */
        public title: string;

        /** Block value. */
        public value: string;

        /**
         * Creates a new Block instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Block instance
         */
        public static create(properties?: meta.IBlock): meta.Block;

        /**
         * Encodes the specified Block message. Does not implicitly {@link meta.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link meta.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.Block;

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.Block;

        /**
         * Verifies a Block message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Block
         */
        public static fromObject(object: { [k: string]: any }): meta.Block;

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @param message Block
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Block to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseFaq. */
    interface IResponseFaq {

        /** ResponseFaq result */
        result?: (meta.IBlockFaq[]|null);
    }

    /** Represents a ResponseFaq. */
    class ResponseFaq implements IResponseFaq {

        /**
         * Constructs a new ResponseFaq.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IResponseFaq);

        /** ResponseFaq result. */
        public result: meta.IBlockFaq[];

        /**
         * Creates a new ResponseFaq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseFaq instance
         */
        public static create(properties?: meta.IResponseFaq): meta.ResponseFaq;

        /**
         * Encodes the specified ResponseFaq message. Does not implicitly {@link meta.ResponseFaq.verify|verify} messages.
         * @param message ResponseFaq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IResponseFaq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseFaq message, length delimited. Does not implicitly {@link meta.ResponseFaq.verify|verify} messages.
         * @param message ResponseFaq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IResponseFaq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseFaq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.ResponseFaq;

        /**
         * Decodes a ResponseFaq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.ResponseFaq;

        /**
         * Verifies a ResponseFaq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseFaq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseFaq
         */
        public static fromObject(object: { [k: string]: any }): meta.ResponseFaq;

        /**
         * Creates a plain object from a ResponseFaq message. Also converts values to other types if specified.
         * @param message ResponseFaq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.ResponseFaq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseFaq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockFaq. */
    interface IBlockFaq {

        /** BlockFaq title */
        title?: (string|null);

        /** BlockFaq context */
        context?: (meta.ITextFaq[]|null);
    }

    /** Represents a BlockFaq. */
    class BlockFaq implements IBlockFaq {

        /**
         * Constructs a new BlockFaq.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IBlockFaq);

        /** BlockFaq title. */
        public title: string;

        /** BlockFaq context. */
        public context: meta.ITextFaq[];

        /**
         * Creates a new BlockFaq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockFaq instance
         */
        public static create(properties?: meta.IBlockFaq): meta.BlockFaq;

        /**
         * Encodes the specified BlockFaq message. Does not implicitly {@link meta.BlockFaq.verify|verify} messages.
         * @param message BlockFaq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IBlockFaq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockFaq message, length delimited. Does not implicitly {@link meta.BlockFaq.verify|verify} messages.
         * @param message BlockFaq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IBlockFaq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockFaq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.BlockFaq;

        /**
         * Decodes a BlockFaq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.BlockFaq;

        /**
         * Verifies a BlockFaq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockFaq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockFaq
         */
        public static fromObject(object: { [k: string]: any }): meta.BlockFaq;

        /**
         * Creates a plain object from a BlockFaq message. Also converts values to other types if specified.
         * @param message BlockFaq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.BlockFaq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockFaq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TextFaq. */
    interface ITextFaq {

        /** TextFaq title */
        title?: (string|null);

        /** TextFaq answer */
        answer?: (string|null);
    }

    /** Represents a TextFaq. */
    class TextFaq implements ITextFaq {

        /**
         * Constructs a new TextFaq.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.ITextFaq);

        /** TextFaq title. */
        public title: string;

        /** TextFaq answer. */
        public answer: string;

        /**
         * Creates a new TextFaq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TextFaq instance
         */
        public static create(properties?: meta.ITextFaq): meta.TextFaq;

        /**
         * Encodes the specified TextFaq message. Does not implicitly {@link meta.TextFaq.verify|verify} messages.
         * @param message TextFaq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.ITextFaq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TextFaq message, length delimited. Does not implicitly {@link meta.TextFaq.verify|verify} messages.
         * @param message TextFaq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.ITextFaq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TextFaq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TextFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.TextFaq;

        /**
         * Decodes a TextFaq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TextFaq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.TextFaq;

        /**
         * Verifies a TextFaq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TextFaq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TextFaq
         */
        public static fromObject(object: { [k: string]: any }): meta.TextFaq;

        /**
         * Creates a plain object from a TextFaq message. Also converts values to other types if specified.
         * @param message TextFaq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.TextFaq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TextFaq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a paramsStoresCities. */
    interface IparamsStoresCities {

        /** paramsStoresCities offset */
        offset?: (number|null);

        /** paramsStoresCities limit */
        limit?: (number|null);
    }

    /** Represents a paramsStoresCities. */
    class paramsStoresCities implements IparamsStoresCities {

        /**
         * Constructs a new paramsStoresCities.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IparamsStoresCities);

        /** paramsStoresCities offset. */
        public offset: number;

        /** paramsStoresCities limit. */
        public limit: number;

        /**
         * Creates a new paramsStoresCities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns paramsStoresCities instance
         */
        public static create(properties?: meta.IparamsStoresCities): meta.paramsStoresCities;

        /**
         * Encodes the specified paramsStoresCities message. Does not implicitly {@link meta.paramsStoresCities.verify|verify} messages.
         * @param message paramsStoresCities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IparamsStoresCities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified paramsStoresCities message, length delimited. Does not implicitly {@link meta.paramsStoresCities.verify|verify} messages.
         * @param message paramsStoresCities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IparamsStoresCities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a paramsStoresCities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns paramsStoresCities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.paramsStoresCities;

        /**
         * Decodes a paramsStoresCities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns paramsStoresCities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.paramsStoresCities;

        /**
         * Verifies a paramsStoresCities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a paramsStoresCities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns paramsStoresCities
         */
        public static fromObject(object: { [k: string]: any }): meta.paramsStoresCities;

        /**
         * Creates a plain object from a paramsStoresCities message. Also converts values to other types if specified.
         * @param message paramsStoresCities
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.paramsStoresCities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this paramsStoresCities to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a City. */
    interface ICity {

        /** City cityId */
        cityId?: (number|null);

        /** City title */
        title?: (string|null);
    }

    /** Represents a City. */
    class City implements ICity {

        /**
         * Constructs a new City.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.ICity);

        /** City cityId. */
        public cityId: number;

        /** City title. */
        public title: string;

        /**
         * Creates a new City instance using the specified properties.
         * @param [properties] Properties to set
         * @returns City instance
         */
        public static create(properties?: meta.ICity): meta.City;

        /**
         * Encodes the specified City message. Does not implicitly {@link meta.City.verify|verify} messages.
         * @param message City message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.ICity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified City message, length delimited. Does not implicitly {@link meta.City.verify|verify} messages.
         * @param message City message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.ICity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a City message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns City
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.City;

        /**
         * Decodes a City message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns City
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.City;

        /**
         * Verifies a City message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a City message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns City
         */
        public static fromObject(object: { [k: string]: any }): meta.City;

        /**
         * Creates a plain object from a City message. Also converts values to other types if specified.
         * @param message City
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.City, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this City to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseStoresCities. */
    interface IResponseStoresCities {

        /** ResponseStoresCities cities */
        cities?: (meta.ICity[]|null);
    }

    /** Represents a ResponseStoresCities. */
    class ResponseStoresCities implements IResponseStoresCities {

        /**
         * Constructs a new ResponseStoresCities.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IResponseStoresCities);

        /** ResponseStoresCities cities. */
        public cities: meta.ICity[];

        /**
         * Creates a new ResponseStoresCities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseStoresCities instance
         */
        public static create(properties?: meta.IResponseStoresCities): meta.ResponseStoresCities;

        /**
         * Encodes the specified ResponseStoresCities message. Does not implicitly {@link meta.ResponseStoresCities.verify|verify} messages.
         * @param message ResponseStoresCities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IResponseStoresCities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseStoresCities message, length delimited. Does not implicitly {@link meta.ResponseStoresCities.verify|verify} messages.
         * @param message ResponseStoresCities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IResponseStoresCities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseStoresCities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseStoresCities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.ResponseStoresCities;

        /**
         * Decodes a ResponseStoresCities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseStoresCities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.ResponseStoresCities;

        /**
         * Verifies a ResponseStoresCities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseStoresCities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseStoresCities
         */
        public static fromObject(object: { [k: string]: any }): meta.ResponseStoresCities;

        /**
         * Creates a plain object from a ResponseStoresCities message. Also converts values to other types if specified.
         * @param message ResponseStoresCities
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.ResponseStoresCities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseStoresCities to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a paramsStoresByCity. */
    interface IparamsStoresByCity {

        /** paramsStoresByCity cityId */
        cityId?: (number|null);

        /** paramsStoresByCity offset */
        offset?: (number|null);

        /** paramsStoresByCity limit */
        limit?: (number|null);
    }

    /** Represents a paramsStoresByCity. */
    class paramsStoresByCity implements IparamsStoresByCity {

        /**
         * Constructs a new paramsStoresByCity.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IparamsStoresByCity);

        /** paramsStoresByCity cityId. */
        public cityId: number;

        /** paramsStoresByCity offset. */
        public offset: number;

        /** paramsStoresByCity limit. */
        public limit: number;

        /**
         * Creates a new paramsStoresByCity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns paramsStoresByCity instance
         */
        public static create(properties?: meta.IparamsStoresByCity): meta.paramsStoresByCity;

        /**
         * Encodes the specified paramsStoresByCity message. Does not implicitly {@link meta.paramsStoresByCity.verify|verify} messages.
         * @param message paramsStoresByCity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IparamsStoresByCity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified paramsStoresByCity message, length delimited. Does not implicitly {@link meta.paramsStoresByCity.verify|verify} messages.
         * @param message paramsStoresByCity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IparamsStoresByCity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a paramsStoresByCity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns paramsStoresByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.paramsStoresByCity;

        /**
         * Decodes a paramsStoresByCity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns paramsStoresByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.paramsStoresByCity;

        /**
         * Verifies a paramsStoresByCity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a paramsStoresByCity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns paramsStoresByCity
         */
        public static fromObject(object: { [k: string]: any }): meta.paramsStoresByCity;

        /**
         * Creates a plain object from a paramsStoresByCity message. Also converts values to other types if specified.
         * @param message paramsStoresByCity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.paramsStoresByCity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this paramsStoresByCity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a responseStoresByCity. */
    interface IresponseStoresByCity {

        /** responseStoresByCity cityId */
        cityId?: (number|null);

        /** responseStoresByCity title */
        title?: (string|null);

        /** responseStoresByCity total */
        total?: (number|null);

        /** responseStoresByCity stores */
        stores?: (meta.IOfflineStore[]|null);
    }

    /** Represents a responseStoresByCity. */
    class responseStoresByCity implements IresponseStoresByCity {

        /**
         * Constructs a new responseStoresByCity.
         * @param [properties] Properties to set
         */
        constructor(properties?: meta.IresponseStoresByCity);

        /** responseStoresByCity cityId. */
        public cityId: number;

        /** responseStoresByCity title. */
        public title: string;

        /** responseStoresByCity total. */
        public total: number;

        /** responseStoresByCity stores. */
        public stores: meta.IOfflineStore[];

        /**
         * Creates a new responseStoresByCity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns responseStoresByCity instance
         */
        public static create(properties?: meta.IresponseStoresByCity): meta.responseStoresByCity;

        /**
         * Encodes the specified responseStoresByCity message. Does not implicitly {@link meta.responseStoresByCity.verify|verify} messages.
         * @param message responseStoresByCity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meta.IresponseStoresByCity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified responseStoresByCity message, length delimited. Does not implicitly {@link meta.responseStoresByCity.verify|verify} messages.
         * @param message responseStoresByCity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: meta.IresponseStoresByCity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a responseStoresByCity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns responseStoresByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meta.responseStoresByCity;

        /**
         * Decodes a responseStoresByCity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns responseStoresByCity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): meta.responseStoresByCity;

        /**
         * Verifies a responseStoresByCity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a responseStoresByCity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns responseStoresByCity
         */
        public static fromObject(object: { [k: string]: any }): meta.responseStoresByCity;

        /**
         * Creates a plain object from a responseStoresByCity message. Also converts values to other types if specified.
         * @param message responseStoresByCity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meta.responseStoresByCity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this responseStoresByCity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace mindbox. */
export namespace mindbox {

    /** Represents a Mindbox */
    class Mindbox extends $protobuf.rpc.Service {

        /**
         * Constructs a new Mindbox service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Mindbox service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Mindbox;

        /**
         * Calls Ping.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and PingResponse
         */
        public ping(request: google.protobuf.IEmpty, callback: mindbox.Mindbox.PingCallback): void;

        /**
         * Calls Ping.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public ping(request: google.protobuf.IEmpty): Promise<mindbox.PingResponse>;

        /**
         * Calls UserInformation.
         * @param request ParamsUserInformation message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseUserInformation
         */
        public userInformation(request: mindbox.IParamsUserInformation, callback: mindbox.Mindbox.UserInformationCallback): void;

        /**
         * Calls UserInformation.
         * @param request ParamsUserInformation message or plain object
         * @returns Promise
         */
        public userInformation(request: mindbox.IParamsUserInformation): Promise<mindbox.ResponseUserInformation>;

        /**
         * Calls OrdersHistory.
         * @param request ParamsOrdersHistory message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseOrdersHistory
         */
        public ordersHistory(request: mindbox.IParamsOrdersHistory, callback: mindbox.Mindbox.OrdersHistoryCallback): void;

        /**
         * Calls OrdersHistory.
         * @param request ParamsOrdersHistory message or plain object
         * @returns Promise
         */
        public ordersHistory(request: mindbox.IParamsOrdersHistory): Promise<mindbox.ResponseOrdersHistory>;
    }

    namespace Mindbox {

        /**
         * Callback as used by {@link mindbox.Mindbox#ping}.
         * @param error Error, if any
         * @param [response] PingResponse
         */
        type PingCallback = (error: (Error|null), response?: mindbox.PingResponse) => void;

        /**
         * Callback as used by {@link mindbox.Mindbox#userInformation}.
         * @param error Error, if any
         * @param [response] ResponseUserInformation
         */
        type UserInformationCallback = (error: (Error|null), response?: mindbox.ResponseUserInformation) => void;

        /**
         * Callback as used by {@link mindbox.Mindbox#ordersHistory}.
         * @param error Error, if any
         * @param [response] ResponseOrdersHistory
         */
        type OrdersHistoryCallback = (error: (Error|null), response?: mindbox.ResponseOrdersHistory) => void;
    }

    /** Properties of a PingResponse. */
    interface IPingResponse {

        /** PingResponse response */
        response?: (string|null);
    }

    /** Represents a PingResponse. */
    class PingResponse implements IPingResponse {

        /**
         * Constructs a new PingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: mindbox.IPingResponse);

        /** PingResponse response. */
        public response: string;

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingResponse instance
         */
        public static create(properties?: mindbox.IPingResponse): mindbox.PingResponse;

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link mindbox.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mindbox.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link mindbox.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mindbox.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mindbox.PingResponse;

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mindbox.PingResponse;

        /**
         * Verifies a PingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingResponse
         */
        public static fromObject(object: { [k: string]: any }): mindbox.PingResponse;

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @param message PingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mindbox.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParamsUserInformation. */
    interface IParamsUserInformation {

        /** ParamsUserInformation clientId */
        clientId?: (number|null);
    }

    /** Represents a ParamsUserInformation. */
    class ParamsUserInformation implements IParamsUserInformation {

        /**
         * Constructs a new ParamsUserInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: mindbox.IParamsUserInformation);

        /** ParamsUserInformation clientId. */
        public clientId: number;

        /**
         * Creates a new ParamsUserInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamsUserInformation instance
         */
        public static create(properties?: mindbox.IParamsUserInformation): mindbox.ParamsUserInformation;

        /**
         * Encodes the specified ParamsUserInformation message. Does not implicitly {@link mindbox.ParamsUserInformation.verify|verify} messages.
         * @param message ParamsUserInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mindbox.IParamsUserInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParamsUserInformation message, length delimited. Does not implicitly {@link mindbox.ParamsUserInformation.verify|verify} messages.
         * @param message ParamsUserInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mindbox.IParamsUserInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParamsUserInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamsUserInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mindbox.ParamsUserInformation;

        /**
         * Decodes a ParamsUserInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamsUserInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mindbox.ParamsUserInformation;

        /**
         * Verifies a ParamsUserInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParamsUserInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParamsUserInformation
         */
        public static fromObject(object: { [k: string]: any }): mindbox.ParamsUserInformation;

        /**
         * Creates a plain object from a ParamsUserInformation message. Also converts values to other types if specified.
         * @param message ParamsUserInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mindbox.ParamsUserInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParamsUserInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseUserInformation. */
    interface IResponseUserInformation {

        /** ResponseUserInformation firstName */
        firstName?: (string|null);

        /** ResponseUserInformation lastName */
        lastName?: (string|null);

        /** ResponseUserInformation email */
        email?: (string|null);

        /** ResponseUserInformation phone */
        phone?: (string|null);

        /** ResponseUserInformation bonusTotal */
        bonusTotal?: (number|null);

        /** ResponseUserInformation bonusAvailable */
        bonusAvailable?: (number|null);

        /** ResponseUserInformation bonusBlocked */
        bonusBlocked?: (number|null);

        /** ResponseUserInformation totalPaidAmount */
        totalPaidAmount?: (number|null);
    }

    /** Represents a ResponseUserInformation. */
    class ResponseUserInformation implements IResponseUserInformation {

        /**
         * Constructs a new ResponseUserInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: mindbox.IResponseUserInformation);

        /** ResponseUserInformation firstName. */
        public firstName: string;

        /** ResponseUserInformation lastName. */
        public lastName: string;

        /** ResponseUserInformation email. */
        public email: string;

        /** ResponseUserInformation phone. */
        public phone: string;

        /** ResponseUserInformation bonusTotal. */
        public bonusTotal: number;

        /** ResponseUserInformation bonusAvailable. */
        public bonusAvailable: number;

        /** ResponseUserInformation bonusBlocked. */
        public bonusBlocked: number;

        /** ResponseUserInformation totalPaidAmount. */
        public totalPaidAmount: number;

        /**
         * Creates a new ResponseUserInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseUserInformation instance
         */
        public static create(properties?: mindbox.IResponseUserInformation): mindbox.ResponseUserInformation;

        /**
         * Encodes the specified ResponseUserInformation message. Does not implicitly {@link mindbox.ResponseUserInformation.verify|verify} messages.
         * @param message ResponseUserInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mindbox.IResponseUserInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseUserInformation message, length delimited. Does not implicitly {@link mindbox.ResponseUserInformation.verify|verify} messages.
         * @param message ResponseUserInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mindbox.IResponseUserInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseUserInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseUserInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mindbox.ResponseUserInformation;

        /**
         * Decodes a ResponseUserInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseUserInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mindbox.ResponseUserInformation;

        /**
         * Verifies a ResponseUserInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseUserInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseUserInformation
         */
        public static fromObject(object: { [k: string]: any }): mindbox.ResponseUserInformation;

        /**
         * Creates a plain object from a ResponseUserInformation message. Also converts values to other types if specified.
         * @param message ResponseUserInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mindbox.ResponseUserInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseUserInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParamsOrdersHistory. */
    interface IParamsOrdersHistory {

        /** ParamsOrdersHistory clientId */
        clientId?: (number|null);
    }

    /** Represents a ParamsOrdersHistory. */
    class ParamsOrdersHistory implements IParamsOrdersHistory {

        /**
         * Constructs a new ParamsOrdersHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: mindbox.IParamsOrdersHistory);

        /** ParamsOrdersHistory clientId. */
        public clientId: number;

        /**
         * Creates a new ParamsOrdersHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamsOrdersHistory instance
         */
        public static create(properties?: mindbox.IParamsOrdersHistory): mindbox.ParamsOrdersHistory;

        /**
         * Encodes the specified ParamsOrdersHistory message. Does not implicitly {@link mindbox.ParamsOrdersHistory.verify|verify} messages.
         * @param message ParamsOrdersHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mindbox.IParamsOrdersHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParamsOrdersHistory message, length delimited. Does not implicitly {@link mindbox.ParamsOrdersHistory.verify|verify} messages.
         * @param message ParamsOrdersHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mindbox.IParamsOrdersHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParamsOrdersHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamsOrdersHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mindbox.ParamsOrdersHistory;

        /**
         * Decodes a ParamsOrdersHistory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamsOrdersHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mindbox.ParamsOrdersHistory;

        /**
         * Verifies a ParamsOrdersHistory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParamsOrdersHistory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParamsOrdersHistory
         */
        public static fromObject(object: { [k: string]: any }): mindbox.ParamsOrdersHistory;

        /**
         * Creates a plain object from a ParamsOrdersHistory message. Also converts values to other types if specified.
         * @param message ParamsOrdersHistory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mindbox.ParamsOrdersHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParamsOrdersHistory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseOrdersHistory. */
    interface IResponseOrdersHistory {

        /** ResponseOrdersHistory totalCount */
        totalCount?: (number|null);

        /** ResponseOrdersHistory orders */
        orders?: (mindbox.Iorder[]|null);
    }

    /** Represents a ResponseOrdersHistory. */
    class ResponseOrdersHistory implements IResponseOrdersHistory {

        /**
         * Constructs a new ResponseOrdersHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: mindbox.IResponseOrdersHistory);

        /** ResponseOrdersHistory totalCount. */
        public totalCount: number;

        /** ResponseOrdersHistory orders. */
        public orders: mindbox.Iorder[];

        /**
         * Creates a new ResponseOrdersHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseOrdersHistory instance
         */
        public static create(properties?: mindbox.IResponseOrdersHistory): mindbox.ResponseOrdersHistory;

        /**
         * Encodes the specified ResponseOrdersHistory message. Does not implicitly {@link mindbox.ResponseOrdersHistory.verify|verify} messages.
         * @param message ResponseOrdersHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mindbox.IResponseOrdersHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseOrdersHistory message, length delimited. Does not implicitly {@link mindbox.ResponseOrdersHistory.verify|verify} messages.
         * @param message ResponseOrdersHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mindbox.IResponseOrdersHistory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseOrdersHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseOrdersHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mindbox.ResponseOrdersHistory;

        /**
         * Decodes a ResponseOrdersHistory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseOrdersHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mindbox.ResponseOrdersHistory;

        /**
         * Verifies a ResponseOrdersHistory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseOrdersHistory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseOrdersHistory
         */
        public static fromObject(object: { [k: string]: any }): mindbox.ResponseOrdersHistory;

        /**
         * Creates a plain object from a ResponseOrdersHistory message. Also converts values to other types if specified.
         * @param message ResponseOrdersHistory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mindbox.ResponseOrdersHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseOrdersHistory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an order. */
    interface Iorder {

        /** order id */
        id?: (string|null);

        /** order createdDate */
        createdDate?: (string|null);

        /** order paymentType */
        paymentType?: (string|null);

        /** order discountedTotalPrice */
        discountedTotalPrice?: (number|null);

        /** order paymentAmount */
        paymentAmount?: (number|null);

        /** order appliedDiscount */
        appliedDiscount?: (number|null);

        /** order acquiredBalanceChange */
        acquiredBalanceChange?: (number|null);
    }

    /** Represents an order. */
    class order implements Iorder {

        /**
         * Constructs a new order.
         * @param [properties] Properties to set
         */
        constructor(properties?: mindbox.Iorder);

        /** order id. */
        public id: string;

        /** order createdDate. */
        public createdDate: string;

        /** order paymentType. */
        public paymentType: string;

        /** order discountedTotalPrice. */
        public discountedTotalPrice: number;

        /** order paymentAmount. */
        public paymentAmount: number;

        /** order appliedDiscount. */
        public appliedDiscount: number;

        /** order acquiredBalanceChange. */
        public acquiredBalanceChange: number;

        /**
         * Creates a new order instance using the specified properties.
         * @param [properties] Properties to set
         * @returns order instance
         */
        public static create(properties?: mindbox.Iorder): mindbox.order;

        /**
         * Encodes the specified order message. Does not implicitly {@link mindbox.order.verify|verify} messages.
         * @param message order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mindbox.Iorder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified order message, length delimited. Does not implicitly {@link mindbox.order.verify|verify} messages.
         * @param message order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mindbox.Iorder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an order message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mindbox.order;

        /**
         * Decodes an order message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mindbox.order;

        /**
         * Verifies an order message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an order message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns order
         */
        public static fromObject(object: { [k: string]: any }): mindbox.order;

        /**
         * Creates a plain object from an order message. Also converts values to other types if specified.
         * @param message order
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mindbox.order, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this order to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace orders. */
export namespace orders {

    /** Represents an Orders */
    class Orders extends $protobuf.rpc.Service {

        /**
         * Constructs a new Orders service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Orders service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Orders;

        /**
         * Calls Ping.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and PingResponse
         */
        public ping(request: google.protobuf.IEmpty, callback: orders.Orders.PingCallback): void;

        /**
         * Calls Ping.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public ping(request: google.protobuf.IEmpty): Promise<orders.PingResponse>;

        /**
         * Calls OfflineByClient.
         * @param request ParamsOfflineByClient message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseOfflineByClient
         */
        public offlineByClient(request: orders.IParamsOfflineByClient, callback: orders.Orders.OfflineByClientCallback): void;

        /**
         * Calls OfflineByClient.
         * @param request ParamsOfflineByClient message or plain object
         * @returns Promise
         */
        public offlineByClient(request: orders.IParamsOfflineByClient): Promise<orders.ResponseOfflineByClient>;

        /**
         * Calls OnlineByClient.
         * @param request ParamsOnlineByClient message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseOnlineByClient
         */
        public onlineByClient(request: orders.IParamsOnlineByClient, callback: orders.Orders.OnlineByClientCallback): void;

        /**
         * Calls OnlineByClient.
         * @param request ParamsOnlineByClient message or plain object
         * @returns Promise
         */
        public onlineByClient(request: orders.IParamsOnlineByClient): Promise<orders.ResponseOnlineByClient>;
    }

    namespace Orders {

        /**
         * Callback as used by {@link orders.Orders#ping}.
         * @param error Error, if any
         * @param [response] PingResponse
         */
        type PingCallback = (error: (Error|null), response?: orders.PingResponse) => void;

        /**
         * Callback as used by {@link orders.Orders#offlineByClient}.
         * @param error Error, if any
         * @param [response] ResponseOfflineByClient
         */
        type OfflineByClientCallback = (error: (Error|null), response?: orders.ResponseOfflineByClient) => void;

        /**
         * Callback as used by {@link orders.Orders#onlineByClient}.
         * @param error Error, if any
         * @param [response] ResponseOnlineByClient
         */
        type OnlineByClientCallback = (error: (Error|null), response?: orders.ResponseOnlineByClient) => void;
    }

    /** Properties of a PingResponse. */
    interface IPingResponse {

        /** PingResponse response */
        response?: (string|null);
    }

    /** Represents a PingResponse. */
    class PingResponse implements IPingResponse {

        /**
         * Constructs a new PingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: orders.IPingResponse);

        /** PingResponse response. */
        public response: string;

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingResponse instance
         */
        public static create(properties?: orders.IPingResponse): orders.PingResponse;

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link orders.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: orders.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link orders.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: orders.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): orders.PingResponse;

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): orders.PingResponse;

        /**
         * Verifies a PingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingResponse
         */
        public static fromObject(object: { [k: string]: any }): orders.PingResponse;

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @param message PingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: orders.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParamsOfflineByClient. */
    interface IParamsOfflineByClient {

        /** ParamsOfflineByClient clientId */
        clientId?: (number|null);
    }

    /** Represents a ParamsOfflineByClient. */
    class ParamsOfflineByClient implements IParamsOfflineByClient {

        /**
         * Constructs a new ParamsOfflineByClient.
         * @param [properties] Properties to set
         */
        constructor(properties?: orders.IParamsOfflineByClient);

        /** ParamsOfflineByClient clientId. */
        public clientId: number;

        /**
         * Creates a new ParamsOfflineByClient instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamsOfflineByClient instance
         */
        public static create(properties?: orders.IParamsOfflineByClient): orders.ParamsOfflineByClient;

        /**
         * Encodes the specified ParamsOfflineByClient message. Does not implicitly {@link orders.ParamsOfflineByClient.verify|verify} messages.
         * @param message ParamsOfflineByClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: orders.IParamsOfflineByClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParamsOfflineByClient message, length delimited. Does not implicitly {@link orders.ParamsOfflineByClient.verify|verify} messages.
         * @param message ParamsOfflineByClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: orders.IParamsOfflineByClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParamsOfflineByClient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamsOfflineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): orders.ParamsOfflineByClient;

        /**
         * Decodes a ParamsOfflineByClient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamsOfflineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): orders.ParamsOfflineByClient;

        /**
         * Verifies a ParamsOfflineByClient message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParamsOfflineByClient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParamsOfflineByClient
         */
        public static fromObject(object: { [k: string]: any }): orders.ParamsOfflineByClient;

        /**
         * Creates a plain object from a ParamsOfflineByClient message. Also converts values to other types if specified.
         * @param message ParamsOfflineByClient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: orders.ParamsOfflineByClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParamsOfflineByClient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseOfflineByClient. */
    interface IResponseOfflineByClient {

        /** ResponseOfflineByClient orders */
        orders?: (orders.IOfflineOrder[]|null);
    }

    /** Represents a ResponseOfflineByClient. */
    class ResponseOfflineByClient implements IResponseOfflineByClient {

        /**
         * Constructs a new ResponseOfflineByClient.
         * @param [properties] Properties to set
         */
        constructor(properties?: orders.IResponseOfflineByClient);

        /** ResponseOfflineByClient orders. */
        public orders: orders.IOfflineOrder[];

        /**
         * Creates a new ResponseOfflineByClient instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseOfflineByClient instance
         */
        public static create(properties?: orders.IResponseOfflineByClient): orders.ResponseOfflineByClient;

        /**
         * Encodes the specified ResponseOfflineByClient message. Does not implicitly {@link orders.ResponseOfflineByClient.verify|verify} messages.
         * @param message ResponseOfflineByClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: orders.IResponseOfflineByClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseOfflineByClient message, length delimited. Does not implicitly {@link orders.ResponseOfflineByClient.verify|verify} messages.
         * @param message ResponseOfflineByClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: orders.IResponseOfflineByClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseOfflineByClient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseOfflineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): orders.ResponseOfflineByClient;

        /**
         * Decodes a ResponseOfflineByClient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseOfflineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): orders.ResponseOfflineByClient;

        /**
         * Verifies a ResponseOfflineByClient message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseOfflineByClient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseOfflineByClient
         */
        public static fromObject(object: { [k: string]: any }): orders.ResponseOfflineByClient;

        /**
         * Creates a plain object from a ResponseOfflineByClient message. Also converts values to other types if specified.
         * @param message ResponseOfflineByClient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: orders.ResponseOfflineByClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseOfflineByClient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParamsOnlineByClient. */
    interface IParamsOnlineByClient {

        /** ParamsOnlineByClient clientId */
        clientId?: (number|null);
    }

    /** Represents a ParamsOnlineByClient. */
    class ParamsOnlineByClient implements IParamsOnlineByClient {

        /**
         * Constructs a new ParamsOnlineByClient.
         * @param [properties] Properties to set
         */
        constructor(properties?: orders.IParamsOnlineByClient);

        /** ParamsOnlineByClient clientId. */
        public clientId: number;

        /**
         * Creates a new ParamsOnlineByClient instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamsOnlineByClient instance
         */
        public static create(properties?: orders.IParamsOnlineByClient): orders.ParamsOnlineByClient;

        /**
         * Encodes the specified ParamsOnlineByClient message. Does not implicitly {@link orders.ParamsOnlineByClient.verify|verify} messages.
         * @param message ParamsOnlineByClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: orders.IParamsOnlineByClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParamsOnlineByClient message, length delimited. Does not implicitly {@link orders.ParamsOnlineByClient.verify|verify} messages.
         * @param message ParamsOnlineByClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: orders.IParamsOnlineByClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParamsOnlineByClient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamsOnlineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): orders.ParamsOnlineByClient;

        /**
         * Decodes a ParamsOnlineByClient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamsOnlineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): orders.ParamsOnlineByClient;

        /**
         * Verifies a ParamsOnlineByClient message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParamsOnlineByClient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParamsOnlineByClient
         */
        public static fromObject(object: { [k: string]: any }): orders.ParamsOnlineByClient;

        /**
         * Creates a plain object from a ParamsOnlineByClient message. Also converts values to other types if specified.
         * @param message ParamsOnlineByClient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: orders.ParamsOnlineByClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParamsOnlineByClient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseOnlineByClient. */
    interface IResponseOnlineByClient {

        /** ResponseOnlineByClient order */
        order?: (number[]|null);
    }

    /** Represents a ResponseOnlineByClient. */
    class ResponseOnlineByClient implements IResponseOnlineByClient {

        /**
         * Constructs a new ResponseOnlineByClient.
         * @param [properties] Properties to set
         */
        constructor(properties?: orders.IResponseOnlineByClient);

        /** ResponseOnlineByClient order. */
        public order: number[];

        /**
         * Creates a new ResponseOnlineByClient instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseOnlineByClient instance
         */
        public static create(properties?: orders.IResponseOnlineByClient): orders.ResponseOnlineByClient;

        /**
         * Encodes the specified ResponseOnlineByClient message. Does not implicitly {@link orders.ResponseOnlineByClient.verify|verify} messages.
         * @param message ResponseOnlineByClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: orders.IResponseOnlineByClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseOnlineByClient message, length delimited. Does not implicitly {@link orders.ResponseOnlineByClient.verify|verify} messages.
         * @param message ResponseOnlineByClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: orders.IResponseOnlineByClient, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseOnlineByClient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseOnlineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): orders.ResponseOnlineByClient;

        /**
         * Decodes a ResponseOnlineByClient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseOnlineByClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): orders.ResponseOnlineByClient;

        /**
         * Verifies a ResponseOnlineByClient message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseOnlineByClient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseOnlineByClient
         */
        public static fromObject(object: { [k: string]: any }): orders.ResponseOnlineByClient;

        /**
         * Creates a plain object from a ResponseOnlineByClient message. Also converts values to other types if specified.
         * @param message ResponseOnlineByClient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: orders.ResponseOnlineByClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseOnlineByClient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OfflineOrder. */
    interface IOfflineOrder {

        /** OfflineOrder storeName */
        storeName?: (string|null);

        /** OfflineOrder storeId */
        storeId?: (number|null);

        /** OfflineOrder cashboxId */
        cashboxId?: (number|null);

        /** OfflineOrder orderId */
        orderId?: (string|null);

        /** OfflineOrder rowReceipt */
        rowReceipt?: (number|null);

        /** OfflineOrder date */
        date?: (string|null);

        /** OfflineOrder time */
        time?: (string|null);

        /** OfflineOrder article */
        article?: (string|null);

        /** OfflineOrder title */
        title?: (string|null);

        /** OfflineOrder color */
        color?: (string|null);

        /** OfflineOrder size */
        size?: (string|null);

        /** OfflineOrder barcode */
        barcode?: (string|null);

        /** OfflineOrder qty */
        qty?: (number|null);

        /** OfflineOrder totalGross */
        totalGross?: (number|null);

        /** OfflineOrder discount */
        discount?: (number|null);

        /** OfflineOrder total */
        total?: (number|null);

        /** OfflineOrder clientId */
        clientId?: (number|null);

        /** OfflineOrder seller */
        seller?: (string|null);

        /** OfflineOrder family */
        family?: (string|null);

        /** OfflineOrder operation */
        operation?: (number|null);

        /** OfflineOrder source */
        source?: (string|null);

        /** OfflineOrder bonusesWasted */
        bonusesWasted?: (number|null);

        /** OfflineOrder bonusesAccrued */
        bonusesAccrued?: (number|null);
    }

    /** Represents an OfflineOrder. */
    class OfflineOrder implements IOfflineOrder {

        /**
         * Constructs a new OfflineOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: orders.IOfflineOrder);

        /** OfflineOrder storeName. */
        public storeName: string;

        /** OfflineOrder storeId. */
        public storeId: number;

        /** OfflineOrder cashboxId. */
        public cashboxId: number;

        /** OfflineOrder orderId. */
        public orderId: string;

        /** OfflineOrder rowReceipt. */
        public rowReceipt: number;

        /** OfflineOrder date. */
        public date: string;

        /** OfflineOrder time. */
        public time: string;

        /** OfflineOrder article. */
        public article: string;

        /** OfflineOrder title. */
        public title: string;

        /** OfflineOrder color. */
        public color: string;

        /** OfflineOrder size. */
        public size: string;

        /** OfflineOrder barcode. */
        public barcode: string;

        /** OfflineOrder qty. */
        public qty: number;

        /** OfflineOrder totalGross. */
        public totalGross: number;

        /** OfflineOrder discount. */
        public discount: number;

        /** OfflineOrder total. */
        public total: number;

        /** OfflineOrder clientId. */
        public clientId: number;

        /** OfflineOrder seller. */
        public seller: string;

        /** OfflineOrder family. */
        public family: string;

        /** OfflineOrder operation. */
        public operation: number;

        /** OfflineOrder source. */
        public source: string;

        /** OfflineOrder bonusesWasted. */
        public bonusesWasted: number;

        /** OfflineOrder bonusesAccrued. */
        public bonusesAccrued: number;

        /**
         * Creates a new OfflineOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OfflineOrder instance
         */
        public static create(properties?: orders.IOfflineOrder): orders.OfflineOrder;

        /**
         * Encodes the specified OfflineOrder message. Does not implicitly {@link orders.OfflineOrder.verify|verify} messages.
         * @param message OfflineOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: orders.IOfflineOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OfflineOrder message, length delimited. Does not implicitly {@link orders.OfflineOrder.verify|verify} messages.
         * @param message OfflineOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: orders.IOfflineOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OfflineOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OfflineOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): orders.OfflineOrder;

        /**
         * Decodes an OfflineOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OfflineOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): orders.OfflineOrder;

        /**
         * Verifies an OfflineOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OfflineOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OfflineOrder
         */
        public static fromObject(object: { [k: string]: any }): orders.OfflineOrder;

        /**
         * Creates a plain object from an OfflineOrder message. Also converts values to other types if specified.
         * @param message OfflineOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: orders.OfflineOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OfflineOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace payments. */
export namespace payments {

    /** Represents a Payments */
    class Payments extends $protobuf.rpc.Service {

        /**
         * Constructs a new Payments service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Payments service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Payments;

        /**
         * Calls Ping.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and PingResponse
         */
        public ping(request: google.protobuf.IEmpty, callback: payments.Payments.PingCallback): void;

        /**
         * Calls Ping.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public ping(request: google.protobuf.IEmpty): Promise<payments.PingResponse>;

        /**
         * Calls GetCardsByUserID.
         * @param request ParamsGetCardByUserID message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseGetCardByUserID
         */
        public getCardsByUserID(request: payments.IParamsGetCardByUserID, callback: payments.Payments.GetCardsByUserIDCallback): void;

        /**
         * Calls GetCardsByUserID.
         * @param request ParamsGetCardByUserID message or plain object
         * @returns Promise
         */
        public getCardsByUserID(request: payments.IParamsGetCardByUserID): Promise<payments.ResponseGetCardByUserID>;

        /**
         * Calls SaveUserCard.
         * @param request UserCard message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseSuccess
         */
        public saveUserCard(request: payments.IUserCard, callback: payments.Payments.SaveUserCardCallback): void;

        /**
         * Calls SaveUserCard.
         * @param request UserCard message or plain object
         * @returns Promise
         */
        public saveUserCard(request: payments.IUserCard): Promise<payments.ResponseSuccess>;

        /**
         * Calls DeleteCardByID.
         * @param request ParamsDeleteCardByID message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseSuccess
         */
        public deleteCardByID(request: payments.IParamsDeleteCardByID, callback: payments.Payments.DeleteCardByIDCallback): void;

        /**
         * Calls DeleteCardByID.
         * @param request ParamsDeleteCardByID message or plain object
         * @returns Promise
         */
        public deleteCardByID(request: payments.IParamsDeleteCardByID): Promise<payments.ResponseSuccess>;
    }

    namespace Payments {

        /**
         * Callback as used by {@link payments.Payments#ping}.
         * @param error Error, if any
         * @param [response] PingResponse
         */
        type PingCallback = (error: (Error|null), response?: payments.PingResponse) => void;

        /**
         * Callback as used by {@link payments.Payments#getCardsByUserID}.
         * @param error Error, if any
         * @param [response] ResponseGetCardByUserID
         */
        type GetCardsByUserIDCallback = (error: (Error|null), response?: payments.ResponseGetCardByUserID) => void;

        /**
         * Callback as used by {@link payments.Payments#saveUserCard}.
         * @param error Error, if any
         * @param [response] ResponseSuccess
         */
        type SaveUserCardCallback = (error: (Error|null), response?: payments.ResponseSuccess) => void;

        /**
         * Callback as used by {@link payments.Payments#deleteCardByID}.
         * @param error Error, if any
         * @param [response] ResponseSuccess
         */
        type DeleteCardByIDCallback = (error: (Error|null), response?: payments.ResponseSuccess) => void;
    }

    /** Properties of a PingResponse. */
    interface IPingResponse {

        /** PingResponse response */
        response?: (string|null);
    }

    /** Represents a PingResponse. */
    class PingResponse implements IPingResponse {

        /**
         * Constructs a new PingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: payments.IPingResponse);

        /** PingResponse response. */
        public response: string;

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingResponse instance
         */
        public static create(properties?: payments.IPingResponse): payments.PingResponse;

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link payments.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: payments.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link payments.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: payments.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): payments.PingResponse;

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): payments.PingResponse;

        /**
         * Verifies a PingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingResponse
         */
        public static fromObject(object: { [k: string]: any }): payments.PingResponse;

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @param message PingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: payments.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParamsGetCardByUserID. */
    interface IParamsGetCardByUserID {

        /** ParamsGetCardByUserID userId */
        userId?: (number|null);
    }

    /** Represents a ParamsGetCardByUserID. */
    class ParamsGetCardByUserID implements IParamsGetCardByUserID {

        /**
         * Constructs a new ParamsGetCardByUserID.
         * @param [properties] Properties to set
         */
        constructor(properties?: payments.IParamsGetCardByUserID);

        /** ParamsGetCardByUserID userId. */
        public userId: number;

        /**
         * Creates a new ParamsGetCardByUserID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamsGetCardByUserID instance
         */
        public static create(properties?: payments.IParamsGetCardByUserID): payments.ParamsGetCardByUserID;

        /**
         * Encodes the specified ParamsGetCardByUserID message. Does not implicitly {@link payments.ParamsGetCardByUserID.verify|verify} messages.
         * @param message ParamsGetCardByUserID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: payments.IParamsGetCardByUserID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParamsGetCardByUserID message, length delimited. Does not implicitly {@link payments.ParamsGetCardByUserID.verify|verify} messages.
         * @param message ParamsGetCardByUserID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: payments.IParamsGetCardByUserID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParamsGetCardByUserID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamsGetCardByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): payments.ParamsGetCardByUserID;

        /**
         * Decodes a ParamsGetCardByUserID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamsGetCardByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): payments.ParamsGetCardByUserID;

        /**
         * Verifies a ParamsGetCardByUserID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParamsGetCardByUserID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParamsGetCardByUserID
         */
        public static fromObject(object: { [k: string]: any }): payments.ParamsGetCardByUserID;

        /**
         * Creates a plain object from a ParamsGetCardByUserID message. Also converts values to other types if specified.
         * @param message ParamsGetCardByUserID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: payments.ParamsGetCardByUserID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParamsGetCardByUserID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseGetCardByUserID. */
    interface IResponseGetCardByUserID {

        /** ResponseGetCardByUserID total */
        total?: (number|null);

        /** ResponseGetCardByUserID cards */
        cards?: (payments.IUserCard[]|null);
    }

    /** Represents a ResponseGetCardByUserID. */
    class ResponseGetCardByUserID implements IResponseGetCardByUserID {

        /**
         * Constructs a new ResponseGetCardByUserID.
         * @param [properties] Properties to set
         */
        constructor(properties?: payments.IResponseGetCardByUserID);

        /** ResponseGetCardByUserID total. */
        public total: number;

        /** ResponseGetCardByUserID cards. */
        public cards: payments.IUserCard[];

        /**
         * Creates a new ResponseGetCardByUserID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseGetCardByUserID instance
         */
        public static create(properties?: payments.IResponseGetCardByUserID): payments.ResponseGetCardByUserID;

        /**
         * Encodes the specified ResponseGetCardByUserID message. Does not implicitly {@link payments.ResponseGetCardByUserID.verify|verify} messages.
         * @param message ResponseGetCardByUserID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: payments.IResponseGetCardByUserID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseGetCardByUserID message, length delimited. Does not implicitly {@link payments.ResponseGetCardByUserID.verify|verify} messages.
         * @param message ResponseGetCardByUserID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: payments.IResponseGetCardByUserID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseGetCardByUserID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseGetCardByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): payments.ResponseGetCardByUserID;

        /**
         * Decodes a ResponseGetCardByUserID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseGetCardByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): payments.ResponseGetCardByUserID;

        /**
         * Verifies a ResponseGetCardByUserID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseGetCardByUserID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseGetCardByUserID
         */
        public static fromObject(object: { [k: string]: any }): payments.ResponseGetCardByUserID;

        /**
         * Creates a plain object from a ResponseGetCardByUserID message. Also converts values to other types if specified.
         * @param message ResponseGetCardByUserID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: payments.ResponseGetCardByUserID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseGetCardByUserID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseSuccess. */
    interface IResponseSuccess {

        /** ResponseSuccess ok */
        ok?: (boolean|null);
    }

    /** Represents a ResponseSuccess. */
    class ResponseSuccess implements IResponseSuccess {

        /**
         * Constructs a new ResponseSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: payments.IResponseSuccess);

        /** ResponseSuccess ok. */
        public ok: boolean;

        /**
         * Creates a new ResponseSuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseSuccess instance
         */
        public static create(properties?: payments.IResponseSuccess): payments.ResponseSuccess;

        /**
         * Encodes the specified ResponseSuccess message. Does not implicitly {@link payments.ResponseSuccess.verify|verify} messages.
         * @param message ResponseSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: payments.IResponseSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseSuccess message, length delimited. Does not implicitly {@link payments.ResponseSuccess.verify|verify} messages.
         * @param message ResponseSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: payments.IResponseSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): payments.ResponseSuccess;

        /**
         * Decodes a ResponseSuccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): payments.ResponseSuccess;

        /**
         * Verifies a ResponseSuccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseSuccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseSuccess
         */
        public static fromObject(object: { [k: string]: any }): payments.ResponseSuccess;

        /**
         * Creates a plain object from a ResponseSuccess message. Also converts values to other types if specified.
         * @param message ResponseSuccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: payments.ResponseSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseSuccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParamsDeleteCardByID. */
    interface IParamsDeleteCardByID {

        /** ParamsDeleteCardByID cardId */
        cardId?: (number|null);
    }

    /** Represents a ParamsDeleteCardByID. */
    class ParamsDeleteCardByID implements IParamsDeleteCardByID {

        /**
         * Constructs a new ParamsDeleteCardByID.
         * @param [properties] Properties to set
         */
        constructor(properties?: payments.IParamsDeleteCardByID);

        /** ParamsDeleteCardByID cardId. */
        public cardId: number;

        /**
         * Creates a new ParamsDeleteCardByID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamsDeleteCardByID instance
         */
        public static create(properties?: payments.IParamsDeleteCardByID): payments.ParamsDeleteCardByID;

        /**
         * Encodes the specified ParamsDeleteCardByID message. Does not implicitly {@link payments.ParamsDeleteCardByID.verify|verify} messages.
         * @param message ParamsDeleteCardByID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: payments.IParamsDeleteCardByID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParamsDeleteCardByID message, length delimited. Does not implicitly {@link payments.ParamsDeleteCardByID.verify|verify} messages.
         * @param message ParamsDeleteCardByID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: payments.IParamsDeleteCardByID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParamsDeleteCardByID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamsDeleteCardByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): payments.ParamsDeleteCardByID;

        /**
         * Decodes a ParamsDeleteCardByID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamsDeleteCardByID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): payments.ParamsDeleteCardByID;

        /**
         * Verifies a ParamsDeleteCardByID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParamsDeleteCardByID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParamsDeleteCardByID
         */
        public static fromObject(object: { [k: string]: any }): payments.ParamsDeleteCardByID;

        /**
         * Creates a plain object from a ParamsDeleteCardByID message. Also converts values to other types if specified.
         * @param message ParamsDeleteCardByID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: payments.ParamsDeleteCardByID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParamsDeleteCardByID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserCard. */
    interface IUserCard {

        /** UserCard id */
        id?: (number|null);

        /** UserCard userId */
        userId?: (number|null);

        /** UserCard type */
        type?: (string|null);

        /** UserCard vendor */
        vendor?: (string|null);

        /** UserCard number */
        number?: (string|null);

        /** UserCard expDate */
        expDate?: (string|null);

        /** UserCard active */
        active?: (boolean|null);

        /** UserCard test */
        test?: (boolean|null);
    }

    /** Represents a UserCard. */
    class UserCard implements IUserCard {

        /**
         * Constructs a new UserCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: payments.IUserCard);

        /** UserCard id. */
        public id: number;

        /** UserCard userId. */
        public userId: number;

        /** UserCard type. */
        public type: string;

        /** UserCard vendor. */
        public vendor: string;

        /** UserCard number. */
        public number: string;

        /** UserCard expDate. */
        public expDate: string;

        /** UserCard active. */
        public active: boolean;

        /** UserCard test. */
        public test: boolean;

        /**
         * Creates a new UserCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserCard instance
         */
        public static create(properties?: payments.IUserCard): payments.UserCard;

        /**
         * Encodes the specified UserCard message. Does not implicitly {@link payments.UserCard.verify|verify} messages.
         * @param message UserCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: payments.IUserCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserCard message, length delimited. Does not implicitly {@link payments.UserCard.verify|verify} messages.
         * @param message UserCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: payments.IUserCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): payments.UserCard;

        /**
         * Decodes a UserCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): payments.UserCard;

        /**
         * Verifies a UserCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserCard
         */
        public static fromObject(object: { [k: string]: any }): payments.UserCard;

        /**
         * Creates a plain object from a UserCard message. Also converts values to other types if specified.
         * @param message UserCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: payments.UserCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
