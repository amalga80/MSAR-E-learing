import React, { useContext, useState, useEffect } from "react";
import Fuse from "fuse.js";
import { FirebaseContext } from "../context/firebase";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../MSAR2-2.png";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import './css/header.css'
import '../global.css'
import { Link } from "react-router-dom";


const wlogo = { width: "167px" };

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("courses");
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  const [courses, setCourses] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setSlideRows(slides[category]);
    setCourses(slides[category][0].data)
  }, [slides, category]);

  useEffect(() => {
    if(slideRows && slideRows.length > 0 && slideRows[0].data) {
    debugger;
    // let searchCourses = slideRows[0].data;

    //   const fuse = new Fuse(slideRows, {
    //     keys: ["data.title"],
    //     includeMatches: true
    //   });
    //   const results = fuse.search(searchTerm).map(({item, matches}) =>  {
      
    //     let itemCourses = item.data;
    //     let selected = itemCourses.filter( x => matches.findIndex(y => y.value == x.title))
    //     debugger;
    //     item.data = selected
    //     return item

    //   } );
  
    //   if (slideRows && searchTerm.length > 3 && results.length > 0) {
        
    //     setSlideRows(results);
    //   } else {
    //     setSlideRows(slides[category]);
     // }

      if(searchTerm.length >= 2) {
        let selectedCourses = courses.filter(x => x.title.toLowerCase().includes(searchTerm.toLowerCase()));
        slideRows[0].data = selectedCourses
        setSlideRows(slideRows)
      } else {
        slideRows[0].data = courses
        setSlideRows(slideRows)
      }

    
    }

  }, [searchTerm]);

  const history = useHistory();
  return (
    <>
      <Navbar className="w-100 position-fixed navbarbg " expand="lg">
        <div className="container">
          <Nav.Link to={ROUTES.HOME}>
            <img src={logo} alt="MSAR" className="logo" />{" "}
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                className="linkcolor"
                active={category === "courses" ? "true" : "false"}
                onClick={() => setCategory("courses")}
              >
                Courses
              </Link>
              <Link
                className="linkcolor"
                active={category === "articales" ? "true" : "false"}
                onClick={() => setCategory("articales")}
              >
                Articles
              </Link>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Link className="linkcolor" onClick={() => firebase.auth().signOut()}>
                Sign out
              </Link>
              <Link className="linkcolor">
                {" "}
                {user.displayName}{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className="course-cover">
        <h2 className="text-center text-light py-5 " style={{ fontWeight: "800", fontSize: "50px" }}>{category === 'articales' ? "Articales" : "Courses"}</h2>
      </div>
      <div className="container py-5">
        {slideRows && slideRows.map((slideItem) => (
          <div key={`${category}-${slideItem.title.toLowerCase()}`}>
            <div className="row">
              {slideItem && slideItem.data.map((item) => (
                <div className="col-lg-4 col-md-6  col-10 course-card position-relative  " >
                  <Card
                    className=" my-3"
                    onClick={() => category === 'articales' ? history.push(`/articale/${item.id}`) : history.push(`/course/${item.id}`)}
                    key={item.docId}
                    item={item}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: "200px" }}
                      src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    />
                    <Card.Body>
                      <Card.Title>
                        <h4>{item.title}</h4>
                      </Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div className="d-flex text-warning">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                        <FaStarHalfAlt />
                      </div>
                      {category == 'courses' ? <h5 className="mt-2 font-weight-bold" style={{ color: "#FD4255" }} > Free</h5> : null}
                    </Card.Body>
                    <div
                      className=" card-overlay  position-absolute  w-100 h-100"
                    >
                      <div className="inner-card h-100 w-100">
                        <h4 className="text-light">{item.title} </h4>
                        <h4 className="text-light">Enroll</h4>
                      </div> </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
