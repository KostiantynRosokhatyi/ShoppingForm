//Validate button
function validate_button() {
    let first_name_input = document.getElementById('first_name').value;
    let phone_input = document.getElementById('phone').value;
    let regex_first_name_string= /^[A-ZА-Я][a-zа-я]{2,}$/.test(first_name_input);
    if(!regex_first_name_string){
        document.getElementById('first_name').classList.add('invalid');
        alert('Please,write correct all red inputs');
    }
    else if(phone_input == ''){
        document.getElementById('phone').classList.add('invalid');
        alert('Please,full all red input');
    }
    else if(!((document.querySelector("#first_name").classList.contains("invalid") || document.querySelector("#phone").classList.contains("invalid")))){
        document.getElementById('first_name').blur();
        // hide the forms
        $('#shipping_info_form').hide();
        $(function(){
            $('#shipping_info_form').show("slow");
            $('#shopping_form_first_step').hide();
            $('#customer-info_line').removeClass('span-title_selected');
            $('#line').addClass('gradient_line_second_step');
            $('#shipping-info_line').addClass('span-title_selected');
            let w = $(window).width(); // Получаем ширину окна
            if (w <= 480) { // Если ширина окна меньше, либо равна 600
                $('#one,#three').hide();
                $('#shipping-info_line').show();
            }
        });
        $('#back_button').on('click', function() {
            $('#shopping_form_first_step').show("slow");
            $('#shipping_info_form').hide();
            $('#line').removeClass('gradient_line_second_step');
            $('#customer-info_line').addClass('span-title_selected');
            $('#shipping-info_line').removeClass('span-title_selected');
            let w = $(window).width(); // Получаем ширину окна
            if (w <= 480) { // Если ширина окна меньше, либо равна 600
                $('#shipping-info_line,#three').hide();
                $('#customer-info_line').show();
            }
        });
    }
};
//validate input
function input_validate(){
    let inp = document.querySelectorAll('input[data-rule]');
    for(let input of inp){
        input.addEventListener('blur', function (){
            let rule = this.dataset.rule;
            let value = this.value;
            let check;
            switch (rule) {
                case 'first_name':
                    check = /^[A-ZА-Я][a-zа-я]{2,}$/.test(value);
                    break;
                case 'number':
                    check = /^\+3 8\(0\d{2}\) \d{3}-\d{2}-\d{2}$/.test(value);
                    break;
            };
            if(!check){
                this.classList.add('invalid');
            }else if(check){
                this.classList.remove('invalid');
            };
        });
    };
}
//validate phone number using mask
jQuery(function($){
    $('#phone').mask('+3 8(099) 999-99-99',{autoclear: false});
});
//include the map to the html
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
//Change color select option
$(document).ready(function(){
    $("#country").on('change',function(e)
    {
        let color = "#1b2125";
        let text = $(this).find('option:selected').text();
        $(this).css('color',color);
    });
});

