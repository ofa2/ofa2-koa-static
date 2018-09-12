import koaStatic from 'koa-static';

function lift(...staticPaths) {
  staticPaths.forEach(path => {
    if (typeof path !== 'undefined') {
      this.app.use(koaStatic(path));
    }
  });
}

export default lift;
//# sourceMappingURL=bundle.esm.js.map
