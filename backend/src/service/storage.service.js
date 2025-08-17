var ImageKit = require("imagekit")


var imageKit = new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});



function uploadFile(file){
    return new Promise((resolve,reject)=>{
        imageKit.upload({
            file:file.buffer,
            fileName:Math.random().toString(36).substring(7) ,
            folder:"Moody-audio",
            mood:file.mood
        },(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}



module.exports=uploadFile;