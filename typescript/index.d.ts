import { Observable } from "rxjs";

export namespace mindbox {
  export interface User {
    info(request: ParamsUser, metadata?: any): Observable<ResponseUser>;
    orders(request: ParamsOrders, metadata?: any): Observable<ResponseOrders>;
    sendOSMICard(
      request: ParamsOSMICard,
      metadata?: any
    ): Observable<ResponseOSMICard>;
  }

  export interface Mobile {
    initDevice(
      request: InitDeviceParams,
      metadata?: any
    ): Observable<InitDeviceResponse>;
    initClient(
      request: InitClientParams,
      metadata?: any
    ): Observable<InitClientResponse>;
    removeDevice(
      request: RemoveDeviceParams,
      metadata?: any
    ): Observable<RemoveDeviceResponse>;
    code(request: ParamsCode, metadata?: any): Observable<ResponseCode>;
    checkCode(
      request: ParamsCheckCode,
      metadata?: any
    ): Observable<ResponseCheckCode>;
    editUser(
      request: ParamsEditUser,
      metadata?: any
    ): Observable<ResponseEditUser>;
    isUserExist(
      request: IsUserExistParams,
      metadata?: any
    ): Observable<IsUserExistResponse>;
  }

  export interface IsUserExistParams {
    mobile_phone: string;
  }

  export interface IsUserExistResponse {
    ok: boolean;
    client_id: string;
  }

  export interface InitDeviceParams {
    device_id: string;
    apns_token: string;
  }

  export interface InitDeviceResponse {
    ok: boolean;
  }

  export interface InitClientParams {
    device_id: string;
    client_id: string;
  }

  export interface InitClientResponse {
    ok: boolean;
  }

  export interface ParamsUser {
    client_id: string;
  }

  export interface ResponseUser {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    bonus_total: number;
    bonus_available: number;
    bonus_blocked: number;
    total_paid_amount: number;
  }

  export interface ParamsOrders {
    client_id: string;
  }

  export interface ResponseOrders {
    total: number;
    result: Order[];
  }

  export interface Order {
    order_id: string;
    created_date: string;
    payment_type: string;
    discounted_total_price: number;
    payment_amount: number;
    applied_discount: number;
    acquired_balance_change: number;
    created_ts: number;
  }

  export interface ParamsCode {
    mobile_phone: string;
    device_id: string;
  }

  export interface ResponseCode {
    ok: boolean;
  }

  export interface ParamsCheckCode {
    mobile_phone: string;
    code: string;
  }

  export interface ResponseCheckCode {
    ok: boolean;
    status: string;
    client_id: string;
    mindbox_id: number;
  }

  export interface ParamsEditUser {
    device_uuid: string;
    client_id: string;
    mobile_phone: string;
  }

  export interface ResponseEditUser {
    ok: boolean;
  }

  export interface ParamsOSMICard {
    client_id: string;
  }

  export interface ResponseOSMICard {
    ok: boolean;
  }

  export interface RemoveDeviceParams {
    device_id: string;
  }

  export interface RemoveDeviceResponse {
    ok: boolean;
  }
}

export namespace mercaux {
  export interface Stocks {
    get(
      request: StocksGetParams,
      metadata?: any
    ): Observable<StocksGetResponse>;
  }

  export interface Stores {
    get(request: any, metadata?: any): Observable<StoresGetResponse>;
  }

  export interface Sellers {
    get(request: any, metadata?: any): Observable<SellersGetResponse>;
  }

  export interface Orders {
    new (request: OrdersNewParams, metadata?: any): Observable<
      OrdersNewResponse
    >;
  }

  export interface StocksGetParams {
    page: number;
  }

  export interface StocksGetResponse {
    pages: number;
    page: number;
    stocks: Stock[];
  }

