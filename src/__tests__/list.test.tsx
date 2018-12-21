import * as React from 'react';
import { shallow } from 'enzyme';
import List from '../list';

let wrapper: any;
const itemClickMock = jest.fn();
const list = [{ text: 'Test', selected: false }, { text: 'Test', selected: true }];

beforeEach(() => {
  const props = {
    list: [],
    onClick: itemClickMock,
  };
  wrapper = shallow(<List {...props} />);
});

it('should render list', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render list items', () => {
  wrapper.setProps({ list });
  const listItem = wrapper.find('.list-item');
  expect(listItem.length).toBe(2);
  expect(listItem.at(0).props().style.textDecoration).toBe('none');
  expect(listItem.at(1).props().style.textDecoration).toBe('line-through');
});

it('should select list item', () => {
  wrapper.setProps({ list });
  const listItem = wrapper.find('.list-item');
  listItem.at(0).props().onClick();
  expect(itemClickMock).toBeCalledTimes(1);
  expect(itemClickMock).toBeCalledWith(0);
});
