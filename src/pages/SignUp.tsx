import React, { useState } from "react";
import styled from "styled-components";
import { Content, ContentBody } from "../components/Home/homepage.styles";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

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
  const [error, setError] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorCPassword, setErrorCPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    Name: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
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
    cPassword,
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
  } = formValues;

  const handleChange = (e: any) => {
    const formatName = /^[a-zA-Z]{2,}$/; // regular expression to match only letters
    const phoneFormat = /^[0-9]{10}$/;
    const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/; // 1num 1upr 1lwr and 1 splchar

    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === "Name") {
      if (formatName.test(value)) {
        setFormValues({ ...formValues, [name]: value });
        setError(false);
      } else {
        setError(true);
      }
    } else if (name === "phone") {
      if (phoneFormat.test(value)) {
        setFormValues({ ...formValues, [name]: value });
        setErrorPhone(false);
      } else {
        setErrorPhone(true);
      }
    } else if (name === "email") {
      if (emailFormat.test(value)) {
        setFormValues({ ...formValues, [name]: value });
        setErrorEmail(false);
      } else {
        setErrorEmail(true);
      }
    } else if (name === "password") {
      if (passwordFormat.test(value)) {
        setFormValues({ ...formValues, [name]: value });
        setErrorPassword(false);
      } else {
        setErrorPassword(true);
      }
    } else if (name === "cPassword") {
      if (cPassword !== password) {
        setErrorCPassword(true);
      } else {
        setErrorCPassword(false);
      }
    }

    console.log(name, " :", value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("form submit");
    if (!Name) {
      setError(true);
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
                  name="Name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={Name}
                />
                {error && (
                  <ErrorMessage>
                    {" "}
                    Name should contain atleast 2 letters and should not contain
                    any special characters and numbers
                  </ErrorMessage>
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
                {errorEmail && (
                  <ErrorMessage>Please enter a valid email id, <span style={{color:"gray"}}>example (jon@doe.com)</span></ErrorMessage>
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
                {errorPhone && (
                  <ErrorMessage>Phone number only contain(0 - 9)Numbers & must be 10 digits</ErrorMessage>
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
                {errorPassword && (
                  <ErrorMessage> Password must contain atleast 1 uppercase 1 lowercase 1special char & 1 number</ErrorMessage>
                )}
              </FormInputWrapper>
{/* 
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
                {errorCPassword && (
                  <ErrorMessage>
                    {" "}
                   Password doesnt match
                  </ErrorMessage>
                )}
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
                <ErrorMessage> please enter contact person name</ErrorMessage>
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
                <ErrorMessage>
                  {" "}
                  please enter Contact Person Mobile no
                </ErrorMessage>
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
                <ErrorMessage> please enter Company Legal Name</ErrorMessage>
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
                <ErrorMessage> please enter Main Brand</ErrorMessage>
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
                <ErrorMessage> please enter Company CR number</ErrorMessage>
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
                <ErrorMessage>
                  {" "}
                  please enter Vat certificate number
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
                  <option value="Saudi Arabia"> SA </option>
                  <option value="India"> IND </option>
                  <option value="Srilanka"> SL </option>
                  <option value="China"> CHN </option>
                </FormSelect>

                <ErrorMessage> please select COUNTRY CODE</ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="iBan">IBAN CHECK Digits</FormLabel>
                <FormSelect
                  name="iBan"
                  id="iBan"
                  onChange={handleChange}
                  value={iBan}
                >
                  <option value="Saudi Arabia"> 01 </option>
                  <option value="India"> 02 </option>
                  <option value="Srilanka"> 03 </option>
                  <option value="China"> 04 </option>
                </FormSelect>
                <ErrorMessage> please Select IBAN CHECK Digits</ErrorMessage>
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
                <ErrorMessage> please enter bban number</ErrorMessage>
              </FormInputWrapper>

              <FormInputWrapper>
                <FormLabel htmlFor="sepa">SEPA Number</FormLabel>
                <FormSelect
                  name="sepa"
                  id="sepa"
                  onChange={handleChange}
                  value={sepa}
                >
                  <option value="Saudi Arabia"> 01 </option>
                  <option value="India"> 02 </option>
                  <option value="Srilanka"> 03 </option>
                  <option value="China"> 04 </option>
                </FormSelect>
                <ErrorMessage> please Select IBAN CHECK Digits</ErrorMessage>
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
                <ErrorMessage> please enter Company Name</ErrorMessage>
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
                <ErrorMessage>
                  {" "}
                  please enter Company Head quarter address
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
                <ErrorMessage> please Select country</ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="state">State</FormLabel>
                <FormSelect
                  name="state"
                  id="state"
                  onChange={handleChange}
                  value={state}
                >
                  <option value="Maharashtra"> Maharashtra </option>
                  <option value="Uttar Pradesh "> Uttar Pradesh </option>
                  <option value="Haryana"> Haryana </option>
                  <option value="Punjab"> Punjab </option>
                </FormSelect>
                <ErrorMessage> please Select state</ErrorMessage>
              </FormInputWrapper>

              <FormInputWrapper>
                <FormLabel htmlFor="pincode">Pincode</FormLabel>
                <FormSelect
                  name="pincode"
                  id="pincode"
                  onChange={handleChange}
                  value={pincode}
                >
                  <option value="440033"> 440033 </option>
                  <option value="440034"> 440034</option>
                  <option value="440035"> 440035</option>
                  <option value="440036">440036</option>
                </FormSelect>
                <ErrorMessage> please Select state</ErrorMessage>
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
                <ErrorMessage> please enter contact person name</ErrorMessage>
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
                <ErrorMessage>
                  {" "}
                  please enter Contact Person Mobile no
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
