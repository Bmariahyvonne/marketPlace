import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <Svg height="100" width="90%" viewBox="0 0 100 100">
        {/* First Circle */}
        <Circle cx="25" cy="50" r="8" fill="#78A55A" />
        {/* Line between Circle 1 and Circle 2 */}
        <Line x1="33" y1="50" x2="67" y2="50" stroke="#78A55A" strokeWidth="2" />
        {/* Second Circle */}
        <Circle cx="75" cy="50" r="8" fill="#78A55A" />
        {/* Line between Circle 2 and Circle 3 */}
        <Line x1="83" y1="50" x2="120" y2="50" stroke="gray" strokeWidth="2" />
        {/* Third Circle */}
        <Circle cx="120" cy="50" r="8" fill="gray" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default ProgressBar;
