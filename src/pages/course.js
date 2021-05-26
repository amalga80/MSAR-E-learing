import React from 'react'
import { FooterContainer } from '../containers/footer'
import CourseInner from '../components/course'


const Course = (props) => {
    return (
        <>
        
        <CourseInner />
        <FooterContainer />
    </>
    )
}

export default Course
// export default function Course(props) {
//     // const { series } = useContent('series');
//     // const { films } = useContent('films');

//     // const slides = selectionFilter({ series, films});
//     return ( <CourseInner />)
// }