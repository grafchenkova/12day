/* ============================================
   QUANTUM START - Main JavaScript
   Interactive functionality and animations
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeAccordion();
    initializeCountdownTimer();
    initializeSmoothScroll();
    initializeAnimations();
    renderPage();
});

/* ============================================
   PAGE RENDERING
   ============================================ */

function renderPage() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <!-- HERO SECTION -->
        <section class="hero">
            <div class="container">
                <div class="hero-content fade-in-up">
                    <h1>Квантовый<br>Старт</h1>
                    <div style="margin-bottom: 2rem;">
                        <p class="hero-subtitle">Твои первые 12 дней перемен.</p>
                        <p class="hero-date">Начало: 20 декабря 2025</p>
                    </div>
                    
                    <div class="offer-box">
                        <div class="date-info">
                            <div class="date-label">Дата начала</div>
                            <div class="date-value">20 декабря 2025</div>
                        </div>
                        
                        <p>Если ты чувствуешь, что год выжал тебя — это не слабость. Это сигнал. И у тебя есть путь выбраться.</p>
                        
                        <div class="timer-section" style="margin-bottom: 2rem;">
                            <button class="btn" onclick="scrollToSection('pricing')">Взять участие — 990 ₽</button>
                            <div>
                                <div class="timer-label">
                                    <span class="pulse"></span> Цена действует 24 часа
                                </div>
                                <div class="timer" id="countdown">23:59:57</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PROBLEM SECTION -->
        <section class="problem-section">
            <div class="container">
                <div class="problem-grid">
                    <div>
                        <h2>Ты не устала.<br><span style="color: var(--muted-foreground);">Ты на нуле.</span></h2>
                    </div>
                    <div class="problem-grid" style="grid-template-columns: 1fr; gap: 1.5rem;">
                        ${[
                            "Усталость, которую ты заметаешь под ковёр.",
                            "Тревога, ставшая фоном.",
                            "Жизнь на последнем проценте заряда.",
                            "Невозможность думать, планировать, радоваться.",
                            "То самое «я не вывожу»."
                        ].map((item, i) => `
                            <div class="problem-item slide-in-left" style="animation-delay: ${i * 0.1}s;">
                                <span class="problem-number">0${i + 1}</span>
                                <p class="problem-text">${item}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>

        <!-- SOLUTION SECTION -->
        <section class="solution-section">
            <div class="container">
                <div class="section-title">
                    <h2>Решение: Малый шаг</h2>
                    <p style="font-size: 1.25rem; color: var(--primary); margin-top: 1rem;">12 дней малого шага → большой сдвиг в состоянии.</p>
                </div>
                
                <div class="solution-grid">
                    ${[
                        "5–10 минут в день",
                        "Поддерживающие голосовые",
                        "Эмоциональные артефакты",
                        "Энергетические действия",
                        "Точка силы 21 декабря",
                        "Мягкое возвращение к себе"
                    ].map(item => `
                        <div class="solution-card">
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
                
                <p class="solution-text">
                    "Ты не будешь работать над собой.<br>Ты начнёшь возвращать себя."
                </p>
            </div>
        </section>

        <!-- PROGRAM ACCORDION -->
        <section>
            <div class="container">
                <h2 class="section-title">Программа</h2>
                <div class="accordion" id="program-accordion">
                    ${[
                        { day: "01", title: "Очищение внутреннего фона", desc: "Убираем ментальный шум и готовим пространство для перемен." },
                        { day: "02", title: "Настрой энергии + подготовка к Солнцестоянию", desc: "Синхронизация с природными ритмами для максимального ресурса." },
                        { day: "03", title: "Возвращение тела", desc: "Практики заземления и возвращения чувствительности." },
                        { day: "04", title: "Работа с внутренним шумом", desc: "Техники тишины и остановки бесконечного диалога." },
                        { day: "05", title: "Ясность желаний", desc: "Отделяем свои истинные желания от навязанных извне." },
                        { day: "06", title: "Эмоциональное закрытие года", desc: "Отпускаем груз прошлого года без сожалений." },
                        { day: "07", title: "Точка силы", desc: "Кульминация программы. Сборка энергии в единый вектор." },
                        { day: "08", title: "Энергия действия", desc: "Первые шаги из нового состояния. Без надрыва." },
                        { day: "09", title: "Восстановление фокуса", desc: "Учимся держать внимание на главном, не распыляясь." },
                        { day: "10", title: "Внутренние опоры", desc: "Находим стержень внутри себя, который не зависит от внешнего." },
                        { day: "11", title: "Новый маршрут", desc: "Прокладываем путь в 2026 год из состояния силы." },
                        { day: "12", title: "Письмо от будущего Я", desc: "Закрепляем результат и создаем маяк на будущее." }
                    ].map(item => `
                        <div class="accordion-item" data-day="${item.day}">
                            <div class="accordion-header">
                                <span>
                                    <span class="accordion-day">${item.day}</span>
                                    ${item.title}
                                </span>
                                <span class="accordion-chevron">▼</span>
                            </div>
                            <div class="accordion-content">
                                ${item.desc}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- WHAT'S INSIDE -->
        <section class="cards-section">
            <div class="container">
                <h2>Что внутри</h2>
                <div class="cards-grid">
                    ${[
                        { num: 1, title: "Письмо от будущего Я", desc: "Текст, который возвращает веру в себя и закрывает год." },
                        { num: 2, title: "12 конвертов удачи", desc: "Мини-действия, вытягивающие из состояния «я ничего не хочу»." },
                        { num: 3, title: "Маршрут 2026", desc: "Честная карта того, куда ты идёшь." },
                        { num: 4, title: "Голосовые 60 секунд", desc: "Утро — собрать. День — выдержать. Вечер — вернуть себя." },
                        { num: 5, title: "Энергетический адвент", desc: "Работает даже когда сил нет." },
                        { num: 6, title: "21 декабря — точка силы", desc: "Желания после 18:03 — из ясности." }
                    ].map(card => `
                        <div class="card-item">
                            <div class="card-number">${card.num}</div>
                            <div>
                                <h3 class="card-title">${card.title}</h3>
                                <p class="card-description">${card.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- AUTHOR SECTION -->
        <section class="author-section">
            <div class="container">
                <div class="author-grid">
                    <div class="author-image">
                        <img src="assets/author.png" alt="Natalia GRAFHENKOVA">
                        <div class="author-name">Natalia<br>Grafhenkova</div>
                    </div>
                    <div class="author-info">
                        <h2>Автор программы</h2>
                        <ul class="author-list">
                            <li>AI-Стилист Состояния</li>
                            <li>Психолог мышления</li>
                            <li>Создатель трансформационных программ</li>
                            <li>10+ лет работы с выгоранием</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- REVIEWS SECTION -->
        <section>
            <div class="container">
                <h2 class="section-title">Истории</h2>
                <div class="reviews-grid">
                    ${[
                        { text: "За 12 дней я почувствовала, как со мной что-то меняется. Мягко, как восход. Перестала чувствовать вину за отдых.", author: "Мария К., мама двоих детей" },
                        { text: "Была на грани выгорания. Теперь понимаю: усталость — не слабость, а сигнал. 20 минут в день — а эффект огромный.", author: "Елена М., фрилансер" },
                        { text: "Как специалист оценила структуру. Это не мотивация, а реальная работа со состоянием. Рекомендую клиентам.", author: "Анна В., логопед" }
                    ].map(review => `
                        <div class="review-card">
                            <div class="review-quote">"</div>
                            <p class="review-text">${review.text}</p>
                            <p class="review-author">— ${review.author}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- PRICING SECTION -->
        <section class="pricing-section" id="pricing">
            <div class="container">
                <div class="pricing-box">
                    <h2 class="pricing-title">Твой Старт</h2>
                    <div class="pricing-divider"></div>
                    
                    <ul class="pricing-list">
                        <li class="pricing-item current">
                            <span>Сегодня</span>
                            <span>990 ₽</span>
                        </li>
                        <li class="pricing-item future">
                            <span>С 14 дек</span>
                            <span>1290 ₽</span>
                        </li>
                        <li class="pricing-item future">
                            <span>С 20 дек</span>
                            <span>1590 ₽</span>
                        </li>
                    </ul>

                    <div style="margin-bottom: 2rem;">
                        <div class="timer" id="countdown-pricing">23:59:57</div>
                        <p class="timer-label" style="margin-top: 0.5rem;">До повышения цены</p>
                    </div>

                    <button class="btn" onclick="window.open('https://payform.ru/u0a0HBI/', '_blank')" style="width: 100%; font-size: 1.25rem; padding: 1.5rem;">
                        Оплатить участие
                    </button>
                    
                    <div class="pricing-description">
                        <p>12 дней трансформации = 82 ₽ в день.</p>
                        <p>Меньше, чем кофе. Меньше, чем перекус.</p>
                        <p><strong>И точно меньше, чем цена твоей усталости.</strong></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer>
            <div class="container">
                <p>© 2025 Quantum Start. All rights reserved.</p>
            </div>
        </footer>
    `;
}

/* ============================================
   ACCORDION FUNCTIONALITY
   ============================================ */

function initializeAccordion() {
    setTimeout(() => {
        const accordion = document.getElementById('program-accordion');
        if (!accordion) return;

        const items = accordion.querySelectorAll('.accordion-item');
        
        items.forEach(item => {
            const header = item.querySelector('.accordion-header');
            
            header.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all items
                items.forEach(i => i.classList.remove('active'));
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }, 100);
}

/* ============================================
   COUNTDOWN TIMER
   ============================================ */

function initializeCountdownTimer() {
    function updateTimer() {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        
        const timeLeft = nextDay - now;
        
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);
        
        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        const countdownElements = document.querySelectorAll('#countdown, #countdown-pricing');
        countdownElements.forEach(el => {
            if (el) el.textContent = timeString;
        });
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */

function initializeSmoothScroll() {
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
}

/* ============================================
   ANIMATIONS
   ============================================ */

function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    setTimeout(() => {
        document.querySelectorAll('.fade-in-up, .slide-in-left').forEach(el => {
            observer.observe(el);
        });
    }, 100);
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});
