import chai from 'chai';
import chaiHttp from 'chai-http';
import path from 'path';

chai.use(chaiHttp);

global.expect = chai.expect;
global.request = chai.request;
