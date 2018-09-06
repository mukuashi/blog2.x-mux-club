import defaultSettings from './settings.config';

export default [
    // app
    {
        path: defaultSettings.version,
        component: '../layouts',
        routes: [
            {
                path: '/2.x',
                name: '',
                component: './Home',
            },
        ],
    },
];
