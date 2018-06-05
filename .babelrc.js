const path = require('path');

module.exports = {
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'components': path.resolve(__dirname, './src/components/'),
					'utils': path.resolve(__dirname, './src/utils/'),
					'config': path.resolve(__dirname, './src/config/'),
					'services': path.resolve(__dirname, './src/services/'),
					'models': path.resolve(__dirname, './src/models/'),
					'routes': path.resolve(__dirname, './src/routes/'),
					'styles': path.resolve(__dirname, './src/styles/'),
					'layout': path.resolve(__dirname, './src/layout/'),
					'assets': path.resolve(__dirname, './src/assets/'),
				},
			},
		],
		[
			'import',
			{
				libraryName: 'antd',
				style: true, // or 'css'
			},
		],
	],
};