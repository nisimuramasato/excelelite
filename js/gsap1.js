function animateOnView(className) {
  const target = document.querySelector(`.${className}`);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(target, {
          duration: 3,
          x: 0,
          opacity: 1,
          ease: "power2.out"
        });
        observer.unobserve(target);
      }
    });
  });
  observer.observe(target);
}

// 実行する対象を指定
animateOnView("text-display-title1");
animateOnView("text-display-title2");
animateOnView("text-display-title3");
animateOnView("text-display-title4");
animateOnView("text-display-title5");
animateOnView("text-display-title6");
animateOnView("text-display-title7");


