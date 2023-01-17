import React, { useState } from 'react';
import {
  ErrorMessage,
  FormBody,
  FormContainer,
  FormHeader,
  FormInput,
  FormInputWrapper,
  FormLabel,
  FormSection,
  FormSelect,
  FormWrapper,
  SectionHeading,
  SubmitButton,
} from '../components/Form/FormComps';
import { ContentBody } from '../components/Home/homepage.styles';

const TestForm = () => {
  const formatName = /^[a-zA-Z]{2,}$/; // regular expression to match only letters
  const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [inputs, setInputs] = useState<any>({
    name: '',
    email: '',
    phone: '',
    password: '',
    cPassword: '',
    cpName: '',
    cpPhone: '',
    clName: '',
    mBrand: '',
    crNum: '',
    vcNum: '',
    cCode: '',

    iBan: '',
    bBan: '',
    sepa: '',
    cmpName: '',
    cmpHqAdd: '',
    country: '',
    state: '',
    pincode: '',
  });

  const [errors, setErrors] = useState<any>({
    name: '',
    email: '',
  });

  const validate = (name: any, value: any) => {
    switch (name) {
      case 'name':
        if (value.length < 4) {
          return 'Name must be at least 4 characters long.';
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          return 'Name can only contain letters.';
        }
        break;
      case 'email':
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          return 'Please enter a valid email address.';
        }
        break;
      default:
        return '';
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors: any = {};
    Object.keys(inputs).forEach((input) => {
      if (!inputs[input]) {
        newErrors[input] = `${input} cannot be empty.`;
      } else {
        newErrors[input] = validate(input, inputs[input]);
      }
    });
    setErrors(newErrors);
    if (!newErrors.name && !newErrors.email) {
      // Form submission logic
    }
  };
  return (
    <ContentBody align="none">
      <FormWrapper>
        <FormContainer>
          <FormHeader>My Profile</FormHeader>

          <FormBody
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <FormSection>
              <SectionHeading>Personal details</SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="Name">Name</FormLabel>
                <FormInput
                  type="text"
                  id="Name"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={inputs.name}
                />
                {errors.name && (
                  <ErrorMessage className="invalid">{errors.name}</ErrorMessage>
                )}
              </FormInputWrapper>

              <FormInputWrapper>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={inputs.email}
                />
                {errors.email && (
                  <ErrorMessage className="invalid">
                    {errors.email}
                  </ErrorMessage>
                )}
              </FormInputWrapper>
              {/*
               <FormInputWrapper>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={email}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="phone">Phone No</FormLabel>
                <FormInput
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone no."
                  onChange={handleChange}
                  value={phone}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={password}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>

              <FormInputWrapper>
                <FormLabel htmlFor="cPassword">Confirm Password</FormLabel>
                <FormInput
                  type="text"
                  id="cPassword"
                  name="cPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={cPassword}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper> */}
            </FormSection>

            {/* <FormSection>
              <SectionHeading>Contact Person </SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="cpName">Contact Person Full Name</FormLabel>
                <FormInput
                  type="text"
                  id="cpName"
                  name="cpName"
                  placeholder="Contact Person Name"
                  onChange={handleChange}
                  value={cpName}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="cpPhone">
                  Contact Person Mobile no
                </FormLabel>
                <FormInput
                  type="text"
                  id="cpPhone"
                  name="cpPhone"
                  placeholder="Contact Person Mobile no"
                  onChange={handleChange}
                  value={cpPhone}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
            </FormSection> */}

            {/* <FormSection>
              <SectionHeading>Company Details </SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="clName">Company Legal Name</FormLabel>
                <FormInput
                  type="text"
                  id="clName"
                  name="clName"
                  placeholder="Company Legal Name"
                  onChange={handleChange}
                  value={clName}
                />
                <ErrorMessage className="invalid">
                </ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="mBrand">Main Brand</FormLabel>
                <FormInput
                  type="text"
                  id="mBrand"
                  name="mBrand"
                  placeholder="Main Brand"
                  onChange={handleChange}
                  value={mBrand}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="crNum">Company CR number</FormLabel>
                <FormInput
                  type="text"
                  id="crNum"
                  name="crNum"
                  placeholder="Company CR number"
                  onChange={handleChange}
                  value={crNum}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="vcNum">Vat certificate number</FormLabel>
                <FormInput
                  type="text"
                  id="vcNum"
                  name="vcNum"
                  placeholder="Company CR number"
                  onChange={handleChange}
                  value={vcNum}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
            </FormSection> */}

            {/* <FormSection>
              <SectionHeading>Payment Information </SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="cCode">ISO COUNTRY CODE</FormLabel>

                <FormSelect
                  name="cCode"
                  onChange={handleChange}
                  value={cCode}
                  id="ccode"
                >
                  <option value="" disabled>
                    Select country code
                  </option>
                  <option value="Saudi Arabia"> SA </option>
                  <option value="India"> IND </option>
                  <option value="Srilanka"> SL </option>
                  <option value="China"> CHN </option>
                </FormSelect>

                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="iBan">IBAN CHECK Digits</FormLabel>
                <FormSelect
                  name="iBan"
                  id="iBan"
                  onChange={handleChange}
                  value={iBan}
                >
                  <option value="" disabled>
                    Select IBAN check digits
                  </option>
                  <option value="Saudi Arabia"> 01 </option>
                  <option value="India"> 02 </option>
                  <option value="Srilanka"> 03 </option>
                  <option value="China"> 04 </option>
                </FormSelect>
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>

              <FormInputWrapper>
                <FormLabel htmlFor="bBan">BBAN</FormLabel>
                <FormInput
                  type="text"
                  id="bBan"
                  name="bBan"
                  placeholder="bBan number"
                  onChange={handleChange}
                  value={bBan}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>

              <FormInputWrapper>
                <FormLabel htmlFor="sepa">SEPA Number</FormLabel>
                <FormSelect
                  name="sepa"
                  id="sepa"
                  onChange={handleChange}
                  value={sepa}
                >
                  <option value="" disabled>
                    Select SEPA number
                  </option>
                  <option value="Saudi Arabia"> 01 </option>
                  <option value="India"> 02 </option>
                  <option value="Srilanka"> 03 </option>
                  <option value="China"> 04 </option>
                </FormSelect>
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
            </FormSection>

            <FormSection>
              <SectionHeading>Company Address </SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="cmpName">Company Legal Name</FormLabel>
                <FormInput
                  type="text"
                  id="cmpName"
                  name="cmpName"
                  placeholder="Company Name"
                  onChange={handleChange}
                  value={cmpName}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="cmpHqAdd">
                  Company Headquarter Address
                </FormLabel>
                <FormInput
                  type="text"
                  id="cmpHqAdd"
                  name="cmpHqAdd"
                  placeholder="Company Headquarter Address"
                  onChange={handleChange}
                  value={cmpHqAdd}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>

              <FormInputWrapper>
                <FormLabel htmlFor="country">Country</FormLabel>
                <FormSelect
                  name="country"
                  id="country"
                  onChange={handleChange}
                  value={country}
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="Saudi Arabia"> Saudi Arabia </option>
                  <option value="India"> India </option>
                  <option value="Srilanka"> Srilanka</option>
                  <option value="Qatar"> Qatar </option>
                </FormSelect>
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="state">State</FormLabel>
                <FormSelect
                  name="state"
                  id="state"
                  onChange={handleChange}
                  value={state}
                >
                  {' '}
                  <option value="" disabled>
                    Select a State
                  </option>
                  <option value="Maharashtra"> Maharashtra </option>
                  <option value="Uttar Pradesh "> Uttar Pradesh </option>
                  <option value="Haryana"> Haryana </option>
                  <option value="Punjab"> Punjab </option>
                </FormSelect>
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>

              <FormInputWrapper>
                <FormLabel htmlFor="pincode">Pincode</FormLabel>
                <FormSelect
                  name="pincode"
                  id="pincode"
                  onChange={handleChange}
                  value={pincode}
                >
                  <option value="" disabled>
                    Select Pincode
                  </option>
                  <option value="440033"> 440033 </option>
                  <option value="440034"> 440034</option>
                  <option value="440035"> 440035</option>
                  <option value="440036">440036</option>
                </FormSelect>
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
            </FormSection>
            <FormSection>
              <SectionHeading>Address Location 2 </SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="cpname">Contact Person Full Name</FormLabel>
                <FormInput
                  type="text"
                  id="cpname"
                  name="cpname"
                  placeholder="Contact Person Name"
                />
                <ErrorMessage className="invalid">
                </ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="cpphone">
                  Contact Person Mobile no
                </FormLabel>
                <FormInput
                  type="text"
                  id="cpphone"
                  name="cpphone"
                  placeholder="Contact Person Mobile no"
                />
                <ErrorMessage className="invalid">
                  {' '}
                </ErrorMessage>
              </FormInputWrapper>
            </FormSection> */}

            <FormInputWrapper>
              <SubmitButton> Submit </SubmitButton>
            </FormInputWrapper>
          </FormBody>
        </FormContainer>
      </FormWrapper>
    </ContentBody>
  );
};

