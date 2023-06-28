import React, { useState } from 'react';
import '../style/Form.css';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({
      name: '',
      email: '',
      menssage: '',
    });

    try {
      const response = await axios.post('https://formspree.io/f/mknlwzvg', formData);

      if (response.status === 200) {
        console.log('form succesfully');
      } else {
        console.log('Must be an error');
      }
    } catch (error) {
      console.log('error al enviar');
    }
  };

  return (
    <div className="form">
      <div className="text-form">
        <h2 className="contact-title">Contact</h2>
        <p className="paragraph">
          I would love to hear about your project and
          how I could help. Please fill the form, and
          I will get back to you as soon as possible.
        </p>
      </div>
      <div className="inputs">
        <form
          className="inputs-form"
          onSubmit={handleSubmit}
        >
          <div className="mb-3 d-flex justify-content-center">
            <input
              type="text"
              className="form-control w-75"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <input
              type="email"
              className="form-control w-75"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="User@example.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <textarea
              className="form-control w-75"
              type="text"
              id="#"
              cols="30"
              rows="10"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
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
