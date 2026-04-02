const DATA = {
    changelog: [
        { date: '2026.04.01', v: '2.8', ru: 'some bug fix', en: 'some bug fix', ua: 'виправлення деяких багів' },
        { date: '2026.03.30', v: '2.7', ru: 'features added', en: 'features added', ua: 'додано функції' },
        { date: '2026.03.29', v: '2.6', ru: 'bug fix & features add', en: 'bug fix & features add', ua: 'виправлення багів та додавання функцій' },
        { date: '2026.03.25', v: '2.5', ru: 'minor improvement', en: 'minor improvement', ua: 'незначні покращення' },
        { date: '2026.03.20', v: '2.4', ru: 'performance boost', en: 'performance boost', ua: 'підвищення продуктивності' },
        { date: '2026.03.15', v: '2.3', ru: 'UI polishing', en: 'UI polishing', ua: 'полірування інтерфейсу' },
        { date: '2026.03.10', v: '2.2', ru: 'new content added', en: 'new content added', ua: 'додано новий контент' },
        { date: '2026.03.05', v: '2.1', ru: 'stability improvements', en: 'stability improvements', ua: 'покращення стабільності' },
        { date: '2026.03.01', v: '2.0', ru: 'major feature set', en: 'major feature set', ua: 'основний набір функцій' },
        { date: '2026.02.25', v: '1.0', ru: 'initial release', en: 'initial release', ua: 'початковий реліз' }
    ],
    hall: [
        { name: 'Конор Макгрегор', img: '1.png', color: '#ff4d4d', ru: 'бомж без умений', en: 'homeless person with no skills', ua: 'бомж без навичок' },
        { name: 'Чеснок', img: '2.png', color: '#ff0000', ru: 'наркоман из нивок', en: 'drug addict from Nivki', ua: 'наркоман з Нивок' },
        { name: 'Ярик', img: '3.png', color: '#00ff00', ru: 'наркоман из оболони', en: 'drug addict from Obolon', ua: 'наркоман з Оболоні' },
        { name: 'Алена Heroin', img: '4.png', color: '#0000ff', ru: 'герой Украины', en: 'hero of Ukraine', ua: 'герой України' },
        { name: 'Александр Майонез', img: '5.png', color: '#ffff00', ru: 'майонез', en: 'mayonnaise', ua: 'майонез' },
        { name: 'богдан', img: '6.png', color: '#800080', ru: 'наркоман из днепра', en: 'drug addict from Dnipro', ua: 'наркоман з Дніпра' },
        { name: 'Nik', img: '7.png', color: '#808080', ru: 'наркоман из москвы', en: 'drug addict from Moscow', ua: 'наркоман з Москви' },
        { name: 'Саша Фантомас', img: '8.png', color: '#ff69b4', ru: 'наркоманка из днепра', en: 'female drug addict from Dnipro', ua: 'наркоманка з Дніпра' }
    ],
    links: [
        { icon:'✈️', name: 'Telegram', u: '', c: '#0088cc', link: 'https://t.me/thiseq' },
        { icon:'▶️', name: 'YouTube', u: '', c: '#ff0000', link: 'https://www.youtube.com/@wiksum' },
        { icon:'✕', name: 'X (Twitter)', u: '', c: '#1DA1F2', link: 'https://x.com/WWzivchik' },
        { icon:'🟪', name: 'Twitch', u: '', c: '#9146FF', link: 'https://twitch.tv/WWzivchik' },
        { icon:'💸', name: 'Donation Alerts', u: '', c: '#40C057', link: 'https://www.donationalerts.com/r/zivchik234' },
        { icon:'🖤', name: 'Steam', u: '', c: '#171A21', link: 'https://steamcommunity.com/profiles/76561199387485532/' },
        { icon:'🎵', name: 'SoundCloud', u: '', c: '#ff5500', link: 'https://soundcloud.com/tokiomorning' }
    ]
};

DATA.hall.sort((a, b) => a.name.localeCompare(b.name));

