import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<App />);
})

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});
it('should render Todo App', () => {
  const headerText = wrapper.find("h1").at(0).text();
  expect(headerText).toBe("Todo app");
});

it('should change text input', () => {
  const form = wrapper.find('Form').at(0);
  form.props().onChange({ target: { value: 'Test'}});
  expect(wrapper.state().text).toBe('Test');
});

it('should save todo', () => {
  const form = wrapper.find('Form').at(0);
  wrapper.setState({ text: "Test"});
  form.props().onClick();
  expect(wrapper.state().list.length).toBe(1);
});

it('should select todo', () => {
  const list = [{ text: "Test", selected: false },{ text: "Test1", selected: false }];
  wrapper.setState({ list });
  wrapper.instance().selectTodo(1);
  const stateList = wrapper.state().list;
  expect(stateList[1].selected).toBeTruthy();
});

it('should not save todo', () => {
  const form = wrapper.find('Form').at(0);
  form.props().onClick();
  expect(wrapper.state().list.length).toBe(0);
});
