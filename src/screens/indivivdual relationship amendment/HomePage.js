import React from "react";
import ButtonType from "../../components/button/ButtonType";
import DataTable from "../../components/data-table/DataTable";
import InputField from "../../components/fields/InputField";
import HeaderComponent from "../../components/header/HeaderComponent";
import Label from "../../components/label/Label";

function HomePage() {
  return (
    <div style={{ background: "" }}>
      {/* DATA TABLE */}
      <div>
        <DataTable />
      </div>
      {/* BODY */}
      <div
        className="home_page_container"
        style={{ marginTop: "20px", padding: "3px" }}
      >
        {/* header */}
        <div>
          <HeaderComponent title={"Relation Details"} />
        </div>
        {/* main details */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "",
          }}
        >
          <div style={{ flex: 0.05 }}>{/* hey */}</div>
          {/* full container */}
          <div style={{ flex: 0.9, backgroundColor: "" }}>
            {/* First Name and MiddleName div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"First Name"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Middle Name"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Surname and Alias Name div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                }}
              >
                <InputField
                  label={"Surname"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space  */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Alias Name"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Gender  and Title div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Gender"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Title"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Mobile Number  and Surfix div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Mobile No"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Surfix"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Place of Birth  and Date of Birth div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Place of Birth"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Date of Birth"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
            {/* Email Address  and Residential  Status div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Email Address"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475, backgroundColor: "" }}>
                {/* container with labels and heckboxes  */}
                <div style={{ display: "flex" }}>
                  <Label
                    label={" Residential  Status"}
                    labelWidth={"30%"}
                    fontSize={"85%"}
                  />
                  <ButtonType
                    type={"radio"}
                    label={"Resident"}
                    name={"radio"}
                  />
                  <ButtonType
                    type={"radio"}
                    label={"Non-Resident"}
                    marginLeft={"30px"}
                    name={"radio"}
                  />
                </div>
              </div>
            </div>
            {/* Domicile Country,National ID  and ID Expiry Date div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Domicile Country"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div
                style={{
                  display: "flex",
                  flex: 0.475,
                  backgroundColor: "",
                }}
              >
                {/* National ID No and ID Expiry Date */}
                <div style={{ width: "30%", backgroundColor: "" }}>
                  <Label label={"National ID No."} labelWidth={"100%"} />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "60%",
                    backgroundColor: "",
                  }}
                >
                  <div>
                    <InputField
                      inputWidth={"90%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                  <div>
                    <InputField
                      label={"ID Expiry Date"}
                      labelWidth={"43%"}
                      inputWidth={"57%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Country of Residence and ID Type div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Country Of Residence"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"ID Type "}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Nationality, ID Number and ID Expiry Date div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Nationality"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div
                style={{
                  display: "flex",
                  flex: 0.475,
                  backgroundColor: "",
                }}
              >
                {/*  ID Number and ID Expiry Date */}
                <div style={{ width: "30%", backgroundColor: "" }}>
                  <Label label={"ID Number"} labelWidth={"100%"} />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "60%",
                    backgroundColor: "",
                  }}
                >
                  <div>
                    <InputField
                      inputWidth={"90%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                  <div>
                    <InputField
                      label={"ID Expiry Date"}
                      labelWidth={"43%"}
                      inputWidth={"57%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Cosolidated Statement  and ID Number div/ */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                {/* container with labels and checkboxes  */}
                <div style={{ display: "flex" }}>
                  <Label
                    label={"Cosolidated Statement"}
                    labelWidth={"30%"}
                    fontSize={"85%"}
                  />
                  <ButtonType type={"radio"} label={"Yes"} name={"radio"} />
                  <ButtonType
                    type={"radio"}
                    label={"No"}
                    marginLeft={"30px"}
                    name={"radio"}
                  />
                </div>
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div
                style={{
                  display: "flex",
                  flex: 0.475,
                  backgroundColor: "",
                }}
              >
                {/*  ID Issue Date and ID Issued At */}
                <div style={{ width: "30%", backgroundColor: "" }}>
                  <Label label={"ID Issue Date"} labelWidth={"100%"} />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "60%",
                    backgroundColor: "",
                  }}
                >
                  <div>
                    <InputField
                      inputWidth={"87%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                  <div>
                    <InputField
                      label={"ID Issued At "}
                      labelWidth={"42%"}
                      inputWidth={"58%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Staff Category,ID Issued Authority and Tax No div*/}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Staff Category"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>

              <div
                style={{
                  display: "flex",
                  flex: 0.475,
                  backgroundColor: "",
                }}
              >
                {/* ID Issued Authority and Tax No div */}
                <div style={{ width: "30%", backgroundColor: "" }}>
                  <Label label={"ID Issued Authority"} labelWidth={"100%"} />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "60%",
                    backgroundColor: "",
                  }}
                >
                  <div>
                    <InputField
                      inputWidth={"81%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                  <div>
                    <InputField
                      label={"Tax No."}
                      labelWidth={"39%"}
                      inputWidth={"61%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Constitutional Code, Next Of King and No of Cars div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Constitutional Code"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>

              <div
                style={{
                  display: "flex",
                  flex: 0.475,
                  backgroundColor: "",
                }}
              >
                {/* Next Of King and No of Cars div */}
                <div style={{ width: "30%", backgroundColor: "" }}>
                  <Label label={"Next Of Kin"} labelWidth={"100%"} />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "60%",
                    backgroundColor: "",
                  }}
                >
                  <div>
                    <InputField
                      inputWidth={"84.5%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                  <div>
                    <InputField
                      label={"No of Cars"}
                      labelWidth={"41%"}
                      inputWidth={"59%"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Residential Address and Next Of Kin Address div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Residential Address"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Next Of Kin Address"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Marital Status and Next Of Kin Phon div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Marital Status"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Next Of Kin Phone"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Mother's First Name  and Mother's Middle Name div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Mother's First Name"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Mother's Middle Name"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Mother's Maiden Surname  and No Of Descendats div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Mother's Maiden Surname"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"No Of Descendants"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Qualification  and Prefered ATM Language div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Qualification"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Prefered ATM Language"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>

            {/* Work Type and Prefered Phone Language div */}
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "",
                jusitfyContent: "center",
              }}
            >
              <div
                style={{
                  flex: 0.475,
                  jusitfyContent: "center",
                  backgroundColor: "",
                  alignItems: "center",
                }}
              >
                <InputField
                  label={"Work Type"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
              {/* space */}
              <div style={{ flex: 0.05, backgroundColor: "" }}></div>
              <div style={{ flex: 0.475 }}>
                <InputField
                  label={"Prefered Phone Language"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  type={"text"}
                  disabled={true}
                />
              </div>
            </div>
          </div>
          <div style={{ flex: 0.05 }}>{/* hey */}</div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default HomePage;
