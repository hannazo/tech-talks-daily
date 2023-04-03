const deleteCommentHandler = async (event) => {
    event.preventDefault();

    const commentId = document.querySelector('input[name="comment-id"]').value;
    const postId = document.querySelector('input[name="post-id"]').value;

    const response = await fetch(`/api/comment/${commentId}`, {
        method: 'DELETE',
        body: JSON.stringify({ id: commentId }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace(`/post/${postId}`);
    } else {
        alert('Failed to delete comment.');
    }
};

document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteCommentHandler);