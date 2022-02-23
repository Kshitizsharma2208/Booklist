import React from "react";
import "./reliance.scss";
import home from "../../../src/images/homeNew.jpg";
import leftArrow from "../../../src/images/arrows.jpg";
import subLogo from "../.././../src/images/subsidary.jpg";
import right from "../.././../src/images/circleRight.jpg";
import updown from "../.././../src/images/up and down.jpg";
import lock from "../.././../src/images/lock.jpg";
import toogle from "../.././../src/images/collapse.jpg";
import handShake from "../.././../src/images/handShake.jpg";
import Associate from "../.././../src/images/associate.jpg";
import profile from "../.././../src/images/profile.jpg";

const configData = {
  config: {
    IDField: "RowId",
    LocalHandled: true,
    ListDisplayType: "HIERARCHY-ASSOCIATE",
    Fields: [
      {
        Key: "F784",
        Title: "As On Date",
        DataType: "string",
      },
      {
        Key: "F782",
        Title: "Company Name",
        DataType: "string",
      },
      {
        Key: "F783",
        Title: "Entity Category",
        DataType: "string",
      },
      {
        Key: "F768",
        Title: "Entity Name",
        DataType: "string",
      },
    ],
    Hierarchy: {
      GroupField: "F783",
      Style: "Associate",
      RootField: "F782",
    },
  },
  root: {
    Text: "HUBTOWN LIMITED",
  },
  data: [
    {
      groupByVal: "Subsiduary",
      groupByID: "F783",
      values: {
        F768: null,
        F782: null,
        F783: "Subsiduary",
        F784: null,
      },
      leafRows: [
        {
          RowIndex: 0,
          F784: "31/03/2021",
          F782: "HUBTOWN LIMITED",
          F783: "Subsiduary",
          F768: "CITYWOOD BUILDERS PRIVATE LIMITED",
          RowId: 0,
          DisableRow: false,
        },
        {
          RowIndex: 1,
          F784: "31/03/2021",
          F782: "HUBTOWN LIMITED",
          F783: "Subsiduary",
          F768: "DIVINITI PROJECTS PRIVATE LIMITED",
          RowId: 1,
          DisableRow: false,
        },
        {
          RowIndex: 2,
          F784: "31/03/2021",
          F782: "HUBTOWN LIMITED",
          F783: "Subsiduary",
          F768: "VAMA HOUSING LIMITED",
          RowId: 2,
          DisableRow: false,
        },
      ],
    },
    {
      groupByVal: "Associate" ,
      groupByID: "F783",
      values: {
        F768: null,
        F782: null,
        F783: "Associate",
        F784: null,
      },
      leafRows: [
        {
          RowIndex: 15,
          F784: "31/03/2021",
          F782: "HUBTOWN LIMITED",
          F783: "Associate",
          F768: "HUBTOWN BUS TERMINAL (AHMEDABAD) PRIVATE LIMITED",
          RowId: 15,
          DisableRow: false,
        },
        {
          RowIndex: 16,
          F784: "31/03/2021",
          F782: "HUBTOWN LIMITED",
          F783: "Associate",
          F768: "HUBTOWN BUS TERMINAL (MEHSANA) PRIVATE LIMITED",
          RowId: 16,
          DisableRow: false,
        },
        {
          RowIndex: 17,
          F784: "31/03/2021",
          F782: "HUBTOWN LIMITED",
          F783: "Associate",
          F768: "SUNSTREAM CITY PRIVATE LIMITED",
          RowId: 17,
          DisableRow: false,
        },
        {
          RowIndex: 18,
          F784: "31/03/2021",
          F782: "HUBTOWN LIMITED",
          F783: "Associate",
          F768: "RARE TOWNSHIPS PRIVATE LIMITED",
          RowId: 18,
          DisableRow: false,
        },
        {
          RowIndex: 19,
          F784: "31/03/2021",
          F782: "HUBTOWN LIMITED",
          F783: "Associate",
          F768: "JOYOUS HOUSING LIMITED",
          RowId: 19,
          DisableRow: false,
        },
        {
          RowIndex: 20,
          F784: "31/03/2021",
          F782: "HUBTOWN LIMITED",
          F783: "Associate",
          F768: "GIRAFFE DEVELOPERS PRIVATE LIMITED",
          RowId: 20,
          DisableRow: false,
        },
      ],
    },
  ],
};
const Reliance = () => {
  return (
    <div className="Container">
      <div className="header">
        <div className="logo">
          <img src={home} alt="" className="home" />
        </div>
        <div className="logoText">
          <p className="text">Reliance Industries Limited</p>
        </div>
      </div>
      <div className="Landing">
        <div className="graphContent">
          <div className="left-btn">
            <button className="btn-btn">
              <img className="left-arrow" src={leftArrow} alt="" />
              Expand
            </button>
          </div>
          <div className="graph">
            <div className="outer">
              <div className="inner"></div>
            </div>
            <div className="hr-theme-slash-2">
              <div className="hr-line"></div>
            </div>
          </div>
          <div className="left-btn right">
            <button className="btn-btn">
              <img className="left-arrow" src={right} alt="" />
              Expand
            </button>
          </div>
        </div>
        <div className="section">
          {configData.data.map((item) => {
            return (
              <div className="firstRow">
                <div className="outerBottom ">
                  <div className="innerBottom first "></div>
                </div>
                <div className="box">
                  <div className="sublogo">
                    <div className="subLogo">
                     <img src={subLogo} alt="" className="subSymbol" />
                    </div>
                  </div>
                  <div className="subHeading">
                    <p className="head">{item.groupByVal} </p>
                  </div>
                  {item.leafRows.map((subSection) =>{
                    return (
                      <div className="subSection">
                      <div className="sectionInner">
                        <div className="sectionImg">
                          <img src={lock} alt="" className="lock" />
                        </div>
                        <div className="sectionContent">
                          <p className="content">{subSection.F782} </p>
                        </div>
                        <div className="toogle">
                          <img src={toogle} alt="" className="toogleDown" />
                        </div>
                      </div>
                      <div className="detail">
                        <p className="toogleDetails">{subSection.F784} </p>
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Reliance;
