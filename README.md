# Can I use(offline)

## Overview

Instant, Offline, Quick, Non-breaking compatibility check  of HTML5, CSS3, SVG, New JS API.

**No need to open browser to see the result.**

## Compatibility

- SublimeText2 / latest dev build of SublimeText3

- OSX / Windows / Linux(maybe)

## Installation

- Through [Sublime Package Control](http://wbond.net/sublime_packages/package_control):

Run “Package Control: Install Package” command, find and install `caniuse(offline)`.
Restart Sublime editor (if required)

- Manually:

Download the lastest [releases](https://github.com/leecade/caniuse/releases) into your packages folder (find "Browse Packages" menu item to open this folder)
Restart Sublime editor (if required)

## Usage

Select a keyword then

press the hotkey(default: OSX - `ctrl + c`, Windows/Linux - `ctrl+alt+c`)

or

click `Caniuse` item in `Tools` menu

the result will be shown on the status bar.

> You can modif the hotkey like:
> 
```
"keys": ["ctrl+c"], "command": "caniuse"
```

## Contribution

Send me [Issues](https://github.com/leecade/caniuse/issues), like:

```
`perspective-origin` ==> `transforms3d`

see: http://caniuse.com/#search=transforms3d
```

## TODO

- [1.0.TODO](https://github.com/leecade/caniuse/blob/master/1.0.TODO)

- [2.0.TODO](https://github.com/leecade/caniuse/blob/master/2.0.TODO)

## Thanks

- Thanks to [@akira-cn](https://github.com/akira-cn), I wrote this plugin based on his [V8-wrapper](https://github.com/akira-cn/SublimeJS).

- Thanks to [Can I Use](http://caniuse.com/)'s data.

- Thanks to [@yexingxia](https://github.com/yexingxia) gave me some useful feedback.

License
=======

All of Sublime Text Caniuse is licensed under the MIT license.

Copyright (c) 2011-2014 leecade <leecadeg@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
