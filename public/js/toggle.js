var addCommentBtn = document.getElementById("add-comment");
var addCommentSection = document.querySelector(".add-comment");

var saveCommentBtn = document.getElementById("save-comment");
var newCommentSection = document.querySelector(".new-comment-card");

addCommentBtn.addEventListener('click', showNewCommentSection);

function showNewCommentSection() {
    addCommentSection.style.display = "none";
    newCommentSection.style.display = "block";
};