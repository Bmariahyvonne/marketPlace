import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const PreviewProfileScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />

      <ScrollView style={[styles.wholePage]}>
        <View style={styles.outerContainer}>
          <View style={styles.circle} />
        </View>

        <View>
          <View style={{marginHorizontal: 40, marginBottom: 15}}>
            <Text style={styles.label}>First name</Text>
            <Text style={styles.dataFields}>Beatrice</Text>
          </View>

          <View style={{marginHorizontal: 40, marginBottom: 15}}>
            <Text style={styles.label}>Last name</Text>
            <Text style={styles.dataFields}>Nakabanda</Text>
          </View>

          <View style={{marginHorizontal: 40, marginBottom: 15}}>
            <Text style={styles.label}>Cell number</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '40%',
              }}>
              <Text style={styles.dataFields}>E1C1A</Text>
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>

          <View style={{marginHorizontal: 40, marginBottom: 15}}>
            <Text style={styles.label}>Profession</Text>
            <Text style={styles.dataFields}>Science and Technology</Text>
          </View>

          <View style={{marginHorizontal: 40, marginBottom: 15}}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.dataFields}>Female</Text>
          </View>

          <View style={{marginHorizontal: 40}}>
            <Text style={styles.label}>Date of birth</Text>
            <Text style={styles.dataFields}>20.12.1990</Text>
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Text style={styles.editColor}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.saveColor}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PreviewProfileScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  saveButton: {
    backgroundColor: '#224589',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '40%',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  editButton: {
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '40%',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  saveColor: {
    color: 'white',
    fontSize: 14,
  },
  editColor: {
    color: '#224589',
    fontSize: 14,
  },
  outerContainer: {
    backgroundColor: '#A0D2DB',
    width: '100%',
    height: 86,
    position: 'relative',
    overflow: 'visible',
    marginBottom: 50,
  },
  headerBar: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 20,
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
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  label: {color: '#737070', fontSize: 14, fontWeight: 'bold'},
  dataFields: {color: '#737070', fontSize: 14},
  verifiedText: {
    color: '#22A145',
    fontSize: 10,
    fontStyle: 'italic',
  },
});
