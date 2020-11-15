/**
 * Script using for update DB of questions
 */

import 'dotenv/config'
import mongoose, { model } from 'mongoose';
import { QuestionDocument, schemaQuestion } from '../src/models/Question';
import * as questions from './JS-questions';

(async () => {
  console.log(process.env.DB_LINK)

  await mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  const QuestionModel = model<QuestionDocument>('Question', schemaQuestion);

  // QuestionModel.findOneAndUpdate(
  //   {foo: 'bar'}, // find a document with that filter
  //   modelDoc, // document to insert when nothing was found
  //   {upsert: true, new: true, runValidators: true}, // options
  //   function (err, doc) { // callback
  //     if (err) {
  //       // handle error
  //     } else {
  //       // handle document
  //     }
  //   }
  // );

  const questionsArray = Object.entries(questions).map((item) => item[1]);

  await QuestionModel.insertMany(questionsArray, (err) => {
    console.log(err);
  });
})();
