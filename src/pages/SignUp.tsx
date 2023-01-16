import React, { useState } from "react";
import styled from "styled-components";
import { Content, ContentBody } from "../components/Home/homepage.styles";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { getStaticContextFromError } from "@remix-run/router";
// import "leaflet/dist/leaflet.css";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// AIzaSyBJmi5ykWh8Hv1RYH-hwadxGICmPGKBK5E

// const FormWrapper = styled.div``;

const FormWrapper = styled.div`
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 70vw;
  padding: 12px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const FormHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;
const FormBody = styled.form`
  padding: 4px;
  display: flex;
  gap: 1.3rem;
  flex-direction: column;
`;
const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SectionHeading = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: #414141;
`;

const FormInputWrapper = styled.div`
  /* background: #000; */
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 5px;
`;

const FormLabel: any = styled.label`
  cursor: pointer;
`;

const FormInput: any = styled.input`
  width: 100%;
  padding: 9px 5px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
`;
const ErrorMessage: any = styled.span`
  font-size: 14px;
  color: #e54040;
  
  /* display: none; */
`;
const SubmitButton = styled.button`
  width: 200px;
  padding: 8px;
  background: #43cda6;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: 0.3s ease all;
  &:hover {
    transform: scale(1.03);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 9px 5px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
`;
// const FormWrapper = styled.div``;

