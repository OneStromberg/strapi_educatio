module.exports = {
    // Здесь вы можете определить свои задания cron
    tasks: [
      {
        // Запуск скрипта каждую неделю в понедельник в 00:00
        name: 'scrapeReviews',
        job: '0 0 * * 1',
        callback: 'cron.scrapeAndSaveReviews',
        task: 'extensions/cron/config/extensions/scrapeReviews.js',
        type: 'custom'
      }
    ]
  };
  