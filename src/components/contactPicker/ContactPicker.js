import React from "react";

export const ContactPicker = (props) => {

  const handleChange = (e) => {
    const value = e.target.value;
    props.setContact(value);
  };
  return (
    <select onChange={handleChange}>
      <option value="">Please Select</option>
      {
        props.contacts.map( (element, index) => {
          return <option value={element.name} key={index}>{element.name}</option>
        })
      }
    </select>
  );
};
