import { getData, postData } from "../values/api/apiprovider";
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
     
      if(data.status){
 return {
  success:true,
  wishlist:data.wishlist_data,
  message:data.result.message,
 }
      }
      else{
       return {
        success:false,
        wishlist:[],
        message:"Login and Try Again"
       }
      }   
    }
     catch (error) {
   
      return {
        success:false,
        wishlist:[],
        message:"Login and Try Again"
       }
    }
  }



  export const viewWishlist=async(userId)=>{
    try {
      const response = await getData(VIEW_WISHLIST_URL(userId));
      const data = await response;


      console.log("teh view wishlist has a data which returns",data)
      if (!data.result) {
        return {
          success: false,
          message: 'Login and try again',
        };
      }

      if(data.result.length>0 || data.result.length==0){
 return {
  success: true,
  message: data.message || "Wishlist Fetched Successfully",
  wishlist: data.result,
 }
      }
     
       
    }
     catch (error) {
      return {
        success: false,
        message: ' Login and try again ',  
      };
    }
  }