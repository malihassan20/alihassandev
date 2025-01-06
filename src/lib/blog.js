'use server'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'src/blogs');

export async function getAllBlogs() {
    const fileNames = fs.readdirSync(blogsDirectory);

    return fileNames.map((fileName) => {
        const filePath = path.join(blogsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: fileName.replace(/\.mdx$/, ''),
            data: data,
        };
    });
}

export async function getBlogBySlug(slug) {
    const filePath = path.join(blogsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        metadata: data,
        content,
    };
}

