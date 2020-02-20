import {
  AppError,
  IconLink,
} from '../interface';

export const GITHUB = 'GitHub';
export const GMAIL = 'GMail';
export const LINKEDIN = 'LinkedIn';

export const ERR_CLASS: { [key: string]: string } = {
  auth: 'UNAUTHORIZED',
  badreq: 'BAD REQUEST',
  forbid: 'FORBIDDEN',
  gen: 'GENERAL',
  nores: 'NOT FOUND',
  permit: 'NOT ALLOWED',
  rate: 'RATE-LIMIT',
  server: 'SERVER ERROR',
  unknown: 'UNKNOWN',
};

export const UNKNOWN_ERROR: AppError = {
  message: 'An unexpected error occurred. Refresh the application?',
  header: 'Error Notification',
  type: 'UNKNOWN'
};

export const AUTH_ERROR: AppError = {
  message: 'An unexpected error occurred. You\'ll need to log in before continuing.',
  header: 'Error Notification',
  type: 'UNAUTHORIZED'
};

export const BADREQ_ERROR: AppError = {
  message: 'An unexpected error occurred. Refresh the application?',
  header: 'Error Notification',
  type: 'BAD REQUEST'
};

export const FORBID_ERROR: AppError = {
  message: 'An unexpected error occurred. You\'ll need to log in before continuing.',
  header: 'Error Notification',
  type: 'FORBIDDEN'
};

export const NORES_ERROR: AppError = {
  message: 'An unexpected error occurred. After refreshing the application,\n'
    + 'contact support@peloton.com if the error persists.',
  header: 'Error Notification',
  type: 'NOT FOUND'
};

export const PERMIT_ERROR: AppError = {
  message: 'An unexpected error occurred. After refreshing the application,\n'
    + 'contact support@peloton.com if the error persists.',
  header: 'Error Notification',
  type: 'NOT ALLOWED'
};

export const RATE_ERROR: AppError = {
  message: 'An unexpected error occurred. Wait 30 ' +
    'seconds before refreshing the application?',
  header: 'Error Notification',
  type: 'RATE-LIMIT'
};

export const SERVER_ERROR: AppError = {
  message: 'An unexpected error occurred. After refreshing the application,\n'
    + 'contact support@peloton.com if the error persists.',
  header: 'Error Notification',
  type: 'SERVER'
};

export const GEN_ERROR: AppError = {
  message: 'An unexpected error occurred. Refresh the application?',
  header: 'Error Notification',
  type: 'ERROR'
};

export const ICONLINKS: IconLink[] = [
  {
    path: 'about.svg',
    name: 'about',
    type: 'navigation',
    redirect: '#about',
    display: 'About',
  },
  {
    path: 'addfile.svg',
    name: 'addfile',
  },
  {
    path: 'admintools.svg',
    name: 'admintools',
  },
  {
    path: 'alarmclock.svg',
    name: 'alarmclock',
  },
  {
    path: 'approval.svg',
    name: 'approval',
  },
  {
    path: 'briefcase.svg',
    name: 'briefcase',
    type: 'navigation',
    redirect: '#projects',
    display: 'Projects',
  },
  {
    path: 'businessman.svg',
    name: 'businessman',
  },
  {
    path: 'cancel.svg',
    name: 'cancel',
  },
  {
    path: 'contact.svg',
    name: 'contact',
    type: 'navigation',
    display: 'Contact',
    redirect: '#contact',
  },
  {
    path: 'document.svg',
    name: 'document',
  },
  {
    path: 'error.svg',
    name: 'error',
  },
  {
    path: 'factory.svg',
    name: 'factory',
    type: 'navigation',
    redirect: '#experience',
    display: 'Experience',
  },
  {
    path: 'file.svg',
    name: 'file',
  },
  {
    path: 'fire.svg',
    name: 'fire',
    type: 'navigation',
    redirect: '#skills',
    display: 'Skills',
  },
  {
    path: 'goal.svg',
    name: 'goal',
  },
  {
    path: 'help.svg',
    name: 'help',
  },
  {
    path: 'home.svg',
    name: 'home',
    type: 'navigation',
    redirect: '#welcome',
    display: 'Home',
  },
  {
    path: 'info.svg',
    name: 'info',
  },
  {
    path: 'key.svg',
    name: 'key',
  },
  {
    path: 'lighton.svg',
    name: 'lighton',
  },
  {
    path: 'lock.svg',
    name: 'lock',
  },
  {
    path: 'maintenance.svg',
    name: 'maintenance',
  },
  {
    path: 'minus.svg',
    name: 'minus',
  },
  {
    path: 'nametag.svg',
    name: 'nametag',
  },
  {
    path: 'news.svg',
    name: 'news',
  },
  {
    path: 'notification.svg',
    name: 'notification',
  },
  {
    path: 'protect.svg',
    name: 'protect',
  },
  {
    path: 'restart.svg',
    name: 'restart',
  },
  {
    path: 'reading.svg',
    name: 'reading',
  },
  {
    path: 'share.svg',
    name: 'share',
  },
  {
    path: 'sourcecode.svg',
    name: 'sourcecode',
  },
  {
    path: 'synchronize.svg',
    name: 'synchronize',
  },
  {
    path: 'trash.svg',
    name: 'trash',
  },
  {
    path: 'unavailable.svg',
    name: 'unavailable',
  },
  {
    path: 'undo.svg',
    name: 'undo',
  },
  {
    path: 'usergroups.svg',
    name: 'usergroups',
    type: 'navigation',
    redirect: '#references',
    display: 'References',
  },
  {
    path: 'website.svg',
    name: 'website',
  },
  {
    path: 'wifi.svg',
    name: 'wifi',
  },
  {
    path: 'calendar.svg',
    name: 'calendar',
  },
  {
    path: 'cancel.svg',
    name: 'cancel',
  },
  {
    path: 'error.svg',
    name: 'error',
  },
  {
    path: 'github.svg',
    name: 'github',
    type: 'account',
    display: 'GitHub',
    redirect: 'https://github.com/mlowenstein',
  },
  {
    path: 'gmail.svg',
    name: 'gmail',
    type: 'account',
    display: 'GMail',
    redirect: 'emlowdev@gmail.com',
  },
  {
    path: 'home.svg',
    name: 'home'
  },
  {
    path: 'linkedin.svg',
    name: 'linkedin',
    type: 'account',
    display: 'LinkedIn',
    redirect: 'https://www.linkedin.com/in/michael-lowenstein-778a83b4/',
  },
  {
    path: 'ok.svg',
    name: 'ok',
  },
  {
    path: 'search.svg',
    name: 'search',
  },
  {
    path: 'services.svg',
    name: 'services',
  }
];
