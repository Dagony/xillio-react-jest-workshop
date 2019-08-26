import React from 'react';
import {shallow} from 'enzyme';
import prettyFormat from 'pretty-format';

import MainForm from './MainForm';

const mockFunctions = {
    preventDefault: () => {
    }
};

describe('MainForm', () => {
    it('renders', () => {
        const wrapper = shallow(<MainForm/>);
        expect(wrapper).toHaveLength(1);
    });

    it('clicking the \'Save And Continue\' button, shows the second stage of the form', () => {
        const wrapper = shallow(<MainForm/>);

        // Check that the MainForm Component has one instance of component named UserDetails
        expect(wrapper.find('UserDetails')).toHaveLength(1);

        // Dive into the wrapper, to get the non-DOM child of the current wrapper
        // https://airbnb.io/enzyme/docs/api/ShallowWrapper/dive.html
        const form = wrapper.dive();

        // click the button.
        // Mocking preventDefault()
        form.find('Form > Button').simulate('click', {
            preventDefault: () => {
            }
        });

        expect(wrapper.find('UserDetails')).toHaveLength(0);
        expect(wrapper.find('PersonalDetails')).toHaveLength(1);
    });

    it('clicking the \'Save and Continue\' button on the Personal Detail page will show the Confirmation', () => {
        const wrapper = shallow(<MainForm/>);


        // Click 'Save and Continue' button on Enter User Details part
        wrapper.dive().find('Form > Button').simulate('click', mockFunctions);

        // Click 'Save and Continue' button on Enter Personal Details part
        wrapper.dive().find('Form > Button').at(1).simulate('click', mockFunctions);
        expect(wrapper.find('Confirmation')).toHaveLength(1);

        // Click 'Confirm' button on Enter Confirmation part

        wrapper.dive().find('Button').at(1).simulate('click', mockFunctions);
        expect(wrapper.find('Success')).toHaveLength(1);

        // console.log(wrapper.dive().debug());
    });

    it('renders, even when state is messed up', () => {
        const wrapper = shallow(<MainForm/>);

        wrapper.instance().setState({
            step: 11,
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            city: '',
            country: ''
        });
        expect(wrapper.find('UserDetails')).toHaveLength(1);
    });

    // Hit the back button on Enter Personal Details to go back to Enter User Details
    it('When Hit back button on Enter Personal Details, brings user back to Enter User Details', () => {
        const wrapper = shallow(<MainForm/>);
        wrapper.setState({
            step: 2
        });
        wrapper.dive().find('Form > Button').at(0).simulate('click', mockFunctions);
        expect(wrapper.find('UserDetails')).toHaveLength(1);

    });

    it('Adding a value to the form, inserts that value to the state', () => {
        const wrapper = shallow(<MainForm/>);
        const changeEvent = {
            target: {
                value: 'somethingDifferent'
            }
        };
        wrapper.dive().find('input').at(0).simulate('change', changeEvent);
        console.log(
            prettyFormat(wrapper.dive().find('input').at(0).props().defaultValue)
        );
        expect(wrapper.dive().find('input').at(0).props().defaultValue).toEqual('somethingDifferent');
    });
});
