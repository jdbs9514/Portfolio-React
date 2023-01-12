/* eslint-disable react/self-closing-comp */
import React from 'react';

function Form() {
  return (
    <div className="form">
      <h2>Contact</h2>
      <p>
        I would love to hear about ypur project and
        how I could help. Please fill the form, and
        I will get back to you as soon as possible.
      </p>
      <div className="inputs">
        <form action="#" className="inputs-form">
          <input className="name" type="text" placeholder="Name" />
          <input className="email" type="text" placeholder="Email" />
          <textarea className="message" name="#" id="#" cols="30" rows="10" placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
