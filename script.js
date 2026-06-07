// Data Structures for Content Injection
const siteData = {
    heroButtons: [
        { title: "Start Learning", desc: "Structured guides for beginners.", target: "learn", icon: "fa-book" },
        { title: "Snowstorm Tutorials", desc: "Master particle VFX creation.", target: "snowstorm", icon: "fa-snowflake" },
        { title: "Molang Academy", desc: "Learn the math language of Bedrock.", target: "molang", icon: "fa-calculator" },
        { title: "JSON Components", desc: "Explore technical docs and code.", target: "components", icon: "fa-code" },
        { title: "Tools", desc: "Formatters, validators, and generators.", target: "tools", icon: "fa-wrench" },
        { title: "Templates", desc: "Pre-made effects ready to use.", target: "templates", icon: "fa-copy" }
    ],
    learnCards: [
        { title: "Beginner Tutorials", desc: "Understand Addon structure and basic JSON.", difficulty: "Easy", time: "2 Hours" },
        { title: "Intermediate Tutorials", desc: "Custom entities, basic behaviors, and loot tables.", difficulty: "Medium", time: "5 Hours" },
        { title: "Advanced Tutorials", desc: "Custom components, state machines, and animations.", difficulty: "Hard", time: "10+ Hours" },
        { title: "Snowstorm Basics", desc: "Interface navigation and creating your first spark.", difficulty: "Easy", time: "1 Hour" },
        { title: "Molang Basics", desc: "Variables, queries, and simple math operations.", difficulty: "Medium", time: "3 Hours" },
        { title: "Addon Development", desc: "Packaging, debugging, and marketplace guidelines.", difficulty: "Hard", time: "Ongoing" }
    ],
    components: {
        "minecraft:particle_lifetime_expression": {
            name: "Particle Lifetime Expression",
            human: "Determines how long a single particle stays on screen.",
            sempai: "Think of this as the lifespan of your particle! Use standard numbers, or use Molang (like `math.random(1.0, 3.0)`) to make the lifespan random for every particle, making it look more natural.",
            syntax: '"minecraft:particle_lifetime_expression": { "max_lifetime": <float|Molang> }',
            example: '"minecraft:particle_lifetime_expression": {\n  "max_lifetime": "math.random(1.5, 2.5)"\n}',
            mistakes: "Setting the lifetime to 0, causing the particle to instantly disappear."
        },
        "minecraft:emitter_rate_steady": {
            name: "Emitter Rate Steady",
            human: "Spawns a specific number of particles evenly over time.",
            sempai: "Want a continuous stream of smoke? Use this! `spawn_rate` is how many particles appear per second. `max_particles` stops the game from crashing if too many spawn.",
            syntax: '"minecraft:emitter_rate_steady": { "spawn_rate": <float|Molang>, "max_particles": <int> }',
            example: '"minecraft:emitter_rate_steady": {\n  "spawn_rate": 20,\n  "max_particles": 100\n}',
            mistakes: "Forgetting max_particles, which can lead to endless spawning and massive lag."
        },
        "minecraft:particle_motion_dynamic": {
            name: "Particle Motion Dynamic",
            human: "Adds physics and movement calculations to the particle.",
            sempai: "This brings your particle to life! Linear drag slows it down over time (like air resistance), while linear acceleration speeds it up (like gravity or wind).",
            syntax: '"minecraft:particle_motion_dynamic": { "linear_acceleration": [x,y,z], "linear_drag_coefficient": <float> }',
            example: '"minecraft:particle_motion_dynamic": {\n  "linear_acceleration": [0, -9.8, 0],\n  "linear_drag_coefficient": 0.5\n}',
            mistakes: "Using huge numbers for acceleration. Start small!"
        },
        "minecraft:particle_appearance_billboard": {
            name: "Appearance Billboard",
            human: "Renders a 2D texture that always faces the player's camera.",
            sempai: "This tells the game which texture to use and how big it should be. 'Billboard' means it will rotate automatically so the player always sees it flat, no matter where they stand.",
            syntax: '"minecraft:particle_appearance_billboard": { "size": [w,h], "facing_camera_mode": <string>, "uv": {} }',
            example: '"minecraft:particle_appearance_billboard": {\n  "size": [0.2, 0.2],\n  "facing_camera_mode": "lookat_xyz",\n  "uv": {\n    "texture_width": 16,\n    "texture_height": 16,\n    "uv": [0, 0],\n    "uv_size": [16, 16]\n  }\n}',
            mistakes: "Miscalculating UV coordinates. Remember UV starts at the top-left (0,0) of the image."
        }
    },
    snowstorm: [
        { title: "Creating First Particle", desc: "Setting up the JSON file and importing textures.", preview: "fa-magic" },
        { title: "Particle Lifetime", desc: "Controlling when particles die.", preview: "fa-hourglass" },
        { title: "Motion", desc: "Applying gravity and velocity.", preview: "fa-wind" },
        { title: "Colors", desc: "Gradients and color-over-lifetime.", preview: "fa-palette" },
        { title: "Emitters", desc: "Steady vs Instant emitters.", preview: "fa-bullseye" },
        { title: "Curves", desc: "Using curve maps for smooth transitions.", preview: "fa-chart-line" },
        { title: "Events", desc: "Triggering events on particle expiration.", preview: "fa-bolt" }
    ],
    molang: [
        { title: "Variables", desc: "Storing and using custom data (v.my_var).", code: "v.my_speed = 5.0;" },
        { title: "Queries", desc: "Getting game state data (q.is_jumping).", code: "return q.is_sneaking;" },
        { title: "Math Functions", desc: "Trigonometry, randoms, and clamps.", code: "math.sin(q.life_time * 20)" },
        { title: "Conditions", desc: "Ternary operators for logic branches.", code: "q.is_on_ground ? 1.0 : 0.0;" },
        { title: "Advanced Molang", desc: "Complex expressions and performance.", code: "v.x = math.clamp(v.y, 0, 1);" }
    ],
    tools: [
        { title: "JSON Validator", desc: "Checks if your syntax is valid and catches missing commas." },
        { title: "JSON Explainer", desc: "Converts Minecraft code blocks into beginner-friendly English." },
        { title: "JSON Formatter", desc: "Formats messy JSON into clean readable code." },
        { title: "Error Finder", desc: "Highlights schema mistakes and unrecognized components." },
        { title: "JSON Generator", desc: "Generates template JSON using simple forms and settings." }
    ],
    templates: [
        { title: "Fire Particle", desc: "Standard campfire/torch flame effect." },
        { title: "Snow Particle", desc: "Gentle falling snow with wind sway." },
        { title: "Smoke Particle", desc: "Rising, expanding, fading smoke." },
        { title: "Magic Aura", desc: "Circling magical runes and sparkles." },
        { title: "Lightning Effect", desc: "Fast, jagged instant particle strikes." },
        { title: "Sparkles", desc: "Randomly blinking and popping stars." }
    ]
};

