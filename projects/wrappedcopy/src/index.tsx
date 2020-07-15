import * as React from 'react'
import copy from 'copy-to-clipboard'
import styles from './styles.module.css'

interface Props {
  addHoverIcon?: boolean // TODO
}

export const WrappedDiv: React.FC<Props> = ({ children }) => {
  const textInput = React.useRef<HTMLDivElement>(null)

  const copyToClipBoard = () => {
    const textToCopy: string =
      (textInput.current && textInput.current.textContent) || ''
    copy(textToCopy)
  }

  return (
    <div
      onClick={() => copyToClipBoard()}
      className={styles.test}
      ref={textInput}
    >
      {children}
    </div>
  )
}
