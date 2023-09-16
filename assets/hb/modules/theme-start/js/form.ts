(() => {
  const form = document.querySelector<HTMLFormElement>('.hb-start-search-form')
  const input = document.querySelector<HTMLInputElement>('.hb-start-search-input')
  const engines = document.querySelectorAll<HTMLElement>('.hb-start-search-engine')
  const toggle = document.querySelector<HTMLElement>('.hb-start-search-engine-toggle')
  const resultTypes = document.querySelectorAll<HTMLElement>('.hb-start-search-result-type')

  if (form === null || engines === null) {
    return
  }

  const remember = (id: string): void => {
    localStorage.setItem('engine', id)
  }

  const activeEngine = (engine: HTMLElement): void => {
    engines.forEach((el) => {
      el.classList.remove('active')
    })
    engine.classList.add('active')
    toggle.innerHTML = engine.querySelector('svg')?.outerHTML
    const engineID = engine.getAttribute('data-id')
    remember(engineID)
    document.querySelectorAll('.hb-start-search-result-types').forEach((el) => {
      if (el.getAttribute('data-engine') !== engineID) {
        el.classList.add('d-none')
      } else {
        el.classList.remove('d-none')
        // active the first result type.
        activeResultType(el.querySelector('.hb-start-search-result-type'))
      }
    })
  }

  const hiddenInputs: Record<string, HTMLInputElement> = {}

  const setHiddenInput = (key: string, item: HTMLElement): void => {
    const prefix = `data-${key}hidden-input-`
    const name = item.getAttribute(`${prefix}name`) ?? ''
    const value = item.getAttribute(`${prefix}value`) ?? ''

    let input: null | HTMLInputElement = null
    if (key in hiddenInputs) {
      input = hiddenInputs[key]
    }
    if (name === '') {
      if (input !== null) {
        input.remove()
        /* eslint-disable */
        delete (hiddenInputs[key])
      }
      return
    }

    if (input === null) {
      input = document.createElement('input')
      input.type = 'hidden'
      hiddenInputs[key] = input
      form.appendChild(input)
    }
    input.name = name
    input.value = value
  }

  const setResultTypeInput = (item: HTMLElement): void => {
    form.setAttribute('action', item.getAttribute('data-url') ?? '')
    input.name = item.getAttribute('data-input-name')
    setHiddenInput('', item)
    setHiddenInput('extra-', item)
  }

  const activeResultType = (item: HTMLElement): void => {
    const items = item.closest('.hb-start-search-result-types')?.querySelectorAll('.hb-start-search-result-type')
    items?.forEach((el) => {
      el.classList.remove('active')
    })
    item.classList.add('active')
    setResultTypeInput(item)
  }

  // focus the input on page loaded.
  input?.focus()

  // load the last engine.
  const engineID = localStorage.getItem('engine')
  if (engineID !== null) {
    const engine = document.querySelector<HTMLElement>(`.hb-start-search-engine[data-id="${engineID}"]`)
    if (engine !== null) {
      activeEngine(engine)
    }
  }

  engines.forEach((el) => {
    el.addEventListener('click', () => {
      activeEngine(el)
    })
  })

  resultTypes.forEach((el) => {
    el.addEventListener('click', () => {
      activeResultType(el)
    })
  })
})()
