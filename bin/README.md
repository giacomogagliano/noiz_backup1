# Installation

In your machine `.bash_profile` in this folder
(`/noiz-network-state/bin`), copy this lines:

```sh
BIN_PATH=bin/
NOIZ_FOLDER_PATH=<path-to-your-noiz-folder>/noiz-network-state
BUILT_PATH=$NOIZ_FOLDER_PATH/$BIN_PATH
PATH=$PATH:$BUILT_PATH
export PATH

```

folders can be of these types:

- With a version file
- Without a version file
  A folderse without a version file is for example the src
  file. It contains other folders and it doesnt have a file
  named like <Folder>\_v1.ts

# .noiz

- line1 : type1 = folder | file
- line2 : type2 = index | module
- line3 : type3 = type of code
- line4 : lastVersion
- line5 : dateCreate
- line6 : dateUpdate
