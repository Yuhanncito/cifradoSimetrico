<script setup>
  
  import { defineProps, ref } from 'vue';
  import {encryptMessage, decryptMessage} from './MetodoSJCL'
  
  const message = ref(''); 
  const encryptedMessage = ref(''); 
  const decryptedMessage = ref(''); 
  
  defineProps({
    msg: String,
  })
  
  const encryptMessageHandler = () => {
    encryptedMessage.value = encryptMessage(message.value, 'tu-contrasena');
  };

  const decryptMessageHandler = () => {
    decryptedMessage.value = decryptMessage(encryptedMessage.value, 'tu-contrasena');
  };
  
</script>

<template>
  <div class="card mx-auto" style="width: 50%;">
    <div class="card-body">
      <h1 class="card-title">{{ msg }}</h1>
      <div class="form-group">
        <label class="control-label" for="message">Mensaje:</label>
        <div class="col-sm-10">
          <input class="form-control" type="text" v-model="message" id="message">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button class="btn btn-danger" @click="encryptMessageHandler">Encriptar</button>
          <button class="btn btn-warning" @click="decryptMessageHandler">Desencriptar</button>
        </div>
      </div>
      <div class="card mx-auto" style="width: 50%;">
        <div class="card-body">
          <p class="card-text">Mensaje Encriptado: {{ encryptedMessage }}</p>
          <p class="card-text">Mensaje Desencriptado: {{ decryptedMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>