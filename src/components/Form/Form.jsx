import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addTodo
} from '../../actions/todoActionCreator';

const Form = (props) => {
  const [text, setText] = useState('');

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onClickButton = () => {
    if (text) {
      props.addTodo(text);
      setText('');
    }
  };

  return (
    <div className="container">
      <input type="text" value={text} onChange={onChangeHandler}/>
      <button onClick={onClickButton}>追加する</button>
    </div>
  );
};

const mapDispatchToProps = { addTodo };

export default connect(
  null,
  mapDispatchToProps
)(Form);