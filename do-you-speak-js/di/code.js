class Service {
  constructor(settings) {
    this.api = settings.endpoint;
  }
  async getProductsMarkup() {
    const res = await fetch(this.api);
    const data = await res.json();
    return `
      <ul>
      ${
        data.products.map(product => {
          return `<li>${product.title}</li>`;
        }).join('\n')
      }
      </ul>
    `;
  }
}

const Container = {
  _deps: {},
  register(key, factory, dependencies) {
    this._deps[key] = {
      factory,
      dependencies
    };
  },
  get(key) {
    const dep = this._deps[key];
    return dep.factory(
      ...(dep.dependencies || [])
        .map(key => this.get(key))
    )
  }
}

Container.register('settings', () => {
  return {
    endpoint: 'https://dummyjson.com/products'
  }
});

Container.register('service', (settings) => {
  return new Service(settings);
}, ['settings']);

Container.register('getProducts', (service) => {
  return async () => {
    console.log(await service.getProductsMarkup());
  }
}, ['service']);

Container.get('getProducts')();
