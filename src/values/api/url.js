// export const API_URL = 'http://192.168.29.198:4006/wanderInn/api/v1/'; //Localhost IP Priyam
// export const API_URL = 'http://192.168.29.39:4006/wanderInn/api/v1/'; //Localhost IP Saikat
// export const API_URL = 'http://194.163.131.163:4006/wanderInn/api/v1/'; //Server IP

// export const BASE_URL = 'http://194.163.131.163:4008';
export const BASE_URL ='http://194.163.131.163/';

//export const API_URL = BASE_URL + '/intelliTalks/api/v1/'; //Server IP
export const API_URL = BASE_URL + 'greenway/public/api/'; //Server IP

// export const IMAGE_BASE_URL = BASE_URL + '/intelliTalks/';

export const REGISTER_URL = `${API_URL}processSignup`;

export const LOGIN_URL = `${API_URL}signIn`;

export const ALL_PRODUCTS_URL = `${API_URL}newArrivedProduct`;

export const VIEW_CART_URL = (customersId,sessionId) => `${API_URL}viewCart?session_id=${sessionId}&customers_id=${customersId}`;

export const ADD_TO_CART_URL = `${API_URL}addToCart`;

export const UPDATE_CART_QUANTITY_URL = `${API_URL}updateCartQuantity`;

export const DELETE_CART_PRODUCT_URL=(id)=>`${API_URL}deleteCartItem?id=${id}`








export const VERIFY_OTP_URL = `${API_URL}verifyOTP`;

export const UPDATE_USER_URL = (id) => `${API_URL}updateUser/${id}`;

export const FORGOT_PASSWORD_URL = `${API_URL}forgotPassword`;

export const GET_USER_URL = `${API_URL}getUser`;