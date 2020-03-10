import * as $protobuf from "protobufjs";
export namespace feedbacks {

    class Mobile extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public app(request: feedbacks.IParamsApp, callback: feedbacks.Mobile.AppCallback): void;
        public app(request: feedbacks.IParamsApp): Promise<feedbacks.ResponseOk>;
        public store(request: feedbacks.IParamsStore, callback: feedbacks.Mobile.StoreCallback): void;
        public store(request: feedbacks.IParamsStore): Promise<feedbacks.ResponseOk>;
        public order(request: feedbacks.IParamsOrder, callback: feedbacks.Mobile.OrderCallback): void;
        public order(request: feedbacks.IParamsOrder): Promise<feedbacks.ResponseOk>;
        public categories(request: google.protobuf.IEmpty, callback: feedbacks.Mobile.CategoriesCallback): void;
        public categories(request: google.protobuf.IEmpty): Promise<feedbacks.ResponseCategories>;
        public reasonsByOrder(request: feedbacks.IParamsReasonsByOrder, callback: feedbacks.Mobile.ReasonsByOrderCallback): void;
        public reasonsByOrder(request: feedbacks.IParamsReasonsByOrder): Promise<feedbacks.ResponseReasons>;
        public reasonsByStore(request: google.protobuf.IEmpty, callback: feedbacks.Mobile.ReasonsByStoreCallback): void;
        public reasonsByStore(request: google.protobuf.IEmpty): Promise<feedbacks.ResponseReasons>;
    }

    namespace Mobile {

        type AppCallback = (error: (Error|null), response?: feedbacks.ResponseOk) => void;

        type StoreCallback = (error: (Error|null), response?: feedbacks.ResponseOk) => void;

        type OrderCallback = (error: (Error|null), response?: feedbacks.ResponseOk) => void;

        type CategoriesCallback = (error: (Error|null), response?: feedbacks.ResponseCategories) => void;

        type ReasonsByOrderCallback = (error: (Error|null), response?: feedbacks.ResponseReasons) => void;

        type ReasonsByStoreCallback = (error: (Error|null), response?: feedbacks.ResponseReasons) => void;
    }

    interface IResponseOk {
        ok?: (boolean|null);
    }

    class ResponseOk implements IResponseOk {
        constructor(properties?: feedbacks.IResponseOk);
        public ok: boolean;
    }

    interface IParamsApp {
        client_id?: (number|Long|null);
        app_version?: (string|null);
        rate?: (string|null);
        reasons?: (number[]|null);
        comment?: (string|null);
    }

    class ParamsApp implements IParamsApp {
        constructor(properties?: feedbacks.IParamsApp);
        public client_id: (number|Long);
        public app_version: string;
        public rate: string;
        public reasons: number[];
        public comment: string;
    }

    interface IParamsStore {
        client_id?: (number|Long|null);
        rate?: (string|null);
        reasons?: (number[]|null);
        comment?: (string|null);
        store_id?: (number|null);
    }

    class ParamsStore implements IParamsStore {
        constructor(properties?: feedbacks.IParamsStore);
        public client_id: (number|Long);
        public rate: string;
        public reasons: number[];
        public comment: string;
        public store_id: number;
    }

    interface IParamsOrder {
        order_id?: (string|null);
        rate?: (string|null);
        reasons?: (number[]|null);
        comment?: (string|null);
        store_id?: (number|null);
    }

    class ParamsOrder implements IParamsOrder {
        constructor(properties?: feedbacks.IParamsOrder);
        public order_id: string;
        public rate: string;
        public reasons: number[];
        public comment: string;
        public store_id: number;
    }

    interface IReason {
        id?: (number|null);
        title?: (string|null);
        category_id?: (number|null);
    }

    class Reason implements IReason {
        constructor(properties?: feedbacks.IReason);
        public id: number;
        public title: string;
        public category_id: number;
    }

    interface ICategory {
        id?: (number|null);
        title?: (string|null);
    }

    class Category implements ICategory {
        constructor(properties?: feedbacks.ICategory);
        public id: number;
        public title: string;
    }

    interface IRequestChoices {
        category_id?: (number|null);
    }

    class RequestChoices implements IRequestChoices {
        constructor(properties?: feedbacks.IRequestChoices);
        public category_id: number;
    }

    interface IResponseReasons {
        result?: (feedbacks.IReason[]|null);
    }

    class ResponseReasons implements IResponseReasons {
        constructor(properties?: feedbacks.IResponseReasons);
        public result: feedbacks.IReason[];
    }

    interface IResponseCategories {
        result?: (feedbacks.ICategory[]|null);
    }

    class ResponseCategories implements IResponseCategories {
        constructor(properties?: feedbacks.IResponseCategories);
        public result: feedbacks.ICategory[];
    }

    interface IParamsReasonsByOrder {
        order_id?: (string|null);
    }

    class ParamsReasonsByOrder implements IParamsReasonsByOrder {
        constructor(properties?: feedbacks.IParamsReasonsByOrder);
        public order_id: string;
    }
}

