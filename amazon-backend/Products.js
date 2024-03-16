const mongoose = require ('mongoose')


const ProductSchema = mongoose.Schema({
    title: String,
    imageURL: String,
    price: Number,
    rating: Number,

});

module.exports = mongoose.model('products',ProductSchema) // model is simillar to collection in fire base