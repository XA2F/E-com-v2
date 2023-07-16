import Spinner from 'react-bootstrap/Spinner';
//we are importing our spinner component from react-bootstrap

export default function LoadingBox() {
  //our loading component returns jsx code to render the loading spinner.
  return (
    //spinner component rendered with the animation prop.
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
