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
  return { data, content };
}

export function getAllQuestions() {
  const slugs = getQuestionSlugs();
  return slugs.map((slug) => getQuestionBySlug(slug));
}
