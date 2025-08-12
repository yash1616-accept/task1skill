window.addEventListener('scroll', ()=>{
    const nav = document.querySelector('body > nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);
})