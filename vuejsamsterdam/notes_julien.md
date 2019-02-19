# VueJS Amsterdam 14-15 février 2019

## Day 1 : part 1

### Evan You : Introduction (créateur de VueJS [@youyuxi](https://twitter.com/youyuxi))

Retour sur l'année 2018

- Vue CLI 3
- Version 2.6
- Web component natif avec la CLI
- Popularité nombre de dl sur npm / cdn
  - 700k utilisateur actif par semaine du dev tool chrome
  - 3.3M de DL sur npm / mois
  - 461M de hit sur jsDlvr / mois (la moitié de JQuery)

Année 2019

- Version 3.0
  - Marjoritairemetn compatible avec 2.X ou alors outils pour faciliter la migration
  - Breaking change soumis au travers de RFC (request for comments) pour écouter la communauté

### Guillaume Chau : Hot Vue Topic (VueJS Core Team [@akryum](https://twitter.com/akryum))

Nouveauté autour de la 2.6

- Tous les composants peuvent déclarer une méthode ServerPrefectch pour faciliter le SSR
- Nouvelle écriture pour les slot / slot-scoped

[Slides](https://slides.com/akryum/vue-26-ssr-revolution#/)

### Tim Benniks : Harmonisation des technos chez L'Oréal (Senior @Valtech [@timbenniks](https://twitter.com/timbenniks))

Choix d'un backend en .Net [SiteCore](https://www.sitecore.com/fr-fr)

Et Vue.JS pour le front end. SiteCore fonctionne beaucoup au travers de composant web chacun est écrit en Vue.JS dont la force est de proposer facilement une alternative d'un composant sans JS pour toucher tout les périphériques.

### Jen Looper : Generateur de cocktail (fondatrice de Vixens [@jenlooper](https://twitter.com/jenlooper))

Stack Technique:

- [Native Scripts Vue](https://nativescript-vue.org/) pour faire une application mobile multi-plateforme à partir de Vue.JS
- Base de données avec [FireBase](https://firebase.google.com/),
- [Kaggle](https://www.kaggle.com/) pour de l'IA pour connaitre les ingrédients les plus utilisés dans les recettes.
- [TextGenrnn](https://github.com/minimaxir/textgenrnn)
- Beaucoup de photo de bouteilles d'alcool pour reconnaitre le bourbon de la vodka disponible dans un mini bar de chambre d'hotel

[Présentation](https://slides.com/telerikdevrel/minibar#/)

### Filip Rakowski : Performance Tricks (fondateur de VueStoreFront [@filrakowski](https://twitter.com/filrakowski))

- [Bundlephobia](https://bundlephobia.com/)
- [Npm-Size](https://www.npmjs.com/package/npm-size)
- Component Lazy loading
  - import X from Y ==> const X = () => import('Y')

### Sara Vieira : Vue.JS / Apollo / GraphQL => Magic ([@nikkitaftw](https://twitter.com/nikkitaftw))

[Slides](https://vue-apollo-magic.now.sh/#0)

## Day 1 : part 2

### Maya Shavin : m16y - How to make your media accessible for all users (FrontEnd developer [@Cloudinary](https://twitter.com/Cloudinary) [@MayaShavin](https://twitter.com/MayaShavin))

[Slides](https://www.slideshare.net/dpnminh/m16y-how-to-make-your-media-accessible-for-all-users)

- Photophobia
- Color perception
  - Deuteranopia
  - Tritanopia
  - Achromatopsia

### Nathalia Tepluhina : Desktop apps with Vue (senior front-end [@GitLab](https://twitter.com/GitLab) [@N_Tepluhina](https://twitter.com/N_Tepluhina))

Electron is not the only solution to make desktop app with HTML / CSS / JS

[Slides](https://www.slideshare.net/NataliaTepluhina/desktop-apps-with-vue)

### Damian Dulisz : Composing components (Vue.JS core team [@DamianDulisz](https://twitter.com/DamianDulisz))

When to use props or slots ?

[Slides](https://github.com/shentao/composing-components/blob/master/composing-components.pdf)

### Natalia Tepluhina & Jen Looper : Latest news on Vue Vixens

### Nader Dabit : Full Stack Vue in the Era of Serverless Computing (developer [@awscloud](https://twitter.com/awscloud) [@dabit3](https://twitter.com/dabit3))

[Slides](https://www.dropbox.com/sh/2m6o3ba1i9hra1n/AABkIpgBA5jXW5jz-cTKCxJja?dl=0)

Talk about Amplify framework of Amazon and serverless application.

### Jacob Schatz : Phenomenal design patterns in Vue using Vuex with Spiders (Staff developer [@Gitlab](https://twitter.com/Gitlab) [@jakecodes](https://twitter.com/jakecodes))

Talk about patterns in Vue with Vuex :

- command
- stategy

## Day 2 : part 1

### Guillaume Chau : How to craft a Vue CLI Plugin (VueJS Core Team [@akryum](https://twitter.com/akryum))

How to create Vue-CLI plugin
[Slides](https://slides.com/akryum/create-a-vue-cli-plugin#/)

### Eduardo San Martin Morote : Make your Vue apps Lighter by being lazy (VueJs Core Team [@posva](https://twitter.com/posva))

[Slides](https://slides.com/posva/making-your-vue-apps-faster-by-being-lazy#/)

## Day 2 : part 2

### Filipa Lacerda : Vuex Pattern (senior front-end [@GitLab](https://twitter.com/GitLab) [@FilipaLacerda](https://twitter.com/FilipaLacerda))

Définition d'un pattern a respercter pour tous les developper front end lors de l'utilisation de Vuex.

[Slides](https://slides.com/filipalacerda/vuejs-amsterdam#/)
