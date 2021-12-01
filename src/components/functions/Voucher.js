import voucherApi from './../../api/voucherApi';
class Voucher {
    async getCoupon(coupon){
      try {
        const response = await voucherApi.getAll(coupon);
        return response;
      } catch (err) {
        console.log(err);
      }
    }
    handleDiscount(type,itemsPrice,amount) {
        console.log(type + " " + itemsPrice + " " + amount)
        if(type === "percentage"){
            return (itemsPrice*amount)/100;
        } else if(type === "amount" && amount <= itemsPrice){
          return amount;
        } else if(type === "amount" && amount > itemsPrice){
          return itemsPrice;
        } else  return 0;
      }

}

const newVoucher = new Voucher();
export default newVoucher;