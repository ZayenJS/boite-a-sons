import React, { FC } from 'react';
import { ScrollView, StyleSheet, FlatList, View } from 'react-native';
import Item from '../components/Item';

import { CATEGORIES } from '../data';
import { Category } from '../models';

interface InternetProps {}

const Internet: FC<InternetProps> = () => {
  return (
    // <FlatList data={} />
    <ScrollView contentContainerStyle={styles.container}>
      {CATEGORIES.find((category: Category) => category.name === 'Internet').itemList.map(
        ({ image, url }) => (
          <Item key={Math.random()} image={image} url={url} />
          ),
          )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#123456',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default Internet;
