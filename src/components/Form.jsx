import React from 'react';
import '../style/Form.css';

function Form() {
  return (
    <div className="form">
      <div className="text-form">
        <h2 className="contact-title">Contact</h2>
        <p className="paragraph">
          I would love to hear about ypur project and
          how I could help. Please fill the form, and
          I will get back to you as soon as possible.
        </p>
      </div>
      <div className="inputs">
        <form action="#" className="inputs-form">
          <div className="mb-3 d-flex justify-content-center">
            <input type="text" className="form-control w-75" placeholder="Name" />
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User@example.com" />
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <textarea className="form-control w-75" type="text" name="#" id="#" cols="30" rows="10" placeholder="Message" />
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <button className="btn btn-secondary mb-4" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
