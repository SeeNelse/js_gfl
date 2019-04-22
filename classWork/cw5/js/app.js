(function($) {
  var template_item = $('#todo_item_template').text(),
      listDiv = $('.js_list'),
      mainInput = $('.js_add_input'),
      todoList = JSON.parse(localStorage.getItem('todolist') || '[]');
  
  function render() {
    $(listDiv).html('');
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
    $item.attr('data-id', createId());
    $('.js_list').append($item);
    if (add) {
      console.log(todoList);
      todoList.push(text);
    }
  }

  function createId() {
    return listDiv.children().length;
  }

  function changeApply() {
    render();
    save();
  }

  function save() {
    localStorage.setItem('todolist', JSON.stringify(todoList));
  }

  render();



  //remove
  $(listDiv).on('click', '.js_item_remove_btn', function() {
    var currentEl = $(this).parent('.js_item').attr('data-id');
    todoList.splice(currentEl, 1);
    changeApply();
  });


  // edit
  $(listDiv).on('click', '.js_item_edit_btn', function() {
    $(this).hide();
    $(this).siblings('.js_item_apply_btn').show();
    $(this).siblings('.js_item_input').show();
    $(this).siblings('.js_item_text').hide();
  });


  //apply
  $(listDiv).on('click', '.js_item_apply_btn', function() {
    var newVal = $(this).siblings('.js_item_input').val();
    var currentEl = $(this).parent('.js_item').attr('data-id');
    todoList[currentEl] = newVal;

    $(this).hide();
    $(this).siblings('.js_item_input').hide();
    $(this).siblings('.js_item_text').show();
    $(this).siblings('.js_item_edit_btn').show();

    changeApply();
  });


}(jQuery));