class: center, middle, inverse
# Vuetify

# .logo[!]

vuetifyjs.com

---
class: middle, inverse

# Démo

- [Espacement](https://codepen.io/erenard/pen/OJVWpQo?editable=true&editors=111)
- [Alerts](https://codepen.io/erenard/pen/poJReLM?editable=true&editors=101)
- [Grid](https://codepen.io/erenard/pen/BaNpWqv?editable=true&editors=101)
- [Modal Form](https://codepen.io/erenard/pen/JjdEWxJ?editors=1010)

---

# Retour d'expérience

.good[
+ Grosse vélocité de developement.
>  + le PO pioche dans les composants, et peu même bidouiller sur CodePen
>  + le Dev se concentre sur le code business,
>  + le Dev n'a pas besoin de tester le framework,
>  + le Dev n'a pas besoin de faire du CSS,
]

.bad[
- Customization limitée:
>  - le style est très proche de google material
>  - personnaliser certaines propriétés CSS n'est pas possible
>  - ensemble de composants de haut niveau, pas vraiment un framework pour faire ses propres composants
]

.arrow[
- Les composants *container* permettent de tout integrer.
- L'utilisation intelligente du v-model rends cette integration [dynamique](https://vuetifyjs.com/en/components/data-tables#filterable-columns).
]

---

# Cas d'exemple: TcModal

.good[
Le composant TcModal gère:
+ le backdrop
+ la carte centrée et modale
+ un boutton 'fermer' en position absolue en haut à droite
+ de nombreuses classes CSS sont déja écrites pour ajouter titre, tables, sections...
]

.bad[
- ces classes CSS imposent une connaissance de la part du dev. du DOM attendu pour ces classes
- le CSS éxistant est transverse à l'application
- les customisations nécéssitent des surcharges `/deep/`
- les customisations demandées recement (voir permissions) nécéssitent du CSS custom doivent être recopiées dans chaque fois
]

.arrow[
A faire:
- créer des taches de Dev + Design pour fabriquer les sous-composants nécéssaires
- Figer le style visuel de ces composants et refuser les customizations
]

---

class: center, middle, inverse
# .logo_small[!] - Q&A
