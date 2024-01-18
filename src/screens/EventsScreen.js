import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarPlus} from '@fortawesome/free-regular-svg-icons';

const EventsScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <View style={styles.eventBox}>
          <View style={styles.titleBox}>
            <Text style={styles.headingText}>INAUGURAL CONNECT FELLOWSHIP</Text>
            <TouchableOpacity>
              <Image
                source={require('../images/bell.png')}
                style={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.infoText}>Friday, 17th November</Text>
          <Text style={styles.infoText}>6:00pm - 9:00pm</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.infoText}>Watoto Church Ntinda</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faCalendarPlus}
                size={20}
                color="#224589"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eventBox}>
          <View style={styles.titleBox}>
            <Text style={styles.headingText}>
              MARKETPLACE CONVENTION SERIES
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../images/bell.png')}
                style={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.infoText}>Friday, 17th November</Text>
          <Text style={styles.infoText}>6:00pm - 9:00pm</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.infoText}>Watoto Church Ntinda</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faCalendarPlus}
                size={20}
                color="#224589"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eventBox}>
          <View style={styles.titleBox}>
            <Text style={styles.headingText}>
              HIGHLY INFLUENTIAL LEADERS FELLOWSHIPS
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../images/bell.png')}
                style={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.infoText}>Friday, 17th November</Text>
          <Text style={styles.infoText}>6:00pm - 9:00pm</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.infoText}>Watoto Church Ntinda</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faCalendarPlus}
                size={20}
                color="#224589"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    padding: 20,
  },
  eventBox: {
    width: '90%',
    backgroundColor: '#EFF3FB',
    height: 130,
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
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headingText: {
    color: '#224589',
    fontWeight: '700',
    fontSize: 11,
  },
  infoText: {
    color: '#224589',
    fontWeight: '400',
    fontSize: 11,
    marginTop: 5,
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: '#F1F3F6',
    borderBottomColor: 'white',
    borderWidth: 1,
    paddingBottom: 10,
  },
});
