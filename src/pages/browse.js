import React from 'react'
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-fliter'

export default function Browse() {
        const { courses } = useContent('courses');
        const { articales } = useContent('articales');

        const slides = selectionFilter({ courses, articales});
        return ( <BrowseContainer slides={slides} />)
}