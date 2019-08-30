'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var koaStatic = _interopDefault(require('koa-static'));
var path = require('path');

function lift(...staticPaths) {
  staticPaths.forEach(path$$1 => {
    if (typeof path$$1 !== 'undefined') {
      this.app.use(koaStatic(path$$1));
    }
  });

  if (!this.config.paths) {
    return;
  }

  let arr = [];

  if (this.config.paths.public) {
    arr.push({
      root: this.config.paths.public,
      opts: this.config.paths.opts
    });
  }

  if (this.config.paths.static) {
    if (!Array.isArray(this.config.paths.static)) {
      arr.push(this.config.paths.static);
    } else {
      arr.push(...this.config.paths.static);
    }
  }

  arr.forEach(item => {
    if (!item || !item.root) {
      return;
    }

    let path$$1 = path.resolve(this.projectPath, item.root);
    this.app.use(koaStatic(path$$1, item.opts));
  });
}

module.exports = lift;
//# sourceMappingURL=bundle.cjs.js.map
