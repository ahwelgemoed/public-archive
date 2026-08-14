# Wrappedcopy - (NOT PRODUCTION TESTED)

Wrap an Element - Click and It's Copied -

Gives you access to context similar to `useFormikContext`

[![yarn](https://img.shields.io/npm/v/wrappedcopy.svg)](https://www.yarnjs.com/package/wrappedcopy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add wrappedcopy
```

## Usage

### ** Important **

You must Wrap you app with the Context Provider, Provided.

> _Ps. You can also just Wrap your View_

```tsx
import React, { Component } from 'react'
import { WrappedCopyContextProvider } from 'wrappedcopy'

class Example extends Component {
  render() {
    return (
      <WrappedCopyContextProvider>
        <App />
      </WrappedCopyContextProvider>
    )
  }
}
```

Then in your View -

```tsx
import React, { Component } from 'react'
import { WrappedElement, useCopiedContext } from 'wrappedcopy'

const MyComponent = () => {
  const { copiedText } = useCopiedContext()
  return (
    <div>
      <WrappedElement>Hello</WrappedElement>
    </div>
  )
}
```

Wrap the element you want to be Copied to your clipboard with `<WrappedElement>`

Should You need to read the value copied you can destruct it from the Copied Context using

`const {copiedText} = useCopiedContext()`

## Issues

I have not tested on Classes but will soon as I need Legacy support for this

As such for failsafe I export the `raw` Context as-well

`import {CopyContext} from 'wrappedcopy'`

## Development

```bash
yarn start # runs rollup with watch flag
```

```bash
cd example
yarn
yar start # runs create-react-app dev server
```

> Made with create-react-library

## Publishing to NPM

```bash
yarn publish

```

## Deploying to Github Pages

```bash
yarn run deploy

```

## License

MIT © [ahwelgemoed](https://github.com/ahwelgemoed)
