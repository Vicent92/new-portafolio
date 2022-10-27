import React from 'react'
import styled from './styled.module.css'

const items = ['React', 'Next', 'Html', 'Css', 'Javascript', 'React Native', 'Redux', 'Styled Component', 'Tailwind']

export const ItemsFront = () => {
  return (
    <>
        {
            items.map((el, id) => (
                <div key={id} className={styled.container_item_front}>
                    <div className={styled.item_front}>{el}</div>
                </div>
            ))
        }
    </>
  )
}
