import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import ProgressBar from '../hooks/ProgressBar';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
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
          <View>
            <Text style={styles.labelText}>First Name</Text>
            <View style={styles.inputView}>
              <View style={styles.textInput}>
                <Text>Beatrice</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.labelText}>Last Name</Text>
            <View style={styles.inputView}>
              <View style={styles.textInput}>
                <Text>Nakabanda</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.labelText}>Cell Number</Text>
            <View style={styles.inputView}>
              <View style={styles.textInput}>
                <Text>E1C1A</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.labelText}>Proffessionr</Text>
            <View style={styles.inputView}>
              <View style={styles.textInput}>
                <Text>Science and Technology</Text>
              </View>
            </View>
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
          <View style={styles.textInput}>
            <Text>20.12.1990</Text>
          </View>
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
            onPress={() => navigation.navigate('PreviewProfileScreen')}>
            <Text style={styles.saveColor}>PREVIEW</Text>
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
    paddingHorizontal: 40,
    height: '100%',
  },
  editMessage: {
    color: '#224589',
    fontSize: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
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
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
    width: '100%',
    height: 40,
    marginBottom: 10,
    // alignItems: 'left',
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
    width: '100%',
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
  labelText: {marginLeft: '2%', marginBottom: 5},
});
