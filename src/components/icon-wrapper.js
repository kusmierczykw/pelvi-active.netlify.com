import styled from "styled-components";
import colors from "./utils/colors";

const IconWrapper = styled.span`
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
    margin-right: 16px;
    border-radius: 2px;
    flex: 0 0 auto;
`;

export default IconWrapper;