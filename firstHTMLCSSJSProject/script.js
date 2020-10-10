const twitterForm = document.getElementById('comentario');

function addComment(event) {
    console.log("esta funcion fue llamada");
    event.preventDefault();
    const comment = twitterForm.comment.value;
    const divComment = document.createElement('div');
    divComment.className = "user-comment";
    const divUser = document.createElement('div');
    divUser.className = "user"
    const divUserName = document.createElement('div');
    divUserName.innerText = "Alphacode";
    const divUserAt = document.createElement('div');
    divUserAt.className = "at";
    divUserAt.innerText = "@alphacode";
    divUser.appendChild(divUserName);
    divUser.appendChild(divUserAt);
    const content = document.createElement('div');
    content.className = "content";
    const tweetContent = document.createElement('span');
    tweetContent.innerText = comment;
    content.appendChild(tweetContent);
    divComment.appendChild(divUser);
    divComment.appendChild(content);
    const newComment = document.getElementById('comments');
    //newComment.insertBefore(divComment, newComment.childNodes[0]);
    newComment.appendChild(divComment);
    twitterForm.comment.value = "";
}

twitterForm.onsubmit = addComment;