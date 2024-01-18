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
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faSearch,
  faPaperclip,
  faCheckDouble,
} from '@fortawesome/free-solid-svg-icons';

const SingleChatScreen = props => {
  const {navigation} = props;
  const [messageText, setMessageText] = useState('');

  const handleTextChange = text => {
    setMessageText(text);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headerBar}>
        <TouchableOpacity
          style={{paddingLeft: 20}}
          onPress={() => navigation.navigate('MessageScreen')}>
          <FontAwesomeIcon icon={faArrowLeft} color="white" size={20} />
        </TouchableOpacity>
        <View style={styles.profilePicture}></View>
        <View style={{width: '60%', alignItems: 'center'}}>
          <Text style={styles.userName}>Mutesi Sarah</Text>
        </View>
        <TouchableOpacity style={{paddingLeft: 20}}>
          <FontAwesomeIcon icon={faSearch} color="white" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView style={[styles.wholePage]}>
        <View style={styles.pageView}>
          <Text style={styles.timeStamps}>12/24/32</Text>
          <View style={styles.receivedText}>
            <Text style={styles.recievedMessage}>On my way!</Text>
            <Text style={styles.recievedTime}>12: 00 PM</Text>
          </View>
          <View style={styles.sentText}>
            <Text style={styles.sentMessage}>OK</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.sentTime}>12: 00 PM</Text>
              <FontAwesomeIcon
                icon={faCheckDouble}
                size={12}
                color="white"
                style={{marginTop: 15, marginRight: 15}}
              />
            </View>
          </View>

          <Text style={styles.timeStamps}>Yesterday</Text>
          <View style={styles.receivedText}>
            <Text style={styles.recievedMessage}>Hello</Text>
            <Text style={styles.recievedTime}>12: 05 PM</Text>
          </View>
          <View style={styles.sentText}>
            <Text style={styles.sentMessage}>Hi</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.sentTime}>12: 20 PM</Text>
              <FontAwesomeIcon
                icon={faCheckDouble}
                size={12}
                color="white"
                style={{marginTop: 15, marginRight: 15}}
              />
            </View>
          </View>
          <View style={styles.receivedText}>
            <Text style={styles.recievedMessage}>How are you?</Text>
            <Text style={styles.recievedTime}>12: 25 PM</Text>
          </View>

          <Text style={styles.timeStamps}>Today</Text>
          <View style={styles.sentText}>
            <Text style={styles.sentMessage}>I am Okay</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.sentTime}>12: 10 AM</Text>
              <FontAwesomeIcon
                icon={faCheckDouble}
                size={12}
                color="white"
                style={{marginTop: 15, marginRight: 15}}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.searchBar]}>
        <TextInput
          style={[styles.textInput, {color: 'white'}]}
          placeholder="Message"
          placeholderTextColor="white"
          onChangeText={handleTextChange}
          value={messageText}
          multiline={true}
        />
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faPaperclip}
            size={20}
            color="white"
            style={{marginRight: 20}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingleChatScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: 'white',
    height: '85%',
    paddingTop: 10,
  },
  headerBar: {
    backgroundColor: '#224589',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profilePicture: {
    backgroundColor: '#D9D9D9',
    height: 40,
    width: 40,
    marginLeft: 10,
    borderRadius: 50,
  },
  userName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 13,
  },
  searchBar: {
    borderColor: '#224589',
    borderWidth: 1,
    borderRadius: 5,
    minHeight: 40,
    width: '90%',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 15,
    backgroundColor: '#224589',
  },
  textInput: {
    height: 'auto',
    flex: 1,
    padding: 10,
    fontSize: 14,
  },
  pageView: {
    alignItems: 'center',
  },
  timeStamps: {
    color: '#737070',
    fontWeight: '400',
    fontSize: 10,
  },
  receivedText: {
    borderRadius: 10,
    height: 'auto',
    width: '85%',
    paddingBottom: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F1F3F6',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  sentText: {
    borderRadius: 10,
    paddingBottom: 5,
    height: 'auto',
    width: '85%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#224589',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  recievedMessage: {
    paddingLeft: 15,
    color: '#3D3C3C',
    fontSize: 13,
    fontWeight: '400',
  },
  recievedTime: {
    paddingRight: 15,
    marginTop: 15,
    color: '#737070',
    fontSize: 10,
    fontWeight: '400',
  },
  sentMessage: {
    paddingLeft: 15,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '400',
  },
  sentTime: {
    paddingRight: 5,
    marginTop: 15,
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '400',
  },
});
