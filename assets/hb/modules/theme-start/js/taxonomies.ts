(() => {
  const apps = document.querySelectorAll('.hb-start-app')
  const taxonomies = document.querySelectorAll<HTMLElement>(
    '.hb-start-app-taxonomy'
  )
  if (taxonomies === null) {
    return
  }
  const active = (item: HTMLElement): void => {
    taxonomies.forEach((el) => {
      // change the state of tabs
      if (el !== item) {
        el.classList.remove('active')
        el.setAttribute('aria-selected', 'false')
      }
      item.classList.add('active')
      item.setAttribute('aria-selected', 'true')
      // show and hide apps
      const parent = item.getAttribute('data-id')
      apps.forEach((app) => {
        if (parent !== '' && app.getAttribute('data-parent') !== parent) {
          app.classList.add('inactive')
        } else {
          app.classList.remove('inactive')
        }
      })
    })
  }

  taxonomies.forEach((el) => {
    el.addEventListener('click', (e) => {
      active(el)
    })
  })
})()
