import mongoose, { createConnection, Model } from 'mongoose';
import { QuestionDocument, schemaQuestion } from 'models/Question';

let dbConnection: ReturnType<typeof createConnection> | null = null;
let Question: Model<QuestionDocument> | null = null;

export default async (req, res) => {
  if (dbConnection === null) {
    dbConnection = mongoose.createConnection(process.env.DB_LINK, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // and MongoDB driver buffering
    });

    await dbConnection;

    if (Question === null) {
      Question = dbConnection.model<QuestionDocument>('Question', schemaQuestion);
    }
  }

  const questions = await Question.find({});

  res.status(200).json(questions);
};
