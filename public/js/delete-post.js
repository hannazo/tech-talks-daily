const deletePostHandler = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('input[name="post-id"]').value;

    const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
        body: JSON.stringify({ post_id: postId }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post.');
    }
};

document
    .querySelector('#delete-btn')
    .addEventListener('click', deletePostHandler);