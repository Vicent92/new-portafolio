import React from 'react'
import styled from './style.module.css'

const itemsExperiences = [
    {
      role: 'Full Stack Developer',
      date: "En. 2022 - Ago. 2022",
      name: "Analytics Town",
      description:
        `Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
        Quisque feugiat malesuada molestie.`
    },
    {
      role: 'Full Stack Developer',
      date: "feb 2021 - dic 2021",
      name: "Trancsegtel",
      description:
        `Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
        Quisque feugiat malesuada molestie.`
    },
    {
      role: 'Frontend Developer',
      date: "ene 2020 - ene 2021",
      name: "Universidad Central de Venezuela",
      description:
        `Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
        Quisque feugiat malesuada molestie.`
    },
  ];

export const ItemsExperiences = () => {
  return (
    <>
    
        {
            itemsExperiences.map((el, id) => (
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
