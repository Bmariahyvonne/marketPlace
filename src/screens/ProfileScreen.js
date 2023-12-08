import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import ProgressBar from '../hooks/ProgressBar';
import {faPencil, faCalendar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import RadioButtonRN from 'radio-buttons-react-native';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons';

const data = [
  {
    label: 'Female',
  },
  {
    label: 'Male',
  },
];
const ProfileScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={[styles.wholePage]}>
        <View>
          <Text style={[styles.editMessage]}>Edit Profile</Text>
          <ProgressBar />
        </View>

        <View style={[styles.editCircle]}>
          <FontAwesomeIcon icon={faPencil} color="#898484" size={40} />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Full Name"
              placeholderTextColor="#737070"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="NIN"
              placeholderTextColor="#737070"
            />
          </View>
        </View>

        <View style={styles.radioContainer}>
          <Text>Gender</Text>
          <RadioButtonRN
            data={data}
            selectedBtn={e => console.log(e)}
            box={false}
            circleSize={16}
            textStyle={{color: '#737070'}}
            activeColor="#898484"
            inactiveColor="gray"
          />
        </View>

        <View style={[styles.calendarBar]}>
          <TextInput
            style={styles.textInput}
            placeholder="Date of Birth"
            placeholderTextColor="#898484"
          />
          <FontAwesomeIcon
            icon={faCalendarAlt}
            size={25}
            color="#898484"
            style={{marginRight: 20}}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.saveColor}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    height: '100%',
  },
  editMessage: {
    color: '#224589',
    fontSize: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  editCircle: {
    width: 110,
    height: 110,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  calendarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  inputView: {
    backgroundColor: 'white',
    borderColor: '#898484',
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
  radioContainer: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  calendarBar: {
    borderColor: '#898484',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '85%',
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  saveButton: {
    backgroundColor: '#224589',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 287,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  saveColor: {
    color: 'white',
    fontSize: 14,
  },
});
