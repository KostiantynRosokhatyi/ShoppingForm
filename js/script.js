

jQuery(function($){
    $('#phone').mask('+3 8(099) 999-99-99',{autoclear: false});
});/*
function test(){
    let blia = document.getElementById('phone').value;
    let ue = blia.length;
    alert(ue);
}*/


/*function MagicLine() {
    let elements = document.getElementsByClassName("span-title");
    for (let i = 0; i < elements.length; i++) {/!*прокручиваем в цикле все элементы*!/
        elements[i].addEventListener('click', function() {  /!*при клике на элемент
 *!/
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove('span-title_selected'); /!*удаляем у всех class active*!/
            }
            this.classList.add('span-title_selected');/!*добавляем class active по которому кликнули *!/
        })
    }
}*/

/*function Next2() {

    let elements = document.getElementById("twot");
    let elements2 = document.getElementById("twor");
    let elements3 = document.getElementById("two");
    let elements4 = document.getElementById("line");
    let elements5 = document.getElementById("one");

    elements.classList.remove('shop1');/!*добавляем class active по которому кликнули *!/
    elements.classList.add('shop2');/!*добавляем class active по которому кликнули *!/

    elements2.classList.remove('shop2');/!*добавляем class active по которому кликнули *!/
    elements3.classList.add('span-title_selected');
    elements4.classList.add('test2');
    elements5.classList.remove('span-title_selected');/!*добавляем class active по которому кликнули *!/

}*/

$(document).ready(function() {
// hide the forms when page is ready
$('#twor').hide();
//$('#b').hide();

$('#firstbt').click(function(){
        $('#twor').show("slow");
        $('#twot').hide();
        $('#one').removeClass('span-title_selected');
        $('#line').addClass('test2');
        $('#two').addClass('span-title_selected');
        let w = $(window).width(); // Получаем ширину окна
        if (w <= 480) { // Если ширина окна меньше, либо равна 600
            $('#one,#three').hide();
            $('#two').show();
        }
    });
$('#backbt').on('click', function() {
// действия, которые будут выполнены при наступлении события...
    $('#twot').show("slow");
    $('#twor').hide();
    $('#line').removeClass('test2');
    $('#one').addClass('span-title_selected');
    $('#two').removeClass('span-title_selected');
    let w = $(window).width(); // Получаем ширину окна
    if (w <= 480) { // Если ширина окна меньше, либо равна 600
        $('#two,#three').hide();
        $('#one').show();
    }

});

});

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: { lat: 53.726588, lng: -1.869318 },
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        disableDefaultUI: true
    });
    const geocoder = new google.maps.Geocoder();

/*    document.getElementById("submit").addEventListener("click", () => {
        geocodeAddress(geocoder, map);
    });*/
}

function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
            resultsMap.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

$(document).ready(function(){

    $("#country").on('change',function(e)
    {
        var color = "#1b2125";
        var text = $(this).find('option:selected').text();


        $(this).css('color',color);
    });
});
/*Validation*/
