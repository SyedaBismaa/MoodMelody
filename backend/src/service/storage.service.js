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
            fileName:"hello-cohort"
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