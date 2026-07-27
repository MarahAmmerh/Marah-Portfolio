// Theme Toggle (Dark / Light Mode)
const themeButton = document.getElementById("themeToggle");
let dark = false;

if (themeButton) {
    themeButton.onclick = () => {
        if (!dark) {
            // Dark Mode
            document.documentElement.style.setProperty("--bg", "#0B1120");
            document.documentElement.style.setProperty("--card", "#1F2937");
            document.documentElement.style.setProperty("--text", "#E5E7EB");
            document.documentElement.style.setProperty("--gray", "#9CA3AF");
            document.documentElement.style.setProperty("--nav", "rgba(17,24,39,.9)");
            document.documentElement.style.setProperty("--glass-border", "rgba(255,255,255,0.08)");
            document.documentElement.style.setProperty("--gradient-hero", "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.06), rgba(34,211,238,0.04))");
            themeButton.innerHTML = "☀️";
        } else {
            // Light Mode
            document.documentElement.style.setProperty("--bg", "#F8FAFC");
            document.documentElement.style.setProperty("--card", "#FFFFFF");
            document.documentElement.style.setProperty("--text", "#111827");
            document.documentElement.style.setProperty("--gray", "#6B7280");
            document.documentElement.style.setProperty("--nav", "rgba(255,255,255,.9)");
            document.documentElement.style.setProperty("--glass-border", "rgba(0,0,0,0.06)");
            document.documentElement.style.setProperty("--gradient-hero", "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(168,85,247,0.04), rgba(34,211,238,0.03))");
            themeButton.innerHTML = "🌙";
        }
        dark = !dark;
    };
}

// Mobile Navigation Toggle
const hamburgerToggle = document.getElementById("hamburgerToggle");
const navLinks = document.getElementById("navLinks");

if (hamburgerToggle && navLinks) {
    hamburgerToggle.addEventListener("click", () => {
        hamburgerToggle.classList.toggle("active");
        const isOpen = navLinks.classList.toggle("active");
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    });

    // Close mobile menu when clicking any nav link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburgerToggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    });
}

// Image Lightbox
function openLightbox(imagePath) {
    let lightbox = document.getElementById("lightbox");
    let image = document.getElementById("lightbox-img");

    if (lightbox && image) {
        image.src = imagePath;
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent scrolling behind lightbox
    }
}

function closeLightbox() {
    let lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeLightbox");
    if (closeBtn) {
        closeBtn.onclick = closeLightbox;
    }

    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.onclick = (e) => {
            if (e.target === lightbox || e.target.id === "closeLightbox") {
                closeLightbox();
            }
        };
    }
});

// Close lightbox on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

// "View More" Buttons Logic for Social Posts, Stories, & Posters
const postsBtn = document.getElementById("postsBtn");
if (postsBtn) {
    let postsOpen = false;
    postsBtn.onclick = function() {
        const hiddenPosts = document.querySelectorAll(".more-posts");
        postsOpen = !postsOpen;

        hiddenPosts.forEach(post => {
            post.style.display = postsOpen ? "block" : "none";
        });

        postsBtn.innerHTML = postsOpen ? "▲ Show Less" : "▼ View More";
    };
}

const storiesBtn = document.getElementById("storiesBtn");
if (storiesBtn) {
    let storiesOpen = false;
    storiesBtn.onclick = () => {
        const hiddenStories = document.querySelectorAll(".more-stories");
        storiesOpen = !storiesOpen;

        hiddenStories.forEach(item => {
            item.style.display = storiesOpen ? "block" : "none";
        });

        storiesBtn.innerHTML = storiesOpen ? "▲ View Less" : "▼ View More";
    };
}

const postersBtn = document.getElementById("postersBtn");
if (postersBtn) {
    let postersOpen = false;
    postersBtn.onclick = () => {
        const hiddenPosters = document.querySelectorAll(".more-posters");
        postersOpen = !postersOpen;

        hiddenPosters.forEach(item => {
            item.style.display = postersOpen ? "block" : "none";
        });

        postersBtn.innerHTML = postersOpen ? "▲ View Less" : "▼ View More";
    };
}

