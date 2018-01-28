const config = (ctx) => {
  const sass = ctx.file.extname === '.scss';
  const production = (ctx.env || '').trim().toLowerCase() === 'production';

  return ({
    parser: !sass ? false : 'postcss-scss',
    plugins: {
      'stylelint': production ? false : {},
      'postcss-reporter': production ? false : {
        clearReportedMessages: true,
        clearAllMessages: true,
      },
      'autoprefixer': !production ? false : {},
      'cssnano': !production ? false : {},
    },
  });
};

module.exports = config;
