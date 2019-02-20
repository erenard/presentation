import './style.css'
import slides from './slides.md'

var slideshow = remark.create({
  ratio: '16:9',
  sourceUrl: slides,
  highlightLines: true,
  highlightSpans: true,
  touch: false,
  click: false,
  scroll: false,
  countIncrementalSlides: false
})
setTimeout(function () {
  var timePeriod = "2013-01-01 2018-01-01"
  var charts = document.getElementsByClassName('chart')
  trends.embed.renderExploreWidgetTo(
    charts[0],
    "TIMESERIES",
    {
      "comparisonItem": [
        { "keyword": "bower", "geo": "", "time": timePeriod },
        { "keyword": "npm", "geo": "", "time": timePeriod },
        { "keyword": "yarn", "geo": "", "time": timePeriod }
      ],
      "category": 5,
      "property": ""
    },
    {
      "exploreQuery": "cat=5&date=today%205-y&q=bower,npm,yarn",
      "guestPath": "https://trends.google.fr:443/trends/embed/"
    }
  )
  trends.embed.renderExploreWidgetTo(
    charts[1],
    "TIMESERIES",
    {
      "comparisonItem": [
        { "keyword": "grunt", "geo": "", "time": timePeriod },
        { "keyword": "gulp", "geo": "", "time": timePeriod },
        { "keyword": "webpack", "geo": "", "time": timePeriod },
        { "keyword": "rollup", "geo": "", "time": timePeriod }
      ],
      "category": 5,
      "property": ""
    },
    {
      "exploreQuery": "cat=5&date=today%205-y&q=grunt,gulp,webpack,rollup",
      "guestPath": "https://trends.google.fr:443/trends/embed/"
    }
  )
}, 500)

export default slideshow
