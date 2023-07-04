'use strict';

/**
 * register-on service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-on.register-on');
