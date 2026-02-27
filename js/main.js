gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
});


window.addEventListener("DOMContentLoaded", () => {
  const ctx = gsap.context(() => {

    /* ================= HERO TIMELINE ================= */

    const tl = gsap.timeline();

    gsap.set(".header", { y: -80, opacity: 0 });

    tl.to(".header", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(
      ".title-line",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    );

    /* 🔥 NOVA ANIMAÇÃO PROFISSIONAL */

    tl.fromTo(
      ".dramatic",
      {
        y: 80,
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)"
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "expo.out"
      },
      "-=0.6"
    );

    tl.to(
      ".dramatic-glow",
      {
        opacity: 0.6,
        duration: 1.4,
        ease: "power2.out",
      },
      "-=1"
    );

    tl.from(
      ".hero-text",
      {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
      },
      "-=0.6"
    );

    gsap.to(".dramatic", {
      textShadow: "0 0 25px rgba(255,61,90,0.6)",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut"
    });

    /* ================= VIDEO ================= */

    gsap.from(".video-wrapper", {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 1.4,
      ease: "power3.out",
    });

    gsap.to(".video-wrapper", {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".video-glow", {
      opacity: 1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* ================= HEADER SCROLL ================= */

    ScrollTrigger.create({
      id: "header-scroll-style",
      start: 50,
      onEnter: () => {
        gsap.to(".header", {
          backgroundColor: "rgba(15, 15, 25, 0.75)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          paddingTop: 12,
          paddingBottom: 12,
          duration: 0.4,
        });
      },
      onLeaveBack: () => {
        gsap.to(".header", {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          borderBottom: "1px solid rgba(255,255,255,0)",
          boxShadow: "none",
          paddingTop: 24,
          paddingBottom: 24,
          duration: 0.4,
        });
      },
    });

    /* ================= HERO EVAPORAR ================= */

    gsap.set(".evaporate", {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    });

    gsap.to(".evaporate", {
      opacity: 0,
      y: -120,
      filter: "blur(12px)",
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        id: "hero-evaporation",
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
        onLeaveBack: () => {
          gsap.set(".evaporate", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            clearProps: "all",
          });
        },
      },
    });

  });  

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  window.addEventListener("beforeunload", () => {
    ctx.revert();
  });
});


/* =============================
   ENTRADAS GLOBAIS REUTILIZÁVEIS
============================= */

function animateFadeUp() {
  gsap.utils.toArray(".fade-up").forEach((el) => {
    gsap.from(el, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function animateFadeDown() {
  gsap.utils.toArray(".fade-down").forEach((el) => {
    gsap.from(el, {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}

function animateFadeLeft() {
  gsap.utils.toArray(".fade-left").forEach((el) => {
    gsap.from(el, {
      x: -120,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}

function animateFadeRight() {
  gsap.utils.toArray(".fade-right").forEach((el) => {
    gsap.from(el, {
      x: 120,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}

function animateZoomIn() {
  gsap.utils.toArray(".zoom-in").forEach((el) => {
    gsap.from(el, {
      scale: 0.6,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}

function animateZoomSoft() {
  gsap.utils.toArray(".zoom-soft").forEach((el) => {
    gsap.from(el, {
      scale: 0.85,
      opacity: 0,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}

function animateBlurIn() {
  gsap.utils.toArray(".blur-in").forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 60,
        filter: "blur(12px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  });
}

function animateRotateIn() {
  gsap.utils.toArray(".rotate-in").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 60,
      rotate: 8,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}

/* =============================
   INICIALIZAÇÃO
============================= */

document.addEventListener("DOMContentLoaded", () => {
  animateFadeUp();
  animateFadeDown();
  animateFadeLeft();
  animateFadeRight();
  animateZoomIn();
  animateZoomSoft();
  animateBlurIn();
  animateRotateIn();
});



/* ================= MENU MOBILE ================= */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    toggle.classList.toggle("toggle-active");
  });
});

