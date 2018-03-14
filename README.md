# Personal DM

## Setup

### macOS
to do

### Windows

#### prerequisites
Node.js & npm
[Install Node.js and npm on Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)

#### configure build environment
The easy way to setup your build environment on Windows is to install the `windows-build-tools` package by running `npm install windows-build-tools -g` on an admin PowerShell console. Upon installing this package, it downloads and installs the Visual C++ Build Tools 2015, provided free of charge by Microsoft. These tools are required to compile popular native modules. It will also install Python 2.7, configuring your machine and npm appropriately.

If your `windows-build-tools` installation stalls after Visual Studio Build Tools finishes, [this remedy](https://github.com/felixrieseberg/windows-build-tools/issues/47#issuecomment-296881488) might help.

##### If npm install still fails…
Sometimes the `windows-build-tools` won’t properly install the required libraries. This is true if you already have a regular .NET development environment setup. This has been reported on Windows 10 x64 (and possibly other architectures or Windows versions).

This might be your problem if, after running `npm install` on a Gatsby site, you see compilation errors such as `node-gyp` or `sharp` or `binding.gyp not found`.

If you suspect this is your problem, download the [Visual Studio Community 2015 Package](https://www.visualstudio.com/products/visual-studio-community-vs) and install only the part of the package that interests us : `Programming languages > Visual C++ > Common tools for Visual Studio 2015`. Be sure to download the 2015 version of VS Community, not the 2017 version (see Note 1 below); you’ll have to use the [search bar on the VS site](https://www.visualstudio.com/products/visual-studio-community-vs) to find it. You can uncheck everything else. You don’t need to install the full VS2015 Express on your system and this won’t mess up your existing VS201x installs.

Then run the commands on Gatsby:

npm uninstall node-gyp -g
npm config set python python2.7
npm config set msvs_version 2015
npm cache clean -f
npm install


If that still doesn’t work, refer to the `node-gyp` [npm package homepage](https://www.npmjs.com/package/node-gyp) for further instructions and contact the `node-gypteam` on [GitHub](https://github.com/nodejs/node-gyp/issues).

Note 1 : the Visual Studio Community 2017 surely contains the package too but we weren’t able to find it. If you found it, run `npm config set msvs_version 2017` instead and report it here with a screenshot!

#### setup
In your powershell command line

```
npm install --global gatsby-cli
git clone git@github.com:gtfargo/personaldm.git
cd personaldm
npm install
gatsby develop
```

After running `gatsby develop` — Gatsby will start a hot-reloading development environment accessible at `localhost:8000`

