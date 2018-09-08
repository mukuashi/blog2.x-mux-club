import defaultSettings from './settings.config';

export default [
    // app
    {
        path: defaultSettings.version,
        component: '../layouts',
        routes: [
            {
                path: defaultSettings.version,
                name: '',
                component: './Home',
            },
            {
                path: `${defaultSettings.version}/media`,
                name: 'Media',
                component: './Media',
            },
        ],
    },
];
