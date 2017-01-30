import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import Departure from './index.js';

const expect = chai.expect;
const time = '11:03';
const stationCode = 'THX';
const platform = '10';
const data = {
  scheduledInfo: {
    scheduledTime: '2017-01-30T'+ time +':00+00:00'
  },
  realTimeUpdatesInfo: {
    realTimeServiceInfo: {
      realTimePlatform: platform
    }
  },
  destinationList: [{ crs: stationCode }]
};

describe('A Departure component', () => {
  it('renders', () => {
    const wrapper = shallow(<Departure data={data} />);
    expect(wrapper.hasClass('departure')).to.be.true;
    expect(wrapper.exists()).to.be.true;
  });
  it('renders the correct time', () => {
    const wrapper = shallow(<Departure data={data} />);
    expect(wrapper.find('.time').text()).to.equal(time);
  });
  it('renders the correct station name or code', () => {
    const wrapper = shallow(<Departure data={data} />);
    expect(wrapper.find('.destination').text()).to.equal(stationCode);
  });
  it('renders the correct platform', () => {
    const wrapper = shallow(<Departure data={data} />);
    expect(wrapper.find('.platform').text()).to.equal('Plat. ' + platform);
  });
  it('renders if the train is on time or n/a if the information is not available', () => {
    const wrapper = shallow(<Departure data={data} />);
    expect(wrapper.find('.real-time').text()).to.equal('n/a');
  });
});
