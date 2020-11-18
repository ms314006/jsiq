/**
 * Script using for update DB of questions
 */

import 'dotenv/config';
import mongoose, { model } from 'mongoose';
import { QuestionDocument, schemaQuestion } from '../src/models/Question';
import * as questions from './JS-questions';

(async () => {
  await mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  const QuestionModel = model<QuestionDocument>('Question', schemaQuestion);

  const questionsArray = Object.entries(questions).map((item) => item[1]);

  for (const item of questionsArray) {
    await QuestionModel.findOneAndUpdate({ id: item.id }, item, {
      upsert: true,
      new: true,
      runValidators: true,
    });
  }

  console.log('Done!');
})();
