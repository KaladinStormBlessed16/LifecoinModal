<template>
  <q-card class="shadow-card row">
    <q-card-section class="col-12">
      <div class="text-center text-negative titulo-pedido">
        Resumen del pedido
      </div>
      <q-separator class="bg-accent q-mt-sm" />
    </q-card-section>

    <q-card-section class="col-12">
      <q-table
        :data="items"
        :columns="columns"
        row-key="valor"
        hide-bottom
        :dense="true"
      >
        <template v-slot:header-cell="props">
          <q-th :props="props">
            <div class="row flex flex-center">
              <div class="col-12 flex flex-center">
                {{ props.col.label }}
              </div>
              <div class="col-12 flex flex-center">
                {{ props.col.label2 }}
              </div>
            </div>

          </q-th>
        </template>
      </q-table>
      <q-btn
        size="0.7rem"
        color="negative"
        text-color="white"
        label="GENERAR PEDIDO"
        @click="generarPedido"
        class="q-mt-md float-right"
      />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "Pedido",
  data() {
    return {
      columns: [
        {
          name: "valor",
          align: "center",
          label: "Paquetes",
          label2: "(total de lifecoin)",
          field: "valor"
        },
        { name: "precio", label: "Precio" , label2: "(EUR)", field: "precio" , align: "center"},
        { name: "cantidad", label: "Cantidad" , label2: "(Unidades)", align: "center", field: "cantidad" },
        { name: "descuento", label: "Descuento" , label2: "(5%)", align: "center", field: "descuento" },
        { name: "total", label: "Total" , label2: "(EUR)", align: "center", field: "total" },
      ],
    };
  },
  props: ["items"],
  methods: {
    generarPedido() {
      if (
        this.items.length == 0 ||
        (this.items.length == 1 && this.items[0].valor === "")
      )
        return;
      this.$q
        .dialog({
          title: "Generación de Pedido",
          message: "¿Está seguro de que desea finalizar la transacción?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.$emit("clear");

          this.$q.notify({
            message: "Pedido Realizado",
            color: "green-5",
            textColor: "white",
            icon: "stream",
          });
        });
    },
  },
};
</script>

<style scoped>
.titulo-pedido {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
}
</style>