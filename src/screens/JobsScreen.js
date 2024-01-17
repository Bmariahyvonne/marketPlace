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
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark, faPenToSquare} from '@fortawesome/free-regular-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Finance', value: '1'},
  {label: 'Technology', value: '2'},
  {label: 'Medicine', value: '3'},
];

const JobsScreen = props => {
  const {navigation} = props;
  const [value, setValue] = useState(data[0].value);

  return (
    <SafeAreaView>
      <View style={styles.topNav}>
        <View style={[styles.leftButton, styles.bottomLine]}>
          <Text style={styles.buttonText}>JOBS</Text>
        </View>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => navigation.navigate('SavedJobsScreen')}>
          <Text style={styles.buttonText}>SAVED JOBS</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postJobText}>Post a job</Text>
        <FontAwesomeIcon icon={faPenToSquare} size={20} color="#224589" />
      </TouchableOpacity>

      <View style={[styles.searchBar]}>
        <FontAwesomeIcon icon={faSearch} size={20} color="#898484" />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="#898484"
        />
      </View>

      <View style={styles.dropDownNav}>
        <Dropdown
          style={styles.textInput}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={210}
          labelField="label"
          valueField="value"
          searchPlaceholder="Select category"
          placeholder="Select category"
          //   value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
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
            <Text style={styles.nameRequest}>Data Analyst</Text>
            <Text style={styles.titleRequest}>Dynata</Text>
            <Text style={styles.titleRequest}>Kampala, Uganda</Text>
            <Text style={styles.requestDate}>5 days ago</Text>
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
            <Text style={styles.nameRequest}>Sales Director</Text>
            <Text style={styles.titleRequest}>Kubikware</Text>
            <Text style={styles.titleRequest}>Kampala, Uganda</Text>
            <Text style={styles.requestDate}>7 days ago</Text>
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
            <Text style={styles.nameRequest}>Accountant</Text>
            <Text style={styles.titleRequest}>Post Bank</Text>
            <Text style={styles.titleRequest}>Kampala, Uganda</Text>
            <Text style={styles.requestDate}>11 days ago</Text>
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
            <Text style={styles.nameRequest}>Finance Admin</Text>
            <Text style={styles.titleRequest}>Post Bank</Text>
            <Text style={styles.titleRequest}>Kampala, Uganda</Text>
            <Text style={styles.requestDate}>2 weeks ago</Text>
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

export default JobsScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F1F3F6',
    marginBottom: 10,
    height: '70%',
  },
  topNav: {
    width: '100%',
    height: 58,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  dropDownNav: {
    width: '90%',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
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
  postJobText: {
    color: '#224589',
    paddingRight: 10,
  },
  postButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    marginTop: 10,
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#224589',
  },
});
