import * as React from "react";
import { HandleOnChangeInterface } from './commonInterface';

interface formProps {
  text?: string;
  onClick(): void;
  onChange(e: HandleOnChangeInterface): void;
}

const Form = (props: formProps) => (
  <div>
    <input value={props.text} type="text" onChange={props.onChange} />
    <button onClick={props.onClick}>Add todo</button>
  </div>
);

Form.defaultProps = {
  text: ""
};

export default Form;