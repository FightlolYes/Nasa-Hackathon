
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
        {coordinates: [9.866224064560276,169, 169.6734452228526], id: 1},
        {coordinates: [11.064384410094505, -109.2093559825302], id: 1},
        {coordinates: [12.839205775242714,61.821954812449874], id: 1},
        {coordinates: [-29.352445085841218,74.61601321246778], id: 1},
        {coordinates: [73.65353873235472,-1.6994228578145032], id: 1},
    ]

    waypoints.forEach(waypoint => {
        const marker = L.marker(waypoint.coordinates).addTo(map)
        marker.on('click', () => {
            window.location.href = `/waypoint/${waypoint.id}`
        })
    })
})