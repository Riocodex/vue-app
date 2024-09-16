app.component('product-display',{
    props:{
        premium: {
            type: Boolean,
            required: true,
        },
        details:{
            type: Array,
            required: true,
        }
    },
    template:
    ` <div class="product-display">
    <div class="product-container">
      <div class="product-image">
          <img v-bind:src="image" >
      </div>
      <div 
        class="product-info"
        
        :class="{ 'out-of-stock-img': !inStock }"
      >
      
       <h1> {{ brand + ' ' + product}}</h1>
       <p v-if="inStock">In Stock</p>
       <p v-else>Out of Stock</p>

       <p>Shipping: {{ shipping }}
       <ul>
       <li v-for="(detail, index) in details" :key="index">
       {{ detail }}
     </li>
       </ul>


       <div 
       v-for="(variant, index ) in variants"
       :key="variant.id" 
       @mouseover="updateVariant(index)"
       class="color-circle"
       :style="{ backgroundColor: variant.color}">
      </div>

      <button 
  class="button"
  :class="{disabledButton: !inStock}" 
  :disabled="!inStock"
  @click="addToCart">
  Add to cart
</button>

       
      </div>
    </div>
    <review-form></review-form>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'You Sock!',
        selectedVariant: 0, // Tracks the current variant
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 ,onSale: true},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 10 ,onSale: false},
        ],
    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart',this.variants[this.selectedVariant].id); 
      },
    updateVariant(index) {
        this.selectedVariant = index;
    },
},
computed: {
    title() {
        return this.brand + ' ' + this.product;
    },
    image() {
        return this.variants[this.selectedVariant].image;
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity > 0;
    },
    shipping(){
        if(this.premium){
            return'Free'
        }
        return 2.99
    },
  
}
})