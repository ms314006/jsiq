import { Schema, Document } from 'mongoose';

export interface Question {
  id: string;
  title: string;
  body?: string;
  code: string;
  options: { id: number; body: string; correct: boolean; answerCount: 0 }[];
  explanation: string;
  references: string[];
  type: 'JavaScript' | 'React' | 'Angular' | 'Vue';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  author: {
    name: string;
    url: string;
  };
}

export interface QuestionDocument extends Document {}

export const schemaQuestion = new Schema<QuestionDocument>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: String,
  code: String,
  options: [{ id: Number, body: String, isValid: Boolean, answerCount: 0 }],
  explanation: String,
  references: [String],
  type: String,
  level: String,
  tags: [String],
  author: {
    name: String,
    url: String,
  },
});
