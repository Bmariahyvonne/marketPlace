import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  
  const SingleBlogScreen = () => {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView style={[styles.wholePage]}>
          <Text style={[styles.dateText]}>Nov 16 2023</Text>
          <View style={[styles.imagePlaceHolder]}></View>
          <Text style={styles.headingText}>MIRIAM THE OVERCOMER</Text>
          <Text style={styles.authorText}>By Ron Miller</Text>
          <Text style={{textAlign: 'justify', marginLeft: 5, color: 'black'}}>
            It was originally taken from a Latin text written by a Roman Scholar,
            Sceptic and Philosopher by the name of Marcus Tullius Cicero, who
            influenced the Latin language greatly. The "filler" text we know today
            has been altered over the years (in fact "Lorem" isn't actually a
            Latin word.
          </Text>
          <Text></Text>
          <Text style={{textAlign: 'justify', marginLeft: 5, color: 'black'}}>
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
  
  export default SingleBlogScreen;
  
  const styles = StyleSheet.create({
    wholePage: {
      backgroundColor: '#F1F3F6',
      paddingHorizontal: 25,
      height: '100%',
    },
    dateText: {
      color: '#737070',
      fontSize: 10,
      marginBottom: 20,
      marginTop: 20,
      marginLeft: 10,
    },
    imagePlaceHolder: {
      backgroundColor: '#D9D9D9',
      height: 200,
      width: '100%',
      alignSelf: 'center',
      borderRadius: 5,
    },
    headingText: {
      color: '#224589',
      fontWeight: '700',
      fontSize: 13,
      marginBottom: 5,
      marginTop: 20,
      marginLeft: 5,
    },
    authorText: {
      color: '#737070',
      fontWeight: '400',
      fontSize: 10,
      marginBottom: 20,
      marginLeft: 5,
    },
  });
  