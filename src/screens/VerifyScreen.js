import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const VerifyScreen = props => {
  const {navigation} = props;

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');

  const handleInputChange1 = text => handleInputChange(text, setInputValue1);
  const handleInputChange2 = text => handleInputChange(text, setInputValue2);
  const handleInputChange3 = text => handleInputChange(text, setInputValue3);
  const handleInputChange4 = text => handleInputChange(text, setInputValue4);

  const handleInputChange = (text, setInputValue) => {
    // Limit the input to one character
    const singleCharacter = text.slice(0, 1);
    setInputValue(singleCharacter);
  };

  const resendOTP = () => {
    alert('OTP Resent');
  };

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
          <Image
            source={require('../images/sent.png')}
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: 40,
            }}
          />
          <Text style={[styles.verifyText]}>
            To verify your account, please enter the OTP sent to
            beatrice@gmail.com
          </Text>
        </View>
        <View style={[styles.codeRow]}>
          <TextInput
            style={[styles.codeBox]}
            value={inputValue1}
            onChangeText={handleInputChange1}
            maxLength={1}
            keyboardType="numeric"
            textAlign="center" // Horizontal centering
            textAlignVertical="center" // Vertical centering
          />
          <TextInput
            style={[styles.codeBox]}
            value={inputValue2}
            onChangeText={handleInputChange2}
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
            textAlignVertical="center"
          />
          <TextInput
            style={[styles.codeBox]}
            value={inputValue3}
            onChangeText={handleInputChange3}
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
            textAlignVertical="center"
          />
          <TextInput
            style={[styles.codeBox]}
            value={inputValue4}
            onChangeText={handleInputChange4}
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
            textAlignVertical="center"
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Text style={styles.nextColor}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={resendOTP} // I added the resentdOTP alert as a placeholder for the actual function to be created to handle resending OTPs
          >
            <Text style={styles.signInText}>Resend OTP</Text>
          </TouchableOpacity>
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
    marginTop: 60,
  },
  verifyText: {
    color: '#737070',
    fontSize: 14,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 60,
    textAlign: 'center',
  },
  codeBox: {
    width: 60,
    height: 40,
    borderColor: '#898484',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  nextButton: {
    backgroundColor: '#224589',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 287,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 60,
  },
  nextColor: {
    color: 'white',
    fontSize: 14,
  },
  signInText: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#A6A4A4',
    marginTop: 15,
  },
});
