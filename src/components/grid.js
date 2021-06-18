import * as React from "react"
import DynamicComponent from "./dynamicComponent"
import SbEditable from "storyblok-react"

const Grid = ({ blok }) => {
  return (
    <SbEditable content={ blok } key={ blok._uid }>
      <ul>
        {blok.columns.map(blok => (
          <li key={ blok._uid }>
            <DynamicComponent blok={ blok } />
          </li>
        ))}
      </ul>
    </SbEditable>
  )
}

export default Grid