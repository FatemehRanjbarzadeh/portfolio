function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* Fade on Scroll */
const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

/* Skill Progress Animation */
const skillSection = document.getElementById("skills");

if (skillSection) {
  const progresses = skillSection.querySelectorAll(".progress");

  const skillObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      progresses.forEach(bar => {
        bar.style.width = bar.dataset.percent;
      });
      skillObserver.disconnect();
    }
  }, { threshold: 0.4 });

  skillObserver.observe(skillSection);
}
