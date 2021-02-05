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
    newOrder(
      request: OrdersNewParams,
      metadata?: any
    ): Observable<OrdersNewResponse>;
  }

  export interface StocksGetParams {
    page: number;
  }

  export interface StocksGetResponse {
    ok: boolean;
    pages: number;
    page: number;
    stocks: Stock[];
  }

  export interface Stock {
    barcode: string;
    category: string;
    family: string;
    family_id: string;
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
    super_model_id: string;
    super_model_name: string;
    super_model_name_en: string;
    gender: string;
    sizes: string[];
    barcode_alt: string[];
    discount: number;
    total_look: string[];
    description: string;
    images: string[];
    main_category: Category;
    site_category: Category[];
    size_description: string;
    recommendations: string[];
    alternatives: string[];
    video: string;
    instashop: string[];
    country: string;
    quantity: Quantity[];
    preview: string;
    capsules: Capsules;
  }

  export interface Capsules {
    id: string;
    title: string;
    parent_season: string;
  }

  export interface Category {
    id: number;
    slug: string;
    title: string;
  }

  export interface Quantity {
    store_id: number;
    available: number;
    reserved: number;
    discount: number;
    price: number;
    price_before_discount: number;
  }

  export interface StoresGetResponse {
    ok: boolean;
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
    ok: boolean;
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
    price: number;
    available_quantity: number;
    barcode: string;
  }
}

export namespace transport {
  export interface DeliveryMethod {
    create(
      request: DeliveryMethodAddParams,
      metadata?: any
    ): Observable<DeliveryMethodID>;
    get(
      request: DeliveryMethodID,
      metadata?: any
    ): Observable<DeliveryMethodGetResponse>;
    update(
      request: DeliveryMethodUpdateParams,
      metadata?: any
    ): Observable<DeliveryMethodOkResponse>;
    delete(
      request: DeliveryMethodID,
      metadata?: any
    ): Observable<DeliveryMethodOkResponse>;
    toggle(
      request: DeliveryMethodToggleParams,
      metadata?: any
    ): Observable<DeliveryMethodOkResponse>;
  }

  export interface DeliveryMethodToggleParams {
    id: number;
    is_active: boolean;
  }

  export enum DeliveryType {
    courier = 0,
    courierFast = 1,
    courieFitting = 2,
    pickupShop = 3,
    pickupBoxberry = 4,
  }

  export interface DeliveryMethodID {
    id: number;
  }

  export interface DeliveryMethodAddParams {
    title: string;
    type: DeliveryType;
  }

  export interface DeliveryMethodGetResponse {
    id: number;
    title: string;
    type: DeliveryType;
    is_active: boolean;
    created: string;
    updated: string;
  }

  export interface DeliveryMethodUpdateParams {
    id: number;
    title: string;
    type: DeliveryType;
  }

  export interface DeliveryMethodOkResponse {
    ok: boolean;
  }
}

export namespace transport {
  export interface TransportCompany {
    create(
      request: TransportCompanyAddParams,
      metadata?: any
    ): Observable<TransportCompanyID>;
    get(
      request: TransportCompanyID,
      metadata?: any
    ): Observable<TransportCompanyGetResponse>;
    update(
      request: TransportCompanyUpdateParams,
      metadata?: any
    ): Observable<TransportCompanyOkResponse>;
    delete(
      request: TransportCompanyID,
      metadata?: any
    ): Observable<TransportCompanyOkResponse>;
    toggle(
      request: TransportCompanyToggleParams,
      metadata?: any
    ): Observable<TransportCompanyOkResponse>;
    addSupportedDeliveryMethod(
      request: TransportCompanyAddSupportedDeliveryMethodParams,
      metadata?: any
    ): Observable<TransportAddSupportedDeliveryMethodResponse>;
    toggleSupportedDeliveryMethod(
      request: TransportCompanyToggleSupportedDeliveryMethodParams,
      metadata?: any
    ): Observable<TransportCompanyOkResponse>;
  }

  export interface TransportCompanyAddSupportedDeliveryMethodParams {
    transport_company_id: number;
    delivery_id: number;
    origin_zip: string;
    country_iso_code: string;
  }

  export interface TransportAddSupportedDeliveryMethodResponse {
    id: number;
  }

  export interface TransportCompanyToggleSupportedDeliveryMethodParams {
    transport_company_id: number;
    delivery_id: number;
    is_active: boolean;
  }

  export interface TransportCompanyToggleParams {
    id: number;
    is_active: boolean;
  }

  export enum TransportCompanyType {
    boxberry = 0,
    cdek = 1,
    pochta = 2,
    ups = 3,
    dpd = 4,
    dhl = 5,
    redexpress = 6,
  }

