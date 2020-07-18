import React from 'react'

import {
  WrappedElement,
  WrappedCopyContextProvider,
  useCopiedContext
} from 'wrappedcopy'
const App = () => {
  return (
    <WrappedCopyContextProvider>
      <MyComponent />
    </WrappedCopyContextProvider>
  )
}

export default App

const MyComponent = () => {
  const x = useCopiedContext()
  console.log('x', x)
  return (
    <div>
      <WrappedElement>Hello</WrappedElement>
    </div>
  )
}
