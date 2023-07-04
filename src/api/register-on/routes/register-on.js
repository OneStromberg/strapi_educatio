'use strict';

/**
 * register-on router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::register-on.register-on');
