const GUEST_LOGINS = {
    customer: {
        username: 'andrey',
        password: 'asdasd'
    },
    business: {
        username: 'kevin',
        password: 'asdasd24'
    }
};

const API_BASE_URL = 'http://127.0.0.1:8000/api/';
const STATIC_BASE_URL = 'http://127.0.0.1:8000/';

// Auth endpoints
const LOGIN_URL = 'login/';
const REGISTER_URL = 'registration/';

// User profile endpoints
const PROFILE_URL = 'profile/';  // profile/<id>/
const BUSINESS_PROFILES_URL = 'profiles/business/';
const CUSTOMER_PROFILES_URL = 'profiles/customer/';

// Offers endpoints
const OFFER_URL = 'offers/';
const OFFER_DETAIL_URL = 'offerdetails/';

// Orders endpoints
const ORDER_URL = 'orders/';
const OFFER_INPROGRESS_COUNT_URL = 'order-count/';
const OFFER_COMPLETED_COUNT_URL = 'completed-order-count/';

// Reviews endpoint
const REVIEW_URL = 'reviews/';

// Core info endpoint
const BASE_INFO_URL = 'base-info/';

const PAGE_SIZE = 6;