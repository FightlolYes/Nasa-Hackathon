
document.addEventListener("DOMContentLoaded", () => {
    
    coordinates = [25.681137, -89.890137]

    const map = L.map('map', {
        center: [25.681137, -89.890137],
        maxBounds: [
        [90, -180], 
        [-90, 180], 
    ],
    maxBoundsViscosity: 1.0

    }).setView([25.681137, -89.890137], 2)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15, minZoom:3
    }).addTo(map)

    marker = L.marker().addTo(map)

})