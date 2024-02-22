import express from 'express';
import { connectDB } from './config/db.js';
import { keywordCreate } from './controller/keywordController.js';
import { industryCreate } from './controller/industryController.js';
import { leadCreate } from './controller/leadController.js';
import { leadTable,keywordTable,industryTable } from './dataTabe/modelTable.js';
// import { fileUpload1 } from './service/fileuploadService.js';
import fileUpload from 'express-fileupload';
// import { uploadFileInDb } from './middleware/multer.js';
import uploadFile from './middleware/multer.js';
import { upload } from './service/fileuploadService.js';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import { fileURLToPath } from 'url';
import path ,{dirname} from "path";
const app=express();
app.use(express.static(path.join(__dirname,"assets/uploadedfile")))
const port=3000;


app.use(express.json());
app.use(fileUpload());
// Initialize Sequelize with database credentials

// leadTable();
// keywordTable();
// industryTable();

app.post('/keyword',keywordCreate)
app.post('/industry',industryCreate)
app.post('/lead',leadCreate);
// app.post('/upload',uploadFile);
app.post('/csv/upload', uploadFile.single('file'),upload );


app.listen(port,()=>{
    connectDB();
    console.log("Server is running on port 3000");

})
