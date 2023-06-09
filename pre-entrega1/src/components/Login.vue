<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="iniciarSesion">
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    iniciarSesion() {
      // Lógica para autenticar al usuario en el servidor
      // Puedes usar axios para enviar una solicitud HTTP POST
      console.log('Iniciando sesión:', this.email, this.password);
    }
  }
}
</script>

<style scoped>
/* Estilos del componente de inicio de sesión */
</style>
