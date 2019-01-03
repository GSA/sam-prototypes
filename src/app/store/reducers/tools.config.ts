import { Tool } from '../objects/tool';

export const Tools: Tool[] = [
    {
        title: 'Filters',
        name: 'filters',
        icon: 'fas fa-filter',
        isFullScreen: false,
        requiresSignin: false
    },
    {
        title: 'About',
        name: 'about',
        icon: 'fas fa-info-circle',
        isFullScreen: true,
        requiresSignin: false
    },
    {
        title: 'Download',
        name: 'download',
        icon: 'fas fa-download',
        isFullScreen: true,
        requiresSignin: false
    },
    {
        title: 'Schedule',
        name: 'schedule',
        icon: 'far fa-clock',
        isFullScreen: true,
        requiresSignin: false
    },
    {
        title: 'Save',
        name: 'save',
        icon: 'fas fa-hdd',
        isFullScreen: true,
        requiresSignin: false
    }

];