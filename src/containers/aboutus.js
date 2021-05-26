import React from "react";
import "../containers/css/aboutus.css"
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink, Container, Jumbotron, Button,
} from "reactstrap";

const Aboutus = () => {
    return (
        <section className="py-5 bbb">
           <div className="container py-5">
           
            
            <h2 className="mb-2 text-center" >
                Best Instractors
            </h2>
            <p className="mb-2 text-center mb-4" style={{color:"#FF9B07"}}>
              SOME DETAILS ABOUT OUR PRODUCT AND TEAM.
            </p>
           
            <div className="row">
            <div className="col-10 mx-auto col-md-4 my-4"> 
                <Card className="con">
                    <CardBody>
                        <CardTitle tag="h5" className="hwhite">John Doe</CardTitle>
                        <CardSubtitle tag="p" className="mb-6 text-muted" className="hwhite">
                            Advertising has great significance as it is the only way of
                            telling
                        </CardSubtitle>
                    </CardBody>
                    <img  width="100%" src="../images/about/1.jpg" alt="Card image cap"  />
                    <CardBody>
                        <CardText className="hwhite">
                            Making a big investment is not always necessary. If you do not
                            have such a great amount to invest.
            </CardText>
                      
                    </CardBody>
                </Card>
                </div>
                <div className="col-10 mx-auto col-md-4 my-4"> 

                <Card className=" con">
                    <CardBody>
                        <CardTitle tag="h5" className="hwhite">John Doe</CardTitle>
                        <CardSubtitle tag="p" className="mb-6 text-muted"className="hwhite">
                            Scaling means higher volumes of work and more data to process
                    </CardSubtitle>
                    </CardBody>
                    <img width="100%" src="../images/about/2.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardText className="hwhite">
                            Is your team ready to take on this workload? Can they work under
                            the stress and pressures that come.
            </CardText>
                      
                    </CardBody>
                </Card>
              </div>
              <div className="col-10 mx-auto col-md-4 my-4"> 
                <Card className="  con">
                    <CardBody>
                        <CardTitle tag="h5" className="hwhite">John Doe</CardTitle>
                        <CardSubtitle tag="p" className="mb-6 text-muted" className="hwhite">
                            There are few tips for the people who have a plan of low cost
            </CardSubtitle>
                    </CardBody>
                    <img  width="100%" src="../images/about/3.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardText className="hwhite">
                            People about your productPsychology Articles, introducing them
                            what it is all about and how your product.
            </CardText>
                      
                    </CardBody>
                </Card>
            </div>
            </div>
            </div>
        </section>
    );
};
export default Aboutus;
