import * as React from 'react'
import { useCopiedContext } from './Copy/useCopiedContext'
interface Props {}

export const WrappedElement: React.FC<Props> = ({ children }) => {
  const wrappedTextRef = React.useRef<HTMLDivElement>(null)
  const { setCopiedText } = useCopiedContext()
  const copyTextToClipboardAndContext = async () => {
    const textToCopy: string =
      (wrappedTextRef.current && wrappedTextRef.current.textContent) || ''
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy) // TODO USER NOTIFICATIONS LAY IN THIS PROMISE
      setCopiedText && setCopiedText(textToCopy)
    }
  }
  return (
    <div ref={wrappedTextRef} onClick={() => copyTextToClipboardAndContext()}>
      {children}
    </div>
  )
}
