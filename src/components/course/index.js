import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Accordion, Card, Button } from 'react-bootstrap'
import { AiOutlineCaretDown } from "react-icons/ai";
import { FirebaseContext } from '../../context/firebase';
import {NavInner} from '../../containers/navbar'
import"../../global.css"

const bg = { background: "#4483fe3b" }
const CourseInner = () => {
    const routerParams = useParams();
    const [selectedVideo, setSelectedVideo] = useState({});
    const [courseVideos, setCourseVideos] = useState([]);
    const { firebase } = useContext(FirebaseContext);
    const [course, setCourse] = useState({})
    useEffect(() => {
        if (routerParams) {
            firebase
                .firestore()
                .collection("courses")
                .where('id', '==', routerParams.id)
                .get()
                .then((snapshot) => {
                    if (snapshot && snapshot.docs[0]) {
                        setCourse(snapshot.docs[0].data())
                        setCourseVideos(snapshot.docs[0].data().videos);
                    }
                })
                .catch((error) => {
                    debugger;
                })
        }
    }, [routerParams])
    useEffect(() => {
        setSelectedVideo(courseVideos[0])
    }, [course])
    const onClickVideo = (video) => {
        setSelectedVideo(video)
    }
    return (
        <>
        <NavInner />
            <section className=" container-fluid pl-0 " style={{paddingBottom:"5rem",paddingTop:"5rem"}}>
                <div className="row py-5">
                    <div className="col-lg-3 col-md-4 col-10 mx-auto " >
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle style={bg} className="text-center overflow-auto" as={Card.Header} eventKey="0">
                                    <h5 className=" mt-2">Table of contents
                                    
                               <AiOutlineCaretDown className=" float-right " />
                                    </h5>
                                </Accordion.Toggle>
                                {courseVideos && courseVideos.map((video, index) => {
                                    return (
                                        <Accordion.Collapse eventKey="0" key={index}>
                                            <Card.Body className="p-1" onClick={() => onClickVideo(video)}> <Button className="btn btn-light w-100 h-100" >{video.title}</Button></Card.Body>
                                        </Accordion.Collapse>
                                    )
                                })}
                            </Card>
                        </Accordion>
                    </div>
                    <div className="col-md-8 col-lg-9 ml-5  m-auto text-center col-11" >
                        <h2 style={{fontWeight:'bold'}}>{course && course.title}</h2>
                        <h3 className="py-3" style={{color:"#FF9B07"}}>{selectedVideo && selectedVideo.title}</h3>
                        <div>
                            <iframe className="col-lg-9 col-md-10 m-auto" height="400" src={`https://www.youtube.com/embed/${selectedVideo && selectedVideo.link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseInner