
import { showToast } from '../constants/constants';
import {getData, postData} from './api/apiprovider';
import {ADD_TO_CART_URL, DELETE_CART_PRODUCT_URL, UPDATE_CART_QUANTITY_URL, VIEW_CART_URL} from './api/url';


//adding products to cart
export const addToCart = async (userId,sessionId,products_id,productAttributesId,quantity=1) => {
  console.log("item is being adding")
  //------quantity=1   added(both value and parameter)
  //in the quantity data which is send must be 1
  try {
      const response = await postData(ADD_TO_CART_URL,{
        products_id,prod_attributeids:productAttributesId,
        customers_id:userId,session_id:sessionId,quantity
      });
      const data = await response;
      //console.log("the data of add to cart is -<<<-------> ",data)
      // console.log("the response message is ",data)
      if (data.status) {
        console.log("message from add cart",data.message)
        console.log("the data is ",data)
     return {
      success:true,
      messgae:data.message,
      newCartItems:data.cart
     }}
     else if(!data.status){
      console.log("message from add cart",data.message)
      return {
        success:false,
        message:data.message
      }
     }
    }
     catch (error) {
      console.error('Error adding item to cart :', error.message);
      return {
        success:false,
        message:"Server is in Maintainence..."
      }
    }
};


//viewing the total Cart products
export const viewCartProducts = async (customerId, sessionId) => {
  try {
    const response = await getData(VIEW_CART_URL(customerId, sessionId));
    const data = await response;
    if (data.status) {
        // console.log("the data is view cart is updated and api called success")
        return data.cart
      }
    } catch (error) {
      console.error('Error fetching cart data: ------ ---- ------ >>>>', error);
      console.log("the data not fetched properly")
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
        console.log("the data of updae cart quantity is ",response)
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
          console.log("ok CART ITEM deleted properly AND RETURN DATA IS",data.status)  
          return {
            message:data.message,
            // newCartItems:data.cart,
            success:data.status
          }  
        }
      } catch (error) {
        console.error('Error fetching meeting data:', error);
        return "Something went wrong"
      }
}