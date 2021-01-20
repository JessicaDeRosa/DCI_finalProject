const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    category: {
        type: String,
        enum: [
            'white',
            'red',
            'national',
            'international',
            'dry',
            'middle',
            'sweet',
            'rose',
            'cuvee'
        ]
    },
    checkData: {
        checkbox: {type:String}
    }
    

   
  
    // created: Date
    // sellerId: { type: Schema.Types.ObjectId }

});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;