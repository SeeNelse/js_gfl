(function($) {
  var template_item = $('#todo_item_template').text(),
      mainInput = $('.js_add_input'),
      todoList = JSON.parse(localStorage.getItem('todolist') || '[]');
  
  function render() {
    $('.js_list').html('');
    $(todoList).each(function(index, val) {
      addListItem(val, false);
    });
  }

  $('.js_add_button').click(function() {
    if (mainInput.val()) {
      addListItem(mainInput.val(), true);
      mainInput.val('');
      save();
    }
  });

  
  function addListItem(text, add) {
    var $item = $(template_item);
    $item.find('.js_item_input').attr('value', text);
    $item.find('.js_item_text').text(text);
    $('.js_list').append($item);
    if (add) {
      todoList.push(text);
    }



    //remove
    $('.js_item_remove_btn').click(function() {
      var currentEl = $(this).siblings('.js_item_text').text();
      var arrElemNo = todoList.indexOf(currentEl);
      // $(this).parent().remove();
      todoList[arrElemNo] = '';
      console.log(todoList);
      // changeApply();
      
      // console.log(todoList.splice(arrElemNo, 1));
      // save();
    });


    // edit
    $('.js_item_edit_btn').click(function() {
      $(this).hide();
      $(this).siblings('.js_item_apply_btn').show();
      $(this).siblings('.js_item_input').show();
      $(this).siblings('.js_item_text').hide();
    });


    //apply
    $('.js_item_apply_btn').click(function() {
      var newVal = $(this).siblings('.js_item_input').val();

      $(this).siblings('.js_item_text').text(newVal);
      $(this).siblings('.js_item_input').attr('value', newVal);

      $(this).hide();
      $(this).siblings('.js_item_input').hide();
      $(this).siblings('.js_item_text').show();
      $(this).siblings('.js_item_edit_btn').show();
    });
  }

  function changeApply() {
    render();
    save();
  }

  function save() {
    localStorage.setItem('todolist', JSON.stringify(todoList));
  }

  render();


}(jQuery));