import React from 'react'
import { ItemsProjects } from './ItemsProjects'
import styled from './style.module.css'

export const Projects = () => {
  return (
    <div>
        <div className={styled.title}>Projects</div>

        <ItemsProjects/>
    </div>
  )
}
