class Price {
  getTotalFinal(cartItems, amount) {
    const itemsPrice = cartItems.reduce(
      (a, c) => a + c.qty * c.product.price,
      0
    );
    const totalPrice = itemsPrice - amount;
    return totalPrice;
  }
  getTotal(cartItems){
    const itemsPrice = cartItems.reduce(
        (a, c) => a + c.qty * c.product.price,
        0
      );
      return itemsPrice;
  }
}

const totalPrice = new Price();
export default totalPrice;
