document.addEventListener('DOMContentLoaded', () => {
    const leaderboardContainer = document.getElementById('leaderboards');

    fetch('https://api.chess.com/pub/leaderboards')
        .then(response => response.json())
        .then(data => { console.log(data)
            const players = data.live_rapid.slice(0, 50);

            players.forEach(player => {
                const card = document.createElement('div');
                card.className = 'card','card-start';
                let playerName = {
                    name: player.name,
                    username: player.username
                };
                let displayName = playerName.name ? playerName.name : playerName.username;
                card.innerHTML = `
                    <a href="${player.url}" id="rapid" class="text-decoration-none text-white">
                    <img src="${player.avatar || 'default-avatar.png'}" alt="${player.name}">
                    <div class="card-content">
                        <h2>#${player.rank}</h2>
                        <h4>${displayName}</h4>
                        <p>Rating: ${player.score}</p>
                        <p>Wins: ${player.win_count}</p>
                        <p>Losses: ${player.loss_count}</p>
                        <p>Draws: ${player.draw_count}</p>
                        <p>Country: ${player.country.slice(-2)}</p>
                                       
                    </div></a>
                `;

                leaderboardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching the leaderboard:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    const leaderboardContainer = document.getElementById('leaderboards2');

    fetch('https://api.chess.com/pub/leaderboards')
        .then(response => response.json())
        .then(data => { console.log(data)
            const players = data.live_blitz.slice(0, 50);

            players.forEach(player => {
                const card = document.createElement('div');
                card.className = 'card';
                let playerName = {
                    name: player.name,
                    username: player.username
                };
                let displayName = playerName.name ? playerName.name : playerName.username;
                card.innerHTML = `
                    <a href="${player.url}" id="blitz" class="text-decoration-none text-white">
                    <img src="${player.avatar || 'default-avatar.png'}" alt="${player.name}">
                    <div class="card-content">
                        <h2>#${player.rank}</h2>
                        <h4>${displayName}</h4>
                        <p>Score: ${player.score}</p>
                        <p>Wins: ${player.win_count}</p>
                        <p>Losses: ${player.loss_count}</p>
                        <p>Draws: ${player.draw_count}</p>
                        <p>Country: ${player.country.slice(-2)}</p>
                                       
                    </div></a>
                `;

                leaderboardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching the leaderboard:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    const leaderboardContainer = document.getElementById('leaderboards3');

    fetch('https://api.chess.com/pub/leaderboards')
        .then(response => response.json())
        .then(data => { console.log(data)
            const players = data.live_bullet.slice(0, 50);

            players.forEach(player => {
                const card = document.createElement('div');
                card.className = 'card';
                let playerName = {
                    name: player.name,
                    username: player.username
                };
                let displayName = playerName.name ? playerName.name : playerName.username;
                card.innerHTML = `
                    <a href="${player.url}" id="bullet" class="text-decoration-none text-white">
                    <img src="${player.avatar || 'default-avatar.png'}" alt="${player.name}">
                    <div class="card-content">
                        <h2>#${player.rank}</h2>
                        <h4>${displayName}</h4>
                        <p>Score: ${player.score}</p>
                        <p>Wins: ${player.win_count}</p>
                        <p>Losses: ${player.loss_count}</p>
                        <p>Draws: ${player.draw_count}</p>
                        <p>Country: ${player.country.slice(-2)}</p>
                                       
                    </div></a>
                `;

                leaderboardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching the leaderboard:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    const leaderboardContainer = document.getElementById('leaderboards4');

    fetch('https://api.chess.com/pub/leaderboards')
        .then(response => response.json())
        .then(data => { console.log(data)
            const players = data.daily.slice(0, 50);

            players.forEach(player => {
                const card = document.createElement('div');
                card.className = 'card';
                let playerName = {
                    name: player.name,
                    username: player.username
                };
                let displayName = playerName.name ? playerName.name : playerName.username;
                card.innerHTML = `
                    <a href="${player.url}" id="daily" class="text-decoration-none text-white">
                    <img src="${player.avatar || 'default-avatar.png'}" alt="${player.name}">
                    <div class="card-content">
                        <h2>#${player.rank}</h2>
                        <h4>${displayName}</h4>
                        <p>Score: ${player.score}</p>
                        <p>Wins: ${player.win_count}</p>
                        <p>Losses: ${player.loss_count}</p>
                        <p>Draws: ${player.draw_count}</p>
                        <p>Country: ${player.country.slice(-2)}</p>
                                       
                    </div></a>
                `;

                leaderboardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching the leaderboard:', error));
});

rapidd.addEventListener("click",()=>{
    rapidd.classList.add('active')
    blitzz.classList.remove('active')
    bullett.classList.remove('active')
    dailyy.classList.remove('active')
})

blitzz.addEventListener("click",()=>{
    rapidd.classList.remove('active')
    blitzz.classList.add('active')
    bullett.classList.remove('active')
    dailyy.classList.remove('active')
})

bullett.addEventListener("click",()=>{
    rapidd.classList.remove('active')
    blitzz.classList.remove('active')
    bullett.classList.add('active')
    dailyy.classList.remove('active')
})

dailyy.addEventListener("click",()=>{
    rapidd.classList.remove('active')
    blitzz.classList.remove('active')
    bullett.classList.remove('active')
    dailyy.classList.add('active')
})