export namespace google {

    namespace protobuf {

        interface IEmpty {
        }

        class Empty implements IEmpty {
            constructor(properties?: google.protobuf.IEmpty);
        }
    }
}

export namespace grpc {

    namespace health {

        namespace v1 {

            class Health extends $protobuf.rpc.Service {
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
                public check(request: grpc.health.v1.IHealthCheckRequest, callback: grpc.health.v1.Health.CheckCallback): void;
                public check(request: grpc.health.v1.IHealthCheckRequest): Promise<grpc.health.v1.HealthCheckResponse>;
            }

            namespace Health {

                type CheckCallback = (error: (Error|null), response?: grpc.health.v1.HealthCheckResponse) => void;
            }

            interface IHealthCheckRequest {
                service?: (string|null);
            }

            class HealthCheckRequest implements IHealthCheckRequest {
                constructor(properties?: grpc.health.v1.IHealthCheckRequest);
                public service: string;
            }

            interface IHealthCheckResponse {
                status?: (grpc.health.v1.HealthCheckResponse.ServingStatus|null);
            }

            class HealthCheckResponse implements IHealthCheckResponse {
                constructor(properties?: grpc.health.v1.IHealthCheckResponse);
                public status: grpc.health.v1.HealthCheckResponse.ServingStatus;
            }

            namespace HealthCheckResponse {

                enum ServingStatus {
                    UNKNOWN = 0,
                    SERVING = 1,
                    NOT_SERVING = 2
                }
            }
        }
    }
}

export namespace logistics {

