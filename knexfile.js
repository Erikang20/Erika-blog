module.exports = {

	development: {
		client: 'pg',
		connection: 'postgres://localhost/erika-blog'
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}

};
