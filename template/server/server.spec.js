/* eslint-disable global-require */
describe('server', () => {
  let loopback, boot;
  const mockApp = {};
  const getApp = () => require('./server').default;

  beforeEach(() => {
    jest.resetModules();
    jest.mock('loopback');
    jest.mock('loopback-boot');
    loopback = require('loopback');
    boot = require('loopback-boot');
    loopback.mockReturnValue(mockApp);
  });

  it('instances loopback', () => {
    getApp();
    expect(loopback).toBeCalled();
  });

  it('adds start function', () => {
    expect(getApp().start).toBeInstanceOf(Function);
  });

  it('adds close function', () => {
    expect(getApp().close).toBeInstanceOf(Function);
  });

  it('boot application', () => {
    getApp();
    expect(boot).toBeCalledWith(
      mockApp,
      expect.objectContaining({
        appRootDir: __dirname,
        scriptExtensions: expect.arrayContaining([
          '.js', '.json', '.node', '.ejs',
        ]),
      }),
      expect.any(Function),
    );
  });

  it('throws when application boot fails', () => {
    boot.mockImplementation((a, o, done) => done('foo'));
    expect(getApp).toThrowError('foo');
  });

  it('not throws when application boot success', () => {
    boot.mockImplementation((a, o, done) => done());
    expect(getApp).not.toThrow();
  });

  it('calls express listen when start is called', () => {
    const listen = jest.fn();
    loopback.mockReturnValue({ listen });
    getApp().start();
    expect(listen).toBeCalledWith(expect.any(Function));
  });

  it('emit started when start is called', () => {
    const get = jest.fn(() => 'foo');
    const listen = jest.fn(cb => cb());
    const emit = jest.fn();
    loopback.mockReturnValue({ listen, get, emit });
    getApp().start();
    expect(emit).toBeCalledWith('started');
  });

  it('log api endpoint when start is called', () => {
    const get = jest.fn(() => 'foo');
    const listen = jest.fn(cb => cb());
    const emit = jest.fn();
    console.log = jest.fn();
    loopback.mockReturnValue({ listen, get, emit });
    getApp().start();
    expect(console.log).toBeCalledWith(
      expect.any(String),
      'foo/api',
    );
  });

  it('log explorer url when start is called', () => {
    const get = jest.fn(term => (term === 'url' ? 'url' : { mountPath: 'foo' }));
    const listen = jest.fn(cb => cb());
    const emit = jest.fn();
    console.log = jest.fn();
    loopback.mockReturnValue({ listen, get, emit });
    getApp().start();
    expect(console.log).toBeCalledWith(
      expect.any(String),
      'url',
      'foo',
    );
  });

  it('close server when close is called', () => {
    const close = jest.fn();
    const listen = jest.fn(() => ({ close }));
    loopback.mockReturnValue({ listen });
    getApp().start();
    getApp().close();
    expect(close).toBeCalled();
  });
});
