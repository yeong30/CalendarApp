import Typography from '@/components/DS/Typography';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Typography typo="Heading_1">dd</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    width: 200,
    backgroundColor: 'blue',
  },
});
