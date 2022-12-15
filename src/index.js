const path = require('path');

module.exports = (_option, _ctx) => ({
	enhanceAppFiles: [
		path.resolve(__dirname, 'enhanceAppFile.js')
	],
	globalUIComponents: 'UsageCount',
})
