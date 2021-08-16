const BASE_URL = 'http://localhost:3000';

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

addBook({
  title: 'Гении и аутсайдеры',
  author: 'Малькольн Гладуел',
  genres: ['бизнес', 'мотивация'],
  rating: 7.38,
})
  .then(renderBook)
  .catch(error => console.log(error));

function renderBook(book) {
  console.log('Пришел ответ от букенда можно рисовать!');
  console.log(book);
}
