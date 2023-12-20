import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faShop,
  faUsers,
  faRightFromBracket,
  faBriefcaseClock,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle, faCommentDots} from '@fortawesome/free-regular-svg-icons';

const DrawerList = [
  {icon: faShop, label: 'My Marketplace', navigateTo: 'HomeScreen'},
  {icon: faUsers, label: 'My Network', navigateTo: 'HomeScreen'},
  {icon: faUserCircle, label: 'My Profiles', navigateTo: 'ProfileScreen'},
  {
    icon: faCommentDots,
    label: 'My Marletplace Groups',
    navigateTo: 'ProfileScreen',
  },
  {icon: faUserPlus, label: 'My Connect Requests', navigateTo: 'ProfileScreen'},
  {icon: faBriefcaseClock, label: 'Jobs', navigateTo: 'ProfileScreen'},
];

const DrawerLayout = ({icon, label, navigateTo}) => {
  const navigation = useNavigation();

  return (
    <DrawerItem
      icon={({color, size}) => (
        <FontAwesomeIcon icon={icon} color="#224589" size={30} />
      )}
      label={label}
      onPress={() => navigation.navigate(navigateTo)}
    />
  );
};

const DrawerItems = props => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
      />
    );
  });
};

const DrawerContent = props => {
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: '#224589',
          }}>
          <Image
            source={require('../images/logo_white2.png')}
            style={{
              width: '90%',
              height: 120,
              alignSelf: 'center',
            }}
          />
        </View>
        <View>
          <DrawerItems />
        </View>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          icon={({color, size}) => (
            <FontAwesomeIcon
              icon={faRightFromBracket}
              color={'#224589'}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => navigation.navigate('LogInScreen')}
        />
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
