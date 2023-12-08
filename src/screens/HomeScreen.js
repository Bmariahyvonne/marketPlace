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
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell as regularBell} from '@fortawesome/free-regular-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Tooltip} from 'react-native-elements';

const HomeScreen = props => {
  const {navigation} = props;

  const setReminder = () => {
    alert('You have set a reminder for this Event');
  };
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <View style={[styles.headerBar]}>
          <FontAwesomeIcon icon={regularBell} size={25} color="#224589" />
        </View>

        <View>
          <Text style={[styles.greetingBar]}>Good Morning, Joan!</Text>
        </View>

        <View style={[styles.searchBar]}>
          <FontAwesomeIcon icon={faSearch} size={20} color="#898484" />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor="#898484"
          />
        </View>

        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={[styles.cubes, {backgroundColor: '#726DA8'}]}
              onPress={() => navigation.navigate('ResourceScreen')}>
              <Text style={[styles.whiteText]}>Resource Bank</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cubes, {backgroundColor: '#A0D2DB'}]}>
              <Text style={[styles.blueText]}>My Marketplace</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={[styles.cubes, {backgroundColor: '#A0D2DB'}]}>
              <Text style={[styles.blueText]}>Programs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cubes, {backgroundColor: '#726DA8'}]}>
              <Text style={[styles.whiteText]}>Special Initiatives</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text
            style={{
              color: '#224589',
              fontSize: 14,
              marginLeft: 10,
              marginTop: 20,
              fontWeight: 'bold',
            }}>
            Upcoming Events
          </Text>
          <View style={{flexDirection: 'row'}}>
            {/* I am going to figure out how to make the carousel work so that we can scroll through the different events. This is a placeholder for now */}
            <View style={[styles.eventsBox]}>
              <Text style={[styles.eventsHeading]}>
                INAUGURAL CONNECT FELLOWSHIP
              </Text>
              <Text style={[styles.eventsDetails]}>Friday, 17th November</Text>
              <Text style={[styles.eventsDetails]}>6:00pm - 9:00pm</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View>
                  <Image
                    source={require('../images/pin.png')}
                    style={{
                      width: 10,
                      height: 15,
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#224589',
                    fontWeight: '400',
                    fontSize: 11,
                    marginLeft: 10,
                  }}>
                  Watoto Church Ntinda
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Tooltip
                  popover={<Text>Set Reminder</Text>}
                  height={40}
                  width={150}>
                  <TouchableOpacity onPress={setReminder}>
                    <Image
                      source={require('../images/reminder.png')}
                      style={{
                        width: 30,
                        height: 30,
                        alignSelf: 'center',
                      }}
                    />
                  </TouchableOpacity>
                </Tooltip>
              </View>
            </View>
            <View style={[styles.eventsBox]}>
              <Text style={[styles.eventsHeading]}>
                INAUGURAL CONNECT FELLOWSHIP
              </Text>
              <Text style={[styles.eventsDetails]}>Friday, 17th November</Text>
              <Text style={[styles.eventsDetails]}>6:00pm - 9:00pm</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View>
                  <Image
                    source={require('../images/pin.png')}
                    style={{
                      width: 10,
                      height: 15,
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#224589',
                    fontWeight: '400',
                    fontSize: 11,
                    marginLeft: 10,
                  }}>
                  Watoto Church Ntinda
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity>
                  <Image
                    source={require('../images/reminder.png')}
                    style={{
                      width: 30,
                      height: 30,
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    height: '100%',
  },
  headerBar: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  greetingBar: {
    color: '#224589',
    fontSize: 20,
    width: 300,
    alignSelf: 'center',
  },
  searchBar: {
    borderColor: '#A6A4A4',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 300,
    marginTop: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 15,
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 14,
  },
  cubes: {
    width: '47%',
    backgroundColor: 'white',
    height: 135,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  blueText: {
    color: '#224589',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventsBox: {
    backgroundColor: '#EFF3FB',
    height: 140,
    width: 250,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
  },
  eventsHeading: {color: '#224589', fontWeight: '700', fontSize: 12},
  eventsDetails: {
    color: '#224589',
    fontWeight: '400',
    fontSize: 11,
    marginTop: 10,
  },
});
