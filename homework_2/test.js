/**
 * Created by user on 26.10.2017.
 */
    jQuery('input[type="text"]').on('keyup', function (e) {
        if (e.target.value === 'JavaScript') {
            jQuery('input[type="checkbox"]').prop('checked', true);
        }
    });
