import { postData } from "../values/api/apiprovider";
import { ADD_WISHLIST_URL } from "../values/api/url";

export const addWishlistProduct=async(userId,productId,attributeId)=>{
    console.log("the data to be send for adding item is wishlist is ",{userId,productId,attributeId})
    try {
      const response = await postData(ADD_WISHLIST_URL,{
        customers_id:userId ,
        products_id: productId,
        products_attributes_prices_id: attributeId
      });
      const data = await response;
      console.log("the message provided by add wishlist api is --- ---- ",data)
//       if(data.status){
//   setWishlistItems(data.result)
//       }
//       else{
//         showToast('error',"Login and Try after Sometime")
//       }   
    }
     catch (error) {
      console.error('Error occured in add wishlist cart :', error.message);
        showToast('error',"Login and Try after Sometime")
    }
  }