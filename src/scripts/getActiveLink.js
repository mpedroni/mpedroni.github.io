const links = document.querySelectorAll('a[href*="#"]');
const articles = document.querySelectorAll('article');

window.addEventListener('scroll', () => {
  let current = "";

  articles.forEach((article) => {
    const articleTop = article.offsetTop;

    if (scrollY >= articleTop - 150)
      current = article.getAttribute("id");
  });

  links.forEach((link) => {
    link.classList.remove('active')
    if (link.hash?.replace?.('#', '') === current) {
      link.classList.add("active");
    }
  });
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  const article = document.querySelector(`article${hash}`);

  if (article)
    window.scrollTo({
      top: article.offsetTop - 48,
    });

})
