const progress = document.getElementById('progressBar')
const prev = document.getElementById('prevBtn')
const next = document.getElementById('nextBtn')
const steps = document.querySelectorAll('.progress-step')

let currentActive = 1 // start at step 1

next.addEventListener('click', () => {
  currentActive++ // move to next step

  // on last step
  if (currentActive > steps.length) {
    currentActive = steps.length
  }

  update() // update UI
})

prev.addEventListener('click', () => {
  currentActive-- // move to prev step

  // on first step
  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

const update = () => {
  steps.forEach((step, index) => {
    // when all steps completed
    if (currentActive === steps.length) {
      step.classList.add('completed')
      progress.classList.add('completed')
    } else {
      step.classList.remove('completed')
      progress.classList.remove('completed')
    }

    // toggling classes
    if (index < currentActive) {
      step.classList.add('active')
    } else {
      step.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  // Styling progress bar based on how many steps completed
  progress.style.width = ((actives.length - 1) / (steps.length - 1)) * 100 + '%'

  // Disabling buttons on first / last steps
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === steps.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
