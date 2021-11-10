const app = new Vue({

  //prendo l'elemento
  el: '#app',

  //modifico il DOM
  data: {
    nome: 'Michele',
    cognome: 'Di Gennaro',
    squadra:''
  },

  methods: {
    squadraInter(){
      this.squadra = 'https://images2.gazzettaobjects.it/assets-mc/calcio/squadre/high/127.png'
    },

    squadraMilan(){
      this.squadra = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png'
    },

    squadraJuventus(){
      this.squadra = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/1200px-Juventus_FC_2017_icon_%28black%29.svg.png'
    }
  }

});