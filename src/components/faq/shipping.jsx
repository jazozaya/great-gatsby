import React from 'react'

import Question from './utils/question'
import Template from './utils/template'

import { Link } from 'gatsby'

export default class Shipping extends React.Component {

  render() {
    const { title, all, id } = this.props;
    return (
      <Template id={id} title={title} all={all}>
        <Question underline title="What is the cost to ship to my country?">
          <p>It costs <strong>$25 USD</strong> per printer to ship within Canada.</p>
          <p>It costs <strong>$100 USD</strong> per printer to ship to the USA.</p>
          <p>It costs <strong>$250 USD</strong> per printer to ship international.</p>
          <p>For consumable shipping, we charge a flat fee of <strong>$20 USD</strong> worldwide.</p>
          
        </Question>
        <Question underline title="Can I use my own shipping account?">
          <p>We use FedEx to ship within Canada and DHL for everywhere else.  We have worked closely with our fantastic shipping partners to get the best rates for your orders.</p>
          <p>If you want to ship with your account or if you have special shipping requirements, please contact <strong>sales@voltera.io</strong> before you place your order.</p>
          <p>The V-One ships as two boxes: A large one (19 &times; 13 &times; 11 in, 9.1 Kg) and a small one. (5 &times; 4 &times; 2 in, 100 g)</p>
        </Question>
        <Question underline title="How can I pay?">
          <p>If you want to pay with credit card, you can do so directly on our <Link to="/store/">store</Link>.</p>
          <p>If you want to pay with a bank transfer, please send your PO to sales@voltera.io and we'll provide you our banking details.</p>
        </Question>
        <Question title="Are taxes and duties included?">
          <p>No. Since these rates are unique to each country, all applicable duties and taxes are payable upon receipt of the product.</p>
          <p>Normally when the shipment reaches your country, DHL will contact you to arrange the payment of duties and taxes to clear customs.</p>
        </Question>
      </Template>
    );
    }
  }
