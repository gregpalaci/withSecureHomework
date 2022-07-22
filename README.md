# withSecureHomework

Full Stack Web Developer - Homework
Please create a simple VueJS application for saving quick notes. Design is attached below. Main page should have:
• Section with statistics (Total = New + Completed + Not completed)
• Table with notes (with possibility to sort)
• Button for adding new notes
When user clicks on “Add” button, a new dialog “Add note” should appear. “Add note” dialog (simple form with validation):
• Two fields – Title and Content
• Two buttons – Save and Cancel
• Validation – both fields shouldn’t be empty
When user clicks on checkbox in the table:
• Red action panel should be visible at the bottom of the page
• Click on “Yes” should remove note from the list
• Click on “No” should remove selection and hide action panel
Please assume that all data comes from the REST API, so use mock data. An example is attached. Application should match the design (as much as possible).
Bonus points if you:
• Add Cypress or JEST tests
• Use Git for version control and share Git repo with the app with us
• Include screenshots of the app running into the Git repo
Good luck!

Full Stack Web Developer - Homework
Design:
Example JSON response:
{ {
"id": 1,
"title": "delectus aut autem", "content": "Lorem ipsum", "status": "New"
}, {
"id": 2,
"title": "quis ut nam facilis et officia qui", "content": "Lorem ipsum",
"status": "Completed"
}, {
"id": 3,
"title": "fugiat veniam minus", "content": "Lorem ipsum", "status": "Not completed"
} }
Copyright © 2022 WithSecure Corporation. All rights reserved.
2 / 2

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
