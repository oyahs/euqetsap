const path = require('path');

const merge = require('lodash/object').merge;

const sassTrue = require('sass-true');

const dir = require('../shajara');

const task = require('../task/task');

sassTrue.runSass(merge(task.style.sass.options, {
  file: path.resolve(__dirname, `.${dir.test.sass}/test.scss`)
}), describe, it);
