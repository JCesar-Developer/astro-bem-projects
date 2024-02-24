function reveal() {
  const elements = document.querySelectorAll('.reveal');

  elements.forEach( element => {
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    const isVisible = ( revealTop < window.innerHeight - revealPoint );

    if (isVisible) element.classList.add('active');
  });
}

export default reveal;