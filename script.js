function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

openLink = document.getElementById('openLink').addEventListener('click',()=>{
    window.open('https://github.com/NitishKumar1B100','_blank')
})

connectLink = document.getElementById('connectLink').addEventListener('click',()=>{
    window.open('https://www.linkedin.com/in/nitish-k-a2877a250/','_blank')
})

const Resume = 'https://drive.google.com/file/d/1AfyC1EsqzfKBX2rrPPs0-rr1ZOJdjOtU/view?usp=sharing'

let resumeLink1 = document.getElementById('resumeLink1').addEventListener('click',()=>{
    console.log("clik");
    window.open(Resume)
})

let resumeLink2 = document.getElementById('resumeLink2').addEventListener('click',()=>{
    console.log("clik");
    window.open(Resume)
})

let openMailTo = document.getElementById('openMailTo').addEventListener('click',()=>{
    let mail = 'nitishkumar235969@gmail.com'
    window.location.href='mailto:'+mail
})

let openContactTo = document.getElementById('openContactTo').addEventListener('click',()=>{

})

let openLinkedinTo = document.getElementById('openLinkedinTo').addEventListener('click',()=>{
    window.open('https://www.linkedin.com/in/nitish-k-a2877a250/','_blank')
})

let openGithubTo = document.getElementById('openGithubTo').addEventListener('click',()=>{
    window.open('https://github.com/NitishKumar1B100','_blank')
})
