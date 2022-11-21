$(document).ready(function () {
    $("#form-email").submit(function (e) {
        e.preventDefault();

        // alert succes fill email form
        const email = $("#inputName").val();
        $("#alet-text").html("Halo <b>" + email + "</b>, Link sudah dapat di lihat di email anda");

        $("#divAlert").removeClass("d-none");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    $("#btnClose").click(function () {
        $("#divAlert").addClass("d-none");
    });

    $("#imgContent img").click(function () {
        const imgSrc = $(this).attr("src");
        $("#imgParent").attr("src", imgSrc)
        $("#imgParent").css("height", "400px")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    })


    // popup succes popup
    $("#form-checkout").submit(function (e) {
        e.preventDefault();
        // hiden form
        $(this).addClass("d-none");

        // value
        const firstName = $("#first-name", this).val();
        const lastName = $("#last-name", this).val();
        const name = firstName + " " + lastName;
        const address = $("#inputAddress", this).val();

        // kirim vllue
        $("#nama").html("Terima Kasih, " + name);
        $("#address").html("Paket akan dikirim ke " + address);


        // show msg
        $("#msg").removeClass("d-none");
        $("#btn-msg").removeClass("d-none");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    })



});