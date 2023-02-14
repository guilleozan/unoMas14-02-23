// import React, { useState } from 'react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import Figure from 'react-bootstrap/Figure';


import styles from './../styles/home.css';
// import { Form } from 'react-bootstrap';

const homeImages = [

  {
    key: '1',
    title: 'Mendoza',
    img: 'Arg/montañasmdza.jpg'
  },
  {
    key: '2',
    title: 'Tierra del Fuego',
    img: "Arg/farotierradlfuego.jpg"
  },
  {
    key: '3',
    title: 'Puerto Madrin',
    img: "Arg/ballenas.jpg"
  }, {
    key: '4',
    title: 'Buenos Aires',
    img: 'Arg/obelisco.jpg'
  }, {
    key: '5',
    title: 'Jujuy',
    img: "Arg/7colores.jpg"
  }, {
    key: '6',
    title: 'Chalten',
    img: 'Arg/chalten.jpg'
  },

];


const HomePage = (props) => {

  // const [toggle, setToggle] = useState("1");

  
  return (
    
    <main className='principal'>

      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 imagen1"
            src="Arg/vinedos.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Button variant="outline-light" className='activo' exact to="/galeria">More Information</Button>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 imagen1"
            src="Arg/cerro7colores.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Button variant="outline-light" href='/novedades'>More Information</Button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen1"
            src="Arg/chalten.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Button variant="outline-light" href='/novedades'>More Information</Button>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="texto-inicio">
        <div className="texto-nosotros">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla, nemo at porro ducimus optio delectus eos perferendis magnam ullam voluptate quos sed commodi molestias sapiente aperiam a qui similique!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ipsam reiciendis corrupti voluptatibus quas sapiente cupiditate consequuntur ullam illo culpa in sint molestias natus quisquam, deserunt ad earum impedit. Odio.
          </p>
        </div>
      
      </div>
   

<div className=" cont-home">
      {homeImages.map(({ key,title, img }) => {
        return (
          <main className='color'>
            <div className="imagesHomePage">
            <p>{title}</p>
               <img src={img} key={key} className="fotoArg" />
            
               <button className='btn btn-warning' >More Information</button>
            </div>
          
           
              
         
          </main>
        );
      })}
    </div>
   


    </main>
  

    );
    
}

export default HomePage;

