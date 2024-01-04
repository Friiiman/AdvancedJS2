// TASK 1

// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];

    get allBooks() {
        return this.#books;
    };

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error('Книга с таким названием уже существует в списке.');
        } else {
            this.#books.push(title);
        }
    };

    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error('Книги с таким названием нет в списке.');
        } else {
            this.#books.splice(this.#books.indexOf(title), 1);
        }
    };

    hasBook(title) {
        return this.#books.includes(title);
    };

    constructor(booksArray) {
        if (booksArray.length !== new Set(booksArray).size) {
            throw new Error('Предоставленный массив содержит дубликаты.');
        } else {
            this.#books.push(...booksArray);
        }
    };
};

let newLibrary = new Library(['1', '2', '3', '4', '5']);
console.log(newLibrary.allBooks);

newLibrary.addBook('6');
console.log(newLibrary.allBooks);

newLibrary.removeBook('5');
console.log(newLibrary.allBooks);

console.log(newLibrary.hasBook('10'));



// TASK 2

// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const textAreaEl = document.querySelector('.review-text');
const buttonEl = document.querySelector('.review-button');
const ulEl = document.querySelector('.review-list');
const pErrorEl = document.querySelector('.review-error');

buttonEl.addEventListener('click', () => {
    try {
        if (textAreaEl.value.length < 50 || textAreaEl.value.length > 500) {
            throw new Error('Длинна отзыва не соответствует требованиям.');
        }
        const li = document.createElement('li');
        li.textContent = textAreaEl.value;
        ulEl.appendChild(li);
        pErrorEl.textContent = '';

    } catch (error) {
        pErrorEl.textContent = error.message;
    } finally {
        console.log('Попытка добавить отзыв завершена.');
    }
});
