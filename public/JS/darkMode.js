

const btnChangeMode = document.getElementById('alternar-modo')

const theme = window.localStorage.getItem("theme");

if (theme === "escuro") {
    document.body.classList.add("dark__mode");
    
}

btnChangeMode.addEventListener("click", () => {
    document.body.classList.toggle("dark__mode");

    if (theme == 'escuro') {
        localStorage.setItem('theme', 'claro')
        } else {
            localStorage.setItem('theme', 'escuro');
                
        }
})



