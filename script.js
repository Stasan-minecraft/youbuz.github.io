// script.js

document.getElementById('nickname').addEventListener('input', function () {
    const nickname = this.value;
    const nicknameStatus = document.getElementById('nickname-status');

    // Імітація запиту до серверу для перевірки унікальності ніку
    // Тут ви можете зробити справжній запит до вашого бекенду
    setTimeout(() => {
        if (nickname === 'existingNickname') { // Замінити на перевірку з базою даних
            nicknameStatus.textContent = 'Nickname is already taken';
        } else {
            nicknameStatus.textContent = '';
        }
    }, 500);
});

document.getElementById('channel-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const nickname = document.getElementById('nickname').value;
    const avatar = document.getElementById('avatar').files[0];

    if (!nickname || !avatar) {
        alert('Please fill in all fields');
        return;
    }

    // Імітація надсилання даних на сервер
    // Тут ви можете зробити справжній запит для створення каналу
    console.log('Form submitted', { nickname, avatar });

    alert('Channel created successfully!');
});

// Додавання події на кнопку "View All Channels"
document.getElementById('view-channels-btn').addEventListener('click', function () {
    window.location.href = 'https://stasan-minecraft.github.io/youbuz.github.io/file';
});
