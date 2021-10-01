import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import history from "../../common/components/history";
import {DateFormatter} from '../../common/components/DateFormatter';
import { fetchCard, adminAddCard, adminUpdateCard } from "../../gifts/state/actions/index"

const mapStateToProps = ({
  gifts: { giftCard }
}) => {
  return {
    giftCard
  };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCard,
    adminAddCard, 
    adminUpdateCard
  },
  dispatch
  );
}

export const AddUpdateFormikForm = ({
  giftCard,
  fetchCard,
  adminAddCard,
  adminUpdateCard,
  match: { params: { id } }
}) => {

  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    // cardNameError: false,
    // cardNameHelperText: '',
    cardPoints: '',
    // cardPointsError: false,
    // cardPointsHelperText: '',
    cardCategory: '',
    // cardCategoryError: false,
    // cardCategoryHelperText: '',
    cardRetailer: '',
    // cardRetailerError: false,
    // cardRetailerHelperText: '',
    
    cardExpiryDate: '',
    // cardExpiryDateError: false,
    // cardExpiryDateHelperText: '',
    cardCount: '',
    // cardCountError: false,
    // cardCountHelperText: '',
    cardImage: '',
    // cardImageError: false,
    // cardImageHelperText: '',
    cardVendor: '',
    // cardVendorError: false,
    // cardVendorHelperText: '',
    cardShortDesc: '',
    // cardShortDescError: false,
    // cardShortDescHelperText: '',
    cardLongDesc: '',
    // cardLongDescError: false,
    // cardLongDescHelperText: '',
    // showErrorSnackBar: false,
    // showUpdateSnackBar: false,
    // showSuccessSnackBar: false,
  });

useEffect(()=> {
  if(id !== undefined && giftCard.id !== id)
    fetchCard(id);
}, []);

useEffect(() => {
  if(giftCard.id === Number(id)) {
      const { cardName, cardPoints, cardCategory, cardRetailer, cardExpiryDate, cardCount,
        cardImage, cardVendor, cardShortDesc, cardLongDesc } = giftCard;
      setCardDetails({
        ...cardDetails,
        cardName: cardName,
        cardPoints: cardPoints,
        cardCategory: cardCategory,
        cardRetailer: cardRetailer,
        cardExpiryDate: DateFormatter(cardExpiryDate),
        cardCount: cardCount,
        cardImage: cardImage,
        cardVendor: cardVendor,
        cardShortDesc: cardShortDesc,
        cardLongDesc: cardLongDesc
      });
  }
}, [giftCard]);

const style = {
  margin: "1em 0em",
  fontSize: "1.5em",
  backgroundColor: "white"
};

const styleError = {
  ...style,
  border: "1px solid tomato"
};

const schema = Yup.object().shape({
  cardName: Yup.string().required("Name is requried!"),
  cardPoints: Yup.number("Points should be of number type only!").required("Points is requried!").positive("Points must be a positive integer!").integer(),
  cardCategory: Yup.string().required("Category is required!"),
  cardRetailer: Yup.string().required("Retailer is required!"),
  cardExpiryDate: Yup.date().required("Expiry Date is required!").min(new Date(), "Expiry Date should be greater than today!"),
  cardCount: Yup.number("Count should be of number type only!").required("Count is required!").positive("Count must be a positive integer!").integer().moreThan(5, "Count should be more than 5!"),
  cardImage: Yup.string().required("Image is required!"),
  cardVendor: Yup.string().required("Vendor is required!"),
  cardShortDesc: Yup.string().required("Short Description is required!"),
  cardLongDesc: Yup.string().required("Long Description is required!")
});

