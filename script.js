window.addEventListener('load', () => {
//Estanshiate DOM variables on load
  const skillsContainer = document.getElementById('skills-container')
  const skills = skillsContainer.querySelectorAll('.skills__skill')

  skills.forEach((skill) => {
    // Generate a random color for the skill
    const randomColor = getRandomColor()
    skill.dataset.originalColor = randomColor
    skill.style.backgroundColor = randomColor

    // Event listeners for hover events
    skill.addEventListener('mouseenter', () => {
      const randomHoverColor = getRandomColor()
      skill.style.backgroundColor = randomHoverColor
    })

    skill.addEventListener('mouseleave', () => {
      skill.style.backgroundColor = skill.dataset.originalColor
    })
  })
})

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
