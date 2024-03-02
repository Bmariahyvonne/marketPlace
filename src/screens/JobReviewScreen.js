import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import * as Progress from 'react-native-progress';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPaperclip,
  faCheckSquare,
  faSquare,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Finance', value: '1'},
  {label: 'Technology', value: '2'},
  {label: 'Medicine', value: '3'},
];

const CustomCheckBox = ({isChecked, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <FontAwesomeIcon
        icon={isChecked ? faCheckSquare : faSquare}
        size={24}
        color="#002F6C"
      />
      <Text style={{marginLeft: 8}}>This is a remote position</Text>
    </TouchableOpacity>
  );
};

const JobReviewScreen = props => {
  const {navigation} = props;
  const [value, setValue] = useState(data[0].value);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView style={[styles.wholePage]}>
        <Progress.Bar
          progress={1}
          width={350}
          height={15}
          color="#65AA36"
          unfilledColor="#D9D9D9"
          borderColor="white"
          borderRadius={10}
        />

        <View style={{paddingTop: 10}}>
          <View>
            <Text style={styles.topLabels}>Job title</Text>
            <View style={styles.inputView}></View>
          </View>

          <View>
            <Text style={styles.topLabels}>Job Location</Text>
            <View style={styles.inputView}></View>
          </View>

          <View style={styles.checkboxContainer}>
            <CustomCheckBox isChecked={isChecked} onPress={toggleCheckBox} />
          </View>

          <View style={styles.inputView}>
            <Dropdown
              style={styles.textInput}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={210}
              labelField="label"
              valueField="value"
              searchPlaceholder="Select Job category"
              placeholder="Full Time"
              //   value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>

          <View style={{width: '100%'}}>
            <Text style={styles.topLabels}>
              Job description
            </Text>
            <View style={styles.descriptionInputView}>
              <View style={styles.descriptionTextInput} multiline={true} />
            </View>
          </View>

          <View style={{width: '100%'}}>
            <Text style={{fontSize: 14, paddingBottom: 10}}>
              Job requirements
            </Text>
            <View style={styles.descriptionInputView}>
              <View style={styles.descriptionTextInput} multiline={true} />
            </View>
          </View>

          <View style={{width: '100%'}}>
            <Text style={{fontSize: 14, paddingBottom: 10}}>
              Job responsibilities
            </Text>
            <View style={styles.descriptionInputView}>
              <View style={styles.descriptionTextInput} multiline={true} />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => navigation.navigate('JobSubmittedScreen')}>
          <Text style={styles.applyText}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobReviewScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    height: '100%',
    paddingTop: 20,
    marginBottom: 10,
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  selectedTextStyle: {
    fontSize: 15,
    color: '#737070',
  },
  descriptionTextInput: {
    height: 'auto',
    flex: 1,
  },
  descriptionInputView: {
    minHeight: 70,
    padding: 10,
    fontSize: 14,
    borderColor: '#898484',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLabels: {fontSize: 14, paddingBottom: 10},
});
