import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';
import { platform } from '../../constants/constants';
import React, { } from 'react';
import Header from '../../components/Header/Header';
import PopularFruitsSliderItem from '../../components/PopularFruitsSliderItem/PopularFruitsSliderItem';

const data = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
];
export default function Wishlist({ navigation }) {

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        < Header
          navigation={navigation}
          leftContent={'backBtn'}
          MiddleContent={'pageTitle'}
          rightContent={'blankBox'}
          BGCOLOR={'transparent'}
        />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.MainBox}>
            <FlatList
              data={data}
              renderItem={({ item }) => <PopularFruitsSliderItem />}
              keyExtractor={item => item.id}
              numColumns={2}
              columnWrapperStyle={styles.column}
            />
          </View>
        </ScrollView>
      </SafeAreaView >
    </KeyboardAvoidingView >
  );
}
