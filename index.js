let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for ( let i = 0; i < shapes.length; ++1) {
    // swope the direct of the movement for the odd shapes
    const isOdd = i % 2 !== 0
    const boolInt = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * boolInt}, ${y * boolInt})`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
  document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault()
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
    // show loading when contact is clicked
  loading.classList += " modal__overlay--visible"

  emailjs
    .sendForm(
      'service_jjpj0lw',
      'template_ar8rarg',
      event.target,
      'lmMb80eEtqgs78bUu'
    ) .then(() => {
      loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible"
      console.log('this worked')
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on Robinson.xori@gmail.com"
      )
    })
}

function toggleModal() {
  if (isModalOpen) {
    // if modal is open close it
    isModalOpen = false
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true
  document.body.classList += " modal--open"
}