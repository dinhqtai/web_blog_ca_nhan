
import mongoose from "mongoose";
const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

ProductsSchema.index({ name: "text" }, { unique: true });

const Products = mongoose.model("Products", ProductsSchema);

export default Products;