  export interface TransportCompanyGetResponse {
    id: number;
    title: string;
    type: TransportCompanyType;
    is_active: boolean;
    created: string;
    updated: string;
  }

  export interface TransportCompanyID {
    id: number;
  }

  export interface TransportCompanyAddParams {
    title: string;
    type: TransportCompanyType;
  }

  export interface TransportCompanyUpdateParams {
    id: number;
    title: string;
    type: TransportCompanyType;
  }

  export interface TransportCompanyOkResponse {
    ok: boolean;
  }
}

export namespace alerts {
  export interface Slack {
    send(
      request: SlackSendParams,
      metadata?: any
    ): Observable<SlackSendResponse>;
  }

  export interface SlackSendParams {
    channel_id: string;
    thread_ts: string;
    text: string;
    attachments: Attachment[];
    blocks: Block[];
  }

  export interface Attachment {
    color: string;
    fallback: string;
    callback_id: string;
    id: number;
    author_id: string;
    author_name: string;
    author_sub_name: string;
    author_link: string;
    author_icon: string;
    title: string;
    title_link: string;
    pre_text: string;
    text: string;
    image_url: string;
    thumb_url: string;
    fields: AttachmentField[];
    actions: AttachmentAction[];
    footer: string;
    footer_icon: string;
  }

  export interface AttachmentField {
    title: string;
    value: string;
    short: boolean;
  }

  export interface AttachmentAction {
    name: string;
    text: string;
    style: string;
    type: string;
    value: string;
    data_source: string;
    url: string;
    options: AttachmentActionOption[];
    selected_options: AttachmentActionOption[];
    option_groups: AttachmentActionOptionGroup[];
    confirm: AttachmentConfirm;
  }

  export interface AttachmentActionOption {
    text: string;
    value: string;
    description: string;
  }

  export interface AttachmentActionOptionGroup {
    text: string;
    options: AttachmentActionOption[];
  }

  export interface AttachmentConfirm {
    title: string;
    text: string;
    ok_text: string;
    dissmiss_text: string;
  }

  export interface Block {
    action_id: string;
    block_id: string;
    type: string;
    text: BlockText;
    value: string;
    action_ts: string;
    selected_option: BlockOption;
    selected_options: BlockOption[];
    selected_user: string;
    selected_users: string[];
    selected_channel: string;
    selected_channels: string[];
    selected_conversation: string;
    selected_conversations: string[];
    selected_date: string;
    selected_time: string;
    initial_option: BlockOption;
    initial_user: string;
    initial_channel: string;
    initial_conversation: string;
    initial_date: string;
  }

  export interface BlockText {
    type: string;
    text: string;
    emoji: boolean;
    verbatim: boolean;
  }

  export interface BlockOption {
    text: BlockText;
    value: string;
    description: BlockText;
    url: string;
  }

  export interface SlackSendResponse {
    ok: boolean;
    channel: string;
    ts: string;
  }
}

export namespace gate {
  export interface Shopify {
    emit(request: EventData, metadata?: any): Observable<Result>;
  }

  export interface EventData {
    topic: string;
    shop_domain: string;
    payload: string;
  }

  export interface Result {
    success: boolean;
  }
}

export namespace transport {
  export interface WinnersCompanies {
    winners(
      request: WinnersParams,
      metadata?: any
    ): Observable<WinnersResponse>;
  }

  export enum GeoType {
    dadata = 0,
    geonames = 1,
  }

  export interface WinnersParams {
    geo_id: string;
    geo_type_id: GeoType;
    order_price: number;
    locale: string;
  }

  export interface WinnersResponse {
    result: winner[];
  }

  export interface winner {
    delivery_type_id: DeliveryType;
    delivery_type_title: string;
    winner_company: deliveryCompany;
    payments: paymentType[];
    delivery_date: deliveryTime[];
  }

  export interface deliveryCompany {
    code: string;
    title: string;
  }

  export interface paymentType {
    code: string;
    title: string;
    delivery_price: number;
  }

  export interface deliveryTime {
    date: string;
    intervals: interval[];
  }

  export interface interval {
    time_from: string;
    time_to: string;
  }
}