// DOM Elements
const sections = document.querySelectorAll('.view-section');
const navLinks = document.querySelectorAll('.nav-links a');

// 1. Navigation Logic
document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        
        // Update active class on nav
        navLinks.forEach(nav => nav.classList.remove('active'));
        if(link.classList.contains('nav-links a')) link.classList.add('active');

        // Hide all sections, show target
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(targetId).classList.add('active');
        window.scrollTo(0,0);
    });
});

// 2. Render Functions
function renderHome() {
    const container = document.getElementById('home-buttons');
    siteData.heroButtons.forEach(btn => {
        container.innerHTML += `
            <div class="card" onclick="document.querySelector('[data-target=\\'${btn.target}\\']').click()">
                <h3><i class="fa-solid ${btn.icon}"></i> ${btn.title}</h3>
                <p>${btn.desc}</p>
                <button class="btn">Explore</button>
            </div>
        `;
    });
}

function renderLearn() {
    const container = document.getElementById('learn-grid');
    siteData.learnCards.forEach((card, index) => {
        // LocalStorage Check
        const isCompleted = localStorage.getItem(`learn_${index}`) === 'true';
        const statusText = isCompleted ? "Completed" : "Mark as Complete";
        const statusClass = isCompleted ? "completed" : "";

        container.innerHTML += `
            <div class="card">
                <h3>${card.title}</h3>
                <p>${card.desc}</p>
                <p><strong>Difficulty:</strong> ${card.difficulty} | <strong>Time:</strong> ${card.time}</p>
                <button class="btn ${statusClass}" onclick="toggleProgress(${index}, this)">${statusText}</button>
            </div>
        `;
    });
}

