import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

import Template from './template'

export default class Shipping extends React.Component {

  render() {
    const { title, all } = this.props;
    return (
      <Template title={title} all={all}>
        <Collapse>
          <Panel header="What is the cost to ship to my country?">
            <p>It costs <strong>20 USD</strong> per printer to ship to Canada.</p>
            <p>It costs <strong>35 USD</strong> per printer to ship to the USA.</p>
            <p>It costs <strong>150 USD</strong> per printer to ship to:</p>
            <ul>
              <li>Andorra, Anguilla, Antigua And Barbuda, Aruba, Austria, Bahamas, Barbados, Belgium, Bermuda, Cayman Islands, Curaçao, Czech Republic, Denmark, Dominica, Dominican Republic, Faroe Islands, Finland, France, Germany, Greece, Greenland, Grenada, Guadeloupe, Haiti, Holy See (Vatican City State), Hong Kong, Hungary, Ireland, Italy, Jamaica, Japan, Liechtenstein, Luxembourg, Macao, Malta, Martinique, Mexico, Monaco, Montserrat, Netherlands, Norway, Poland, Portugal, Saint Barthélemy, Saint Kitts And Nevis, Saint Lucia, Saint Martin, San Marino, Singapore, South Korea, Spain, St. Vincent, Sweden, Switzerland, Taiwan, Thailand, Trinidad and Tobago, Turks and Caicos Islands, United Kingdom, British Virgin Islands </li>
            </ul>
            <p>It costs <strong>250 USD</strong> per printer to ship to:</p>
            <ul>
              <li>Albania, Algeria, Angola, Argentina, Armenia, Australia, Azerbaijan, Bahrain, Bangladesh, Belarus, Belize, Benin, Bhutan, Bolivia, Bosnia And Herzegovina, Botswana, Brunei, Bulgaria, Burkina Faso, Burundi, Cambodia, Cape Verde, Chad, Chile, China, Colombia, Congo, Congo, The Democratic Republic Of The, Cook Islands, Costa Rica, Croatia, Cyprus, Côte d'Ivoire, Djibouti, Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, Ethiopia, Fiji, French Guiana, French Polynesia, Gabon, Gambia, Georgia, Ghana, Gibraltar, Guatemala, Guinea, Guinea Bissau, Guyana, Honduras, Iceland, India, Indonesia, Israel, Jordan, Kazakhstan, Kenya, Kiribati, Kuwait, Kyrgyzstan, Lao People's Democratic Republic, Latvia, Lebanon, Lesotho, Liberia, Libyan Arab Jamahiriya, Lithuania, Macedonia, Republic Of, Madagascar, Malawi, Malaysia, Maldives, Mali, Mauritania, Mauritius, Moldova, Republic of, Mongolia, Montenegro, Morocco, Mozambique, Namibia, Nauru, Nepal, New Caledonia, New Zealand, Nicaragua, Niger, Nigeria, Niue, Oman, Pakistan, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Qatar, Republic of Cameroon, Reunion, Romania, Russia, Rwanda, Samoa, Saudi Arabia, Senegal, Serbia, Seychelles, Sint Maarten, Slovakia, Slovenia, Solomon Islands, Somalia, South Africa, Sri Lanka, Sudan, Suriname, Swaziland, Tanzania, United Republic Of, Timor Leste, Togo, Tonga, Tunisia, Turkey, Turkmenistan, Tuvalu, Uganda, Ukraine, United Arab Emirates, Uruguay, Uzbekistan, Vanuatu, Venezuela, Vietnam, Wallis And Futuna, Yemen, Zambia, Zimbabwe</li>
            </ul>
            <p>If your country is not listed above, we unfortunately do not ship there.</p>
          </Panel>
          <Panel header="Can I use my own shipping account?">
            <p>We use FedEx to ship within Canada and DHL for everywhere else.  We have worked closely with our fantastic shipping partners to get the best rates for your orders.</p>
            <p>If you want to ship with your account or if you have special shipping requirements, please contact <strong>sales@voltera.io</strong> before you place your order.</p>
          </Panel>
          <Panel header="How can I pay?">
            <p>If you want to pay with credit card, you can do so directly on our <a href="http://voltera.io/store">store</a>.</p>
            <p>If you want to pay with a bank transfer, please send your PO to sales@voltera.io and we'll provide you our banking details.</p>
          </Panel>
          <Panel header="Are taxes and duties included?">
            <p>No. Since these rates are unique to each country, all applicable duties and taxes are payable upon receipt of the product.</p>
            <p>Normally when the shipment reaches your country, DHL will contact you to arrange the payment of duties and taxes to clear customs.</p>
          </Panel>
        </Collapse>
      </Template>
    );
    }
  }
