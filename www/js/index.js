var map;
var latLng;
document.addEventListener("deviceready", function () {

    $("#informacion a").on("click", function () {
        map.setClickable(false);
        $("#oculto").slideToggle();

    });

    $(".currentPosition").on("click", function () {
        /*
         var myLatLng = new plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         
         
         
         map.addMarker({
         'position': myLatLng,
         'icon': 'www/img/red-marker.png',
         'title': "Hola!!"
         
         });
         
         map.animateCamera({
         'target': myLatLng,
         'tilt': 60,
         'zoom': 18,
         'bearing': 140
         });
         */

        map.getMyLocation(onSuccess, onError);

    });


    var div = document.getElementById("map_canvas");
    map = plugin.google.maps.Map.getMap(div);

    var startLocation = new plugin.google.maps.LatLng(-17.7749287, -63.1961543);
    latLng = new plugin.google.maps.LatLng(-17.775220, -63.196471);

    var initMapCamera = {
        'latLng': startLocation,
        //'tilt': 10,
        'zoom': 16
                //'bearing': 50
    }

    //Init map with custom options
    map.setOptions({
        'backgroundColor': 'white',
        'mapType': plugin.google.maps.MapTypeId.HYBRID,
        'controls': {
            'compass': true,
            'myLocationButton': true,
            //'indoorPicker': true,
            'zoom': true
        },
        'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true
        },
        'camera': initMapCamera
    });

    var iconSize = {
        width: 74,
        height: 46
    };
    for (i = 0; i < listaModulos.length; i++) {

        $("#oculto").append('<a class="NumModulo" href="javascript:localizarModulo(' + i + ')">' + listaModulos[i][0] + '</a>' +
                '<a class="NombreModulo" href="javascript:localizarModulo(' + i + ')">' + listaModulos[i][3] + '</a>');

        map.addMarker({
            'position': new plugin.google.maps.LatLng(listaModulos[i][1], listaModulos[i][2]),
            'icon': 'www/img/modulos/' + listaModulos[i][0] + '.png',
            'title': listaModulos[i][3],
            'snippet': "Haz click aqui!",
            'markerClick': function (marker) {
                marker.showInfoWindow();
            },
            'infoClick': function (marker) {
                marker.getPosition(function (latLong) {
                    window.open("https://www.google.com/maps/@" + latLong.lat + "," + latLong.lng + ",18z", '_blank', 'location=yes');
                });

                //https://www.google.com/maps/@39.774769,-74.86084,18z

                //marker.remove();
            }

        });
    }
});

var i = 0;

function localizarModulo(pos) {
    map.setClickable(true);
    var latLngModulo = new plugin.google.maps.LatLng(listaModulos[pos][1], listaModulos[pos][2]);
    $("#oculto").slideToggle();

    map.animateCamera({
        'target': latLngModulo,
        'tilt': 60,
        'zoom': 18,
        'bearing': 140
    });


}

var onSuccess = function (location) {
    /*
     var msg = ["Current your location:\n",
     "latitude:" + location.latLng.lat,
     "longitude:" + location.latLng.lng,
     "speed:" + location.speed,
     "time:" + location.time,
     "bearing:" + location.bearing].join("\n");
     */

    map.addMarker({
        'position': location.latLng
                //'title': msg
    }, function (marker) {
        marker.showInfoWindow();
    });

    map.animateCamera({
        'target': location.latLng,
        'tilt': 60,
        'zoom': 18,
        'bearing': 140
    });

};

var onError = function (msg) {
    alert("error: " + msg);
};



