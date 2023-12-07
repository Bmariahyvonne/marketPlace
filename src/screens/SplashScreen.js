// SplashScreen.js
import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Add any necessary initialization code here
    // For example, you might want to check if the user is authenticated

    // Redirect to the main screen after a delay
    const timeoutId = setTimeout(() => {
      navigation.navigate('LogInScreen'); // Replace with the name of your main screen
    }, 2000); // Adjust the delay as needed

    // Clean up the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#224589',
      }}>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <View>
          <Text style={[styles.welcomeText]}>Welcome to</Text>
          <Image
            source={require('../images/logo_white.png')}
            style={{
              width: 470,
              height: 130,
              alignSelf: 'center',
              marginTop: 40,
            }}
          />
        </View>
        <View style={[styles.bottomText]}>
          <Text>Ministry of</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wholePage: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: '100%',
  },
  welcomeText: {
    marginTop: 200,
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  signupLink: {
    marginTop: 180,
    color: 'white',
    alignSelf: 'center',
  },
  sloganText: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  bottomText: {},
});
