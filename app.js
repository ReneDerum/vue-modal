Vue.component('modal', {
    props:['title'],
    data(){
        return {
        
        }
    },

    methods:{
        close(){
            this.$emit('closemodal') //COMPONENTE emite el evento CLOSEMODAL para que se ejecute una funcion del PADRE
        }
    },

    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <slot name="before"></slot>
            <h3> {{ title }} </h3>                
            <slot name="text-body"></slot>
            <footer>
              <button v-on:click="close">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',

    data(){
        return{
            showModal: false,
            name:'Rene Derum'
        }
    },

    methods:{
        toggleModal(){
            this.showModal = !this.showModal;
        }
    },


  })