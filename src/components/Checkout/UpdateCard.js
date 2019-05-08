import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { CardNumber, CardExpiry, Name, CardCVC, Inputline } from './cardStyles';

class UpdateCard extends React.Component {
  submit = async () => {
    // this.props.stripe will have some stuff. Use that to whatever the fuck you want
    let { token } = this.props.stripe.createToken({ name: 'Rahul Krishna' });
    console.log({ token });
    // Now the frontend needs to send the backend token.id
  };
  render() {
    return (
      <div>
        <p>Ye're gonna complete this purchase</p>
        <Inputline>
          <CardNumber
            onChange={cardNumber => console.log({ cardNumber })}
            placeholder="•••• •••• •••• ••••"
          />
          <CardExpiry placeholder="MM / YY" />
        </Inputline>
        <Inputline>
          <Name placeholder="John Doe" />
          <CardCVC placeholder="CVV" />
        </Inputline>
        <button onClick={this.submit}>Buy</button>
      </div>
    );
  }
}

export default injectStripe(UpdateCard);