export namespace transport {
  export interface Zones {
    toggle(
      request: ZonesToggleParams,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    create(request: ZonesCreateParams, metadata?: any): Observable<ZonesID>;
    getByZoneID(request: ZonesZoneID, metadata?: any): Observable<ZonesZone>;
    getAll(
      request: ZonesGetAllParams,
      metadata?: any
    ): Observable<ZonesGetAllResponse>;
    update(
      request: ZonesUpdateParams,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    delete(request: ZonesZoneID, metadata?: any): Observable<ZonesOkResponse>;
    getByDadataID(request: ZonesDadata, metadata?: any): Observable<ZonesZone>;
    getByGeonameID(
      request: ZonesGeoname,
      metadata?: any
    ): Observable<ZonesZone>;
    addDeliveryInterval(
      request: ZonesAddDeliveryIntervalParams,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    addDeliveryMatrix(
      request: ZonesAddDeliveryMatrixParams,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    getDeliveryMatrix(
      request: ZonesZoneID,
      metadata?: any
    ): Observable<ZonesGetDeliveryMatrixResponse>;
    updateDeliveryMatrix(
      request: ZonesZoneDeliveryMatrixModel,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    deleteDeliveryMatrix(
      request: ZonesID,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    addManualPriority(
      request: ZonesAddManualPriorityParams,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    getManualPriority(
      request: ZonesZoneID,
      metadata?: any
    ): Observable<ZonesManualPriorityList>;
    updateManualPriority(
      request: ZonesManualPriorityParams,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    deleteManualPriority(
      request: ZonesID,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    addPaymentMethod(
      request: ZonesAddPaymentMethodParams,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    getPaymentMethod(
      request: ZonesZoneID,
      metadata?: any
    ): Observable<ZonesZonePaymentMethodResponse>;
    updatePaymentMethod(
      request: ZonesUpdateZonePaymentMethodParams,
      metadata?: any
    ): Observable<ZonesOkResponse>;
    deletePaymentMethod(
      request: ZonesID,
      metadata?: any
    ): Observable<ZonesOkResponse>;
  }

  export interface ZonesToggleParams {
    id: number;
    is_active: boolean;
  }

  export interface ZonesDadata {
    fias_id: string;
  }

  export interface ZonesGeoname {
    geoname_id: string;
  }

  export interface ZonesZoneID {
    zone_id: number;
  }

  export interface ZonesZone {
    id: number;
    name: string;
    active: boolean;
    created: string;
    updated: string;
  }

  export interface ZonesUpdateParams {
    id: number;
    name: string;
  }

  export interface ZonesCreateParams {
    zone_name: string;
  }

  export interface ZonesOkResponse {
    ok: boolean;
  }

  export interface ZonesGetAllParams {
    limit: number;
    offset: number;
  }

  export interface ZonesGetAllResponse {
    total: number;
    list: ZonesZone[];
  }

  export enum DAY_OF_WEEK_TYPE {
    WORK = 0,
    HOLIDAY = 1,
    SATURDAY = 2,
    SUNDAY = 3,
  }

  export interface ZonesAddDeliveryIntervalParams {
    zone_id: number;
    delivery_id: number;
    time_from: string;
    time_to: string;
    day_of_week_type_id: DAY_OF_WEEK_TYPE;
  }

  export interface ZonesAddDeliveryMatrixParams {
    zone_id: number;
    cutoff_time: string;
    gap_days: number;
    consolidation_days: number;
    delivery_id: number;
    payment_id: number;
    total_less: number;
    total_more: number;
    total: number;
    delivery_min_days: number;
    active: boolean;
  }

  export interface ZonesGetDeliveryMatrixResponse {
    list: ZonesZoneDeliveryMatrixModel[];
  }

  export interface ZonesZoneDeliveryMatrixModel {
    id: number;
    zone_id: number;
    cutoff_time: string;
    gap_days: number;
    consolidation_days: number;
    delivery_id: number;
    payment_id: number;
    total_less: number;
    total_more: number;
    total: number;
    delivery_min_days: number;
    active: boolean;
  }

  export interface ZonesID {
    id: number;
  }

  export interface ZonesAddManualPriorityParams {
    zone_id: number;
    transport_company: TransportCompanyType;
    delivery_id: number;
    value: number;
    max_days: number;
    tariff: number;
    active: boolean;
  }

  export interface ZonesManualPriorityParams {
    id: number;
    zone_id: number;
    transport_company: TransportCompanyType;
    delivery_id: number;
    value: number;
    max_days: number;
    tariff: number;
    active: boolean;
  }

  export interface ZonesManualPriorityList {
    list: ZonesManualPriorityParams[];
  }

  export interface ZonesZonePaymentMethodResponse {
    list: ZonePaymentMethodModel[];
  }

  export interface ZonesAddPaymentMethodParams {
    zone_id: number;
    delivery_id: number;
    payment_id: number;
    transport_company: TransportCompanyType;
    active: boolean;
  }

  export interface ZonePaymentMethodModel {
    id: number;
    zone_id: number;
    delivery_id: number;
    payment_id: number;
    transport_company: TransportCompanyType;
    active: boolean;
    created: string;
    updated: string;
  }

  export interface ZonesUpdateZonePaymentMethodParams {
    id: number;
    zone_id: number;
    delivery_id: number;
    payment_id: number;
    transport_company: TransportCompanyType;
    active: boolean;
  }
}

export namespace usedesk {
  export interface CSI {
    save(request: saveParams, metadata?: any): Observable<saveResponse>;
  }

  export interface saveParams {
    id: number;
    user_id: number;
    client_id: number;
    ticket_id: number;
    rating: number;
    company_id: number;
    ticket_comment_id: number;
    channel_id: number;
    comment: string;
    created_at: string;
    updated_at: string;
  }

  export interface saveResponse {
    ok: boolean;
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
    newOrder(
      request: NewOrderParams,
      metadata?: any
    ): Observable<NewOrderResponse>;
    patchOrder(
      request: PatchOrderParams,
      metadata?: any
    ): Observable<ResponseOk>;
  }

  export interface NPS {
    new (request: NewNPSParams, metadata?: any): Observable<NewNpsResponse>;
    update(request: UpdateNPSParams, metadata?: any): Observable<ResponseOk>;
  }

  export interface UpdateNPSParams {
    id: number;
    rate: number;
    store_code: number;
    order_date: string;
    order_id: string;
    comment: string;
    source: string;
  }

  export interface NewNPSParams {
    rate: number;
    store_code: number;
    order_date: string;
    order_id: string;
    comment: string;
    source: string;
  }

  export interface NewNpsResponse {
    id: number;
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
    store_code: number;
  }

  export interface NewOrderParams {
    store_id: number;
    order_date: string;
    order_id: string;
    rate: number;
    channel: string;
    company: string;
    source: string;
    type: string;
    template: string;
  }

  export interface NewOrderResponse {
    id: number;
    improvements: Improvement[];
  }

  export interface PatchOrderParams {
    id: number;
    store_id: number;
    order_date: string;
    order_id: string;
    rate: number;
    improvements: number[];
    comment: string;
    contact: string;
  }
}

export namespace tracker {
  export interface TrackerSlack {
    sendTicket(
      request: SendTicketParams,
      metadata?: any
    ): Observable<SendTicketResponse>;
  }

  export interface SendTicketParams {
    ticket_id: string;
  }

  export interface SendTicketResponse {
    success: boolean;
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

export namespace transport {
  export interface PaymentMethod {
    create(
      request: PaymentMethodAddParams,
      metadata?: any
    ): Observable<PaymentMethodID>;
    get(
      request: PaymentMethodID,
      metadata?: any
    ): Observable<PaymentMethodGetResponse>;
    update(
      request: PaymentMethodUpdateParams,
      metadata?: any
    ): Observable<PaymentMethodOkResponse>;
    delete(
      request: PaymentMethodID,
      metadata?: any
    ): Observable<PaymentMethodOkResponse>;
    toggle(
      request: PaymentMethodToggleParams,
      metadata?: any
    ): Observable<PaymentMethodOkResponse>;
  }

  export interface PaymentMethodToggleParams {
    id: number;
    is_active: boolean;
  }

  export interface PaymentMethodGetResponse {
    id: number;
    title: string;
    is_active: boolean;
    created: string;
    updated: string;
  }

  export interface PaymentMethodID {
    id: number;
  }

  export interface PaymentMethodAddParams {
    title: string;
  }

  export interface PaymentMethodUpdateParams {
    id: number;
    title: string;
  }

  export interface PaymentMethodOkResponse {
    ok: boolean;
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
    ): Observable<ResponseOffline>;
  }

  export interface ParamsOfflineByClient {
    client_id: number;
    limit: number;
    offset: number;
  }

  export interface ResponseOffline {
    result: Order[];
    total: number;
  }

  export interface Order {
    id: number;
    store_code: number;
    order_number: string;
    order_id: string;
    date: string;
    client_id: number;
    seller: string;
    operation: number;
    bonuses_wasted: number;
    bonuses_accrued: number;
    sum: number;
    positions: Position[];
    store_name: string;
    is_rated: boolean;
  }

  export interface Position {
    id: number;
    article: number;
    barcode: number;
    title: string;
    color: string;
    size: string;
    qty: number;
    sum: number;
    discount: number;
    family: string;
  }

  export interface Online {
    byClient(
      request: ParamsOnlineByClient,
      metadata?: any
    ): Observable<ResponseOnlineByClient>;
  }

  export interface ParamsOnlineByClient {
    client_id: number;
  }

  export interface ResponseOnlineByClient {
    order: number[];
  }

  export interface OfflineOrderPosition {
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

export namespace transport {
  export interface address {
    getFias(request: Address, metadata?: any): Observable<addressId>;
    getGeonameId(request: Address, metadata?: any): Observable<addressId>;
    getAddressId(request: Address, metadata?: any): Observable<addressId>;
  }

  export interface Address {
    country_code: string;
    locality: string;
    street: string;
    house_number: string;
    postal_code: string;
  }

  export interface addressId {
    id: string;
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

export namespace release {
  export interface ArticlesRelease {
    create(
      request: ParamsCreateArticle,
      metadata?: any
    ): Observable<ArticleReleaseActionResponse>;
    get(
      request: ParamsGetArticleRelease,
      metadata?: any
    ): Observable<ArticleReleaseList>;
    getById(
      request: ArticlesReleaseId,
      metadata?: any
    ): Observable<ArticleRelease>;
    update(
      request: ParamsCreateArticle,
      metadata?: any
    ): Observable<ArticleReleaseActionResponse>;
    delete(
      request: ArticlesReleaseId,
      metadata?: any
    ): Observable<ArticleReleaseActionResponse>;
  }

  export enum ArticleReleaseType {
    site = 0,
    mercaux = 1,
  }

  export interface ParamsCreateArticle {
    article: string;
    trigger_time: string;
    type: ArticleReleaseType;
  }

  export interface ArticleReleaseActionResponse {
    ok: boolean;
    id: number;
  }

  export interface ParamsGetArticleRelease {
    limit: number;
    offset: number;
    type: ArticleReleaseType;
    is_deleted: boolean;
    is_active: boolean;
  }

  export interface ArticleReleaseList {
    ok: boolean;
    total: number;
    article: ArticleRelease[];
  }

  export interface ArticleRelease {
    id: number;
    article: string;
    trigger_time: string;
    type: ArticleReleaseType;
    is_deleted: boolean;
    is_active: boolean;
  }

  export interface ArticlesReleaseId {
    id: number;
  }
}

export namespace products {
  export interface Product {
    id: number;
    guid: UUID;
    article: number;
    is_active: boolean;
    category: string;
    gender: string;
    url: string;
    fabric: Description;
    family: Description;
    super_model: Description;
    color_model: Description;
    color: Color;
    sizes: Size[];
  }

  export interface Description {
    guid: UUID;
    title_ru: string;
    title_en: string;
  }

  export interface Color {
    guid: UUID;
    code: number;
    title_ru: string;
    title_en: string;
  }

  export interface Price {
    price: number;
    price_before_discount: number;
    currency_code: number;
    currency_iso: string;
  }

  export interface Size {
    guid: UUID;
    barcode: number;
    title_ru: string;
    title_en: string;
    stocks: Stock[];
    prices: Price[];
  }

  export interface Stock {
    barcode: number;
    store_code: number;
    quantity: number;
    available: number;
    reserved: number;
  }

  export interface GetResponse {
    success: boolean;
    products: Product[];
    total: number;
  }

  export interface GetByArticleResponse {
    success: boolean;
    product: Product;
  }

  export interface UUID {
    uuid: string;
  }

  export interface Request {
    limit: number;
    offset: number;
  }

  export interface Article {
    article: number;
  }

  export interface Catalog {
    get(request: Request, metadata?: any): Observable<GetResponse>;
    getByArticle(
      request: Article,
      metadata?: any
    ): Observable<GetByArticleResponse>;
  }
}

export namespace products {
  export interface Error {
    source: string;
    type: string;
    message: string;
  }

  export interface CreateResponse {
    ok: boolean;
  }

  export interface Errors {
    create(request: Error, metadata?: any): Observable<CreateResponse>;
  }
}

export namespace stocks {
  export interface Stocks {
    upsert(request: ListStocks, metadata?: any): Observable<SuccessResponse>;
    get(request: GetParams, metadata?: any): Observable<ListStocks>;
    getPagination(request: Request, metadata?: any): Observable<Response>;
  }

  export interface GetParams {
    enabled_buffer_site: boolean;
  }

  export interface Request {
    limit: number;
    offset: number;
    enabled_buffer_site: boolean;
  }

  export interface Response {
    total: number;
    stocks: Stock[];
  }

  export interface SuccessResponse {
    success: boolean;
  }

  export interface ListStocks {
    stocks: Stock[];
  }

  export interface Stock {
    barcode: number;
    store_code: number;
    quantity: number;
    available: number;
    reserved: number;
  }
}