  export interface Stock {
    barcode: string;
    category: string;
    family: string;
    product_name: string;
    product_name_en: string;
    picture: string;
    url: string;
    is_active: boolean;
    price: number;
    article: string;
    size: string;
    color: string;
    fabric: string;
    model: string;
    gender: string;
    sizes: string[];
    barcode_alt: string[];
    discount: number;
    total_look: string[];
    description: string;
    images: string[];
    site_category: string[];
    size_description: string;
    recommendations: string[];
    alternatives: string[];
    video: string;
    instashop: string[];
    country: string;
    quantity: Quantity[];
  }

  export interface Quantity {
    store_id: number;
    available: number;
    reserved: number;
    discount: number;
  }

  export interface StoresGetResponse {
    stores: Store[];
  }

  export interface Store {
    store_id: number;
    short_title: string;
    address: string;
    phone: string;
    geo: string;
    city: string;
    country: string;
    active: boolean;
  }

  export interface SellersGetResponse {
    sellers: Seller[];
  }

  export interface Seller {
    store_id: number;
    seller_id: string;
    seller_name: string;
  }

  export interface OrdersNewParams {
    order: Order;
    source: string;
    seller_id: string;
  }

  export interface Order {
    last_name: string;
    first_name: string;
    phone: string;
    email: string;
    store_id: number;
    items: OrderItem[];
  }

  export interface OrderItem {
    id: string;
    quantity: number;
    price: number;
  }

  export interface OrdersNewResponse {
    ok: boolean;
    order_id: string;
    errors: OrderError[];
  }

  export interface OrderError {
    code: number;
    message: string;
    price: string;
    available_quantity: number;
    barcode: number;
  }
}

export namespace payments {
  export interface Payments {
    getCardsByUserID(
      request: ParamsGetCardByUserID,
      metadata?: any
    ): Observable<ResponseGetCardByUserID>;
    saveUserCard(
      request: UserCard,
      metadata?: any
    ): Observable<ResponseSuccess>;
    deleteCardByID(
      request: ParamsDeleteCardByID,
      metadata?: any
    ): Observable<ResponseSuccess>;
  }

  export interface ParamsGetCardByUserID {
    user_id: number;
  }

  export interface ResponseGetCardByUserID {
    total: number;
    cards: UserCard[];
  }

  export interface ResponseSuccess {
    ok: boolean;
  }

  export interface ParamsDeleteCardByID {
    card_id: number;
  }

  export interface UserCard {
    id: number;
    user_id: number;
    type: string;
    vendor: string;
    number: string;
    exp_date: string;
    active: boolean;
    test: boolean;
  }
}

export namespace feedbacks {
  export interface Mobile {
    app(request: ParamsApp, metadata?: any): Observable<ResponseOk>;
    store(request: ParamsStore, metadata?: any): Observable<ResponseOk>;
    order(request: ParamsOrder, metadata?: any): Observable<ResponseOk>;
    categories(request: any, metadata?: any): Observable<ResponseCategories>;
    reasonsByOrder(
      request: ParamsReasonsByOrder,
      metadata?: any
    ): Observable<ResponseReasons>;
    reasonsByStore(request: any, metadata?: any): Observable<ResponseReasons>;
    canBeSaved(
      request: CanBeSavedParams,
      metadata?: any
    ): Observable<ResponseOk>;
  }

  export interface Store {
    new (request: NewParams, metadata?: any): Observable<NewResponse>;
    patch(request: PatchParams, metadata?: any): Observable<ResponseOk>;
  }

  export interface CanBeSavedParams {
    order_id: string;
  }

  export interface PatchParams {
    id: number;
    store_id: number;
    location: number;
    type: number;
    rate: number;
    improvements: number[];
    comment: string;
    contact: string;
  }

  export interface NewParams {
    store_id: number;
    location: number;
    type: number;
    rate: number;
  }

  export interface NewResponse {
    id: number;
    improvements: Improvement[];
  }

  export interface Improvement {
    id: number;
    title: string;
  }

  export interface ResponseOk {
    ok: boolean;
  }

