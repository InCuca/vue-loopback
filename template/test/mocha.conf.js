import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

global.expect = chai.expect;
global.request = chai.request;
