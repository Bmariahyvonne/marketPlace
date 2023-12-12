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

const MyMarketplaceScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />
      <View style={styles.topNav}>
        <View style={[styles.leftButton, styles.bottomLine]}>
          <Text style={styles.buttonText}>CORPORATE PROFILE</Text>
        </View>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => navigation.navigate('ConnectRequestsScreen')}>
          <Text style={styles.buttonText}>CONNECT REQUESTS</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={[styles.wholePage]}></ScrollView>
    </SafeAreaView>
  );
};

export default MyMarketplaceScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F1F3F6',
    paddingHorizontal: 20,
    height: '100%',
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
});
