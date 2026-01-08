const navlinks=document.querySelectorAll("header nav a");
const logolinks = document.querySelector(".logo")
const section =document.querySelectorAll("section")
const addlinks =()=>{
    const barsbox = document.querySelector(".bars-box")
    const header=document.querySelector("header")
    header.classList.remove("active")
    setInterval(() => {
        header.classList.add("active")
    }, 900);
    navlinks.forEach(link => {
        link.classList.remove("active")
    });
    barsbox.classList.remove("active")
    setInterval(() => {
        barsbox.classList.add("active")
    }, 900);
    section.forEach(s => {
         s.classList.remove("active")
    });
}
navlinks.forEach((element,idx) => {
    element.addEventListener("click",()=>{
        if(!element.classList.contains("active")){
            addlinks();
            element.classList.add("active");
            setTimeout(() => {
                section[idx].classList.add('active')
            }, 900);
        }

    })
});
logolinks.addEventListener("click",()=>{
    if(!navlinks[0].classList.contains("active")){
        addlinks();
    }
    navlinks[0].classList.add("active");
    setTimeout(() => {
                section[0].classList.add('active')
            }, 900);
})

const resumebtns = document.querySelectorAll(".resume-btn");

resumebtns.forEach((btn ,idx ) => {
    btn.addEventListener("click", () => {
        const details = document.querySelectorAll(".resume-detail")
        resumebtns.forEach(b => {
            b.classList.remove("active");
        });
        btn.classList.add("active");
        details.forEach((e) =>{
            e.classList.remove("active");
        })
        details[idx].classList.add("active")
    });
});
 
const Rightarrow = document.querySelector(".arrow-right");
const Leftarrow = document.querySelector(".arrow-left");

let index = 0;
const maxIndex = 2;

const activePortfolio = () => {
    const imgslide = document.querySelector(".img-slider");
    const PortfolioDetails = document.querySelectorAll(".portfolio-detail")
    imgslide.style.transform = `translateX(calc(${index * -100}% - ${index * 3}rem))`;
    PortfolioDetails.forEach(element => {
        element.classList.remove("active")
    });
    PortfolioDetails[index].classList.add("active")
};

Rightarrow.addEventListener("click", () => {
    if (index < maxIndex) {
        index++;
        Leftarrow.classList.remove("disabled")
    }
    else{
        index=2
        Rightarrow.classList.add("disabled")
    }
    activePortfolio();
});

Leftarrow.addEventListener("click", () => {
    if (index > 0) {
        index--;
        Rightarrow.classList.remove("disabled")
    }
    else{
        index=0;
        Leftarrow.classList.add("disabled")
    }
    activePortfolio();
});
