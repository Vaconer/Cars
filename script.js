document.addEventListener('DOMContentLoaded', function() {

    let carropreto = document.getElementById('carropreto');
    let initialMarginTopCarroPreto = parseInt(window.getComputedStyle(carropreto).marginTop);

    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            carropreto.style.marginTop = (initialMarginTopCarroPreto + 10) + 'px';
        } else {
            carropreto.style.marginTop = initialMarginTopCarroPreto + 'px';
        }
    });
});
