/******************Add the story ******************/
const image_profile = [
    ['https://github.com/smita2001/insta-clone/blob/main/images/insta-clone.jpg','user1'],
    ['../images/profile_img.jpg','user2'],
    ['../images/profile_img.jpg','user3'],
    ['../images/profile_img.jpg','user4'],
    ['../images/profile_img.jpg','user5'],
    ['../images/profile_img.jpg','user6'],
    ['../images/profile_img.jpg','user7'],
    ['../images/profile_img.jpg','user8'],
    ['../images/profile_img.jpg','user9'],
    ['../images/profile_img.jpg','user10'],
    ['../images/profile_img.jpg','user11'],
    ['../images/profile_img.jpg','user12'],
    ['../images/profile_img.jpg','user13'],
    ['../images/profile_img.jpg','user14'],
    ['../images/profile_img.jpg','user15'],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        500:{
            items:7,
            nav:false
        }
    }
})
