import TimeStamp from 'loopback-ds-timestamp-mixin';
import MyTimeStamp from '../../../server/mixins/timestamp';

describe('timestamp mixin', () => {
  it('export TimeStamp mixin module', () => {
    expect(MyTimeStamp).toBe(TimeStamp);
  });
});
