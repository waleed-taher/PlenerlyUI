import {
  CalendarIcon,
  Cog8ToothIcon,
  CubeIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  Squares2X2Icon,
  TvIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const APP_ROUTES = {
  OVERVIEW: '/dashboard',
  MODELS: '/dashboard/models',
  MODEL_SETTINGS: '/dashboard/models/settings',
  MODEL_SANDBOX: '/dashboard/models/sandbox',
  MODEL_APIS: '/dashboard/models/apis',
  MODEL_WEBHOOKS: '/dashboard/models/webhooks',
  MODEL_CONTROLS: '/dashboard/models/controls',
  TEAM: '/dashboard/team',
  TEAM_MEMBERS: '/dashboard/team/members',
  TEAM_ROLES: '/dashboard/team/roles',
  TRAIN: '/dashboard/train',
  ENDPOINTS: '/dashboard/endpoints',
  EVENTS: '/dashboard/events',
  SETTINGS: '/dashboard/settings',
  HELP: '/dashboard/help',
};

export const routes = [
  {
    id: 1,
    path: APP_ROUTES.OVERVIEW,
    title: 'Overview',
    icon: <Squares2X2Icon className='w-5' />,
  },
  {
    id: 2,
    title: 'Models',
    icon: <CubeIcon className='w-5' />,
    items: [
      { itemTitle: 'Settings', itemPath: APP_ROUTES.MODEL_SETTINGS },
      { itemTitle: 'Sandbox', itemPath: APP_ROUTES.MODEL_SANDBOX },
      { itemTitle: 'APIs', itemPath: APP_ROUTES.MODEL_APIS },
      { itemTitle: 'Webhooks', itemPath: APP_ROUTES.MODEL_WEBHOOKS },
      { itemTitle: 'Controls', itemPath: APP_ROUTES.MODEL_CONTROLS },
    ],
  },
  {
    id: 3,
    title: 'Team',
    icon: <UserGroupIcon className='w-5' />,
    items: [
      { itemTitle: 'Members', itemPath: APP_ROUTES.TEAM_MEMBERS },
      { itemTitle: 'Roles', itemPath: APP_ROUTES.TEAM_ROLES },
    ],
  },
  {
    id: 4,
    path: APP_ROUTES.TRAIN,
    title: 'Train',
    icon: <TvIcon className='w-5' />,
  },
  {
    id: 5,
    path: APP_ROUTES.ENDPOINTS,
    title: 'Endpoints',
    icon: <CursorArrowRaysIcon className='w-5' />,
  },
  {
    id: 6,
    path: APP_ROUTES.EVENTS,
    title: 'Events',
    icon: <CalendarIcon className='w-5' />,
  },
  {
    id: 7,
    path: APP_ROUTES.SETTINGS,
    title: 'Settings',
    icon: <Cog8ToothIcon className='w-5' />,
  },
  {
    id: 8,
    path: APP_ROUTES.HELP,
    title: 'Help',
    icon: <LifebuoyIcon className='w-5' />,
  },
];
