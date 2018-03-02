import {
  DefaultPage,
  GamePlay,
  About,
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
    { path: 'about', name: 'About', component: About },
  ],
};
