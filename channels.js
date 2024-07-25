// channels.js

document.addEventListener('DOMContentLoaded', function () {
    const channelsList = document.getElementById('channels');

    // Приклад даних каналів (зазвичай ці дані повинні отримуватися з сервера або бази даних)
    const channels = [
        { nickname: 'Channel1' },
        { nickname: 'Channel2' },
        { nickname: 'Channel3' }
    ];

    // Додавання каналів до списку
    channels.forEach(channel => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="https://stasan-minecraft.github.io/youbuz.github.io/${channel.nickname}">${channel.nickname}</a>`;
        channelsList.appendChild(listItem);
    });
});
