import React from 'react';
import Button from 'react-bootstrap/Button';

function myButton(props) {
  return (
    <Button variant={props.variant} onClick={props.onClick}>{props.children}</Button>
  );
}

export default myButton;
