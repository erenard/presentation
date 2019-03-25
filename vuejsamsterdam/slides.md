class: center, middle, inverse
# Vue.js amsterdam

# .logo[!]

February 14-15th

---

# .logo_small[!] - Day 1

- ~1200 attendees
- 13 talks

---

## Day 1 - morning
Time | Speaker(s) | Title
-- | -- | --
08:45 | [Evan You](https://twitter.com/youyuxi) | State of the Vuenion (Founder of Vue.js)
09:00 | [Guillaume Chau](https://twitter.com/Akryum) | [SSR revolution with Vue 2.6](https://slides.com/akryum/vue-26-ssr-revolution)
09:35 | [Tim Benniks](https://twitter.com/timbenniks) | Vue.js for L'oreal, a case study (Director of Frontend @Valtech Paris)
10:45 | [Jen Looper](https://twitter.com/jenlooper) | [NativeScript-Vue + ML = The Great MiniBar Challenge: MixoLogy](https://slides.com/telerikdevrel/minibar) (Developer Advocate at Progress)
11:15 | [Filip Rakowski](https://twitter.com/filrakowski) | [Modern Web Apps Performance Tricks with PWA and Vue.js ](https://www.slideshare.net/FilipRakowski/performance-optimization-of-vuejs-apps-with-modern-js)(Founder Vue Storefront)
11:50 | [Sara Vieira](https://twitter.com/NikkitaFTW) | [GraphQL + Apollo + Vue.js = Magic](https://vue-apollo-magic.now.sh/) (Developer Advocate for [@YLDio](https://twitter.com/yldio))
13:00 | [Maya Shavin](https://twitter.com/MayaShavin) | [Media for everyone - how to make your Vue Apps accessible for all users](https://www.slideshare.net/dpnminh/m16y-how-to-make-your-media-accessible-for-all-users) (Senior Frontend Developer at Cloudinary)

---

# Evan You - State of the Vuenion

## Summary of 2018

- Vue CLI 3
  - Web component natif avec la CLI
- Version 2.6
  - New syntax for the tag / attribute: slot / slot-scoped
- Popularity and download count on npm / cdn
  - 700k active users by week on the chrome dev tool
  - 3.3M downloads by month on npm
  - 461M hits by month on jsDlvr (half of the JQuery's figures)

---

# Evan You - State of the Vuenion

## Open source project

- Specifications done via RFC
- Funded via Patreon

## What's next in 2019

- Version 3.0
  - Mostly compatible with the 2.x version, migration tools will be provided
  - Breaking change are proposed via RFC (request for comments) to listen user voices

---

# Guillaume Chau - Hot Vue Topic

Presentation of server-side rendering (SSR).
State of SSR before vue.js 2.6:
  - SSR provides a better first render time on page reload.
  - limited to direct route components
New features from version 2.6
  - Components can define a ServerPrefectch lifecycle hook for SSR hydratation
  - Can access to 'this' component instance, during the SSR

---

# Tim Benniks - Vue.js for L'oreal, a case study

Case study of a big website, 3000+ merges, 800+ websites from acquisitions

The stack and KPIs are shared among all websites
Back-end stack: [SiteCore](https://www.sitecore.com/fr-fr) / azure / cloudflare

Front-end stack: vue.js components, atomic design methodology.

Sitecore and vue.js works well together, sitecore provide integration with vue components.

Vue.js component fallback gently to a provided plain old HTML if the browser don't support JS.

---

# Jen Looper - NativeScript-Vue + ML = The Great MiniBar Challenge: MixoLogy

Used stack:

- [Native Scripts Vue](https://nativescript-vue.org/) to build a multiplatform mobile application with vue.js
- Database [FireBase](https://firebase.google.com/), works well with native script and tensorflow
- [Kaggle](https://www.kaggle.com/) used as an IA to recognize the most popular ingredients
- [TextGenrnn](https://github.com/minimaxir/textgenrnn) (see [aiweirdeness](http://aiweirdness.com/)) generate cocktail recipes
- Lots of alcohol pictures to train the image recognition to distinguish the mini-bar's bottles

Links:
- https://github.com/googlecodelabs/tensorflow-for-poets-2
- https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md

---

# Filip Rakowski - Modern Web Apps Performance Tricks with PWA and Vue.js

Component Lazy loading:

Instead of ``import X from Y``, use: ``const X = () => import('Y')``

Links:
- [Bundlephobia](https://bundlephobia.com/)
- [Npm-Size](https://www.npmjs.com/package/npm-size)

---

# Maya Shavin - Media for everyone - how to make your Vue Apps accessible for all users

Different types of color impairements:
- Photophobia
- Color perception
  - Deuteranopia
  - Tritanopia
  - Achromatopsia

---

## Day 1 - evening

Time | Speaker(s) | Title
-- | -- | --
14:30 | [Natalia Tepluhina](https://twitter.com/N_Tepluhina) | [Desktop Applications with Vue](https://www.slideshare.net/NataliaTepluhina/desktop-apps-with-vue) (CTO at Vue Vixens)
15:05 | [Damian Dulisz](https://twitter.com/DamianDulisz) | [Designing Components in Vue](https://github.com/shentao/composing-components) (Vue.js Core Team)
16:45 | [Natalia Tepluhina](https://twitter.com/N_Tepluhina) & [Jen Looper](https://twitter.com/jenlooper) | Latest news on Vue Vixens (Vue Vixens)
17:20 | [Nader Dabit](https://twitter.com/dabit3) | [Full Stack Vue in the Era of Serverless Computing](https://www.dropbox.com/sh/2m6o3ba1i9hra1n/AABkIpgBA5jXW5jz-cTKCxJja?dl=0) (Developer Advocate at Amazon Web Services)
17:40 | [Jacob Schatz](https://twitter.com/jakecodes) | Phenomenal design patterns in Vue using Vuex with Spiders (Staff Developer at Gitlab)

---

# Nathalia Tepluhina - Desktop Applications with Vue

Electron is not the only solution to make desktop app with HTML / CSS / JS

There is NW.JS and VUIDO too !
- NW.JS
  - out of the box vuex support
  - source code protection
  - 230 MB ! (electron weight 130 MB)
- VUIDO
  - No HTML/CSS, native GUI components only
  - No vue-router
  - 32 MB only

---

# Damian Dulisz - Composing components

## Components design complexity

When to use props or slots ? It depends on your component lifecycle.
- Simple props at the beginning
- Know when to refactor it
- Use slots for complex jobs

---

# Nader Dabit - Full Stack Vue in the Era of Serverless Computing

Talk about Amplify framework of Amazon for serverless application.

--

# Jacob Schatz - Phenomenal design patterns in Vue using Vuex with Spiders

Talk about patterns in Vue with Vuex:
- command
- strategy

Links:
- vuecommander.com
- jacobschatz.com/vue-bdp.html

---

## Day 2 - morning
Time | Speaker(s) | Title
-- | -- | --
08:45 | [Guillaume Chau](https://twitter.com/Akryum) | [How to craft a Vue CLI Plugin](https://slides.com/akryum/create-a-vue-cli-plugin) (Vue.js Core Team)
09:00 | [Alex Kyriakidis](https://twitter.com/hootlex) and [Rolf Haug](https://twitter.com/rahaug) | Static Site Generation is Awesome (Founders Vueschool.io)
09:35 | [Sean Larkin](https://twitter.com/TheLarkInn) | [Everything's a plugin](https://github.com/TheLarkInn/everything-is-a-plugin): Understanding webpack from the inside out (webpack Core Team)
10:45 | [Eduardo San Martin Morote](https://twitter.com/posva) | [Make your Vue apps Lighter by being lazy](https://slides.com/posva/making-your-vue-apps-faster-by-being-lazy) (Vue.js Core Team)
11:15 | [Thorsten Linusborg](https://twitter.com/Linus_Borg) | [Vue CLI – How to write components with it](https://github.com/LinusBorg/talks/tree/master/2019-02-15%20Vue.js%20Amsterdam) (Vue.js Core Team)
11:50 | [Quique Fernandez Guerra](https://twitter.com/CKGrafico) | [Empowering Vue with TypeScript, Inversify, Vuex and some other super tools.](https://www.slideshare.net/CKGrafico/empowering-vue-with-typescript-inversify-vuex-and-some-other-super-tools-131901058) (Development Engineer at Plain Concepts)
13:00 | [Gregg Pollack](https://twitter.com/greggpollack) | Introduction to Nuxt.js - Nuxt explained Visually (Founder of Vue Mastery)

---

# Guillaume Chau - How to craft a Vue CLI Plugin

New Vue CLI 3.0 features:
- plugins replace templates: plugins are modulars can be installed and upgradable on an existing project
- distinction between vue-cli and vue-cli-service

Plugin development:
- generator : creates/modify files, alter configuration
- prompts : user interactions using inquirer.js
- service : configure webpack using webpack-chain
- gui integration : Adds widgets to the UI of the vue cli

Links:
- cli-vuejs.org

---

# Alex Kyriakidis & Rolf Haug - The majesty of vue.js

Use static site generation:
- to avoid jumping content during the page load.
- because Google bot use chrome 41, without ES6

SSR is an alternative but:
- pure static is serverless, (staticgen.com nuxt can generate a static website)
- almost free
- super performant

Links:
- https://www.netlify.com

---

# Sean Larkin - Everything's a plugin: Understanding webpack from the inside out

- Webpack is based on tapable
- All webpack is made of plugin

Links:
- astexplorer.net: JS parser comparison
- webpack.academy: learning source about webpack

---

# Eduardo San Martin Morote - Make your Vue apps Lighter by being lazy

Code splitting with webpack
- use dynamic import
- use webpackPrefetch/webpackPreload
- use vuetify loader
- use lazy loading on main routes

---

# Thorsten Linusborg - Vue CLI – How to write components with it

Building Libraries with vue-cli
Best practices and recommendations
- folder structure
- package.json important fields
- Turn the library into a vue plugin
- Auto-install in the browser
- Watch for the weight of dependencies

---

## Day 2 - evening
Time | Speaker(s) | Title
-- | -- | --
14:30 | [Sébastien](https://twitter.com/atinux) & [Alexandre](https://twitter.com/_achopin) Chopin (Nuxt.js Chopin Brothers) | Nuxt.js 2019 (Creators of Nuxt.js)
15:05 | [Roman Kuba](https://twitter.com/Codebryo) | [Next Level Jest Testing with Vue.js](https://speakerdeck.com/codebryo/next-level-jest-testing-for-vue) (Vue.js Expert at Codeship)
16:45 | [Filipa Lacerda](https://twitter.com/FilipaLacerda) | [How we learned the hard why following a flux pattern matters and how to avoid other mistakes in state management.](https://slides.com/filipalacerda/vuejs-amsterdam) (Senior Frontend Engineer at Gitlab)
17:20 | [Callum Macrae](https://twitter.com/callumacrae) | Accesssibility with Vue.js (Vue.js Core Team & Author of Vuejs: Up and Running)
17:55 | [Chris Fritz](https://twitter.com/chrisvfritz) | [Visualizations using SVG, Canvas, and WebGL in Vue](https://fritz.netlify.com/slides/viz-in-vue/) (Vue.js Core Team & Vue News Podcast)

---

# Chopin brothers - Nuxt.js 2019

- THE SSR framework for vue.js
- To improve interoperability, a project folder structure is emerging
- Vue.js as a library tend to become a framework

--

# Roman Kuba - Next Level Jest Testing with Vue.js

- How jest works
- Testing vuex stores
- Testing vue.js components
- Good practices and pitfalls

---

# Filipa Lacerda : Vuex Pattern

Vuex development design patterns and good practices for front-end developpers.

--

# Callum Macrae - Accessibility with Vue.js

Demonstration of a good and bad website, read by a screenreader.
Interview of a blind person about his web browsing experience.

--

# Chris Fritz - Visualizations using SVG, Canvas, and WebGL in Vue

- SVG can be rendered using vue
- A-frame: library using markup language to define a webGL scene

---

class: center, middle, inverse
# .logo_small[!] - Q&A

# .charlie[!]
