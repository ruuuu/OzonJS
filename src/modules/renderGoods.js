const renderGoods = (goods) => {  // [{},{},{}]
     
      const goodsWrapper = document.querySelector('.goods'); 
      localStorage.setItem('goods', JSON.stringify(goods));                   // в localStorage храним строку
     

      goodsWrapper.innerHTML = '';                    // перед заполнением очищаем

      goods.forEach((goodItem) => {                  // метод ничего не верет, просто отработает
            goodsWrapper.insertAdjacentHTML('beforeend', `
                  <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card" data-key=${goodItem.id}>  <!-- добавили дата-атрибут -->
                              ${goodItem.sale ?  `<div class="card-sale">🔥Hot Sale🔥</div>` : ''} 
                              <div class="card-img-wrapper">
                                    <span class="card-img-top"
                                          style="background-image: url('${goodItem.img}')"></span>
                              </div>
                              <div class="card-body justify-content-between">
                                    <div class="card-price">${goodItem.price} ₽</div>
                                    <h5 class="card-title">${goodItem.title}</h5>
                                    <button class="btn btn-primary">В корзину</button>
                              </div>
                        </div>
                  </div>
            `);
      });

};

export default renderGoods;