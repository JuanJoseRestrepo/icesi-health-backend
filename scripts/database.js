var nano = require('nano');

module.exports = nano(process.env.DATABASE_URL || 'http://admin:icesi@my-couchdb:5984');
