import React from "react";

import { CustomButtonContainer } from "./customButtonstyles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
