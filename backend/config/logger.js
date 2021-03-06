const {
  createLogger,
  format,
  transports
} = require('winston');

const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    //
    // - Write all logs with level `debug` to console
    // - Write all logs below level `info` to `combined.log`
    // - Write all logs with level `error` (and below) to `error.log`.
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    new transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new transports.File({
      filename: 'logs/combined.log',
      level: 'info'
    })
  ]
});

process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception: ', err);
});
//
// Logs are written like this:
// logger.info('Hello log');
// logger.error('This is an error');
module.exports = logger;
