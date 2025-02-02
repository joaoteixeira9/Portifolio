const acordeonIdiomas = document.getElementById("arcodeon-idiomas");
const acordeonPortifolio = document.getElementById("arcodeon-portifolio");
const acordeonExperiencia = document.getElementById("arcodeon-experiencia");
const acordeonSkills = document.getElementById("arcodeon-skills");

acordeonIdiomas.addEventListener("click", function () {
    acordeonIdiomas.classList.toggle('open');
});

acordeonPortifolio.addEventListener("click", function () {
    acordeonPortifolio.classList.toggle('open');
});

acordeonExperiencia.addEventListener("click", function () {
    acordeonExperiencia.classList.toggle('open');
});

acordeonSkills.addEventListener("click", function () {
    acordeonSkills.classList.toggle('open');
});
