$("#mc-embedded-subscribe").on("click", function () {
    
    var este=this.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1];
    var name=document.getElementById("mce-FNAME").value;
    var apellido=document.getElementById("mce-LNAME").value;
    var email=document.getElementById("mce-EMAIL").value;
    var fuerza=document.getElementById("mce-MMERGE6").value;
    var consulta=document.getElementById("mce-MMERGE7").value;
    const dataPost={FNAME:name,EMAIL:email,MMERGE7:consulta,apell:apellido,fuer:fuerza};
    
    const URL="contacto.php";
    $.ajax({
        type: "POST",
        url: URL,
        data:dataPost,
        dataType:"json",
        success: function (response) {
            console.log(response);
            alert("chinga su padre");
        }
    });
});
$("#wapp").on("click", function () {
    clikWapp();
});


