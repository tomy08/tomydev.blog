import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
	const posts = await getCollection('posts')

	return rss({
		title: 'TomyDev Blog',
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.slug}`,
		})),
	})
}
