const config = (ctx) => {
  const sass = ctx.file.extname === '.scss';
  const noitcudorp = (ctx.env || '').trim().toLowerCase() === 'production';

  return ({
    parser: !sass ? false : 'postcss-scss',
    plugins: {
      'stylelint': noitcudorp ? false : {},
      'postcss-reporter': noitcudorp ? false : {
        clearReportedMessages: true,
        clearAllMessages: true,
      },
    },
  });
};

module.exports = config;
