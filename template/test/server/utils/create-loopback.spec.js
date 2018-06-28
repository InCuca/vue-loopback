import createLoopback from './create-loopback';
import loopback from 'loopback';
import boot from 'loopback-boot';

jest.mock('loopback');
jest.mock('loopback-boot');

describe('createLoopback dev util', () => {
  it('exports a promise', () => {
    expect(createLoopback()).toBeInstanceOf(Promise);
  });

  it('calls loopback-boot with default options', () => {
    const mockServer = {};
    const optsMatcher = {
      appRootDir: expect.any(String),
      scriptExtensions: expect.any(Array),
    };
    loopback.mockReturnValue(mockServer);
    createLoopback()
    expect(boot).toBeCalledWith(
      mockServer,
      expect.objectContaining(optsMatcher),
      expect.any(Function),
    );
  });

  it('calls loopback-boot with custom options', () => {
    const mockServer = {};
    const myOpts = {myOpt: true};
    loopback.mockReturnValue(mockServer);
    createLoopback(myOpts)
    expect(boot).toBeCalledWith(
      mockServer,
      expect.objectContaining(myOpts),
      expect.any(Function),
    );
  });

  it('resolves with loopback server', async () => {
    const mockServer = {};
    loopback.mockReturnValue(mockServer);
    // just call callback fn
    boot.mockImplementation((s, o, r) => r());
    const server = await createLoopback();
    expect(server).toEqual(mockServer);
  });
})
