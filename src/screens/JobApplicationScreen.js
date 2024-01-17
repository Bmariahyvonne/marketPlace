import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle, faPaperclip} from '@fortawesome/free-solid-svg-icons';

const JobApplicationScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <ScrollView style={[styles.wholePage]}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.headerText}>Sales Director</Text>
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
              placeholder="LinkedIn profile"
              placeholderTextColor="#737070"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="City of residence"
              placeholderTextColor="#737070"
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Attach Resume"
              placeholderTextColor="#737070"
            />
            <FontAwesomeIcon icon={faPaperclip} color='#999999' size={20} style={{marginRight: 15}}/>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate('ApplicationSubmittedScreen')}>
        <Text style={styles.applyText}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default JobApplicationScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F1F3F6',
    height: '90%',
    padding: 20,
  },
  headerText: {
    color: '#224589',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 5,
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
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    borderColor: '#898484',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 14,
  },
});
