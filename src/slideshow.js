const slideshows = document.querySelectorAll('.slideshow')
const nextBtns = document.querySelectorAll('.next')
const prevBtns = document.querySelectorAll('.prev')
const thumbs = document.querySelectorAll('.column')
const thumbBtns = document.querySelectorAll('.thumb')
window.onload = () => {

    prevBtns.forEach(prevBtn=>{
        prevBtn.addEventListener('click', e=>{
            changeSlideP(prevBtn.parentElement.firstElementChild)
        })
    })

    nextBtns.forEach(nextBtn=>{
        nextBtn.addEventListener('click', e=>{
            console.log(nextBtn.previousElementSibling)
            changeSlideN(nextBtn.parentElement.firstElementChild)
        })
    })

    thumbs.forEach((thumb,i)=>{
        thumb.addEventListener('click', e=> {
            const slideshow = e.target.parentElement.parentElement.parentElement.firstElementChild
            thumbs.forEach(thumb1=>{
                thumb1.classList.remove('active')
            })
            thumb.classList.add('active');
            changeSlideTo(i,slideshow);
        })
    })

    console.log(thumbBtns)
    let activeThumbNr
    thumbBtns.forEach(thumbBtn=>{
        thumbBtn.addEventListener('click',e=>{
            thumbs.forEach((thumb,i)=>{
                if(thumb.classList.contains('active')) {
                    activeThumbNr = i
                    thumb.classList.remove('active');
                }
            })
            const newThumb = thumbBtn.classList.contains('prev') ? thumbs[activeThumbNr-1<0?2:activeThumbNr-1] : thumbs[activeThumbNr + 1>thumbs.length-1?0:activeThumbNr + 1]
            console.log(newThumb)
            newThumb.classList.add('active');

        })
    })
}

const changeSlideTo = (slide,slideshow)=> {
    const slides = slideshow.children
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.classList.remove('active')
    }
    slides[slide].classList.add('active')
    console.log(slides[slide])
}

const changeSlideP = (slideshow) => {
    let activeSlide
    for (let i = 0; i < slideshow.children.length; i++) {
        const slide = slideshow.children[i];
        if(slide.classList.contains('active')){
            activeSlide = slide
        }
    }
    const prevSlide = activeSlide.previousElementSibling ? activeSlide.previousElementSibling : slideshow.children[slideshow.children.length-1]
    activeSlide.classList.remove('active');
    prevSlide.classList.add('active');
}

const changeSlideN = (slideshow) =>{
    let activeSlide
    console.log(slideshow.children[0])
    for (let i = 0; i < slideshow.children.length; i++) {
        const slide = slideshow.children[i]
        if (slide.classList.contains('active')) {
            activeSlide = slide;
        }
    }
    const nextSlide = activeSlide.nextElementSibling ? activeSlide.nextElementSibling : slideshow.children[0];
    activeSlide.classList.remove('active')
    nextSlide.classList.add('active')
}
