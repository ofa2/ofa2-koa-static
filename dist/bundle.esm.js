import koaStatic from 'koa-static';
import { resolve } from 'path';

function lift(...staticPaths) {
  staticPaths.forEach(path => {
    if (typeof path !== 'undefined') {
      this.app.use(koaStatic(path));
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

    let path = resolve(this.projectPath, item.root);
    this.app.use(koaStatic(path, item.opts));
  });
}

export default lift;
//# sourceMappingURL=bundle.esm.js.map