const langData = {
    RU: {
        'menu-main': 'Главная',
        'menu-links': 'Ссылки',
        'menu-settings': 'Настройки',
        'links-title': 'Ресурсы',
        'links-search-placeholder': 'Поиск ссылок...',
        'hall-search-placeholder': 'Поиск в зале...',
        'set-section-title': 'Конфигурация',
        'set-audio-t': 'Аудио-система',
        'set-audio-desc': 'Lofi Flow Stream',
        'set-volume': 'Громкость',
        'set-theme-t': 'Дневной режим',
        'set-shuffle-hall': 'Перемешать Hall',
        'set-random-link': 'Случайная ссылка'
    },
    EN: {
        'menu-main': 'Home',
        'menu-links': 'Links',
        'menu-settings': 'Settings',
        'links-title': 'Resources',
        'links-search-placeholder': 'Search links...',
        'hall-search-placeholder': 'Search hall...',
        'set-section-title': 'Configuration',
        'set-audio-t': 'Audio System',
        'set-audio-desc': 'Lofi Flow Stream',
        'set-volume': 'Volume',
        'set-theme-t': 'Light Mode',
        'set-shuffle-hall': 'Shuffle Hall',
        'set-random-link': 'Random Link'
    },
    UA: {
        'menu-main': 'Головна',
        'menu-links': 'Посилання',
        'menu-settings': 'Налаштування',
        'links-title': 'Ресурси',
        'links-search-placeholder': 'Пошук посилань...',
        'hall-search-placeholder': 'Пошук у залі...',
        'set-section-title': 'Конфігурація',
        'set-audio-t': 'Аудіо-система',
        'set-audio-desc': 'Lofi Flow Stream',
        'set-volume': 'Гучність',
        'set-theme-t': 'Денний режим',
        'set-shuffle-hall': 'Перемішати Hall',
        'set-random-link': 'Випадкове посилання'
    }
};

let currentLang = 'RU';
const audio = document.getElementById('bg-music');
const volSlider = document.getElementById('volumeSlider');
let musicStarted = false;

function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.innerText === lang));
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        el.innerText = langData[lang][key] || key;
    });
    document.querySelectorAll('input[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        el.placeholder = langData[lang][key] || key;
    });
    renderAll();
}

let currentLinksQuery = '';
let currentHallQuery = '';

function renderAll() {
    renderChangelog();
    renderHall(currentHallQuery);
    renderLinks(currentLinksQuery);
}

function renderChangelog() {
    const container = document.getElementById('changelog-list');
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    DATA.changelog.forEach(item => {
        const div = document.createElement('div');
        div.style.background = 'rgba(255,255,255,0.02)';
        div.style.padding = '20px';
        div.style.borderRadius = '18px';
        div.style.borderLeft = `4px solid ${item.color}`;

        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.marginBottom = '5px';

        const date = document.createElement('small');
        date.style.opacity = '0.5';
        date.textContent = item.date;

        const version = document.createElement('b');
        version.style.color = item.color;
        version.textContent = item.v;

        header.appendChild(date);
        header.appendChild(version);

        const text = document.createElement('p');
        text.className = 'changelog-text';
        text.style.fontSize = '0.9rem';
        text.textContent = item[currentLang.toLowerCase()] || item.en;

        div.appendChild(header);
        div.appendChild(text);
        fragment.appendChild(div);
    });
    container.appendChild(fragment);
}

