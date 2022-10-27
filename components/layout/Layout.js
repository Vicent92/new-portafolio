import React from 'react'
import { FirstColumnLayout } from '../columnsLayout/FirstColumnLayout'
import { SecondColumLayout } from '../columnsLayout/SecondColumLayout'
import styled from './style.module.css'

export const Layout = () => {
  return (
    <div className={styled.container}>
      <FirstColumnLayout/>

      <SecondColumLayout/>
    </div>
  )
}
