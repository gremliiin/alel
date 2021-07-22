import React from "react";
import Basket from "./Basket";
import {connect} from "react-redux";
import {addProductsAC, deleteOneProductAC, deleteProductsAC} from "../../redux/BasketReducer";
import {
  changeDeliveryDateAC,
  changeEmailAC,
  changeFlatAC,
  changeHouseAC, changeMethodPaymentAC,
  changeNameAC, changePhoneAC,
  changeStreetAC, checkContactsInfoAC,
  checkMethodDeliveryAC, doCheckoutTC
} from "../../redux/OrderingReducer";
import {ToggleNotificationStatusTC} from "../../redux/NotificationReducer";

class BasketContainer extends React.Component {
  render() {
    return <Basket
      products = {this.props.products}
      totalQuantity = {this.props.totalQuantity}
      totalPrice = {this.props.totalPrice}
      ordering = {this.props.ordering}
      deleteProducts = {this.props.deleteProductsAC}
      addProducts={this.props.addProductsAC}
      mainProducts = {this.props.mainProducts}
      deleteOneProduct = {this.props.deleteOneProductAC}
      changeStreet = {this.props.changeStreetAC }
      changeHouse = {this.props.changeHouseAC}
      changeFlat = {this.props.changeFlatAC}
      checkMethodDelivery = {this.props.checkMethodDeliveryAC}
      changeName = {this.props.changeNameAC}
      changePhone = {this.props.changePhoneAC}
      changeEmail = {this.props.changeEmailAC}
      changeDeliveryDate = {this.props.changeDeliveryDateAC}
      checkContactsInfo={this.props.checkContactsInfoAC}
      changeMethodPayment = {this.props.changeMethodPaymentAC}
      doCheckout = {this.props.doCheckoutTC}
      ToggleNotificationStatus = {this.props.ToggleNotificationStatusTC}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.basket.products,
    totalQuantity: state.basket.totalQuantity,
    totalPrice: state.basket.totalPrice,
    ordering: state.ordering,
  }
};

const mapDispatchToProps = {
  deleteProductsAC,
  addProductsAC,
  deleteOneProductAC,
  changeStreetAC,
  changeHouseAC,
  changeFlatAC,
  checkMethodDeliveryAC,
  changeNameAC,
  changePhoneAC,
  changeEmailAC,
  changeDeliveryDateAC,
  checkContactsInfoAC,
  changeMethodPaymentAC,
  doCheckoutTC,
  ToggleNotificationStatusTC
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);