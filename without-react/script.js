function handleLikeButtonClick(event) {
  var likeButton = event.target;
  var teamCard = likeButton.parentNode.parentNode;
  var likeCountElement = teamCard.querySelector('.like-count');
  var likeCount = parseInt(likeCountElement.textContent);
  
  likeCount++;
  likeCountElement.textContent = likeCount;
}

var likeButtons = document.querySelectorAll('.like-button svg');
likeButtons.forEach(function(likeButton) {
  likeButton.addEventListener('click', handleLikeButtonClick);
});
