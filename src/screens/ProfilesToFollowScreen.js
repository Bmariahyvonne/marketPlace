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
  
  const ProfilesToFollowScreen = props => {
    const {navigation} = props;
  
    return (
      <SafeAreaView>
        <View style={styles.firstBar}>
          <Text style={styles.buttonText}>1,500</Text>
          <Text style={styles.buttonText}>Connections</Text>
        </View>
        <View style={styles.topNav}>
          
          <TouchableOpacity
            style={styles.leftButton}
            onPress={() => navigation.navigate('MyNetworkScreen')}>
            <Text style={styles.buttonText}>CONNECTIONS</Text>
          </TouchableOpacity>
          <View style={[styles.leftButton, styles.bottomLine]}>
            <Text style={styles.buttonText}>PROFILES TO FOLLOW</Text>
          </View>
        </View>
  
        <ScrollView style={[styles.wholePage]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RequestDetailsScreen')}>
            <View style={styles.requestRow}>
              <View style={styles.imagePlaceholder}></View>
              <View
                style={{
                  width: '30%',
                }}>
                <Text style={styles.nameRequest}>Camilla Alina</Text>
                <Text style={styles.titleRequest}>CTO | Yenze Creations</Text>
                <Text style={styles.requestDate}>Nov 16 2023</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.ignoreButtons, styles.actionButton1]}>
                  <Text style={{color: '#898484', fontWeight: 'bold'}}>
                    Ignore
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.ignoreButtons,
                    styles.actionButton2,
                    {backgroundColor: '#224589', marginLeft: 10},
                  ]}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('RequestDetailsScreen')}>
            <View style={styles.requestRow}>
              <View style={styles.imagePlaceholder}></View>
              <View
                style={{
                  width: '30%',
                }}>
                <Text style={styles.nameRequest}>Camilla Alina</Text>
                <Text style={styles.titleRequest}>CTO | Yenze Creations</Text>
                <Text style={styles.requestDate}>Nov 16 2023</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.ignoreButtons, styles.actionButton1]}>
                  <Text style={{color: '#898484', fontWeight: 'bold'}}>
                    Ignore
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.ignoreButtons,
                    styles.actionButton2,
                    {backgroundColor: '#224589', marginLeft: 10},
                  ]}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('RequestDetailsScreen')}>
            <View style={styles.requestRow}>
              <View style={styles.imagePlaceholder}></View>
              <View
                style={{
                  width: '30%',
                }}>
                <Text style={styles.nameRequest}>Camilla Alina</Text>
                <Text style={styles.titleRequest}>CTO | Yenze Creations</Text>
                <Text style={styles.requestDate}>Nov 16 2023</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.ignoreButtons, styles.actionButton1]}>
                  <Text style={{color: '#898484', fontWeight: 'bold'}}>
                    Ignore
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.ignoreButtons,
                    styles.actionButton2,
                    {backgroundColor: '#224589', marginLeft: 10},
                  ]}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('RequestDetailsScreen')}>
            <View style={styles.requestRow}>
              <View style={styles.imagePlaceholder}></View>
              <View
                style={{
                  width: '30%',
                }}>
                <Text style={styles.nameRequest}>Camilla Alina</Text>
                <Text style={styles.titleRequest}>CTO | Yenze Creations</Text>
                <Text style={styles.requestDate}>Nov 16 2023</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.ignoreButtons, styles.actionButton1]}>
                  <Text style={{color: '#898484', fontWeight: 'bold'}}>
                    Ignore
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.ignoreButtons,
                    styles.actionButton2,
                    {backgroundColor: '#224589', marginLeft: 10},
                  ]}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('RequestDetailsScreen')}>
            <View style={styles.requestRow}>
              <View style={styles.imagePlaceholder}></View>
              <View
                style={{
                  width: '30%',
                }}>
                <Text style={styles.nameRequest}>Camilla Alina</Text>
                <Text style={styles.titleRequest}>CTO | Yenze Creations</Text>
                <Text style={styles.requestDate}>Nov 16 2023</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.ignoreButtons, styles.actionButton1]}>
                  <Text style={{color: '#898484', fontWeight: 'bold'}}>
                    Ignore
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.ignoreButtons,
                    styles.actionButton2,
                    {backgroundColor: '#224589', marginLeft: 10},
                  ]}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('RequestDetailsScreen')}>
            <View style={styles.requestRow}>
              <View style={styles.imagePlaceholder}></View>
              <View
                style={{
                  width: '30%',
                }}>
                <Text style={styles.nameRequest}>Camilla Alina</Text>
                <Text style={styles.titleRequest}>CTO | Yenze Creations</Text>
                <Text style={styles.requestDate}>Nov 16 2023</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.ignoreButtons, styles.actionButton1]}>
                  <Text style={{color: '#898484', fontWeight: 'bold'}}>
                    Ignore
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.ignoreButtons,
                    styles.actionButton2,
                    {backgroundColor: '#224589', marginLeft: 10},
                  ]}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('RequestDetailsScreen')}>
            <View style={styles.requestRow}>
              <View style={styles.imagePlaceholder}></View>
              <View
                style={{
                  width: '30%',
                }}>
                <Text style={styles.nameRequest}>Camilla Alina</Text>
                <Text style={styles.titleRequest}>CTO | Yenze Creations</Text>
                <Text style={styles.requestDate}>Nov 16 2023</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.ignoreButtons, styles.actionButton1]}>
                  <Text style={{color: '#898484', fontWeight: 'bold'}}>
                    Ignore
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.ignoreButtons,
                    styles.actionButton2,
                    {backgroundColor: '#224589', marginLeft: 10},
                  ]}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ProfilesToFollowScreen;
  
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
    firstBar: {
      width: '100%',
      height: 58,
      backgroundColor: '#F1F3F6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionButton1: {
      borderRadius: 20,
      borderColor: '#D9D9D9',
      borderWidth: 1,
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
      height: 70,
      flexDirection: 'row',
      paddingBottom: 5,
      marginTop: 20,
    },
    imagePlaceholder: {
      backgroundColor: '#D9D9D9',
      width: 55,
      height: 55,
      borderRadius: 50,
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
    requestDate: {color: '#737070', fontWeight: '400', fontSize: 10},
    actionButtons: {
      width: '37%',
      marginLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    topButton: {
      width: '50%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ignoreButtons: {
      width: '50%',
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  