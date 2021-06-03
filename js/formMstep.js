initForm();
function onCreateActivity() {
    $("#btnStepOne").on("click", function () {
        $("#dPersonales").slideDown();
        stepOne();

    });
}

function initForm() {
    $("#containerForm").empty();
    $("#containerForm").append(`
    <div id="dPersonales" class="col-12 bg-light bg-gradient p-5 border border-success rounded ">
    <div>
        <div class="progress mb-3">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                style="width: 33%">Datos Personales</div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <input type="text" class="form-control shadow" placeholder="Nombre y Apellido"
                aria-label="First name">
        </div>
        <div class="col">
            <input type="text" class="form-control shadow" placeholder="DNI" aria-label="Last name">
        </div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="date" class="form-control shadow" placeholder="Nacimiento"
                aria-label="First name">
        </div>
        <div class="col">
            <input type="email" class="form-control shadow" placeholder="Email" aria-label="Last name">
        </div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" class="form-control shadow" placeholder="Domicilio"
                aria-label="First name">
        </div>

    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" class="form-control shadow" placeholder="Localidad"
                aria-label="First name">
        </div>
        <div class="col">
            <input type="email" class="form-control shadow" placeholder="C.P." aria-label="Last name">
        </div>
    </div>
    <div class="row">
        <div>
            <button id="btnStepOne" class="btn btn-success shadow mt-3">Siguiente</button>
        </div>
    </div>

</div>
    `);
    onCreateActivity();
}


function stepOne() {
   
    $("#containerForm").empty()
    $("#containerForm").append(`
    <div id="dProfesionales" class="col-12 bg-light bg-gradient p-5 border border-success rounded ">
    <div>
        <div class="progress mb-3">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success d-flex"
                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                style="width: 66%">Datos Profesionales</div>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col">
            <input type="text" class="form-control shadow" placeholder="Destino" aria-label="Destino">
        </div>
        <div class="col">
            <input type="text" class="form-control shadow" placeholder="Fuerza" aria-label="Fuerza">
        </div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" class="form-control shadow" placeholder="Jerarquia"
                aria-label="Jerarquia">
        </div>
        <div class="col">
            <input type="text" class="form-control shadow" placeholder="Legajo Personal"
                aria-label="Legajo Personal">
        </div>
    </div>

    <div class="row mt-5">
        <div class="d-flex justify-content-between">
            <button id="btnBackOne" class="btn btn-success shadow mt-3">Atras</button>
            <button id="btnStepTwo" class="btn btn-success shadow mt-3">Siguiente</button>
        </div>
    </div>

    </div>

    `);
    $("#btnBackOne").on("click", function () {
        initForm();
    });
    $("#btnStepTwo").on("click", function () {
        stepTwo();
    });

}
function stepTwo() {
    $("#containerForm").empty();
    $("#containerForm").append(`
    <div id="dMercado" class="col-12 bg-light bg-gradient p-5 border border-success rounded ">
                    <div>
                        <div class="progress mb-3">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success d-flex"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                style="width: 95%">Datos de Cobro</div>
                        </div>
                    </div>

                    <div class="row mt-5">
                        <h1 class="text-dark">Pasarela de pago</h1>
                    </div>


                    <div class="row mt-5">
                        <div class="d-flex justify-content-between">
                            <button id="btnStepOne" class="btn btn-success shadow mt-3">Atras</button>
                            <button class="btn btn-success shadow mt-3">Siguiente</button>
                        </div>
                    </div>

                </div>
    `);
    $("#btnStepOne").on("click", function () {
        stepOne();
    });

}
