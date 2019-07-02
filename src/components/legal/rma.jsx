import React from 'react';
import Bowser from 'bowser';

import * as pdf from './pdf/api';

import Button from 'components/common/button';
import SpinnerLoader from 'components/common/spinnerLoader';

import s from './common.module.scss';

let data = {
  rmaNumber: '',
  title: 'Return Merchandise Authorization Form',
  parr1: [
    'To complete a Return Merchandise Authorization (RMA) request, complete all required fields below. If the form is completed by Voltera Inc., ensure that the information is correct.',
    'Return the completed form to support@voltera.io. You will be notified with an RMA number if your return request has been approved. Shipping information for sending the unit to Voltera Inc. will be provided once the RMA is issued.',
    'Complete RMA details are described below of this form.',
  ],

  contactHeader: 'Contact Information',

  name: 'Customer name: ',
  order: 'Order number: ',
  phone: 'Phone: ',
  email: 'Email: ',

  shippingHeader: 'Shipping Information',
  company: 'Company: ',
  street: 'Street: ',
  city: 'City: ',
  state: 'State/Region: ',
  postal: 'Zip/Postal code: ',
  country: 'Country: ',

  productHeader: 'Product Information',
  warranty: 'Type: ',
  description: 'Product description: Desktop prototyping tool for electronics.',
  serialNumber: 'Serial number: ',
  returnReason: 'Description of the problem: ',

  secondTitle: 'Product Returns for “Warranty” Determination',
  parr2: [
    'Voltera Inc. will test the product according to the description of the problem listed on the RMA request form. After Voltera’s evaluation, Warranty or Out-of-Warranty status will be determined. If the description of the problem is the same as listed on the RMA request form, the product will be repaired or replaced under warranty at no charge and shipped, prepaid, back to the customer. If the description of the problem is different from the problem listed on the RMA request form, or damaged from delivery, we will contact the customer. If the product has no identifiable problem we reserve the right to charge for testing and return delivery. Warranty repairs do not extend the original warranty period, except as outlined explicitly in the terms of use.',
  ],
  listHeader: 'No Warranty Credits or Exchanges for: ',
  listItems: [
    'Returned items that failed due to an accident, purchaser’s abuse, neglect or failure to operate in accordance with instructions provided in the supplied documentation or explicit instructions.',
    'Returned items that failed due to incorrect voltage or improper wiring.',
    'Returned items that failed due to rain, excessive humidity, corrosive environments or other contaminants.',
    'Any item damaged in shipment.',
    'Any product failure caused by installing or operating product under conditions not in accordance with installation and operation guidelines or damaged by contact with tools or surroundings.',
    'Returned items with cosmetic defects that do not interfere with product functionality. ',
    'Returned items that are incomplete or defaced.',
    'Any consumable or standard wear items (e.g. conductive ink, substrates, or solder wire).',
    'Returned items with a different serial number from what was authorized for return.',
    "Freight damaged items. If your original shipment from Voltera arrives damaged, you must note the damage on the carrier's delivery record in accordance with the carrier's policy, save the merchandise in the original box and packing it arrived in, and arrange for a carrier inspection of damaged merchandise.",
  ],

  parr3: [
    'For any product returned to Voltera Inc. for reasons other than warranty, shipping costs will be deducted from the credit refund or directly charged to the purchaser, as applicable.',
    'All returned items must be in their original box and must include all packing material, manuals, consumables, and accessories, except as explicitly instructed by Voltera Inc. Please take care to package your return carefully. Voltera Inc. is not responsible for damage or a lost product(s) caused by shipping. Any damage or subsequent failure of the hardware product related to inappropriate packaging will result in additional charges for the repair of the product, or deducting the cost of repairs from the credit refund.',
  ],

  thirdTitle: 'Product Returns for “Non-Warranty” Determination',
  parr4: [
    'After Voltera’s evaluation, the customer shall be notified of the repair cost. If the description of the problem is different from the problem listed on the RMA request form, or damaged from delivery, we will contact the customer. If the product has no problem that we can identify, we reserve the right to charge for testing and return delivery.',
    'At such time the customer must issue a written confirmation to proceed with the repair(s), agree to cover the costs of the repair and return freight, or authorize the product to be shipped back as is, at the customer’s expense. If the customer declines to ship back the product, or fails to provide a written confirmation within thirty (30) days Voltera reserve the right to hold the product for resale or internal use. Repair work is warranted for thirty (30) days from date of shipment.',
    'Please take care to package your return carefully. Voltera Inc. is not responsible for damage or a lost product(s) caused by shipping. Any damage or subsequent failure of the hardware product related to inappropriate packaging will result in additional charges for the repair of the product.',
  ],

  signature: ' has agreed to the terms and conditions set forth in this document electronically.',
};

const EMAIL = {
  ready: 'ready',
  sending: 'sending',
  sent: 'sent',
  failed: 'failed',
};

