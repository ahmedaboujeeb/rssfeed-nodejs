import app from '../index';
import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('rss feed request', () => {
    it('should return error', () => {
        chai.request(app).get('/api')
            .then(res => {
                expect(res).to.have.status(400);
                expect(res.body.error).to.equals(true);
                expect(res.body.message).to.equals("you have to input url");
            })
    })
})