const caba = {
  id: 'caba',
  name: 'Sucursal CABA',
  address: 'Av. Entre Ríos 754 - CABA',
  description:
    'El Mercado San Cristóbal es un gran mercado que se encuentra, a pesar de su nombre, en el barrio de Monserrat de la ciudad de Buenos Aires, Argentina. Se ubica en el cruce de las avenidas Independencia y Entre Ríos. Nuestro local es el número 60 y está en el primero piso.',
  images: ['/images/sucursal-1.jpg'],
  routes: [
    'Colectivos: 150, 50, 5, 12, 2, 37',
    'Subte: Línea E - estación Entre Ríos (3 cuadras)',
  ],
};

const sanMartin = {
  id: 'villamaipu',
  name: 'Sucursal Villa Maipú',
  address: 'Estrada 1578 - Villa Maipú',
  description:
    'Cruzando la Gral. Paz podrás encontrar nuestro local a la calle ubicado en el barrio de Villa Maipú. Se ubica entre las calles J.A Roca y Marcelo Torcuato de Alvear.',
  images: ['/images/sucursal-2.jpg'],
  routes: [
    'Colectivos: 127, 176, 111',
    'Subte: Línea B - estación Juan Manuel de Rosas (luego tomar 127)',
  ],
};

export const getSucursales = () => [caba, sanMartin];
