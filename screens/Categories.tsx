import React, { FC } from 'react';
import { ScrollView, Button, StyleSheet, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack';
import { CATEGORIES } from '../data';

interface CategoriesProps {
  navigation: NavigationScreenProp<any>;
}

const Categories: FC<CategoriesProps> = props => {
  const pressHandler = (routeName: string) => {
    props.navigation.navigate({ routeName });
  };

  return (
    <ScrollView>
      {CATEGORIES.map(({ id, name, color }) => (
        <View key={id} style={styles.buttonContainer}>
          <Button color={color} title={name} onPress={() => pressHandler(name)} />
        </View>
      ))}
    </ScrollView>
  );
};

// @ts-ignore
Categories.navigationOptions = {
  headerTitle: 'La boite à sons !',
  headerStyle: {
    backgroundColor: '#ccc',
  },
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
  buttonContainer: { marginVertical: 16 },
});

export default Categories;
