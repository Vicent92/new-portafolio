import React from 'react'
import { ItemsBack } from './ItemsBack'
import { ItemsFront } from './ItemsFront'
import styled from './styled.module.css'

export const Skills = () => {
  return (
    <div className={styled.container}>
        <div className={styled.container_skills}>
            <div className={styled.title_container_skills}>Front-End</div>

            <ItemsFront/>
        </div>
        
        <div className={styled.container_skills}>
            <div className={styled.title_container_skills}>Back-End</div>

            <ItemsBack/>
        </div>
    </div>
  )
}
