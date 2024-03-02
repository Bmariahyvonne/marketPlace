import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';

const JobSubmittedScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <ScrollView style={[styles.wholePage]}>
        <View style={{alignSelf: 'center'}}>
          <Image
            source={require('../images/applied.png')}
            style={styles.imageStyle}
          />
          <Text style={styles.thankYou}>Your job has been posted successfully</Text>
        </View>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => navigation.navigate('JobsScreen')}>
          <Text style={styles.applyText}>BACK TO JOBS</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobSubmittedScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F3F7F6',
    padding: 20,
    height: '100%',
  },
  imageStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 150,
  },
  thankYou: {
    color: '#737070',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },
  applyButton: {
    backgroundColor: '#224589',
    height: 50,
    width: 175,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 70,
  },
  applyText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});
