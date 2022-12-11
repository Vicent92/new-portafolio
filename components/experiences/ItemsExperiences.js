import React, { useEffect, useState } from 'react'
import styled from './style.module.css'

export const ItemsExperiences = () => {
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    const url = 'http://localhost:3000/api/experiences'
    fetch(url)
    .then(res => res.json())
    .then(json => setExperiences(json))
    .catch(error => console.log(error))
  })

  return (
    <>
    
        {
            experiences.map((el, id) => (
                <div key={id} className={styled.container_items_experiences}>
                    <div className={styled.date_container_items_experiences}>{el.date}</div>

                    <div className={styled.role_container_items_experiences}>{el.role}</div>

                    <div className={styled.description_container_items_experiences}>{el.description}</div>
                </div>
            ))
        }
    
    </>
  )
}
