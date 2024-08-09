import { Dimensions, Platform } from 'react-native';
import Toast from 'react-native-toast-message';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;


export   const fcmToken =
'eeM_D1MZRyWDt48h_R4DSz:APA91bGMdk2_vC1QANkVcUcNpmsliDRmSpixFI5i89BzLm_NsXNG22ln-RovzaENJvVDSgPkNG1Zon83Uer0GcDUFWwL7lGhwovcok9M6cl9bl3HO97RHr783_UsiHl2iPz8uERH6fRK0';

export const platform = Platform.OS;

export const showToast = (type, message) => {
  Toast.show({
    type: type,
    text1: message,
    position: 'top',
  });
};
