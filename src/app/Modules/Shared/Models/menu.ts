import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: ''
  },
  {
    label: 'Master Info',
    isTitle: true
  },
 
 
  {
    label: 'Clients',
    icon: 'mail',
    subItems: [
      {
        label: 'Clients',
        link: 'Clients',
      }
    ]
  },
 
];
