import React from "react";
import ReactDom from "react-dom";
import { ColorRing } from "react-loader-spinner";

interface PropsType {
  showLoadingModal: boolean;
}

const Loading: React.FC<PropsType> = ({ showLoadingModal }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 grid place-items-center bg-[#f3f6f4]/70">
      <ColorRing
        colors={["#2478f0", "#2478f0", "#2478f0", "#2478f0", "#2478f0"]}
      />
    </div>
  );
};

const LoadingModal: React.FC<PropsType> = ({ showLoadingModal }) => {
  const portalElement = document.getElementById("portal");

  if (!showLoadingModal || !portalElement) return null;

  return ReactDom.createPortal(
    <Loading showLoadingModal={showLoadingModal} />,
    portalElement
  );
};

export default LoadingModal;
