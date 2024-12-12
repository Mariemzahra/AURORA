function notification(){
    Swal.fire({
        title: "You can visit our offline store",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}

function confirm() {
    Swal.fire({
        title: "Do you want to sign up?",
        icon: "question",
        iconHtml: "؟",   
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true
    }).then((result) => {
      
        if (result.isConfirmed) {
            
            Swal.fire({
                title: "Thank you ❤️",
                text: "We appreciate your sign up!",
                icon: "success",
                confirmButtonText: "You're welcome!"
            });
        }
        
    });
}

