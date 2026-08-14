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
  const context = useCopiedContext()
  console.log(context)

  return (
    <div>
      <WrappedElement>Hello</WrappedElement>
    </div>
  )
}
