const path = require('path');

const merge = require('lodash/object').merge;

const sassTrue = require('sass-true');

const dir = require('../mawqie');

const task = require('../task/task');

sassTrue.runSass(merge(task.style.sass.options, {
  file: path.resolve(`${dir.src.sass._}/test.scss`.replace(dir.src._, './test'))
}), describe, it);
