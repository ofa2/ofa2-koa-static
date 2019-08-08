import koaStatic from 'koa-static';
import { resolve } from 'path';

function lift(...staticPaths) {
  staticPaths.forEach(path => {
    if (typeof path !== 'undefined') {
      this.app.use(koaStatic(path));
    }
  });

  if (this.config.paths && this.config.paths.public) {
    let path = resolve(this.projectPath, this.config.paths.public);
    this.app.use(koaStatic(path, this.config.paths.opts));
  }
}

export default lift;
//# sourceMappingURL=bundle.esm.js.map
