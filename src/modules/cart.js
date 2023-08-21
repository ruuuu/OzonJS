const cart = () => {

      const cartBtn = document.getElementById('cart');  // getElementById прмиенятеяс только к documrnt. К элементам его применять неляьзя
      const cartModal = document.querySelector('.cart');
      const cartCloseBtn = cartModal.querySelector('.cart-close');
      const goodsWrapper = document.querySelector('.goods');
     
      
      
      //  вместо того, чтобы  вешать обработчик события на каждую картчоку(иначе будет много обработчикво событяия), мы вешаем на их родителя(это делегирование):
      goodsWrapper.addEventListener('click', (evt) => {
            
            // console.log(evt.target)
            if(evt.target.classList.contains('btn-primary')){
                  const card = evt.target.closest('.card');             // если у evt.target/ег родителя есть класс.card, то  вернет этот элемент(с калссом .card). Если нет, то пойдет выше и так пока не дойдет до корневого элемента
                  const key = card.dataset.key;                         // получаем значение data-атрибута data-key
                  
                  const goods = JSON.parse(localStorage.getItem('goods'));       // JSON.parse() превращает из строки в массив
                 // console.log('goods ', goods)            
                 
                
                 const cartGoods = localStorage.setItem('cart') ? ;


                  const cartGood = JSON.parse(goods).find((good) => good.id === +key);
                  cartGoods.push(cartGood);
                  localStorage.setItem('cart', JSON.stringify(cartGoods));
            }
           
           
      });

      localStorage.setItem('cart', JSON.stringify(cartGoods));


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

