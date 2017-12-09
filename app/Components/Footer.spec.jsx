import * as React from 'react';
import Footer from './Footer';
import TestRenderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as manifest from '../../package.json';

configure({ adapter: new Adapter() });

describe('Footer', () => {
    it('matches previously saved snapshot', () => {
        const tree = TestRenderer.create(<Footer />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('remders manifest name', () => {
        const tree = shallow(<Footer />);
        expect(tree.find('footer').length).toBe(1);
        expect(tree.find('footer').text().indexOf(manifest.name)).not.toBe(-1);
    });
}); 