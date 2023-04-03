const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const text = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('input[name="post-id"]').value;
  
    if (text && post_id) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ text, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create new comment.');
      }
    }
  };

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);