import { Schema, Document } from 'mongoose';

export interface Question {
  id: string;
  title: string;
  body?: string;
  code: string;
  options: { body: string; correct: boolean }[];
  explanation: string;
  references: string[];
  type: 'JavaScript' | 'React' | 'Angular' | 'Vue';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface QuestionDocument extends Document {}

export const schemaQuestion = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: String,
  code: String,
  options: [{ body: String, isValid: Boolean }],
  explanation: String,
  references: [String],
  type: String,
  level: String,
});

// export default model<QuestionDocument>('Question', schemaQuestion);
