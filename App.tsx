import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';

import Navigator from './navigation';

export default () => <Navigator />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#123456',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  title__container: {
    marginVertical: 16,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
  },
});
