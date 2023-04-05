var likeBtn = document.getElementById('like-btn');
var likeCount = document.getElementById('like-count');

if (localStorage.getItem("likeCount")) {
    likeCount.innerHTML = localStorage.getItem("likeCount"); // Get the like count from local storage
}

likeBtn.addEventListener("click", function(){
    var count = parseInt(likeCount.innerHTML); // Get the current like count
    count++;
    likeCount.innerHTML = count;
    localStorage.setItem("likeCount", count); // Store the like count in local storage
});