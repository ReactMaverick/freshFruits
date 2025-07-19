import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    View,
    Text,
    Image,
    ImageBackground,
    Pressable,
} from 'react-native';
import styles from './style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import { BANNERSLIDER1 } from '../../constants/images';
import Ctext from '../Ctext';

export default function BannerSliderItem({ navigation }) {
    return (
        <KeyboardAvoidingView
            behavior={platform === 'ios' ? 'padding' : 'height'}
            style={commonStyles.keyboardAvoidingView}>
            <SafeAreaView>
                <View style={styles.sliderCardMain}>
                    <ImageBackground source={BANNERSLIDER1} resizeMode='cover' style={styles.sliderCard}>
                        <View style={styles.sliderCardLeft}>
                            <Ctext style={styles.sliderText}>Spring Harvest<Ctext style={styles.TextColorChange}> Sale</Ctext></Ctext>
                            <Ctext style={styles.sliderSubText}>Create your perfect fruit basket and save<Ctext style={styles.TextColorChange}> 20%</Ctext></Ctext>
                            <Pressable style={styles.sliderButton}>
                                <Ctext style={styles.sliderButtonText}>Shop Now</Ctext>
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}