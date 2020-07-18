import { useContext } from 'react'
import CopyContext from './CopyContext'
/**
 * All This does is Return Context To The ?Uer
 */
export const useCopiedContext = () => {
  const context = useContext(CopyContext)
  return context
}
