const BASE_URL = 'http://localhost:3000';

const options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'Гарри Потер' }),
};

fetch(`${BASE_URL}/books/1`, options)
  .then(response => response.json())
  .then(console.log);
