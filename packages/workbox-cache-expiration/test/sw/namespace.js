importScripts(
  '/node_modules/mocha/mocha.js',
  '/node_modules/chai/chai.js',
  '/node_modules/sw-testing-helpers/build/browser/mocha-utils.js',
  '/__test/bundle/workbox-cache-expiration'
);

const expect = self.chai.expect;
mocha.setup({
  ui: 'bdd',
  reporter: null,
});

const exportedSymbols = [
  'timestampPropertyName',
  'urlPropertyName',
  'CacheExpiration',
  'CacheExpirationPlugin',
];

describe('Test Library Surface', function() {
  it('should be accessible via workbox.cacheExpiration', function() {
    expect(workbox.cacheExpiration).to.exist;
  });

  exportedSymbols.forEach((exportedSymbol) => {
    it(`should expose ${exportedSymbol} via workbox.cacheExpiration`, function() {
      expect(workbox.cacheExpiration[exportedSymbol]).to.exist;
    });
  });
});
