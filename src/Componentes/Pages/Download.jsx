import React from "react";
import DownloadForm from "./DownloadForm";
import OpaqueImg from "../../assets/opaque.jpg";
import TransparentImg from "../../assets/transparent.jpg";
import FrostedImg from "../../assets/frosted.jpg";
import PrintedImg from "../../assets/printed.jpg";

const Download = () => {
  return (
    <div className="flex flex-col gap-4 p-8">
      <DownloadForm
        id="opaque"
        label="Opaque"
        bgImage={OpaqueImg}
        pdfFile="/opaque.pdf"
      />
      <DownloadForm
        id="transparent"
        label="Transparent"
        bgImage={TransparentImg}
        pdfFile="/transparent.pdf"
      />
      <DownloadForm
        id="frosted"
        label="Frosted"
        bgImage={FrostedImg}
        pdfFile="/frosted.pdf"
      />
      <DownloadForm
        id="printed"
        label="Printed"
        bgImage={PrintedImg}
        pdfFile="/printed.pdf"
      />
    </div>
  );
}
export default Download;