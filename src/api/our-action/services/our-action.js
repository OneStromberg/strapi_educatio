'use strict';

/**
 * our-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-action.our-action');