function renderComponents() {
    const container = document.getElementById('components-grid');
    container.innerHTML = '';
    
    Object.entries(siteData.components).forEach(([key, comp]) => {
        const isFav = localStorage.getItem(`fav_${key}`) === 'true';
        const heartClass = isFav ? "fa-solid" : "fa-regular";

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <h3>${comp.name}</h3>
                <i class="${heartClass} fa-heart" style="color: var(--accent-purple); cursor: pointer;" onclick="toggleFavorite('${key}', this, event)"></i>
            </div>
            <p>${comp.human}</p>
            <div class="code-header"><span>Syntax</span> <i class="fa-regular fa-copy" onclick="copyText('${comp.syntax}', event)"></i></div>
            <pre><code>${comp.syntax}</code></pre>
            <button class="btn" style="margin-top:10px;" onclick="loadSempai('${key}')">Ask Sempai</button>
        `;
        container.appendChild(card);
    });
}

function renderStandardGrid(dataArray, containerId, btnText) {
    const container = document.getElementById(containerId);
    dataArray.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                ${item.code ? `<pre><code>${item.code}</code></pre>` : ''}
                <button class="btn">${btnText}</button>
            </div>
        `;
    });
}

// 3. Ask Sempai Interaction
window.loadSempai = function(key) {
    const panel = document.getElementById('sempai-content');
    const comp = siteData.components[key];
    
    panel.innerHTML = `
        <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">${comp.name}</h4>
        <p style="margin-bottom: 1rem;"><strong>Sempai says:</strong> "${comp.sempai}"</p>
        <div class="code-header"><span>Example JSON</span></div>
        <pre style="margin-top: 0; border-radius: 0 0 8px 8px;"><code>${comp.example}</code></pre>
        <p style="color: #ef4444; font-size: 0.9rem; margin-top: 1rem;">
            <i class="fa-solid fa-triangle-exclamation"></i> <strong>Common Mistake:</strong> ${comp.mistakes}
        </p>
    `;
    
    // Smooth scroll to panel on mobile
    if(window.innerWidth <= 900) {
        document.getElementById('sempai-panel').scrollIntoView({ behavior: 'smooth' });
    }
}

// 4. Utility Functions (LocalStorage & Copy)
window.toggleProgress = function(index, btnElement) {
    const currentState = localStorage.getItem(`learn_${index}`) === 'true';
    localStorage.setItem(`learn_${index}`, !currentState);
    btnElement.innerText = !currentState ? "Completed" : "Mark as Complete";
}

window.toggleFavorite = function(key, iconElement, event) {
    event.stopPropagation();
    const currentState = localStorage.getItem(`fav_${key}`) === 'true';
    localStorage.setItem(`fav_${key}`, !currentState);
    iconElement.className = !currentState ? "fa-solid fa-heart" : "fa-regular fa-heart";
}

window.copyText = function(text, event) {
    event.stopPropagation();
    navigator.clipboard.writeText(text);
    const icon = event.target;
    icon.className = "fa-solid fa-check";
    setTimeout(() => icon.className = "fa-regular fa-copy", 2000);
}

// Search Functionality
document.getElementById('component-search').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.getElementById('components-grid').children;
    
    Object.keys(siteData.components).forEach((key, index) => {
        if(key.toLowerCase().includes(term) || siteData.components[key].name.toLowerCase().includes(term)) {
            cards[index].style.display = 'flex';
        } else {
            cards[index].style.display = 'none';
        }
    });
});

// 5. Floating Particle Background Canvas
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedY = Math.random() * 0.5 + 0.1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.color = Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6';
        this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for(let i=0; i<50; i++) particles.push(new Particle());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Initialize App
renderHome();
renderLearn();
renderComponents();
renderStandardGrid(siteData.snowstorm, 'snowstorm-grid', 'Read Tutorial');
renderStandardGrid(siteData.molang, 'molang-grid', 'Study Subject');
renderStandardGrid(siteData.tools, 'tools-grid', 'Launch Tool');
renderStandardGrid(siteData.templates, 'templates-grid', '<i class="fa-solid fa-download"></i> Download JSON');
animateParticles();

// Default theme dark
localStorage.setItem('theme', 'dark');


