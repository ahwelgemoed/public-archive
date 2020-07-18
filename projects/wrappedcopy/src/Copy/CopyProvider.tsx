import React, { useState, FC } from 'react'
import CopyContext from './CopyContext'
interface Props {}
const CopyProvider: FC<Props> = ({ children }) => {
  const [copiedText, setCopiedText] = useState<string>('')

  return (
    <CopyContext.Provider value={{ copiedText, setCopiedText }}>
      {children}
    </CopyContext.Provider>
  )
}

export { CopyProvider }
