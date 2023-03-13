const { createApp } = Vue

createApp({
  data() {
    return {
      wrapperClassList: 'wrapper center',

      h1InnerText: 'BuonGiorno Boolean',
      h1ClassList: 'title red',

      btnInnerText: 'Cambia Colore del Titolo ',
      btnClassList: 'btn btn-primary',

      imgClassList: 'img',
      imgSrc: 'https://picsum.photos/200/300',

      colorValue: 'scegli un colore',
      backGroundRandom: '',
    }
  },

  methods: {
    changeColor: function changeColor(){
        if(this.h1ClassList == 'title green'){
            this.h1ClassList = 'title red';
        }else{
            this.h1ClassList = 'title green';
        }
         console.log('cliccato')
    },

    randomNumbers: function randomNumbers(min, max){
       return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    randomColor: function randomColor(dominantColor){
        let r;
        let g;
        let b;

        this.colorValue=dominantColor;

        if(dominantColor == 'red'){

            r = this.randomNumbers(55,255);
            g = this.randomNumbers(1,55);
            b = this.randomNumbers(1,55);

        }else if(dominantColor == 'blue'){

            r = this.randomNumbers(1,55);
            g = this.randomNumbers(1,55);
            b = this.randomNumbers(55,255);

        }else if(dominantColor == 'green'){

            r = this.randomNumbers(1,55);
            g = this.randomNumbers(55,255);
            b = this.randomNumbers(1,55);
        }else{
            r = this.randomNumbers(1,255);
            g = this.randomNumbers(1,255);
            b = this.randomNumbers(1,255);
        }
        
        this.backGroundRandom = 'background:rgb(' + r + ',' + g + ','+ b + ');';
        console.log(this.backGroundRandom, dominantColor);
    }
  }
}).mount('#app')