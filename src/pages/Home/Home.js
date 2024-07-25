import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { } from 'react';
import Header from '../../components/Header/Header';
import { colors } from '../../constants/colors';
import { Text } from 'react-native';
import BannerSlider from '../../components/BannerSlider/BannerSlider';

export default function Home({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      < Header
        navigation={navigation}
        leftContent={'HomeLeft'}
        rightContent={'HomeRight'}
        BGCOLOR={colors.White}
        BottomBar={'SearchBox'}
      />
      <ScrollView>
        <SafeAreaView>
          <View style={styles.MainBox}>
            <BannerSlider />
            <Text style={styles.HomeText}>Home</Text>

          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}