    class Logistics extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public ping(request: google.protobuf.IEmpty, callback: logistics.Logistics.PingCallback): void;
        public ping(request: google.protobuf.IEmpty): Promise<logistics.PingResponse>;
        public uPSDuration(request: logistics.IGetParamsUPS, callback: logistics.Logistics.UPSDurationCallback): void;
        public uPSDuration(request: logistics.IGetParamsUPS): Promise<logistics.GetResponseUPS>;
        public boxberryDuration(request: logistics.IGetParamsBoxberry, callback: logistics.Logistics.BoxberryDurationCallback): void;
        public boxberryDuration(request: logistics.IGetParamsBoxberry): Promise<logistics.GetResponseBoxberry>;
        public boxberryDurationByCity(request: logistics.IGetParamsBoxberryDurationByCity, callback: logistics.Logistics.BoxberryDurationByCityCallback): void;
        public boxberryDurationByCity(request: logistics.IGetParamsBoxberryDurationByCity): Promise<logistics.GetResponseBoxberryDurationByCity>;
        public boxberryPointInformation(request: logistics.IGetParamsPointInformation, callback: logistics.Logistics.BoxberryPointInformationCallback): void;
        public boxberryPointInformation(request: logistics.IGetParamsPointInformation): Promise<logistics.GetResponsePointInformation>;
        public boxberryOrderStatus(request: logistics.IGetParamsOrderStatus, callback: logistics.Logistics.BoxberryOrderStatusCallback): void;
        public boxberryOrderStatus(request: logistics.IGetParamsOrderStatus): Promise<logistics.GetResponseOrderStatus>;
    }

    namespace Logistics {

        type PingCallback = (error: (Error|null), response?: logistics.PingResponse) => void;

        type UPSDurationCallback = (error: (Error|null), response?: logistics.GetResponseUPS) => void;

        type BoxberryDurationCallback = (error: (Error|null), response?: logistics.GetResponseBoxberry) => void;

        type BoxberryDurationByCityCallback = (error: (Error|null), response?: logistics.GetResponseBoxberryDurationByCity) => void;

        type BoxberryPointInformationCallback = (error: (Error|null), response?: logistics.GetResponsePointInformation) => void;

        type BoxberryOrderStatusCallback = (error: (Error|null), response?: logistics.GetResponseOrderStatus) => void;
    }

    interface IPingResponse {
        response?: (string|null);
    }

    class PingResponse implements IPingResponse {
        constructor(properties?: logistics.IPingResponse);
        public response: string;
    }

    interface IGetParamsUPS {
        originCountryCode?: (string|null);
        originPostalCode?: (string|null);
        destinationCountryCode?: (string|null);
        destinationPostalCode?: (string|null);
        shipDate?: (string|null);
        shipTime?: (string|null);
    }

    class GetParamsUPS implements IGetParamsUPS {
        constructor(properties?: logistics.IGetParamsUPS);
        public originCountryCode: string;
        public originPostalCode: string;
        public destinationCountryCode: string;
        public destinationPostalCode: string;
        public shipDate: string;
        public shipTime: string;
    }

    interface IGetResponseUPS {
        deliveryDate?: (string|null);
        deliveryTime?: (string|null);
    }

    class GetResponseUPS implements IGetResponseUPS {
        constructor(properties?: logistics.IGetResponseUPS);
        public deliveryDate: string;
        public deliveryTime: string;
    }

    interface IGetParamsBoxberry {
        originCode?: (string|null);
        destionationCode?: (string|null);
    }

    class GetParamsBoxberry implements IGetParamsBoxberry {
        constructor(properties?: logistics.IGetParamsBoxberry);
        public originCode: string;
        public destionationCode: string;
    }

    interface IGetResponseBoxberry {
        price?: (number|null);
        deliveryPeriod?: (number|null);
    }

    class GetResponseBoxberry implements IGetResponseBoxberry {
        constructor(properties?: logistics.IGetResponseBoxberry);
        public price: number;
        public deliveryPeriod: number;
    }

    interface IGetParamsBoxberryDurationByCity {
        originCode?: (string|null);
        cityName?: (string|null);
    }

    class GetParamsBoxberryDurationByCity implements IGetParamsBoxberryDurationByCity {
        constructor(properties?: logistics.IGetParamsBoxberryDurationByCity);
        public originCode: string;
        public cityName: string;
    }

    interface IGetResponseBoxberryDurationByCity {
        price?: (number|null);
        deliveryPeriod?: (number|null);
    }

    class GetResponseBoxberryDurationByCity implements IGetResponseBoxberryDurationByCity {
        constructor(properties?: logistics.IGetResponseBoxberryDurationByCity);
        public price: number;
        public deliveryPeriod: number;
    }

    interface IGetParamsPointInformation {
        point_code?: (string|null);
    }

    class GetParamsPointInformation implements IGetParamsPointInformation {
        constructor(properties?: logistics.IGetParamsPointInformation);
        public point_code: string;
    }

    interface IGetResponsePointInformation {
        work_schedule?: (string|null);
        address?: (string|null);
        metro?: (string|null);
    }

    class GetResponsePointInformation implements IGetResponsePointInformation {
        constructor(properties?: logistics.IGetResponsePointInformation);
        public work_schedule: string;
        public address: string;
        public metro: string;
    }

    interface IGetParamsOrderStatus {
        order_id?: (string|null);
    }

    class GetParamsOrderStatus implements IGetParamsOrderStatus {
        constructor(properties?: logistics.IGetParamsOrderStatus);
        public order_id: string;
    }

    interface IGetResponseOrderStatus {
        statuses?: (logistics.Istatus[]|null);
    }

    class GetResponseOrderStatus implements IGetResponseOrderStatus {
        constructor(properties?: logistics.IGetResponseOrderStatus);
        public statuses: logistics.Istatus[];
    }

    interface Istatus {
        date?: (string|null);
        name?: (string|null);
        comment?: (string|null);
    }

    class status implements Istatus {
        constructor(properties?: logistics.Istatus);
        public date: string;
        public name: string;
        public comment: string;
    }
}

export namespace meta {

