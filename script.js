/* === تهيئة AOS === */
AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80 });



/* === هيدر عند التمرير === */
window.addEventListener('scroll', function () {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
});

/* === التنقل السلس + إغلاق القائمة === */
document.querySelectorAll('.nav-link[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var t = document.querySelector(this.getAttribute('href'));
        if (t) {
            t.scrollIntoView({ behavior: 'smooth', block: 'start' });
            var c = document.getElementById('navMenu');
            if (c && c.classList.contains('show')) {
                bootstrap.Collapse.getInstance(c).hide();
            }
        }
    });
});

/* === تفعيل الرابط حسب القسم === */
window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section[id]');
    var scrollY = window.scrollY + 200;
    sections.forEach(function (sec) {
        var top = sec.offsetTop, h = sec.offsetHeight, id = sec.getAttribute('id');
        var link = document.querySelector('.nav-link[href="#' + id + '"]');
        if (link) {
            if (scrollY >= top && scrollY < top + h) link.classList.add('active');
            else link.classList.remove('active');
        }
    });
});

/* === الجسيمات الذهبية === */
(function () {
    var c = document.getElementById('particles');
    if (!c) return;
    for (var i = 0; i < 25; i++) {
        var s = document.createElement('span');
        s.style.left = Math.random() * 100 + '%';
        s.style.animationDelay = Math.random() * 4 + 's';
        s.style.animationDuration = (3 + Math.random() * 3) + 's';
        var size = (2 + Math.random() * 4) + 'px';
        s.style.width = size;
        s.style.height = size;
        c.appendChild(s);
    }
})();

/* === Lightbox === */
function openLightbox(src) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

/* === آراء العملاء الحقيقية من خرائط جوجل === */
var reviewsData = [
    { name: 'saqer', text: 'من افضل الخياطين اللي اتعاملت معاهم عرفتهم قبل سنتين والى الان اتعامل معاهم وجبت القبيله كلها تفصل عندهم الله يوفقهم يارب والموظفين قمه بالاخلاق والرقي الله يبارك لهم.', date: 'قبل 4 أشهر' },
    { name: 'hamad', text: 'افضل خياط في الرياض اهنيهم هذي ثاني مره افصل عندهم والله الصراحه من افضل الخياطين والاقمشة ممتازه عنده واشكر الأخ فهمي على حسن اخلاقه وطيبة قلبه واستقباله المبهر.', date: 'قبل 5 أشهر' },
    { name: 'Khaled alfhadel', text: 'من أوّل مافتح المحل وانا أتعامل مع أبو مجاهد وما قد صار معي ولا غلطة شغل نظيف واهتمام بالتفاصيل ومواعيد دقيقة ز من أفضل الخياطين اللي تعاملت معهم ويستاهل كل شكر ❤️.', date: 'قبل 5 أشهر' },
    { name: 'Ab', text: 'والله شهادة حق خياط ممتاز جداً ويهتم في ادق التفاصيل وتعامل راقي جداً مع اللي يشتغلون وخصوصاً ابو مجاهد ولي سنتين اتعامل معهم.', date: 'قبل 4 أشهر' },
    { name: 'Akram Alhakimi', text: 'نشكركم لشغلكم القيم وتعاملكم المبهر. تجربتي كانت رهيبة جداً وأنصح بزيارتهم.', date: 'قبل سنة' },
    { name: 'فهد محمد', text: 'ما شاء الله خياط ممتاز جداَ ويصب الثوب صب خياطة وسبكه واخص الرجل الطيب فهمي قمة في الأخلاق والتعامل واخذ القياسات عنده ما شاء الله بالملي 👍.', date: 'قبل شهر' },
    { name: 'عبدالله الحكمي', text: 'ماشاء الله تبارك الله خياطة وقماش وسعر وسرعة في الأداء رائع جداً دايم افضل عندهم انصح به جداً وتعامل الموظف فهمي جداً رهيب.', date: 'قبل 5 أشهر' },
    { name: 'Moghazy Adel', text: 'خياط ممتاز الله يعطيهم العافيه شغل واخلاق عاليه من الشباب في المحل ابو مجاهد والمعلم فهمي اشكرهم من قلبي انصحكم في المحل وجهتكم المفضله.', date: 'قبل 4 أشهر ' },
    { name: 'Mohammed Alanzi', text: 'شغلهم جميل جداً ومرتب وخياطة لا يعلى عليها واسعارهم طيبه وتعامل واخلاق الله يعطيهم العافيه خصوصاً ابو مجاهد الله يبيض وجه.', date: 'قبل 7 أشهر' }
];

var wrapper = document.getElementById('reviewsWrapper');
if (wrapper) {
    reviewsData.forEach(function (r) {
        var stars = '<i class="fas fa-star"></i>'.repeat(5);
        wrapper.innerHTML += `
            <div class="swiper-slide">
                <div class="review-card">
                    <div class="review-avatar-icon"><i class="fas fa-user"></i></div>
                    <h5>${r.name}</h5>
                    <div class="reviewer-date">${r.date}</div>
                    <div class="stars">${stars}</div>
                    <p class="review-text">"${r.text}"</p>
                    <div class="google-badge">
                        <i class="fab fa-google"></i> مراجعة من خرائط جوجل
                    </div>
                </div>
            </div>`;
    });

    new Swiper('.reviewsSwiper', {
        slidesPerView: 1, spaceBetween: 20, loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
}



function handleSubmit(e) {
    e.preventDefault();
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
    return false;
}

/* === تحويل الثيم الداكن والوضع الليلي === */
document.addEventListener('DOMContentLoaded', function () {
    var themeToggleBtn = document.getElementById('themeToggle');
    var currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-theme');
            var theme = 'light';
            if (document.body.classList.contains('dark-theme')) {
                theme = 'dark';
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
            localStorage.setItem('theme', theme);
        });
    }
});
