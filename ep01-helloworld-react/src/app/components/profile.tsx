import { Card } from 'flowbite-react'
import React from 'react'

export default function Profile({name,message}: {
    name:string,
    message:string
}) {
  return (
    <Card>
      <h5 className="text-2xl">{name}</h5>
      <p>{message}</p>
    </Card>
  )
}
