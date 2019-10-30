const url = require('url');
const request = {
	get query() {
		return url.parse(this.req.url, true).query;
	}
}

module.exports = request;