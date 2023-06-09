<template>
  <div>
    <h2>Carrito de Compras</h2>
    <ul>
      <li v-for="producto in carrito" :key="producto.id">
        {{ producto.nombre }} - Precio: {{ producto.precio }}
        <button class="btn btn-danger" @click="eliminarDelCarrito(producto)">Eliminar</button>
      </li>
    </ul>
    <div v-if="carrito.length > 0">
      <h4>Total: {{ calcularTotal() }}</h4>
      <button class="btn btn-primary">Realizar Compra</button>
    </div>
    <div v-else>
      <p>No hay productos en el carrito</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrito: []
    };
  },
  methods: {
    agregarAlCarrito(producto) {
      // Lógica para agregar el producto al carrito
      this.carrito.push(producto);
    },
    eliminarDelCarrito(producto) {
      // Lógica para eliminar el producto del carrito
      const index = this.carrito.indexOf(producto);
      if (index > -1) {
        this.carrito.splice(index, 1);
      }
    },
    calcularTotal() {
      // Lógica para calcular el total de la compra
      let total = 0;
      this.carrito.forEach(producto => {
        total += producto.precio;
      });
      return total;
    }
  }
}
</script>

<style scoped>
/* Estilos del componente de carrito de compras */
</style>