    class Mobile extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public contacts(request: google.protobuf.IEmpty, callback: meta.Mobile.ContactsCallback): void;
        public contacts(request: google.protobuf.IEmpty): Promise<meta.ResponseMobileAPIContacts>;
        public about(request: google.protobuf.IEmpty, callback: meta.Mobile.AboutCallback): void;
        public about(request: google.protobuf.IEmpty): Promise<meta.ResponseMobileApiAbout>;
        public faq(request: google.protobuf.IEmpty, callback: meta.Mobile.FaqCallback): void;
        public faq(request: google.protobuf.IEmpty): Promise<meta.ResponseFaq>;
        public countries(request: meta.IParamsCountries, callback: meta.Mobile.CountriesCallback): void;
        public countries(request: meta.IParamsCountries): Promise<meta.ResponseCountries>;
    }

    namespace Mobile {

        type ContactsCallback = (error: (Error|null), response?: meta.ResponseMobileAPIContacts) => void;

        type AboutCallback = (error: (Error|null), response?: meta.ResponseMobileApiAbout) => void;

        type FaqCallback = (error: (Error|null), response?: meta.ResponseFaq) => void;

        type CountriesCallback = (error: (Error|null), response?: meta.ResponseCountries) => void;
    }

    class Stores extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public all(request: meta.IParamsStores, callback: meta.Stores.AllCallback): void;
        public all(request: meta.IParamsStores): Promise<meta.ResponseAllOfflineStoresInfo>;
        public byID(request: meta.IParamsOfflineStoreInfoByID, callback: meta.Stores.ByIDCallback): void;
        public byID(request: meta.IParamsOfflineStoreInfoByID): Promise<meta.ResponseOfflineStoreInfoByID>;
        public cities(request: meta.IParamsStoresCities, callback: meta.Stores.CitiesCallback): void;
        public cities(request: meta.IParamsStoresCities): Promise<meta.ResponseStoresCities>;
    }

    namespace Stores {

        type AllCallback = (error: (Error|null), response?: meta.ResponseAllOfflineStoresInfo) => void;

        type ByIDCallback = (error: (Error|null), response?: meta.ResponseOfflineStoreInfoByID) => void;

        type CitiesCallback = (error: (Error|null), response?: meta.ResponseStoresCities) => void;
    }

    interface IResponseAllOfflineStoresInfo {
        result?: (meta.IOfflineStore[]|null);
    }

    class ResponseAllOfflineStoresInfo implements IResponseAllOfflineStoresInfo {
        constructor(properties?: meta.IResponseAllOfflineStoresInfo);
        public result: meta.IOfflineStore[];
    }

    interface IOfflineStore {
        store_id?: (number|null);
        title?: (string|null);
        address?: (string|null);
        phone?: (string|null);
        geo?: (string|null);
        city?: (string|null);
        country?: (string|null);
        active?: (boolean|null);
        picture_url?: (string|null);
        schedule?: (string|null);
        city_id?: (number|null);
    }

    class OfflineStore implements IOfflineStore {
        constructor(properties?: meta.IOfflineStore);
        public store_id: number;
        public title: string;
        public address: string;
        public phone: string;
        public geo: string;
        public city: string;
        public country: string;
        public active: boolean;
        public picture_url: string;
        public schedule: string;
        public city_id: number;
    }

    interface IParamsOfflineStoreInfoByID {
        store_id?: (number|null);
    }

    class ParamsOfflineStoreInfoByID implements IParamsOfflineStoreInfoByID {
        constructor(properties?: meta.IParamsOfflineStoreInfoByID);
        public store_id: number;
    }

    interface IResponseOfflineStoreInfoByID {
        store?: (meta.IOfflineStore|null);
    }

    class ResponseOfflineStoreInfoByID implements IResponseOfflineStoreInfoByID {
        constructor(properties?: meta.IResponseOfflineStoreInfoByID);
        public store?: (meta.IOfflineStore|null);
    }

    interface IResponseMobileAPIContacts {
        contacts?: (meta.IContact[]|null);
    }

    class ResponseMobileAPIContacts implements IResponseMobileAPIContacts {
        constructor(properties?: meta.IResponseMobileAPIContacts);
        public contacts: meta.IContact[];
    }

    interface IContact {
        title?: (string|null);
        subtitle?: (string|null);
        text?: (string|null);
    }

    class Contact implements IContact {
        constructor(properties?: meta.IContact);
        public title: string;
        public subtitle: string;
        public text: string;
    }

    interface IResponseMobileApiAbout {
        about?: (string|null);
        mission?: (string|null);
        blocks?: (meta.IBlock[]|null);
        image_url?: (string|null);
    }

    class ResponseMobileApiAbout implements IResponseMobileApiAbout {
        constructor(properties?: meta.IResponseMobileApiAbout);
        public about: string;
        public mission: string;
        public blocks: meta.IBlock[];
        public image_url: string;
    }

    interface IBlock {
        title?: (string|null);
        value?: (string|null);
    }

    class Block implements IBlock {
        constructor(properties?: meta.IBlock);
        public title: string;
        public value: string;
    }

    interface IResponseFaq {
        result?: (meta.IBlockFaq[]|null);
    }

    class ResponseFaq implements IResponseFaq {
        constructor(properties?: meta.IResponseFaq);
        public result: meta.IBlockFaq[];
    }

    interface IBlockFaq {
        title?: (string|null);
        content?: (meta.ITextFaq[]|null);
    }

    class BlockFaq implements IBlockFaq {
        constructor(properties?: meta.IBlockFaq);
        public title: string;
        public content: meta.ITextFaq[];
    }

    interface ITextFaq {
        title?: (string|null);
        answer?: (string|null);
    }

    class TextFaq implements ITextFaq {
        constructor(properties?: meta.ITextFaq);
        public title: string;
        public answer: string;
    }

    interface IParamsStoresCities {
        offset?: (number|null);
        limit?: (number|null);
    }

    class ParamsStoresCities implements IParamsStoresCities {
        constructor(properties?: meta.IParamsStoresCities);
        public offset: number;
        public limit: number;
    }

    interface ICity {
        city_id?: (number|null);
        title?: (string|null);
        stores?: (number|null);
    }

    class City implements ICity {
        constructor(properties?: meta.ICity);
        public city_id: number;
        public title: string;
        public stores: number;
    }

    interface IResponseStoresCities {
        result?: (meta.ICity[]|null);
    }

    class ResponseStoresCities implements IResponseStoresCities {
        constructor(properties?: meta.IResponseStoresCities);
        public result: meta.ICity[];
    }

    interface IParamsStores {
        city_id?: (number|null);
        offset?: (number|null);
        limit?: (number|null);
    }

    class ParamsStores implements IParamsStores {
        constructor(properties?: meta.IParamsStores);
        public city_id: number;
        public offset: number;
        public limit: number;
    }

    interface IresponseStoresByCity {
        city_id?: (number|null);
        title?: (string|null);
        total?: (number|null);
        stores?: (meta.IOfflineStore[]|null);
    }

    class responseStoresByCity implements IresponseStoresByCity {
        constructor(properties?: meta.IresponseStoresByCity);
        public city_id: number;
        public title: string;
        public total: number;
        public stores: meta.IOfflineStore[];
    }

    interface IParamsCountries {
        offset?: (number|null);
        limit?: (number|null);
    }

    class ParamsCountries implements IParamsCountries {
        constructor(properties?: meta.IParamsCountries);
        public offset: number;
        public limit: number;
    }

    interface IResponseCountries {
        total?: (number|null);
        result?: (meta.ICountry[]|null);
    }

    class ResponseCountries implements IResponseCountries {
        constructor(properties?: meta.IResponseCountries);
        public total: number;
        public result: meta.ICountry[];
    }

    interface ICountry {
        id?: (number|Long|null);
        country_code?: (string|null);
        prefix?: (string|null);
        title_ru?: (string|null);
    }

    class Country implements ICountry {
        constructor(properties?: meta.ICountry);
        public id: (number|Long);
        public country_code: string;
        public prefix: string;
        public title_ru: string;
    }
}

