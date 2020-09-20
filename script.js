const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});

// const faqs = document.querySelectorAll('.faq');

// faqs.forEach(faq => {
//     const close = faq.querySelector('.fa-times');
//     const open = faq.querySelector('.fa-chevron-down');
//         open.addEventListener('click', () => {
//         faq.classList.add('active');
//     });
//     close.addEventListener('click', () => {
//         faq.classList.remove('active');
//     });
// });

