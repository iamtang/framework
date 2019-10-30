
const respones = {
	get body() {
		return this._body;
	},
	set body(data) {
		this._body = data;
	},
	get status() {
		return this.res.statusCode;
	},
	set status(statusCode) {
		if (typeof statusCode !== 'number') {
			throw new Error('something wrong!');
		}
		this.res.statusCode = statusCode;
	}
};

module.exports = respones