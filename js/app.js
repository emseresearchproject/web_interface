var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
};

var app = new Vue({
  el: '#app',
  data: {
    image: 'img/number.png',
    models: [
      { id: 0,
        name:'Vanilla Model',
        description: 'model description'
      },
      {
        id: 0,
        name:'MC Dropout Model',
        description: 'model description'
      },
      {
        id: 0,
        name:'Bayesian Model',
        description: 'model description'}
    ],
    model:'',
    classes: [
      {name: '0', value:5},
      {name: '1', value:1},
      {name: '2', value:1},
      {name: '3', value:1},
      {name: '4', value:2},
      {name: 'Other', value:90}
    ]
  },
  methods: {
    randomize: function () {
      sum = 0;
      for (var i = 0; i < this.classes.length; i++) {
        value = 100 * Math.random();
        this.classes[i].value = value;
        sum += value;
      }
      for (var i = 0; i < this.classes.length; i++) {
        this.classes[i].value *= 100/sum;
        this.classes[i].value = this.classes[i].value.toFixed(0);
      }
    },
    load_model: function () {
      this.model = this.models[0];
    },
    load: function (event) {
      console.log(event);
      this.image = URL.createObjectURL(event.target.files[0]);
    }
  },
  mounted: function (){
    this.load_model();
  }
})