  export interface ParamsApp {
    client_id: number;
    name: string;
    email: string;
    phone: string;
    app_version: string;
    rate: string;
    comment: string;
    device_id: string;
  }

  export interface ParamsStore {
    client_id: number;
    rate: string;
    reasons: number[];
    comment: string;
    store_id: number;
    device_id: string;
  }

  export interface ParamsOrder {
    order_id: string;
    rate: string;
    reasons: number[];
    comment: string;
    store_id: number;
    device_id: string;
  }

  export interface Reason {
    id: number;
    title: string;
    category_id: number;
  }

  export interface Category {
    id: number;
    title: string;
  }

  export interface RequestChoices {
    category_id: number;
  }

  export interface ResponseReasons {
    result: Reason[];
  }

  export interface ResponseCategories {
    result: Category[];
  }

  export interface ParamsReasonsByOrder {
    order_id: string;
  }
}

export namespace meta {
  export interface Mobile {
    contacts(
      request: any,
      metadata?: any
    ): Observable<ResponseMobileAPIContacts>;
    about(request: any, metadata?: any): Observable<ResponseMobileApiAbout>;
    faq(request: any, metadata?: any): Observable<ResponseFaq>;
    countries(
      request: ParamsCountries,
      metadata?: any
    ): Observable<ResponseCountries>;
    socialNetworks(
      request: any,
      metadata?: any
    ): Observable<ResponseSocialNetworks>;
  }

  export interface Stores {
    all(
      request: ParamsStores,
      metadata?: any
    ): Observable<ResponseAllOfflineStoresInfo>;
    byID(
      request: ParamsOfflineStoreInfoByID,
      metadata?: any
    ): Observable<ResponseOfflineStoreInfoByID>;
    cities(
      request: ParamsStoresCities,
      metadata?: any
    ): Observable<ResponseStoresCities>;
  }

  export interface ResponseAllOfflineStoresInfo {
    result: OfflineStore[];
    total: number;
  }

  export interface OfflineStore {
    store_id: number;
    title: string;
    address: string;
    phone: string;
    geo: string;
    city: string;
    country: string;
    active: boolean;
    picture_url: string;
    schedule: string;
    city_id: number;
    short_address: string;
  }

  export interface ParamsOfflineStoreInfoByID {
    store_id: number;
  }

  export interface ResponseOfflineStoreInfoByID {
    store: OfflineStore;
  }

  export interface ResponseMobileAPIContacts {
    email: string;
    partnership: string;
    phone: Phone;
    quality: string;
    social: Social;
  }

  export interface Social {
    telegram: string;
    whatsapp: string;
  }

  export interface Phone {
    subtitle: string;
    title: string;
    numbers: string[];
  }

  export interface ResponseMobileApiAbout {
    about: string;
    mission: string;
    blocks: Block[];
    image_url: string;
  }

  export interface Block {
    title: string;
    value: string;
  }

  export interface ResponseFaq {
    result: BlockFaq[];
  }

  export interface BlockFaq {
    title: string;
    content: TextFaq[];
  }

  export interface TextFaq {
    title: string;
    answer: string;
  }

  export interface ParamsStoresCities {
    offset: number;
    limit: number;
  }

  export interface City {
    city_id: number;
    title: string;
    stores: number;
    country: string;
  }

  export interface ResponseStoresCities {
    result: City[];
    total: number;
  }

  export interface ParamsStores {
    city_id: number;
    offset: number;
    limit: number;
  }

  export interface responseStoresByCity {
    city_id: number;
    title: string;
    total: number;
    stores: OfflineStore[];
  }

  export interface ParamsCountries {
    offset: number;
    limit: number;
  }

  export interface ResponseCountries {
    total: number;
    result: Country[];
  }

  export interface Country {
    id: number;
    country_code: string;
    prefix: string;
    title_ru: string;
  }

  export interface SocialNetwork {
    icon: string;
    name: string;
    link: string;
  }

