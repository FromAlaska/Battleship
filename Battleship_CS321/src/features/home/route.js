// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  IndexPage,
  BattlePage,
  About,
  Board,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'index-page',
      name: 'BattleShip',
      component: IndexPage,
      isIndex: true,
    },
    { path: 'battle-page', name: 'Play!', component: BattlePage },
    { path: 'about', name: 'About Us', component: About},
    { path: 'Board', name: 'Example', component: Board},
  ],
};
