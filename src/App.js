import Name from "./composants/Name";
import Price from "./composants/Price";
import Description from "./composants/Description";
import Image from "./composants/Image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Logo from './logo.svg'

function App() {
  let MyFirstName = 'Yazid';
  return (
    <>
      <div className="container p-5 text-center ">
        <Card className="col-10">
          <Image />
          <Card.Body>
            <Card.Title> <Name /> </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Button variant="primary"><Price /> - MAD</Button>
          </Card.Body>
        </Card>

        {MyFirstName ? `Hello ${MyFirstName}` : 'Hello there'}

        {MyFirstName ?
          <img src={Logo} />
          : 'No Image to display'}

      </div>

    </>
  );
}

export default App;
