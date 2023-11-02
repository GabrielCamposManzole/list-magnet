$(document).ready(function () {
  var quantity = 1; // Quantidade inicial

  // Aumenta a quantidade
  $('#increaseQuantity').click(function () {
    quantity++;
    updateQuantity();
  });

  // Diminui a quantidade, no mínimo 1
  $('#decreaseQuantity').click(function () {
    if (quantity > 1) {
      quantity--;
      updateQuantity();
    }
  });

  // Função para atualizar a quantidade exibida
  function updateQuantity() {
    $('#quantity').text(quantity);
  }
});
