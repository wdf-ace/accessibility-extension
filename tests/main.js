import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Popup from '../src/main';

describe('Accessibility App', () => {
    describe('<Popup /> component', () => {
        xit('renders the accessibility checklist results', () => {
            const wrapper = mount( <Popup />);
            expect(wrapper.text()).to.include('Accessibility Results')
        })
    })
})
