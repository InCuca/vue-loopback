import chai from 'chai';
import chaiHttp from 'chai-http';
import loopbackChai from 'loopback-chai';

chai.use(chaiHttp);

global.expect = chai.expect;
global.request = chai.request;