export default TestForm;

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// import React, { useState } from 'react';

// function Form() {
//   const [inputs, setInputs] = useState({
//     name: '',
//     email: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: ''
//   });

//   const validate = (name, value) => {
//     switch (name) {
//       case 'name':
//         if (value.length < 4) {
//           return 'Name must be at least 4 characters long.';
//         } else if (!/^[a-zA-Z]+$/.test(value)) {
//           return 'Name can only contain letters.';
//         }
//         break;
//       case 'email':
//         if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
//           return 'Please enter a valid email address.';
//         }
//         break;
//       default:
//         return '';
//     }
//   };

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//     setErrors({ ...errors, [name]: validate(name, value) });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.keys(inputs).forEach(input => {
//       if (!inputs[input]) {
//         newErrors[input] = `${input} cannot be empty.`;
//       } else {
//         newErrors[input] = validate(input, inputs[input]);
//       }
//     });
//     setErrors(newErrors);
//     if (!newErrors.name && !newErrors.email) {
//       // Form submission logic
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={inputs.name} onChange={handleChange} />
//         {errors.name && <p>{errors.name}</p>}
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={inputs.email} onChange={handleChange} />
//         {errors.email && <p>{errors.email}</p>}
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// import React, { useState } from "react";

// function Form() {
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: ""
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: ""
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//     if (name === 'name') {
//       if (value.length < 4) {
//         setErrors({ ...errors, name: 'Name must be at least 4 characters long.' });
//       } else if (!/^[a-zA-Z]+$/.test(value)) {
//         setErrors({ ...errors, name: 'Name can only contain letters.' });
//       } else {
//         setErrors({ ...errors, name: '' });
//       }
//     }
//     if (name === 'email') {
//       if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
//         setErrors({ ...errors, email: 'Please enter a valid email address.' });
//       } else {
//         setErrors({ ...errors, email: '' });
//       }
//     }
//   };

