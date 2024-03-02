import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons';

const JobCompanyScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <ScrollView style={[styles.wholePage]}>
        <Progress.Bar
          progress={0.3}
          width={350}
          height={15}
          color="#CDA65A"
          unfilledColor="#D9D9D9"
          borderColor="white"
          borderRadius={10}
        />
        <View style={styles.formContainer}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Company name"
              placeholderTextColor="#737070"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Company website"
              placeholderTextColor="#737070"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Company email"
              placeholderTextColor="#737070"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder=" Company phone number"
              placeholderTextColor="#737070"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="About the company"
              placeholderTextColor="#737070"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Company location"
              placeholderTextColor="#737070"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Attach Company logo"
              placeholderTextColor="#737070"
            />
            <FontAwesomeIcon
              icon={faPaperclip}
              color="#999999"
              size={20}
              style={{marginRight: 15}}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => navigation.navigate('JobDescriptionScreen')}>
          <Text style={styles.applyText}>CONTINUE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobCompanyScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    height: '100%',
    paddingTop: 20,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  inputView: {
    borderColor: '#898484',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 14,
  },
  detailText: {
    color: '#3D3C3C',
    fontWeight: '400',
    fontSize: 10,
    marginBottom: 5,
  },
  applyButton: {
    backgroundColor: '#224589',
    height: 50,
    width: 175,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  applyText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});
