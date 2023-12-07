import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const VerifyScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <View>
          <Text style={[styles.verifyMessage]}>Verify OTP</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    height: '100%',
  },
  verifyMessage: {
    color: '#224589',
    fontSize: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
