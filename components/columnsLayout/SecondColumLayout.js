import React from 'react'
import { Projects } from '../projects/Projects'
import { Skills } from '../skils/Skils'
import styled from './style.module.css'

export const SecondColumLayout = () => {
  return (
    <div className={styled.constainer_SecondColumLayout}>
        <Skills/>

        <Projects/>
    </div>
  )
}
