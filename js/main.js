"use strict";
const games = [
    {
        title: "Ruff Delivery",
        description: "A delivery logistics game where you manage routes and deliveries.",
        link: "/RuffDeliveryProgramming"
    }
];
const printItems = [
    { title: "Printed Item 1" },
    { title: "Printed Item 2" },
    { title: "Printed Item 3" },
    { title: "Printed Item 4" },
    { title: "Printed Item 5" },
    { title: "Printed Item 6" }
];
const pages = {
    home: {
        title: "Justin's Stuff and Things",
        windowTitle: "Hello World (But mostly dogs)",
        render: () => `
            <div class="page">
                <h1>Justin's Stuff and Things</h1>
                <div class="profile-section">
                    <div class="photo-frame"><svg width="100" height="120" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="120" fill="#fff"/>
                            <ellipse cx="50" cy="72" rx="26" ry="18" fill="none" stroke="#333" stroke-width="2"/>
                            <ellipse cx="50" cy="38" rx="18" ry="15" fill="none" stroke="#333" stroke-width="2"/>
                            <polygon points="28,24 20,15 32,28" fill="none" stroke="#333" stroke-width="2"/>
                            <polygon points="72,24 80,15 68,28" fill="none" stroke="#333" stroke-width="2"/>
                            <circle cx="42" cy="35" r="3" fill="#333"/>
                            <circle cx="58" cy="35" r="3" fill="#333"/>
                            <ellipse cx="50" cy="48" rx="5" ry="4" fill="none" stroke="#333" stroke-width="1.5"/>
                            <circle cx="50" cy="49" r="2" fill="#333"/>
                            <path d="M44 54 Q50 58 56 54" fill="none" stroke="#333" stroke-width="1.5"/>
                            <line x1="30" y1="88" x2="25" y2="108" stroke="#333" stroke-width="2"/>
                            <line x1="40" y1="90" x2="38" y2="110" stroke="#333" stroke-width="2"/>
                            <line x1="60" y1="90" x2="62" y2="110" stroke="#333" stroke-width="2"/>
                            <line x1="70" y1="88" x2="75" y2="108" stroke="#333" stroke-width="2"/>
                            <path d="M76 70 Q88 62 85 50" fill="none" stroke="#333" stroke-width="2"/>
                        </svg></div>
                    <div class="info-panel">
                        <p><span class="info-label">Name:</span> Justin Balcom</p>
                        <p><span class="info-label">Skill Set:</span> Consultant / Analyst / IT / Project Manager / Trainer / Book Keeper</p>
                        <p><span class="info-label">Location:</span> Nova Scotia, Canada</p>
                    </div>
                </div>
                <div class="links-section">
                    <div class="links-title">Quick Links</div>
                    <div class="links-grid">
                        <a href="#games" class="link-btn" data-nav="games">Games</a>
                        <a href="#3dprints" class="link-btn" data-nav="3dprints">3D Prints</a>
                        <a href="#about" class="link-btn" data-nav="about">About</a>
                        <a href="#media" class="link-btn" data-nav="media">Media</a>
                    </div>
                </div>
            </div>
            <div class="footer">&copy; 2026 | Best viewed with Netscape Navigator, back in 1998.</div>
        `
    },
    games: {
        title: "Games",
        render: () => `
            <div class="page">
                <a href="#home" class="nav-link">Back to Home</a>
                <h1>My Games</h1>
                <div class="game-list">
                    ${games.length > 0 ? games.map(game => `
                        <div class="game-item">
                            <div class="game-title">${game.title}</div>
                            <div class="game-desc">${game.description}</div>
                            <a href="${game.link}" class="game-link" target="_blank">Play Game</a>
                        </div>
                    `).join('') : '<div class="game-item"><p>No games yet!</p></div>'}
                </div>
            </div>
        `
    },
    "3dprints": {
        title: "3D Prints Gallery - My Stuff",
        windowTitle: "3D Prints",
        render: () => `
            <div class="container-xp">
                <div class="title-bar-xp">
                    <div class="title-bar-text">3D Prints</div>
                    <div class="title-bar-controls">
                        <button>_</button>
                        <button class="close-btn" title="Close">X</button>
                    </div>
                </div>
                <div class="content-xp">
                    <a href="#home" class="nav-link">Back to Home</a>
                    <h1 style="color: #003399; border-bottom: 1px solid #7f9db9; font-family: Tahoma, sans-serif;">3D Prints Gallery</h1>
                    <div class="gallery-grid-xp">
                        ${printItems.map(item => `
                            <div class="gallery-item-xp">
                                <div class="gallery-placeholder-xp">[Photo]</div>
                                <div class="gallery-caption-xp">${item.title}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="footer-xp">&copy; 2026 | Best viewed with Netscape Navigator, back in 1998.</div>
            </div>
        `
    },
    about: {
        title: "About",
        render: () => `
            <div class="page">
                <a href="#home" class="nav-link">Back to Home</a>
                <h1>About This Site</h1>
                <div class="about-section">
                    <h2>Who is Justin?</h2>
                    <p class="about-text">I'm Justin, I love to build stuff and learn new things.</p>
                </div>
                <div class="about-section">
                    <h2>What's on my site?</h2>
                    <p class="about-text"><strong>Games</strong> - Games I've created, from small experiments to full projects.<br><br><strong>3D Prints</strong> - Gallery of physical items I've designed and printed.<br><br><strong>Media</strong> - Various media resources (coming soon).</p>
                </div>
                <div class="about-section">
                    <h2>Contact</h2>
                    <p class="about-text">Feel free to reach out at Balcom@Gmail.com</p>
                </div>
            </div>
        `
    },
    media: {
        title: "Media",
        render: () => `
            <div class="page">
                <a href="#home" class="nav-link">Back to Home</a>
                <h1>Media</h1>
                <div class="media-links">
                    <a href="#comingsoon" class="media-btn" data-nav="comingsoon">Media Login</a>
                    <a href="#comingsoon" class="media-btn" data-nav="comingsoon">Media Request</a>
                    <a href="#comingsoon" class="media-btn" data-nav="comingsoon">Media List</a>
                </div>
            </div>
        `
    },
    comingsoon: {
        title: "Coming Soon",
        render: () => `
            <div class="page">
                <a href="#home" class="nav-link">Back to Home</a>
                <div class="coming-soon-box">
                    <div class="coming-soon-text">Coming Soon!</div>
                    <div class="coming-soon-sub">This feature is under development. Check back later!</div>
                </div>
            </div>
        `
    }
};
function createWindow(title, windowTitle, content, isChild = false) {
    const displayTitle = windowTitle || title;
    const closeButton = isChild ? '<button class="close-btn" title="Close">X</button>' : '<button>X</button>';
    if (title === "3D Prints Gallery - My Stuff")
        return content;
    return `
        <div class="container">
            <div class="title-bar">
                <div class="title-bar-text">${displayTitle}</div>
                <div class="title-bar-controls">
                    <button>_</button>
                    ${closeButton}
                </div>
            </div>
            <div class="content">${content}</div>
        </div>
    `;
}
function handleNavigation(hash) {
    const app = document.getElementById("app");
    if (!app)
        return;
    const pageKey = hash.replace("#", "") || "home";
    const page = pages[pageKey] || pages.home;
    const isChild = pageKey !== "home";
    const isXP = pageKey === "3dprints";
    if (isXP) {
        document.body.classList.add("xp-mode");
    }
    else {
        document.body.classList.remove("xp-mode");
    }
    const content = createWindow(page.title, page.windowTitle, page.render(), isChild);
    app.innerHTML = content;
    attachEventListeners();
}
function attachEventListeners() {
    document.querySelectorAll("[data-nav]").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            const nav = target.dataset.nav;
            if (nav) {
                window.location.hash = nav;
            }
        });
    });
    const closeButtons = document.querySelectorAll(".close-btn");
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.hash = "home";
        });
    });
}
function createVCRIntro() {
    return `
        <div class="vcr-intro" id="vcrIntro">
            <div class="vcr-device">
                <div class="vcr-wood-grain"></div>
                <div class="vcr-wood-grain-right"></div>
                <div class="vcr-main">
                    <div class="vcr-display-section">
                        <div class="vcr-display">
                            <span class="vcr-display-text" id="vcrClock">00:00</span>
                        </div>
                        <div class="vcr-indicators">
                            <div class="vcr-led" id="vcrLed"></div>
                            <div class="vcr-led timer"></div>
                            <div class="vcr-led deck"></div>
                        </div>
                    </div>
                    <div class="vcr-deck">
                        <div class="vcr-slot-area">
                            <div class="vcr-tape" id="vcrTape">
                                <div class="vcr-tape-label">80's Saturday Morning Cartoons</div>
                            </div>
                        </div>
                    </div>
                    <div class="vcr-controls-section">
                        <div class="vcr-controls-row">
                            <button class="vcr-btn" title="Stop">
                                <svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12"/></svg>
                                <span>STOP</span>
                            </button>
                            <button class="vcr-btn play-btn" id="playBtn" title="Play">
                                <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
                                <span>PLAY</span>
                            </button>
                        </div>
                        <div class="vcr-controls-row">
                            <button class="vcr-btn" title="Rewind">
                                <svg viewBox="0 0 24 24"><polygon points="5,3 13,12 5,21"/><rect x="15" y="3" width="4" height="18"/></svg>
                                <span>REW</span>
                            </button>
                            <button class="vcr-btn" title="Fast Forward">
                                <svg viewBox="0 0 24 24"><polygon points="19,3 11,12 19,21"/><rect x="5" y="3" width="4" height="18"/></svg>
                                <span>FF</span>
                            </button>
                        </div>
                        <div class="vcr-controls-row">
                            <button class="vcr-btn rec-btn" title="Record">
                                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>
                                <span>REC</span>
                            </button>
                            <button class="vcr-btn" title="Pause">
                                <svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                                <span>PAUSE</span>
                            </button>
                        </div>
                        <div class="vcr-channels">
                            <button class="vcr-channel-btn">CH-</button>
                            <button class="vcr-channel-btn">CH+</button>
                        </div>
                    </div>
                </div>
                <div class="vcr-bottom">
                    <span class="vcr-serial">MODEL: VCR-1982</span>
                    <span class="vcr-powered">HI-FI STEREO</span>
                </div>
            </div>
        </div>
        <div class="star-wipe-overlay" id="starWipeOverlay" style="display: none;">
            <div class="star-container">
                <div class="star-wipe-star"></div>
            </div>
        </div>
    `;
}
function flashClock() {
    const clock = document.getElementById("vcrClock");
    if (!clock)
        return;
    clock.style.visibility = "hidden";
    setTimeout(() => {
        clock.style.visibility = "visible";
    }, 100);
}
function startClockFlash() {
    setInterval(flashClock, 5000);
}
function playVCRAnimation() {
    return new Promise((resolve) => {
        const playBtn = document.getElementById("playBtn");
        const tape = document.getElementById("vcrTape");
        const led = document.getElementById("vcrLed");
        if (!playBtn || !tape || !led) {
            resolve();
            return;
        }
        playBtn.disabled = true;
        led.classList.add("on");
        tape.classList.add("inserting");
        setTimeout(() => {
            resolve();
        }, 1500);
    });
}
async function startStarWipe() {
    return new Promise((resolve) => {
        const overlay = document.getElementById("starWipeOverlay");
        if (!overlay) {
            resolve();
            return;
        }
        overlay.style.display = "block";
        overlay.classList.add("hiding");
        setTimeout(() => {
            overlay.classList.remove("hiding");
            overlay.style.display = "none";
            resolve();
        }, 1000);
    });
}
async function runIntroSequence() {
    const vcrIntro = document.getElementById("vcrIntro");
    const app = document.getElementById("app");
    if (!vcrIntro || !app) {
        return;
    }
    await playVCRAnimation();
    await startStarWipe();
    vcrIntro.classList.add("hidden");
    app.style.display = "block";
    window.location.hash = "home";
    localStorage.setItem("vcrIntroDismissed", "true");
}
function getDarkModeIcon(isDark) {
    if (isDark) {
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="2" width="2" height="2" fill="#FFD700"/>
            <rect x="10" y="4" width="2" height="2" fill="#FFD700"/>
            <rect x="12" y="6" width="2" height="2" fill="#FFD700"/>
            <rect x="14" y="8" width="2" height="2" fill="#FFD700"/>
            <rect x="16" y="10" width="2" height="2" fill="#FFD700"/>
            <rect x="18" y="12" width="2" height="2" fill="#FFD700"/>
            <rect x="20" y="14" width="2" height="2" fill="#FFD700"/>
            <rect x="16" y="16" width="2" height="2" fill="#FFD700"/>
            <rect x="14" y="18" width="2" height="2" fill="#FFD700"/>
            <rect x="12" y="16" width="2" height="2" fill="#FFD700"/>
            <rect x="10" y="14" width="2" height="2" fill="#FFD700"/>
            <rect x="8" y="12" width="2" height="2" fill="#FFD700"/>
            <rect x="6" y="10" width="2" height="2" fill="#FFD700"/>
            <rect x="4" y="8" width="2" height="2" fill="#FFD700"/>
            <rect x="2" y="6" width="2" height="2" fill="#FFD700"/>
            <rect x="4" y="4" width="2" height="2" fill="#FFD700"/>
            <rect x="6" y="2" width="2" height="2" fill="#FFD700"/>
            <circle cx="12" cy="12" r="6" fill="#FFD700"/>
            <circle cx="12" cy="12" r="4" fill="#FFF8DC"/>
        </svg>`;
    }
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L14 7L18 5L16 9L20 11L16 13L18 17L14 15L12 19L10 15L6 17L8 13L4 11L8 9L6 5L10 7L12 3Z" fill="#C0C0C0"/>
        <path d="M12 4L13 7L16 5L15 8L18 10L15 12L16 15L13 13L12 16L11 13L8 15L9 12L6 10L9 8L8 5L11 7L12 4Z" fill="#E8E8E8"/>
        <circle cx="12" cy="10" r="3" fill="#C0C0C0"/>
        <path d="M9 18C9 18 10 20 12 20C14 20 15 18 15 18L13 19L12 22L11 19L9 18Z" fill="#C0C0C0"/>
    </svg>`;
}
function init() {
    if (localStorage.getItem("darkMode") === "on") {
        document.body.classList.add("dark-mode");
    }
    const toggleExisting = document.getElementById("darkModeBtn");
    if (!toggleExisting) {
        const toggleBtn = document.createElement("button");
        toggleBtn.id = "darkModeBtn";
        toggleBtn.className = "dark-mode-toggle";
        toggleBtn.title = "Toggle Dark Mode";
        toggleBtn.innerHTML = getDarkModeIcon(localStorage.getItem("darkMode") === "on");
        document.body.appendChild(toggleBtn);
        toggleBtn.addEventListener("click", () => {
            const isDark = document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", isDark ? "on" : "off");
            toggleBtn.innerHTML = getDarkModeIcon(isDark);
        });
    }
    const showIntro = true;
    if (showIntro) {
        const app = document.getElementById("app");
        if (app) {
            app.style.display = "none";
        }
        document.body.insertAdjacentHTML("afterbegin", createVCRIntro());
        const playBtn = document.getElementById("playBtn");
        if (playBtn) {
            playBtn.addEventListener("click", runIntroSequence);
        }
        startClockFlash();
    }
    else {
        document.getElementById("vcrIntro")?.classList.add("hidden");
    }
    window.addEventListener("hashchange", () => handleNavigation(window.location.hash));
    handleNavigation(window.location.hash || "#home");
}
document.addEventListener("DOMContentLoaded", init);
