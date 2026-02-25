gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
});

window.addEventListener("DOMContentLoaded", () => {
  const ctx = gsap.context(() => {

    /* ================= HERO TIMELINE ================= */

    const tl = gsap.timeline();

    tl.from(".header", {
      y: -80,
      opacity: 0,
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

    tl.from(
      ".dramatic",
      {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
      "-=0.5"
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

    tl.from(
      ".hero-btn",
      {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    );

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
          backgroundColor: "rgba(10, 10, 18, 0.85)",
          backdropFilter: "blur(12px)",
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

  // Cleanup futuro (SPA / React compatível)
  window.addEventListener("beforeunload", () => {
    ctx.revert();
  });
});

/* ================= MENU ================= */

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    toggle.classList.toggle("toggle-active");
  });
}

/* ================= NAV HOVER ================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      y: -3,
      color: "#ffffff",
      textShadow: "0 0 15px rgba(255,61,90,0.6)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      y: 0,
      color: "rgba(255,255,255,0.7)",
      textShadow: "0 0 0px rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

});