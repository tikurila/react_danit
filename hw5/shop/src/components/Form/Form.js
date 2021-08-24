import React, { Component } from "react";
import "./Form.scss";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useCart } from "react-use-cart";

const Form = () => {
  const { items, emptyCart } = useCart();
  const validationsSchema = yup.object().shape({
    name: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    lastName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
    age: yup.number().typeError("Должно быть числом").required("Обязательно"),
    adress: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
    number: yup
      .number()
      .typeError("Должно быть числом")
      .required("Обязательно"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          age: "",
          adress: "",
          number: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);

          const product = localStorage.getItem("react-use-cart") 

          const initialOrders = {
            client: values,
            order: JSON.parse(product).items,
          };

          axios.post("http://localhost:3000/orders/", initialOrders);
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className="container-form">
            <p>
              <label htmlFor={`name`}>First Name</label>
              <input
                className={`input-text`}
                type={`text`}
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </p>
            {touched.name && errors.name && (
              <p className={"error"}>{errors.name}</p>
            )}
            <p>
              <label htmlFor={`lastName`}>Last Name</label>
              <input
                className={`input-text`}
                type={`text`}
                name={`lastName`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </p>
            {touched.lastName && errors.lastName && (
              <p className={"error"}>{errors.lastName}</p>
            )}
            <p>
              <label htmlFor={`age`}>Age: </label>
              <input
                className={`input-text age`}
                type={`text`}
                name={`age`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
              />
            </p>
            {touched.age && errors.age && (
              <p className={"error"}>{errors.age}</p>
            )}
            <p>
              <label htmlFor={`adress`}>Adress: </label>
              <input
                className={`input-text adress`}
                type={`text`}
                name={`adress`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.adress}
              />
            </p>
            {touched.adress && errors.adress && (
              <p className={"error"}>{errors.adress}</p>
            )}
            <p>
              <label htmlFor={`number`}>Number: </label>
              <input
                className={`input-text number`}
                type={`text`}
                name={`number`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
            </p>
            {touched.number && errors.number && (
              <p className={"error"}>{errors.number}</p>
            )}
            <button
              className={`checkout`}
              disabled={!isValid && !dirty}
              onClick={() => {
                handleSubmit();
              }}
              type={`submit`}
            >
              Checkout
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Form;
