import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';
import classes from './ProductGrid.module.css';

function ProductGrid() {
  return (
    <div className='d-flex justify-content-around'>
      <Card className={classes.Card}>
        <Card.Img variant='top' src={require('./img/flame.jpg')} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card className={classes.Card}>
        <Card.Img
          variant='top'
          src='https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png'
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation='glow'>
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation='glow'>
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant='primary' xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductGrid;
