document.addEventListener('DOMContentLoaded', () => {

    const programsButtons = document.querySelectorAll('.category__link'),
          programsCards = document.querySelectorAll('.programs__card');

    console.log(programsCards[2])

    programsButtons.forEach((button, i) => {
        button.addEventListener('click', (event) => {

            programsButtons.forEach(item => {
                item.classList.remove("category__link--active");
            });
            button.classList.add('category__link--active');
            programsCards.forEach(item => {
                item.classList.remove("programs__card--active");
            });
            programsCards[i].classList.add("programs__card--active");
        });
    });

});