async function changeUser() {
    try {
        const response = await fetch('http://ip-api.com/json/');
        const data = await response.json();

        document.getElementById('userKenglik').textContent = data.lat;
        document.getElementById('userUzunlik').textContent = data.lon;
        document.getElementById('userMamlakat').textContent = data.countryCode;
        document.getElementById('userShahar').textContent = data.city;
        document.getElementById('userManzil').textContent = data.query;
        document.getElementById('userNum').textContent = `${data.as} ${data.isp}`;

        const map = document.getElementById('map');
        map.src = `https://www.google.com/maps?q=${data.lat},${data.lon}&output=embed`;
    } catch (error) {
        console.error('Xatolik:', error);
    }
}
