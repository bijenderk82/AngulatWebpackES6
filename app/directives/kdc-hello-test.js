/**
 * Created by Capital One
 */
export default ngModule => {
  describe(`unit test`, () => {
    beforeEach(window.module(ngModule.name));

    it(`should test properly`, () => {
      expect(false).to.be.true;
    })
  })
}

