function drawRoute() {
    const startPoint = [START_LATITUDE, START_LONGITUDE]; // Replace with actual start coordinates
    const endPoint = [END_LATITUDE, END_LONGITUDE]; // Replace with actual end coordinates

    const route = L.Routing.control({
        waypoints: [
            L.latLng(startPoint),
            L.latLng(endPoint)
        ]
    }).addTo(this.map);

    route.on('routesfound', function (e) {
        const { routes } = e;
        L.geoJSON(routes[0].toGeoJSON()).addTo(this.map);
    });

};
