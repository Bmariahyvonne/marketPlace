import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import ProgressBar from '../hooks/PodcastProgressBar';

const SinglePodcastScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={[styles.wholePage]}>
        <View style={[styles.imagePlaceHolder]}></View>
        <View style={[styles.podcastControls]}>
          <TouchableOpacity>
            <Image source={require('../images/ten_backwards.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faPlayCircle} color="#999999" size={40} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../images/ten_forward.png')} />
          </TouchableOpacity>
        </View>

        <ProgressBar />

        <Text style={styles.headingText}>MIRIAM THE OVERCOMER</Text>
        <Text style={styles.authorText}>By Ron Miller</Text>
        <Text
          style={styles.podcastText}>
          It was originally taken from a Latin text written by a Roman Scholar,
          Sceptic and Philosopher by the name of Marcus Tullius Cicero, who
          influenced the Latin language greatly. The "filler" text we know today
          has been altered over the years (in fact "Lorem" isn't actually a
          Latin word.
          It was originally taken from a Latin text written by a Roman Scholar,
          Sceptic and Philosopher by the name of Marcus Tullius Cicero, who
          influenced the Latin language greatly. The "filler" text we know today
          has been altered over the years (in fact "Lorem" isn't actually a
          Latin word.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SinglePodcastScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    height: '100%',
  },
  dateText: {
    color: '#737070',
    fontSize: 10,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  imagePlaceHolder: {
    backgroundColor: '#D9D9D9',
    height: 200,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  headingText: {
    color: '#224589',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 5,
    marginTop: 20,
    marginLeft: 5,
  },
  authorText: {
    color: '#737070',
    fontWeight: '400',
    fontSize: 10,
    marginBottom: 20,
    marginLeft: 5,
  },
  podcastControls: {
    height: 50,
    width: '60%',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  podcastText: {
    textAlign: 'justify',
    marginLeft: 5,
    color: 'black',
    fontWeight: '400',
    fontSize: 11,
  }
});
