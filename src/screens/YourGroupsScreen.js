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

const YourGroupsScreen = props => {
  const {navigation} = props;

  const exitGroup = () => {
    alert('Are you sure you want to Exit this Group?');
  };
  return (
    <SafeAreaView>
      <View style={styles.topNav}>
        <View style={[styles.leftButton, styles.bottomLine]}>
          <Text style={styles.buttonText}>YOUR GROUPS</Text>
        </View>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => navigation.navigate('DiscoverGroupsScreen')}>
          <Text style={styles.buttonText}>DISCOVER GROUPS</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={[styles.wholePage]}>

        <View style={styles.requestRow}>
          <View style={styles.imagePlaceholder}></View>
          <View
            style={{
              width: '30%',
              justifyContent: 'center',
            }}>
            <Text style={styles.nameRequest}>Python Developers</Text>
            <Text style={styles.titleRequest}>50 members</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              onPress={exitGroup}
              style={[styles.ignoreButtons, styles.actionButton1]}>
              <Text
                style={{color: '#898484', fontWeight: 'bold', fontSize: 12}}>
                Exit Group
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.ignoreButtons,
                styles.actionButton2,
                {backgroundColor: '#224589', marginLeft: 10},
              ]}
              onPress={() => navigation.navigate('SingleGroupScreen')}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                View Posts
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.requestRow}>
          <View style={styles.imagePlaceholder}></View>
          <View
            style={{
              width: '30%',
              justifyContent: 'center',
            }}>
            <Text style={styles.nameRequest}>Digital Marketing</Text>
            <Text style={styles.titleRequest}>200 members</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              onPress={exitGroup}
              style={[styles.ignoreButtons, styles.actionButton1]}>
              <Text
                style={{color: '#898484', fontWeight: 'bold', fontSize: 12}}>
                Exit Group
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.ignoreButtons,
                styles.actionButton2,
                {backgroundColor: '#224589', marginLeft: 10},
              ]}
              onPress={() => navigation.navigate('SingleGroupScreen')}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                View Posts
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default YourGroupsScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F1F3F6',
    marginBottom: 10,
    height: '80%',
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
  requestRow: {
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: '#F1F3F6',
    borderBottomColor: '#D2D1D1',
    borderWidth: 1,
    height: 70,
    flexDirection: 'row',
    paddingBottom: 5,
    marginTop: 15,
  },
  imagePlaceholder: {
    backgroundColor: '#D9D9D9',
    width: 55,
    height: 55,
    marginLeft: 30,
    marginRight: 20,
  },
  nameRequest: {
    color: '#224589',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 5,
  },
  titleRequest: {
    color: '#3D3C3C',
    fontWeight: '400',
    fontSize: 10,
    marginBottom: 5,
  },
  actionButtons: {
    width: '37%',
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ignoreButtons: {
    width: '50%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
