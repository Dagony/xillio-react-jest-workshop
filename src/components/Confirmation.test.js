import React from 'react';
import {shallow} from 'enzyme';
import Confirmation from './Confirmation';
import MainForm from './MainForm';

describe('Confirmation', () => {
    it('when hitting back button, the form is going one step back', () => {
        const wrapper = shallow(<MainForm/>);
        wrapper.instance().setState({
            step: 3,
            firstName: 'Mark',
            lastName: 'de Wit',
            email: 'mark.dewit@xillio.com',
            age: 34,
            city: 'Bergambacht',
            country: 'the Netherlands'
        });

        // console.log(wrapper.dive().debug());
        // console.log(wrapper.dive().html());

        // wrapper.findWhere(n => n.name() === 'Button' && n.prop('label') === 'UL')

        expect(
            wrapper.dive().find('Button')
        ).toHaveLength(2);
        wrapper.dive().find('Button').at(0).simulate('click', {
            preventDefault: () => {
            }
        });

        wrapper.update();
        expect(wrapper.find(Confirmation)).toHaveLength(0);
    });
});