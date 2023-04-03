const editCommentHandler = async (event) => {
    event.preventDefault();
  
    const text = document.querySelector('#comment').value.trim();
    const commentId = document.querySelector('input[name="comment-id"]').value;
    const postId = document.querySelector('input[name="post-id"]').value;

    if (text && commentId) {
      const response = await fetch(`/api/comment/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify({ text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${postId}`);
      } else {
        alert('Failed to save comment.');
      }
    }
  };

  document
    .querySelector('.edit-comment-form')
    .addEventListener('submit', editCommentHandler);