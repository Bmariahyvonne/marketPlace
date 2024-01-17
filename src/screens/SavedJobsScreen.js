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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';

const SavedJobsScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <View style={styles.topNav}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => navigation.navigate('JobsScreen')}>
          <Text style={styles.buttonText}>JOBS</Text>
        </TouchableOpacity>
        <View style={[styles.leftButton, styles.bottomLine]}>
          <Text style={styles.buttonText}>SAVED JOBS</Text>
        </View>
      </View>

      <ScrollView style={[styles.wholePage]}>
        <TouchableOpacity
          style={styles.requestRow}
          onPress={() => navigation.navigate('JobDetailsScreen')}>
          <View style={styles.imagePlaceholder}></View>
          <View
            style={{
              width: '30%',
            }}>
            <Text style={styles.nameRequest}>Python Developer</Text>
            <Text style={styles.titleRequest}>Clevertech</Text>
            <Text style={styles.titleRequest}>Kampala, Uganda</Text>
            <Text style={styles.requestDate}>3 days ago</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faBookmark} color="#224589" size={25} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.requestRow}
          onPress={() => navigation.navigate('JobDetailsScreen')}>
          <View style={styles.imagePlaceholder}></View>
          <View
            style={{
              width: '30%',
            }}>
            <Text style={styles.nameRequest}>Python Developer</Text>
            <Text style={styles.titleRequest}>Clevertech</Text>
            <Text style={styles.titleRequest}>Kampala, Uganda</Text>
            <Text style={styles.requestDate}>3 days ago</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faBookmark} color="#224589" size={25} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.requestRow}
          onPress={() => navigation.navigate('JobDetailsScreen')}>
          <View style={styles.imagePlaceholder}></View>
          <View
            style={{
              width: '30%',
            }}>
            <Text style={styles.nameRequest}>Python Developer</Text>
            <Text style={styles.titleRequest}>Clevertech</Text>
            <Text style={styles.titleRequest}>Kampala, Uganda</Text>
            <Text style={styles.requestDate}>3 days ago</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faBookmark} color="#224589" size={25} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.requestRow}
          onPress={() => navigation.navigate('JobDetailsScreen')}>
          <View style={styles.imagePlaceholder}></View>
          <View
            style={{
              width: '30%',
            }}>
            <Text style={styles.nameRequest}>Python Developer</Text>
            <Text style={styles.titleRequest}>Clevertech</Text>
            <Text style={styles.titleRequest}>Kampala, Uganda</Text>
            <Text style={styles.requestDate}>3 days ago</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faBookmark} color="#224589" size={25} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedJobsScreen;

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
    height: 'auto',
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
  requestDate: {color: '#6F6D6D', fontWeight: '400', fontSize: 10},
  actionButtons: {
    width: '37%',
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topButton: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ignoreButtons: {
    width: '60%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
