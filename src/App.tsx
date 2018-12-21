import * as React from 'react';
import './App.css';
import HandleOnChangeInterface from './commonInterface';
import Form from './Form';
import List from './list';


interface props {};
interface state {
  todo: {
    text: string,
    selected?: boolean,
  },
  list: Array<any>
};

class App extends React.Component<props, state> {

  state: Readonly<state> = {
    todo: { text: '' },
    list: [],
  };

  onChange = (e: HandleOnChangeInterface) => {
    const { todo } = this.state;
    todo.text = e.target.value;
    this.setState({ todo });
  }

  saveTodo = () => {
    const { list, todo } = this.state;
    if(todo.text !== '') {
      list.push({ ...todo, selected: false });
      todo.text = '';
      this.setState({ todo: {...todo}, list: [...list] });
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
    var { todo, list } = this.state;
    return (
      <div className="App">
        <h1>Todo app</h1>
        <Form
          todo={todo}
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
