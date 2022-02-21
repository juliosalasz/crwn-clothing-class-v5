import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutFunctionButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_51KVhArFtjFs48w1jRPZyRn3elB3mSLCGeLNV7R15DcdT7ysq0NKdBjVMFUTpe1CETn2yiNQVzXxn0O2JMjJOSp47006dlDuqdM`;

  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`You total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutFunctionButton;