//   const validate = () => {
//     const errors = { name: "", email: "" };
//     if (inputs.name.length < 4) {
//       errors.name = "Name must be at least 4 characters long.";
//     }
//     if (!/^[a-zA-Z]+$/.test(inputs.name)) {
//       errors.name = "Name can only contain letters.";
//     }
//     if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)) {
//       errors.email = "Please email address.";
//     }
//     if (!inputs.name) {
//       errors.name = "Name cannot be empty.";
//     }
//     if (!inputs.email) {
//       errors.email = "Email cannot be empty.";
//     }
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validate();
//     setErrors(newErrors);
//     if (!newErrors.name && !newErrors.email) {
//       // Form submission logic
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={inputs.name}
//           onChange={handleChange}
//         />
//         {errors.name && <p>{errors.name}</p>}
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={inputs.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p>{errors.email}</p>}
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;

// fine

// import React, { useState } from 'react';

// function Form() {
//   const [inputs, setInputs] = useState({
//     name: '',
//     email: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: ''
//   });

//   const validate = (name, value) => {
//     switch (name) {
//       case 'name':
//         if (value.length < 4) {
//           return 'Name must be at least 4 characters long.';
//         } else if (!/^[a-zA-Z]+$/.test(value)) {
//           return 'Name can only contain letters.';
//         }
//         break;
//       case 'email':
//         if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
//           return 'Please enter a valid email address.';
//         }
//         break;
//       default:
//         return '';
//     }
//   };

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//     setErrors({ ...errors, [name]: validate(name, value) });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.keys(inputs).forEach(input => {
//       newErrors[input] = validate(input, inputs[input])
//     });
//     setErrors(newErrors);
//     if (!newErrors.name && !newErrors.email) {
//       // Form submission logic
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={inputs.name} onChange={handleChange} />
//         {errors.name && <p>{errors.name}</p>}
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={inputs.email} onChange={handleChange} />
//         {errors.email && <p>{errors.email}</p>}
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;

// working good

// import React, { useState } from 'react';

// function Form() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     nameError: '',
//     emailError: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((formData) => ({
//       ...formData,
//       [name]: value
//     }));
//     handleValidation(name,value);
//   };

//   const handleValidation = (name,value) => {
//     if(name === 'name'){
//       if (value.length < 4) {
//         handleErrors('nameError', 'Name must be at least 4 characters long.');
//       } else if (!/^[a-zA-Z]+$/.test(value)) {
//         handleErrors('nameError', 'Name can only contain letters.');
//       } else {
//         handleErrors('nameError', '');
//       }
//     }
//     if(name === 'email'){
//       if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
//         handleErrors('emailError', 'Please enter a valid email address.');
//       } else {
//         handleErrors('emailError', '');
//       }
//     }
//   };

//   const handleErrors = (name, message) => {
//     setFormData((formData) => ({
//       ...formData,
//       [name]: message
//     }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!formData.name) {
//       handleErrors('nameError', 'Name cannot be empty.');
//     }
//     if (!formData.email) {
//       handleErrors('emailError', 'Email cannot be empty.');
//     }
//     if (formData.name && formData.email) {
//       // Form submission logic
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         {formData.nameError && <p>{formData.nameError}</p>}
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         {formData.emailError && <p>{formData.emailError}</p>}
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
