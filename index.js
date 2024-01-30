
    // $(document).ready(function () {
    //     // Initialize the phone input with international format and dropdown
    //     $("#phone").intlTelInput({
    //         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
    //         separateDialCode: true,
    //         initialCountry: "auto",
    //         geoIpLookup: function (callback) {
    //             // Use a GeoIP lookup service to determine the user's country
    //             // You may want to replace this with a more reliable service
    //             $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
    //                 var countryCode = (resp && resp.country) ? resp.country : "";
    //                 callback(countryCode);
    //             });
    //         },
    //     });
    // });



$('#country').change(function () {
    var countryCode = $(this).val();

    if (countryCode) {
        $('#phone').val(countryCode);
    }
});
