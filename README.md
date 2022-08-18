# Flashly
## Free Flashcard Learning Site!

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Flashly is the next-generation flashcard experience. Learn with flashcards, writing, and our signature Flashly Mode, featuring spaced repetition.

## Features

- Create public or private sharable Flashy set.
- Organize by school class/category.
- Learn with flippable flashcards with audio playback.
- Quiz yourself with our Write Mode or Flashly Mode.

Check out Flashly at https://flashly.tech - Although you can host it yourself, we don't recommend doing so.

## Tech

Dillinger uses a number of libraries/technologies to work properly:

- React
- Express
- Chakra UI
- Date FNS
- React-Card-Flip
- React Icons
- React Router
- bcrypt
- Express
- MongoDB / Mongoose
- JWT
- and many more...


## Installation

Flashly requires Node, React, and MongoDB to run.

Install the dependencies and dev Dependencies and start the two servers.


### Frontend:
1. Adjust API Server URL's as needed.
```sh
cd frontend
npm install
npm run start
```

### Backend:
1. Add the .env file on the following section.
2. Adjust URL's as needed.

```sh
cd backend
npm install
npm run dev
```

## ENV

Add an .env file to your backend folder with the following:

| Key | Value |
| ------ | ------ |
| PORT | Port Number |
| MONGO_URI | MongoDB URL |
| SECRET | Secret for JWT |


## Development

Want to contribute? Great!
Email contact@alpenglow.studio

## License

Copyright (C) 2022 Alpenglow Studio (contact@alpenglow.studio)
This file is part of the Alpenglow Studio (Flashly) project.
The Flashly project can not be copied and/or distributed commercially without the express permission of Alpenglow Studio (contact@alpenglow.studio).

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
