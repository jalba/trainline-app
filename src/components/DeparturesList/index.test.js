import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import DeparturesList from './index.js';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = { departuresData: { services: [] }};
const store = mockStore(initialState);
const expect = chai.expect;

describe('A DeparturesList component', ()=> {
  it('renders', () => {
    const wrapper = shallow(<DeparturesList store={store} />);
    const html = wrapper.html();
    const hasClassName = html.indexOf('list-container') > -1;
    const rendersList = html.indexOf('<ul class="list"></ul>') > -1;
    expect(wrapper.exists()).to.be.true;
    expect(hasClassName).to.be.true;
    expect(rendersList).to.be.true;
  });
});
