import {DateString} from 'loopback';
import lb, {DateString as DS} from './loopback';

describe('loopback', () => {
  it('exports DateString with parse', () => {
    expect(DS).toEqual(DateString);
    expect(DS.parse).toBeDefined();
  });

  it('parses a DateString object', () => {
    const date = {when: '2017-01-01'};
    const orignParsed = new DateString(date.when);
    expect(DS.parse(date)).toEqual(orignParsed);
    expect(DS.parse(date.when)).toEqual(orignParsed);
  });

  it('export extended axios', () => {
    expect(lb).toEqual(expect.any(Function));
    expect(lb.find).toEqual(expect.any(Function));
    expect(lb.removeToken).toEqual(expect.any(Function));
    expect(lb.setToken).toEqual(expect.any(Function));
    expect(lb.setLoadingFunction).toEqual(expect.any(Function));
  });
});