export namespace mindbox {

    class User extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public info(request: mindbox.IParamsUser, callback: mindbox.User.InfoCallback): void;
        public info(request: mindbox.IParamsUser): Promise<mindbox.ResponseUser>;
        public orders(request: mindbox.IParamsOrders, callback: mindbox.User.OrdersCallback): void;
        public orders(request: mindbox.IParamsOrders): Promise<mindbox.ResponseOrders>;
    }

    namespace User {

        type InfoCallback = (error: (Error|null), response?: mindbox.ResponseUser) => void;

        type OrdersCallback = (error: (Error|null), response?: mindbox.ResponseOrders) => void;
    }

    class Mobile extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public creation(request: mindbox.IParamsCreation, callback: mindbox.Mobile.CreationCallback): void;
        public creation(request: mindbox.IParamsCreation): Promise<mindbox.ResponseCreation>;
        public authorization(request: mindbox.IParamsAuthorization, callback: mindbox.Mobile.AuthorizationCallback): void;
        public authorization(request: mindbox.IParamsAuthorization): Promise<mindbox.ResponseAuthorization>;
        public registration(request: mindbox.IParamsRegistration, callback: mindbox.Mobile.RegistrationCallback): void;
        public registration(request: mindbox.IParamsRegistration): Promise<mindbox.ResponseRegistration>;
        public code(request: mindbox.IParamsCode, callback: mindbox.Mobile.CodeCallback): void;
        public code(request: mindbox.IParamsCode): Promise<mindbox.ResponseCode>;
        public checkCode(request: mindbox.IParamsCheckCode, callback: mindbox.Mobile.CheckCodeCallback): void;
        public checkCode(request: mindbox.IParamsCheckCode): Promise<mindbox.ResponseCheckCode>;
        public editUser(request: mindbox.IParamsEditUser, callback: mindbox.Mobile.EditUserCallback): void;
        public editUser(request: mindbox.IParamsEditUser): Promise<mindbox.ResponseEditUser>;
    }

    namespace Mobile {

        type CreationCallback = (error: (Error|null), response?: mindbox.ResponseCreation) => void;

        type AuthorizationCallback = (error: (Error|null), response?: mindbox.ResponseAuthorization) => void;

        type RegistrationCallback = (error: (Error|null), response?: mindbox.ResponseRegistration) => void;

        type CodeCallback = (error: (Error|null), response?: mindbox.ResponseCode) => void;

        type CheckCodeCallback = (error: (Error|null), response?: mindbox.ResponseCheckCode) => void;

        type EditUserCallback = (error: (Error|null), response?: mindbox.ResponseEditUser) => void;
    }

    interface IParamsUser {
        client_id?: (string|null);
    }

    class ParamsUser implements IParamsUser {
        constructor(properties?: mindbox.IParamsUser);
        public client_id: string;
    }

    interface IResponseUser {
        first_name?: (string|null);
        last_name?: (string|null);
        email?: (string|null);
        phone?: (string|null);
        bonus_total?: (number|null);
        bonus_available?: (number|null);
        bonus_blocked?: (number|null);
        total_paid_amount?: (number|null);
    }

    class ResponseUser implements IResponseUser {
        constructor(properties?: mindbox.IResponseUser);
        public first_name: string;
        public last_name: string;
        public email: string;
        public phone: string;
        public bonus_total: number;
        public bonus_available: number;
        public bonus_blocked: number;
        public total_paid_amount: number;
    }

    interface IParamsOrders {
        client_id?: (string|null);
    }

    class ParamsOrders implements IParamsOrders {
        constructor(properties?: mindbox.IParamsOrders);
        public client_id: string;
    }

    interface IResponseOrders {
        total?: (number|null);
        result?: (mindbox.IOrder[]|null);
    }

    class ResponseOrders implements IResponseOrders {
        constructor(properties?: mindbox.IResponseOrders);
        public total: number;
        public result: mindbox.IOrder[];
    }

    interface IOrder {
        order_id?: (string|null);
        created_date?: (string|null);
        payment_type?: (string|null);
        discounted_total_price?: (number|null);
        payment_amount?: (number|null);
        applied_discount?: (number|null);
        acquired_balance_change?: (number|null);
    }

    class Order implements IOrder {
        constructor(properties?: mindbox.IOrder);
        public order_id: string;
        public created_date: string;
        public payment_type: string;
        public discounted_total_price: number;
        public payment_amount: number;
        public applied_discount: number;
        public acquired_balance_change: number;
    }

    interface IParamsAuthorization {
        device_uuid?: (string|null);
    }

    class ParamsAuthorization implements IParamsAuthorization {
        constructor(properties?: mindbox.IParamsAuthorization);
        public device_uuid: string;
    }

    interface IResponseAuthorization {
        ok?: (boolean|null);
    }

    class ResponseAuthorization implements IResponseAuthorization {
        constructor(properties?: mindbox.IResponseAuthorization);
        public ok: boolean;
    }

    interface IParamsRegistration {
        device_uuid?: (string|null);
        client_id?: (string|null);
        email?: (string|null);
        full_name?: (string|null);
        mobile_phone?: (string|null);
    }

    class ParamsRegistration implements IParamsRegistration {
        constructor(properties?: mindbox.IParamsRegistration);
        public device_uuid: string;
        public client_id: string;
        public email: string;
        public full_name: string;
        public mobile_phone: string;
    }

    interface IResponseRegistration {
        ok?: (boolean|null);
    }

    class ResponseRegistration implements IResponseRegistration {
        constructor(properties?: mindbox.IResponseRegistration);
        public ok: boolean;
    }

    interface IParamsCode {
        mobile_phone?: (string|null);
    }

    class ParamsCode implements IParamsCode {
        constructor(properties?: mindbox.IParamsCode);
        public mobile_phone: string;
    }

    interface IResponseCode {
        ok?: (boolean|null);
    }

    class ResponseCode implements IResponseCode {
        constructor(properties?: mindbox.IResponseCode);
        public ok: boolean;
    }

    interface IParamsCheckCode {
        mobile_phone?: (string|null);
        code?: (string|null);
    }

    class ParamsCheckCode implements IParamsCheckCode {
        constructor(properties?: mindbox.IParamsCheckCode);
        public mobile_phone: string;
        public code: string;
    }

    interface IResponseCheckCode {
        ok?: (boolean|null);
        status?: (string|null);
        client_id?: (string|null);
        mindbox_id?: (number|Long|null);
    }

    class ResponseCheckCode implements IResponseCheckCode {
        constructor(properties?: mindbox.IResponseCheckCode);
        public ok: boolean;
        public status: string;
        public client_id: string;
        public mindbox_id: (number|Long);
    }

    interface IParamsCreation {
        device_uuid?: (string|null);
        id?: (string|null);
        vendor?: (string|null);
        model?: (string|null);
    }

    class ParamsCreation implements IParamsCreation {
        constructor(properties?: mindbox.IParamsCreation);
        public device_uuid: string;
        public id: string;
        public vendor: string;
        public model: string;
    }

    interface IResponseCreation {
        ok?: (boolean|null);
    }

    class ResponseCreation implements IResponseCreation {
        constructor(properties?: mindbox.IResponseCreation);
        public ok: boolean;
    }

    interface IParamsEditUser {
        device_uuid?: (string|null);
        client_id?: (string|null);
        mobile_phone?: (string|null);
    }

    class ParamsEditUser implements IParamsEditUser {
        constructor(properties?: mindbox.IParamsEditUser);
        public device_uuid: string;
        public client_id: string;
        public mobile_phone: string;
    }

    interface IResponseEditUser {
        ok?: (boolean|null);
    }

    class ResponseEditUser implements IResponseEditUser {
        constructor(properties?: mindbox.IResponseEditUser);
        public ok: boolean;
    }
}

