import products from "../models/products";
export const getProducts = async (req, res) => {
    try {
        const Product = await products.find()
        return res.status(200).json(Product)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
export const postProducts = async (req, res) => {
    try {
        const Product = await products.create(req.body)
        return res.status(200).json(Product)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}