import React from 'react';
import Success from './Success';
import {shallow} from 'enzyme';

describe('Success', () => {

    it('renders', () => {
        const wrapper = shallow(<Success />);
        // expect(wrapper.find('div')).toHaveLength(1);
        // expect(wrapper.find('div').text()).toEqual('Details Successfully Saved');
        expect(wrapper.find('div')).toMatchSnapshot();
    });

    it('snapshot test fails if content is not equal to previous run', () => {
        const wrapper = shallow(<Success />);
        expect(wrapper.text()).toMatchSnapshot();
    });

    describe('with mocked date', () => {
        let dateNowSpy;

        beforeEach(() => {
            dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => new Date('1984-10-06T02:20:00').getTime());
        });

        afterEach(() => {
            dateNowSpy.mockRestore();
        });

        it('snapshot test no longer fails if content is mocked, so equal to previous run', () => {
            const wrapper = shallow(<Success />);
            expect(wrapper.text()).toMatchSnapshot();
        });
    });
});