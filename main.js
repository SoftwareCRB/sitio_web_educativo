
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');
        //cambiar icono
        const icon = faq.querySelector('.faq__icon i');
        if(icon.textContent ==='add'){
            icon.textContent = 'maximize';
        }else{
            icon.textContent = 'add'
        }
    })
})