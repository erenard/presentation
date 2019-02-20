import './style.css'
import slides from './slides.md'

export default remark.create({
  ratio: '16:9',
  sourceUrl: slides,
  highlightLines: true,
  highlightSpans: true,
  touch: false,
  click: false,
  scroll: false,
  countIncrementalSlides: false
})
