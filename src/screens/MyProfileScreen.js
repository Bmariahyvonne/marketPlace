import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {
  faCircle,
  faPencil,
  faPlus,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const MyProfileScreen = props => {
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
        <View style={[styles.leftButton, styles.bottomLine]}>
          <Text style={styles.buttonText}>MY PROFILE</Text>
        </View>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => navigation.navigate('CorporateProfileScreen')}>
          <Text style={styles.buttonText}>CORPORATE PROFILE</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{height: '90%'}}>
        <View style={styles.outerContainer}>
          <TouchableOpacity style={[styles.headerBar]}>
            <FontAwesomeIcon icon={faPencil} color="#224589" size={20} />
          </TouchableOpacity>
          <View style={styles.circle} />
        </View>

        <View style={styles.firstBox}>
          <Text style={styles.userName}>Beatrice Nakabanda</Text>
          <Text style={styles.userTitle}>
            CTO | Tech writer | Open-source contributor
          </Text>
          <Text style={styles.userCompany}>Yenze Creations</Text>
          <Text style={styles.userLocation}>Kampala, Central Uganda</Text>
          <Text style={[styles.userLocation]}>500+ connections</Text>
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
            I am a Tech writer and CTO at Yenze working with knowledge in
            Technical writing.
          </Text>
        </View>

        <View style={styles.fifthBox}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headingTitle}>Experience</Text>
            <TouchableOpacity style={{}}>
              <FontAwesomeIcon icon={faPencil} color="#224589" size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 5,
            }}>
            <FontAwesomeIcon icon={faPlus} color="#224589" size={20} />
            <Text style={styles.addExperience}>Add Experience</Text>
          </TouchableOpacity>
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
              <Text style={[styles.positionTitle]}>CT0</Text>
              <Text style={[styles.positionLocation]}>Yenze creations</Text>
              <Text style={[styles.positionTime]}>Mar 2022 - Present 1 yr</Text>
              <Text style={[styles.positionTime]}>Kampala, Uganda</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 10,
              paddingBottom: 5,
            }}>
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
              <View>
                <Text style={[styles.positionTitle]}>Yenze creations</Text>
                <Text style={[styles.positionTime]}>Contract - 1 yr</Text>
                <Text style={[styles.positionTime]}>Kampala, Uganda</Text>
              </View>

              <View>
                <Text style={[styles.positionTitle, {marginTop: 10}]}>
                  Technical writer
                </Text>
                <Text style={[styles.positionTime]}>
                  Mar 2022 - Present 1 yr
                </Text>
              </View>

              <View>
                <Text style={[styles.positionTitle, {marginTop: 10}]}>
                  Software developer
                </Text>
                <Text style={[styles.positionTime]}>
                  Mar 2022 - Present 1 yr
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.fifthBox}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headingTitle}>Education</Text>
            <TouchableOpacity style={{}}>
              <FontAwesomeIcon icon={faPencil} color="#224589" size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 5,
            }}>
            <FontAwesomeIcon icon={faPlus} color="#224589" size={20} />
            <Text style={styles.addExperience}>Add Education</Text>
          </TouchableOpacity>
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
              <Text style={[styles.positionTitle]}>Victoria University</Text>
              <Text style={[styles.positionLocation]}>
                Software development{' '}
              </Text>
              <Text style={[styles.positionTime]}>2019 -2023</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 10,
              paddingBottom: 5,
            }}>
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
              <View>
                <Text style={[styles.positionTitle]}>Victoria University</Text>
                <Text style={[styles.positionLocation]}>
                  Bachelor’s degree in Information Technology
                </Text>
                <Text style={[styles.positionTime]}>2019 -2023</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.fifthBox}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headingTitle}>Skills</Text>
            <TouchableOpacity style={{}}>
              <FontAwesomeIcon icon={faPencil} color="#224589" size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 5,
            }}>
            <FontAwesomeIcon icon={faPlus} color="#224589" size={20} />
            <Text style={styles.addExperience}>Add Skills</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.positionLocation]}>Leadership</Text>
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              color="#3D3C3C"
              style={{marginTop: 5}}
            />
            <Text style={[styles.positionLocation]}>Analytical thinking</Text>
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              color="#3D3C3C"
              style={{marginTop: 5}}
            />
            <Text style={[styles.positionLocation]}>HTML</Text>
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              color="#3D3C3C"
              style={{marginTop: 5}}
            />
            <Text style={[styles.positionLocation]}>Graphql</Text>
          </View>
        </View>

        <View style={styles.fifthBox}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headingTitle}>Contact</Text>
            <TouchableOpacity style={{}}>
              <FontAwesomeIcon icon={faPencil} color="#224589" size={20} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginBottom: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesomeIcon icon={faEnvelope} color="#A6A4A4" size={30} />
            </View>
            <View
              style={{
                width: 45,
                width: '80%',
                marginLeft: 20,
              }}>
              <Text style={[styles.positionTitle]}>Email</Text>
              <Text style={[styles.positionLocation]}>
                nakabandabeatrice@gmail.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginBottom: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesomeIcon icon={faGlobe} color="#A6A4A4" size={30} />
            </View>
            <View
              style={{
                width: 45,
                width: '80%',
                marginLeft: 20,
              }}>
              <Text style={[styles.positionTitle]}>Website</Text>
              <TouchableOpacity
                onPress={() => openWebPage('https://nakabandabeatrice.com')}>
                <Text style={styles.positionLocation}>
                  https://nakabandabeatrice.com'
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesomeIcon icon={faLinkedin} color="#A6A4A4" size={30} />
            </View>
            <View
              style={{
                width: 45,
                width: '80%',
                marginLeft: 20,
              }}>
              <Text style={[styles.positionTitle]}>Linked In</Text>
              <TouchableOpacity
                onPress={() =>
                  openWebPage(
                    'https://www.linkedin.com/in/beatrice-nakabanda-6b5079187/',
                  )
                }>
                <Text style={styles.positionLocation}>
                  https://www.linkedin.com/in/beatrice-nakabanda-6b5079187/'
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfileScreen;

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
  fifthBox: {
    width: '100%',
    marginTop: 10,
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
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: 'transparent',
    borderBottomColor: '#D2D1D1',
    borderWidth: 1,
  },
});
