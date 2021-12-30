(() => {
  const articles = document.querySelectorAll("article");

  function animateArticles() {
    const viewportHeight = visualViewport.height + visualViewport.pageTop;

    articles.forEach(article => {
      if (article.offsetTop < viewportHeight)
        article.classList.add('card--animate');
    })
  }

  window.addEventListener('scroll', animateArticles)
  window.addEventListener('load', animateArticles)
})()