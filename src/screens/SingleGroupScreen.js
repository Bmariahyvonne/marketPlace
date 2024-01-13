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
import {faImage} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRight,
  faCircle,
  faDotCircle,
  faMessage,
  faPaperPlane,
  faPlus,
  faRepeat,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const SingleGroupScreen = props => {
  const {navigation} = props;
  const followPage = () => {
    alert('You have Followed this Page!');
  };
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />

      <ScrollView style={{height: '100%'}}>
        <View style={styles.outerContainer}>
          <View style={styles.circle} />
        </View>

        <View style={styles.firstBox}>
          <Text style={styles.groupName}>Python Developers</Text>
          <Text style={styles.numberOfMembers}>5,000 members</Text>
          <Text style={styles.numberOfMembers}>Joined group: Nov 2019</Text>
        </View>

        <View style={styles.thirdBox}>
          <View style={styles.sectionBox}>
            <View
              style={{
                height: 45,
                width: 45,
                backgroundColor: '#D9D9D9',
                borderRadius: 50,
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
                  placeholder="Write a post in this group"
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
          <View style={{marginLeft: 10}}>
            <Text style={styles.authorText}>Deborah Dora</Text>
            <Text style={styles.titleText}>CTO | Refactory</Text>
            <Text style={styles.roleText}>Admin</Text>
            <Text style={styles.dateText}>Nov 16 2023</Text>
            <Text style={styles.messageText}>
              Come join us next week for a our weekly webinar
            </Text>
            <View
              style={{
                width: '100%',
                height: 115,
                backgroundColor: '#D9D9D9',
                marginTop: 5,
                marginBottom: 5,
              }}></View>
          </View>
        </View>
        <View style={styles.fourthBox}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '85%',
              alignSelf: 'center',
            }}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faThumbsUp} color="#D9D9D9" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faMessage} color="#D9D9D9" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fourthBox}>
          <View style={{marginLeft: 10}}>
            <Text style={styles.authorText}>Deborah Dora</Text>
            <Text style={styles.titleText}>CTO | Refactory</Text>
            <Text style={styles.roleText}>Admin</Text>
            <Text style={styles.dateText}>Nov 16 2023</Text>
            <Text style={styles.messageText}>
              Come join us next week for a our weekly webinar
            </Text>
            <View
              style={{
                width: '100%',
                height: 'auto',
                borderColor: '#CACACA',
                borderWidth: 1,
                marginTop: 5,
                marginBottom: 5,
                padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.authorText}>Watoto Church</Text>
                <TouchableOpacity
                  onPress={followPage}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <FontAwesomeIcon icon={faPlus} color="#224589" size={15} />
                  <Text style={styles.followText}> Follow</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.titleText}>800 followers</Text>
              <Text style={styles.dateText}>Nov 16 2023</Text>
              <Text style={styles.messageText}>Lorem ipsum dolor sit amet</Text>
              <View
              style={{
                width: '100%',
                height: 115,
                backgroundColor: '#D9D9D9',
                marginTop: 5,
                marginBottom: 5,
              }}></View>
            </View>
          </View>
        </View>
        <View style={styles.fourthBox}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '85%',
              alignSelf: 'center',
            }}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faThumbsUp} color="#D9D9D9" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faMessage} color="#D9D9D9" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleGroupScreen;

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
    height: 'auto',
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
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
  groupName: {
    color: '#224589',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  numberOfMembers: {
    color: 'black',
    fontSize: 10,
    fontWeight: '400',
    marginBottom: 5,
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
    paddingHorizontal: 20,
    marginTop: 10,
  },
  dateText: {
    fontWeight: '400',
    color: '#737070',
    fontSize: 11,
  },
  titleText: {
    fontWeight: '400',
    color: '#3D3C3C',
    fontSize: 10,
  },
  messageText: {
    fontWeight: '400',
    color: '#000000',
    fontSize: 11,
  },
  roleText: {
    fontWeight: '700',
    color: '#224589',
    fontSize: 10,
  },
  authorText: {
    color: '#224589',
    fontSize: 13,
    fontWeight: '700',
  },
  followText: {
    color: '#224589',
    fontSize: 12,
    fontWeight: '400',
  },
});
