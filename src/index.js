'use strict';
const puppeteer = require('puppeteer');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // Вызов функции scrapeAndSaveReviews
    strapi.log.info('Calling scrapeAndSaveReviews');

    // Вставьте содержимое функции scrapeAndSaveReviews здесь
    async function scrapeAndSaveReviews() {
      try {
        const browser = await puppeteer.launch({ headless: "new" });
        // Остальной код функции...
      } catch (error) {
        console.error('An error occurred while scraping and saving reviews:', error);
      }
    }

    // Вызов функции
    scrapeAndSaveReviews();
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) { },
};
