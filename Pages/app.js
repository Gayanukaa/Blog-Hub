var likeBtn = document.getElementById('like-btn');
var likeCount = document.getElementById('like-count');

likeBtn.addEventListener("click", function(){
    var count = parseInt(likeCount.innerHTML); // Get the current like count
    count++;
    likeCount.innerHTML = count;
});