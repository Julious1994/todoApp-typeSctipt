import * as React from 'react';
import './App.css';
import { HandleOnChangeInterface } from './commonInterface';
import Form from './Form';
import List from './list';


interface props {};
interface state {
  text: string,
  list: Array<any>
};

class App extends React.Component<props, state> {

  state: Readonly<state> = {
    text: '',
    list: [],
  };

  onChange = (e: HandleOnChangeInterface) => {
    this.setState({ text: e.target.value});
  }

  saveTodo = () => {
    const { list, text } = this.state;
    if(text !== '') {
      list.push({ text, selected: false });
      this.setState({ text: '', list: [...list] });
    }
  }

  selectTodo = (index: number) => {
    const { list } = this.state;
    const todo = list[index];
    todo.selected = !todo.selected;
    list[index] = {...todo};
    this.setState({ list });
  }

  render() {
    var { text, list } = this.state;
    return (
      <div className="App">
        <h1>Todo app</h1>
        <Form 
          text={text}
          onChange={this.onChange}
          onClick={this.saveTodo}
        />
        <List 
          list={list}
          onClick={this.selectTodo}
        />
      </div>
    );
  }
}

export default App;
