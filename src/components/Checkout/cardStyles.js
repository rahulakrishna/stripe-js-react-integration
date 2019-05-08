import styled from 'styled-components';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from 'react-stripe-elements';

export const Inputline = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardNumber = styled(CardNumberElement)`
  width: 264px;
  height: 40px;
  input {
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.16);
    background-color: #fff;
    padding: 8px 16px 8px 16px;
  }
`;

export const CardExpiry = styled(CardExpiryElement)`
  width: 120px;
  height: 40px;
  input {
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.16);
    background-color: #fff;
    padding: 8px 16px 8px 16px;
  }
`;

export const CardCVC = styled(CardCVCElement)`
  width: 120px;
  height: 40px;
  input {
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.16);
    background-color: #fff;
    padding: 8px 16px 8px 16px;
  }
`;

export const Name = styled.input`
  width: 264px;
  height: 40px;
  input {
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.16);
    background-color: #fff;
    padding: 8px 16px 8px 16px;
  }
`;
