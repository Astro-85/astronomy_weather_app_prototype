import React from "react";
import { Component } from "../../components/Component";
import { Toggle } from "../../components/Toggle";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <Toggle className="toggle-instance" state="off" />
        <div className="overlap">
          <div className="rectangle" />
          <img className="line" alt="Line" src="/img/line-3.svg" />
          <img className="img" alt="Line" src="/img/line-3.svg" />
          <img className="line-2" alt="Line" src="/img/line-3.svg" />
          <img className="mask-group" alt="Mask group" src="/img/mask-group.png" />
          <img className="image" alt="Image" src="/img/image-1.png" />
          <img className="line-3" alt="Line" src="/img/line-11.svg" />
          <img className="line-4" alt="Line" src="/img/line-13.svg" />
          <img className="line-5" alt="Line" src="/img/line-13.svg" />
          <img className="cloud-icon" alt="Cloud icon" src="/img/cloud-icon-12863.png" />
          <img className="window-clipart" alt="Window clipart" src="/img/window-clipart-transparent-1.png" />
          <img className="eye-icon" alt="Eye icon" src="/img/eye-icon-1462.png" />
        </div>
        <img className="image-2" alt="Image" src="/img/image.png" />
        <div className="overlap-group">
          <div className="rectangle-2" />
          <img className="line-6" alt="Line" src="/img/line-6.svg" />
          <img className="line-7" alt="Line" src="/img/line-6.svg" />
          <img className="line-8" alt="Line" src="/img/line-6.svg" />
          <img className="line-9" alt="Line" src="/img/line-6.svg" />
          <img className="line-10" alt="Line" src="/img/line-6.svg" />
          <img className="line-11" alt="Line" src="/img/line-6.svg" />
          <img className="line-12" alt="Line" src="/img/line-6.svg" />
          <img className="cloud-icon-2" alt="Cloud icon" src="/img/cloud-icon-12865.png" />
          <div className="text-wrapper-2">5,000</div>
          <div className="text-wrapper-3">15,000</div>
          <div className="text-wrapper-4">20,000</div>
          <div className="text-wrapper-5">25,000</div>
          <div className="text-wrapper-6">30,000</div>
          <div className="text-wrapper-7">35,000</div>
          <div className="text-wrapper-8">Feet</div>
        </div>
        <div className="overlap-2">
          <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
          <div className="text-wrapper-9">15 MPH</div>
        </div>
        <img className="settings-icon" alt="Settings icon" src="/img/settings-icon-14950.png" />
        <div className="component-wrapper">
          <Component className="component-instance" />
        </div>
        <div className="h-l-d">H: 64°&nbsp;&nbsp;L: 51°&nbsp;&nbsp;D: 49°</div>
        <p className="new-york-bortle">
          <span className="span">
            New York
            <br />
          </span>
          <span className="text-wrapper-10">Bortle 9</span>
        </p>
      </div>
    </div>
  );
};
