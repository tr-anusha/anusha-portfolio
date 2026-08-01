const words = ['Aspiring Software Developer', 'Web Developer', 'Java Learner', 'Python Enthusiast'];
let i = 0, j = 0, isDeleting = false;
const el = document.getElementById('typing');
function type() {
    const word = words[i];
    el.textContent = isDeleting ? word.substring(0, j--) : word.substring(0, j++);
    if (!isDeleting && j === word.length + 1) { isDeleting = true; setTimeout(type, 1000); return; }
    if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % words.length; }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();
