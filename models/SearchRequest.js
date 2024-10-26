const mongoose = require('mongoose');

const searchRequestSchema = new mongoose.Schema({
  term: String,
  date: { type: Date, default: Date.now }
});

const SearchRequest = mongoose.model('SearchRequest', searchRequestSchema);
module.exports = SearchRequest;
