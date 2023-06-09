<template>
  <div>
    <h2>Listado de Productos</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto.id">
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.precio }}</td>
          <td>
            <button class="btn btn-primary" @click="agregarAlCarrito(producto)">Agregar al Carrito</button>
            <router-link :to="{ path: '/info', query: { id: producto.id } }" class="btn btn-info">Ver Detalles</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [
        { id: 1, nombre: 'Manzanas', precio: 2.5 },
        { id: 2, nombre: 'Plátanos', precio: 1.8 },
        { id: 3, nombre: 'Naranjas', precio: 2.0 },
        { id: 4, nombre: 'Fresas', precio: 3.5 }
      ]
    };
  },
  methods: {
    agregarAlCarrito(producto) {
      // Lógica para agregar el producto al carrito
      console.log('Producto agregado al carrito:', producto);
    }
  }
}
</script>

<style scoped>
/* Estilos del componente de listado de productos */
</style>
