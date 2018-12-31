import * as definitions from '../src/index';

describe('Dummy test', () => {
  it('should have definitions', () => {
    expect(Object.keys(definitions).length).toBeGreaterThan(100);
  });
});
