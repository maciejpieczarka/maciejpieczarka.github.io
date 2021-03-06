 const newsletter = document.querySelector('.contact');
 const notifyBtn = document.getElementById('notifyBtn');
 const closeBtn = document.getElementById('close');

 const toggle = () => {
    newsletter.classList.toggle('active');
 };

 notifyBtn.addEventListener('click', toggle);
 closeBtn.addEventListener('click', toggle);