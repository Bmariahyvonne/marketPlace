import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowRight,
  faCircle,
  faDotCircle,
  faMessage,
  faPaperPlane,
  faRepeat,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {faImage} from '@fortawesome/free-regular-svg-icons';
const data = [
  {label: 'Finance', value: '1'},
  {label: 'Technology', value: '2'},
  {label: 'Medicine', value: '3'},
];

const MyMarketplaceScreen = props => {
  const {navigation} = props;
  const [value, setValue] = useState(data[0].value);

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />
      <View style={styles.topNav}>
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
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>

      <ScrollView style={[styles.wholePage]}>
        <View style={[styles.calendarBar]}>
          <Image
            source={require('../images/pen.png')}
            style={{
              width: 20,
              height: 20,
              alignSelf: 'center',
              marginLeft: 10,
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Write a post"
            placeholderTextColor="#898484"
          />
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faImage}
              size={25}
              color="#898484"
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.thirdBox}>
            <View style={{paddingLeft: 20, paddingRight: 20}}>
              <Text style={[styles.headingText]}>Camilla Alina</Text>
              <Text
                style={[styles.otherText, {marginTop: 5, color: '#3D3C3C'}]}>
                CTO | Yenze Creations
              </Text>
              <Text
                style={[styles.otherText, {marginTop: 5, color: '#737070'}]}>
                Nov 16 2023
              </Text>
              <Text
                style={[styles.titleText, {marginTop: 5, color: '#000000'}]}>
                Come join us next week for a our weekly webinar
              </Text>
              <View style={styles.imageBox}></View>
            </View>
          </View>
          <View style={styles.fourthBox}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '85%',
                alignSelf: 'center',
              }}>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faThumbsUp} color="#D9D9D9" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faRepeat} color="#D9D9D9" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  color="#D9D9D9"
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faMessage} color="#D9D9D9" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.thirdBox}>
            <View style={{paddingLeft: 20, paddingRight: 20}}>
              <Text style={[styles.headingText]}>Camilla Alina</Text>
              <Text
                style={[styles.otherText, {marginTop: 5, color: '#3D3C3C'}]}>
                CTO | Yenze Creations
              </Text>
              <Text
                style={[styles.otherText, {marginTop: 5, color: '#737070'}]}>
                Nov 16 2023
              </Text>
              <Text
                style={[styles.titleText, {marginTop: 5, color: '#000000'}]}>
                Come join us next week for a our weekly webinar
              </Text>
              <View style={styles.imageBox}></View>
            </View>
          </View>
          <View style={styles.fourthBox}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '85%',
                alignSelf: 'center',
              }}>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faThumbsUp} color="#D9D9D9" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faRepeat} color="#D9D9D9" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  color="#D9D9D9"
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faMessage} color="#D9D9D9" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.thirdBox}>
            <View style={{paddingLeft: 20, paddingRight: 20}}>
              <Text style={[styles.headingText]}>Camilla Alina</Text>
              <Text
                style={[styles.otherText, {marginTop: 5, color: '#3D3C3C'}]}>
                CTO | Yenze Creations
              </Text>
              <Text
                style={[styles.otherText, {marginTop: 5, color: '#737070'}]}>
                Nov 16 2023
              </Text>
              <Text
                style={[styles.titleText, {marginTop: 5, color: '#000000'}]}>
                Come join us next week for a our weekly webinar
              </Text>
              <View style={styles.imageBox}></View>
            </View>
          </View>
          <View style={styles.fourthBox}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '85%',
                alignSelf: 'center',
              }}>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faThumbsUp} color="#D9D9D9" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faRepeat} color="#D9D9D9" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  color="#D9D9D9"
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesomeIcon icon={faMessage} color="#D9D9D9" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyMarketplaceScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: 'white',
    height: '90%',
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  topNav: {
    width: '100%',
    height: 58,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  leftButton: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 13,
    color: '#224589',
    fontWeight: '700',
  },
  bottomLine: {
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: '#224589',
    borderWidth: 2,
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#224589',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  calendarBar: {
    borderColor: '#898484',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '85%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headingText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#224589',
  },
  otherText: {
    fontSize: 10,
    fontWeight: '400',
  },
  titleText: {
    fontSize: 11,
    fontWeight: '400',
  },
  imageBox: {
    width: '99%',
    height: 130,
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    marginTop: 5,
  },
  thirdBox: {
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: 'transparent',
    borderBottomColor: '#D2D1D1',
    borderWidth: 1,
    height: 'auto',
    paddingBottom: 10,
  },
  fourthBox: {
    width: '100%',
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: 'transparent',
    borderBottomColor: '#D2D1D1',
    borderWidth: 5,
    marginTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
});
