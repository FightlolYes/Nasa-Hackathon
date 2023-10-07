
document.addEventListener("DOMContentLoaded", () => {
    
    coordinates = [21, -157.5]

    const map = L.map('map', {
        center: [21, -157.5],
        maxBounds: [
        [90, -180], 
        [-90, 180], 
    ],
    maxBoundsViscosity: 1.0

    }).setView([21, -157.5], 2)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15, minZoom:3
    }).addTo(map)

    marker = L.marker().addTo(map)

})