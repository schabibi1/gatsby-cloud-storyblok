import * as React from "react"

const Feature = ({ blok }) => {
  console.log(blok)
  return (
    <div>{ blok.name }</div>
  )
}

export default Feature