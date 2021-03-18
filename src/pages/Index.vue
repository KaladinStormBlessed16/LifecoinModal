<template>
  <q-page class="flex flex-center">
    <q-btn label="Comprar Lifecoins" color="primary" @click="modal = true" />

    <q-dialog
      v-model="modal"
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-primary text-white main-card">
        <q-bar>
          <div>Paquetes de Lifecoins</div>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup @click="cleanTable">
            <q-tooltip content-class="bg-white text-primary">Cerrar</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card class="bg-secondary text-primary q-pa-md">
          <q-card class="shadow-card row">
            <q-card-section class="col-12">
              <div class="text-center">PAQUETES DE LIFECOINS</div>
              <q-separator class="bg-accent q-mt-sm" />
            </q-card-section>

            <q-card-section class="col-md-7 col-12">
              <div class="col-12 flex flex-center">
                <PackageBox
                  v-for="item of paquetes"
                  :key="item.valor"
                  :valor="item.valor"
                  :precio="item.precio"
                  @cantidad="setListado"
                  ref="package">
                </PackageBox>
              </div>
            </q-card-section>

            <q-card-section class="col-md-5 col-12">
              <div class="col-12">
                <Pedido :items="selectedItems" @clear="limpiarCampos"></Pedido>
              </div>
            </q-card-section>
          </q-card>
        </q-card>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import PackageBox from "../components/PackageBox.vue";
import Pedido from "../components/Pedido.vue";

export default {
  name: "LifecoinIndex",
  components: { PackageBox, Pedido },
  data() {
    return {
      modal: false,
      paquetes: [
        { valor: 1000, precio: 190, cantidad: 0 },
        { valor: 1500, precio: 270, cantidad: 0 },
        { valor: 3000, precio: 510, cantidad: 0 },
        { valor: 5000, precio: 800, cantidad: 0 },
        { valor: 10000, precio: 1500, cantidad: 0 },
        { valor: 20000, precio: 2800, cantidad: 0 },
      ],
      selectedItems: [{ valor: '', precio: '', cantidad: '', descuento: '', total: ''}]
    };
  },
  computed: {},
  methods: {
    setListado(obj) {
      this.paquetes[
        this.paquetes.findIndex((item) => item.valor === obj.valor)] = obj;
      this.selectedItems = this.paquetes.filter((item) => item.cantidad > 0);

      this.selectedItems = this.selectedItems
        .map((item) => ({
          valor: item.valor,
          precio: item.precio,
          cantidad: item.cantidad,
          descuento: item.cantidad * item.precio * 0.05,
          total: "",
        }))
        .map((item) => ({
          valor: item.valor,
          precio: item.precio,
          cantidad: item.cantidad,
          descuento: item.cantidad * item.precio * 0.05,
          total: item.cantidad * item.precio - item.descuento,
        }));
    },
    limpiarCampos(){
      this.paquetes.forEach((item, index) => this.$refs.package[index].limpiar());
    },
    cleanTable(){
      this.selectedItems= [{ valor: '', precio: '', cantidad: '', descuento: '', total: ''}];
      this.paquetes = [
        { valor: 1000, precio: 190, cantidad: 0 },
        { valor: 1500, precio: 270, cantidad: 0 },
        { valor: 3000, precio: 510, cantidad: 0 },
        { valor: 5000, precio: 800, cantidad: 0 },
        { valor: 10000, precio: 1500, cantidad: 0 },
        { valor: 20000, precio: 2800, cantidad: 0 },
      ];
    }
  },
};
</script>

<style scoped>
.main-card {
  max-width: 90vw;
  max-height: 100vh;
}

.shadow-card {
  background: #eeeeee;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px rgb(0 0 0 / 14%),
    0 1px 10px rgb(0 0 0 / 12%) !important;
}
</style>