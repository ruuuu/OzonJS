import renderCart from './renderCart';

const cart = () => {

      const cartBtn = document.getElementById('cart');  // getElementById прмиенятеяс только к documrnt. К элементам его применять неляьзя
      const cartModal = document.querySelector('.cart');
      const cartCloseBtn = cartModal.querySelector('.cart-close');
      const goodsWrapper = document.querySelector('.goods');
      const cartTotal = document.querySelector('.cart-total > span');
      const cartWrapper = document.querySelector('.cart-wrapper');

     

      //  вместо того, чтобы  вешать обработчик события на каждую картчоку(иначе будет много обработчикво событяия), мы вешаем на их родителя(это делегирование):
      goodsWrapper.addEventListener('click', (evt) => {
            
            // console.log(evt.target)
            if(evt.target.classList.contains('btn-primary')){
                  const card = evt.target.closest('.card');             // если у evt.target/ег родителя есть класс.card, то  вернет этот элемент(с калссом .card). Если нет, то пойдет выше и так пока не дойдет до корневого элемента
                  const key = card.dataset.key;                         // получаем значение data-атрибута data-key
                  
                  const goods = JSON.parse(localStorage.getItem('goods'));       // JSON.parse() превращает из строки в массив
                 // console.log('goods ', goods)            
                 
                
                  const cartGoods = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

                  const cartGood = goods.find((good) => good.id === +key);          // вернет первый элемент, котрый подходит под условие
                  cartGoods.push(cartGood);
                  localStorage.setItem('cart', JSON.stringify(cartGoods));           // перезапсиываем
            }
      });

     
      // удаление товаров из корзины:
      cartWrapper.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('btn-primary')){
                  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
                  
                  const card = evt.target.closest('.card');             // если у evt.target/ег родителя есть класс.card, то  вернет этот элемент(с калссом .card). Если нет, то пойдет выше и так пока не дойдет до корневого элемента
                  const key = card.dataset.key;                         // получаем значение data-атрибута data-key
                  
                  const cartGoods = JSON.parse(localStorage.getItem('cart'));       // JSON.parse() превращает из строки в массив
                 
                  const cartGood = cartGoods.find((cartGood) => { 
                       
                        return cartGood.id === +key;          // вернет первый элемент, котрый подходит под условие
                  });
                        
                 
                  cartGoods.splice(cartGood.id, 1);           // удаляет из масива элемент
                  localStorage.setItem('cart', JSON.stringify(cartGoods));
                  renderCart(JSON.parse(localStorage.getItem('cart', JSON.stringify(cartGoods))))
            }
      });



      const openCart = () => {
            cartModal.style.display='flex';
            const cartGoods = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            renderCart(cartGoods);
            const totalSum = cartGoods.reduce((currentSum, item) => {
                  return currentSum + item.price;
            }, 0); 
            cartTotal.textContent = totalSum;

      };


      const closeCart = () => {
            cartModal.style.display='none';
      };



      cartBtn.addEventListener('click', openCart);

      cartCloseBtn.addEventListener('click', closeCart);

};



export default cart;

