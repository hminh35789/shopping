/* eslint-disable import/no-anonymous-default-export */
import connectDB from '../../../utils/connectDB'
import Products from '../../../model/productModel'
import auth from '../../../middlewave/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getProduct(req, res)
            break;
        case "PUT":
            await updateProduct(req, res)
            break;
        case "DELETE":
            await deleteProduct(req, res)
            break;
    }
}

// class APIfeatures {
//     constructor(query, queryString){
//         this.query = query;
//         this.queryString = queryString;
//     }
//     filtering(){
//         const queryObj = {...this.queryString}

//         const excludeFields = ['page', 'sort', 'limit']
//         excludeFields.forEach(el => delete(queryObj[el]))

//         if(queryObj.category !== 'all')
//             this.query.find({category: queryObj.category})
//         if(queryObj.title !== 'all')
//             this.query.find({title: {$regex: queryObj.title}})

//         this.query.find()
//         return this;
//     }

//     sorting(){
//         if(this.queryString.sort){
//             const sortBy = this.queryString.sort.split(',').join('')
//             this.query = this.query.sort(sortBy)
//         }else{
//             this.query = this.query.sort('-createdAt')
//         }

//         return this;
//     }

//     paginating(){
//         const page = this.queryString.page * 1 || 1
//         const limit = this.queryString.limit * 1 || 6
//         const skip = (page - 1) * limit;
//         this.query = this.query.skip(skip).limit(limit)
//         return this;
//     }
// }

const getProduct = async (req, res) => {
    try {
        const { id } = req.query;

        const product = await Products.findById(id)
        
        if(!product) return res.status(400).json({err: 'This product does not exist.'})
        
        res.json({ product })
        
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateProduct = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query
        const { title, price, inStock, description, content, category, images } = req.body

        if( !title || !price || !inStock || !description || !content || category === 'all' || images.length === 0)
        return res.status(400).json({err: 'Please add all the fields.'})

        await Products.findOneAndUpdate({_id: id}, {
            title, price, inStock, description, content, category, images
        }) 

        res.json({msg: 'Success! Updated a product'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

// const deleteProduct = async(req, res) => {
//     try {
//         const result = await auth(req, res)
        
//         if(result.role !== 'admin') 
//         return res.status(400).json({err: 'Authentication is not valid.'})

//         const {id} = req.query

//         await Products.findByIdAndDelete(id)
//         res.json({msg: 'Deleted a product.'})

//     } catch (err) {
//         return res.status(500).json({err: err.message})
//     }
// }