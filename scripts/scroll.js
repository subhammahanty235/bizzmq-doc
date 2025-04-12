document.querySelectorAll('.toc a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });
  