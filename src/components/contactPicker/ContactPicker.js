import React from "react";

export const ContactPicker = (props) => {

  const handleChange = ({target}) => {
    const {name, value} = target;
    props.setContact(value);
  };
  return (
    <select onChange={handleChange}>
      <option value="">PleaseSelect</option>
      {
        props.contacts.map( (element, index) => {
          return <option value={element.name} key={index}>{element.name}</option>
        })
      }
    </select>
  );
};
