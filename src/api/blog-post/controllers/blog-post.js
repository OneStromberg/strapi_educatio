'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-post.blog-post', ({ strapi }) => ({

    // Method 3: Replacing a core action
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::blog-post.blog-post').findOne({
            where: { slug: id },
            populate: ['headingImage']
        });
        // const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return entity;
    }
}));
