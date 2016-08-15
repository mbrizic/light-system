var moment = require('moment');

module.exports = {
	getDayAfterDate: function (date) {
		return moment.utc(date).add(1, 'days').toDate();
	},
	getDayBeforeDate: function (date) {
		return moment.utc(date).subtract(1, 'days').toDate();
	}
};