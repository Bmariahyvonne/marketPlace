import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-regular-svg-icons';

const JobDetailsScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <ScrollView style={[styles.wholePage]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginBottom: 20}}>
            <Text style={styles.headerText}>Sales Director</Text>
            <Text style={styles.detailText}>Kubikware</Text>
            <Text style={styles.detailText}>Kampala, Uganda</Text>
            <Text style={styles.detailText}>Full time</Text>
          </View>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faShareFromSquare} size={25} color='#224589'/>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 20}}>
          <Text style={styles.headerText}>About the job</Text>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing el Suspend. Lorem
            ipsum dolor sit amet, consectetur adi piscing
          </Text>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing el Suspend.
          </Text>
        </View>

        <View style={{marginBottom: 20}}>
          <Text style={styles.headerText}>Requirements</Text>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              color="#000000"
              style={{marginTop: 4}}
            />
            <Text style={styles.detailText}>
              {' '}
              Minimum 3 years of leading successful sales teams
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              color="#000000"
              style={{marginTop: 4}}
            />
            <Text style={styles.detailText}>
              {' '}
              Minimum 8 years of successful direct sales experience
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <FontAwesomeIcon
              icon={faCircle}
              size={5}
              color="#000000"
              style={{marginTop: 4}}
            />
            <Text style={styles.detailText}>
              {' '}
              Support and other functional teams
            </Text>
          </View>
        </View>

        <View style={{marginBottom: 20}}>
          <Text style={styles.headerText}>About the company</Text>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing el Suspend. Lorem
            ipsum dolor sit amet, consectetur adi piscing
          </Text>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing el Suspend.
          </Text>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing el Suspend. Lorem
            ipsum dolor sit amet, consectetur adi piscing
          </Text>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing el Suspend.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate('JobApplicationScreen')}>
        <Text style={styles.applyText}>APPLY</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default JobDetailsScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F1F3F6',
    height: '90%',
    padding: 20,
  },
  headerText: {
    color: '#224589',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 5,
  },
  detailText: {
    color: '#3D3C3C',
    fontWeight: '400',
    fontSize: 10,
    marginBottom: 5,
  },
  applyButton: {
    backgroundColor: '#224589',
    height: 50,
    width: 175,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  applyText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});
