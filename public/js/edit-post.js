const postId = document.querySelector('input[name="post-id"]').value;

const editPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    console.log(title);
    console.log(content);
  
    if (title && content) {
      const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to save post.');
      }
    }
  };

  document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editPostHandler);