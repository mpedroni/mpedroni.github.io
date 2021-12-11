const links = document.querySelectorAll('.menu li a');

function getActiveLink(event) {
  const hash = event.currentTarget.location.hash;

  links.forEach(link => {
    link.classList[link.hash === hash ? 'add' : 'remove']('active');

    if(!hash) 
      links.item('#about').classList.add('active');
  })
};

window.addEventListener('hashchange', getActiveLink);
window.addEventListener('load', getActiveLink);
