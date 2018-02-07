new Vue({
    el: '#vue-app',
    data: {
        buy: true,
        empty: true,
        fullCost: 0,
        cardCount: 0,
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
                cost: 3.49,
                img: 'img/tomato.jpg'
            }
        ],
        card: [
            
        ]
    },
    methods: {
        readRefs: function () {
            
            
            if (this.$refs.npInput.value.length < 2 || this.$refs.npInput.value.length > 14) {
                
                document.getElementById("errOut").innerHTML = 'Name of product must be 2 to 14 characters long.';
                
            } else {
                if (this.$refs.dpInput.value.length <= 4 || this.$refs.dpInput.value.length >= 31) {
                    
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
                            });
                    
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
            
            var oneUp = (document).getElementById("oneUp");
            var twoUp = (document).getElementById("twoUp");

            this.cardCount += 1;
            this.empty = false;
            this.fullCost = this.fullCost + this.products[index].cost;
            this.fullCost = Math.round(this.fullCost * 100) / 100;
            
            if(oneUp.classList.contains("plusOne") == 0){
            
                oneUp.classList.add("plusOne");
                setTimeout(refreshOneUp, 1000);
            } else {
                twoUp.classList.add("plusOne");
                setTimeout(refreshTwoUp, 1000);
            }
            this.card.push({
                index: index,
                price: this.products[index].cost,
                name: this.products[index].name
            });
            
            function refreshOneUp(){
            oneUp.classList.remove("plusOne");    
            }
            function refreshTwoUp(){
            twoUp.classList.remove("plusOne");    
            }
        },
        deleteProduct: function(index){
            
            this.cardCount -= 1;
            
            this.fullCost = this.fullCost - this.card[index].price;
            this.fullCost = Math.round(this.fullCost * 100) / 100;
            this.card.splice(index, 1);
            
            if(this.cardCount == 0){
                this.empty = true;
                this.fullCost = 0;
            }
        }
    },
    computed: {

    }
});
