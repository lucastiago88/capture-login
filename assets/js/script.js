let nomeInput = document.querySelector("#nome");
let senhaInput = document.querySelector("#senha");
let btnSubmit = document.querySelector("#submit-button");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = nomeInput.value;
    const senhaValue = senhaInput.value;

    if (nameValue === '' || senhaValue === '') {
        modalAlertError();
    }else{
        modalAlertTrue();
    }

});


function modalAlertError() {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor preencha os campos!',
        timer: 1900,
        showConfirmButton: false,
    })

}

function modalAlertTrue() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Wow...',
        text: 'Validado com sucesso!',
        timer: 1900,
        showConfirmButton: false,
    })

}