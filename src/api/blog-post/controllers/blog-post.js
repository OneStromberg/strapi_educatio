'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-post.blog-post', ({ strapi }) => ({

    async findOne(ctx) {
        const { slug } = ctx.params;
        const entity = await strapi.db.query('api::blog-post.blog-post').findOne({
            where: { slug: slug },
            populate: ['headingImage']
        });
        if (entity) {
            return entity;
        }
        else {
            ctx.status = 404;
            return 'Not Found';
        }
    }
}));
