import { Image, StyleSheet, Platform, View } from 'react-native';
import CTextInput from '@/components/CTextInput/CTextInput.comp';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import React from 'react';
import { useTheme } from '@/hooks/useTheme';

export default function HomeScreen() {
  const theme = useTheme();
  const [value, setValue] = React.useState('hello');
  return (
    <View style={{alignContent: 'center', padding: 50, backgroundColor: theme.colors.background}}>
      <CTextInput value={value} setValue={setValue} title="username"/>
      <CTextInput value={value} setValue={setValue} title="username2"/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
