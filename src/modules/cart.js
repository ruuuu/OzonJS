const cart = () => {

      const cartBtn = document.getElementById('cart');  // getElementById прмиенятеяс только к documrnt. К элементам его применять неляьзя
      const cartModal = document.querySelector('.cart');
      const cartCloseBtn = cartModal.querySelector('.cart-close');



      const openCart = () => {
            cartModal.style.display='flex';
      };


      const closeCart = () => {
            cartModal.style.display='none';
      };



      cartBtn.addEventListener('click', openCart);

      cartCloseBtn.addEventListener('click', closeCart);

};



export default cart;

