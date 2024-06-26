import { Observable } from "rxjs";

export namespace google.protobuf {
  export interface Empty {}
}
export namespace auth {
  export interface auth {
    loginPassword(
      request: LoginPasswordRequest,
      metadata?: any
    ): Observable<LoginResponse>;
    loginSMS(
      request: LoginSMSRequest,
      metadata?: any
    ): Observable<LoginResponse>;
    logout(request: LogoutRequest, metadata?: any): Observable<LogoutResponse>;
    refresh(
      request: RefreshRequest,
      metadata?: any
    ): Observable<RefreshResponse>;
  }
  export interface LoginPasswordRequest {
    username?: string;
    password?: string;
  }
  export interface LoginResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
    data?: TokenData;
  }
  export interface LoginSMSRequest {
    username?: string;
    code?: string;
  }
  export interface TokenData {
    access_token?: string;
    refresh_token?: string;
    token_type?: string;
    expires_in?: number;
    refresh_expires_in?: number;
  }
  export interface LogoutRequest {
    refresh_token?: string;
  }
  export interface LogoutResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
  }
  export interface RefreshRequest {
    refresh_token?: string;
  }
  export interface RefreshResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
    data?: TokenData;
  }
  export interface Error {
    target?: string;
    code?: Long;
    message?: string;
  }
}
export namespace feedbacks {
  export interface Mobile {
    app(request: ParamsApp, metadata?: any): Observable<ResponseOk>;
    store(request: ParamsStore, metadata?: any): Observable<ResponseOk>;
    order(request: ParamsOrder, metadata?: any): Observable<ResponseOk>;
    categories(
      request: google.protobuf.Empty,
      metadata?: any
    ): Observable<ResponseCategories>;
    reasonsByOrder(
      request: ParamsReasonsByOrder,
      metadata?: any
    ): Observable<ResponseReasons>;
    reasonsByStore(
      request: google.protobuf.Empty,
      metadata?: any
    ): Observable<ResponseReasons>;
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
  export interface PortalFeedbackService {
    delete(
      request: PortalFeedbackId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    list(
      request: ListPortalFeedbackRequest,
      metadata?: any
    ): Observable<ListPortalFeedbackResponse>;
    validate(
      request: ValidatePortalFeedbackRequest,
      metadata?: any
    ): Observable<ValidatePortalFeedbackResponse>;
  }
  export interface PortalFeedbackId {
    id?: number;
  }
  export interface ListPortalFeedbackResponse {
    results?: PortalFeedback[];
    total?: number;
  }
  export interface ListPortalFeedbackRequest {
    limit?: number;
    offset?: number;
    search?: string;
  }
  export interface ValidatePortalFeedbackRequest {
    order_id?: string;
    article?: string;
    feedback_category?: string;
  }
  export interface ValidatePortalFeedbackResponse {
    is_valid?: boolean;
    error?: string;
  }
  export interface PortalFeedback {
    id?: number;
    survey?: number;
    name?: string;
    email?: string;
    phone?: string;
    user_id?: string;
    contacts?: string;
    ts?: string;
    source?: string;
    date?: string;
    channel?: string;
    nickname?: string;
    client_status?: string;
    description?: string;
    feedback_category?: string;
    article_category?: string;
    quality_category?: string;
    acceptance_quality_category?: string;
    defect?: string;
    article?: string;
    store_date?: string;
    order_id?: string;
    receipt?: string;
    store?: string;
    user?: string;
    sent?: boolean;
    mindbox_sent?: boolean;
    status?: string;
    conclusion?: string;
    source_type?: string;
    transport_company?: string;
    transport_city?: string;
    status_inwork?: string;
    status_done?: string;
    created?: string;
    updated?: string;
    status_new?: string;
    status_err?: string;
    logistic_pretense?: string;
  }
  export interface UpdateNPSParams {
    id?: number;
    rate?: number;
    store_code?: number;
    order_date?: string;
    order_id?: string;
    comment?: string;
    source?: string;
  }
  export interface NewNPSParams {
    rate?: number;
    store_code?: number;
    order_date?: string;
    order_id?: string;
    comment?: string;
    source?: string;
  }
  export interface NewNpsResponse {
    id?: number;
  }
  export interface CanBeSavedParams {
    order_id?: string;
  }
  export interface PatchParams {
    id?: number;
    store_id?: number;
    location?: number;
    type?: number;
    rate?: number;
    improvements?: number[];
    comment?: string;
    contact?: string;
  }
  export interface NewParams {
    store_id?: number;
    location?: number;
    type?: number;
    rate?: number;
  }
  export interface NewResponse {
    id?: number;
    improvements?: Improvement[];
  }
  export interface Improvement {
    id?: number;
    title?: string;
  }
  export interface ResponseOk {
    ok?: boolean;
  }
  export interface ParamsApp {
    client_id?: number;
    name?: string;
    email?: string;
    phone?: string;
    app_version?: string;
    rate?: string;
    comment?: string;
    device_id?: string;
    platform?: string;
  }
  export interface ParamsStore {
    client_id?: number;
    rate?: string;
    reasons?: number[];
    comment?: string;
    store_id?: number;
    device_id?: string;
    platform?: string;
  }
  export interface ParamsOrder {
    order_id?: string;
    rate?: string;
    reasons?: number[];
    comment?: string;
    store_id?: number;
    device_id?: string;
    platform?: string;
  }
  export interface Reason {
    id?: number;
    title?: string;
    category_id?: number;
  }
  export interface Category {
    id?: number;
    title?: string;
  }
  export interface RequestChoices {
    category_id?: number;
  }
  export interface ResponseReasons {
    result?: Reason[];
  }
  export interface ResponseCategories {
    result?: Category[];
  }
  export interface ParamsReasonsByOrder {
    order_id?: string;
    store_code?: number;
  }
  export interface NewOrderParams {
    store_id?: number;
    order_date?: string;
    order_id?: string;
    rate?: number;
    channel?: string;
    company?: string;
    source?: string;
    type?: string;
    template?: string;
  }
  export interface NewOrderResponse {
    id?: number;
    improvements?: Improvement[];
  }
  export interface PatchOrderParams {
    id?: number;
    store_id?: number;
    order_date?: string;
    order_id?: string;
    rate?: number;
    improvements?: number[];
    comment?: string;
    contact?: string;
  }
}
export namespace gate {
  export interface Shopify {
    emit(request: EventData, metadata?: any): Observable<Result>;
  }
  export interface EventData {
    topic?: string;
    shop_domain?: string;
    payload?: string;
  }
  export interface Result {
    success?: boolean;
    result?: string;
  }
}
export namespace geo {
  export interface geo {
    suggestCountry(
      request: SuggestCountryParams,
      metadata?: any
    ): Observable<SuggestCountryResponse>;
    countryDetails(
      request: CountryDetailsParams,
      metadata?: any
    ): Observable<Country>;
    suggestCity(
      request: SuggestCityParams,
      metadata?: any
    ): Observable<SuggestCityResponse>;
    cityDetails(request: CityDetailsParams, metadata?: any): Observable<City>;
    cityDetailsByGeoID(
      request: CityDetailsByGeoIDParams,
      metadata?: any
    ): Observable<City>;
    defaultCityList(
      request: DefaultCityListParams,
      metadata?: any
    ): Observable<SuggestCityResponse>;
    cityDetailsByIP(
      request: CityDetailsByIPParams,
      metadata?: any
    ): Observable<City>;
    suggestAddress(
      request: SuggestAddressParams,
      metadata?: any
    ): Observable<SuggestAddressResponse>;
    addressDetails(
      request: AddressDetailsParams,
      metadata?: any
    ): Observable<Address>;
    addressDetailsByGeoID(
      request: AddressDetailsByGeoIDParams,
      metadata?: any
    ): Observable<Address>;
  }
  export enum LocaleType {
    nil = 0,
    ru = 1,
    en = 2,
  }
  export interface SuggestCountryParams {
    locale?: LocaleType;
    search?: string;
    limit?: number;
    offset?: number;
  }
  export interface SuggestCountryResponse {
    success?: boolean;
    total?: number;
    result?: SuggestCountry[];
  }
  export interface SuggestCountry {
    id?: string;
    suggest?: string;
    title?: string;
    subtitle?: string;
    iso_code?: string;
    phone?: Phone;
  }
  export interface CountryDetailsParams {
    locale?: LocaleType;
    iso_code?: string;
  }
  export interface Country {
    id?: string;
    full_title?: string;
    type?: string;
    country?: CountryDetails;
    postal_code?: string;
    postal_code_format?: string;
    currency_code?: string;
    phone?: Phone;
    location?: Location;
  }
  export interface Phone {
    prefix?: number;
    masks?: string[];
    primary_mask?: string;
  }
  export interface SuggestCityParams {
    locale?: LocaleType;
    country_iso_code?: string;
    search?: string;
    limit?: number;
    offset?: number;
    ip?: string;
  }
  export interface SuggestCityResponse {
    success?: boolean;
    total?: number;
    result?: SuggestCity[];
  }
  export interface SuggestCity {
    id?: string;
    suggest?: string;
    title?: string;
    subtitle?: string;
  }
  export interface CityDetailsParams {
    locale?: LocaleType;
    country_iso_code?: string;
    query?: string;
  }
  export interface CityDetailsByGeoIDParams {
    locale?: LocaleType;
    country_iso_code?: string;
    id?: string;
  }
  export interface City {
    id?: string;
    full_title?: string;
    type?: string;
    country?: CountryDetails;
    region?: RegionDetails;
    state?: State;
    city?: Details;
    postal_code?: string;
    postal_code_format?: string;
    currency_code?: string;
    phone?: Phone;
    location?: Location;
    additional?: CityAdditional;
  }
  export interface Details {
    id?: string;
    fias?: string;
    title?: string;
    full_title?: string;
    type?: string;
  }
  export interface RegionDetails {
    id?: string;
    fias?: string;
    title?: string;
    full_title?: string;
    type?: string;
    iso_code?: string;
  }
  export interface HouseDetails {
    id?: string;
    fias?: string;
    title?: string;
    full_title?: string;
    type?: string;
    building?: string;
    block?: string;
  }
  export interface CountryDetails {
    id?: string;
    title?: string;
    full_title?: string;
    type?: string;
    iso_code?: string;
    capital_id?: string;
    capital_title?: string;
  }
  export interface State {
    title?: string;
    iso_code?: string;
  }
  export interface Location {
    latitude?: number;
    longitude?: number;
  }
  export interface CityAdditional {
    fias_level?: string;
  }
  export interface CityDetailsByIPParams {
    locale?: LocaleType;
    ip?: string;
  }
  export interface SuggestAddressParams {
    locale?: LocaleType;
    country_iso_code?: string;
    city_id?: string;
    search?: string;
    limit?: number;
    offset?: number;
  }
  export interface SuggestAddressResponse {
    success?: boolean;
    total?: number;
    result?: SuggestAddress[];
  }
  export interface SuggestAddress {
    id?: string;
    suggest?: string;
    title?: string;
    subtitle?: string;
  }
  export interface AddressDetailsParams {
    locale?: LocaleType;
    country_iso_code?: string;
    query?: string;
  }
  export interface AddressDetailsByGeoIDParams {
    locale?: LocaleType;
    country_iso_code?: string;
    id?: string;
    city_id?: string;
  }
  export interface Address {
    id?: string;
    full_title?: string;
    type?: string;
    country?: CountryDetails;
    region?: RegionDetails;
    state?: State;
    city?: Details;
    settlement?: Details;
    street?: Details;
    house?: HouseDetails;
    postal_code?: string;
    postal_code_format?: string;
    currency_code?: string;
    phone?: Phone;
    location?: Location;
    additional?: AddressAdditional;
  }
  export interface AddressAdditional {
    is_in_mkad?: boolean;
    is_in_kad?: boolean;
    fias_level?: string;
  }
  export interface DefaultCityListParams {
    ip?: string;
    country_iso_code?: string;
  }
}
export namespace mercaux {
  export interface StocksService {
    list(request: ListRequest, metadata?: any): Observable<ListStocksResponse>;
  }
  export interface CatalogService {
    list(request: ListRequest, metadata?: any): Observable<ListCatalogResponse>;
  }
  export interface StoresService {
    list(
      request: google.protobuf.Empty,
      metadata?: any
    ): Observable<ListStoresResponse>;
  }
  export interface SellersService {
    list(
      request: google.protobuf.Empty,
      metadata?: any
    ): Observable<ListSellersResponse>;
  }
  export interface OrdersService {
    new (
      request: NewOrderRequest,
      metadata?: any
    ): Observable<NewOrderResponse>;
  }
  export interface ListRequest {
    limit?: number;
    offset?: number;
  }
  export interface ListCatalogResponse {
    results?: Catalog[];
    total?: number;
  }
  export interface ListStocksResponse {
    results?: Stock[];
    total?: number;
  }
  export interface Catalog {
    barcode?: Long;
    category?: string;
    family?: string;
    product_name?: string;
    url?: string;
    is_active?: boolean;
    article?: number;
    size?: string;
    color?: string;
    fabric?: string;
    super_model_name?: string;
    gender?: string;
    sizes?: string[];
    barcode_alt?: string[];
    total_look?: string[];
    description?: string;
    images?: string[];
    site_category?: Category[];
    size_description?: string;
    alternatives?: string[];
    video?: string;
    instashop?: string[];
    preview?: string;
    capsules?: Capsules;
    is_sample_sale?: boolean;
    is_ecological?: boolean;
    super_model_merging_code?: string;
    pilling_grade?: string;
  }
  export interface Stock {
    barcode?: Long;
    country?: string;
    quantity?: Quantity[];
  }
  export interface Capsules {
    id?: string;
    title?: string;
    parent_season?: string;
  }
  export interface Category {
    id?: number;
    slug?: string;
    title?: string;
  }
  export interface Quantity {
    store_id?: number;
    available?: number;
    reserved?: number;
    discount?: number;
    price?: number;
    price_before_discount?: number;
  }
  export interface ListStoresResponse {
    ok?: boolean;
    stores?: Store[];
  }
  export interface Store {
    store_id?: number;
    short_title?: string;
    address?: string;
    phone?: string;
    geo?: string;
    city?: string;
    country?: string;
    active?: boolean;
  }
  export interface ListSellersResponse {
    ok?: boolean;
    sellers?: Seller[];
  }
  export interface Seller {
    store_id?: number;
    seller_id?: string;
    seller_name?: string;
  }
  export interface NewOrderRequest {
    order?: Order;
    source?: string;
    seller_id?: string;
  }
  export interface Order {
    last_name?: string;
    first_name?: string;
    phone?: string;
    email?: string;
    store_id?: number;
    items?: OrderItem[];
  }
  export interface OrderItem {
    id?: string;
    quantity?: number;
    price?: number;
  }
  export interface NewOrderResponse {
    ok?: boolean;
    order_id?: string;
    errors?: OrderError[];
  }
  export interface OrderError {
    code?: number;
    message?: string;
    price?: number;
    available_quantity?: number;
    barcode?: string;
  }
}
export namespace meta {
  export interface Mobile {
    contacts(
      request: google.protobuf.Empty,
      metadata?: any
    ): Observable<ResponseMobileAPIContacts>;
    about(
      request: google.protobuf.Empty,
      metadata?: any
    ): Observable<ResponseMobileApiAbout>;
    faq(
      request: google.protobuf.Empty,
      metadata?: any
    ): Observable<ResponseFaq>;
    countries(
      request: ParamsCountries,
      metadata?: any
    ): Observable<ResponseCountries>;
    socialNetworks(
      request: google.protobuf.Empty,
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
    result?: OfflineStore[];
    total?: number;
  }
  export interface OfflineStore {
    store_id?: number;
    title?: string;
    address?: string;
    phone?: string;
    geo?: string;
    city?: string;
    country?: string;
    active?: boolean;
    picture_url?: string;
    schedule?: string;
    city_id?: number;
    short_address?: string;
  }
  export interface ParamsOfflineStoreInfoByID {
    store_id?: number;
  }
  export interface ResponseOfflineStoreInfoByID {
    store?: OfflineStore;
  }
  export interface ResponseMobileAPIContacts {
    email?: string;
    partnership?: string;
    phone?: Phone;
    quality?: string;
    social?: Social;
    quality_phone?: string;
    quality_email?: string;
  }
  export interface Social {
    telegram?: string;
    whatsapp?: string;
  }
  export interface Phone {
    subtitle?: string;
    title?: string;
    numbers?: string[];
  }
  export interface ResponseMobileApiAbout {
    about?: string;
    mission?: string;
    blocks?: Block[];
    image_url?: string;
  }
  export interface Block {
    title?: string;
    value?: string;
  }
  export interface ResponseFaq {
    result?: BlockFaq[];
  }
  export interface BlockFaq {
    title?: string;
    content?: TextFaq[];
  }
  export interface TextFaq {
    title?: string;
    answer?: string;
  }
  export interface ParamsStoresCities {
    offset?: number;
    limit?: number;
  }
  export interface City {
    city_id?: number;
    title?: string;
    stores?: number;
    country?: string;
    country_name?: string;
  }
  export interface ResponseStoresCities {
    result?: City[];
    total?: number;
  }
  export interface ParamsStores {
    city_id?: number;
    offset?: number;
    limit?: number;
  }
  export interface responseStoresByCity {
    city_id?: number;
    title?: string;
    total?: number;
    stores?: OfflineStore[];
  }
  export interface ParamsCountries {
    offset?: number;
    limit?: number;
  }
  export interface ResponseCountries {
    total?: number;
    result?: Country[];
  }
  export interface Country {
    id?: number;
    country_code?: string;
    prefix?: string;
    title_ru?: string;
  }
  export interface SocialNetwork {
    icon?: string;
    name?: string;
    link?: string;
  }
  export interface ResponseSocialNetworks {
    result?: SocialNetwork[];
  }
}
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
    pushClick(
      request: PushClickParams,
      metadata?: any
    ): Observable<PushClickResponse>;
  }
  export interface PushClickParams {
    message_unique_key?: string;
    button_unique_key?: string;
  }
  export interface PushClickResponse {
    ok?: boolean;
  }
  export interface IsUserExistParams {
    mobile_phone?: string;
  }
  export interface IsUserExistResponse {
    ok?: boolean;
    client_id?: string;
  }
  export interface InitDeviceParams {
    device_id?: string;
    apns_token?: string;
  }
  export interface InitDeviceResponse {
    ok?: boolean;
  }
  export enum Platform {
    IOS = 0,
    ANDROID = 1,
  }
  export interface InitClientParams {
    device_id?: string;
    client_id?: string;
    platform?: Platform;
  }
  export interface InitClientResponse {
    ok?: boolean;
  }
  export interface ParamsUser {
    client_id?: string;
  }
  export interface ResponseUser {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    bonus_total?: number;
    bonus_available?: number;
    bonus_blocked?: number;
    total_paid_amount?: number;
    nearest_expiration?: NearestExpiration;
  }
  export interface NearestExpiration {
    total?: number;
    date?: string;
  }
  export interface ParamsOrders {
    client_id?: string;
    date_from?: string;
    date_to?: string;
    limit?: number;
    page?: number;
  }
  export interface ResponseOrders {
    total?: number;
    result?: Order[];
  }
  export interface Order {
    order_id?: string;
    created_date?: string;
    payment_type?: string;
    discounted_total_price?: number;
    payment_amount?: number;
    applied_discount?: number;
    acquired_balance_change?: number;
    created_ts?: number;
    available_from_date_time?: string;
    balance_change_kind?: string;
    balance_change_kind_system_name?: string;
    expiration_date_time?: string;
  }
  export interface ParamsCode {
    mobile_phone?: string;
    device_id?: string;
    ip?: string;
    platform?: string;
    version?: string;
  }
  export interface ResponseCode {
    ok?: boolean;
    timestamp?: Long;
  }
  export interface ParamsCheckCode {
    mobile_phone?: string;
    code?: string;
  }
  export interface ResponseCheckCode {
    ok?: boolean;
    status?: string;
    client_id?: string;
    mindbox_id?: number;
  }
  export interface ParamsEditUser {
    device_uuid?: string;
    client_id?: string;
    mobile_phone?: string;
  }
  export interface ResponseEditUser {
    ok?: boolean;
  }
  export interface ParamsOSMICard {
    client_id?: string;
  }
  export interface ResponseOSMICard {
    ok?: boolean;
  }
  export interface RemoveDeviceParams {
    device_id?: string;
  }
  export interface RemoveDeviceResponse {
    ok?: boolean;
  }
}
export namespace notifications {
  export interface notifications {
    send(request: SendRequest, metadata?: any): Observable<SendResponse>;
  }
  export interface SendRequest {
    from?: string;
    to?: string;
    title?: string;
    message?: string;
    attachments?: string[];
    channel?: string;
    payload?: Payload;
  }
  export interface Payload {
    thread_id?: string;
    is_split_by_blocks_enabled?: boolean;
  }
  export interface SendResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
    data?: SendData;
  }
  export interface SendData {
    thread_id?: string;
  }
  export interface Error {
    target?: string;
    code?: Long;
    message?: string;
  }
  export interface Slack {
    send(
      request: SlackSendParams,
      metadata?: any
    ): Observable<SlackSendResponse>;
    sendFile(
      request: SlackSendFileParams,
      metadata?: any
    ): Observable<SlackSendResponse>;
  }
  export interface SlackSendFileParams {
    channel_id?: string;
    thread_ts?: string;
    file?: string;
    filetype?: string;
    title?: string;
    initial_comment?: string;
  }
  export interface SlackSendParams {
    channel_id?: string;
    thread_ts?: string;
    text?: string;
    attachments?: Attachment[];
    blocks?: string;
  }
  export interface Attachment {
    color?: string;
    fallback?: string;
    callback_id?: string;
    id?: number;
    author_id?: string;
    author_name?: string;
    author_sub_name?: string;
    author_link?: string;
    author_icon?: string;
    title?: string;
    title_link?: string;
    pre_text?: string;
    text?: string;
    image_url?: string;
    thumb_url?: string;
    fields?: AttachmentField[];
    actions?: AttachmentAction[];
    footer?: string;
    footer_icon?: string;
  }
  export interface AttachmentField {
    title?: string;
    value?: string;
    short?: boolean;
  }
  export interface AttachmentAction {
    name?: string;
    text?: string;
    style?: string;
    type?: string;
    value?: string;
    data_source?: string;
    url?: string;
    options?: AttachmentActionOption[];
    selected_options?: AttachmentActionOption[];
    option_groups?: AttachmentActionOptionGroup[];
    confirm?: AttachmentConfirm;
  }
  export interface AttachmentActionOption {
    text?: string;
    value?: string;
    description?: string;
  }
  export interface AttachmentActionOptionGroup {
    text?: string;
    options?: AttachmentActionOption[];
  }
  export interface AttachmentConfirm {
    title?: string;
    text?: string;
    ok_text?: string;
    dissmiss_text?: string;
  }
  export interface SlackSendResponse {
    ok?: boolean;
    channel?: string;
    ts?: string;
  }
}
export namespace orders {
  export interface Offline {
    byClient(
      request: ParamsOfflineByClient,
      metadata?: any
    ): Observable<ResponseOffline>;
    getById(
      request: ParamsOrderById,
      metadata?: any
    ): Observable<ResponseOfflineById>;
  }
  export interface ParamsOfflineByClient {
    client_id?: number;
    limit?: number;
    offset?: number;
  }
  export interface ResponseOffline {
    result?: Order[];
    total?: number;
  }
  export interface ParamsOrderById {
    id?: number;
    client_id?: number;
  }
  export interface ResponseOfflineById {
    result?: Order;
  }
  export interface Order {
    id?: number;
    store_code?: number;
    order_number?: string;
    order_id?: string;
    date?: string;
    client_id?: number;
    seller?: string;
    operation?: number;
    bonuses_wasted?: number;
    bonuses_accrued?: number;
    sum?: number;
    positions?: Position[];
    store_name?: string;
    is_rated?: boolean;
  }
  export interface Position {
    id?: number;
    article?: number;
    barcode?: Long;
    title?: string;
    color?: string;
    size?: string;
    qty?: number;
    sum?: number;
    discount?: number;
    family?: string;
    row_receipt?: number;
  }
  export interface Online {
    byClient(
      request: ParamsOnlineByClient,
      metadata?: any
    ): Observable<ResponseOnlineByClient>;
  }
  export interface ParamsOnlineByClient {
    client_id?: number;
  }
  export interface ResponseOnlineByClient {
    order?: number[];
  }
  export interface OfflineOrderPosition {
    store_name?: string;
    store_id?: number;
    cashbox_id?: number;
    order_id?: string;
    row_receipt?: number;
    date?: string;
    time?: string;
    article?: string;
    title?: string;
    color?: string;
    size?: string;
    barcode?: string;
    qty?: number;
    total_gross?: number;
    discount?: number;
    total?: number;
    client_id?: number;
    seller?: string;
    family?: string;
    operation?: number;
    source?: string;
    bonuses_wasted?: number;
    bonuses_accrued?: number;
  }
}
export namespace slack {
  export interface Slack {
    send(request: SendRequest, metadata?: any): Observable<SendResponse>;
    update(
      request: UpdateMessageRequest,
      metadata?: any
    ): Observable<BaseResponse>;
    delete(
      request: DeleteMessageRequest,
      metadata?: any
    ): Observable<BaseResponse>;
  }
  export interface SendRequest {
    from?: string;
    to?: string;
    title?: string;
    message?: string;
    attachments?: string[];
    thread_id?: string;
    is_split_by_blocks_enabled?: boolean;
  }
  export interface SendResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
    data?: SendData;
  }
  export interface SendData {
    thread_id?: string;
    channel_id?: string;
  }
  export interface UpdateMessageRequest {
    channel?: string;
    thread_id?: string;
    title?: string;
    message?: string;
    is_split_by_blocks_enabled?: boolean;
  }
  export interface DeleteMessageRequest {
    channel?: string;
    thread_id?: string;
  }
  export interface BaseResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
  }
  export interface Error {
    target?: string;
    code?: Long;
    message?: string;
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
    ticket_id?: string;
  }
  export interface SendTicketResponse {
    success?: boolean;
  }
}
export namespace usedesk {
  export interface CSI {
    save(request: SaveParams, metadata?: any): Observable<SaveResponse>;
  }
  export interface SaveParams {
    id?: number;
    user_id?: number;
    client_id?: number;
    ticket_id?: number;
    rating?: number;
    company_id?: number;
    ticket_comment_id?: number;
    channel_id?: number;
    comment?: string;
    created_at?: string;
    updated_at?: string;
  }
  export interface SaveResponse {
    ok?: boolean;
  }
}
export namespace user {
  export interface user {
    create(request: CreateRequest, metadata?: any): Observable<CreateResponse>;
    update(request: User, metadata?: any): Observable<UpdateResponse>;
    get(request: GetRequest, metadata?: any): Observable<GetResponse>;
    getByToken(
      request: GetByTokenRequest,
      metadata?: any
    ): Observable<GetResponse>;
    getList(
      request: GetListRequest,
      metadata?: any
    ): Observable<GetListResponse>;
    getPassword(
      request: GetPasswordRequest,
      metadata?: any
    ): Observable<GetPasswordResponse>;
    delete(request: DeleteRequest, metadata?: any): Observable<DeleteResponse>;
  }
  export interface CreateRequest {
    username?: string;
    password?: string;
    phone?: string;
    email?: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    birthdate?: string;
    gender?: string;
    store_code?: number;
    rcrm_id?: number;
    clothing_size?: string;
    shoe_size?: string;
    country?: string;
    city?: string;
    region?: string;
    department?: string;
    position?: string;
    site_id?: Long;
    onec_id?: string;
    wms_id?: string;
  }
  export interface CreateResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
    data?: User;
  }
  export interface User {
    id?: string;
    username?: string;
    password?: string;
    phone?: string;
    email?: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    birthdate?: string;
    gender?: string;
    store_code?: number;
    rcrm_id?: number;
    clothing_size?: string;
    shoe_size?: string;
    country?: string;
    city?: string;
    region?: string;
    department?: string;
    position?: string;
    site_id?: Long;
    onec_id?: string;
    wms_id?: string;
  }
  export interface UpdateResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
    data?: User;
  }
  export interface GetRequest {
    id?: string;
  }
  export interface GetResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
    data?: User;
  }
  export interface GetByTokenRequest {
    access_token?: string;
  }
  export interface GetListRequest {
    filters?: GetListFilters;
    pagination?: Pagination;
  }
  export interface GetListResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
    data?: User[];
  }
  export interface GetPasswordRequest {
    id?: string;
  }
  export interface GetPasswordResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
    data?: PasswordData;
  }
  export interface PasswordData {
    encrypted_password?: string;
  }
  export interface DeleteRequest {
    id?: string;
  }
  export interface DeleteResponse {
    status?: string;
    message?: string;
    code?: Long;
    errors?: Error[];
  }
  export interface Error {
    target?: string;
    code?: Long;
    message?: string;
  }
  export interface GetListFilters {
    updated_from?: string;
    updated_to?: string;
    type?: string;
  }
  export interface Pagination {
    limit?: Long;
    offset?: Long;
  }
}
export namespace app {}
export namespace google {}
export namespace products {
  export interface Error {
    source?: string;
    type?: string;
    message?: string;
  }
  export interface CreateResponse {
    ok?: boolean;
  }
  export interface Errors {
    create(request: Error, metadata?: any): Observable<CreateResponse>;
  }
  export interface Product {
    id?: number;
    guid?: UUID;
    article?: number;
    is_active?: boolean;
    category?: string;
    gender?: string;
    url?: string;
    fabric?: Description;
    family?: Description;
    super_model?: Description;
    color_model?: Description;
    color?: Color;
    sizes?: Size[];
  }
  export interface Description {
    guid?: UUID;
    title_ru?: string;
    title_en?: string;
  }
  export interface Color {
    guid?: UUID;
    code?: number;
    title_ru?: string;
    title_en?: string;
  }
  export interface Price {
    price?: number;
    price_before_discount?: number;
    currency_code?: number;
    currency_iso?: string;
  }
  export interface Size {
    guid?: UUID;
    barcode?: Long;
    title_ru?: string;
    title_en?: string;
    stocks?: Stock[];
    prices?: Price[];
  }
  export interface Stock {
    barcode?: Long;
    store_code?: number;
    quantity?: number;
    available?: number;
    reserved?: number;
  }
  export interface GetResponse {
    success?: boolean;
    products?: Product[];
    total?: number;
  }
  export interface GetByArticleResponse {
    success?: boolean;
    product?: Product;
  }
  export interface UUID {
    uuid?: string;
  }
  export interface Request {
    limit?: number;
    offset?: number;
  }
  export interface Article {
    article?: number;
  }
  export interface Catalog {
    get(request: Request, metadata?: any): Observable<GetResponse>;
    getByArticle(
      request: Article,
      metadata?: any
    ): Observable<GetByArticleResponse>;
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
    article?: string;
    trigger_time?: string;
    type?: ArticleReleaseType;
  }
  export interface ArticleReleaseActionResponse {
    ok?: boolean;
    id?: number;
  }
  export interface ParamsGetArticleRelease {
    limit?: number;
    offset?: number;
    type?: ArticleReleaseType;
    is_deleted?: boolean;
    is_active?: boolean;
  }
  export interface ArticleReleaseList {
    ok?: boolean;
    total?: number;
    article?: ArticleRelease[];
  }
  export interface ArticleRelease {
    id?: number;
    article?: string;
    trigger_time?: string;
    type?: ArticleReleaseType;
    is_deleted?: boolean;
    is_active?: boolean;
  }
  export interface ArticlesReleaseId {
    id?: number;
  }
}
export namespace stocks {
  export interface Stocks {
    upsert(request: ListStocks, metadata?: any): Observable<SuccessResponse>;
    get(request: GetParams, metadata?: any): Observable<ListStocks>;
    getPagination(request: Request, metadata?: any): Observable<Response>;
  }
  export interface GetParams {
    enabled_buffer_site?: boolean;
  }
  export interface Request {
    limit?: number;
    offset?: number;
    enabled_buffer_site?: boolean;
  }
  export interface Response {
    total?: number;
    stocks?: Stock[];
  }
  export interface SuccessResponse {
    success?: boolean;
  }
  export interface ListStocks {
    stocks?: Stock[];
  }
  export interface Stock {
    barcode?: Long;
    store_code?: number;
    quantity?: number;
    available?: number;
    reserved?: number;
  }
}
export namespace logistics {
  export interface CategoryService {
    list(
      request: ListCategoryRequest,
      metadata?: any
    ): Observable<ListCategoryResponse>;
    suggest(
      request: SuggestCategoryRequest,
      metadata?: any
    ): Observable<ListCategoryResponse>;
  }
  export interface Category {
    id?: number;
    name?: string;
    is_active?: boolean;
  }
  export interface ListCategoryRequest {
    limit?: number;
    offset?: number;
    sort?: string;
  }
  export interface SuggestCategoryRequest {
    limit?: number;
    search?: string;
  }
  export interface ListCategoryResponse {
    results?: Category[];
    total?: number;
  }
  export interface CategoryDeliveryTypeRestrictionService {
    list(
      request: ListCategoryDeliveryTypeRestrictionRequest,
      metadata?: any
    ): Observable<ListCategoryDeliveryTypeRestrictionResponse>;
    create(
      request: CreateCategoryDeliveryTypeRestriction,
      metadata?: any
    ): Observable<CategoryDeliveryTypeRestriction>;
    update(
      request: UpdateCategoryDeliveryTypeRestriction,
      metadata?: any
    ): Observable<CategoryDeliveryTypeRestriction>;
    get(
      request: CategoryDeliveryTypeRestrictionId,
      metadata?: any
    ): Observable<CategoryDeliveryTypeRestriction>;
    delete(
      request: CategoryDeliveryTypeRestrictionId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
  }
  export interface CategoryDeliveryTypeRestrictionId {
    id?: number;
  }
  export interface CreateCategoryDeliveryTypeRestriction {
    category_id?: number;
    delivery_type_id?: number;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
  }
  export interface UpdateCategoryDeliveryTypeRestriction {
    id?: number;
    category_id?: number;
    delivery_type_id?: number;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
  }
  export interface CategoryDeliveryTypeRestriction {
    id?: number;
    category?: Category;
    delivery_type?: DeliveryTypeShort;
    message?: Message;
    popup?: Popup;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListCategoryDeliveryTypeRestrictionRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListCategoryDeliveryTypeRestrictionResponse {
    results?: CategoryDeliveryTypeRestriction[];
    total?: number;
  }
  export interface CategoryZoneGroupRestrictionService {
    list(
      request: ListCategoryZoneGroupRestrictionRequest,
      metadata?: any
    ): Observable<ListCategoryZoneGroupRestrictionResponse>;
    create(
      request: CreateCategoryZoneGroupRestriction,
      metadata?: any
    ): Observable<CategoryZoneGroupRestriction>;
    update(
      request: UpdateCategoryZoneGroupRestriction,
      metadata?: any
    ): Observable<CategoryZoneGroupRestriction>;
    get(
      request: CategoryZoneGroupRestrictionId,
      metadata?: any
    ): Observable<CategoryZoneGroupRestriction>;
    delete(
      request: CategoryZoneGroupRestrictionId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
  }
  export interface CategoryZoneGroupRestrictionId {
    id?: number;
  }
  export interface CreateCategoryZoneGroupRestriction {
    category_id?: number;
    zone_group_id?: number;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
  }
  export interface UpdateCategoryZoneGroupRestriction {
    id?: number;
    category_id?: number;
    zone_group_id?: number;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
  }
  export interface CategoryZoneGroupRestriction {
    id?: number;
    category?: Category;
    zone_group?: ZoneGroup;
    message?: Message;
    popup?: Popup;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListCategoryZoneGroupRestrictionRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListCategoryZoneGroupRestrictionResponse {
    results?: CategoryZoneGroupRestriction[];
    total?: number;
  }
  export interface CountryService {
    list(
      request: ListCountryRequest,
      metadata?: any
    ): Observable<ListCountryResponse>;
    suggest(
      request: SuggestCountryRequest,
      metadata?: any
    ): Observable<ListCountryResponse>;
  }
  export interface ListCountryRequest {
    limit?: number;
    offset?: number;
    sort?: string;
  }
  export interface ListCountryResponse {
    results?: Country[];
    total?: number;
  }
  export interface SuggestCountryRequest {
    limit?: number;
    search?: string;
  }
  export interface DeliveryCalendarService {
    list(
      request: ListDeliveryCalendarRequest,
      metadata?: any
    ): Observable<ListDeliveryCalendarResponse>;
    create(
      request: CreateDeliveryCalendar,
      metadata?: any
    ): Observable<DeliveryCalendar>;
    update(
      request: UpdateDeliveryCalendar,
      metadata?: any
    ): Observable<DeliveryCalendar>;
    get(
      request: DeliveryCalendarId,
      metadata?: any
    ): Observable<DeliveryCalendar>;
    delete(
      request: DeliveryCalendarId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
  }
  export interface DeliveryCalendarId {
    id?: number;
  }
  export interface CreateDeliveryCalendar {
    delivery_mode_id?: number;
    delivery_type_id?: number;
    message_id?: number;
    popup_id?: number;
    date_from?: string;
    date_to?: string;
    is_delivery_delayed?: boolean;
    intervals?: Interval[];
  }
  export interface UpdateDeliveryCalendar {
    id?: number;
    delivery_mode_id?: number;
    delivery_type_id?: number;
    message_id?: number;
    popup_id?: number;
    date_from?: string;
    date_to?: string;
    is_delivery_delayed?: boolean;
    intervals?: Interval[];
  }
  export interface DeliveryCalendar {
    id?: number;
    delivery_mode?: DeliveryMode;
    delivery_type?: DeliveryTypeShort;
    message?: Message;
    popup?: Popup;
    date_from?: string;
    date_to?: string;
    is_delivery_delayed?: boolean;
    created_at?: string;
    updated_at?: string;
    intervals?: Interval[];
  }
  export interface ListDeliveryCalendarRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListDeliveryCalendarResponse {
    results?: DeliveryCalendar[];
    total?: number;
  }
  export interface DeliveryMethodService {
    list(
      request: ListDeliveryMethodRequest,
      metadata?: any
    ): Observable<ListDeliveryMethodResponse>;
    create(request: DeliveryMethod, metadata?: any): Observable<DeliveryMethod>;
    get(request: DeliveryMethodId, metadata?: any): Observable<DeliveryMethod>;
    update(request: DeliveryMethod, metadata?: any): Observable<DeliveryMethod>;
    delete(
      request: DeliveryMethodId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestDeliveryMethodRequest,
      metadata?: any
    ): Observable<SuggestDeliveryMethodResponse>;
  }
  export interface DeliveryMethodId {
    id?: number;
  }
  export interface DeliveryMethod {
    id?: number;
    name?: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListDeliveryMethodRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListDeliveryMethodResponse {
    results?: DeliveryMethod[];
    total?: number;
  }
  export interface SuggestDeliveryMethodRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestDeliveryMethod {
    id?: number;
    name?: string;
    is_active?: boolean;
  }
  export interface SuggestDeliveryMethodResponse {
    results?: SuggestDeliveryMethod[];
    total?: number;
  }
  export interface DeliveryModeService {
    list(
      request: ListDeliveryModeRequest,
      metadata?: any
    ): Observable<ListDeliveryModeResponse>;
    create(request: DeliveryMode, metadata?: any): Observable<DeliveryMode>;
    get(request: DeliveryModeId, metadata?: any): Observable<DeliveryMode>;
    update(request: DeliveryMode, metadata?: any): Observable<DeliveryMode>;
    delete(
      request: DeliveryModeId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestDeliveryModeRequest,
      metadata?: any
    ): Observable<SuggestDeliveryModeResponse>;
  }
  export interface DeliveryModeId {
    id?: number;
  }
  export interface DeliveryMode {
    id?: number;
    title_ru?: string;
    is_active?: boolean;
    is_backup_method?: boolean;
    code?: string;
    is_winner_competition_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListDeliveryModeRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListDeliveryModeResponse {
    results?: DeliveryMode[];
    total?: number;
  }
  export interface SuggestDeliveryModeRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestDeliveryMode {
    id?: number;
    title_ru?: string;
    is_active?: boolean;
  }
  export interface SuggestDeliveryModeResponse {
    results?: SuggestDeliveryMode[];
    total?: number;
  }
  export interface DeliveryTypeService {
    list(
      request: ListDeliveryTypeRequest,
      metadata?: any
    ): Observable<ListDeliveryTypeResponse>;
    create(
      request: CreateDeliveryTypeRequest,
      metadata?: any
    ): Observable<DeliveryTypeShort>;
    get(request: DeliveryTypeId, metadata?: any): Observable<DeliveryType>;
    delete(
      request: DeliveryTypeId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    update(
      request: UpdateDeliveryType,
      metadata?: any
    ): Observable<DeliveryType>;
    suggest(
      request: SuggestDeliveryTypeRequest,
      metadata?: any
    ): Observable<SuggestDeliveryTypeResponse>;
  }
  export interface DeliveryTypeId {
    id?: number;
  }
  export interface CreateDeliveryTypeRequest {
    transport_company_mode_id?: number;
    zone_group_id?: number;
    code?: string;
    name?: string;
  }
  export interface DeliveryTypeShort {
    id?: number;
    name?: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListDeliveryTypeRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListDeliveryTypeResponse {
    results?: DeliveryTypeShort[];
    total?: number;
  }
  export interface DeliveryType {
    id?: number;
    transport_company_mode?: TransportCompanyMode;
    zone_group?: ZoneGroup;
    name?: string;
    description_ru?: string;
    popup?: Popup;
    code?: string;
    default_days_from?: number;
    default_days_to?: number;
    delivery_price?: number;
    delivery_price_border?: number;
    delivery_price_after_border?: number;
    delivery_min_days?: number;
    is_only_days_amount?: boolean;
    consolidation_hours?: number;
    gap_hours?: number;
    priority_coefficient?: number;
    max_days_coefficient?: number;
    tariff_coefficient?: number;
    winner_percent?: number;
    max_price?: number;
    restriction_by_price_is_active?: boolean;
    restriction_by_price_message?: Message;
    restriction_by_price_popup?: Popup;
    max_quantity?: number;
    restriction_by_quantity_is_active?: boolean;
    restriction_by_quantity_message?: Message;
    restriction_by_quantity_popup?: Popup;
    max_quantity_per_article?: number;
    restriction_by_quantity_per_article_is_active?: boolean;
    restriction_by_quantity_per_article_message?: Message;
    restriction_by_quantity_per_article_popup?: Popup;
    is_visible_while_restricted?: boolean;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
    payment_method_to_delivery_type?: PaymentMethodToDeliveryType[];
    category_delivery_type_restrictions?: CategoryRestriction[];
    intervals?: Interval[];
  }
  export interface CategoryRestriction {
    id?: number;
    category?: Category;
    message?: Message;
    popup?: Popup;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface PaymentMethodToDeliveryType {
    payment_method?: PaymentMethod;
    message?: Message;
    max_price?: number;
    is_visible_while_restricted?: boolean;
    payment_method_category_restrictions?: PaymentMethodCategoryRestriction[];
  }
  export interface PaymentMethodCategoryRestriction {
    category?: Category;
    message?: Message;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface UpdateDeliveryType {
    id?: number;
    transport_company_mode_id?: number;
    zone_group_id?: number;
    name?: string;
    description_ru?: string;
    popup_id?: number;
    code?: string;
    default_days_from?: number;
    default_days_to?: number;
    delivery_price?: number;
    delivery_price_border?: number;
    delivery_price_after_border?: number;
    delivery_min_days?: number;
    is_only_days_amount?: boolean;
    consolidation_hours?: number;
    gap_hours?: number;
    priority_coefficient?: number;
    max_days_coefficient?: number;
    tariff_coefficient?: number;
    winner_percent?: number;
    max_price?: number;
    restriction_by_price_is_active?: boolean;
    restriction_by_price_message_id?: number;
    restriction_by_price_popup_id?: number;
    max_quantity?: number;
    restriction_by_quantity_is_active?: boolean;
    restriction_by_quantity_message_id?: number;
    restriction_by_quantity_popup_id?: number;
    max_quantity_per_article?: number;
    restriction_by_quantity_per_article_is_active?: boolean;
    restriction_by_quantity_per_article_message_id?: number;
    restriction_by_quantity_per_article_popup_id?: number;
    is_visible_while_restricted?: boolean;
    is_active?: boolean;
    payment_method_to_delivery_type?: UpdatePaymentMethodToDeliveryType[];
    category_delivery_type_restrictions?: UpdateCategoryRestriction[];
    intervals?: Interval[];
  }
  export interface UpdatePaymentMethodToDeliveryType {
    payment_method_id?: number;
    message_id?: number;
    max_price?: number;
    is_visible_while_restricted?: boolean;
    payment_method_category_restrictions?: UpdatePaymentMethodCategoryRestriction[];
  }
  export interface UpdatePaymentMethodCategoryRestriction {
    category_id?: number;
    message_id?: number;
    is_active?: boolean;
  }
  export interface UpdateCategoryRestriction {
    category_id?: number;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
  }
  export interface SuggestDeliveryTypeRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestDeliveryType {
    id?: number;
    name?: string;
    is_active?: boolean;
  }
  export interface SuggestDeliveryTypeResponse {
    results?: SuggestDeliveryType[];
    total?: number;
  }
  export interface GlobalRestrictionsService {
    list(
      request: ListGlobalRestrictionRequest,
      metadata?: any
    ): Observable<ListGlobalRestrictionResponse>;
    create(
      request: UpdateGlobalRestriction,
      metadata?: any
    ): Observable<GlobalRestriction>;
    update(
      request: UpdateGlobalRestriction,
      metadata?: any
    ): Observable<GlobalRestriction>;
  }
  export enum Restriction {
    price = 0,
    quantity = 1,
  }
  export interface GlobalRestriction {
    id?: number;
    message?: Message;
    popup?: Popup;
    restriction?: Restriction;
    value?: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface UpdateGlobalRestriction {
    id?: number;
    message_id?: number;
    popup_id?: number;
    restriction?: Restriction;
    value?: number;
    is_active?: boolean;
  }
  export interface ListGlobalRestrictionRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListGlobalRestrictionResponse {
    results?: GlobalRestriction[];
    total?: number;
  }
  export interface IntervalService {
    list(
      request: ListIntervalRequest,
      metadata?: any
    ): Observable<ListIntervalResponse>;
    create(request: Interval, metadata?: any): Observable<Interval>;
    get(request: IntervalId, metadata?: any): Observable<Interval>;
    update(request: Interval, metadata?: any): Observable<Interval>;
    delete(
      request: IntervalId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
  }
  export enum DayOfWeek {
    monday = 0,
    tuesday = 1,
    wednesday = 2,
    thursday = 3,
    friday = 4,
    saturday = 5,
    sunday = 6,
  }
  export interface IntervalId {
    id?: number;
  }
  export interface Interval {
    id?: number;
    client_time_from?: string;
    client_time_to?: string;
    tk_time_from?: string;
    tk_time_to?: string;
    day_of_week?: DayOfWeek;
    code?: string;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListIntervalRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListIntervalResponse {
    results?: Interval[];
    total?: number;
  }
  export interface MessageService {
    list(
      request: ListMessageRequest,
      metadata?: any
    ): Observable<ListMessageResponse>;
    create(request: Message, metadata?: any): Observable<Message>;
    get(request: MessageId, metadata?: any): Observable<Message>;
    update(request: Message, metadata?: any): Observable<Message>;
    delete(
      request: MessageId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestMessageRequest,
      metadata?: any
    ): Observable<SuggestMessageResponse>;
  }
  export interface Rel {
    id?: number;
    name?: string;
    rel?: string;
    rel_name?: string;
    href?: string;
  }
  export interface MessageId {
    id?: number;
  }
  export interface Message {
    id?: number;
    text?: string;
    rels?: Rel[];
    created_at?: string;
    updated_at?: string;
  }
  export interface ListMessageRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListMessageResponse {
    results?: Message[];
    total?: number;
  }
  export interface SuggestMessageRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestMessage {
    id?: number;
    text?: string;
  }
  export interface SuggestMessageResponse {
    results?: SuggestMessage[];
    total?: number;
  }
  export interface PaymentMethodService {
    list(
      request: ListPaymentMethodRequest,
      metadata?: any
    ): Observable<ListPaymentMethodResponse>;
    create(request: PaymentMethod, metadata?: any): Observable<PaymentMethod>;
    get(request: PaymentMethodId, metadata?: any): Observable<PaymentMethod>;
    update(request: PaymentMethod, metadata?: any): Observable<PaymentMethod>;
    delete(
      request: PaymentMethodId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestPaymentMethodRequest,
      metadata?: any
    ): Observable<SuggestPaymentMethodResponse>;
  }
  export interface PaymentMethodId {
    id?: number;
  }
  export interface PaymentMethod {
    id?: number;
    title_ru?: string;
    code?: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListPaymentMethodRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListPaymentMethodResponse {
    results?: PaymentMethod[];
    total?: number;
  }
  export interface SuggestPaymentMethodRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestPaymentMethod {
    id?: number;
    title_ru?: string;
    is_active?: boolean;
  }
  export interface SuggestPaymentMethodResponse {
    results?: SuggestPaymentMethod[];
    total?: number;
  }
  export interface PickupService {
    list(
      request: ListPickupRequest,
      metadata?: any
    ): Observable<ListPickupResponse>;
    create(request: CreatePickupRequest, metadata?: any): Observable<Pickup>;
    get(request: PickupId, metadata?: any): Observable<Pickup>;
    update(request: Pickup, metadata?: any): Observable<Pickup>;
    delete(
      request: PickupId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestPickupRequest,
      metadata?: any
    ): Observable<SuggestPickupResponse>;
  }
  export interface PickupId {
    id?: number;
  }
  export interface CreatePickupRequest {
    store_code?: number;
    delivery_type_id?: number;
    max_cells?: string;
  }
  export interface ListPickupRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListPickupResponse {
    results?: Pickup[];
    total?: number;
  }
  export interface Pickup {
    id?: number;
    store?: Store;
    delivery_type?: DeliveryTypeShort;
    max_cells?: number;
    busy_cells?: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface UpdatePickup {
    id?: number;
    store_code?: number;
    delivery_type_id?: number;
    max_cells?: number;
    busy_cells?: number;
    is_active?: boolean;
  }
  export interface SuggestPickupRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestPickup {
    id?: number;
    name?: string;
    is_active?: boolean;
  }
  export interface SuggestPickupResponse {
    results?: SuggestPickup[];
    total?: number;
  }
  export interface PopupService {
    list(
      request: ListPopupRequest,
      metadata?: any
    ): Observable<ListPopupResponse>;
    create(request: Popup, metadata?: any): Observable<Popup>;
    get(request: PopupId, metadata?: any): Observable<Popup>;
    update(request: Popup, metadata?: any): Observable<Popup>;
    delete(request: PopupId, metadata?: any): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestPopupRequest,
      metadata?: any
    ): Observable<SuggestPopupResponse>;
  }
  export interface PopupId {
    id?: number;
  }
  export interface Popup {
    id?: number;
    text?: string;
    title?: string;
    button_text?: string;
    rels?: Rel[];
    created_at?: string;
    updated_at?: string;
  }
  export interface ListPopupRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListPopupResponse {
    results?: Popup[];
    total?: number;
  }
  export interface SuggestPopupRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestPopup {
    id?: number;
    text?: string;
  }
  export interface SuggestPopupResponse {
    results?: SuggestPopup[];
    total?: number;
  }
  export interface StoreService {
    list(
      request: ListStoreRequest,
      metadata?: any
    ): Observable<ListStoreResponse>;
    suggest(
      request: SuggestStoreRequest,
      metadata?: any
    ): Observable<ListStoreResponse>;
  }
  export interface Store {
    store_code?: number;
    name?: string;
    address?: string;
    phone?: string;
    schedule?: string;
    is_visible?: boolean;
    is_active?: boolean;
  }
  export interface ListStoreRequest {
    limit?: number;
    offset?: number;
    sort?: string;
  }
  export interface SuggestStoreRequest {
    limit?: number;
    search?: string;
  }
  export interface ListStoreResponse {
    results?: Store[];
    total?: number;
  }
  export interface TransportCompanyService {
    list(
      request: ListTransportCompanyRequest,
      metadata?: any
    ): Observable<ListTransportCompanyResponse>;
    create(
      request: TransportCompany,
      metadata?: any
    ): Observable<TransportCompany>;
    get(
      request: TransportCompanyId,
      metadata?: any
    ): Observable<TransportCompany>;
    update(
      request: TransportCompany,
      metadata?: any
    ): Observable<TransportCompany>;
    delete(
      request: TransportCompanyId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestTransportCompanyRequest,
      metadata?: any
    ): Observable<SuggestTransportCompanyResponse>;
  }
  export interface TransportCompanyId {
    id?: number;
  }
  export interface TransportCompany {
    id?: number;
    name?: string;
    track_url?: string;
    has_integration?: boolean;
    is_delivery_use_only_working_days?: boolean;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListTransportCompanyRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListTransportCompanyResponse {
    results?: TransportCompany[];
    total?: number;
  }
  export interface SuggestTransportCompanyRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestTransportCompany {
    id?: number;
    name?: string;
    is_active?: boolean;
  }
  export interface SuggestTransportCompanyResponse {
    results?: SuggestTransportCompany[];
    total?: number;
  }
  export interface TransportCompanyModeService {
    list(
      request: ListTransportCompanyModeRequest,
      metadata?: any
    ): Observable<ListTransportCompanyModeResponse>;
    create(
      request: CreateTransportCompanyModeRequest,
      metadata?: any
    ): Observable<TransportCompanyMode>;
    get(
      request: TransportCompanyModeId,
      metadata?: any
    ): Observable<TransportCompanyMode>;
    update(
      request: TransportCompanyMode,
      metadata?: any
    ): Observable<TransportCompanyMode>;
    delete(
      request: TransportCompanyModeId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    getIntervalList(
      request: TransportCompanyModeId,
      metadata?: any
    ): Observable<ListIntervalResponse>;
    createInterval(
      request: TransportCompanyModeIntervalRequest,
      metadata?: any
    ): Observable<Interval>;
    suggest(
      request: SuggestTransportCompanyModeRequest,
      metadata?: any
    ): Observable<SuggestTransportCompanyModeResponse>;
  }
  export interface TransportCompanyModeIntervalRequest {
    id?: number;
    interval?: Interval;
  }
  export interface TransportCompanyModeId {
    id?: number;
  }
  export interface CreateTransportCompanyModeRequest {
    transport_company_id?: number;
    delivery_mode_id?: number;
    delivery_method_id?: number;
    title?: string;
    code?: string;
  }
  export interface TransportCompanyMode {
    id?: number;
    transport_company?: TransportCompany;
    delivery_mode?: DeliveryMode;
    delivery_method?: DeliveryMethod;
    intervals?: Interval[];
    delivery_interval_days?: number;
    title?: string;
    code?: string;
    sdt_code?: string;
    is_price_border_include_delivery?: boolean;
    is_price_border_include_present?: boolean;
    is_product_quantity_border_include_delivery?: boolean;
    is_product_quantity_border_include_present?: boolean;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface TransportCompanyModeShort {
    id?: number;
    title?: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListTransportCompanyModeRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListTransportCompanyModeResponse {
    results?: TransportCompanyModeShort[];
    total?: number;
  }
  export interface SuggestTransportCompanyModeRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestTransportCompanyMode {
    id?: number;
    title?: string;
    is_active?: boolean;
  }
  export interface SuggestTransportCompanyModeResponse {
    results?: SuggestTransportCompanyMode[];
    total?: number;
  }
  export interface WinnerService {
    calculate(
      request: CalculateRequest,
      metadata?: any
    ): Observable<CalculateResponse>;
  }
  export interface CalculateRequest {
    country_iso_code?: string;
    region_geo_id?: string;
    city_geo_id?: string;
    settlement_geo_id?: string;
    street_geo_id?: string;
    house_geo_id?: string;
    geo_id?: string;
    cart_id?: number;
    cart?: CartPosition[];
    order_datetime?: string;
  }
  export interface CartPosition {
    category_id?: number;
    quantity?: number;
    price?: number;
    is_present?: boolean;
  }
  export interface CalculateResponse {
    restrictions?: WinnerRestriction[];
    delivery_types?: WinnerDeliveryType[];
  }
  export interface WinnerRestriction {
    message?: string;
    popup?: WinnerPopup;
  }
  export interface WinnerPopup {
    title?: string;
    text?: string;
    button?: string;
  }
  export interface WinnerDeliveryType {
    delivery_type_name?: string;
    message?: string;
    delivery_price?: number;
    popup?: WinnerPopup;
    payment_methods?: WinnerPaymentMethod[];
    delivery_dates?: WinnerDeliveryDates[];
    is_restricted?: boolean;
    restrictions?: WinnerRestriction[];
    from_days?: number;
    to_days?: number;
    is_delivery_use_only_working_days?: boolean;
  }
  export interface WinnerPaymentMethod {
    title_ru?: string;
    code?: string;
    is_restricted?: boolean;
    message?: string;
  }
  export interface WinnerDeliveryDates {
    date?: string;
    title?: string;
    intervals?: WinnerInterval[];
  }
  export interface WinnerInterval {
    title?: string;
    time_from?: string;
    time_to?: string;
    code?: string;
  }
  export interface ZoneService {
    list(
      request: ListZoneRequest,
      metadata?: any
    ): Observable<ListZoneResponse>;
    create(request: Zone, metadata?: any): Observable<Zone>;
    get(request: ZoneId, metadata?: any): Observable<Zone>;
    update(request: Zone, metadata?: any): Observable<Zone>;
    delete(request: ZoneId, metadata?: any): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestZoneRequest,
      metadata?: any
    ): Observable<SuggestZoneResponse>;
  }
  export interface ZoneId {
    id?: number;
  }
  export interface Zone {
    id?: number;
    name?: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
    zone_groups?: ZoneGroupInfo[];
    geo_id_quantity?: number;
    geo_ids?: string[];
  }
  export interface ZoneGroupInfo {
    id?: number;
    name?: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListZoneRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListZoneResponse {
    results?: Zone[];
    total?: number;
  }
  export interface SuggestZoneRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestZone {
    id?: number;
    name?: string;
    is_active?: boolean;
  }
  export interface SuggestZoneResponse {
    results?: SuggestZone[];
    total?: number;
  }
  export interface ZoneGroupService {
    list(
      request: ListZoneGroupRequest,
      metadata?: any
    ): Observable<ListZoneGroupResponse>;
    create(request: CreateZoneGroup, metadata?: any): Observable<ZoneGroup>;
    get(request: ZoneGroupId, metadata?: any): Observable<ZoneGroup>;
    update(request: UpdateZoneGroup, metadata?: any): Observable<ZoneGroup>;
    delete(
      request: ZoneGroupId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestZoneGroupRequest,
      metadata?: any
    ): Observable<SuggestZoneGroupResponse>;
    deleteZone(
      request: DeleteZoneRequest,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
  }
  export interface ZoneGroupId {
    id?: number;
  }
  export interface DeleteZoneRequest {
    id?: number;
    zone_id?: number;
  }
  export interface ZoneGroup {
    id?: number;
    name?: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
    zones?: Zone[];
  }
  export interface UpdateZoneGroup {
    id?: number;
    name?: string;
    is_active?: boolean;
    zone_ids?: number[];
  }
  export interface CreateZoneGroup {
    name?: string;
    is_active?: boolean;
    zone_ids?: number[];
  }
  export interface ListZoneGroupRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListZoneGroupResponse {
    results?: ZoneGroup[];
    total?: number;
  }
  export interface SuggestZoneGroupRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestZoneGroup {
    id?: number;
    name?: string;
    is_active?: boolean;
  }
  export interface SuggestZoneGroupResponse {
    results?: SuggestZoneGroup[];
    total?: number;
  }
  export interface ZoneGroupRestrictionService {
    list(
      request: ListZoneGroupRestrictionRequest,
      metadata?: any
    ): Observable<ListZoneGroupRestrictionResponse>;
    create(
      request: CreateZoneGroupRestriction,
      metadata?: any
    ): Observable<ZoneGroupRestriction>;
    update(
      request: UpdateZoneGroupRestriction,
      metadata?: any
    ): Observable<ZoneGroupRestriction>;
    get(
      request: ZoneGroupRestrictionId,
      metadata?: any
    ): Observable<ZoneGroupRestriction>;
    delete(
      request: ZoneGroupRestrictionId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
  }
  export interface ZoneGroupRestrictionId {
    id?: number;
  }
  export interface CreateZoneGroupRestriction {
    zone_group_id?: number;
    country_iso_code?: string;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
  }
  export interface UpdateZoneGroupRestriction {
    id?: number;
    zone_group_id?: number;
    country_iso_code?: string;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
  }
  export interface ZoneGroupRestriction {
    id?: number;
    zone_group?: ZoneGroup;
    country?: Country;
    message?: Message;
    popup?: Popup;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface ListZoneGroupRestrictionRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
    is_country_restriction?: boolean;
  }
  export interface ListZoneGroupRestrictionResponse {
    results?: ZoneGroupRestriction[];
    total?: number;
  }
  export interface Country {
    country_code?: string;
    country_name_ru?: string;
  }
  export interface ZoneToGeoService {
    list(
      request: ListZoneToGeoRequest,
      metadata?: any
    ): Observable<ListZoneToGeoResponse>;
    validate(
      request: ValidateZoneToGeoRequest,
      metadata?: any
    ): Observable<ValidateZoneToGeoResponse>;
    get(request: ZoneToGeoId, metadata?: any): Observable<ZoneToGeo>;
    update(
      request: ZoneToGeoUpdateRequest,
      metadata?: any
    ): Observable<ZoneToGeo>;
    delete(
      request: ZoneToGeoId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
    suggest(
      request: SuggestZoneToGeoRequest,
      metadata?: any
    ): Observable<SuggestZoneToGeoResponse>;
  }
  export interface ZoneToGeoId {
    geo_id?: string;
  }
  export interface ZoneToGeo {
    zone?: Zone;
    geo_id?: string;
    description?: string;
    country_iso_code?: string;
    city?: string;
    city_geo_id?: string;
    region?: string;
  }
  export interface ZoneToGeoUpdateRequest {
    zone_id?: number;
    geo_id?: string;
    geo_id_new?: string;
  }
  export interface ListZoneToGeoRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListZoneToGeoResponse {
    results?: ZoneToGeo[];
    total?: number;
  }
  export interface SuggestZoneToGeoRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestZoneToGeo {
    geo_id?: string;
    description?: string;
    city?: string;
    region?: string;
  }
  export interface SuggestZoneToGeoResponse {
    results?: SuggestZoneToGeo[];
    total?: number;
  }
  export interface ValidateZoneToGeoRequest {
    geo_ids?: string[];
    zone_id?: number;
  }
  export interface ValidateZoneToGeoResponse {
    results?: ZoneToGeoConflict[];
    total?: number;
  }
  export interface ZoneToGeoConflict {
    zone_name?: string;
    geo_id?: string;
    description?: string;
  }
}
export namespace platform {
  export interface Clients {
    create(request: Client, metadata?: any): Observable<Client>;
    get(request: ClientId, metadata?: any): Observable<Client>;
    list(
      request: ListClientRequest,
      metadata?: any
    ): Observable<ListClientResponse>;
    update(request: Client, metadata?: any): Observable<Client>;
    upsert(request: Client, metadata?: any): Observable<Client>;
    delete(
      request: ClientId,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
  }
  export interface ClientId {
    id?: number;
  }
  export interface Client {
    id?: number;
    app_name?: string;
    callback_uri?: string;
    client_secret?: string;
  }
  export interface ListClientRequest {
    limit?: number;
    offset?: number;
  }
  export interface ListClientResponse {
    results?: Client[];
    total?: number;
  }
  export interface Oauth {
    token(request: TokenRequest, metadata?: any): Observable<TokenResponse>;
    authorize(
      request: AuthorizeRequest,
      metadata?: any
    ): Observable<google.protobuf.Empty>;
  }
  export interface TokenRequest {
    client_id?: number;
    client_secret?: string;
    grant_type?: string;
    username?: string;
    password?: string;
    refresh_token?: string;
    code?: string;
    token?: string;
  }
  export enum Scope {
    read = 0,
    write = 1,
  }
  export interface TokenResponse {
    success?: boolean;
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    refresh_token?: string;
    scope?: Scope;
    uid?: number;
    info?: string;
  }
  export interface AuthorizeRequest {
    client_id?: number;
    redirect_uri?: string;
    response_type?: string;
  }
}
