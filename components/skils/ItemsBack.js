import React from 'react'
import styled from './styled.module.css'

const items = ['TypeScript', 'PostgreSQL', 'Express', 'Node', 'Python', 'FastApi']

export const ItemsBack = () => {
  return (
    <>
        {
            items.map((el, id) => (
                <div key={id} className={styled.container_item_back}>
                    <div className={styled.item_back}>{el}</div>
                </div>
            ))
        }
    </>
  )
}
