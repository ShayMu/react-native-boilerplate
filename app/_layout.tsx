import { AnimatedFAB, PaperProvider, Text } from 'react-native-paper';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useTheme, CScreen, CText } from '@/react-native-app-essentials';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as ACheckList, ACheckListItemProps } from '@/components/ACheckList.comp/ACheckList.comp';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = useTheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [rows, setRows] = React.useState<ACheckListItemProps[]>([
    { title: 'hello', subtitle: 'jeel' },
    { title: 'hello', subtitle: 'heelo', isChecked: true },
    { title: 'hello', isChecked: true },
    { title: 'hello100000000000000000' },
  ]);

  const [isExtended, setIsExtended] = React.useState(true);
  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition = Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
    setIsExtended(currentScrollPosition <= 0);
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar style={theme.isDarkMode ? 'light' : 'dark'} />
      <SafeAreaView style={{ padding: 10, backgroundColor: theme.colors.background, height: '100%' }}>
        <CScreen>
          <Text>My Shopping List</Text>
          <ACheckList items={rows} setItems={setRows} onScroll={onScroll} />
          <AnimatedFAB
            icon={'plus'}
            label={'Add Item'}
            extended={isExtended}
            onPress={() => { setRows([...rows, { title: `new row ${rows.length}`, subtitle: 'jeel' }]) }}
            visible={true}
            animateFrom={'right'}
            iconMode={'dynamic'}
            style={{ position: 'absolute', right: 16, bottom: 16 }}
          />
        </CScreen>
      </SafeAreaView>
    </PaperProvider >
  );
}
