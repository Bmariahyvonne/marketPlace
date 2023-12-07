import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <View style={[styles.headerBar]}>
          <FontAwesomeIcon icon={faBell} size={25} />
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
                <View style={[styles.cubes, { backgroundColor: '#726DA8' }]}></View>
                <View style={[styles.cubes, { backgroundColor: '#A0D2DB' }]}></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={[styles.cubes, { backgroundColor: '#A0D2DB' }]}></View>
                <View style={[styles.cubes, { backgroundColor: '#726DA8' }]}></View>
            </View>
        </View>

        <View>
          <Text style={{color: '#224589', fontSize: 14, marginLeft: 20, marginTop: 15}}>Upcoming Events</Text>
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
    marginBottom: 10,
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
    width: '40%',
    backgroundColor: 'white',
    height: 135,
    marginTop: 10,
    marginBottom: 10,
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
  }
});