function renderHall(query = '') {
    const container = document.getElementById('people-grid');
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const filtered = DATA.hall.filter(person =>
        person.name.toLowerCase().includes(query.toLowerCase()) ||
        (person[currentLang.toLowerCase()] || person.en).toLowerCase().includes(query.toLowerCase())
    );
    filtered.forEach(person => {
        const card = document.createElement('div');
        card.className = 'person-card';

        const header = document.createElement('div');
        header.className = 'person-header';

        let img;
        if (person.img) {
            img = document.createElement('img');
            img.src = person.img;
            img.className = 'person-img';
            img.onerror = () => img.style.display = 'none';
        } else {
            img = document.createElement('div');
            img.className = 'person-img';
            img.style.background = person.color;
        }
        header.appendChild(img);

        const name = document.createElement('h3');
        name.className = 'rainbow-txt';
        name.textContent = person.name;
        header.appendChild(name);

        const role = document.createElement('div');
        role.className = 'role-text';
        role.textContent = person[currentLang.toLowerCase()] || person.en;

        card.appendChild(header);
        card.appendChild(role);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}

function renderLinks(query = '') {
    const container = document.getElementById('links-container');
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const filtered = DATA.links.filter(link =>
        link.name.toLowerCase().includes(query.toLowerCase())
    );
    filtered.forEach(link => {
        const a = document.createElement('a');
        a.href = link.link;
        a.target = '_blank';
        a.className = 'nav-item';
        a.style.textDecoration = 'none';
        a.style.display = 'flex';
        a.style.justifyContent = 'center';
        a.style.alignItems = 'center';
        a.style.position = 'relative';

        const span = document.createElement('span');
        span.textContent = `${link.name}`;
        a.appendChild(span);

        const button = document.createElement('button');
        button.onclick = (e) => { copyLink(link.link); e.preventDefault(); };
        button.style.position = 'absolute';
        button.style.right = '10px';
        button.style.background = 'none';
        button.style.border = 'none';
        button.style.color = 'var(--text-main)';
        button.style.cursor = 'pointer';
        button.style.fontSize = '1rem';
        button.setAttribute('aria-label', 'Copy link');
        button.textContent = '📋';
        a.appendChild(button);

        fragment.appendChild(a);
    });
    container.appendChild(fragment);
}

function copyLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function nav(id, el) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    el.classList.add('active');
    window.isHall = (id === 'hall');
    startAudio();
    if (id === 'hall') {
        playHallMusic(true);
    } else {
        playHallMusic(false);
    }
}

function playHallMusic(on) {
    const hallAudio = document.getElementById('hall-music');
    const toggled = document.getElementById('musicToggle').checked;

    if (on && toggled) {
        audio.pause();
        hallAudio.volume = 0.7;
        hallAudio.play().catch(() => {});
    } else {
        hallAudio.pause();
        hallAudio.currentTime = 0;
        if (toggled) {
            audio.play().catch(() => {});
        }
    }
}

function toggleMusic(on) {
    const hallAudio = document.getElementById('hall-music');
    if (on) {
        if (window.isHall) {
            hallAudio.volume = 0.7;
            hallAudio.play().catch(() => {});
            audio.pause();
        } else {
            hallAudio.pause();
            audio.play().catch(() => {});
        }
        musicStarted = true;
    } else {
        audio.pause();
        hallAudio.pause();
        musicStarted = false;
    }
}

volSlider.addEventListener('input', () => {
    audio.volume = volSlider.value;
});

function toggleTheme(on) {
    document.body.classList.toggle('light-mode', on);
    initStars();
}

function startAudio() {
    const hallAudio = document.getElementById('hall-music');
    const isEnabled = document.getElementById('musicToggle').checked;
    if (!isEnabled) {
        return;
    }

    if (window.isHall) {
        audio.pause();
        hallAudio.volume = 0.7;
        hallAudio.play().catch(() => {});
    } else {
        hallAudio.pause();
        hallAudio.currentTime = 0;
        audio.volume = volSlider.value || 0.3;
        audio.play().catch(() => {});
    }
    musicStarted = true;
}

function addChangelogEntry(date, version, ruText, enText, color = '#4dff88') {
    DATA.changelog.unshift({ date, v: version, ru: ruText, en: enText, color });
    renderAll();
}

function shuffleHall() {
    DATA.hall = DATA.hall.sort(() => Math.random() - 0.5);
    renderAll();
}

function openRandomLink() {
    const i = Math.floor(Math.random() * DATA.links.length);
    window.open(DATA.links[i].link, '_blank');
}

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
let starSpeed = 3;
let meteors = [];
let iss = { x: 0, y: 0, angle: 0 };

function createMeteor() {
    const angle = Math.random() * Math.PI * 2;
    const speedBase = 3 + Math.random() * 4;
    return {
        x: (Math.random() - 0.5) * canvas.width,
        y: (Math.random() - 0.5) * canvas.height,
        z: Math.random(),
        speed: speedBase,
        angle
    };
}

function initStars() {
    try {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stars = Array.from({ length: 250 }, () => ({
            x: Math.random() * canvas.width - canvas.width / 2,
            y: Math.random() * canvas.height - canvas.height / 2,
            z: Math.random() * canvas.width,
            o: 0.2 + Math.random() * 0.8,
            hue: Math.random() * 360
        }));
        meteors = Array.from({ length: 9 }, () => createMeteor());
        iss = { x: canvas.width * 0.78, y: canvas.height * 0.22, angle: 0 };
        console.log('Stars initialized');
    } catch (e) {
        console.error('Canvas init failed:', e);
        // Fallback: set body background to static
        document.body.style.background = 'linear-gradient(45deg, #010103, #080b1a)';
    }
}

function drawISS() {
    const scale = Math.min(canvas.width, canvas.height) / 1400;
    ctx.save();
    ctx.translate(iss.x, iss.y);
    ctx.rotate(iss.angle);
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = 'rgba(225, 235, 255, 0.95)';
    ctx.fillRect(-24 * scale, -6 * scale, 48 * scale, 12 * scale);
    ctx.fillRect(-8 * scale, -16 * scale, 16 * scale, 32 * scale);
    ctx.strokeStyle = 'rgba(100, 130, 255, 0.8)';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.moveTo(-26 * scale, -10 * scale);
    ctx.lineTo(-40 * scale, -20 * scale);
    ctx.lineTo(-40 * scale, 20 * scale);
    ctx.lineTo(-26 * scale, 10 * scale);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(26 * scale, -10 * scale);
    ctx.lineTo(40 * scale, -20 * scale);
    ctx.lineTo(40 * scale, 20 * scale);
    ctx.lineTo(26 * scale, 10 * scale);
    ctx.stroke();
    ctx.restore();
    iss.angle += 0.009;
}

const cursorParticles = [];

function createCursorParticle(x, y) {
    if (!window.isHall) return;
    const container = document.getElementById('cursor-particles');
    if (!container) return;

    const count = 1 + Math.floor(Math.random() * 2); // 1-2 частицы за движение
    for (let i = 0; i < count; i++) {
        if (cursorParticles.length > 80) break;

        const particle = document.createElement('span');
        particle.className = 'hall-particle';
        const size = 3 + Math.random() * 6;
        const hue = Math.floor(Math.random() * 360);
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = `hsl(${hue}, 100%, 60%)`;
        particle.style.opacity = '1';

        container.appendChild(particle);

        cursorParticles.push({
            el: particle,
            x,
            y,
            vx: (Math.random() - 0.5) * 1.3,
            vy: -1 - Math.random() * 1.5,
            life: 0,
            size
        });
    }
}

let lastParticleTime = 0;

document.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastParticleTime < 50) return; // throttle to 20 fps
    lastParticleTime = now;
    createCursorParticle(e.clientX, e.clientY);
});

