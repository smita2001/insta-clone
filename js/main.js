
/***************Post**************************/
const posts = document.querySelector(".posts");
const post_data = [
  ['../images/profile_img.jpg','user1',45,'../images/insta-clone.jpg',150,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ',2],
  ['../images/profile_img.jpg','user2',15,'../images/insta-clone.jpg',150,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ',2],
  ['../images/profile_img.jpg','user3',5,'../images/insta-clone.jpg',350,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ',2],
  ['../images/profile_img.jpg','user4',15,'../images/insta-clone.jpg',150,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ',2],
  ['../images/profile_img.jpg','user5',15,'../images/insta-clone.jpg',150,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non minus cumque, recusandae hic soluta harum aut nulla... ',2],
]

if(posts)
  for (var i = 0; i < post_data.length; i++) {
    const post_div = document.createElement('div')
    post_div.classList.add("post");
    post_div.innerHTML = `
    <div class="info">
      <div class="person">
          <img src="${post_data[i][0]}">
          <a href="#">${post_data[i][1]}</a>
          <span class="circle">.</span>
          <span>${post_data[i][2]}m</span>
      </div>
      <div class="more">
          <img src="./images/show_more.png" alt="show more">
      </div>
    </div>
    <div class="image">
      <img src="${post_data[i][3]}" >
    </div>
    <div class="desc">
      <div class="icons">
          <div class="icon_left d-flex">
              <div class="like">
                  <img class="not_loved" src="./images/love.png" >
                  <img class="loved" src="./images/heart.png" >
              </div>
              <div class="chat">
                  <button type="button" class="btn p-0" data-bs-toggle="modal"
                      data-bs-target="#message_modal">
                      <img src="./images/bubble-chat.png" >
                  </button>
              </div>
              <div class="send">
                  <button type="button" class="btn p-0" data-bs-toggle="modal"
                      data-bs-target="#send_message_modal">
                      <img src="./images/send.png" >
                  </button>
              </div>
          </div>
          <div class="save not_saved">
              <img class="hide saved" src="./images/save_black.png" >
              <img class="not_saved" src="./images/save-instagram.png" >
          </div>
      </div>
      <div class="liked">
          <a class="bold" href="#">${post_data[i][4]} likes</a>
      </div>
      <div class="post_desc">
          <p>
              <a class="bold" href="#">${post_data[i][1]}</a>
              ${post_data[i][5]}
          </p>
          <p><a class="gray" href="#">View all ${post_data[i][6]} comments</a></p>
          <input type="text" placeholder="Add a comments...">
      </div>
    </div>
      `;
    posts.appendChild(post_div);
  }



/**************************search+notif-section **************************/
//search section notif
let search = document.getElementById("search");
let search_icon = document.getElementById("search_icon");
search_icon.addEventListener("click", function(){
  search.classList.toggle("show");
});

let notification = document.getElementById("notification");
let notification_icon = document.querySelectorAll(".notification_icon");
notification_icon.forEach( (notif)=>{
  notif.addEventListener('click',function(){
    notification.classList.toggle("show");
  })
} 
)


/**************************icons+text change **************************/
//change the icon when the user click on it

//love btn
let love_icons = document.querySelectorAll(".like");
love_icons.forEach(function(icon){
  icon.addEventListener("click",function(){
      let not_loved = icon.children[0];
      let loved = icon.children[1];
      icon.classList.toggle("love");
      not_loved.classList.toggle("hide_img");
      loved.classList.toggle("display");
  })
});

//save btn
let save_icon = document.querySelectorAll(".save");
save_icon.forEach(function(save){
  save.addEventListener("click",function(){
    let not_save = save.children[1];
    let saved = save.children[0];
    not_save.classList.toggle("hide");
    saved.classList.toggle("hide");

})
})

//notification follow 
let not_follow = document.querySelectorAll("#notification .notif.follow_notif")
not_follow.forEach(item=>{
  let follow = item.children[0].children[1].children[0];
  follow.addEventListener("click", function(e){
    e.stopPropagation();
    follow.classList.toggle("following");
    if(follow.classList.contains("following")){
      follow.innerHTML= "Following";
      follow.style.backgroundColor = 'rgb(142, 142, 142)';
      follow.style.color = "black";
    }else{
      follow.innerHTML= "Follow";
      follow.style.backgroundColor = 'rgb(0, 149, 246)';
      follow.style.color = "white";
    }
    
  });
})




