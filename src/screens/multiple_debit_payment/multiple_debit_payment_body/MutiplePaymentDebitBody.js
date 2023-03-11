import React, { useState, useEffect } from "react";
import ButtonComponent from "../../../components/button/ButtonComponent";
import InputField from "../../../components/fields/InputField";
import ListOfValue from "../../../components/fields/ListOfValue";
import TextAreaField from "../../../components/fields/TextAreaField";
import "./MutiplePaymentDebitBody.css";
import DataTable from "./../../../components/data-table/DataTable";
import axios from "axios";
// import { FormControlUnstyled } from "@mui/base";
// import ButtonType from "../../../components/button/ButtonType";
import Swal from "sweetalert2";

function MutilplePaymentDebitBody() {
  const [accountNumber, setAccountNumber] = useState("");
  // const [accountDetails, setAccountDetails] = useState({});
  const [accountDetailsObj, setAccountDetailsObj] = useState("");
  const [transTypeDescription, setTransTypeDescription] = useState("")
  const [currency, setCurrency] = useState("")
  const [date,setDate]= useState("")

let getTransType;
let getCurrency;
// let getAccountDetails;


  useEffect(() => {
    function getTransactionType() {
      return axios.get("http://localhost:7500/get_trans_type");
    }
  function getCurrency() {
    return axios.get("http://localhost:7500/get_currency");
  }
  // function getAccountDetails() {
  //   return axios.post("http://localhost:7500/get_account_details", {
  //     // creditAccount : `${creditAccount}`
  //     accountNumber: "004001100249760118",
  //     // accountNumber: accountNumber,
  //   });


  // }


  Promise.all([getTransactionType(), getCurrency()]).then(
    (res) => {
      // console.log(res,"results is here");
      localStorage.setItem("getTansType", JSON.stringify(res[0].data));
      localStorage.setItem("getCurrency", JSON.stringify(res[1].data));
      // localStorage.setItem("getAccountDetails", JSON.stringify(res[2].data));

      // setAccountDetails(res[2].data[0]);
    }
    );
  }, []);
  



getTransType = JSON.parse(localStorage.getItem("getTansType"));
getCurrency = JSON.parse(localStorage.getItem("getCurrency"));
// getAccountDetails = JSON.parse(localStorage.getItem("getAccountDetails"));
  

//GETTING THE DATA IN THE LOV FIELD
const transTypeArray = [];
const currencyArray = [];

function showTransType() {
  getTransType.map((i) => {
    transTypeArray.push({
      // value: i.actual_code,
      value:i.description,
      label: `${i.actual_code} - ${i.description}`,
      
    });
    return transTypeArray;
  });
  }

showTransType();

function showCurrency() {
  getCurrency.map((i) => {
    currencyArray.push({
      value: i.actual_code,
      label: `${i.actual_code} - ${i.description}`,
    });
    return currencyArray;
  });

}
showCurrency();

  
  
  // function Date() {
    const dates = new Date();
    const month = dates.getMonth() + 1; // getMonth() returns a zero-indexed value, so add 1 to get the actual month number
    const day = dates.getDate();
    const year = dates.getFullYear();
    const hours = dates.getHours();
    const minutes = dates.getMinutes();
    const seconds = dates.getSeconds();
     const ampm = hours >= 12 ? "PM" : "AM";
    const formattedDate = `${month}/${day}/${year} ${
      hours % 12
      }:${minutes}:${seconds} ${ampm}`; 
    console.log(formattedDate)
    // return formattedDate;
     

   function Hubert(value) {
     setTransTypeDescription(value)
     
    }
  console.log(transTypeDescription)
  
   function Ivan(value) {
     setCurrency(value);
     setDate(formattedDate)
    //  Date();
   }
   console.log(currency,"curr");
  


  const handleChange = (e) => {
    console.log(e.target.value);
    setAccountNumber(e.target.value);
  };

 
  // accountDetailsObj;
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      axios
        .post(
          "http://localhost:7500/get_account_details",
          //  accountNumber
          // 004001100249760118
          // 004005110526590109
          // 004009110949770160

          {
            accountNumber: accountNumber,
          }
        )
        .then((res) => {
          console.log(res);
          if (accountNumber === "") {
            Swal.fire({
              icon: "warning",
              title: "Ooops...",
              text: "You have not entered any account number. Please check and enter an acccount number!",
            
              // footer: '<a href="">Why do I have this issue?</a>',
            });
            // alert("empty");
          } else if (res.data.length !== 0) {
            setAccountDetailsObj(res.data[0]);
            // setAccountDetailsObj(" ")      
          } else {
            // alert("Error");
            Swal.fire({
              icon: "error",
              title: "Sorry...",
              text: "The account number you entered is invalid!",
             
              // footer: '<a href="">Why do I have this issue?</a>',
            });
            
          }
          // else{
          // alert("invalid")
          // }
        })
        .catch((err) => {
          console.log(err);
        });
      // setAvBal("Hello");
    }
  };
  // console.log(accountDetailsObj, "total account")

  return (
    <div className="mutiple_payment_debit_body" style={{ display: "flex" }}>
      <div
        className="left_div_nothing"
        style={{ flex: 0.0125, backgroundColor: "" }}
      ></div>

      {/* body in the center */}

      <div
        className="middle_div_container"
        style={{
          flex: 0.975,
          backgroundColor: "",
        }}
      >
        {/* container with terminal ID, branch and the others */}
        <div
          className="container_with_terminal_ID_and_others"
          style={{
            display: "flex",
            // flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "20px",
            backgroundColor: "",
          }}
        >
          {/* labelWidth={"32%"} inputWidth={"68%"} */}
          <InputField
            label={"Terminal ID"}
            labelWidth={"40%"}
            inputWidth={"60%"}
            type={"text"}
            disabled={"disabled"}
          />
          {/* labelWidth={"25%"} inputWidth={"75%"}  */}
          <InputField
            label={"User ID"}
            labelWidth={"40%"}
            inputWidth={"60%"}
            type={"text"}
            disabled={"disabled"}
          />
          {/* labelWidth={"36%"} inputWidth={"64%"}  */}
          <InputField
            label={"Trans Branch"}
            labelWidth={"40%"}
            inputWidth={"60%"}
            type={"number"}
            disabled={"disabled"}
          />
          {/* labelWidth={"40%"} inputWidth={"60%"} */}
          <InputField
            label={"Select Batch No"}
            labelWidth={"40%"}
            inputWidth={"60%"}
            type={"text"}
            buttonType={"button"}
            disabled={"disabled"}

            // handleLov={handleLov}
            // lov={lov}
          />
        </div>

        {/* First Card  */}
        <div className="outer_div" style={{ padding: " 0px 15px" }}>
          <form
            className="form_div"
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "",
              marginTop: "20px",
            }}
          >
            <div
              className="left_card_div"
              style={{
                display: "flex",
                flex: 0.7,
                paddingTop: "10px",
                backgroundColor: "",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* left column div */}
              <div
                className="left_column_div"
                style={{
                  flex: 0.95,
                  backgroundColor: "",
                  paddingLeft: "",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* select currency div */}
                <div>
                  <ListOfValue
                    label={"Select Currency"}
                    labelWidth={"15%"}
                    inputWidth={"40%"}
                    buttonType={"button"}
                    lovData={currencyArray}
                    required={true}
                    id={"currencyID"}
                    onChange={Ivan}
                    value={currency}
                  />
                </div>

                {/* transtype div */}
                <div>
                  <ListOfValue
                    label={"Trans Type"}
                    labelWidth={"15%"}
                    inputWidth={"40%"}
                    buttonType={"button"}
                    required={true}
                    content={"yes"}
                    name={"transTypes"}
                    lovData={transTypeArray}
                    onChange={Hubert}
                    id={"transTypeID"}
                    value={transTypeDescription}
                  />
                </div>

                {/* Effective date and Doc Ref */}
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                  }}
                  className="effective_date_and_doc_ref_div"
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 0.45,
                      backgroundColor: "",
                    }}
                    className="effective_date_div"
                  >
                    <div style={{ flex: 1, alignItems: "center" }}>
                      <InputField
                        label={"Effective Date"}
                        labelWidth={"33.5%"}
                        inputWidth={"50%"}
                        // type={"date"}
                        disabled={true}
                        value={date}
                      />
                    </div>
                  </div>

                  {/* empty div for space */}
                  <div
                    style={{ flex: 0.1, backgroundColor: "" }}
                    className="dummy_div"
                  >
                    {" "}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flex: 0.45,
                      backgroundColor: "",
                    }}
                    className="doc_ref_div"
                  >
                    <div
                      style={{
                        flex: 1,
                        alignItems: "center",
                        paddingLeft: "30px",
                      }}
                      className="doc_ref_inner_div"
                    >
                      <InputField
                        label={"Doc Ref"}
                        labelWidth={"25%"}
                        inputWidth={"50%"}
                        // type={"date"}
                        disabled={true}
                      />
                    </div>
                  </div>
                </div>

                {/* beneficiary BBAN div */}
                <div>
                  <InputField
                    label={"Benerficiary BBAN"}
                    labelWidth={"15%"}
                    inputWidth={"40%"}
                    buttonType={"button"}
                    onKeyDown={handleKeyDown}
                    name={"beneficiary"}
                    onChange={handleChange}
                    value={accountNumber}
                  />
                </div>

                {/* beneficiary narration */}
                <div>
                  <TextAreaField
                    label={"Beneficiary Narration"}
                    labelWidth={"15%"}
                    inputWidth={"74.5%"}
                    type={"text"}
                  />
                </div>
              </div>

              {/* right column div */}
              {/* <div style={{ flex: 0.45, backgroundColor: "red" }}> */}

              {/* </div> */}
            </div>

            {/* dummy__control_div_middle */}
            <div style={{ display: "flex", flex: 0.01 }}></div>

            {/* right card div */}

            <div
              className="right_card_div"
              style={{
                display: "flex",
                justifyContent: "center",
                flex: 0.29,
                paddingTop: "20px",
                backgroundColor: "#FAF9F6",
              }}
            >
              <div
                style={{ flex: 0.9, alignItems: "center", backgroundColor: "" }}
                className="right_card_inner_div"
              >
                <InputField
                  label={"Available balance"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                  value={accountDetailsObj["AV_BAL"]}
                  textAlign={"right"}
                  paddingRight={"3px"}
                />
                <InputField
                  label={"Ledger balance"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                  value={accountDetailsObj["BOOKBAL"]}
                  textAlign={"right"}
                  paddingRight={"3px"}
                />
                <InputField
                  label={"Outstanding Debt"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  labelColor={"red"}
                  disabled={true}
                  // value={accountDetailsObj["OD_LIM"]}
                  value={
                    accountDetailsObj["OD_LIM"] === null
                      ? 0
                      : accountDetailsObj["OD_LIM"]
                  }
                  textAlign={"right"}
                  paddingRight={"3px"}
                />
                <InputField
                  label={"Acct Src Branch"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                  value={accountDetailsObj["BRDESC"]}
                  textAlign={"right"}
                  paddingRight={"3px"}
                />
                <InputField
                  label={"Acct Status"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                  value={accountDetailsObj["STATUS_INDICATOR"]}
                  textAlign={"right"}
                  paddingRight={"3px"}
                />
              </div>
            </div>
          </form>
        </div>
        {/* End of First Card */}

        {/* First Card  */}
        <div className="outer_div" style={{ padding: " 0px 15px" }}>
          <form
            className="form_div"
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "",
              marginTop: "20px",
            }}
          >
            <div
              className="left_card_div"
              style={{
                display: "flex",
                flex: 0.7,
                paddingTop: "10px",
                backgroundColor: "",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* left column div */}
              <div
                className="left_column_div"
                style={{
                  flex: 0.95,
                  backgroundColor: "",
                  paddingLeft: "",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Ordering BBAN div */}
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: "",

                    // justifyContent: "space-between",
                  }}
                  className="ordering_bban_div"
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 0.48,
                      backgroundColor: "",
                    }}
                    className="ordering_bban_sub_div"
                  >
                    <div
                      style={{
                        flex: 1,
                        alignItems: "center",
                        // paddingLeft: "30px",
                      }}
                    >
                      <InputField
                        label={"Ordering BBAN"}
                        labelWidth={"33.5%"}
                        inputWidth={"73%"}
                        type={"text"}
                        disabled={false}
                        marginLeftButton={"1.5px"}
                      />
                    </div>
                  </div>

                  {/* empty div for space */}
                  <div style={{ flex: 0.005 }} className="dummy_div"></div>

                  <div
                    style={{
                      display: "flex",
                      flex: 0.42,
                      backgroundColor: "",
                    }}
                    className="ordering_bban_disabled_field_inner_div"
                  >
                    <div
                      style={{
                        flex: 1,
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                      className="ordering_bban_disabled_field"
                    >
                      <InputField inputWidth={"97.5%"} disabled={true} />
                    </div>
                  </div>
                </div>

                {/* Amount and Trans Type */}
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center",

                    // justifyContent: "space-between",
                  }}
                  className="amount_and_trans_type_div"
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 0.45,
                      backgroundColor: "",
                    }}
                    className="amount_div"
                  >
                    <div style={{ flex: 1, alignItems: "center" }}>
                      <InputField
                        label={"Amount"}
                        labelWidth={"33.5%"}
                        inputWidth={"50%"}
                        type={"text"}
                        disabled={false}
                      />
                    </div>
                  </div>

                  {/* empty div for space */}
                  <div style={{ flex: 0.1 }} className="dummy_div"></div>

                  <div
                    style={{
                      display: "flex",
                      flex: 0.45,
                      backgroundColor: "",
                    }}
                    className="trans_type_div"
                  >
                    <div
                      style={{
                        flex: 1,
                        alignItems: "center",
                        paddingLeft: "30px",
                      }}
                      className="trans_type_inner_div"
                    >
                      <InputField
                        label={"Trans Type"}
                        labelWidth={"25%"}
                        inputWidth={"50%"}
                        type={"text"}
                        disabled={false}
                      />
                    </div>
                  </div>
                </div>

                {/* Doc/Token Ref,View Document and Sign Ver div */}
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center !important",
                    backgroundColor: "",

                    // justifyContent: "space-between",
                  }}
                  className="doc_token_ref_and_viewdoc_signver_div"
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 0.48,
                      backgroundColor: "",
                    }}
                    className="doc_token_ref_and_viewdoc_div"
                  >
                    <div
                      style={{
                        flex: 0.8,
                        alignItems: "center",
                        // paddingLeft: "30px",
                      }}
                    >
                      <InputField
                        label={"Doc/token Ref"}
                        labelWidth={"39.5%"}
                        inputWidth={"59%"}
                        type={"text"}
                        disabled={false}
                        marginLeftButton={"1.5px"}
                      />
                    </div>
                    <div
                      style={{
                        flex: 0.2,
                        paddingLeft: "5px",
                        alignItems: "center",
                      }}
                      className="viewdoc_div"
                    >
                      <ButtonComponent
                        type={"button"}
                        text={"View Doc"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        textColor={"white"}
                        buttonWidth={"100%"}
                      />
                    </div>
                  </div>

                  {/* empty div for space */}
                  <div style={{ flex: 0.005 }} className="dummy_div"></div>

                  <div
                    style={{
                      display: "flex",
                      flex: 0.42,
                      backgroundColor: "",
                    }}
                    className="signver_div"
                  >
                    <div
                      style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        paddingLeft: "100px",
                        // paddingRight: "10px",
                        backgroundColor: "",
                      }}
                      className="signver_inner_div"
                    >
                      <ButtonComponent
                        type={"button"}
                        text={"Sign..Ver"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        textColor={"white"}
                        buttonWidth={"40%"}
                      />
                    </div>
                  </div>
                </div>

                {/* Value Date div */}
                <div>
                  <InputField
                    label={"Value Date"}
                    labelWidth={"15%"}
                    inputWidth={"22.5%"}
                  />
                </div>

                {/*  narration 1 */}
                <div>
                  <TextAreaField
                    label={"Narration 1"}
                    labelWidth={"15%"}
                    inputWidth={"74.5%"}
                    type={"text"}
                    content={transTypeDescription}
                    fontWeight={"bold"}
                  />
                </div>

                {/*  narration 2 */}
                <div>
                  <TextAreaField
                    label={"Narration 2"}
                    labelWidth={"15%"}
                    inputWidth={"74.5%"}
                    type={"text"}
                  />
                </div>
              </div>
            </div>

            {/* dummy__control_div_middle */}
            <div style={{ display: "flex", flex: 0.01 }}></div>

            {/* right card div */}

            <div
              className="right_card_div"
              style={{
                display: "flex",
                justifyContent: "center",
                flex: 0.29,
                paddingTop: "20px",
                backgroundColor: "#FAF9F6",
              }}
            >
              <div
                style={{ flex: 0.9, alignItems: "center" }}
                className="right_card_inner_div"
              >
                <InputField
                  label={"Available balance"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                  // value={dat}
                />
                <InputField
                  label={"Ledger balance"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
                <InputField
                  label={"Outstanding Debt"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  labelColor={"red"}
                  disabled={true}
                />
                <InputField
                  label={"Acct Src Branch"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
                <InputField
                  label={"Acct Status"}
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
          </form>
        </div>
        {/* End of Second Card */}

        {/* buttons: save, amendment and the others */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "25px",
          }}
          className="three_buttons"
        >
          <ButtonComponent
            text={"Insert"}
            buttonBackgroundColor={"rgb(21 163 183)"}
            textColor={"white"}
          />
          <ButtonComponent
            text={"Removal All"}
            buttonBackgroundColor={"rgb(21 163 183)"}
            textColor={"white"}
          />
          <ButtonComponent
            text={"Save Amendment"}
            buttonBackgroundColor={"rgb(21 163 183)"}
            textColor={"white"}
          />
        </div>

        {/* DataTable */}
        <div
          className="datatable_div"
          style={{ margin: "40px 15px" }}
          //  padding: "10px 0px"
        >
          <DataTable title={"Mutiple Payment Debit"} />
        </div>
      </div>
      <div
        className="right_div_nothing"
        style={{ flex: 0.0125, backgroundColor: "" }}
      >
        {/* you are here */}
      </div>
    </div>
  );
}

export default MutilplePaymentDebitBody;
