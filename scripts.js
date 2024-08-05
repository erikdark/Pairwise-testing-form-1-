let users = [];

document.getElementById('pairwiseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const age = parseInt(document.getElementById('age').value);

    let message = '';

    if (username && password && email && !isNaN(age)) {
        const userExists = users.some(user => user.username === username);
        
        if (userExists) {
            message = 'Ошибка регистрации: Имя пользователя уже существует.';
        } else {
            users.push({ username, password, email, age });
            message = 'Регистрация успешна!';
        }
    } else {
        message = 'Ошибка регистрации: Заполните все поля.';
    }

    document.getElementById('messageContainer').innerText = message;
    document.getElementById('pairwiseForm').reset();
});