var listaModulos = [
    ['270', -17.773539, -63.197694, "Proyección"], //
    ['271', -17.774239, -63.197662, "Proyección"], //
    ['280', -17.774540, -63.197893, "Fac Ciencias de la Salud"], // 
    ['291', -17.774594, -63.198580, "Comedor Universitario"], //
    ['281', -17.774891, -63.198135, "Proyección"], //
    ['272', -17.774901, -63.197657, "Fac Ciencias de la Salud"], //
    ['282', -17.775192, -63.198092, "Fac Ciencias de la Salud"], //
    ['292', -17.775621, -63.198660, "Comedor Universitario"], //
    ['283', -17.776020, -63.198183, "Fac Ciencias Juridicas Politicas y Sociales"], // corregit
    ['293', -17.776331, -63.198628, "Proyección"], //
    ['285', -17.776627, -63.198242, "Proyección"], //
    ['284', -17.776383, -63.197867, "Proyección"], //
    ['274', -17.777517, -63.197561, "Canal 11"], //
    ['273', -17.775714, -63.197320, "Proyección"], //
    ['261', -17.773767, -63.196944, "Lab Fisica Quimica"], //
    ['260', -17.773497, -63.196735, "Lab Fisica y Quimica"], //
    ['262', -17.774334, -63.196864, "Fac de Humanidades"], //
    ['263', -17.774983, -63.196842, "Fac de Humanidades"], //
    ['250', -17.773333, -63.196408, "Lab Ciencias de la Salud"], //
    ['251', -17.773624, -63.196344, "Proyección"], //
    ['252', -17.773936, -63.196494, "Modulo de Aulas"], //
    ['253', -17.774753, -63.196445, "Modulo Servicios 2"], //
    ['254', -17.774753, -63.196445, "Fac de Humanidades"], //
    ['241', -17.773481, -63.196027, "Proyección"], //
    ['242', -17.774094, -63.196011, "Modulo de Aulas"], //
    ['243', -17.774498, -63.195968, "Modulo de Aulas"], //
    ['240', -17.773476, -63.195673, "Editorial Universitaria - Archivo Central"], //
    ['230', -17.773502, -63.195389, "Lab Hidraulica"], //
    ['232', -17.774074, -63.195308, "Modulo de Aulas"], //
    ['233', -17.774620, -63.195378, "Modulo de Aulas"], //
    ['231', -17.773670, -63.195131, "Proyección"], //
    ['220', -17.773645, -63.194868, "Proyección"], //
    ['221', -17.773691, -63.194686, "Lab Ing Civil"], //
    ['222', -17.774171, -63.194772, "Modulo de Aulas"], //
    ['210', -17.773961, -63.194246, "Proyección"], //
    ['211', -17.774258, -63.194080, "Modulo de Aulas"], //
    ['200', -17.774324, -63.193533, "Proyección"], //
    ['223', -17.774799, -63.194498, "Modulo de Servicios 3"], //
    ['234', -17.775131, -63.195110, "Biblioteca Tecnologica"], //
    ['235', -17.775675, -63.195099, "Proyección"], //
    ['225', -17.775690, -63.194928, "Proyección"], //
    ['224', -17.775328, -63.194450, "Facultad Tecnologica"], //
    ['212', -17.775445, -63.193967, "Facultad Politecnica"], //
    ['202', -17.775501, -63.193715, "Facultad Politecnica"], //
    ['201', -17.774801, -63.193490, "Modulo de Aulas"], //
    ['244', -17.775486, -63.195636, "Oficinas Tecnologia-Economicas"], //
    ['264', -17.776405, -63.196993, "Fac Ciencias Economicas"], //
    ['255', -17.776145, -63.196569, "Fac Ciencias Economicas"], //
    ['256', -17.776431, -63.196403, "Proyección"], //
    ['257', -17.776768, -63.196371, "Biblioteca Ciencias Economicas"], //
    ['265', -17.776702, -63.196848, "Fac Ciencias Economicas"], //
    ['245', -17.776227, -63.195834, "Modulo de Servicios 1"], //
    ['246', -17.776768, -63.195861, "Hospital de Animales"], //
    ['247', -17.777151, -63.196103, "Proyección"], //
    ['248', -17.777427, -63.195652, "Lab Morfosiologico"], //
    ['237', -17.777657, -63.195373, "Crematorio de Animales"], //
    ['238', -17.777585, -63.195196, "Oficinas Facultad Veterinaria"], //
    ['236', -17.776222, -63.195191, "Proyección"], //
    ['227', -17.776329, -63.195073, "Proyección"], //
    ['226', -17.776222, -63.194874, "Proyección"], // 
    ['228', -17.776222, -63.194874, "Facultad Veterinaria"], //
    ['229', -17.777131, -63.194482, "Biblioteca Veterinaria"], //
    ['213', -17.776293, -63.194080, "Facultad Contaduria Publica"], //
    ['214', -17.776551, -63.194021, "Proyección"], //
    ['215', -17.776919, -63.194043, "Proyección"],
];




