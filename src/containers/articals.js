import React from 'react'
import { Media, Container, Row } from 'reactstrap';
import {FaPencilAlt }   from "react-icons/fa";
import "../containers/css/articals.css";
import * as ROUTES from '../constants/routes'
import { Link } from "react-router-dom";


const img = { width: "180px" }
const artical=[{
    id:1,
    img:"../images/article/1.jpg",
    title1:"Learning JavaScript",
    title2:"",
   sales:"Free"
   
},{
    id:2,
    img:"../images/article/2.jpg",
    title1:"What is Front-End   ",
    title2:"Developer?",
   sales:"Free"
},{
    id:3,
    img:"../images/article/3.jpg",
    title1:"WebBrowser APIs",
    title2:"",
   sales:"Free"
},{
    id:4,
    img:"../images/article/4.jpg",
    title1:"Web Hosting",
    title2:"",
   sales:"Free"
},{
    id:5,
    img:"../images/article/5.jpg",
    title1:"SEO",
    title2:"",
   sales:"Free"
},{
    id:6,
    img:"../images/article/6.jpg",
    title1:"Accessibility",
    title2:"    ",
   sales:"Free"
}

]



function Articals() {
    return (
        <section className="py-5" >  
        <div className="py-5" >
            <p className="text-center" style={{color:"#FF9B07"}} >INTRESTED IN ARTICALS?</p>
            <h3 className="text-center "  >Our Most Viewed Articals.</h3>

            <Container className="">
                <Row className=" justify-content-between">
              {artical.map(item=>
               <div className=" mt-5 col-10 px-2 mx-auto col-md-5" key={item.id}>
                   <Link to={ROUTES.BROWSE} style={{ textDecoration: 'none'}}>
               <Media  className="con2">
                    <Media left top href="#" className="">
                        <Media object style={img} src={item.img} className="img-fluid rounded-circle " alt="Generic placeholder image" />
                    </Media>
                    <Media body className="col-8 ">
                        <Media heading  className="hwhite2">{item.title1}{item.title2}
                </Media>
                {/* <h5 className="text-uppercase font-weight-bold">{item.sales}</h5> */}
                <FaPencilAlt  className="text-primary"/> <p className="d-inline hwhite3"></p>
        </Media>
                </Media>
                </Link> 
                </div>)}    
                </Row>
            </Container>
        </div>
        </section>
    )
}

export default Articals