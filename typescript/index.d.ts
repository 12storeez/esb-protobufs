import { Observable } from "rxjs";

export namespace google.protobuf {
  export interface Empty {}
}
export namespace feedbacks {
  export interface Mobile {
    App(request: ParamsApp): Observable<ResponseOk>;
    Store(request: ParamsStore): Observable<ResponseOk>;
    Order(request: ParamsOrder): Observable<ResponseOk>;
    Categories(request: google.protobuf.Empty): Observable<ResponseCategories>;
    ReasonsByOrder(request: ParamsReasonsByOrder): Observable<ResponseReasons>;
    ReasonsByStore(request: google.protobuf.Empty): Observable<ResponseReasons>;
    CanBeSaved(request: CanBeSavedParams): Observable<ResponseOk>;
  }
  export interface Store {
    New(request: NewParams): Observable<NewResponse>;
    Patch(request: PatchParams): Observable<ResponseOk>;
    NewOrder(request: NewOrderParams): Observable<NewOrderResponse>;
    PatchOrder(request: PatchOrderParams): Observable<ResponseOk>;
  }
  export interface NPS {
    New(request: NewNPSParams): Observable<NewNpsResponse>;
    Update(request: UpdateNPSParams): Observable<ResponseOk>;
  }
  export interface PortalFeedbackService {
    Delete(request: PortalFeedbackId): Observable<google.protobuf.Empty>;
    List(
      request: ListPortalFeedbackRequest
    ): Observable<ListPortalFeedbackResponse>;
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
    Emit(request: EventData): Observable<Result>;
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
    SuggestCountry(
      request: SuggestCountryParams
    ): Observable<SuggestCountryResponse>;
    CountryDetails(request: CountryDetailsParams): Observable<Country>;
    SuggestCity(request: SuggestCityParams): Observable<SuggestCityResponse>;
    CityDetails(request: CityDetailsParams): Observable<City>;
    CityDetailsByGeoID(request: CityDetailsByGeoIDParams): Observable<City>;
    DefaultCityList(
      request: DefaultCityListParams
    ): Observable<SuggestCityResponse>;
    CityDetailsByIP(request: CityDetailsByIPParams): Observable<City>;
    SuggestAddress(
      request: SuggestAddressParams
    ): Observable<SuggestAddressResponse>;
    AddressDetails(request: AddressDetailsParams): Observable<Address>;
    AddressDetailsByGeoID(
      request: AddressDetailsByGeoIDParams
    ): Observable<Address>;
    AddressZones(request: AddressZonesParams): Observable<AddressZonesResponse>;
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
    iso_code?: string;
    title?: string;
    continent?: Continent;
    phone?: Phone;
  }
  export interface CountryDetailsParams {
    locale?: LocaleType;
    iso_code?: string;
  }
  export interface Country {
    iso_code?: string;
    title?: string;
    continent?: Continent;
    capital?: Capital;
    postal_code_format?: string;
    currency_code?: string;
    phone?: Phone;
  }
  export interface Phone {
    prefix?: number;
    masks?: string[];
    primary_mask?: string;
  }
  export interface Continent {
    code?: string;
    title?: string;
  }
  export interface Capital {
    title?: string;
    location?: Location;
    postal_code?: string;
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
    type?: string;
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
    title?: string;
    full_title?: string;
    country_iso_code?: string;
    postal_code?: string;
    type?: string;
    region?: Region;
    state?: State;
    location?: Location;
    additional?: CityAdditional;
  }
  export interface State {
    title?: string;
    iso_code?: string;
  }
  export interface Region {
    id?: string;
    title?: string;
    iso_code?: string;
    type?: string;
  }
  export interface Location {
    latitude?: number;
    longitude?: number;
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
    query_for_details?: string;
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
    country_iso_code?: string;
    region?: Region;
    state?: State;
    city?: City;
    street?: string;
    house?: string;
    block?: string;
    postal_code?: string;
    location?: Location;
    additional?: AddressAdditional;
  }
  export interface AddressAdditional {
    is_in_mkad?: boolean;
    is_in_kad?: boolean;
    fias_level?: string;
  }
  export interface CityAdditional {
    kladr_id?: string;
    is_crimea?: boolean;
    fias_level?: string;
  }
  export interface AddressZonesParams {
    locale?: LocaleType;
    country_iso_code?: string;
    query?: string;
  }
  export interface AddressZonesResponse {
    id?: string;
    region_id?: string;
    area_id?: string;
    city_id?: string;
    settlement_id?: string;
    street_id?: string;
    house_id?: string;
    flat_id?: string;
  }
  export interface DefaultCityListParams {
    ip?: string;
  }
}
export namespace mercaux {
  export interface StocksService {
    List(request: ListRequest): Observable<ListStocksResponse>;
  }
  export interface CatalogService {
    List(request: ListRequest): Observable<ListCatalogResponse>;
  }
  export interface StoresService {
    List(request: google.protobuf.Empty): Observable<ListStoresResponse>;
  }
  export interface SellersService {
    List(request: google.protobuf.Empty): Observable<ListSellersResponse>;
  }
  export interface OrdersService {
    New(request: NewOrderRequest): Observable<NewOrderResponse>;
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
    barcode?: number;
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
  }
  export interface Stock {
    barcode?: number;
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
    Contacts(
      request: google.protobuf.Empty
    ): Observable<ResponseMobileAPIContacts>;
    About(request: google.protobuf.Empty): Observable<ResponseMobileApiAbout>;
    Faq(request: google.protobuf.Empty): Observable<ResponseFaq>;
    Countries(request: ParamsCountries): Observable<ResponseCountries>;
    SocialNetworks(
      request: google.protobuf.Empty
    ): Observable<ResponseSocialNetworks>;
  }
  export interface Stores {
    All(request: ParamsStores): Observable<ResponseAllOfflineStoresInfo>;
    ByID(
      request: ParamsOfflineStoreInfoByID
    ): Observable<ResponseOfflineStoreInfoByID>;
    Cities(request: ParamsStoresCities): Observable<ResponseStoresCities>;
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
    Info(request: ParamsUser): Observable<ResponseUser>;
    Orders(request: ParamsOrders): Observable<ResponseOrders>;
    SendOSMICard(request: ParamsOSMICard): Observable<ResponseOSMICard>;
  }
  export interface Mobile {
    InitDevice(request: InitDeviceParams): Observable<InitDeviceResponse>;
    InitClient(request: InitClientParams): Observable<InitClientResponse>;
    RemoveDevice(request: RemoveDeviceParams): Observable<RemoveDeviceResponse>;
    Code(request: ParamsCode): Observable<ResponseCode>;
    CheckCode(request: ParamsCheckCode): Observable<ResponseCheckCode>;
    EditUser(request: ParamsEditUser): Observable<ResponseEditUser>;
    IsUserExist(request: IsUserExistParams): Observable<IsUserExistResponse>;
    PushClick(request: PushClickParams): Observable<PushClickResponse>;
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
  }
  export interface ParamsOrders {
    client_id?: string;
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
  }
  export interface ParamsCode {
    mobile_phone?: string;
    device_id?: string;
  }
  export interface ResponseCode {
    ok?: boolean;
    timestamp?: number;
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
export namespace orders {
  export interface Offline {
    ByClient(request: ParamsOfflineByClient): Observable<ResponseOffline>;
    GetById(request: ParamsOrderById): Observable<ResponseOfflineById>;
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
    barcode?: number;
    title?: string;
    color?: string;
    size?: string;
    qty?: number;
    sum?: number;
    discount?: number;
    family?: string;
  }
  export interface Online {
    ByClient(request: ParamsOnlineByClient): Observable<ResponseOnlineByClient>;
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
export namespace payments {
  export interface Payments {
    GetCardsByUserID(
      request: ParamsGetCardByUserID
    ): Observable<ResponseGetCardByUserID>;
    SaveUserCard(request: UserCard): Observable<ResponseSuccess>;
    DeleteCardByID(request: ParamsDeleteCardByID): Observable<ResponseSuccess>;
  }
  export interface ParamsGetCardByUserID {
    user_id?: number;
  }
  export interface ResponseGetCardByUserID {
    total?: number;
    cards?: UserCard[];
  }
  export interface ResponseSuccess {
    ok?: boolean;
  }
  export interface ParamsDeleteCardByID {
    card_id?: number;
  }
  export interface UserCard {
    id?: number;
    user_id?: number;
    type?: string;
    vendor?: string;
    number?: string;
    exp_date?: string;
    active?: boolean;
    test?: boolean;
  }
}
export namespace slack {
  export interface Tracker {
    StatusChangeTicket(
      request: StatusChangeTicketParams
    ): Observable<StatusChangeTicketResponse>;
  }
  export interface Slack {
    Send(request: SendParams): Observable<SendResponse>;
  }
  export interface StatusChangeTicketParams {
    ticket_key?: string;
    slack_channel?: string;
  }
  export interface StatusChangeTicketResponse {
    ok?: boolean;
  }
  export interface SendParams {
    channel?: string;
    email?: string;
    message?: string;
    from?: string;
    thread_ts?: string;
    type?: string;
  }
  export interface SendResponse {
    ok?: boolean;
    resp_channel?: string;
    resp_timestamp?: string;
  }
}
export namespace tracker {
  export interface TrackerSlack {
    SendTicket(request: SendTicketParams): Observable<SendTicketResponse>;
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
    Save(request: saveParams): Observable<saveResponse>;
  }
  export interface saveParams {
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
  export interface saveResponse {
    ok?: boolean;
  }
}
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
    Create(request: Error): Observable<CreateResponse>;
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
    barcode?: number;
    title_ru?: string;
    title_en?: string;
    stocks?: Stock[];
    prices?: Price[];
  }
  export interface Stock {
    barcode?: number;
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
    Get(request: Request): Observable<GetResponse>;
    GetByArticle(request: Article): Observable<GetByArticleResponse>;
  }
}
export namespace release {
  export interface ArticlesRelease {
    Create(
      request: ParamsCreateArticle
    ): Observable<ArticleReleaseActionResponse>;
    Get(request: ParamsGetArticleRelease): Observable<ArticleReleaseList>;
    GetById(request: ArticlesReleaseId): Observable<ArticleRelease>;
    Update(
      request: ParamsCreateArticle
    ): Observable<ArticleReleaseActionResponse>;
    Delete(
      request: ArticlesReleaseId
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
    Upsert(request: ListStocks): Observable<SuccessResponse>;
    Get(request: GetParams): Observable<ListStocks>;
    GetPagination(request: Request): Observable<Response>;
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
    barcode?: number;
    store_code?: number;
    quantity?: number;
    available?: number;
    reserved?: number;
  }
}
export namespace logistics {
  export interface CategoryService {
    List(request: ListCategoryRequest): Observable<ListCategoryResponse>;
    Suggest(request: SuggestCategoryRequest): Observable<ListCategoryResponse>;
  }
  export interface Category {
    id?: number;
    name?: string;
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
    List(
      request: ListCategoryDeliveryTypeRestrictionRequest
    ): Observable<ListCategoryDeliveryTypeRestrictionResponse>;
    Create(
      request: CreateCategoryDeliveryTypeRestriction
    ): Observable<CategoryDeliveryTypeRestriction>;
    Update(
      request: UpdateCategoryDeliveryTypeRestriction
    ): Observable<CategoryDeliveryTypeRestriction>;
    Get(
      request: CategoryDeliveryTypeRestrictionId
    ): Observable<CategoryDeliveryTypeRestriction>;
    Delete(
      request: CategoryDeliveryTypeRestrictionId
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
    created_at?: string;
    updated_at?: string;
  }
  export interface UpdateCategoryDeliveryTypeRestriction {
    id?: number;
    category_id?: number;
    delivery_type_id?: number;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
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
    List(
      request: ListCategoryZoneGroupRestrictionRequest
    ): Observable<ListCategoryZoneGroupRestrictionResponse>;
    Create(
      request: CreateCategoryZoneGroupRestriction
    ): Observable<CategoryZoneGroupRestriction>;
    Update(
      request: UpdateCategoryZoneGroupRestriction
    ): Observable<CategoryZoneGroupRestriction>;
    Get(
      request: CategoryZoneGroupRestrictionId
    ): Observable<CategoryZoneGroupRestriction>;
    Delete(
      request: CategoryZoneGroupRestrictionId
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
    created_at?: string;
    updated_at?: string;
  }
  export interface UpdateCategoryZoneGroupRestriction {
    id?: number;
    category_id?: number;
    zone_group_id?: number;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
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
    List(request: ListCountryRequest): Observable<ListCountryResponse>;
    Suggest(request: SuggestCountryRequest): Observable<ListCountryResponse>;
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
    List(
      request: ListDeliveryCalendarRequest
    ): Observable<ListDeliveryCalendarResponse>;
    Create(request: CreateDeliveryCalendar): Observable<DeliveryCalendar>;
    Update(request: UpdateDeliveryCalendar): Observable<DeliveryCalendar>;
    Get(request: DeliveryCalendarId): Observable<DeliveryCalendar>;
    Delete(request: DeliveryCalendarId): Observable<google.protobuf.Empty>;
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
    created_at?: string;
    updated_at?: string;
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
    created_at?: string;
    updated_at?: string;
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
    List(
      request: ListDeliveryMethodRequest
    ): Observable<ListDeliveryMethodResponse>;
    Create(request: DeliveryMethod): Observable<DeliveryMethod>;
    Get(request: DeliveryMethodId): Observable<DeliveryMethod>;
    Update(request: DeliveryMethod): Observable<DeliveryMethod>;
    Delete(request: DeliveryMethodId): Observable<google.protobuf.Empty>;
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
  export interface DeliveryModeService {
    List(
      request: ListDeliveryModeRequest
    ): Observable<ListDeliveryModeResponse>;
    Create(request: DeliveryMode): Observable<DeliveryMode>;
    Get(request: DeliveryModeId): Observable<DeliveryMode>;
    Update(request: DeliveryMode): Observable<DeliveryMode>;
    Delete(request: DeliveryModeId): Observable<google.protobuf.Empty>;
  }
  export interface DeliveryModeId {
    id?: number;
  }
  export interface DeliveryMode {
    id?: number;
    title_ru?: string;
    is_active?: boolean;
    is_backup_method?: boolean;
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
  export interface DeliveryTypeService {
    List(
      request: ListDeliveryTypeRequest
    ): Observable<ListDeliveryTypeResponse>;
    Create(request: CreateDeliveryTypeRequest): Observable<DeliveryTypeShort>;
    Get(request: DeliveryTypeId): Observable<DeliveryType>;
    Delete(request: DeliveryTypeId): Observable<google.protobuf.Empty>;
    Update(request: UpdateDeliveryType): Observable<DeliveryType>;
  }
  export interface DeliveryTypeId {
    id?: number;
  }
  export interface CreateDeliveryTypeRequest {
    transport_company_mode_id?: number;
    zone_group_id?: number;
    code?: string;
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
    cutoff_time?: string;
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
    delivery_type_intervals?: Interval[];
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
    cutoff_time?: string;
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
    created_at?: string;
    updated_at?: string;
    payment_method_to_delivery_type?: UpdatePaymentMethodToDeliveryType[];
    category_delivery_type_restrictions?: UpdateCategoryRestriction[];
    delivery_type_interval_ids?: number[];
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
    created_at?: string;
    updated_at?: string;
  }
  export interface UpdateCategoryRestriction {
    category_id?: number;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  export interface GlobalRestrictionsService {
    List(
      request: ListGlobalRestrictionRequest
    ): Observable<ListGlobalRestrictionResponse>;
    Create(request: GlobalRestriction): Observable<GlobalRestriction>;
    Update(request: GlobalRestriction): Observable<GlobalRestriction>;
  }
  export enum Restriction {
    price = 0,
    quantity = 1,
  }
  export interface GlobalRestriction {
    id?: number;
    message_id?: number;
    popup_id?: number;
    restriction?: Restriction;
    value?: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
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
    List(request: ListIntervalRequest): Observable<ListIntervalResponse>;
    Create(request: Interval): Observable<Interval>;
    Get(request: IntervalId): Observable<Interval>;
    Update(request: Interval): Observable<Interval>;
    Delete(request: IntervalId): Observable<google.protobuf.Empty>;
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
    List(request: ListMessageRequest): Observable<ListMessageResponse>;
    Create(request: Message): Observable<Message>;
    Get(request: MessageId): Observable<Message>;
    Update(request: Message): Observable<Message>;
    Delete(request: MessageId): Observable<google.protobuf.Empty>;
    Suggest(request: SuggestMessageRequest): Observable<SuggestMessageResponse>;
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
    List(
      request: ListPaymentMethodRequest
    ): Observable<ListPaymentMethodResponse>;
    Create(request: PaymentMethod): Observable<PaymentMethod>;
    Get(request: PaymentMethodId): Observable<PaymentMethod>;
    Update(request: PaymentMethod): Observable<PaymentMethod>;
    Delete(request: PaymentMethodId): Observable<google.protobuf.Empty>;
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
  export interface PopupService {
    List(request: ListPopupRequest): Observable<ListPopupResponse>;
    Create(request: Popup): Observable<Popup>;
    Get(request: PopupId): Observable<Popup>;
    Update(request: Popup): Observable<Popup>;
    Delete(request: PopupId): Observable<google.protobuf.Empty>;
    Suggest(request: SuggestPopupRequest): Observable<SuggestPopupResponse>;
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
  export interface TransportCompanyService {
    List(
      request: ListTransportCompanyRequest
    ): Observable<ListTransportCompanyResponse>;
    Create(request: TransportCompany): Observable<TransportCompany>;
    Get(request: TransportCompanyId): Observable<TransportCompany>;
    Update(request: TransportCompany): Observable<TransportCompany>;
    Delete(request: TransportCompanyId): Observable<google.protobuf.Empty>;
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
  export interface TransportCompanyModeService {
    List(
      request: ListTransportCompanyModeRequest
    ): Observable<ListTransportCompanyModeResponse>;
    Create(
      request: CreateTransportCompanyModeRequest
    ): Observable<TransportCompanyMode>;
    Get(request: TransportCompanyModeId): Observable<TransportCompanyMode>;
    Update(request: TransportCompanyMode): Observable<TransportCompanyMode>;
    Delete(request: TransportCompanyModeId): Observable<google.protobuf.Empty>;
    GetIntervalList(
      request: TransportCompanyModeId
    ): Observable<ListIntervalResponse>;
    CreateInterval(
      request: TransportCompanyModeIntervalRequest
    ): Observable<Interval>;
    Suggest(
      request: SuggestTransportCompanyModeRequest
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
  }
  export interface TransportCompanyMode {
    id?: number;
    transport_company?: TransportCompany;
    delivery_mode?: DeliveryMode;
    delivery_method?: DeliveryMethod;
    intervals?: Interval[];
    delivery_interval_days?: number;
    delivery_delta_days?: number;
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
  export interface ListTransportCompanyModeRequest {
    limit?: number;
    offset?: number;
    search?: string;
    sort?: string;
  }
  export interface ListTransportCompanyModeResponse {
    results?: TransportCompanyMode[];
    total?: number;
  }
  export interface SuggestTransportCompanyModeRequest {
    limit?: number;
    search?: string;
  }
  export interface SuggestTransportCompanyMode {
    id?: number;
    title?: string;
  }
  export interface SuggestTransportCompanyModeResponse {
    results?: SuggestTransportCompanyMode[];
    total?: number;
  }
  export interface WinnerService {
    Calculate(request: CalculateRequest): Observable<CalculateResponse>;
  }
  export interface CalculateRequest {
    country_iso_code?: string;
    geo_id?: string;
    cart?: CartPosition[];
  }
  export interface CartPosition {
    category?: string;
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
    List(request: ListZoneRequest): Observable<ListZoneResponse>;
    Create(request: Zone): Observable<Zone>;
    Get(request: ZoneId): Observable<Zone>;
    Update(request: Zone): Observable<Zone>;
    Delete(request: ZoneId): Observable<google.protobuf.Empty>;
    Suggest(request: SuggestZoneRequest): Observable<SuggestZoneResponse>;
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
  }
  export interface SuggestZoneResponse {
    results?: SuggestZone[];
    total?: number;
  }
  export interface ZoneGroupService {
    List(request: ListZoneGroupRequest): Observable<ListZoneGroupResponse>;
    Create(request: ZoneGroup): Observable<ZoneGroup>;
    Get(request: ZoneGroupId): Observable<ZoneGroup>;
    Update(request: UpdateZoneGroup): Observable<ZoneGroup>;
    Delete(request: ZoneGroupId): Observable<google.protobuf.Empty>;
    Suggest(
      request: SuggestZoneGroupRequest
    ): Observable<SuggestZoneGroupResponse>;
    DeleteZone(request: DeleteZoneRequest): Observable<google.protobuf.Empty>;
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
    created_at?: string;
    updated_at?: string;
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
  }
  export interface SuggestZoneGroupResponse {
    results?: SuggestZoneGroup[];
    total?: number;
  }
  export interface ZoneGroupRestrictionService {
    List(
      request: ListZoneGroupRestrictionRequest
    ): Observable<ListZoneGroupRestrictionResponse>;
    Create(
      request: CreateListZoneGroupRestrictionRequest
    ): Observable<ListZoneGroupRestrictionResponse>;
    Update(
      request: UpdateListZoneGroupRestrictionRequest
    ): Observable<ListZoneGroupRestrictionResponse>;
    Get(request: ZoneGroupRestrictionId): Observable<ZoneGroupRestriction>;
    Delete(request: ZoneGroupRestrictionId): Observable<google.protobuf.Empty>;
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
    created_at?: string;
    updated_at?: string;
  }
  export interface UpdateZoneGroupRestriction {
    id?: number;
    zone_group_id?: number;
    country_iso_code?: string;
    message_id?: number;
    popup_id?: number;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
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
  }
  export interface ListZoneGroupRestrictionResponse {
    results?: ZoneGroupRestriction[];
    total?: number;
  }
  export interface CreateListZoneGroupRestrictionRequest {
    ZoneGroupRestrictions?: CreateZoneGroupRestriction[];
  }
  export interface UpdateListZoneGroupRestrictionRequest {
    ZoneGroupRestrictions?: UpdateZoneGroupRestriction[];
  }
  export interface Country {
    country_code?: string;
    country_name_ru?: string;
  }
  export interface ZoneToGeoService {
    List(request: ListZoneToGeoRequest): Observable<ListZoneToGeoResponse>;
    Validate(
      request: ValidateZoneToGeoRequest
    ): Observable<ValidateZoneToGeoResponse>;
    Get(request: ZoneToGeoId): Observable<ZoneToGeo>;
    Update(request: ZoneToGeoUpdateRequest): Observable<ZoneToGeo>;
    Delete(request: ZoneToGeoId): Observable<google.protobuf.Empty>;
    Suggest(
      request: SuggestZoneToGeoRequest
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
export namespace notifications {
  export interface Slack {
    Send(request: SlackSendParams): Observable<SlackSendResponse>;
    SendFile(request: SlackSendFileParams): Observable<SlackSendResponse>;
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
export namespace platform {
  export interface Clients {
    Create(request: Client): Observable<Client>;
    Get(request: ClientId): Observable<Client>;
    List(request: ListClientRequest): Observable<ListClientResponse>;
    Update(request: Client): Observable<Client>;
    Upsert(request: Client): Observable<Client>;
    Delete(request: ClientId): Observable<google.protobuf.Empty>;
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
    Token(request: TokenRequest): Observable<TokenResponse>;
    Authorize(request: AuthorizeRequest): Observable<google.protobuf.Empty>;
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
