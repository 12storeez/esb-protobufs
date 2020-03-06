import * as $protobuf from "protobufjs";
export namespace feedbacks {

    class Mobile extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public app(request: feedbacks.IRequestApp, callback: feedbacks.Mobile.AppCallback): void;
        public app(request: feedbacks.IRequestApp): Promise<feedbacks.ResponseOk>;
        public store(request: feedbacks.IRequestStore, callback: feedbacks.Mobile.StoreCallback): void;
        public store(request: feedbacks.IRequestStore): Promise<feedbacks.ResponseOk>;
        public order(request: feedbacks.IRequestOrder, callback: feedbacks.Mobile.OrderCallback): void;
        public order(request: feedbacks.IRequestOrder): Promise<feedbacks.ResponseOk>;
        public categories(request: google.protobuf.IEmpty, callback: feedbacks.Mobile.CategoriesCallback): void;
        public categories(request: google.protobuf.IEmpty): Promise<feedbacks.ResponseCategories>;
        public choices(request: feedbacks.IRequestChoices, callback: feedbacks.Mobile.ChoicesCallback): void;
        public choices(request: feedbacks.IRequestChoices): Promise<feedbacks.ResponseChoices>;
    }

    namespace Mobile {

        type AppCallback = (error: (Error|null), response?: feedbacks.ResponseOk) => void;

        type StoreCallback = (error: (Error|null), response?: feedbacks.ResponseOk) => void;

        type OrderCallback = (error: (Error|null), response?: feedbacks.ResponseOk) => void;

        type CategoriesCallback = (error: (Error|null), response?: feedbacks.ResponseCategories) => void;

        type ChoicesCallback = (error: (Error|null), response?: feedbacks.ResponseChoices) => void;
    }

    interface IResponseOk {
        ok?: (boolean|null);
    }

    class ResponseOk implements IResponseOk {
        constructor(properties?: feedbacks.IResponseOk);
        public ok: boolean;
    }

    interface IRequestApp {
        client_id?: (number|Long|null);
        app_version?: (string|null);
        rate?: (string|null);
        reason?: (number[]|null);
        comment?: (string|null);
        date?: (string|null);
    }

    class RequestApp implements IRequestApp {
        constructor(properties?: feedbacks.IRequestApp);
        public client_id: (number|Long);
        public app_version: string;
        public rate: string;
        public reason: number[];
        public comment: string;
        public date: string;
    }

    interface IRequestStore {
        client_id?: (number|Long|null);
        rate?: (string|null);
        reason?: (number[]|null);
        comment?: (string|null);
        city?: (string|null);
        date?: (string|null);
    }

    class RequestStore implements IRequestStore {
        constructor(properties?: feedbacks.IRequestStore);
        public client_id: (number|Long);
        public rate: string;
        public reason: number[];
        public comment: string;
        public city: string;
        public date: string;
    }

    interface IRequestOrder {
        order_id?: (string|null);
        client_id?: (number|Long|null);
        payment_type?: (string|null);
        delivery_type?: (string|null);
        rate?: (string|null);
        reason?: (number[]|null);
        comment?: (string|null);
        date_order?: (string|null);
        date_rate?: (string|null);
        store_name?: (string|null);
        transport_company?: (string|null);
        country?: (string|null);
        city?: (string|null);
    }

    class RequestOrder implements IRequestOrder {
        constructor(properties?: feedbacks.IRequestOrder);
        public order_id: string;
        public client_id: (number|Long);
        public payment_type: string;
        public delivery_type: string;
        public rate: string;
        public reason: number[];
        public comment: string;
        public date_order: string;
        public date_rate: string;
        public store_name: string;
        public transport_company: string;
        public country: string;
        public city: string;
    }

    interface IChoice {
        id?: (number|null);
        title?: (string|null);
        category_id?: (number|null);
    }

    class Choice implements IChoice {
        constructor(properties?: feedbacks.IChoice);
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

    interface IResponseChoices {
        result?: (feedbacks.IChoice[]|null);
    }

    class ResponseChoices implements IResponseChoices {
        constructor(properties?: feedbacks.IResponseChoices);
        public result: feedbacks.IChoice[];
    }

    interface IResponseCategories {
        result?: (feedbacks.ICategory[]|null);
    }

    class ResponseCategories implements IResponseCategories {
        constructor(properties?: feedbacks.IResponseCategories);
        public result: feedbacks.ICategory[];
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

export namespace health {

    class Health extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public check(request: health.IHealthCheckRequest, callback: health.Health.CheckCallback): void;
        public check(request: health.IHealthCheckRequest): Promise<health.HealthCheckResponse>;
    }

    namespace Health {

        type CheckCallback = (error: (Error|null), response?: health.HealthCheckResponse) => void;
    }

    interface IHealthCheckRequest {
        service?: (string|null);
    }

    class HealthCheckRequest implements IHealthCheckRequest {
        constructor(properties?: health.IHealthCheckRequest);
        public service: string;
    }

    interface IHealthCheckResponse {
        status?: (health.HealthCheckResponse.ServingStatus|null);
    }

    class HealthCheckResponse implements IHealthCheckResponse {
        constructor(properties?: health.IHealthCheckResponse);
        public status: health.HealthCheckResponse.ServingStatus;
    }

    namespace HealthCheckResponse {

        enum ServingStatus {
            UNKNOWN = 0,
            SERVING = 1,
            NOT_SERVING = 2
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

export class Mobile extends $protobuf.rpc.Service {
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
    public contacts(request: google.protobuf.IEmpty, callback: Mobile.ContactsCallback): void;
    public contacts(request: google.protobuf.IEmpty): Promise<ResponseMobileAPIContacts>;
    public about(request: google.protobuf.IEmpty, callback: Mobile.AboutCallback): void;
    public about(request: google.protobuf.IEmpty): Promise<ResponseMobileApiAbout>;
    public faq(request: google.protobuf.IEmpty, callback: Mobile.FaqCallback): void;
    public faq(request: google.protobuf.IEmpty): Promise<ResponseFaq>;
    public countries(request: IParamsCountries, callback: Mobile.CountriesCallback): void;
    public countries(request: IParamsCountries): Promise<ResponseCountries>;
}

export namespace Mobile {

    type ContactsCallback = (error: (Error|null), response?: ResponseMobileAPIContacts) => void;

    type AboutCallback = (error: (Error|null), response?: ResponseMobileApiAbout) => void;

    type FaqCallback = (error: (Error|null), response?: ResponseFaq) => void;

    type CountriesCallback = (error: (Error|null), response?: ResponseCountries) => void;
}

export class Stores extends $protobuf.rpc.Service {
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
    public all(request: IparamsStores, callback: Stores.AllCallback): void;
    public all(request: IparamsStores): Promise<ResponseAllOfflineStoresInfo>;
    public byID(request: IparamsOfflineStoreInfoByID, callback: Stores.ByIDCallback): void;
    public byID(request: IparamsOfflineStoreInfoByID): Promise<ResponseOfflineStoreInfoByID>;
    public cities(request: IparamsStoresCities, callback: Stores.CitiesCallback): void;
    public cities(request: IparamsStoresCities): Promise<ResponseStoresCities>;
}

export namespace Stores {

    type AllCallback = (error: (Error|null), response?: ResponseAllOfflineStoresInfo) => void;

    type ByIDCallback = (error: (Error|null), response?: ResponseOfflineStoreInfoByID) => void;

    type CitiesCallback = (error: (Error|null), response?: ResponseStoresCities) => void;

    type ByCityCallback = (error: (Error|null), response?: responseStoresByCity) => void;
}

export interface IResponseAllOfflineStoresInfo {
    stores?: (IOfflineStore[]|null);
}

export class ResponseAllOfflineStoresInfo implements IResponseAllOfflineStoresInfo {
    constructor(properties?: IResponseAllOfflineStoresInfo);
    public stores: IOfflineStore[];
}

export interface IOfflineStore {
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

export class OfflineStore implements IOfflineStore {
    constructor(properties?: IOfflineStore);
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

export interface IparamsOfflineStoreInfoByID {
    store_id?: (number|null);
}

export class paramsOfflineStoreInfoByID implements IparamsOfflineStoreInfoByID {
    constructor(properties?: IparamsOfflineStoreInfoByID);
    public store_id: number;
}

export interface IResponseOfflineStoreInfoByID {
    store?: (IOfflineStore|null);
}

export class ResponseOfflineStoreInfoByID implements IResponseOfflineStoreInfoByID {
    constructor(properties?: IResponseOfflineStoreInfoByID);
    public store?: (IOfflineStore|null);
}

export interface IResponseMobileAPIContacts {
    contacts?: (IContact[]|null);
}

export class ResponseMobileAPIContacts implements IResponseMobileAPIContacts {
    constructor(properties?: IResponseMobileAPIContacts);
    public contacts: IContact[];
}

export interface IContact {
    title?: (string|null);
    subtitle?: (string|null);
    text?: (string|null);
}

export class Contact implements IContact {
    constructor(properties?: IContact);
    public title: string;
    public subtitle: string;
    public text: string;
}

export interface IResponseMobileApiAbout {
    about?: (string|null);
    mission?: (string|null);
    blocks?: (IBlock[]|null);
    image_url?: (string|null);
}

export class ResponseMobileApiAbout implements IResponseMobileApiAbout {
    constructor(properties?: IResponseMobileApiAbout);
    public about: string;
    public mission: string;
    public blocks: IBlock[];
    public image_url: string;
}

export interface IBlock {
    title?: (string|null);
    value?: (string|null);
}

export class Block implements IBlock {
    constructor(properties?: IBlock);
    public title: string;
    public value: string;
}

export interface IResponseFaq {
    result?: (IBlockFaq[]|null);
}

export class ResponseFaq implements IResponseFaq {
    constructor(properties?: IResponseFaq);
    public result: IBlockFaq[];
}

export interface IBlockFaq {
    title?: (string|null);
    content?: (ITextFaq[]|null);
}

export class BlockFaq implements IBlockFaq {
    constructor(properties?: IBlockFaq);
    public title: string;
    public content: ITextFaq[];
}

export interface ITextFaq {
    title?: (string|null);
    answer?: (string|null);
}

export class TextFaq implements ITextFaq {
    constructor(properties?: ITextFaq);
    public title: string;
    public answer: string;
}

export interface IparamsStoresCities {
    offset?: (number|null);
    limit?: (number|null);
}

export class paramsStoresCities implements IparamsStoresCities {
    constructor(properties?: IparamsStoresCities);
    public offset: number;
    public limit: number;
}

export interface ICity {
    city_id?: (number|null);
    title?: (string|null);
    stores_count?: (number|null);
}

export class City implements ICity {
    constructor(properties?: ICity);
    public city_id: number;
    public title: string;
}

export interface IResponseStoresCities {
    cities?: (ICity[]|null);
}

export class ResponseStoresCities implements IResponseStoresCities {
    constructor(properties?: IResponseStoresCities);
    public cities: ICity[];
}

export interface IparamsStores {
    city_id?: (number|null);
    offset?: (number|null);
    limit?: (number|null);
}

export class paramsStoresByCity implements IparamsStores {
    constructor(properties?: IparamsStores);
    public city_id: number;
    public offset: number;
    public limit: number;
}

export interface IresponseStoresByCity {
    city_id?: (number|null);
    title?: (string|null);
    total?: (number|null);
    stores?: (IOfflineStore[]|null);
}

export class responseStoresByCity implements IresponseStoresByCity {
    constructor(properties?: IresponseStoresByCity);
    public city_id: number;
    public title: string;
    public total: number;
    public stores: IOfflineStore[];
}

export interface IParamsCountries {
    offset?: (number|null);
    limit?: (number|null);
}

export class ParamsCountries implements IParamsCountries {
    constructor(properties?: IParamsCountries);
    public offset: number;
    public limit: number;
}

export interface IResponseCountries {
    total?: (number|null);
    result?: (ICountry[]|null);
}

export class ResponseCountries implements IResponseCountries {
    constructor(properties?: IResponseCountries);
    public total: number;
    public result: ICountry[];
}

export interface ICountry {
    id?: (number|Long|null);
    country_code?: (string|null);
    prefix?: (string|null);
    title_ru?: (string|null);
}

export class Country implements ICountry {
    constructor(properties?: ICountry);
    public id: (number|Long);
    public country_code: string;
    public prefix: string;
    public title_ru: string;
}

export namespace mindbox {

    class Mindbox extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public ping(request: google.protobuf.IEmpty, callback: mindbox.Mindbox.PingCallback): void;
        public ping(request: google.protobuf.IEmpty): Promise<mindbox.PingResponse>;
        public userInformation(request: mindbox.IParamsUserInformation, callback: mindbox.Mindbox.UserInformationCallback): void;
        public userInformation(request: mindbox.IParamsUserInformation): Promise<mindbox.ResponseUserInformation>;
        public ordersHistory(request: mindbox.IParamsOrdersHistory, callback: mindbox.Mindbox.OrdersHistoryCallback): void;
        public ordersHistory(request: mindbox.IParamsOrdersHistory): Promise<mindbox.ResponseOrdersHistory>;
    }

    namespace Mindbox {

        type PingCallback = (error: (Error|null), response?: mindbox.PingResponse) => void;

        type UserInformationCallback = (error: (Error|null), response?: mindbox.ResponseUserInformation) => void;

        type OrdersHistoryCallback = (error: (Error|null), response?: mindbox.ResponseOrdersHistory) => void;
    }

    interface IPingResponse {
        response?: (string|null);
    }

    class PingResponse implements IPingResponse {
        constructor(properties?: mindbox.IPingResponse);
        public response: string;
    }

    interface IParamsUserInformation {
        client_id?: (string|null);
    }

    class ParamsUserInformation implements IParamsUserInformation {
        constructor(properties?: mindbox.IParamsUserInformation);
        public client_id: string;
    }

    interface IResponseUserInformation {
        first_name?: (string|null);
        last_name?: (string|null);
        email?: (string|null);
        phone?: (string|null);
        bonus_total?: (number|null);
        bonus_available?: (number|null);
        bonus_blocked?: (number|null);
        total_paid_amount?: (number|null);
    }

    class ResponseUserInformation implements IResponseUserInformation {
        constructor(properties?: mindbox.IResponseUserInformation);
        public first_name: string;
        public last_name: string;
        public email: string;
        public phone: string;
        public bonus_total: number;
        public bonus_available: number;
        public bonus_blocked: number;
        public total_paid_amount: number;
    }

    interface IParamsOrdersHistory {
        client_id?: (string|null);
    }

    class ParamsOrdersHistory implements IParamsOrdersHistory {
        constructor(properties?: mindbox.IParamsOrdersHistory);
        public client_id: string;
    }

    interface IResponseOrdersHistory {
        total_count?: (number|null);
        orders?: (mindbox.Iorder[]|null);
    }

    class ResponseOrdersHistory implements IResponseOrdersHistory {
        constructor(properties?: mindbox.IResponseOrdersHistory);
        public total_count: number;
        public orders: mindbox.Iorder[];
    }

    interface Iorder {
        id?: (string|null);
        created_date?: (string|null);
        payment_type?: (string|null);
        discounted_total_price?: (number|null);
        payment_amount?: (number|null);
        applied_discount?: (number|null);
        acquired_balance_change?: (number|null);
    }

    class order implements Iorder {
        constructor(properties?: mindbox.Iorder);
        public id: string;
        public created_date: string;
        public payment_type: string;
        public discounted_total_price: number;
        public payment_amount: number;
        public applied_discount: number;
        public acquired_balance_change: number;
    }
}

export namespace orders {

    class Orders extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public ping(request: google.protobuf.IEmpty, callback: orders.Orders.PingCallback): void;
        public ping(request: google.protobuf.IEmpty): Promise<orders.PingResponse>;
        public offlineByClient(request: orders.IParamsOfflineByClient, callback: orders.Orders.OfflineByClientCallback): void;
        public offlineByClient(request: orders.IParamsOfflineByClient): Promise<orders.ResponseOfflineByClient>;
        public onlineByClient(request: orders.IParamsOnlineByClient, callback: orders.Orders.OnlineByClientCallback): void;
        public onlineByClient(request: orders.IParamsOnlineByClient): Promise<orders.ResponseOnlineByClient>;
    }

    namespace Orders {

        type PingCallback = (error: (Error|null), response?: orders.PingResponse) => void;

        type OfflineByClientCallback = (error: (Error|null), response?: orders.ResponseOfflineByClient) => void;

        type OnlineByClientCallback = (error: (Error|null), response?: orders.ResponseOnlineByClient) => void;
    }

    interface IPingResponse {
        response?: (string|null);
    }

    class PingResponse implements IPingResponse {
        constructor(properties?: orders.IPingResponse);
        public response: string;
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
