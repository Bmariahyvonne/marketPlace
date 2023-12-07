import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGoogle, faFacebook} from '@fortawesome/free-brands-svg-icons';

const LogInScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <View>
          <Text style={[styles.signUpText]}>First let’s sign you in!</Text>
        </View>

        <TouchableOpacity style={[styles.topLinkButton]}>
          <FontAwesomeIcon
            icon={faGoogle}
            size={25}
            color="red"
            style={styles.googleIcon}
          />
          <Text style={[styles.buttonText]}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomLinkButton]}>
          <FontAwesomeIcon
            icon={faFacebook}
            size={25}
            color="#224589"
            style={styles.googleIcon}
          />
          <Text style={[styles.buttonText]}>Sign in with Facebook</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', flex: 1, padding: 20}}>
          <View style={[styles.borderLine]}></View>
          <View style={[styles.borderLine3]}>
            <Text style={{fontSize: 20}}>Or</Text>
          </View>
          <View style={[styles.borderLine2]}></View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#737070"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Phone Number"
              placeholderTextColor="#737070"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#737070"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={{width: 287}}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.nextColor}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signInText}>
              Don’t have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    height: '100%',
  },
  signUpText: {
    color: '#224589',
    fontSize: 20,
    alignSelf: 'center',
    paddingTop: 100,
  },
  topLinkButton: {
    height: 40,
    width: 287,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomLinkButton: {
    height: 40,
    width: 287,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  googleIcon: {
    marginRight: 10,
  },
  borderLine: {
    backgroundColor: 'white',
    height: 25,
    borderWidth: 1,
    borderBottomColor: '#BEBCBC',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'left',
  },
  borderLine2: {
    backgroundColor: 'white',
    height: 25,
    borderWidth: 1,
    borderBottomColor: '#BEBCBC',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'left',
  },
  borderLine3: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 100,
    height: 50,
  },
  buttonText: {
    color: '#737070',
    fontSize: 14,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: 'white',
    borderColor: '##898484',
    borderWidth: 1,
    borderRadius: 5,
    width: '85%',
    height: 40,
    marginBottom: 15,
    alignItems: 'left',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#224589',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 287,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  nextColor: {
    color: 'white',
    fontSize: 14,
  },
  signInText: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#A6A4A4',
    marginTop: 5,
  },
  forgotText: {
    color: '#A6A4A4',
    marginLeft: 25,
  },
});
