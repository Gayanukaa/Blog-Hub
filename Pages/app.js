const likeButton = document.getElementById('like-buttonn');
const likeCount = document.getElementById('like-count');

// if (localStorage.getItem("likeCount")) {
//     likeCount.innerHTML = localStorage.getItem("likeCount"); // Get the like count from local storage
// }

// likeBtn.addEventListener("click", function(){
//     var count = parseInt(likeCount.innerHTML); // Get the current like count
//     count++;
//     likeCount.innerHTML = count;
//     localStorage.setItem("likeCount", count); // Store the like count in local storage
// });

let count = 0; // initialize the like count to 0

// send an AJAX request to the server to update the like count
function updateLikeCount() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/update-like-count', true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      count = JSON.parse(xhr.responseText).count; // update the like count with the response from the server
      likeCount.textContent = `${count} likes`; // display the updated like count
    }
  };
  xhr.send(JSON.stringify({ count }));
}

likeButton.addEventListener('click', function() {
  count++; // increment the like count
  updateLikeCount(); // send the like count to the server to update it
});

// display the initial like count when the page loads
const xhr = new XMLHttpRequest();
xhr.open('GET', '/get-like-count', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    count = JSON.parse(xhr.responseText).count; // get the like count from the server response
    likeCount.textContent = `${count} likes`; // display the like count on the page
  }
};
xhr.send();

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.display = "none";
    }, 2500);
  });