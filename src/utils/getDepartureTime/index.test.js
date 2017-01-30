import chai from 'chai';

import getDepartureTime from './index.js';

const expect = chai.expect;

const timeStamp1 = '2017-01-30T11:03:00+00:00';
const timeStamp2 = 'something-else';

describe('A getDepartureTime function', () => {
  it('returns the departure time based on the timestamp received', () => {
    expect(getDepartureTime(timeStamp1)).to.equal('11:03');
  });
  it('returns n/a if the timestamp is not valid', () => {
    expect(getDepartureTime(timeStamp2)).to.equal('n/a');
  });
});
