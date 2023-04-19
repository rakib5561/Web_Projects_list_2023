
document.getElementById('post-btn').addEventListener('click', function(){

    const getComment = document.getElementById('get-comment');
    const userComment = getComment.value;

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = userComment;
    commentContainer.appendChild(p);
    getComment.value = '';

})