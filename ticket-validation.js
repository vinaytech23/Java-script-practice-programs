function getData() {
    var tick = document.getElementById('ticket');
    console.log(tick.value);
    // alert(tick.value);
    var mob_em = document.getElementById('mob_email');
    console.log(mob_em.value);
    // alert(mob_em.value);
    // mob_email


    function valid() {
        console.log(mob_em.value);
        if (mob_em.value === '' || tick.value === '') {
            var eror = document.getElementById('err');
            eror.innerText = "Enter ticket number and email-id or mobile number";

        }

    }
    valid();

}