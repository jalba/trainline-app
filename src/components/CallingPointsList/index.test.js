import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import CallingPointList from './index.js';

const expect = chai.expect;
const callingPoints = [];

describe('A CallingPointList component', () => {
  it('renders', () => {
    const wrapper = shallow(<CallingPointList callingPoints={callingPoints} />);
    const list = wrapper.find('ul');
    expect(list.length).to.equal(1);
    expect(wrapper.hasClass('calling-points-container')).to.be.true;
    expect(wrapper.exists()).to.be.true;
  });
});
