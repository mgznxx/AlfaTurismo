document.getElementById('bot1').addEventListener('click', function() {
    Swal.fire({
        title:"<b>Feriado de Octubre </b>",
        text: "Salida jueves 10 de octubre feriado puente, fin de semana largo 6 dias 7 noches.",
        imageUrl: "./img/octubre_uno.jpeg",
        imageWidth: 270,
        imageHeight: 300,
        imageAlt: "Custom image",
        showCloseButton: true,
        confirmButtonText: "Reservar Viaje",
        customClass: {
            title: 'swal-title-color' // Aquí defines la clase personalizada para el título
        }
    
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    html: `
                    <form action="https://formspree.io/f/xyzgdrqv" method="POST">
                        <h2 class="titulo">ALFA Turismo</h2>
                        <h3>Complete el formulario y nos pondremos <br> en contacto a la brevedad. Gracias</h3>
                        <label for="nombre">Nombre y Apellido:</label>
                        <input type="text" id="nombre" name="nombre" required>

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>

                        <label for="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                        <input type="submit" value="Enviar">
                    </form>
                    `,
                });
            }
        });
    });                 



document.getElementById('bot2').addEventListener('click', function() {
    Swal.fire({
        title: "<b>Feriado de Octubre</b>",
        text: "Salida viernes 11 de octubre feriado puente, fin de semana largo 6 dias 3 noches.",
        imageUrl: "./img/octubre_dos.jpeg",
        imageWidth: 270,
        imageHeight: 300,
        imageAlt: "Custom image",
        showCloseButton: true,
        confirmButtonText: "Reservar Viaje",
        customClass: {
            title: 'swal-title-color' // Aquí defines la clase personalizada para el título
        }

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html: `
                <form action="https://formspree.io/f/xyzgdrqv" method="POST">
                    <h2 class="titulo">ALFA Turismo</h2>
                    <h3>Complete el formulario y nos pondremos <br> en contacto a la brevedad. Gracias</h3>
                    <label for="nombre">Nombre y Apellido:</label>
                    <input type="text" id="nombre" name="nombre" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                    <input type="submit" value="Enviar">
                </form>
                `,
            });
        }

        });
    });

document.getElementById('bot3').addEventListener('click', function() {
    Swal.fire({
        title: "<b>Feriado de Octubre</b>",
        text: "Salida jueves 10 de octubre feriado puente, fin de semana largo 5 dias 3 noches.",
        imageUrl: "./img/octubre_uno.jpeg",
        imageWidth: 270,
        imageHeight: 300,
        imageAlt: "Custom image",
        showCloseButton: true,
        confirmButtonText: "Reservar Viaje",
        customClass: {
            title: 'swal-title-color' // Aquí defines la clase personalizada para el título
        }

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html: `
                <form action="https://formspree.io/f/xyzgdrqv" method="POST">
                    <h2 class="titulo">ALFA Turismo</h2>
                    <h3>Complete el formulario y nos pondremos <br> en contacto a la brevedad. Gracias</h3>
                    <label for="nombre">Nombre y Apellido:</label>
                    <input type="text" id="nombre" name="nombre" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                    <input type="submit" value="Enviar">
                </form>
                `,
            });
        }

        });
    });

document.getElementById('bot4').addEventListener('click', function() {
    Swal.fire({
        title: "<b>Feriado de Octubre</b>",
        text: "Salida jueves 10 de octubre feriado puente, fin de semana largo 6 dias 3 noches.",
        imageUrl: "./img/octubre_uno.jpeg",
        imageWidth: 270,
        imageHeight: 300,
        imageAlt: "Custom image",
        showCloseButton: true,
        confirmButtonText: "Reservar Viaje",
        customClass: {
            title: 'swal-title-color' // Aquí defines la clase personalizada para el título
        }

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html: `
                <form action="https://formspree.io/f/xyzgdrqv" method="POST">
                    <h2 class="titulo">ALFA Turismo</h2>
                    <h3>Complete el formulario y nos pondremos <br> en contacto a la brevedad. Gracias</h3>
                    <label for="nombre">Nombre y Apellido:</label>
                    <input type="text" id="nombre" name="nombre" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                    <input type="submit" value="Enviar">
                </form>
                `,
            });
        }

        });
    });

document.getElementById('bot5').addEventListener('click', function() {
    Swal.fire({
        title: "<b>Feriado de Octubre</b>",
        text: "Salida jueves 10 y viernes 11 de octubre feriado puente, fin de semana largo 4 dias 3 noches.",
        imageUrl: "./img/octubre_uno.jpeg",
        imageWidth: 270,
        imageHeight: 300,
        imageAlt: "Custom image",
        showCloseButton: true,
        confirmButtonText: "Reservar Viaje",
        customClass: {
            title: 'swal-title-color' // Aquí defines la clase personalizada para el título
        }

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html: `
                <form action="https://formspree.io/f/xyzgdrqv" method="POST">
                    <h2 class="titulo">ALFA Turismo</h2>
                    <h3>Complete el formulario y nos pondremos <br> en contacto a la brevedad. Gracias</h3>
                    <label for="nombre">Nombre y Apellido:</label>
                    <input type="text" id="nombre" name="nombre" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                    <input type="submit" value="Enviar">
                </form>
                `,
            });
        }

        });
    });

document.getElementById('bot6').addEventListener('click', function() {
    Swal.fire({
        title: "<b>Feriado de Octubre</b>",
        text: "Salida jueves 10 de octubre feriado puente, fin de semana largo 5 dias 3 noches.",
            imageUrl: "./img/octubre_uno.jpeg",
        imageWidth: 270,
        imageHeight: 300,
        imageAlt: "Custom image",
        showCloseButton: true,
        confirmButtonText: "Reservar Viaje",
        customClass: {
            title: 'swal-title-color' // Aquí defines la clase personalizada para el título
        }

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html: `
                <form action="https://formspree.io/f/xyzgdrqv" method="POST">
                    <h2 class="titulo">ALFA Turismo</h2>
                    <h3>Complete el formulario y nos pondremos <br> en contacto a la brevedad. Gracias</h3>
                    <label for="nombre">Nombre y Apellido:</label>
                    <input type="text" id="nombre" name="nombre" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                    <input type="submit" value="Enviar">
                </form>
                `,
            });
        }

        });
    });


// Manejo del menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
