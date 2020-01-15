function makeElement(type,body,...cssClasses) {
  let i = document.createElement(type)
  i.innerText = body
  let classes = cssClasses[0].split(' ')
  for (let x of classes) {
    i.classList.add(x)
  }
  return i
}

let timeline = data.timeline
for (x in timeline) {
  const content = `
    <p class="title">${timeline[x].name}</p>
    <p class="period">${timeline[x].period}</p>
  `
  const wrapper = makeElement('div',null,'timelineEntry')
  wrapper.innerHTML = content
  const dom = document. querySelector('.timeline')
  dom.appendChild(wrapper);
}
