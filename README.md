# Noiz - Network State (formerly Noiz)

Noiz is a network state based on Music. We are building a
community which shall be united by a strong ideology of
collectivism with the sole aim to make the people of the
community thrive and live a life full of meaning. There for
we are building an Operative System for the DLT technologies
world.

# In this document

- [About the Repo](#about-the-repo)
- [Constitution](#constitution)
  - [Foundations](#foundations)
- [Technical Secion](#technical-section)
  - [Achitectural Design](#architectural-design)
  - [Contents](#contents)
  - [Apps](#apps)
    - [Nft Minter](#nft-minter)
    - [Scripts](#scripts)
    - [Social](#social)
  - [Packages](#packages)
    - [Blockchain](#blockachain)
    - [Database](#database)
    - [Git](#git)
    - [testpack](#testpack)
    - [Ui](#ui)
    - [Utils](#utils)
    - [NoizBase](#utils)
  - [Bin](#bin)
    - []()
- [How it works](#how-it-works)
  - [Install bolt and manypkg](#install-bolt-and-manypkg)
  - [Start](#start)
  - [Build](#build)
  - [Dev](#dev)
  - [Application](#application)
  - [Packages](#packages-1)
  - [Prod](#prod)
- [Contribute](#contribute)
  - [Todo's](#todos)
  - [Hot to contribute](#how-to-contribute)
    - [find a todo](#find-a-todo)
    - [create a todo](#create-a-todo)
  - [About Github issues integration in Vscode](#about-github-issues-integration-in-vscode)
    - [tackle a todo with Github issues](#tackle-a-todo-with-github-issues)
    - [tackle a todo without Githut issues](#tackle-a-todo-without-githut-issues)
- [Version Control](#version-control)

## About the Repo

This repo contains the open source software which will
constitute a solid base for the relazation of all the
informatic technologies needed by the community to crate,
design, project, develop, produce and distribute contents
and goods. </br>Obviously this repo at the time being is
just a first small step towards the ambitious goal.</br>

> ZION follows the DIY concept. We manifestly do pretend to
> own our contents and not rely on third parties
> data-centers. Our applications will grow with the
> engagement of the community, so expect some plain html on
> some pages!

# Constitution \*

> Noiz constitution will be realized through a collective
> effort and it will be deployed on the blockchain.

\* This section can be moved, but I liked the idea of mixing
up the political part of Noiz with the actual building of
it. As we shall one day be appearing in the
[networkstate]('thenetworkstate.com') dashboard panel, it
would be nice that our actual constitution could sit in our
Git repo (Github, Gitlab or whatever)

## Foundations

- Intellectual Ownership
- Citizencentric
- Creativity - Music
- No-Weapons (full world total disarmament)
- Knowledge - Inventions
- Resource-Sharing
- Strong-supports-weak
- SmartContracts-as-law
- Goal towards highers standards
  - Education
  - Experimentations
  - Inventions
  - Creativity
  - Collectivity
  - Financial Systems
  - Mutual Support
- Build trust
  - amongst groups individuals
  - throught the network connections
- Trustless System
  - extend trust between circles/groups
  - censorship resistant

# Technical Section

## Architectural design

The noiz-network-state is set to work on a distributed
server system of Kubernetes Clusters. Therefore, every
application is meant to run in a containerized environement,
where the connection between services happens inside the
Kubernetes cluster environment. There for the structure will
composed of several "stand-alone" applications, which would
communicate with instances of other applications deployed in
the containerized environment.
Static contents are served via the IPFS system.
Dynamic contents need a server who provides the informations
required by the client, therefore Noiz uses a distributed
network of master and worker nodes, who will be loading the
state-less applications which will communicate with relay
databases which will hold short-living documents before they
are distributed on the IPFS network.

The design is meant to work with several distributed
computers, initially, to be able to handle the complexity of
installation, we

## Contents

The noiz-network-state repo is a Monorepo which uses
[bolt]('https://github.com/boltpkg/bolt) to manage packages
and applications.
Every application and package has its own repo[^1]. This means
that by downloading the repo of the application or package
alone, one should be able to work on that part of the code
independently. This can happen as long as the packages are
actually downloadable from the npm package repository.

## Apps

### nft-minter

This application is meant to deal the complexity of the
minting process by providing the interfaces needed by
different smart contracts methods.

Each smart contract has its own functionality. We will
provide a set of smart contracts which are the result of the
composition of several smart contracts standards (EIPs), and
with this application we will distribute user interfaces
which easily enables them to interact with noiz smart
contracts.

We will provide also with a simple tool which will enable to
interact with any smart contract by simply providing some
informations (notably address and ABI).

In a first stage this application will serve to showcase the
beta version of Elsewhere, in particular the release of the
first 1000 OG tokens. We will build this application
enabling it to display profiles and collections, and slowly
we will decouple the minting process and the interactions
which actually change the state of the blockchain from the
browsing and displaying parts. This will enable use to be
able to implement some sort of gated access on some features
that we may want to offer with some form of contribution,
fee, stake or whatever the DLT technologies can inspire us
with.

> At the moment the applications is not working as we moved
> most of the code into the `ui` package.

### CLI

Newly added application with which we will create an
interactive application to deal with the Noiz monorepo.

### scripts (this one is going to be deprecated)

This application is used to write simple scripts which call
our own packages, in order to quickly test and create some
easy script for users.

Scripts shall be written in a way that they can accept user
inputs when called from the console or when called from a
client script/application.

By script I mean a `async function main(){....` function in
which we perform several action which tehorically shall be
invoked on classes or methods coming from our own packages.
This async function is passed in a `runProcess()` methods
which avoids us the hassle of always wrapping the code into
a `try {} catch {}` statement.

In this way we can also quickly test our code and

### social

The social application will enable users to interact with
smart contracts in a social network type of vibe.

Users will be able to browse and create several type of
contents:

- digital
  - tweets
  - posts
  - blogposts
  - music releases
  - gfx releases (pfp, covers, photo)
- physical
  - music goods
  - merchandise
  - new and used vinyls (12"/9"/7")
  - 3d printed goods
  - self-made clothes
  - ...
- services
  - tutoring
  - administrative
  - .....

# Packages

Every package has it's own `visual-studio-code` workspace
inside the `vsc-workspaces` folder.

## database

### blockchain (has been merged into database)

This package has a different folder strcture than the other
as it implements a tool to build TS interfaces for smart
contracts and tools to test smart contract.
It also has a layer of utility classes, functions and
scripts which we will use to easily interact with the
blockchain from frontend applications.

- contracts
- scripts
- src (this one is still a little bit messy)
  - Class
  - lib
  - Models (this should be moved to database probably)
  - types
  - utils

### database

This package contains utilities classes, methods and scripts
to provide easier methos to front-end developers. The
ambitious goal of this package is to enable the
interactions with data systems in a unified way, so that in
order to perform the same action (write a file), in the
moment of creating an actual appication, one can have a
uniform way of calling the same thing.

We will achieve this by creating an abstraction level
between the individual databasbe divers and what the clients
of the package will consume.

At the moment we are working on the definition of the
interface that the Database classe shall have. In the repo
we can put a collection of methods which where used in
different occasions, and, by creating overload for every
function call which actully calls the same type of CRUD
operation, we can provide a broader spectrum of interaction
to each method.

We will work this package in a way that it accept a
middleware function created by the consumer of the package.
This way we enable compasability and extensibility to the
classes provided by the package.

- FS
- IPFS
- ~~RAM~~ deprecated all code as been merged into zionbase
  datastructure.

to be added:

- MongodDb
- Neo4j
- Redis
- Elastic Search

### git

This repo contains utility functions to interact with the
git systems. Therefore it starts providing a Git class which
can work as a facade for the several different commands that
git accepts. Then we start building a class which handles
the connection to a git manager system. We start with Github
but we shall build, in the similar manner as for the Database
class, a class which manages several types of git managers.
Then we have some tools which enables an interface to
interact with our own Monorepo and repos, so that we can
build User Interfaces to interact with some aspects of the
repos like:

- dependencies management
- api description
- documentation

At the moment this are the classes / methods exported by the package

- Git\*
- GitManager
  - Github\*
  - Gitlab
- Monorepo\*\*
- Repo\*\*

\* currently implemented\
\*\* not yet working correctly

### Git

- deleteGitFolder.sh

- build.sh
- dev.sh
- makeFileExecutable.sh
- prebuild.sh
- prod.sh

The bin folder contains some useful script.

## test

We are using this package to make tests on the behave of
bolt and the way it exports and bundes the code we write. As
soon as we have a decent knowledge on how it works, we will
delete this package.

-

## ui

This package is meant to be and easy access point for
front-end developers to build cool interfaces quickly. At
the moment it contains only React components but I will
share the code I worked on for Telegram bots and we can put
code for Discord bots here.

- bot\*\*
  - telegram
  - discord
- cli\*\*
  - terminal
  - logs
- html\*
  - Next\*
  - React\*
  - VanillaJS\*\*
- max-msp\*\*

\* currently implemented\
\*\* to be implemented, i have some code for it, that I will share

## zionbase

### utils

This package contains utilities which are related to
handling of frequents situation when creating codes. For the
moment it holds helper codes for JS and Node, but we can
extend this to any other language we want. Let's say it is
sort of a \_lodash but DIY.

- js
  - Error
  - Regexp
- node
  - process
  - util
  - crypto\*

\* to be implemented

## Bin

# How it works

This is a monorepo which, as said earlied, it is managed by
`bolt`. We also use precontruct which basically builds the
endpoints and configures the type of exports for
compatibility with older browsers when dealing with DOM.
Basically it creates node_js packages which can be imported
in both ways: `import` or `require`.

## Install bolt and manypkg \*

Firts thing we need to install bolt which is our monorepo
package manager.

Run this commands in the monorepo root.

```sh
npm i -g bolt
```

```sh
yarn add @manypkg/cli \*\*
```

\* if you are using Linux, use `sudo` before running this
command.
\*\* I am not sure if it is @manypkg/cli or manypkg alone. I
know that to call it we need to do `yarn manypkg fix` for example.

## Start

start bolt which will download the dependencies:

```sh
bolt
```

## Build

then build the applications and packages:

```sh
bolt build
```

> if you are using windows you shall install `bash` from the
> `git` utils in order to be able to run the scripts which
> are packed in the `/bin/` folder.

## Dev

## application

## Packages

We are currently working on an internal application which
helps us to display the components we are building. At the
moment the working code can be seen by running the command
`yarn next_dev` inside the `ui` package which runs an
application in which there are all of the components we are
working on.

## Prod

In order to be able to deploy the applications on the
kubernetes system we need to create a `DOCKERFILE` for each
application. Once the docker file has been tested and it
works correctly it can be deployed on the k8s system and
replicated as needed.

# Contribute

The best way to contribute to the code base is to download
the monorepo, install it and push code changes to the github
Noiz Organization account.

> In order to make life easier with working with git, we (me
> and Arianna), suggest to usage of
> [git-fork]('https://git-fork.com/'), a simple which helps
> visualize the git-tree. Here a
> [blog]('https://thomasventurini.com/articles/the-best-way-to-work-with-todos-in-vscode/')
> where he explain some best practices for using TodoTree in
> a project.

## Todo's

In each file we can put a comment `// \TODO` (i am escaping
it now because, otherwise, it would create an actual to do in
the codespace.) and describe the type of action which is
needed to be taken. I am using a VC plugin which is called
[Todo Tree]('Gruntfuggly.todo-tree'), which shows all the
\TODO which are written in the code base, sorted by folder
opened in the VC workspace. I am including a `workspace`
file in each folder (root, apps and packages) in order to
make this simplier.

\*[back to index](#in-this-document)

## How to contribute

\TODOs in visual code have an action menu (the little yellow
bulb light which appears sometimes next to the code we
write). This enable the creation of an issue on GitHub which
enable developers to leverage some built-in functionalities
of Visual Code.
There can be actually two ways to tackle this:

1. find or create a \TODO, then
   [create]('https://code.visualstudio.com/blogs/2020/05/06/github-issues-integration#_creating-an-issue-from-anywhere)
   an issue on Github
2. find or create a \TODO make changements and push the code
   to a newly created branch (pushing to main branches shall
   be not-allowed to anyone, we shall create a team of
   people who are responsible for this).

Contribution can be tackled in both ways.

> Creating a Gthub issue should be considered the best
> practice, in this way every contribution has is own little
> environment and a reason to be. We shall work on a way to
> integrate Github issues into a Roadmap workflow as well as
> into a token reward system which can calculate the tokens a
> developer shall be rewarded with for contributing to the
> open-source code base.

\*[back to index](#in-this-document)

### find a todo

- Open a project workspace with Visual Studio code, and browse
  the TODOs which are shown in the [Todo
  Tree]('https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-treee')
  application for Visual Studio Code.
- make the needed changes
- create a new branch in the git
- upload the code and send a message on Discord to tell that
  you did it!

### create a todo

Not all issues have obviously already been found out in the
code base, so, if you find an issue with the code,create a
\TODO and push the code in a new git branch, and announce it
in the Discord chat. Normally, when pushing a new branch on
Github, they get retrieved when preforming a fetch.

> This practice shall be replaced with an healthier Github
> issue (or relative) creation as soon as we have found a
> durable solution on where to store the code base. There
> are many solutions fasdfasf asfd asdf asdf
>
> - Github
> - Gitlab
> - [Codebase]('https://codebase.org/') (decentralized
>   solution still in waitlist though)

## About Github issues integration in Vscode

Vscode comes with prebuilt Github issue integration for
creating Github issues. This works by writing a comment in
the code base with one of the followin escaped words:

- \TODO
- \FIXME
- \BUG
- \HACK

When writing `// <one_of_the_above_keywords>` in the code
base, Vscode show a little yellow bulb which, when clicked,
shows a drop down menu with an option to start the creation
of an issue on Github. When doing this we are lead into a
code editor where we can specify the details of the issue:

- make an assignement to a team member.
- describe the issue and what shall be done.

[here]('https://code.visualstudio.com/blogs/2020/05/06/github-issues-integration#_working-on-issues')

### tackle a todo with Github issues

- the github issue exixsts
  - issue is assigned to you
  - issue is assigned to someone else
  - issue is not assigned
- the github issue does not exist.

### tackle a todo without Githut issues

# Version control.

At the moment version control on noiz is run on Github. In
the future we may switch to decentralized opensource version
controlling system. Here a brief list of the choice that the
market offer us at the moment:

- centralized
  - Github
  - Gitlab
- decentralized
  - normal
    - Codebase
  - IPFS based:
    - [Radible]('https://radicle.xyz/')
    - [Pando]('https://github.com/pandonetwork/pando')

# Packages interdependencies

Here under a picture of the interdependencies between Noiz
internal packages.

The `test` package is the upper most package. All the other
packages have a dependency on this one.

</br><image src="assets/pkg-graph.png" height=300px>

# Disclaimer

At the moment we are working on consolidating the `ui`
package.
We succesfully created classes for this pages:

- profile
- item

We are currently working on the integration of `.md` files.

We have some issues with exporting modules which use `fs`
from the packages and import them in client applications.

We created a next application inside the `ui` package to be
able to visualize every class that we create.

## working on libraries

Working on the library requires a little extra-work:
each time we make a change and we wish to have it reflecting
in the browser we need to perform the following (in the
project's root folder, NOT in the monorepo root folder):

- `yarn run build`

This commands runs a script that I put in `./bin/build.sh`.
This folders shall be put global in your system in order for
it to work.

> Windows users shall install `git` utilities which has a
> replica of `bash` in order to run this scripts.
> I am working on the translation of those scripts in node
> scripts so that they can be easily run with no stress. Thats
> why I created the `CLI` application.

[^1]:
    at the moment applications and packages do not have
    their own repo but thy will soon have.
