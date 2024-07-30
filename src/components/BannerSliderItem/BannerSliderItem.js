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

export default function BannerSliderItem({ navigation }) {
    return (
        <KeyboardAvoidingView
            behavior={platform === 'ios' ? 'padding' : 'height'}
            style={commonStyles.keyboardAvoidingView}>
            <SafeAreaView>
                <View style={styles.sliderCardMain}>
                    <ImageBackground source={BANNERSLIDER1} resizeMode='cover' style={styles.sliderCard}>
                        <View style={styles.sliderCardLeft}>
                            <Text style={styles.sliderText}>Spring Harvest<Text style={styles.TextColorChange}> Sale</Text></Text>
                            <Text style={styles.sliderSubText}>Create your perfect fruit basket and save<Text style={styles.TextColorChange}> 20%</Text></Text>
                            <Pressable style={styles.sliderButton}>
                                <Text style={styles.sliderButtonText}>Shop Now</Text>
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}