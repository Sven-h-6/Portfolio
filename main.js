function toggleMenu() {
    var menu = document.getElementById("side-menu");
    menu.classList.toggle("open");
}

function scrollToAbout() {
    var aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

function handleButtonClick(button) {
    var sections = document.querySelectorAll(".text-section");
    sections.forEach(function(section) {
        section.classList.remove("active"); 
    });
    
    // Supprimez la classe 'active' de tous les boutons
    var buttons = document.querySelectorAll(".about-button");
    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    // Affichez la section associée au bouton cliqué
    var sectionId = button.id;
    console.log(sectionId);
    var sectionToShow = document.getElementById("d" + sectionId);
    console.log(sectionToShow);
    if (sectionToShow) {
        sectionToShow.classList.add("active");
    }

    // Ajoutez la classe 'active' au bouton cliqué
    button.classList.add("active");
}
