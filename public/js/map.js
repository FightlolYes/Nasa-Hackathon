


document.addEventListener("DOMContentLoaded", () => {

    const names = []
    const coordinates = []
    let marker
    
    const map = L.map('map', {
        center: [28.3548, 51.1839],
        maxBounds: [
        [90, -180], 
        [-90, 180], 
    ],
    maxBoundsViscosity: 1.0

    }).setView([25.3548, 51.1839], 1)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 3, minZoom:2
    }).addTo(map)

    fetch('http://localhost:3000/api/coordinates')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json() 
    })
    .then(data => {
      data.forEach(item => {
          names.push(item.name)
          marker = L.marker(item.coordinates).addTo(map)
          console.log(item.coordinates)
          marker.on('click', () => {
            window.location.href = `/waypoint/${encodeURIComponent(item.name)}`
          })
      })
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
})