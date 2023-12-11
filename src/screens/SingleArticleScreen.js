import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import {faImage} from '@fortawesome/free-regular-svg-icons';

const SingleArticleScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={[styles.wholePage]}>
        <Text
          style={{
            color: '#224589',
            fontWeight: '700',
            fontSize: 20,
            marginBottom: 5,
            marginTop: 20,
            alignSelf: 'center',
          }}>
          MIRIAM THE OVERCOMER
        </Text>
        <FontAwesomeIcon
          icon={faImage}
          size={250}
          style={{alignSelf: 'center'}}
          color="gray"
        />
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            fontSize: 16,
            marginBottom: 5,
            marginTop: 20,
            alignSelf: 'center',
          }}>
          Miriam faced struggles and loss early in life.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '89%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#737070',
              fontWeight: '400',
              fontSize: 10,
              marginBottom: 10,
            }}>
            Nov 16 2023
          </Text>
          <Text
            style={{
              color: '#737070',
              fontWeight: '400',
              fontSize: 10,
              marginBottom: 10,
            }}>
            Ron Miller
          </Text>
        </View>
        <Text style={{textAlign: 'justify'}}>
          It was originally taken from a Latin text written by a Roman Scholar,
          Sceptic and Philosopher by the name of Marcus Tullius Cicero, who
          influenced the Latin language greatly. The "filler" text we know today
          has been altered over the years (in fact "Lorem" isn't actually a
          Latin word.
        </Text>
        <Text>
          It is suggested that the reason that the text starts with "Lorem" is
          because there was a page break spanning the word "Do-lorem". If you a
          re looking for a translation of the text, it's meaningless. The
          original text talks about the pain and love involved in the pursuit of
          pleasure or something like that. The reason we use Lorem Ipsum is
          simple.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleArticleScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F1F3F6',
    paddingHorizontal: 20,
    height: '100%',
  },
});