export default class RMA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: null,
      status: EMAIL.ready,
    };
  }

  generatePDF() {
    pdf.doc.setFont('helvetica', 'normal');

    pdf.addTitle(data.title);
    pdf.addParragraphs(data.parr1);
    pdf.addHeader(data.contactHeader);
    pdf.addLine(data.name);
    pdf.addLine(data.order);
    pdf.addLine(data.phone);
    pdf.addLine(data.email);

    pdf.addHeader(data.shippingHeader);
    pdf.addLine(data.company);
    pdf.addLine(data.street);
    pdf.addLine(data.city);
    pdf.addLine(data.state);
    pdf.addLine(data.postal);
    pdf.addLine(data.country);

    pdf.addHeader(data.productHeader);
    pdf.addLine(data.warranty);
    pdf.addLine(data.description);
    pdf.addLine(data.serialNumber);
    pdf.addParragraphs([data.returnReason]);

    pdf.addTitle(data.secondTitle);
    pdf.addParragraphs(data.parr2);

    pdf.newPage();

    pdf.addHeader(data.listHeader);
    pdf.addBullets(data.listItems);
    pdf.addParragraphs(data.parr3);

    pdf.addTitle(data.thirdTitle);
    pdf.addParragraphs(data.parr4);
    pdf.addSignature(data.signature);
  }

  emailDocument() {
    const emailParams = {
      to_email: process.env.NODE_ENV === 'production' ? 'support@voltera.io' : 'jesus@voltera.io',
      rma_number: data.rmaNumber,
      name: document.getElementById('fname').value,
      rma_attachment: pdf.doc.output('datauri'),
    };

    // Change state to sending.
    this.setState({ status: EMAIL.sending });
    window.emailjs.init('user_a6VUHHdymj1y3WbePDyCm');
    window.emailjs
      .send('gmail', 'rma_form', emailParams)
      .then(
        response => this.setState({ status: EMAIL.sent }),
        err => this.setState({ status: EMAIL.failed })
      );
  }

  formCompleted() {
    const requiredFields = [
      'fname',
      'order',
      'phone',
      'email',
      'company',
      'street',
      'city',
      'state',
      'postal',
      'country',
      'serial-number',
      'return-reason',
    ];

    const allComplete = requiredFields.every(
      field => document.getElementById(field).value.length > 0
    );
    if (!allComplete) {
      return 'Please complete all the fields';
    }

    if (
      !(
        document.getElementById('serial-number').value.toUpperCase().startsWith('V1-') ||
        document.getElementById('serial-number').value.toUpperCase().startsWith('D1-')
      )
    ) {
      return 'Invalid serial number. (Ex. V1-05-0000-120)';
    }

    if (!document.getElementById('agree').checked) {
      return 'Please agree to the terms and conditions to proceed';
    }
    return false;
  }

  extractInformation() {
    data.name += document.getElementById('fname').value;
    data.order += document.getElementById('order').value;
    data.phone += document.getElementById('phone').value;
    data.email += document.getElementById('email').value;

    data.company += document.getElementById('company').value;
    data.street += document.getElementById('street').value;
    data.city += document.getElementById('city').value;
    data.state += document.getElementById('state').value;
    data.postal += document.getElementById('postal').value;
    data.country += document.getElementById('country').value;

    data.warranty += document.querySelector('input[name="drone"]:checked').value;
    data.serialNumber += document.getElementById('serial-number').value;
    data.returnReason += document.getElementById('return-reason').value;

    data.signature = document.getElementById('fname').value + data.signature;

    // YYBBSSSSOOOOY -
    // year (e.g. 17 for 2017)
    // B -  batch (e.g. 04 for batch 4)
    // S - serial (last 4 digits)
    // O - order number (VOLT-XXXX)

    let serial = document.getElementById('serial-number').value;
    const y = new Date()
      .getFullYear()
      .toString()
      .substr(2, 2);
    const b = serial.substr(3, 2);
    const s = serial.substr(6, 4);
    const o = document.getElementById('order').value.substr(5, 4);
    data.rmaNumber = y + b + s + o;
  }

  processForm() {
    // First check the form was completed correctly.
    let reason = this.formCompleted();
    if (reason) {
      this.setState({ errorMsg: reason });
      return;
    }

    // Extract information and generate PDF.
    this.extractInformation();
    this.generatePDF();
    this.emailDocument();
  }

  renderForm() {
    return (
      <div>
        <h1>{data.title}</h1>
        {data.parr1.map((item, index) => (
          <p key={index + 'parr1'}>{item}</p>
        ))}

        <h3>{data.contactHeader}</h3>
        <div className={s.format}>
          <div className={s.fields}>
            <p>
              {data.name}
              <input className='text-input' type='text' id='fname' name='name' />
            </p>
            <p>
              {data.order}
              <input
                className='text-input'
                type='text'
                id='order'
                name='order'
                placeholder='Eg. VOLT-1234'
              />
            </p>
            <p>
              {data.phone}
              <input className='text-input' type='tel' id='phone' name='phone' autoComplete='tel' />
            </p>
            <p>
              {data.email}
              <input
                className='text-input'
                type='email'
                id='email'
                name='email'
                autoComplete='email'
              />
            </p>
          </div>
        </div>
        <h3>{data.shippingHeader}</h3>
        <div className={s.format}>
          <div className={s.fields}>
            <p>
              {data.company}
              <input
                className='text-input'
                name='ship-address'
                id='company'
                autoComplete='shipping company'
              />
            </p>
            <p>
              {data.street}
              <input
                className='text-input'
                name='ship-address'
                id='street'
                autoComplete='shipping street-address'
              />
            </p>
            <p>
              {data.city}
              <input
                className='text-input'
                name='ship-city'
                id='city'
                autoComplete='shipping locality'
              />
            </p>
            <p>
              {data.state}
              <input
                className='text-input'
                name='ship-state'
                id='state'
                autoComplete='shipping region'
              />
            </p>
            <p>
              {data.postal}
              <input
                className='text-input'
                name='ship-zip'
                id='postal'
                autoComplete='shipping postal-code'
              />
            </p>
            <p>
              {data.country}
              <input
                className='text-input'
                name='ship-country'
                id='country'
                autoComplete='shipping country'
              />
            </p>
          </div>
        </div>

        <h3>{data.productHeader}</h3>
        <div className={s.format}>
          <div>
            <input type='radio' id='warranty' name='drone' value='Warranty' defaultChecked />
            <label htmlFor='warranty'>Warranty</label>
          </div>
          <div>
            <input type='radio' id='non-warranty' name='drone' value='Non-warranty' />
            <label htmlFor='non-warranty'>Non Warranty</label>
          </div>
          <div>
            <input type='radio' id='unknown' name='drone' value='Unknown' />
            <label htmlFor='unknown'>Unknown</label>
          </div>
          <p>{data.description}</p>
          <p>
            {data.serialNumber}
            <input
              className='text-input'
              name='serial-number'
              id='serial-number'
              placeholder='Eg. V1-05-0000-120'
            />
          </p>
          <p>{data.returnReason}</p>
          <textarea
            maxLength='400'
            placeholder='Ex. The V-One does not turn on when I push the power button...'
            id='return-reason'
          />
        </div>

        <h1>{data.secondTitle}</h1>
        <p>{data.parr2}</p>
        <p>
          <strong>{data.listHeader}</strong>
        </p>
        <ul>
          {data.listItems.map((item, index) => (
            <li key={index + 'list'}>{item}</li>
          ))}
        </ul>
        {data.parr3.map((item, index) => (
          <p key={index + 'parr3'}>{item}</p>
        ))}

        <h1>{data.thirdTitle}</h1>
        {data.parr4.map((item, index) => (
          <p key={index + 'parr4'}>{item}</p>
        ))}
        <p>
          <input type='checkbox' id='agree' name='agree' />
          <label htmlFor='agree'>
            <strong>I agree to the terms and conditions set forth on this form.</strong>{' '}
          </label>
        </p>
        <div className='pull-center'>
          {this.state.errorMsg ? <p className={s.missing}>{this.state.errorMsg}</p> : null}
          <Button label='Submit' onClick={() => this.processForm()} color='dark' />
        </div>
      </div>
    );
  }

  renderEmailSending() {
    return (
      <div>
        <h1>Please wait</h1>
        <p className='pull-center'>We are processing your request.</p>
        <SpinnerLoader />
        <p className='pull-center'>Thank you for filling out your information.</p>
      </div>
    );
  }

  renderEmailFailed() {
    return (
      <div className='pull-center'>
        <h1>Uh Oh! Something went wrong</h1>
        <p>
          We are sorry, there was an issue processing your request. Please try again later or email{' '}
          <strong>support@voltera.io</strong>
        </p>
        <div className='button-wrapper'>
          <Button label='Return' url={'/'} color='dark' internal />
        </div>
      </div>
    );
  }

  renderEmailSent() {
    return (
      <div className='pull-center'>
        <h1>Success! We received the form</h1>
        <p>Thank you for completing the RMA form. You may download a copy for your records.</p>
        <div className='button-wrapper'>
          <Button
            onClick={() => {
              pdf.doc.save(`Voltera RMA (${data.rmaNumber}).pdf`);
            }}
            label='Download'
            color='dark'
          />
        </div>
      </div>
    );
  }

  renderContent() {
    if (Bowser.msie) {
      return (
        <div>
          <h1>Return Merchandise Authorization Form</h1>
          <p>
            We are sorry. This form is not supported in Internet Explorer. Please access this page
            with Chrome, Firefox or Microsoft Edge
          </p>
        </div>
      );
    }
    switch (this.state.status) {
      case EMAIL.ready:
      default:
        return this.renderForm();

      case EMAIL.sending:
        return this.renderEmailSending();

      case EMAIL.sent:
        return this.renderEmailSent();

      case EMAIL.failed:
        return this.renderEmailFailed();
    }
  }
  render() {
    return <section className={s.rma}>{this.renderContent()}</section>;
  }
}
