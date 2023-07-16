/******************Add the story ******************/
const image_profile = [
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user1'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user2'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user3'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user4'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user5'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user6'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user7'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user8'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user9'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user10'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user11'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user12'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user13'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user14'],
    ['https://i.ibb.co/gT0MFXY/profile-img.jpg','user15'],
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
