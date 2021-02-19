require('dotenv').config();
const cloudinary = require('cloudinary');
cloudinary.config({
cloud_name: process.env.CLOUDINARY_NANE,
api_secret: process.env.CLOUDINARY_API_SECRET,
api_key: process.env.CLOUDINARY_API_KEY
})

module.exports={cloudinary}