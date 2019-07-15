var map;

function initMap() {

    const location = { lat: 42.610230, lng: 23.032140 };
    map = new google.maps.Map(document.querySelector('.map'), {

        zoom: 14,
        center: location
    });
    const marker = new google.maps.Marker({ position: location, map: map })

}