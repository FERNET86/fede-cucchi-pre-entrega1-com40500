<template>
  <div>
    <h2>Registro de Usuario</h2>
    <form @submit.prevent="registrarUsuario">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      email: '',
      password: ''
    };
  },
  methods: {
    registrarUsuario() {
      // Lógica para registrar al usuario en el servidor
      // Puedes usar axios para enviar una solicitud HTTP POST
      console.log('Usuario registrado:', this.nombre, this.email, this.password);
    }
  }
}
</script>

<style scoped>
/* Estilos del componente de registro */
</style>
