import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    View,
    Text,
    Image,
    ImageBackground,
} from 'react-native';
import styles from './style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { BANNERSLIDER1 } from '../../constants/images';

export default function BannerSliderItem({ navigation }) {
    return (
        <KeyboardAvoidingView
            behavior={platform === 'ios' ? 'padding' : 'height'}
            style={commonStyles.keyboardAvoidingView}>
            <SafeAreaView>
                <View style={styles.sliderCardMain}>
                    <ImageBackground source={BANNERSLIDER1} resizeMode='contain' style={styles.sliderCard}>
                        <View style={styles.sliderCardLeft}>
                            <Text style={styles.sliderText}>Spring Harvest Sale</Text>
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}