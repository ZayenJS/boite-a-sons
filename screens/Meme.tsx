import React, { FC } from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import Item from '../components/Item';
import { CATEGORIES } from '../data';
import { Category } from '../models';

interface MemeProps {}

const Meme: FC<MemeProps> = () => {
  return (
    // <FlatList data={} />
    <ScrollView contentContainerStyle={styles.container}>
      {CATEGORIES.find((category: Category) => category.name === 'Meme').itemList.map(
        ({ image, url }) => (
          <Item key={Math.random()} url={url} image={image} />
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
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Meme;
