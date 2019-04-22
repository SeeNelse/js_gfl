(function($){
  var $ingrTmpl = $('#ingredients__item-template').text();
  var $cartTmpl = $('#cart__item-template').text();
  ingrArrTemp = [
    {
      id: 1,
      name: 'milk',
      price: 100,
    },
    {
      id: 2,
      name: 'bread',
      price: 200,
    },
    {
      id: 3,
      name: 'oil',
      price: 300,
    },
    {
      id: 4,
      name: 'apple',
      price: 400,
    },
    {
      id: 5,
      name: 'carrot',
      price: 500,
    },
    {
      id: 6,
      name: 'banana',
      price: 600,
    },
  ];
  ingrArr = JSON.parse(localStorage.getItem('ingr') || JSON.stringify(ingrArrTemp));
  cartArr = JSON.parse(localStorage.getItem('cart') || '[]');

  function save() {
    localStorage.setItem('ingr', JSON.stringify(ingrArr));
    localStorage.setItem('cart', JSON.stringify(cartArr));
  }

  function render() {
    $('.ingredients__list').html('');
    $('.cart__list').html('');
    if (ingrArr) {
      $(ingrArr).each(function(index, val) {
        var $item = $($ingrTmpl);
        $item.attr('data-id', val.id);
        $item.find('.ingredients__name').text(val.name);
        $item.find('.ingredients__price').text(val.price);
        $('.ingredients__list').append($item);
      })
    }

    if (cartArr) {
      $(cartArr).each(function(index, val) {
        var $item = $($cartTmpl);
        $item.attr('data-id', val.id);
        $item.find('.cart__name').text(val.name);
        $item.find('.cart__price').text(val.price);
        $('.cart__list').append($item);
      });
    }
  }

  function chengeApply() {
    save();
    render();
  }
  chengeApply();
  

  $('.ingredients__list').on('click', '.ingredients__add', function() {
    var elementText = $(this).siblings('.ingredients__name').text();
    $(ingrArr).each(function(index, val) {
      if (val.name === elementText) {
        // var exist = cartCheck(val);
        // console.log(cartArr);
        // if (!exist) {
          cartArr.push(val);
        // }
      }
    });
    chengeApply();
  });

  $('.cart__list').on('click', '.cart__remove', function() {
    var elementText = $(this).siblings('.cart__name').text();
    $(cartArr).each(function(index, val) {
      if (val.name === elementText) {
        cartArr.splice(index, 1);
      }
    });
    chengeApply();
  });

  // function cartCheck(item) {
  //   // $(cartArr).each(function(index, val) {
  //   //     if(item.id === val.id) {
  //   //       if (item.count) {
  //   //         item.count++;
  //   //         return true;
  //   //       } else {
  //   //         item.count = 1;
  //   //         return false;
  //   //       }
  //   //     }
  //   // });
  //   $(cartArr).each(function(index, val) {
  //     if (item === val) {
  //       console.log('ITEM - ',item);
  //       console.log('VAL - ',val);
  //     }
  //   });
  //   console.log(cartArr);
  // }

}(jQuery))
