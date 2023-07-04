'use strict';

/**
 * callback-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::callback-request.callback-request');
