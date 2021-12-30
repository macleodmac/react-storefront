import { defineMessages } from "react-intl";

export const messages = defineMessages({
  more: {
    id: "app.home.greeting",
    description: "Link to proceed to the product collection view.",
    defaultMessage: "More →",
  },
  logIn: {
    id: "app.navigation.login",
    description: "Link to login view.",
    defaultMessage: "Log in",
  },
  regionModalHeader: {
    id: "app.region.modalHeader",
    description: "Header of the region selection modal.",
    defaultMessage: "Choose your region",
  },
  channelFieldLabel: {
    id: "app.region.channelField",
    description: "Label of channel selection field.",
    defaultMessage: "Channel",
  },
  languageFieldLabel: {
    id: "app.region.languageField",
    description: "Label of language selection field.",
    defaultMessage: "Language",
  },
  addToCart: {
    id: "app.product.addToCart",
    description: "Add to cart button label.",
    defaultMessage: "Add to cart",
  },
  variantNotChosen: {
    id: "app.product.variantNotChosen",
    description: "Warning message when variant is not chosen.",
    defaultMessage: "Please chose the variant",
  },
  soldOut: {
    id: "app.product.soldOut",
    description: "Warning message when variant is sold out.",
    defaultMessage: "Sold out!",
  },
  attributes: {
    id: "app.product.attributes",
    description: "Attributes table header.",
    defaultMessage: "Attributes",
  },
  adding: {
    id: "app.product.adding",
    description: "Message displayed during adding product to the cart.",
    defaultMessage: "Adding...",
  },
  checkoutButton: {
    id: "app.checkout.checkoutButton",
    description: "Go to checkout button label.",
    defaultMessage: "Checkout",
  },
  cartPageHeader: {
    id: "app.checkout.pageHeader",
    description: "Header of the cart page.",
    defaultMessage: "Your Cart",
  },
  discountCodeFieldLabel: {
    id: "app.checkout.discountCode",
    description: "Name of the discount code field.",
    defaultMessage: "Discount code",
  },
  discount: {
    id: "app.checkout.discount",
    description: "Discount code table header at the checkout summary.",
    defaultMessage: "Discount",
  },
  subtotal: {
    id: "app.checkout.subtotal",
    description: "Subtotal table header at the checkout summary.",
    defaultMessage: "Subtotal",
  },
  total: {
    id: "app.checkout.total",
    description: "Total table header at the checkout summary.",
    defaultMessage: "Total",
  },
  shipping: {
    id: "app.checkout.shipping",
    description: "Shipping table header at the checkout summary.",
    defaultMessage: "Shipping",
  },
  tax: {
    id: "app.checkout.tax",
    description: "Tax table header at the checkout summary.",
    defaultMessage: "Tax",
  },
  emailAddressCardHeader: {
    id: "app.checkout.emailAddressCardHeader",
    description: "Header of the email section.",
    defaultMessage: "Email Address",
  },
  billingMethodCardHeader: {
    id: "app.checkout.billingMethodCardHeader",
    description: "Header of the billing method section.",
    defaultMessage: "Billing Method",
  },
  billingAddressCardHeader: {
    id: "app.checkout.billingAddressCardHeader",
    description: "Header of the billing address section.",
    defaultMessage: "Billing Address",
  },
  shippingAddressCardHeader: {
    id: "app.checkout.shippingAddressCardHeader",
    description: "Header of the shipping address section.",
    defaultMessage: "Shipping Address",
  },
  shippingMethodCardHeader: {
    id: "app.checkout.shippingMethodCardHeader",
    description: "Header of the shipping method section.",
    defaultMessage: "Shipping Method",
  },
  paymentCardHeader: {
    id: "app.checkout.paymentCardHeader",
    description: "Header of the payment section.",
    defaultMessage: "Payment",
  },
  paymentInstruction: {
    id: "app.checkout.paymentInstruction",
    description: "User instructions at payment section.",
    defaultMessage: "Choose payment method",
  },
  phoneField: {
    id: "app.checkout.phoneField",
    description: "Phone number field label.",
    defaultMessage: "Phone",
  },
  firstNameField: {
    id: "app.checkout.firstNameField",
    description: "First name field label.",
    defaultMessage: "First name",
  },
  lastNameField: {
    id: "app.checkout.lastNameField",
    description: "Last name field label.",
    defaultMessage: "Last name",
  },
  addressField: {
    id: "app.checkout.addressField",
    description: "Address field label.",
    defaultMessage: "Address",
  },
  cityField: {
    id: "app.checkout.cityField",
    description: "City field label.",
    defaultMessage: "City",
  },
  postalCodeField: {
    id: "app.checkout.postalCodeField",
    description: "Postal code field label.",
    defaultMessage: "Postal code",
  },

  cardNumberField: {
    id: "app.checkout.cardNumberField",
    description: "Card number field label.",
    defaultMessage: "Card number",
  },
  expDateField: {
    id: "app.checkout.expDateField",
    description: "Expiration date field label.",
    defaultMessage: "Expiration date",
  },
  cvcField: {
    id: "app.checkout.cvcField",
    description: "CVC code field label.",
    defaultMessage: "CVC",
  },
  paymentButton: {
    id: "app.checkout.paymentButton",
    description: "Payment button label.",
    defaultMessage: "Pay {total}",
  },
  sameAsBillingButton: {
    id: "app.checkout.sameAsBillingButton",
    description: "Use same address as billing button label.",
    defaultMessage: "Use the same address as billing",
  },
  orderSummary: {
    id: "app.checkout.orderSummary",
    description: "Header of the order summary section.",
    defaultMessage: "Order summary",
  },
  browseProducts: {
    id: "app.ui.browseProducts",
    description: "Label for the link to the product browsing.",
    defaultMessage: "Browse products",
  },
  loadMoreButton: {
    id: "app.ui.loadMoreButton",
    description: "Display more products button label.",
    defaultMessage: "Load more",
  },
    noProducts: {
    id: "app.ui.noProductsInfo",
    description: "Displayed when list has no products.",
    defaultMessage: "No products",
  },
  removeButton: {
    id: "app.ui.removeButton",
    description: "Remove item button label.",
    defaultMessage: "Remove",
  },
  activateButton: {
    id: "app.ui.activateButton",
    description: "Activate button label.",
    defaultMessage: "Activate",
  },
  changeButton: {
    id: "app.ui.changeButton",
    description: "Change button label.",
    defaultMessage: "Change",
  },
  saveButton: {
    id: "app.ui.saveButton",
    description: "Save button label.",
    defaultMessage: "Save",
  },
  paginationProductCounter: {
    id: "app.ui.productCounter",
    description: "Message with number of displayed products.",
    defaultMessage: "{currentItemsCount} out of {totalItemsCount}",
  },
  searchHeader: {
    id: "app.search.searchHeader",
    description: "Header of the search page.",
    defaultMessage: "Search",
  },
  searchFieldPlaceholder: {
    id: "app.search.searchFieldPlaceholder",
    description: "Placeholder displayed in the search field.",
    defaultMessage: "What are you looking for?",
  },
});