  export interface ResponseSocialNetworks {
    result: SocialNetwork[];
  }
}

export namespace slack {
  export interface Tracker {
    statusChangeTicket(
      request: StatusChangeTicketParams,
      metadata?: any
    ): Observable<StatusChangeTicketResponse>;
  }

  export interface Slack {
    send(request: SendParams, metadata?: any): Observable<SendResponse>;
  }

  export interface StatusChangeTicketParams {
    ticket_key: string;
    slack_channel: string;
  }

  export interface StatusChangeTicketResponse {
    ok: boolean;
  }

  export interface SendParams {
    channel: string;
    email: string;
    message: string;
    from: string;
    thread_ts: string;
    type: string;
  }

  export interface SendResponse {
    ok: boolean;
    resp_channel: string;
    resp_timestamp: string;
  }
}

export namespace orders {
  export interface Offline {
    byClient(
      request: ParamsOfflineByClient,
      metadata?: any
    ): Observable<ResponseOfflineByClient>;
  }

  export interface Online {
    byClient(
      request: ParamsOnlineByClient,
      metadata?: any
    ): Observable<ResponseOnlineByClient>;
  }

  export interface ParamsOfflineByClient {
    clientId: number;
  }

  export interface ResponseOfflineByClient {
    orders: OfflineOrder[];
  }

  export interface ParamsOnlineByClient {
    clientId: number;
  }

  export interface ResponseOnlineByClient {
    order: number[];
  }

  export interface OfflineOrder {
    store_name: string;
    store_id: number;
    cashbox_id: number;
    order_id: string;
    row_receipt: number;
    date: string;
    time: string;
    article: string;
    title: string;
    color: string;
    size: string;
    barcode: string;
    qty: number;
    total_gross: number;
    discount: number;
    total: number;
    client_id: number;
    seller: string;
    family: string;
    operation: number;
    source: string;
    bonuses_wasted: number;
    bonuses_accrued: number;
  }
}

export namespace logistics {
  export interface Logistics {
    ping(request: any, metadata?: any): Observable<PingResponse>;
    uPSDuration(
      request: GetParamsUPS,
      metadata?: any
    ): Observable<GetResponseUPS>;
    boxberryDuration(
      request: GetParamsBoxberry,
      metadata?: any
    ): Observable<GetResponseBoxberry>;
    boxberryDurationByCity(
      request: GetParamsBoxberryDurationByCity,
      metadata?: any
    ): Observable<GetResponseBoxberryDurationByCity>;
    boxberryPointInformation(
      request: GetParamsPointInformation,
      metadata?: any
    ): Observable<GetResponsePointInformation>;
    boxberryOrderStatus(
      request: GetParamsOrderStatus,
      metadata?: any
    ): Observable<GetResponseOrderStatus>;
  }

  export interface PingResponse {
    response: string;
  }

  export interface GetParamsUPS {
    originCountryCode: string;
    originPostalCode: string;
    destinationCountryCode: string;
    destinationPostalCode: string;
    shipDate: string;
    shipTime: string;
  }

  export interface GetResponseUPS {
    deliveryDate: string;
    deliveryTime: string;
  }

  export interface GetParamsBoxberry {
    originCode: string;
    destionationCode: string;
  }

  export interface GetResponseBoxberry {
    price: number;
    deliveryPeriod: number;
  }

  export interface GetParamsBoxberryDurationByCity {
    originCode: string;
    cityName: string;
  }

  export interface GetResponseBoxberryDurationByCity {
    price: number;
    deliveryPeriod: number;
  }

  export interface GetParamsPointInformation {
    point_code: string;
  }

  export interface GetResponsePointInformation {
    work_schedule: string;
    address: string;
    metro: string;
  }

  export interface GetParamsOrderStatus {
    order_id: string;
  }

  export interface GetResponseOrderStatus {
    statuses: status[];
  }

  export interface status {
    date: string;
    name: string;
    comment: string;
  }
}
