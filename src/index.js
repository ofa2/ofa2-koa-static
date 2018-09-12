import koaStatic from 'koa-static';

export default function lift(...staticPaths) {
  staticPaths.forEach((path) => {
    if (typeof path !== 'undefined') {
      this.app.use(koaStatic(path));
    }
  });
}