export namespace orders {

    class Offline extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public byClient(request: orders.IParamsOfflineByClient, callback: orders.Offline.ByClientCallback): void;
        public byClient(request: orders.IParamsOfflineByClient): Promise<orders.ResponseOfflineByClient>;
    }

    namespace Offline {

        type ByClientCallback = (error: (Error|null), response?: orders.ResponseOfflineByClient) => void;
    }

    class Online extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public byClient(request: orders.IParamsOnlineByClient, callback: orders.Online.ByClientCallback): void;
        public byClient(request: orders.IParamsOnlineByClient): Promise<orders.ResponseOnlineByClient>;
    }

    namespace Online {

        type ByClientCallback = (error: (Error|null), response?: orders.ResponseOnlineByClient) => void;
    }

    interface IParamsOfflineByClient {
        clientId?: (number|null);
    }

    class ParamsOfflineByClient implements IParamsOfflineByClient {
        constructor(properties?: orders.IParamsOfflineByClient);
        public clientId: number;
    }

    interface IResponseOfflineByClient {
        orders?: (orders.IOfflineOrder[]|null);
    }

    class ResponseOfflineByClient implements IResponseOfflineByClient {
        constructor(properties?: orders.IResponseOfflineByClient);
        public orders: orders.IOfflineOrder[];
    }

    interface IParamsOnlineByClient {
        clientId?: (number|null);
    }

    class ParamsOnlineByClient implements IParamsOnlineByClient {
        constructor(properties?: orders.IParamsOnlineByClient);
        public clientId: number;
    }

    interface IResponseOnlineByClient {
        order?: (number[]|null);
    }

    class ResponseOnlineByClient implements IResponseOnlineByClient {
        constructor(properties?: orders.IResponseOnlineByClient);
        public order: number[];
    }

    interface IOfflineOrder {
        store_name?: (string|null);
        store_id?: (number|null);
        cashbox_id?: (number|null);
        order_id?: (string|null);
        row_receipt?: (number|null);
        date?: (string|null);
        time?: (string|null);
        article?: (string|null);
        title?: (string|null);
        color?: (string|null);
        size?: (string|null);
        barcode?: (string|null);
        qty?: (number|null);
        total_gross?: (number|null);
        discount?: (number|null);
        total?: (number|null);
        client_id?: (number|null);
        seller?: (string|null);
        family?: (string|null);
        operation?: (number|null);
        source?: (string|null);
        bonuses_wasted?: (number|null);
        bonuses_accrued?: (number|null);
    }

    class OfflineOrder implements IOfflineOrder {
        constructor(properties?: orders.IOfflineOrder);
        public store_name: string;
        public store_id: number;
        public cashbox_id: number;
        public order_id: string;
        public row_receipt: number;
        public date: string;
        public time: string;
        public article: string;
        public title: string;
        public color: string;
        public size: string;
        public barcode: string;
        public qty: number;
        public total_gross: number;
        public discount: number;
        public total: number;
        public client_id: number;
        public seller: string;
        public family: string;
        public operation: number;
        public source: string;
        public bonuses_wasted: number;
        public bonuses_accrued: number;
    }
}

