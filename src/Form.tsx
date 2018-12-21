import * as React from "react";
import HandleOnChangeInterface from './commonInterface';

interface formProps {
  todo: {
    text: string,
    selected?: boolean,
  };
  onClick(): void;
  onChange(e: HandleOnChangeInterface): void;
}

const Form = (props: formProps) => {
  return (
    <div>
      <input value={props.todo.text} type="text" onChange={props.onChange} />
      <button onClick={props.onClick}>Add todo</button>
    </div>
  )
};

Form.defaultProps = {
  todo: {
    text: '',
  }
};

export default Form;
