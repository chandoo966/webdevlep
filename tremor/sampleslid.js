var swiper=new Swiper(".Swiper",{
    grabCursor: true,
    initialSlide:4,
    centeredSlides:true,
    slidesPerView:"auto",
    spaceBetween:14,
    freeMode:false,
    autoplay:{
        delay:5000,
    },
    on:{
        click(event){
            swiper.slideTo(this.clickedIndex);
        }
    }
}

)