import { Category, Item } from '../models';

const Internet = new Category(1, 'Internet', '#154879');

Internet.addItem(
  new Item(
    require('../assets/images/meryem.jpg'),
    require('../assets/sounds/je-suis-pas-venue-ici-pour-souffrir-ok.mp3'),
  ),
);
Internet.addItem(
  new Item(require('../assets/images/eddy-malou.jpg'), require('../assets/sounds/eddy-malou.mp3')),
);
Internet.addItem(
  new Item(require('../assets/images/faux.jpg'), require('../assets/sounds/faux.mp3')),
);

const Crado = new Category(2, 'Crado', '#fa2548');

Crado.addItem(new Item(require('../assets/images/fart.jpg'), require('../assets/sounds/fart.mp3')));
Crado.addItem(
  new Item(require('../assets/images/nasty/rot.jpg'), require('../assets/sounds/nasty/rot.mp3')),
);

const Meme = new Category(3, 'Meme', '#0f2f41');

export const CATEGORIES = [Internet, Crado, Meme];
