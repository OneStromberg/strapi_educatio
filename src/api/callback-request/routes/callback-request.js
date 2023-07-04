'use strict';

/**
 * callback-request router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::callback-request.callback-request');
