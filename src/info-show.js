const btnArr = document.querySelectorAll('.info-show-item-btn')
const pArr = document.querySelectorAll('.info-show-item-text')
const video1 = document.getElementById('v1')
const video2 = document.getElementById('v2')
const video3 = document.getElementById('v3')
const videos = [video1, video2, video3]
btnArr.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        btnArr.forEach(btn=>{
            btn.children[0].classList.remove('active')
        })
        btn.children[0].classList.add('active')
        console.log(btn.children[0])
        pArr.forEach(p=>p.classList.remove('active'))
        e.target.parentElement.nextElementSibling.classList.contains('active') ? e.target.parentElement.nextElementSibling.classList.remove('active') : e.target.parentElement.nextElementSibling.classList.add('active');
        videos.forEach(vid=>vid.classList.remove('active'))
        e.target.id == 'a1' ? video1.classList.add('active') :
            e.target.id == 'a2' ? video2.classList.add('active') : video3.classList.add('active')
    })
})