import React from 'react'
import Footer from '../../components/Footer/Footer'
import HomeServices from './HomeServices'
import Process from '../Home/Process'
import Projects from '../Home/Projects'
import { Welcome2 } from './Welcome2'
import { SectionBlack } from './SectionBlack'

export const Services = () => {
  return (
    <>
    <Welcome2/>
    <SectionBlack/>
    <HomeServices/>
    <Process/>
    <Projects/>
    <Footer/>
    </>
  )
}
