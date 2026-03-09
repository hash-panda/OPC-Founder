import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'OPC Founder Blog',
    description: '一人公司创始人的多元探索 - 创业心得、技术探索与生活感悟',
    site: context.site ?? 'https://opcfounder.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
