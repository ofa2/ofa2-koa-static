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

  if (this.config.paths && this.config.paths.public) {
    let path$$1 = path.resolve(this.projectPath, this.config.paths.public);
    this.app.use(koaStatic(path$$1));
  }
}

module.exports = lift;
//# sourceMappingURL=bundle.cjs.js.map
