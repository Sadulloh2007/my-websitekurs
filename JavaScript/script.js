// Управление темами
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    const setTheme = (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    setTheme(savedTheme);
}

// Обновление курсов
function updateRates() {
    const rates = {
        usdt: { buy: 84.20, sell: 84.50 },
        usd: { buy: 84.60, sell: 84.90 },
        eur: { buy: 95.50, sell: 95.80 }
    };

    const format = value => `₽${value.toFixed(2).replace('.', ',')}`;

    Object.entries(rates).forEach(([currency, { buy, sell }]) => {
        document.getElementById(`${currency}-buy`).textContent = format(buy);
        document.getElementById(`${currency}-sell`).textContent = format(sell);
    });

    document.getElementById('update-time').textContent = 
        new Date().toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
}

// Инициализация
initTheme();
updateRates();
setInterval(updateRates, 60000);