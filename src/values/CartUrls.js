import {showToast} from '../constants/constants';
import {getData, postData} from './api/apiprovider';
import {
  ADD_TO_CART_URL,
  DELETE_CART_PRODUCT_URL,
  UPDATE_CART_QUANTITY_URL,
  VIEW_CART_URL,
} from './api/url';

//adding products to cart
export const addToCart = async (
  userId,
  sessionId,
  products_id,
  productAttributesId,
  quantity = 1,
) => {
  console.log('item is being adding');
  //------quantity=1   added(both value and parameter)
  //in the quantity data which is send must be 1
  try {
    const response = await postData(ADD_TO_CART_URL, {
      products_id,
      prod_attributeids: productAttributesId,
      customers_id: userId,
      session_id: sessionId,
      quantity,
    });
    const data = await response;
    if (data.status) {
      return {
        success: true,
        messgae: data.message,
        newCartItems: data.cart,
      };
    } else if (!data.status) {
     
      return {
        success: false,
        message: data.message || 'Login and Try again',
      };
    }
  } catch (error) {
    // console.error('Error adding item to cart :', error.message);
    return {
      success: false,
      message: 'Server is in Maintainence...',
    };
  }
};

//viewing the total Cart products
export const viewCartProducts = async (customerId, sessionId) => {
  try {
    const response = await getData(VIEW_CART_URL(customerId, sessionId));
    const data = await response;
    if (data.status) {
      // console.log("the data is view cart is updated and api called success")
      return {
        success: data.status,
        cartItems: data.cart,
      };
    }
    else if(!data.status) {
      return{
       success:false,
      message:"Login and Try Again"
    }
  }
  } catch (error) {
    return {
      success:false,
      message:"Login and Try Again"
    };
  }
};

//updating product quantity
export const updateProductQuantity = async (
  basketId,
  productId,
  quantity,
  attributeIds,
) => {
  try {
    const response = await postData(UPDATE_CART_QUANTITY_URL, {
      customers_basket_id: basketId,
      products_id: productId,
      cart_quantity: quantity,
      AttributeIds: attributeIds,
    });
    // const data = await response;
    console.log('the data of updae cart quantity is ', response);
    //   if (data.status) {

    // }
  } catch (error) {
    console.error('Error fetching  data:', error);
  }
};

//deleting products from cart
export const deleteCartproducts = async id => {
  console.log('entry point captured');
  try {
    const response = await postData(DELETE_CART_PRODUCT_URL(id));
    const data = await response;
    console.log("thae data returned from delete cart is ",data)
    if (data.status) {
      return {
        message: data.message || "Cart Item Deleted Successfully",
        success: data.status,
      };
    }
    else if(!data.status){
      return {
        message: data.message || "Login and Try After Sometime",
        success: data.status,
      };
    }
  } catch (error) {
    console.error('Error fetching meeting data:', error);
    return {
      message: "Login and Try After Sometime",
      success: data.status,
    };
  }
};
