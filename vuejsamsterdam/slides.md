class: center, middle, inverse
# Vue.js amsterdam

# .logo5[![Vue.js Amsterdam logo](./logo_vuejs_xxx.png)]

February 14-15th

---

# .logo1[![Vue.js Amsterdam logo](./logo_vuejs_xxx.png)] - Day 1

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

Retour sur l'année 2018

- Vue CLI 3
  - Web component natif avec la CLI
- Version 2.6
  - Nouvelle écriture pour les slot / slot-scoped
- Popularité nombre de dl sur npm / cdn
  - 700k utilisateur actif par semaine du dev tool chrome
  - 3.3M de DL sur npm / mois
  - 461M de hit sur jsDlvr / mois (la moitié de JQuery)

Année 2019

- Version 3.0
  - Marjoritairemetn compatible avec 2.X ou alors outils pour faciliter la migration
  - Breaking change soumis au travers de RFC (request for comments) pour écouter la communauté

---

# Guillaume Chau - Hot Vue Topic

Presentation SSR
Etat des lieux avant 2.6
- avantages pour le reload
- limité aux composants directs du router
Nouveauté autour de la 2.6
- Tous les composants peuvent déclarer une méthode ServerPrefectch pour faciliter le SSR
- acces au this du composant

---

# Tim Benniks - Vue.js for L'oreal, a case study

Choix d'un backend en .Net [SiteCore](https://www.sitecore.com/fr-fr)

Et Vue.JS pour le front end. SiteCore fonctionne beaucoup au travers de composant web chacun est écrit en Vue.JS dont la force est de proposer facilement une alternative d'un composant sans JS pour toucher tout les périphériques.

Loreal website
Case study of a big website

Merge 3000+ website from aquisitions -> 800+
Mise en commun des stacks et des KPIs
Stack: sitecore / azure / cloudflare
Atomic design ?
Le gars fait des composants pour ses ganeces en garentissant la qualité l'accessibilité et que ca marche sans JS
L'intégration avec sitecore progresse bien.

---

# Jen Looper - NativeScript-Vue + ML = The Great MiniBar Challenge: MixoLogy

Stack Technique:

- [Native Scripts Vue](https://nativescript-vue.org/) pour faire une application mobile multi-plateforme à partir de Vue.JS
- Base de données avec [FireBase](https://firebase.google.com/),
- [Kaggle](https://www.kaggle.com/) pour de l'IA pour connaitre les ingrédients les plus utilisés dans les recettes.
- [TextGenrnn](https://github.com/minimaxir/textgenrnn)
- Beaucoup de photo de bouteilles d'alcool pour reconnaitre le bourbon de la vodka disponible dans un mini bar de chambre d'hotel

Jen looper - founder of vuevixen
Nativescript - vue + machine learning
Kaggle !
firebase marche avec native script et tensorflow
tensorflow for poets
mobilenet
textgenrnn (aiweirdeness)


---

# Filip Rakowski - Modern Web Apps Performance Tricks with PWA and Vue.js

- [Bundlephobia](https://bundlephobia.com/)
- [Npm-Size](https://www.npmjs.com/package/npm-size)
- Component Lazy loading
  - import X from Y ==> const X = () => import('Y')

---

# Maya Shavin - Media for everyone - how to make your Vue Apps accessible for all users

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

---

# Damian Dulisz - Composing components

When to use props or slots ?


---

# Nader Dabit - Full Stack Vue in the Era of Serverless Computing

Talk about Amplify framework of Amazon and serverless application.

---

# Jacob Schatz - Phenomenal design patterns in Vue using Vuex with Spiders

Talk about patterns in Vue with Vuex :

- command
- stategy

vuecommander.com
jacobschatz.com/vue-bdp.html

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

Vue CLI 3.0
- plugins replace templates
les plugins sont modulaires installable et updatables après la création du projet.
séparation vuecli et vue cli service
Develop a Vue CLI plugin
- generator : creates/modify files, alter configuration
- prompts : user interactions using inquirer.js
- service : configure webpack using webpack-chain
- gui integration : Adds widgets to the UI of vue cli, for example to launch tasks with arguments.

cli-vuejs.org

---

# Alex Kyriakidis & Rolf Haug - The majesty of vue.js

Static site generation
...to avoid jumping content
Google bot use chrome 41, no ES6
static site can be crawled.
SSR is an answer but,
pure static is serverless, (staticgen.com nuxt can generate a static website)
- almost free
- super performant

Deployment:
* check netlify

---

# Sean Larkin - Everything's a plugin: Understanding webpack from the inside out

* check trivago
- based on tapable
- all webpack is made of plugin
* astexplorer.net
* check webpack.academy
* check webpack 5

---

# Eduardo San Martin Morote - Make your Vue apps Lighter by being lazy

Code splitting with webpack
- use dynamic import
- use webpackPrefetch/webpackPreload
- use vuetify webpack plugin
- lazy load routes
* Async component factory to handle the loader show/hide nicely
- Vue-Promised can be a solution

* check gridsome

---

# Thorsten Linusborg - Vue CLI – How to write components with it

(vue.js core team)
Building Libraries with vue-cli
Best practices and recommendations
- move src to demo
- make a new src/index.js

---

## Day 2 - evening
Time | Speaker(s) | Title
-- | -- | --
14:30 | [Sébastien](https://twitter.com/atinux) & [Alexandre](https://twitter.com/_achopin) Chopin (Nuxt.js Chopin Brothers) | Nuxt.js 2019 (Creators of Nuxt.js)
15:05 | [Roman Kuba](https://twitter.com/Codebryo) | Next Level Jest Testing with Vue.js (Vue.js Expert at Codeship)
16:45 | [Filipa Lacerda](https://twitter.com/FilipaLacerda) | [How we learned the hard why following a flux pattern matters and how to avoid other mistakes in state management.](https://slides.com/filipalacerda/vuejs-amsterdam) (Senior Frontend Engineer at Gitlab)
17:20 | [Callum Macrae](https://twitter.com/callumacrae) | Accesssibility with Vue.js (Vue.js Core Team & Author of Vuejs: Up and Running)
17:55 | [Chris Fritz](https://twitter.com/chrisvfritz) | [Visualizations using SVG, Canvas, and WebGL in Vue](https://fritz.netlify.com/slides/viz-in-vue/) (Vue.js Core Team & Vue News Podcast)

---

### Filipa Lacerda : Vuex Pattern (senior front-end [@GitLab](https://twitter.com/GitLab) [@FilipaLacerda](https://twitter.com/FilipaLacerda))

Définition d'un pattern a respercter pour tous les developper front end lors de l'utilisation de Vuex.

---

# .logo1[![Vue.js Amsterdam logo](./logo_vuejs_xxx.png)] - Conclusion

- human sized events
- very easy to meet the speakers
