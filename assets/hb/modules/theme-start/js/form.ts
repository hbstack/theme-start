(() => {
  const form = document.querySelector<HTMLFormElement>('.hb-start-search-form')
  const input = document.querySelector<HTMLInputElement>('.hb-start-search-input')
  const engines = document.querySelectorAll<HTMLElement>('.hb-start-search-engine')
  const toggle = document.querySelector<HTMLElement>('.hb-start-search-engine-toggle')

  if (form === null || engines === null) {
    return
  }

  input?.focus()

  const activeEngine = (engine: HTMLElement): void => {
    engines.forEach((el) => {
      el.classList.remove('active')
    })
    engine.classList.add('active')
    form.setAttribute('action', engine.getAttribute('data-url') ?? '')
    input?.setAttribute('name', engine.getAttribute('data-input-name') ?? 'q')
    toggle.innerHTML = engine.querySelector('svg')?.outerHTML
  }

  engines.forEach((el) => {
    el.addEventListener('click', () => {
      activeEngine(el)
    })
  })
})()
