import {
  DefaultPage,
  GamePlay,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: 'game-start', name: 'Game play', component: GamePlay },
  ],
};
