import {DATABASE_URI} from '../config';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection(DATABASE_URI);
autoIncrement.initialize(connection);

const ProductSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    rowPrice: {type: Number, required: true},
    fullPrice: {type: Number, required: true},
    categoryId: {type: String, required: true},
  },
  {collection: 'products'},
);

ProductSchema.plugin(autoIncrement.plugin, 'Product');
module.exports = mongoose.model('Product', ProductSchema);