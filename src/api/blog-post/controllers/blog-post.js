'use strict'
const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController(
	'api::blog-post.blog-post',
	({ strapi }) => ({
		async findOne(ctx) {
			const { slug } = ctx.params
			const { _locale } = ctx.query

			const filters = {
				where: { slug: slug, _locale },
				populate: ['headingImage'],
			}

			const entity = await strapi.db
				.query('api::blog-post.blog-post')
				.findOne(filters)

			if (entity) {
				return entity
			} else {
				ctx.status = 404
				return 'Not Found'
			}
		},
	})
)
