<template>
  <div class="col-1 package-card q-pa-sm text-center q-ma-sm">
    <q-icon name="stream" text-primary style="font-size: 35px"/>
    <div class="col-12 q-my-sm">{{valor}} Lifecoins</div>
    <div class="col-12 q-my-sm">{{precio}} EUR</div>
    <q-input type="number" v-model="cantidad" class="shadow-1" :dense="true"/>
  </div>
</template>

<script>
export default {
  name: "PackageBox",
  data () {
    return {
      cantidad: 0
    }
  },
  props: ['valor', 'precio'],
  methods: {
    limpiar(){
      this.cantidad=0;
    }
  },
  updated(){
    this.$emit('cantidad', { valor: this.valor, precio: this.precio, cantidad: this.cantidad});
  }
};
</script>

<style scoped>
  .package-card{
    border: 3px solid #FF0000;
    border-radius: 5px;
  }

  .input-cantidad{
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%), 0 1px 10px rgb(0 0 0 / 12%) !important;

  }

  .q-field__native{
    padding: 0 0.5rem !important;
  }
  
</style>