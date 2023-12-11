import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle, Line} from 'react-native-svg';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <Svg height="20" width="100%" viewBox="0 0 400 20">
        {/* Line between Circle 1 and Circle 2 */}
        <Line
          x1="33"
          y1="10"
          x2="0"
          y2="10"
          stroke="gray"
          strokeWidth="3"
        />
        {/* Second Circle */}
        <Circle cx="33" cy="10" r="8" fill="gray" />
        {/* Line between Circle 2 and Circle 3 */}
        <Line x1="0" y1="10" x2="400" y2="10" stroke="gray" strokeWidth="1" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
  },
});

export default ProgressBar;