document.getElementById('links-search').addEventListener('input', (e) => {
    currentLinksQuery = e.target.value;
    renderLinks(currentLinksQuery);
});

document.getElementById('hall-search').addEventListener('input', (e) => {
    currentHallQuery = e.target.value;
    renderHall(currentHallQuery);
});

function draw() {
    try {
        const isLight = document.body.classList.contains('light-mode');
        ctx.fillStyle = isLight ? "rgba(226,232,240,0.3)" : "rgba(1,1,3,0.25)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        stars.forEach(star => {
            star.z -= starSpeed;
            if (star.z <= 1) {
                star.z = canvas.width;
                star.x = Math.random() * canvas.width - canvas.width / 2;
                star.y = Math.random() * canvas.height - canvas.height / 2;
                star.o = 0.2 + Math.random() * 0.8;
                star.hue = Math.random() * 360;
            }

            const sx = (star.x / star.z) * canvas.width + canvas.width / 2;
            const sy = (star.y / star.z) * canvas.width + canvas.height / 2;
            const size = (1 - star.z / canvas.width) * 2.7;
            const alpha = star.o * (1 - star.z / canvas.width);

            if (window.isHall) {
                ctx.fillStyle = `hsla(${(star.hue + performance.now() / 30) % 360}, 72%, ${isLight ? '35%' : '75%'}, ${alpha})`;
            } else {
                ctx.fillStyle = isLight ? `rgba(0,0,0,${alpha})` : `rgba(255,255,255,${alpha})`;
            }

            ctx.beginPath();
            ctx.arc(sx, sy, size, 0, Math.PI * 2);
            ctx.fill();
        });

        meteors.forEach(m => {
            const dirX = m.x;
            const dirY = m.y;
            const len = Math.max(Math.sqrt(dirX*dirX + dirY*dirY), 0.001);
            m.x += (dirX / len) * m.speed * 0.9;
            m.y += (dirY / len) * m.speed * 0.9;

            const screenX = cx + m.x;
            const screenY = cy + m.y;
            const tailLen = m.speed * 20;
            const tx = screenX - (dirX / len) * tailLen;
            const ty = screenY - (dirY / len) * tailLen;

            if (screenX < -80 || screenX > canvas.width + 80 || screenY < -80 || screenY > canvas.height + 80) {
                const n = createMeteor();
                m.x = n.x * 0.2; m.y = n.y * 0.2; m.z = n.z;
                m.speed = n.speed; m.angle = n.angle;
            }

            const grad = ctx.createLinearGradient(screenX, screenY, tx, ty);
            grad.addColorStop(0, `rgba(255, 255, 255, 1)`);
            grad.addColorStop(1, `rgba(255, 200, 120, 0)`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = Math.max(1, m.speed * 0.4);
            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(tx, ty);
            ctx.stroke();
        });

        // Update cursor particles physics (gravity and fade)
        const gravity = 0.14;
        for (let i = cursorParticles.length - 1; i >= 0; i--) {
            const p = cursorParticles[i];
            p.vy += gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.life += 1;

            const lifeProgress = p.life / 90;
            p.el.style.left = `${p.x}px`;
            p.el.style.top = `${p.y}px`;
            p.el.style.transform = `translate(-50%, -50%) scale(${1 + lifeProgress * 0.6})`;
            p.el.style.opacity = `${Math.max(0, 1 - lifeProgress)}`;

            if (p.life > 80 || p.y > window.innerHeight + 40) {
                p.el.remove();
                cursorParticles.splice(i, 1);
            }
        }

        drawISS();
        requestAnimationFrame(draw);
    } catch (e) {
        console.error('Draw failed:', e);
        // Stop animation if canvas broken
    }
}

window.addEventListener('resize', initStars);
window.addEventListener('click', startAudio, { once: true });

// Hello cycle animation
const helloSpans = document.querySelectorAll('.iphone-hello span');
let currentHelloIndex = 0;

function cycleHello() {
    helloSpans.forEach((span, i) => {
        if (i === currentHelloIndex) {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0) scale(1)';
            span.style.filter = 'blur(0)';
        } else {
            span.style.opacity = '0';
            span.style.transform = 'translateY(-130%) scale(1.05)';
            span.style.filter = 'blur(2px)';
        }
    });
    currentHelloIndex = (currentHelloIndex + 1) % helloSpans.length;
}

setInterval(cycleHello, 4000);
cycleHello(); // Start immediately

initStars();
draw();
setLang('RU');

// Пример использования дополнительной функции (закомментировано, чтобы не добавлять v2.9)
// addChangelogEntry('2026.04.03', 'v2.9', 'Добавлены новые шорткаты и защита от ошибок', 'New shortcuts and guard against bugs', '#bc4dff');