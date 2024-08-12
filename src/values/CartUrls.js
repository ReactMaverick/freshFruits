
import { showToast } from '../constants/constants';
import {getData, postData} from './api/apiprovider';
import {ADD_TO_CART_URL, DELETE_CART_PRODUCT_URL, UPDATE_CART_QUANTITY_URL, VIEW_CART_URL} from './api/url';


//adding products to cart
export const addToCart = async (userId,sessionId,products_id,productAttributesId) => {
  try {
      const response = await postData(ADD_TO_CART_URL,{
        products_id,prod_attributeids:productAttributesId,
        customers_id:userId,session_id:sessionId,quantity:1
      });
      const data = await response;
      console.log("the data of add to cart is --- ",data)
      if (data.status) {
        showToast('success',"Item Added to Cart")
    }
    } catch (error) {
      console.error('Error fetching  data:', error);
    }
};



//viewing the total Cart products
export const viewCartProducts = async (customerId, sessionId) => {
  try {
    const response = await getData(VIEW_CART_URL(customerId, sessionId));
    const data = await response;
    if (data.status) {
        // console.log("the data is ",data.cart)
        return data.cart
    }
  } catch (error) {
    console.error('Error fetching meeting data:', error);
    return "Something went wrong"
  }
};


//updating product quantity
export const updateProductQuantity=async(basketId,productId,quantity,attributeIds)=>{
    try {
        const response = await postData(UPDATE_CART_QUANTITY_URL,{
            customers_basket_id:basketId,
            products_id:productId,
            cart_quantity:quantity,
            AttributeIds:attributeIds
        });
        // const data = await response;
        console.log("the data of add to cart is ",quantity)
      //   if (data.status) {
    
      // }
      } catch (error) {
        console.error('Error fetching  data:', error);
      } 
}


//deleting products from cart
export const deleteCartproducts=async(id)=>{
    console.log("entry point captured")
    try {
        const response = await postData(DELETE_CART_PRODUCT_URL(id));
        const data = await response;
        if (data.status) {
            // console.log("the data is ",data.cart)
          console.log("ok deleted properly")
        }
      } catch (error) {
        console.error('Error fetching meeting data:', error);
        return "Something went wrong"
      }
}