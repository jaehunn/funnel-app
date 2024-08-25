import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

import theme from "../styles/theme";

const Layout = () => {
  return (
    <div
      css={css`
        // width to device
        max-width: 100%;

        // height to contents
        height: auto;
      `}
    >
      <div
        css={css`
          background: ${theme.colors.white};
        `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
