function toggleDropdown(event, dropdownId) {
    event.preventDefault();
    event.stopPropagation();

    // Закрываем все открытые меню
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu.id !== dropdownId) {
            menu.classList.remove('dropdown-show');
            menu.previousElementSibling.classList.remove('active');
        }
    });

    // Переключаем текущее меню
    const dropdown = document.getElementById(dropdownId);
    const button = dropdown.previousElementSibling;

    dropdown.classList.toggle('dropdown-show');
    button.classList.toggle('active');
}

// Функция для переключения аккордеона
function toggleAccordion(button) {
    const item = button.parentElement;
    const content = button.nextElementSibling;

    button.classList.toggle('active');
    content.classList.toggle('active');

    // Закрываем другие открытые элементы аккордеона
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(accordionItem => {
        if (accordionItem !== item) {
            accordionItem.querySelector('.accordion-header').classList.remove('active');
            accordionItem.querySelector('.accordion-content').classList.remove('active');
        }
    });
}

// Закрытие меню при клике вне его области
document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('dropdown-show');
            menu.previousElementSibling.classList.remove('active');
        });
    }
});



/*  */
let btns = document.querySelectorAll('.btn');
let texts = document.querySelectorAll('.text');


btns.forEach((btn, index) => {
    btn.onclick = () => {
        document.querySelector('.btn.active1').classList.remove('active1');
        btn.classList.add('active1');
        document.querySelector('.text.active').classList.remove('active');
        texts[index].classList.add('active');
    }
});


/* Модальное окно */
let sign_up = document.getElementById("sign_up");
        function showModal(){
            sign_up.style.display="block";
        }
        function hideModal(){
            sign_up.style.display="none";
        }


        
let sign_in = document.getElementById("sign_in");
        function showModal2(){
            sign_in.style.display="block";
        }
        function hideModal2(){
            sign_in.style.display="none";
        }



/* Слайдер */
const slides = document.querySelectorAll('.feature-card');
        let currentIndex = 0;

        function switchSlides() {
            slides[currentIndex].classList.remove('active');
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            slides[currentIndex].classList.add('active');
        }
        setInterval(switchSlides, 5000);
