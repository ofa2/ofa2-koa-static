import koaStatic from 'koa-static';

export default function lift(...staticPaths) {
  staticPaths.forEach((path) => {
    if (typeof path !== 'undefined') {
      this.app.use(koaStatic(path));
    }
  });

  if (this.config.paths && this.config.paths.public) {
    this.app.use(koaStatic(this.config.paths.public));
  }
}
