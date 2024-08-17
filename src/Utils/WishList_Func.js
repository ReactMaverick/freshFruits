import { postData } from "../values/api/apiprovider";
import { ADD_WISHLIST_URL, VIEW_WISHLIST_URL } from "../values/api/url";

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



//   export const viewWishlist=async(userId)=>{
//     try {
//       const response = await getData(VIEW_WISHLIST_URL(userId));
//       const data = await response;
//   console.log("the length of the wishlist response is",data.result.length)
//      console.log("the message provided by view wishlist api is --- ---- ",data)
//       if(data.status){
//  return data.result
//       }
//       else{
//         // showToast('error',"Login and Try after Sometime")
//       }   
//     }
//      catch (error) {
//       console.error('Error occured in view wishlist cart :', error.message);
//         showToast('error',"Login and Try after Sometime")
//     }
//   }