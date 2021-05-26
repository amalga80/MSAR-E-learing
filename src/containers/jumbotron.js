import React from 'react';
import jumboData from '../fixtures/jombo.json';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



const card = {
  border: 'none',
}



export function JumbotronContainer() {

  return (

    <section className="pb-5">

      <div className="container py-5">

        <header className="text-center py-3">

          <p style={{color:"#FF9B07"}}>GREAT COURSES FOR YOU </p>

          <h2 >What Make Us Different ?</h2>

        </header>

        <div className="row">

          {jumboData.map((item) => (

            <Card style={card} className="col-md-4 col-12 py-3 " key={item.id} >

              <CardImg top width="100%" src={item.image} alt={item.alt} className="img-fluid m-auto w-50" />

              <CardBody>

                <CardTitle tag="h3">{item.title}</CardTitle>

                <CardText>{item.subTitle}</CardText>

              </CardBody>

            </Card>))}

        </div>

      </div>

    </section>

  )
}