import React, { useState } from 'react'
import * as ROUTES from '../constants/routes'
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../global.css"
import {

  Card, CardImg, CardText, CardBody,

  CardTitle, CardSubtitle

} from 'reactstrap';


const free = { color: "#FD4255" }

const bg = {
  background: "linear-gradient(#4483fec7,#007bff45),url(https://pic.i7lm.com/wp-content/uploads/2019/05/pexels-photo-621720.jpeg) fixed no-repeat ",
  backgroundSize: "cover"
}

const Recommended = () => {
  const [state, setstate] = useState([{

    id: "1",
    src: "../images/learn/1.jpg",
    title: "Software Engineering",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci recusandae doloremque exercitationem ',
    sales: "free"
  },
  {
    id: "2",
    src: "../images/learn/2.jpg",
    title: "C++",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci recusandae doloremque exercitationem ',
    sales: "free"
  },
  {
    id: "3"
    , src: "../images/learn/3.jpg",
    title: "Java OOP",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci recusandae doloremque exercitationem ',
    sales: "free"
  },
  {
    id: "4",
    src: "../images/learn/4.jpg",
    title: "operating system ",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci recusandae doloremque exercitationem ',
    sales: "free"
  }])
  return (
    <section className="py-5" style={bg}>
      <div className="container  py-5" >
        <header>
          <h2 className="text-center mb-5 text-light"> Recommended Courses</h2>
        </header>

        <div className="owl-slider">
          <OwlCarousel className='owl-theme owl-slider' autoplay loop margin={10} >
            {state.map(item =>
              <div className='item' key={item.id}>
                 <Link  to={ROUTES.BROWSE} style={{ textDecoration: 'none'}}>
                <Card >
                  <CardImg top width="100%" src={item.src} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <CardText>{item.text}</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-uppercase font-weight-bold" style={free}>{item.sales}</CardSubtitle>
                  </CardBody>
                </Card>
                </Link>
              </div>

            )}
          </OwlCarousel>
        </div>
        <div className="owl-media">
          {state.map(course =>
            <div className="col-11 mx-auto py-4" key={course.id}>
              <Link  to={ROUTES.BROWSE} style={{ textDecoration: 'none'}}>
              <Card>
                <CardImg top width="100%" src={course.src} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{course.title}</CardTitle>
                  <CardText>{course.text}</CardText>
                  <CardSubtitle tag="h6" className="mb-2 text-uppercase font-weight-bold" style={free}>{course.sales}</CardSubtitle>
                </CardBody>
              </Card>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>

  )

}


export default Recommended
