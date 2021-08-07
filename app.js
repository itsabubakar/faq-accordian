const questions = document.querySelectorAll('.question-conc');
const panel = document.querySelectorAll('.panel');


questions.forEach(question => question.addEventListener('click', function(e){
    const panels = e.currentTarget.nextElementSibling;
    panels.classList.toggle('hide');
}
))

