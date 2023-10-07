
document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('map', {
        center: [25.3548, 51.1839],
        maxBounds: [
        [90, -180], 
        [-90, 180], 
    ],
    maxBoundsViscosity: 1.0

    }).setView([25.3548, 51.1839], 1)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 3, minZoom:2
    }).addTo(map)
    

    const waypoints = [
        {coordinates: [33.1376, 81.8262], id: 1},
    ]

    waypoints.forEach(waypoint => {
        const marker = L.marker(waypoint.coordinates).addTo(map)
        marker.on('click', () => {
            window.location.href = `/waypoint/${waypoint.id}`
        })
    })
})