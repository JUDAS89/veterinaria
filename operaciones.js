const fs  = require('fs')

//AGREGAR-REGISTRAR

const registrar= (nombre, edad, tipo, color, enfermedad) => {
    if(!nombre||!edad||!tipo||!color||!enfermedad){
        console.error('Se deben ingresar todos los datos')
        return //finaliza el codigo cuando no me entregan todos los datos
    }

    const citas = JSON.parse(fs.readFileSync('citas.json','utf-8'))
    const nuevaCita = { nombre, edad, tipo, color, enfermedad, id:Math.floor(Math.random()*100).toString()
    }

    citas.push(nuevaCita)
    fs.writeFileSync('citas.json', JSON.stringify(citas, null,2))
    console.log('Cita registrada con exito')
}


//LEER CITAS
const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    console.log('Citas registradas:')
    console.log(citas)
}

module.exports = {registrar, leer}