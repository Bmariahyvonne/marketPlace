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
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {Dropdown} from 'react-native-element-dropdown';
import RadioButtonRN from 'radio-buttons-react-native';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const data2 = [
  {
    label: 'Send verification OTP to Email address',
  },
  {
    label: 'Send verification OTP to Phone number',
  },
];

const SignUpScreen = props => {
  const {navigation} = props;

  const [value, setValue] = useState(null);

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <View>
          <Text style={[styles.signUpText]}>Let's sign you up!</Text>
        </View>

        <TouchableOpacity style={[styles.topLinkButton]}>
          <Image
            source={require('../images/google.png')}
            style={{
              width: 25,
              height: 25,
              alignSelf: 'center',
              marginRight: 10,
            }}
          />
          <Text style={[styles.buttonText]}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomLinkButton]}>
          <FontAwesomeIcon
            icon={faFacebook}
            size={25}
            color="#224589"
            style={styles.googleIcon}
          />
          <Text style={[styles.buttonText]}>Sign up with Facebook</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', flex: 1, padding: 20, justifyContent: 'space-around'}}>
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
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputView}>
            <Dropdown
              style={styles.textInput}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder="Please Select Profession"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="NIN"
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
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              placeholderTextColor="#737070"
            />
          </View>
        </View>

        <View style={styles.radioContainer}>
          <RadioButtonRN
            data={data2}
            selectedBtn={e => console.log(e)}
            box={false}
            circleSize={16}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('VerifyScreen')}>
            <Text style={styles.nextColor}>NEXT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LogInScreen')}>
            <Text style={styles.signInText}>
              Already have an account? Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
    paddingTop: 25,
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
    width: '32%',
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
    width: '32%',
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
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  radioContainer: {
    justifyContent: 'center',
    marginLeft: 15,
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
});
