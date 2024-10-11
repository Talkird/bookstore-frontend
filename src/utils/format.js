export function formatPeso(numero) {
    return numero.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  }

