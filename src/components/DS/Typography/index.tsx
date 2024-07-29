import React from 'react';

import {StyleSheet, Text} from 'react-native';

interface IProps {
  typo: string;
  color?: string;
  children: React.ReactNode;
}

export default function Typography(props: IProps) {
  const {typo, children} = props;

  return <Text style={styles[typo]}>{children}</Text>;
}

const styles = StyleSheet.create({
  Heading_1: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: 600,
  },
  Heading_2: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 600,
  },
  Heading_3: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 600,
  },
  Body1_N: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 600,
  },
  Body1_B: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 700,
  },
  Body2_B: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: 600,
  },
  Body2_N: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: 400,
  },
});
