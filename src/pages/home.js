import React from 'react'
import { HeaderContainer} from '../containers/header'
import { Feature } from '../components'
import { JumbotronContainer } from '../containers/jumbotron'
import Articals  from '../containers/articals'
import Aboutus from '../containers/aboutus'
import Recommended from '../containers/recommended'
import Slider from '../containers/slider'

export default function Home() {
    return (
        <>
        <HeaderContainer />
            <Slider />
            <Aboutus />
            <JumbotronContainer />
            <Recommended />
            <Articals />
    </>
    )
}