export namespace payments {

    class Payments extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public ping(request: google.protobuf.IEmpty, callback: payments.Payments.PingCallback): void;
        public ping(request: google.protobuf.IEmpty): Promise<payments.PingResponse>;
        public getCardsByUserID(request: payments.IParamsGetCardByUserID, callback: payments.Payments.GetCardsByUserIDCallback): void;
        public getCardsByUserID(request: payments.IParamsGetCardByUserID): Promise<payments.ResponseGetCardByUserID>;
        public saveUserCard(request: payments.IUserCard, callback: payments.Payments.SaveUserCardCallback): void;
        public saveUserCard(request: payments.IUserCard): Promise<payments.ResponseSuccess>;
        public deleteCardByID(request: payments.IParamsDeleteCardByID, callback: payments.Payments.DeleteCardByIDCallback): void;
        public deleteCardByID(request: payments.IParamsDeleteCardByID): Promise<payments.ResponseSuccess>;
    }

    namespace Payments {

        type PingCallback = (error: (Error|null), response?: payments.PingResponse) => void;

        type GetCardsByUserIDCallback = (error: (Error|null), response?: payments.ResponseGetCardByUserID) => void;

        type SaveUserCardCallback = (error: (Error|null), response?: payments.ResponseSuccess) => void;

        type DeleteCardByIDCallback = (error: (Error|null), response?: payments.ResponseSuccess) => void;
    }

    interface IPingResponse {
        response?: (string|null);
    }

    class PingResponse implements IPingResponse {
        constructor(properties?: payments.IPingResponse);
        public response: string;
    }

    interface IParamsGetCardByUserID {
        user_id?: (number|null);
    }

    class ParamsGetCardByUserID implements IParamsGetCardByUserID {
        constructor(properties?: payments.IParamsGetCardByUserID);
        public user_id: number;
    }

    interface IResponseGetCardByUserID {
        total?: (number|null);
        cards?: (payments.IUserCard[]|null);
    }

    class ResponseGetCardByUserID implements IResponseGetCardByUserID {
        constructor(properties?: payments.IResponseGetCardByUserID);
        public total: number;
        public cards: payments.IUserCard[];
    }

    interface IResponseSuccess {
        ok?: (boolean|null);
    }

    class ResponseSuccess implements IResponseSuccess {
        constructor(properties?: payments.IResponseSuccess);
        public ok: boolean;
    }

    interface IParamsDeleteCardByID {
        card_id?: (number|null);
    }

    class ParamsDeleteCardByID implements IParamsDeleteCardByID {
        constructor(properties?: payments.IParamsDeleteCardByID);
        public card_id: number;
    }

    interface IUserCard {
        id?: (number|null);
        user_id?: (number|null);
        type?: (string|null);
        vendor?: (string|null);
        number?: (string|null);
        exp_date?: (string|null);
        active?: (boolean|null);
        test?: (boolean|null);
    }

    class UserCard implements IUserCard {
        constructor(properties?: payments.IUserCard);
        public id: number;
        public user_id: number;
        public type: string;
        public vendor: string;
        public number: string;
        public exp_date: string;
        public active: boolean;
        public test: boolean;
    }
}
