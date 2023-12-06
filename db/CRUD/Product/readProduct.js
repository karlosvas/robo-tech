'use strict'
import { modelProduct, modelCategoryProduct } from '../../models/Product.js'

export async function allProducts() {
    const products = await modelProduct.find()
    return products;
}

export async function catProducts() {
    try {
        const categorySchema = await modelCategoryProduct.find()
        return categorySchema[0];
    } catch (error) {
        console.error(error);
        throw new Error("Error al busacr coleción");
    }
}


export async function readProduct(product) {
    // Devuelbe el producto con el nombre especificado.
    try {
        const result = await modelProduct.findOne({ name: product })
        if (result) return result;
        else return false;
    } catch (error) {
        console.error(error);
        throw new Error("Error al buscar producto");
    }
}