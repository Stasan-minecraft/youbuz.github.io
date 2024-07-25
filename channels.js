// channels.js

document.addEventListener('DOMContentLoaded', function () {
    const channelsList = document.getElementById('channels');

    // Приклад даних каналів (зазвичай ці дані повинні отримуватися з сервера або бази даних)
    const channels = [
        { nickname: 'Channel1', avatar: 'path/to/avatar1.png' },
        { nickname: 'Channel2', avatar: 'path/to/avatar2.png' },
        { nickname: 'Channel3', avatar: 'path/to/avatar3.png' }
    ];

    // Додавання каналів до списку
    channels.forEach(channel => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${channel.avatar}" alt="${channel.nickname}'s avatar" class="avatar">
            <span>${channel.nickname}</span>
        `;
        channelsList.appendChild(listItem);
    });
});