return(
  <div style={{marginLeft:"40px"}}>
    <Formik 
      enableReinitialize={true}
      initialValues={{      
        cardName: cardDetails.cardName,
        cardPoints: cardDetails.cardPoints,
        cardCategory: cardDetails.cardCategory,
        cardRetailer: cardDetails.cardRetailer,
        cardExpiryDate: cardDetails.cardExpiryDate,
        cardCount: cardDetails.cardCount,
        cardImage: cardDetails.cardImage,
        cardVendor: cardDetails.cardVendor,
        cardShortDesc: cardDetails.cardShortDesc,
        cardLongDesc: cardDetails.cardLongDesc
      }}
      onSubmit={(values, { setSubmitting }) => {
        if(id !== undefined) adminUpdateCard(id, values);
        else adminAddCard(values);
        history.push("/giftCards");
        setSubmitting(false);
      }}
      validationSchema={schema}
    >
      {({ 
        isSubmitting, 
        handleReset, 
        dirty
       }) => (
        <Form>
          <div>
            <label>
              <b>Card Name: </b>
            </label>
            <Field 
              type="text" 
              name="cardName"
            >
              {({ field, form }) => (
                <input
                  style={form.touched.cardName && form.errors.cardName ? styleError : style}
                  {...field}
                  type="text"
                  placeholder="Enter Card Name"
                />
            )}
            </Field>
            <ErrorMessage name="cardName">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <label>
              <b>Card Points: </b>
            </label>
            <Field 
              type="text" 
              name="cardPoints" >
              {({ field, form }) => (
                <input
                  style={form.touched.cardPoints && form.errors.cardPoints ? styleError : style}
                  {...field}
                  type="text"
                  placeholder="Enter Card Points"
                />
            )}
            </Field>
            <ErrorMessage name="cardPoints">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <label>
              <b>Card Category: </b>
            </label>
            <Field 
              type="text" 
              name="cardCategory"
            >
              {({ field, form }) => (
                <input
                  style={form.touched.cardCategory && form.errors.cardCategory ? styleError : style}
                  {...field}
                  type="text"
                  placeholder="Enter Card Category"
                />
            )}
            </Field>
            <ErrorMessage name="cardCategory">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <label>
              <b>Card Retailer: </b>
            </label>
            <Field 
              type="text" 
              name="cardRetailer"
            >
              {({ field, form }) => (
                <input
                  style={form.touched.cardRetailer && form.errors.cardRetailer ? styleError : style}
                  {...field}
                  type="text"
                  placeholder="Enter Card Retailer"
                />
            )}
            </Field>
            <ErrorMessage name="cardRetailer">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <label>
              <b>Card Expirty Date: </b>
            </label>
            <Field 
            type="date" 
            name="cardExpiryDate"
            >
              {({ field, form }) => (
                <input
                  style={form.touched.cardExpiryDate && form.errors.cardExpiryDate ? styleError : style}
                  {...field}
                  type="date"
                  placeholder="Enter Card Retailer"
                />
            )}
            </Field>
            <ErrorMessage name="cardExpiryDate">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <label>
              <b>Card Count: </b>
            </label>
            <Field 
              type="text"
              name="cardCount"
            >
              {({ field, form }) => (
                <input
                  style={form.touched.cardCount && form.errors.cardCount ? styleError : style}
                  {...field}
                  type="text"
                  placeholder="Enter Card Count"
                />
            )}
            </Field>
            <ErrorMessage name="cardCount">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <label>
              <b>Card Image: </b>
            </label>
            <Field 
              type="text" 
              name="cardImage"
            >
              {({ field, form }) => (
                <input
                  style={form.touched.cardImage && form.errors.cardImage ? styleError : style}
                  {...field}
                  type="text"
                  placeholder="Enter Card Image"
                />
            )}
            </Field>
            <ErrorMessage name="cardImage">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <label>
              <b>Card Vendor: </b>
            </label>
            <Field 
              type="text" 
              name="cardVendor"
            >
              {({ field, form }) => (
                <input
                  style={form.touched.cardVendor && form.errors.cardVendor ? styleError : style}
                  {...field}
                  type="text"
                  placeholder="Enter Card Vendor"
                />
            )}
            </Field>
            <ErrorMessage name="cardVendor">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <label>
              <b>Card Short Description: </b>
            </label>
            <Field 
              type="text"
              name="cardShortDesc"
            >
              {({ field, form }) => (
                <input
                  style={form.touched.cardShortDesc && form.errors.cardShortDesc ? styleError : style}
                  {...field}
                  type="text"
                  placeholder="Enter Card Short Description"
                />
            )}
            </Field>
            <ErrorMessage name="cardShortDesc">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <label>
              <b>Card Long Description: </b>
            </label>
            <Field 
              type="text" 
              name="cardLongDesc"
            >
              {({ field, form }) => (
                <input
                  style={form.touched.cardLongDesc && form.errors.cardLongDesc ? styleError : style}
                  {...field}
                  type="text"
                  placeholder="Enter Card Long Description"
                />
            )}
            </Field>
            <ErrorMessage name="cardLongDesc">
              {message => 
                <div className="text-input error">
                  {message}
                </div>}
            </ErrorMessage>
          </div>

          <div>
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>

            <button 
              type="submit" 
              disabled={isSubmitting}
            >
              Submit
            </button>           
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
};

AddUpdateFormikForm.ropTypes = {
  giftCard: PropTypes.array.isRequired,
  fetchCard: PropTypes.func.isRequired,
  adminAddCard: PropTypes.func.isRequired,
  adminUpdateCard: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AddUpdateFormikForm);
