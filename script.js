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

document.getElementById('view-channels-btn').addEventListener('click', function () {
    window.location.href = 'all-channels.php';
});
