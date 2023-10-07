document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('map').setView([25.3548, 51.1839], 2)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 3,
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