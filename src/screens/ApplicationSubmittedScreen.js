import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';

const ApplicationSubmittedScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <ScrollView style={[styles.wholePage]}>
        <View style={{alignSelf: 'center'}}>
          <Image
            source={require('../images/applied.png')}
            style={styles.imageStyle}
          />
          <Text style={styles.thankYou}>Thank you for applying</Text>
        </View>
        <Text style={styles.thankYouMessage}>
          Your application has been submitted, we will be in touch and contact
          you soon
        </Text>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => navigation.navigate('JobsScreen')}>
          <Text style={styles.applyText}>BACK TO JOBS</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplicationSubmittedScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F1F3F6',
    padding: 20,
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
  thankYouMessage: {
    color: '#737070',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
  },
  applyButton: {
    backgroundColor: '#224589',
    height: 50,
    width: 175,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 50,
  },
  applyText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});
