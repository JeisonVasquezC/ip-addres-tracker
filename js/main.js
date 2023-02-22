const API_URL = 'https://geo.ipify.org/api/v2';
const API_KEY = 'at_60pJY92sHYjt8kxaOo6ZU4EWH20T0';

const getGeolocation = async (ip) => {
    const response = await fetch(`${API_URL}/country,city?apiKey=${API_KEY}&ipAddress=${ip}`,{
        method: 'GET',
        redirect: 'follow',
    });
    const data = await response.json();
    
    spanIpAddress.innerText = data.ip;
    spanLocation.innerText = `${data.location.region}, ${data.location.city}`;
    spanTimeZone.innerText = `UTC ${data.location.timezone}`;
    spanIsp.innerText = data.isp;

    printMap(data.location.lat, data.location.lng, data.location.city);
}; 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valueInput = inputForm.value;
    
    getGeolocation(valueInput);
});

printMap(34.04915, -118.09462, 'NY 10001');