/* ==========================================================================
   SCROLL REVEAL ANIMATION ENGINE
   ========================================================================== */
function initScrollReveal() {
    // Select ALL cards, sections, and interactive elements for staggered reveal
    const revealTargets = document.querySelectorAll(
        ".card, .skill-card, .project-card, .design-card, .resume-card, .contact-card, " +
        ".brand-project, .featured-project, .hero-text, .hero-image, " +
        ".about-text, .category-title, .design-title, .design-subtitle, .design-nav"
    );

    revealTargets.forEach(el => {
        el.classList.add("scroll-reveal");
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".scroll-reveal").forEach(el => {
        revealObserver.observe(el);
    });
}

/* ==========================================================================
   SMOOTH NAVBAR SCROLL SHADOW
   ========================================================================== */
function initNavbarScroll() {
    const nav = document.getElementById("navbar");
    if (!nav) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.08)";
            nav.style.padding = "12px 8%";
        } else {
            nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.04)";
            nav.style.padding = "16px 8%";
        }
    });
}

/* ==========================================================================
   HERO TYPING EFFECT (Animated Role Titles)
   ========================================================================== */
function initHeroTyping() {
    const heroTitle = document.querySelector(".hero-title");
    if (!heroTitle) return;

    const roles = [
        "Graphic Designer • UI/UX Designer • VR Developer • 3D Modeler",
        "Virtual Reality Specialist • Creative Director",
        "Brand Identity Designer • 3D Artist",
        "Graphic Designer • UI/UX Designer • VR Developer • 3D Modeler"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = "";

    function typeRole() {
        const fullText = roles[roleIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = fullText.substring(0, charIndex + 1);
            charIndex++;
        }

        // Preserve accent color dots by inserting spans
        heroTitle.innerHTML = currentText.replace(/•/g, '<span>•</span>');

        let typeSpeed = isDeleting ? 30 : 60;

        if (!isDeleting && charIndex === fullText.length) {
            typeSpeed = 2500; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 400;
        }

        setTimeout(typeRole, typeSpeed);
    }

    // Start typing after initial display
    setTimeout(() => {
        isDeleting = true;
        charIndex = roles[0].length;
        typeRole();
    }, 3000);
}

/* ==========================================================================
   THREE.JS 3D TASTEFUL INTERACTIVE ENGINE & EFFECTS
   ========================================================================== */

let mouseX = 0;
let mouseY = 0;
let targetMouseX = 0;
let targetMouseY = 0;

document.addEventListener("mousemove", (e) => {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// 1. THREE.JS BACKGROUND 3D PARTICLE CONSTELLATION
function init3DBackground() {
    const canvas = document.getElementById("bg3dCanvas");
    if (!canvas || typeof THREE === "undefined") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Cloud Geometry
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 85;
        positions[i + 1] = (Math.random() - 0.5) * 85;
        positions[i + 2] = (Math.random() - 0.5) * 85;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material with custom soft glowing particles
    const material = new THREE.PointsMaterial({
        color: 0x6366F1,
        size: 1.25,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating 3D Geometric Ring Grid
    const torusGeo = new THREE.TorusGeometry(18, 0.2, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0x4F46E5, wireframe: true, transparent: true, opacity: 0.12 });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torusMesh);

    // Animation Loop
    let clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Smooth Mouse Dampening
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        particles.rotation.y = elapsedTime * 0.04 + mouseX * 0.2;
        particles.rotation.x = elapsedTime * 0.02 + mouseY * 0.2;

        torusMesh.rotation.x = elapsedTime * 0.08 + mouseY * 0.25;
        torusMesh.rotation.y = elapsedTime * 0.12 + mouseX * 0.25;

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// 2. THREE.JS HERO 3D OBJECT SCENE (Interactive Floating VR & 3D Geometry)
function initHero3DScene() {
    const canvas = document.getElementById("hero3dCanvas");
    if (!canvas || typeof THREE === "undefined") return;

    const wrapper = canvas.parentElement;
    const width = wrapper.clientWidth + 100;
    const height = wrapper.clientHeight + 100;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x22D3EE, 2.2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0x4F46E5, 2.2, 50);
    purpleLight.position.set(-5, -5, 5);
    scene.add(purpleLight);

    // Central 3D VR Geometry: Wireframe Torus Knot + Metallic Core
    const knotGroup = new THREE.Group();

    const knotGeo = new THREE.TorusKnotGeometry(1.4, 0.35, 128, 32);
    const knotMat = new THREE.MeshStandardMaterial({
        color: 0x4F46E5,
        metalness: 0.8,
        roughness: 0.2,
        wireframe: true,
        emissive: 0x3730A3,
        emissiveIntensity: 0.4
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    knotGroup.add(knotMesh);

    // Inner Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(0.8, 2);
    const coreMat = new THREE.MeshPhongMaterial({
        color: 0x22D3EE,
        shininess: 100,
        transparent: true,
        opacity: 0.7,
        wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    knotGroup.add(coreMesh);

    // Floating Orbital Primitives (Spheres, Cubes, Rings)
    const floatingObjects = [];
    const geoms = [
        new THREE.SphereGeometry(0.18, 16, 16),
        new THREE.BoxGeometry(0.25, 0.25, 0.25),
        new THREE.OctahedronGeometry(0.2)
    ];

    for (let i = 0; i < 6; i++) {
        const mat = new THREE.MeshStandardMaterial({
            color: i % 2 === 0 ? 0x22D3EE : 0xA855F7,
            metalness: 0.5,
            roughness: 0.1
        });
        const mesh = new THREE.Mesh(geoms[i % geoms.length], mat);

        mesh.position.set(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 3
        );

        mesh.userData = {
            rotSpeed: (Math.random() - 0.5) * 0.02
        };

        knotGroup.add(mesh);
        floatingObjects.push(mesh);
    }

    scene.add(knotGroup);

    // Animation Loop
    let clock = new THREE.Clock();

    function animateHero() {
        requestAnimationFrame(animateHero);
        const elapsedTime = clock.getElapsedTime();

        // Rotate main knot smoothly
        knotGroup.rotation.y = elapsedTime * 0.35 + mouseX * 0.5;
        knotGroup.rotation.x = elapsedTime * 0.2 + mouseY * 0.5;

        coreMesh.rotation.y = -elapsedTime * 0.5;

        // Animate floating orbital objects
        floatingObjects.forEach(obj => {
            obj.position.x += Math.sin(elapsedTime + obj.position.y) * 0.003;
            obj.position.y += Math.cos(elapsedTime + obj.position.x) * 0.003;
            obj.rotation.x += obj.userData.rotSpeed;
            obj.rotation.y += obj.userData.rotSpeed;
        });

        renderer.render(scene, camera);
    }

    animateHero();
}

// 3. INTERACTIVE ELEGANT 3D MOUSE PARALLAX & TILT ON CARDS (with Shimmer)
function initCard3DTilt() {
    const cards = document.querySelectorAll(".profile-card-3d, .project-card, .skill-card, .brand-project, .card");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}

// Initialize all Effects when page loads
window.addEventListener("DOMContentLoaded", () => {
    // Initialize Scroll Reveal Animations
    initScrollReveal();

    // Initialize Navbar Scroll Effect
    initNavbarScroll();

    // Initialize Hero Typing Effect
    initHeroTyping();

    // Initialize Three.js 3D Effects
    setTimeout(() => {
        if (typeof THREE !== "undefined") {
            init3DBackground();
            initHero3DScene();
            initCard3DTilt();
            console.log("Three.js Tasteful 3D Interactive Engine Initialized Successfully ✨");
        }
    }, 100);

    console.log("Premium Interactive Portfolio Engine Loaded 🚀");
});
