$(document).ready(function(){
    jQuery('input[type="text"]').on('keyup', function (e) {
        var rule = /^JavaScript$/;
        rule.test(e.target.value);
        if (rule.test(e.target.value) === true) {
            jQuery('input[type="checkbox"]').prop('checked', true);
        }
    });
});