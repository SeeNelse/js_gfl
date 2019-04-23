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
    {
      id: 65,
      name: 'teeeeeest',
      price: 600,
    },
  ];
  ingrArr = JSON.parse(localStorage.getItem('ingr') || JSON.stringify(ingrArrTemp));
  cartArr = JSON.parse(localStorage.getItem('cart') || '{}' );

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
      });
    }

    if (!$.isEmptyObject(cartArr)) {
      $.map(cartArr, function(value, no){
        if (value) {
          var $currentEl = $('.ingredients__item[data-id='+no+']');
          var $item = $($cartTmpl);
          $item.attr('data-id', no);
          $item.find('.cart__name').text( $currentEl.find('.ingredients__name').text() );
          $item.find('.cart__price').text( $currentEl.find('.ingredients__price').text() );
          $item.find('.cart__count').text(value);
          $item.find('.cart__all-pice').text( $currentEl.find('.ingredients__price').text() * value );
          $('.cart__list').append($item);
        }
      }).join(', ');
    }
    totalPrice();
  }

  function chengeApply() {
    save();
    render();
  }
  chengeApply();

  function totalPrice() {
    var total = 0;
    $('.cart__all-pice').each(function(index, val) {
      total += +$(val).html();
    });
    $('.cart__total').text(total);
  }
  

  $('.ingredients__list').on('click', '.ingredients__add', function() {
    var currentEl = $(this).parent('.ingredients__item').attr('data-id');
    if (cartArr) {
      $(ingrArr).each(function(index, val) {
        if (!cartArr[val.id]) {
          cartArr[val.id] = 0;
        }
      });
    }
    cartArr[currentEl] = cartArr[currentEl] + 1;
    chengeApply();
  });

  $('.cart__list').on('click', '.cart__remove', function() {
    var currentEl = $(this).parent('.cart__item').attr('data-id');
    cartArr[currentEl]--;
    chengeApply();
  });


}(jQuery))
