const cargarRegistros = async (event) => {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let dni = document.getElementById("numeroDocumento").value;
  let numeroCelular = document.getElementById("numeroCelular").value;
  let email = document.getElementById("mail").value;

  event.preventDefault(); // para que no recargue la página
  const url = `http://localhost:3000/users`;
  const resp = await fetch(url);
  const data = await resp.json();

  console.log(nombre);
  console.log(apellido);
  console.log(edad);
  console.log(dni);
  console.log(numeroCelular);

  const algo = data.findIndex(
    (inscripto) => inscripto.numeroDocumento === parseInt(dni)
  );

  if (email.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) {
    console.log(`correo valido`);
  } else {
    console.log("correo invalido");
    return;
  }

  let newUser = {
    id: cargarRegistros.length + 1,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    numeroDocumento: dni,
    numeroCelular: numeroCelular,
    mail: email,
  };

  console.log(newUser);

  fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({
      id: 3,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      numeroDocumento: dni,
      numeroCelular: numeroCelular,
      mail: email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(() => window.location.reload());
};
