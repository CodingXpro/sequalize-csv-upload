import Lead from '../models/leadModel.js';
import { createReadStream } from 'fs';
import { parse } from 'fast-csv';

export const upload = async (req, res) => {
  try {
    console.log(req.file);
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload a CSV file!");
    // }

    let employees = [];
    let path = "../assets/uploadedFile/" + req.file.filename;

    createReadStream(path)
      .pipe(parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        employees.push(row);
      })
      .on("end", () => {
        Lead.bulkCreate(employees)
          .then(() => {
            res.status(200).send({
              message: "The file: "
               + req.file.originalname
               + " got uploaded successfully!!",
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Couldn't import data into database!",
              error: error.message,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Failed to upload the file: " + req.file.originalname,
    });
  }
};
