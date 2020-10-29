import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Categories from '../screens/Categories';
import Internet from '../screens/Internet';
import Crado from '../screens/Crado';
import Meme from '../screens/Meme';

const Navigator = createStackNavigator({
  Categories,
  Internet,
  Crado,
  Meme,
});

export default createAppContainer(Navigator);
