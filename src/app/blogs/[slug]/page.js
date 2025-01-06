import Markdown from 'markdown-to-jsx';
import { getAllBlogs, getBlogBySlug } from '@/src/lib/blog';

export async function generateStaticParams() {
    const blogs = await getAllBlogs();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPage({ params }) {
    const { slug } = params;
    const { metadata, content } = await getBlogBySlug(slug);

    return (
        <div className="markdown">
            <div className='image'>
                <img src={metadata?.image} alt='' />
            </div>
            {content && <Markdown>{content}</Markdown>}
        </div>
    );
}

