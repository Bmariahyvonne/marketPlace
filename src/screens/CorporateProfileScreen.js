import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {faEnvelope, faImage} from '@fortawesome/free-regular-svg-icons';
import {
  faCircle,
  faPencil,
  faPlus,
  faGlobe,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const CorporateProfileScreen = props => {
  const {navigation} = props;
  const openWebPage = url => {
    Linking.openURL(url).catch(error =>
      console.error('Error opening web page:', error),
    );
  };
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />
      <View style={styles.topNav}>
        <TouchableOpacity
          style={[styles.leftButton]}
          onPress={() => navigation.navigate('MyProfileScreen')}>
          <Text style={styles.buttonText}>MY PROFILE</Text>
        </TouchableOpacity>
        <View style={[styles.leftButton, styles.bottomLine]}>
          <Text style={styles.buttonText}>CORPORATE PROFILE</Text>
        </View>
      </View>

      <ScrollView style={{height: '90%'}}>
        <View style={styles.outerContainer}>
          <View style={styles.circle} />
        </View>

        <View style={styles.firstBox}>
          <Text style={styles.userName}>Yenze Creations</Text>
          <Text style={styles.userTitle}>Software Company</Text>
          <Text style={styles.userLocation}>Kampala, Central Uganda</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.userLocation]}>500+ connections</Text>
            <TouchableOpacity style={{}}>
              <FontAwesomeIcon icon={faMessage} color="#224589" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secondBox}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headingTitle}>About</Text>
            <TouchableOpacity style={{}}>
              <FontAwesomeIcon icon={faPencil} color="#224589" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userLocation}>
            Lorem ipsum dolor sit amet, consectetur adipiscing el Suspend isse
            ex urna, malesuada non porta eget.
          </Text>
        </View>

        <View style={styles.thirdBox}>
          <View style={styles.sectionBox}>
            <View
              style={{
                height: 45,
                width: 45,
                backgroundColor: '#D9D9D9',
              }}></View>
            <View
              style={{
                width: 45,
                width: '80%',
                marginLeft: 20,
              }}>
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
            </View>
          </View>
        </View>

        <View style={styles.fourthBox}>
          <View style={styles.circleImage}></View>
          <View style={{width: '85%', marginLeft: 10}}>
            <Text style={styles.reactionText}>
              Jeremiah Jabor & Daisy Tulya reacted to your company’s post
            </Text>
            <View
              style={{
                width: '100%',
                height: 115,
                backgroundColor: '#D9D9D9',
                marginTop: 5,
                marginBottom: 5
              }}></View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.reactionText}>7 Reactions </Text>
              <Text style={styles.reactionText}>-</Text>
              <Text style={styles.reactionText}> 1 comment</Text>
            </View>
          </View>
        </View>

        <View style={styles.fourthBox}>
          <View style={styles.circleImage}></View>
          <View style={{width: '85%', marginLeft: 10}}>
            <Text style={styles.reactionText}>
              Jeremiah Jabor & Daisy Tulya reacted to your company’s post
            </Text>
            <View
              style={{
                width: '100%',
                height: 115,
                backgroundColor: '#D9D9D9',
                marginTop: 5,
                marginBottom: 5
              }}></View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.reactionText}>7 Reactions </Text>
              <Text style={styles.reactionText}>-</Text>
              <Text style={styles.reactionText}> 1 comment</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default CorporateProfileScreen;

const styles = StyleSheet.create({
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
  outerContainer: {
    backgroundColor: '#A0D2DB',
    width: '100%',
    height: 86,
    position: 'relative',
    overflow: 'visible',
  },
  circle: {
    backgroundColor: '#D9D9D9',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -30,
  },
  firstBox: {
    width: '100%',
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: 'transparent',
    borderBottomColor: '#D2D1D1',
    borderWidth: 5,
    height: 'auto',
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  secondBox: {
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
  thirdBox: {
    width: '100%',
    paddingBottom: 5,
    paddingHorizontal: 20,
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: 'transparent',
    borderBottomColor: '#D2D1D1',
    borderWidth: 5,
    marginTop: 10,
    paddingBottom: 10,
  },
  userName: {
    color: '#224589',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  userTitle: {
    color: 'black',
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 5,
  },
  userCompany: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 5,
  },
  userLocation: {
    color: 'black',
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 5,
  },
  headingTitle: {
    color: '#224589',
    fontSize: 13,
    fontWeight: '700',
  },
  addExperience: {
    color: '#224589',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 10,
  },
  positionTitle: {
    color: '#224589',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 1,
  },
  positionLocation: {
    color: '#3D3C3C',
    fontSize: 11,
    fontWeight: '400',
    marginTop: 1,
  },
  positionTime: {
    color: '#898484',
    fontSize: 11,
    fontWeight: '400',
    marginTop: 1,
  },
  headerBar: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 20,
  },
  sectionBox: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    paddingBottom: 5,
  },
  calendarBar: {
    borderColor: '#898484',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  fourthBox: {
    width: '100%',
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: 'transparent',
    borderBottomColor: '#D2D1D1',
    borderWidth: 1,
    height: 'auto',
    paddingBottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  circleImage: {
    width: 50,
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  reactionText: {fontWeight: '400', color: '#737070', fontSize: 11},
});
