import { logout } from '../data/auth.js';
import { page } from '../utils/lib.js';
import { navController } from './navController.js';

export const logoutHandler = () => {
  logout();
  navController();
  page.redirect('/');
};
