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

  if (this.config.paths) {
    let arr = this.config.paths;

    if (!Array.isArray(this.config.paths)) {
      arr = [this.config.paths];
    }

    arr.forEach(item => {
      if (!item || !item.public) {
        return;
      }

      let path$$1 = path.resolve(this.projectPath, item.public);
      this.app.use(koaStatic(path$$1, item.opts));
    });
  }
}

module.exports = lift;
//# sourceMappingURL=bundle.cjs.js.map
