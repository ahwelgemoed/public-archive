# Nightly Builds

<img width=300 src='https://media.giphy.com/media/26gJyqA2B1HZR44la/giphy.gif?cid=ecf05e47s41yna3rsst822sa0nyi7bpzz0295hz8e6si57w9&rid=giphy.gif&ct=g'>

A Repo for builds of unpublished helpers and tools from Mendix's [Monorepo](https://github.com/mendix/widgets-resources)

This Repo/Github Action runs overnight and carbon copies what is currently in the Widget-Resources repo, builds the packages it needs and releases them to NPM and Github

<table style="width:100%">
    <tr>
        <th>Package</th>
        <th>Download</th>
        <th>Original</th>
    </tr>
  <tr>
    <td>
    @ahwelgemoed/nightly-piw-native-utility
    </td>
    <td>
    <a href='https://www.npmjs.com/package/@ahwelgemoed/nightly-piw-native-utility'>NPM</a>
    <br/>
    <a href='https://github.com/ahwelgemoed/nightly-builds/packages/957644'>Github</a>
</td>
    <td>
    <a href='https://github.com/mendix/widgets-resources/tree/master/packages/tools/piw-native-utils-internal'>piw-native-utils-internal</a>    
</td>
  </tr>
  <tr>
    <td>
    @ahwelgemoed/nightly-piw-utility
    </td>
    <td>
    <a href='https://www.npmjs.com/package/@ahwelgemoed/nightly-piw-utility'>NPM</a>
      <br/>
    <a href='https://github.com/ahwelgemoed/nightly-builds/packages/957646'>Github</a>
</td>
    <td>
    <a href='https://github.com/mendix/widgets-resources/tree/master/packages/tools/piw-utils-internal'>piw-utils-internal</a>    
</td>
  </tr>
</table>

## ⏰ Note

These are internal tool thats are open source but have not been published, so there is no guarantee with it, use if for "education" purposes.

## What it does

<details>
  <summary>Expand Steps</summary>

1. Clones Latest commit from Master [here](https://github.com/mendix/widgets-resources) with a depth of 1

2. Runs Npm install in Root of cloned repo

3. Runs Post install. ([ACT](https://github.com/nektos/act) and GH Action runner seems to sometimes not run post install command)

4. Loop over Package to Publish Object Array

   4.1 Reads `packages.json`

   4.2 Changes some params in `package.json`

   - Name
   - Version (Set to UNIX time)
   - Private
   - Desc
   - Scripts
   - publishConfig
   - repository

     4.3 Over writes old package.json with new one

     4.4 runs `npm run build` to make changes in package.json take

     4.5 copy this dir to a new clean folder

     4.6 Set up npm config

     4.7 Loop over `.npmrc` Settings

     4.7.1 writes `.npmrc` file with settings for NPM or GH Packages

     4.7.2 Run `npm publish` publishes NPM package

     4.8 Makes Action rest for 5sec before starting next loop

</details>

### The MIT License

Copyright © 2021 Arno welgemoed

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
