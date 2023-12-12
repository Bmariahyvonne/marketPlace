import {faCircle as Circle} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRight,
  faCircle,
  faDotCircle,
  faMessage,
  faPaperPlane,
  faRepeat,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
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

const RequestDetailsScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <ScrollView style={{height: '100%'}}>
        <View style={styles.outerContainer}>
          <View style={styles.circle} />
        </View>
        <View style={styles.firstBox}>
          <Text style={styles.userName}>Camilla Alina</Text>
          <Text style={styles.userTitle}>
            CTO | Tech writer | Open-source contributor
          </Text>
          <Text style={styles.userCompany}>Yenze Creations</Text>
          <Text style={styles.userLocation}>Kampala, Central Uganda</Text>
          <Text style={[styles.userLocation, {marginLeft: 5}]}>
            500+ connections
          </Text>

          <View style={{flexDirection: 'row', marginLeft: 5}}>
            <FontAwesomeIcon
              icon={Circle}
              size={25}
              color="#D9D9D9"
              style={{marginTop: 5}}
            />
            <FontAwesomeIcon
              icon={faCircle}
              size={25}
              style={{marginLeft: -15, marginTop: 5}}
              color="#D9D9D9"
            />
            <View style={{marginLeft: 10, width: '90%'}}>
              <Text>
                Olivia Babirye, Nsubuga Jonathan, and 248 other mutual
                connections
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.leftButton, styles.actionButton1]}>
                <Text style={{color: '#898484', fontWeight: 'bold'}}>
                  Ignore
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.leftButton,
                  styles.actionButton2,
                  {backgroundColor: '#224589', marginLeft: 10},
                ]}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Accept</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 10,
              }}>
              <FontAwesomeIcon icon={faMessage} color="#224589" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secondBox}>
          <Text style={styles.headingTitle}>About</Text>
          <Text style={styles.userLocation}>
            I am a Tech writer and CTO at Yenze working with knowledge in
            Technical writing.
          </Text>
        </View>

        <View style={styles.thirdBox}>
          <Text style={styles.headingTitle}>Posts</Text>
          <Text style={styles.userLocation}>
            Come join us next week for a our weekly webinar
          </Text>
          <View
            style={{
              width: '100%',
              backgroundColor: '#D9D9D9',
              height: 130,
            }}></View>
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
              <FontAwesomeIcon icon={faPaperPlane} color="#D9D9D9" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faMessage} color="#D9D9D9" size={25} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '50%',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Text>View all posts</Text>
            <FontAwesomeIcon icon={faArrowRight} color="#D9D9D9" size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.fifthBox}>
          <Text style={styles.headingTitle}>Experience</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 10,
              paddingBottom: 5,
              borderLeftColor: '#F1F3F6',
              borderRightColor: '#F1F3F6',
              borderTopColor: 'transparent',
              borderBottomColor: '#D2D1D1',
              borderWidth: 1,
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
              <Text style={[styles.positionTitle]}>CT0</Text>
              <Text style={[styles.positionLocation]}>Yenze creations</Text>
              <Text style={[styles.positionTime]}>Mar 2022 - Present 1 yr</Text>
              <Text style={[styles.positionTime]}>Kampala, Uganda</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.positionTitle]}>Skills: </Text>
                <Text style={[styles.positionLocation]}> Leadership </Text>
                <FontAwesomeIcon
                  icon={faCircle}
                  size={5}
                  color="#3D3C3C"
                  style={{marginTop: 5}}
                />
                <Text style={[styles.positionLocation]}>
                  {' '}
                  Analytical thinking{' '}
                </Text>
              </View>
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
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.positionTitle]}>Skills: </Text>
                  <Text style={[styles.positionLocation]}> English </Text>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size={5}
                    color="#3D3C3C"
                    style={{marginTop: 5}}
                  />
                  <Text style={[styles.positionLocation]}>
                    {' '}
                    Analytical thinking{' '}
                  </Text>
                </View>
              </View>

              <View>
                <Text style={[styles.positionTitle, {marginTop: 10}]}>
                  Software developer
                </Text>
                <Text style={[styles.positionTime]}>
                  Mar 2022 - Present 1 yr
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.positionTitle]}>Skills: </Text>
                  <Text style={[styles.positionLocation]}> English </Text>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size={5}
                    color="#3D3C3C"
                    style={{marginTop: 5}}
                  />
                  <Text style={[styles.positionLocation]}>
                    {' '}
                    Analytical thinking{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    height: 230,
    marginTop: 30,
    paddingHorizontal: 20,
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
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: 'transparent',
    borderBottomColor: '#D2D1D1',
    borderWidth: 1,
    height: 190,
    marginTop: 10,
    paddingHorizontal: 20,
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
  fifthBox: {
    width: '100%',
    marginTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 20,
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
  userConnections: {
    color: 'black',
    fontSize: 10,
    fontWeight: '400',
  },
  leftButton: {
    width: '50%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton1: {
    borderRadius: 20,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  actionButton2: {
    borderRadius: 20,
    borderColor: '#224589',
    borderWidth: 1,
  },
  actionButtons: {
    width: '50%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingTitle: {
    color: '#224589',
    fontSize: 13,
    fontWeight: '700',
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
});

export default RequestDetailsScreen;
