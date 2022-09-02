const btn = document.querySelector('.btn-success')
btn.addEventListener ('click', () => { 
    Swal.fire({
        title: 'Compra realizada con exito',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    })