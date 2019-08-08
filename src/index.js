import koaStatic from 'koa-static';
import { resolve as pathResolve } from 'path';

export default function lift(...staticPaths) {
  staticPaths.forEach((path) => {
    if (typeof path !== 'undefined') {
      this.app.use(koaStatic(path));
    }
  });

  if (this.config.paths && this.config.paths.public) {
    let path = pathResolve(this.projectPath, this.config.paths.public);
    this.app.use(koaStatic(path, this.config.paths.opts));
  }
}
