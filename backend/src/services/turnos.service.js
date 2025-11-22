// Servicio de turnos: acá va TODA la lógica de negocio.
// Valido datos, guardo en la base, obtengo turnos, etc.

import prisma from "../prisma.js";

export const turnosService = {

  // Crear turno
  async crearTurno({ tipoServicio, fechaInicio, horaInicio, cantidadMascotas, id_usuario }) {

    // Valido el tipo de servicio 
    const validos = ["guarderia", "paseo", "cuidado"];
    if (!validos.includes(tipoServicio)) {
      throw new Error("Tipo de servicio inválido");
    }

    const turno = await prisma.turno.create({
      data: {
        tipoServicio,
        fechaInicio: new Date(fechaInicio),
        horaInicio,
        cantidadMascotas: Number(cantidadMascotas),
        id_usuario
      }
    });

    return turno;
  },

  // Obtener turnos del usuario
  async obtenerTurnos(id_usuario) {
    const turnos = await prisma.turno.findMany({
      where: { id_usuario },
      orderBy: { fechaInicio: "asc" }
    });

    return turnos;
  }
};
