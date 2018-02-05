new Vue({
    el: '#vue-app',
    data: {
        buy: true,
        products: [
            {
                name: 'apple',
                desc: 'just an simple expensive apple',
                cost: 1.99,
                img: 'img/apple.jpg'
            },
            {
                name: 'pickle',
                desc: 'just an simple expensive pickle',
                cost: 2.99,
                img: 'img/pickle.jpg'
            },
            {
                name: 'tomato',
                desc: 'just an simple expensive tomato',
                cost: 3.99,
                img: 'img/tomato.jpg'
            }
        ],
        card: [
            
        ]
    },
    methods: {
        readRefs: function () {
            
            console.log(this.$refs.npInput.value.length);
            
            if (this.$refs.npInput.value.length < 2 || this.$refs.npInput.value.length > 20) {
                
                document.getElementById("errOut").innerHTML = 'Name of product must be 2 to 20 characters long.';
                
            } else {
                if (this.$refs.dpInput.value.length <= 5 || this.$refs.dpInput.value.length >= 30) {
                    
                    document.getElementById("errOut").innerHTML = 'Description of product must be 5 to 30 characters long.';
                    
                } else {
                    if (this.$refs.aInput.value < 0.5 || this.$refs.aInput.value > 10) {
                        document.getElementById("errOut").innerHTML = 'Price must be between 0.5PLN and 10PLN.';
                        
                    } else {
                        if (this.$refs.imgInput.value == 0) {
                            this.products.push({
                                name: this.$refs.npInput.value,
                                desc: this.$refs.dpInput.value,
                                cost: this.$refs.aInput.value,
                                img: "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/1/FNK_rainbow-spectrum_s4x3.jpg.rend.hgtvcom.616.462.suffix/1386172541852.jpeg"
                            })
                        } else {
                            this.products.push({
                                name: this.$refs.npInput.value,
                                desc: this.$refs.dpInput.value,
                                cost: this.$refs.aInput.value,
                                img: this.$refs.imgInput.value
                            })
                        }

                    }
                }
            }
        },
        checkPrice: function(index){
            
            this.card.push({
                index: index,
                price: this.products[index].cost,
                name: this.products[index].name
            });
        }
    },
    computed: {

    }
});
