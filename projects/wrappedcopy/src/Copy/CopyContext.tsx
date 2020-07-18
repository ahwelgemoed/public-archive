import React from 'react'

type ContextProps = {
  copiedText: string
  setCopiedText: (value: string) => void
}
const CopyContext = React.createContext<Partial<ContextProps>>({})

export default CopyContext
