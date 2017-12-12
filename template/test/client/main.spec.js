import main from '@/main';

describe('main file', () => {
  it('should render login view', () => {
    return main.$nextTick().then(() => {
      expect(main.$el.querySelector('.login-view')).to.not.equal(undefined);
    })
  })
})
