import { Dimensions } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
export const deviceHeight = Dimensions.get('window').height;

//Font constants
export const BIG = RFPercentage(6);
export const H1BIG = RFPercentage(5);
export const H1 = RFPercentage(4.5);
export const H2 = RFPercentage(4);
export const H3 = RFPercentage(3.5);
export const H4 = RFPercentage(3.0);
export const H5 = RFPercentage(2.8);
export const H6 = RFPercentage(2.6);
export const p = RFPercentage(2.4);
export const small = RFPercentage(2.0);
export const smallS = RFPercentage(1.8);

// for padding
export const padding5 = 5;
export const padding10 = 10;

// for border radius
export const borderRadiusDefault = 10;

export const fontFamily = {
  Bold: 'Nunito-Bold',
  Light: 'Nunito-Light',
  Medium: 'Nunito-Medium',
  Regular: 'Nunito-Regular',
};
