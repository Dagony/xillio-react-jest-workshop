import React from 'react';
import Success from './Success';
import {shallow} from 'enzyme';

describe('Success', () => {
    it('renders', () => {
        const wrapper = shallow(<Success />);
        // expect(wrapper.find('div')).toHaveLength(1);
        // expect(wrapper.find('div').text()).toEqual('Details Successfully Saved');
        expect(wrapper.text()).toMatchSnapshot();
    });
});