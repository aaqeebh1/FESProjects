let isModalOpen = false;
let contrastToggle = false
const scaleFactor = 1 / 20



function moveBackground(event) {
  const shape = document.getElementsByClassName('shape')
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  
  for (let i = 0; i < shape.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shape[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }

}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-mode"
    }else {
        document.body.classList.remove("dark-mode")
    }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_gwblbeu",
      "template_ai8vrne",
      event.target,
      "3x3ysnv9MM0dQ2_7m"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The Email service is temporarliy unavailable. Please contact me directly on aaqeebh1@googlemail.com"
      );
    });
}

function toggleModal () {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = true
    document.body.classList += " modal__open"
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}