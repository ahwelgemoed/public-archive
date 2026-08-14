import * as React from 'react'
import { CopyProvider } from './Copy/CopyProvider'
interface Props {}

export const WrappedCopyContextProvider: React.FC<Props> = ({ children }) => {
  return <CopyProvider>{children}</CopyProvider>
}
