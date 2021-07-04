const portbuttons = document.querySelector(".filter-menu").children;
const portCards = document.querySelectorAll(".thumb");

// javascript logic for portfolio cards 
for(let btn of portbuttons) {
    btn.addEventListener("click", () => {
        for(btncolor of portbuttons) {
            btncolor.classList.remove("current")
        }
        btn.classList.add("current")
       
        let target = btn.getAttribute("data-target");

        for(let card of portCards) {
            card.style.display = "none"
            if(card.getAttribute("data-item") === target || target === "all") {
                card.style.display = "block"
            }
        }
    })
};

// javascript logic for about tabs display
let aboutbuttons = document.querySelectorAll(".selectors");
let content = document.querySelectorAll(".reveal");
let activeTab = document.querySelector(".activeTab")
let tabs = document.querySelectorAll(".tabs")

for(let btn of aboutbuttons) {
  btn.addEventListener("click", () => {
    for(clicked of aboutbuttons) {
      clicked.classList.remove("active")
    }
      btn.classList.add("active")
      let target = btn.getAttribute("data-target");

      for(cont of content) {
        cont.style.display = "none";
        if(cont.getAttribute("data-item") === target) {
          cont.style.display = "block"
        }
      }
  })
}
activeTab.style.display = "block";

// navlinks effects on click 
const navItem = document.querySelectorAll(".nav-link");
const navBtn = document.querySelector(".navBtn #contacts");
for(let item of navItem) {
  item.addEventListener("click", () => {
    for(click of navItem || navBtn) {
      click.classList.remove("activer")
    }
    item.classList.add("activer")
  })
}

// navlinks effects on scroll 
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 2)) {
      current = section.getAttribute("id")
    }
  })
  navItem.forEach(li => {
  li.classList.remove("active2");
  if(li.classList.contains(current)) {
    li.classList.add("active2")
  }
})
})
