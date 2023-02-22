const printMap = (lan, lng, location) => {
    const containerMap = document.querySelector('#map');

    if(containerMap){
        sectionMap.removeChild(containerMap);
    }

    const divMap = document.createElement('div');
    divMap.setAttribute("id", "map");
    sectionMap.appendChild(divMap);
    
    var map = L.map('map').setView([lan, lng], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    L.marker([lan, lng]).addTo(map)
        .bindPopup(location)
        .openPopup();
}
