import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'questions/theory-questions');

export function getQuestionSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getQuestionBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content } as QuestionProp;
}

export function getAllQuestions(): QuestionProp[] {
  const data = getQuestionSlugs();
  return data.map((slug) => getQuestionBySlug(slug));
}

export interface QuestionProp {
  data: FrontMatter;
  content: string;
}

export interface FrontMatter {
  id: number;
  title: string;
}
