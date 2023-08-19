const postData = () => {

      // fetch('https://ozon-290ae-default-rtdb.firebaseio.com/goods.json/23', {
      //       method: 'DELETE',
      // })
      // .then((res) => res.json());
           

      fetch('https://ozon-290ae-default-rtdb.firebaseio.com/goods.json', { 
      
            method: 'POST',
            body: JSON.stringify({  //  JSON.stringify преобразует объект в строку, id не указываем, json-sever сам его задаст
                  title: "Ведьмак 3",
                  price: 3000,
                  sale: false,
                  img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
                  hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
                  category: "Игровая приставка"
            }),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8',
            },
      })
      .then((res) => res.json());
           


};

export default  postData;