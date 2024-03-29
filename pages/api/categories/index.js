/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../utils/connectDB'
import Categories from '../../../model/categoriesModel'
import Products from '../../../model/productModel'
import auth from '../../../middlewave/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createCategory(req, res)
            break;
        case "GET":
            await getCategories(req, res)
            break;
    }
}

const createCategory = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role !== 'admin')
        return res.status(400).json({err: "Authentication is not valid."})

        const { name } = req.body
        if(!name) return res.status(400).json({err: "Name can not be left blank."})

        const newCategory = new Categories({name})

        await newCategory.save()
        res.json({
            msg: 'Success! Created a new category.',
            newCategory
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Categories.find()

        res.json({categories})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}