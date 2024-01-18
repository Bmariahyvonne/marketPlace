import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const MessageScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />

      <View style={[styles.searchBar]}>
        <FontAwesomeIcon icon={faSearch} size={20} color="#898484" />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="#898484"
        />
      </View>
      <ScrollView style={[styles.wholePage]}>
        <TouchableOpacity
          style={[styles.resourceData]}
          onPress={() => navigation.navigate('SingleChatScreen')}>
          <View style={{flexDirection: 'row', margin: 20}}>
            <View style={styles.imagePlacHolder}></View>
            <View style={styles.messageText}>
              <Text style={styles.senderName}>Smith Steve</Text>
              <Text style={styles.senderMessage}>On my way!</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeMessage}>12: 00 PM</Text>
              <View style={styles.newMessageDot}>
                <Text style={styles.notifcationNumbers}>3</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.resourceData]}
          onPress={() => navigation.navigate('SingleChatScreen')}>
          <View style={{flexDirection: 'row', margin: 20}}>
            <View style={styles.imagePlacHolder}></View>
            <View style={styles.messageText}>
              <Text style={styles.senderName}>Mutesi Sarah</Text>
              <Text style={styles.senderMessage}>OK</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeMessage}>11: 00 PM</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.resourceData]}
          onPress={() => navigation.navigate('SingleChatScreen')}>
          <View style={{flexDirection: 'row', margin: 20}}>
            <View style={styles.imagePlacHolder}></View>
            <View style={styles.messageText}>
              <Text style={styles.senderName}>Akoth Jane</Text>
              <Text style={styles.senderMessage}>OK</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeMessage}>Yesterday</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.resourceData]}
          onPress={() => navigation.navigate('SingleChatScreen')}>
          <View style={{flexDirection: 'row', margin: 20}}>
            <View style={styles.imagePlacHolder}></View>
            <View style={styles.messageText}>
              <Text style={styles.senderName}>Akoth Jane</Text>
              <Text style={styles.senderMessage}>OK</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeMessage}>Yesterday</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.resourceData]}
          onPress={() => navigation.navigate('SingleChatScreen')}>
          <View style={{flexDirection: 'row', margin: 20}}>
            <View style={styles.imagePlacHolder}></View>
            <View style={styles.messageText}>
              <Text style={styles.senderName}>Akoth Jane</Text>
              <Text style={styles.senderMessage}>OK</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeMessage}>12/24/23</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.resourceData]}
          onPress={() => navigation.navigate('SingleChatScreen')}>
          <View style={{flexDirection: 'row', margin: 20}}>
            <View style={styles.imagePlacHolder}></View>
            <View style={styles.messageText}>
              <Text style={styles.senderName}>Akoth Smith</Text>
              <Text style={styles.senderMessage}>OK</Text>
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.timeMessage}>12/23/23</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F1F3F6',
    height: '100%',
  },
  searchBar: {
    borderColor: '#A6A4A4',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '90%',
    marginTop: 15,
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
  resourceData: {
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: '#F1F3F6',
    borderBottomColor: '#D2D1D1',
    borderWidth: 1,
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  imagePlacHolder: {
    width: 55,
    height: 55,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  senderName: {
    color: '#224589',
    fontWeight: '700',
    fontSize: 13,
  },
  senderMessage: {
    color: '#3D3C3C',
    fontWeight: '400',
    fontSize: 10,
  },
  messageText: {
    marginLeft: 20,
    justifyContent: 'center',
    width: '65%',
  },
  timeSlot: {
    alignContent: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeMessage: {
    color: '#737070',
    fontWeight: '400',
    fontSize: 10,
    marginBottom: 5,
  },
  newMessageDot: {
    backgroundColor: '#224589',
    height: 16,
    width: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifcationNumbers: {
    color: 'white',
    fontWeight: '400',
    fontSize: 10,
  },
});
