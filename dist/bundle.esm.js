import koaStatic from 'koa-static';
import { resolve } from 'path';

function lift(...staticPaths) {
  staticPaths.forEach(path => {
    if (typeof path !== 'undefined') {
      this.app.use(koaStatic(path));
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

      let path = resolve(this.projectPath, item.public);
      this.app.use(koaStatic(path, item.opts));
    });
  }
}

export default lift;
//# sourceMappingURL=bundle.esm.js.map
