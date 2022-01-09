import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name}
        onChange={({target}) => {setName(target.value)}}
        placeholder="Contact Name"
        required
      />
      <input 
        type="tel"
        value={phone}
        pattern="^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$"
        onChange={({target}) => {setPhone(target.value)}}
        placeholder="Contact Phone"
        required
      />
      <input 
        type="email"
        value={email}
        onChange={({target}) => {setEmail(target.value)}}
        placeholder="Contact Email"
        required
      />
      <input
        type="submit"
      />
    </form>
  );
};
