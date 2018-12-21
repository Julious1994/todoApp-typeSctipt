import * as React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

let wrapper: any;
const onChangeMock = jest.fn();
const onClickMock = jest.fn();

beforeEach(() => {
  const props = {
    onChange: onChangeMock,
    onClick: onClickMock,
    todo: {
      text: '',
    },
  };
  wrapper = shallow(<Form {...props} />);
});

it('should render form view', () => {
  const input = wrapper.find('input');
  const button = wrapper.find('button');
  expect(input.length).toBe(1);
  expect(button.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});

test('button title', () => {
  const button = wrapper.find('button').at(0);
  expect(button.text()).toBe('Add todo');
});