const SignUp = () => {
  // const [error, setError] = useState(false);
  // const [errorPhone, setErrorPhone] = useState(false);
  // const [errorEmail, setErrorEmail] = useState(false);
  // const [errorPassword, setErrorPassword] = useState(false);
  // const [errorCPassword, setErrorCPassword] = useState(false);

  const googleKey = "AIzaSyBJmi5ykWh8Hv1RYH-hwadxGICmPGKBK5E";
  // const Map = withScriptjs(
  //   withGoogleMap((props: any) => {
  //     return (
  //       <GoogleMap
  //         defaultZoom={8}
  //         defaultCenter={{ lat: -34.397, lng: 150.644 }}
  //       />
  //     );
  //   })
  // );

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    password: "",
    // cPassword: "",
    cpName: "",
    cpPhone: "",
    clName: "",
    mBrand: "",
    crNum: "",
    vcNum: "",
    cCode: "",

    iBan: "",
    bBan: "",
    sepa: "",
    cmpName: "",
    cmpHqAdd: "",
    country: "",
    state: "",
    pincode: "",
  });

  const {
    Name,
    email,
    phone,
    password,
    // cPassword,
    cpName,
    cpPhone,
    clName,
    mBrand,
    crNum,
    vcNum,

    cCode,
    iBan,
    bBan,
    sepa,

    cmpName,
    cmpHqAdd,
    country,
    state,
    pincode,
  } = formData;

  const [formError, setFormError] = useState<any>({});
  const [formErrors, setFormErrors] = useState<any>({});

  const validateForm = () => {
    let err: any = {};
    if (Name === "") {
      err.Name = "Name should not be empty";
    } else {
      let regex = /^[a-zA-Z]{2,}$/;
      if (!regex.test(Name)) {
        err.Name = "Name only contains alphabets";
      }
    }

    if (email === "") {
      err.email = "Email should not be empty";
    } else {
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(email)) {
        err.email = "Invalid Email";
      }
    }

    if (phone === "") {
      err.phone = "Phone no. should not be empty";
    } else {
      let regex = /^[0-9]{10}$/;
      if (!regex.test(phone)) {
        err.phone = "Invalid phone number";
      }
    }

    if (password === "") {
      err.password = "Password or Confirm should not be empty";
    } else {
      let regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
      if (!regex.test(password)) {
        err.password = "Invalid Password format";
      }
    }

    if (cpName === "") {
      err.cpName = "Contact person name should not be empty";
    }
    if (cpPhone === "") {
      err.cpPhone = "Contact person Phone should not be empty";
    } else {
      let regex = /^[0-9]{10}$/;
      if (!regex.test(cpPhone)) {
        err.cpPhone = "Invalid phone number";
      }
    }

    if (cCode === "") {
      err.cCode = "Please select country code";
    }
    if (iBan === "") {
      err.iBan = "Please select IBAN number";
    }
    if (bBan === "") {
      err.bBan = "Please select BBAN number";
    }
    if (sepa === "") {
      err.sepa = "Please select SEPA number";
    }

    if (cmpHqAdd === "") {
      err.cmpHqAdd = "Address should not be empty";
    }
    if (country === "") {
      err.country = "Please select your Country";
    }
    if (state === "") {
      err.state = "Please select State";
    }
    if (pincode === "") {
      err.pincode = "Please select Pincode";
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };
  const formatName = /^[a-zA-Z]{2,}$/; // regular expression to match only letters
  const phoneFormat = /^[0-9]{10}$/;
  const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/; // 1num 1upr 1lwr and 1 splchar

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let newErrors = { ...formErrors };

    switch (name) {
      case "Name":
        newErrors.Name =
          value.trim().length === 0
            ? "Name is required change"
            : !formatName.test(value)
            ? "Name only contains alphabets change"
            : "";
        break;
      case "email":
        newErrors.email =
          value.trim().length === 0
            ? "Email is required"
            : !emailFormat.test(value)
            ? "Invalid Email"
            : "";
        break;
      case "phone":
        newErrors.phone =
          value.trim().length === 0
            ? "Phone no is required"
            : !phoneFormat.test(value)
            ? "Phone no only contains numbers"
            : "";
        break;
      case "password":
        newErrors.password =
          value.trim().length === 0
            ? "Password is required"
            : !passwordFormat.test(value)
            ? "Invalid Password format"
            : "";
        break;

      // case 'cPassword':
      //   newErrors.cPassword = value.trim().length === 0 ? 'Confirm Password is required' : (cPassword===password ? 'Password does not match' : 'Okay');
      //   break;
      case "phone":
        newErrors.phone =
          value.trim().length === 0
            ? "Name is required"
            : !formatName.test(value)
            ? "Name only contains alphabets"
            : "";
        break;
      case "cpName":
        newErrors.cpName =
          value.trim().length === 0
            ? "Name is required"
            : !formatName.test(value)
            ? "Name only contains alphabets"
            : "";
        break;
      case "cpPhone":
        newErrors.cpPhone =
          value.trim().length === 0
            ? "Name is required"
            : !phoneFormat.test(value)
            ? "Phone no only contains numbers"
            : "";
        break;
    }

    setFormErrors({ ...newErrors });

    // return Object.keys(newErrors).length < 1;

    // if (name === "Name") {
    //   if (formatName.test(value)) {
    //     setFormValues({ ...formValues, [name]: value });
    //     setError(false);
    //   } else {
    //     setError(true);
    //   }
    // } else if (name === "phone") {
    //   if (phoneFormat.test(value)) {
    //     setFormValues({ ...formValues, [name]: value });
    //     setErrorPhone(false);
    //   } else {
    //     setErrorPhone(true);
    //   }
    // } else if (name === "email") {
    //   if (emailFormat.test(value)) {
    //     setFormValues({ ...formValues, [name]: value });
    //     setErrorEmail(false);
    //   } else {
    //     setErrorEmail(true);
    //   }
    // } else if (name === "password") {
    //   if (passwordFormat.test(value)) {
    //     setFormValues({ ...formValues, [name]: value });
    //     setErrorPassword(false);
    //   } else {
    //     setErrorPassword(true);
    //   }
    // } else if (name === "cPassword") {
    //   if (cPassword !== password) {
    //     setErrorCPassword(true);
    //   } else {
    //     setErrorCPassword(false);
    //   }
    // }

    // console.log(name, " :", value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);

    let isValid = validateForm();

    if (isValid) {
      alert("All Good");
    } else {
      alert("Something went wrong");
    }
    // console.log(isValid);
  };
  console.log(formError);

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
                  name="Name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={Name}
                />

                <ErrorMessage className="invalid">
                  {formError.Name}
                </ErrorMessage>
                {formErrors.Name && (
                  <span className="error">{formErrors.Name}</span>
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
                  value={email}
                />
                <ErrorMessage className="invalid">
                  {/* Please enter a valid email id,{" "}
                    <span style={{ color: "gray" }}>example (jon@doe.com)</span> */}
                  {formError.email}
                </ErrorMessage>
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
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
                <ErrorMessage className="invalid">
                  {/* Phone number only contain(0 - 9)Numbers & must be 10 digits */}
                  {formError.phone}
                </ErrorMessage>
                {formErrors.phone && (
                  <span className="error">{formErrors.phone}</span>
                )}
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
                <ErrorMessage className="invalid">
                  {" "}
                  {formError.password}
                  {/* Password must contain atleast 1 uppercase 1 lowercase
                    1special char & 1 number */}
                </ErrorMessage>
                {formErrors.password && (
                  <span className="error">{formErrors.password}</span>
                )}
              </FormInputWrapper>

              {/* <FormInputWrapper>
                <FormLabel htmlFor="cPassword">Confirm Password</FormLabel>
                <FormInput
                  type="text"
                  id="cPassword"
                  name="cPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={cPassword}
                />
                <ErrorMessage className="invalid">
                </ErrorMessage>
                {formErrors.cPassword && <span className='error'>{formErrors.cPassword}</span>}

              </FormInputWrapper> */}
            </FormSection>

            <FormSection>
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
                <ErrorMessage className="invalid">
                  {/* please enter contact person name */}
                  {formError.cpName}
                </ErrorMessage>
                {formErrors.cpName && (
                  <span className="error">{formErrors.cpName}</span>
                )}
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
                <ErrorMessage className="invalid">
                  {" "}
                  {formError.cpPhone}
                </ErrorMessage>
                {formErrors.cpPhone && (
                  <span className="error">{formErrors.cpPhone}</span>
                )}
              </FormInputWrapper>
            </FormSection>

            <FormSection>
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
                  {/* please enter Company Legal Name */}
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
                <ErrorMessage className="invalid">
                  {/* please enter Main Brand */}
                </ErrorMessage>
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
                <ErrorMessage className="invalid">
                  {/* please enter Company CR number */}
                </ErrorMessage>
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
                <ErrorMessage className="invalid">
                  {" "}
                  {/* please enter Vat certificate number */}
                </ErrorMessage>
              </FormInputWrapper>
            </FormSection>

            <FormSection>
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

                <ErrorMessage className="invalid">
                  {/* please select COUNTRY CODE */}
                  {formError.cCode}
                </ErrorMessage>
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
                <ErrorMessage className="invalid">
                  {/* please Select IBAN CHECK Digits */}
                  {formError.iBan}
                </ErrorMessage>
              </FormInputWrapper>

              {/* <div>
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div> */}

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
                <ErrorMessage className="invalid">
                  {/* please enter bban number */}
                  {formError.bBan}
                </ErrorMessage>
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
                <ErrorMessage className="invalid">
                  {/* please Select IBAN CHECK Digits */}
                  {formError.sepa}
                </ErrorMessage>
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
                <ErrorMessage className="invalid">
                  {/* please enter Company Name */}
                </ErrorMessage>
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
                <ErrorMessage className="invalid">
                  {" "}
                  {/* please enter Company Head quarter address */}
                  {/* {formError.cmpHqAdd} */}
                </ErrorMessage>
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
                <ErrorMessage className="invalid">
                  {/* please Select country */}
                  {formError.country}
                </ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="state">State</FormLabel>
                <FormSelect
                  name="state"
                  id="state"
                  onChange={handleChange}
                  value={state}
                >
                  {" "}
                  <option value="" disabled>
                    Select a State
                  </option>
                  <option value="Maharashtra"> Maharashtra </option>
                  <option value="Uttar Pradesh "> Uttar Pradesh </option>
                  <option value="Haryana"> Haryana </option>
                  <option value="Punjab"> Punjab </option>
                </FormSelect>
                <ErrorMessage className="invalid">
                  {/* please Select state */}
                  {formError.state}
                </ErrorMessage>
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
                <ErrorMessage className="invalid">
                  {/* please Select state */}
                  {formError.pincode}
                </ErrorMessage>
              </FormInputWrapper>

              {/*  */}

              {/* <div style={{ width: "100%", height: "100%" }}>
                <Map
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div> */}

              {/*  */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.147813380054!2d72.85098531490213!3d19.14500598704841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b137f65f1aab%3A0xbaecafd57d194ecc!2sBrainvire%20-%20eCommerce%20%26%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1673858578822!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                // allowFullScreen:=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
                  {/* please enter contact person name */}
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
                  {" "}
                  {/* please enter Contact Person Mobile no */}
                </ErrorMessage>
              </FormInputWrapper>
            </FormSection>

            <FormInputWrapper>
              <SubmitButton> Submit </SubmitButton>
            </FormInputWrapper>
          </FormBody>
        </FormContainer>
      </FormWrapper>
    </ContentBody>
  );
};

export default SignUp;
