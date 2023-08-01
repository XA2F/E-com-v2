import Alert from 'react-bootstrap/Alert'; // Importing the Alert component from the react-bootstrap library

export default function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
