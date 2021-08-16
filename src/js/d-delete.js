const BASE_URL = 'http://localhost:3000';

function removeBook(bookId) {
  const URL = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };
  return fetch(URL, options).then(response => response.json());
}

removeBook(4);
