 const newsletter = document.querySelector('.newsletter');
 const notifyBtn = document.getElementById('notifyBtn');
 const closeBtn = document.getElementById('close');

 const toggle = () => {
    newsletter.classList.toggle('active');
 };

 notifyBtn.addEventListener('click', toggle);
 closeBtn.addEventListener('click', toggle);