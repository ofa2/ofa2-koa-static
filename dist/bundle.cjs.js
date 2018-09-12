'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var koaStatic = _interopDefault(require('koa-static'));

function lift(...staticPaths) {
  staticPaths.forEach(path => {
    if (typeof path !== 'undefined') {
      this.app.use(koaStatic(path));
    }
  });

  if (this.config.paths && this.config.paths.public) {
    this.app.use(koaStatic(this.config.paths.public));
  }
}

module.exports = lift;
//# sourceMappingURL=bundle.cjs.js.map
