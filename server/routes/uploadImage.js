const  express = require('express'),
  aws = require('aws-sdk'),
  bodyParser = require('body-parser'),
  multer = require('multer'),
  multerS3 = require('multer-s3')

// aws.config.update({
//     secretAccessKey: process.env.Secret_access_key,
//     accessKeyId: process.env.Access_key_ID,
//     region: 'us-east-2'
// });

const  app = express();
const s3 = new aws.S3( {secretAccessKey: process.env.Secret_access_key,
    accessKeyId: process.env.Access_key_ID,
    region: process.env.Bucket_Region});
    

      
app.use(bodyParser.json());

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.Bucket_Name,
        key: function (req, file, cb) {
            console.log("request is ", req)
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});

//open in browser to see upload form
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');//index.html is inside node-cheat
});

//use by upload form
app.post('/upload', upload.array('upl',1), function (req, res, next) {
    res.send("Uploaded!");
});

app.listen(3009, function () {
    console.log('Example app listening on port 3009!');
});