import chai from 'chai';

import getTimeDiff from './index.js';

const expect = chai.expect;

const timeStamp1 = '2017-01-30T11:03:00+00:00';
const timeStamp2 = '2017-01-30T11:05:00+00:00';

describe('A getTimeDiff function', () => {
  it('returns on time when both dates are equal', () => {
    expect(getTimeDiff(new Date(), new Date())).to.equal('On Time');
  });
  it('returns the later date passed in est. hh:mm format', () => {
    expect(getTimeDiff(new Date(timeStamp1), new Date(timeStamp2))).to.equal('Est. 11:05');
  });
});
