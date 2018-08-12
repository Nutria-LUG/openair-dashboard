import { expect } from 'chai';

import { Model } from '../../models';

export default describe('Model', () => {
  it('Model must could be instantiated', () => {
    const model = new Model();
    expect(model).be.not.eq(undefined);
  });
});
