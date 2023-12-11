import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const BlogListScreen = props => {
  const {navigation} = props;

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#224589"
        barStyle="light-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <View style={[styles.searchBar]}>
          <FontAwesomeIcon icon={faSearch} size={20} color="#898484" />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor="#898484"
          />
        </View>
        <View style={[styles.resouceRow]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleBlogScreen')}>
            <View style={[styles.resourceData]}>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 55,
                  width: 56,
                  borderRadius: 5,
                }}></View>
              <View
                style={{
                  height: 75,
                  width: '75%',
                  borderRadius: 5,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: '#224589',
                    fontWeight: '700',
                    fontSize: 13,
                    marginBottom: 5,
                    marginTop: 5,
                  }}>
                  MIRIAM THE OVERCOMER
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 11,
                    marginBottom: 10,
                  }}>
                  Miriam faced struggles and loss early in life.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Nov 16 2023
                  </Text>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Ron Miller
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.resouceRow]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleBlogScreen')}>
            <View style={[styles.resourceData]}>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 55,
                  width: 56,
                  borderRadius: 5,
                }}></View>
              <View
                style={{
                  height: 75,
                  width: '75%',
                  borderRadius: 5,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: '#224589',
                    fontWeight: '700',
                    fontSize: 13,
                    marginBottom: 5,
                    marginTop: 5,
                  }}>
                  MIRIAM THE OVERCOMER
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 11,
                    marginBottom: 10,
                  }}>
                  Miriam faced struggles and loss early in life.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Nov 16 2023
                  </Text>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Ron Miller
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.resouceRow]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleBlogScreen')}>
            <View style={[styles.resourceData]}>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 55,
                  width: 56,
                  borderRadius: 5,
                }}></View>
              <View
                style={{
                  height: 75,
                  width: '75%',
                  borderRadius: 5,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: '#224589',
                    fontWeight: '700',
                    fontSize: 13,
                    marginBottom: 5,
                    marginTop: 5,
                  }}>
                  MIRIAM THE OVERCOMER
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 11,
                    marginBottom: 10,
                  }}>
                  Miriam faced struggles and loss early in life.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Nov 16 2023
                  </Text>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Ron Miller
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.resouceRow]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleBlogScreen')}>
            <View style={[styles.resourceData]}>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 55,
                  width: 56,
                  borderRadius: 5,
                }}></View>
              <View
                style={{
                  height: 75,
                  width: '75%',
                  borderRadius: 5,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: '#224589',
                    fontWeight: '700',
                    fontSize: 13,
                    marginBottom: 5,
                    marginTop: 5,
                  }}>
                  MIRIAM THE OVERCOMER
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 11,
                    marginBottom: 10,
                  }}>
                  Miriam faced struggles and loss early in life.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Nov 16 2023
                  </Text>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Ron Miller
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.resouceRow]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleBlogScreen')}>
            <View style={[styles.resourceData]}>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 55,
                  width: 56,
                  borderRadius: 5,
                }}></View>
              <View
                style={{
                  height: 75,
                  width: '75%',
                  borderRadius: 5,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: '#224589',
                    fontWeight: '700',
                    fontSize: 13,
                    marginBottom: 5,
                    marginTop: 5,
                  }}>
                  MIRIAM THE OVERCOMER
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 11,
                    marginBottom: 10,
                  }}>
                  Miriam faced struggles and loss early in life.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Nov 16 2023
                  </Text>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Ron Miller
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.resouceRow]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleBlogScreen')}>
            <View style={[styles.resourceData]}>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 55,
                  width: 56,
                  borderRadius: 5,
                }}></View>
              <View
                style={{
                  height: 75,
                  width: '75%',
                  borderRadius: 5,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: '#224589',
                    fontWeight: '700',
                    fontSize: 13,
                    marginBottom: 5,
                    marginTop: 5,
                  }}>
                  MIRIAM THE OVERCOMER
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 11,
                    marginBottom: 10,
                  }}>
                  Miriam faced struggles and loss early in life.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Nov 16 2023
                  </Text>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Ron Miller
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.resouceRow]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleBlogScreen')}>
            <View style={[styles.resourceData]}>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  height: 55,
                  width: 56,
                  borderRadius: 5,
                }}></View>
              <View
                style={{
                  height: 75,
                  width: '75%',
                  borderRadius: 5,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    color: '#224589',
                    fontWeight: '700',
                    fontSize: 13,
                    marginBottom: 5,
                    marginTop: 5,
                  }}>
                  MIRIAM THE OVERCOMER
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '400',
                    fontSize: 11,
                    marginBottom: 10,
                  }}>
                  Miriam faced struggles and loss early in life.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Nov 16 2023
                  </Text>
                  <Text
                    style={{
                      color: '#737070',
                      fontWeight: '400',
                      fontSize: 10,
                      marginBottom: 10,
                    }}>
                    Ron Miller
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogListScreen;

const styles = StyleSheet.create({
  wholePage: {
    backgroundColor: '#F1F3F6',
    paddingHorizontal: 20,
    height: '100%',
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
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 14,
  },
  resouceRow: {
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
    alignSelf: 'center',
  },
  resourceData: {
    borderLeftColor: '#F1F3F6',
    borderRightColor: '#F1F3F6',
    borderTopColor: '#F1F3F6',
    borderBottomColor: '#D2D1D1',
    borderWidth: 1,
    height: 80,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
