var File = require('File');

module.exports = {
	readFileSync: function(fn) {
		return new File(fn).readAll();
	}
};

