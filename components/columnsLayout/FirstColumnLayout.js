import React from 'react'
import { CardProfile } from '../cardProfile/CardProfile'
import { Experiences } from '../experiences/Experiences'

export const FirstColumnLayout = () => {
  return (
    <div>
        <CardProfile/>

        <Experiences/>
    </div>
  )
}
