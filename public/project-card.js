const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    const projectLink = card.querySelector('a').href;
    window.location.href = projectLink;
  });
});
