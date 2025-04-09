// import { v2 as cloudinary } from 'cloudinary';
// (async function () {

//     // Configuration
//     cloudinary.config({
//         cloud_name: process.env.CLOUD_NAME,
//         api_key: process.env.API_KEY, // Click 'View API Keys' above to copy your API key
//         api_secret: process.env.CLOUD_API_SECRECT_KEY // Click 'View API Keys' above to copy your API secret
//     });


//     // env key values
//     console.log({
//         cloud_name: process.env.CLOUD_NAME,
//         api_key: process.env.API_KEY,
//         api_secret: process.env.CLOUD_API_SECRECT_KEY
//     });







//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });

//     console.log(autoCropUrl);
// })();