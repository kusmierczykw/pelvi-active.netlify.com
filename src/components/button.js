import styled from 'styled-components';
import colors from './utils/colors';

/**
 * Button size definition
 */
const ButtonSizes = {
    small: {
        paddingLeft: '1em',
        paddingRight: '1em',
        paddingTop: '.5em',
        paddingBottom: '.5em',
    },
    normal: {
        paddingLeft: '2em',
        paddingRight: '2em',
        paddingTop: '.75em',
        paddingBottom: '.75em',
    },
    large: {
        paddingLeft: '4em',
        paddingRight: '4em',
        paddingTop: '1.2em',
        paddingBottom: '1.2em',
    },
};

export const ButtonBasic = styled.button`
    border-radius: 4px;
    font-weight: 500;
    transition: background-color .2s ease-in;

    :hover {
        text-decoration: none;
    }
`;

export const Button = styled(ButtonBasic)`
    padding-top: ${ButtonSizes.normal.paddingTop};
    padding-bottom: ${ButtonSizes.normal.paddingBottom};
    padding-left: ${ButtonSizes.normal.paddingLeft};
    padding-right: ${ButtonSizes.normal.paddingRight};
`;

export const ButtonSmall = styled(ButtonBasic)`
    padding-top: ${ButtonSizes.small.paddingTop};
    padding-bottom: ${ButtonSizes.small.paddingBottom};
    padding-left: ${ButtonSizes.small.paddingLeft};
    padding-right: ${ButtonSizes.small.paddingRight};
`;

export const ButtonLarge = styled(ButtonBasic)`
    padding-top: ${ButtonSizes.large.paddingTop};
    padding-bottom: ${ButtonSizes.large.paddingBottom};
    padding-left: ${ButtonSizes.large.paddingLeft};
    padding-right: ${ButtonSizes.large.paddingRight};
`;

/**
 * ---------------------------------------------------------------
 * Primary Button
 * ---------------------------------------------------------------
 */
const ButtonPrimaryDefinition = {
    backgroundColor: colors.primary,
    textColor: colors.light,
    boxShadow: `0 4px 8px -8px ${colors.dark}`,
    hover: {
        hoverBackgroundColor: colors.primary,
        hoverTextColor: colors.light,
    },
};

export const ButtonPrimary = styled(Button)`
    ${filledButtonCreator(ButtonPrimaryDefinition)}
`;

export const ButtonPrimarySmall = styled(ButtonSmall)`
    ${filledButtonCreator(ButtonPrimaryDefinition)}
`;

export const ButtonPrimaryLarge = styled(ButtonLarge)`
    ${filledButtonCreator(ButtonPrimaryDefinition)}
`;

/**
 * ---------------------------------------------------------------
 * Secondary Button
 * ---------------------------------------------------------------
 */
const ButtonSecondaryDefinition = {
    backgroundColor: colors.secondary,
    textColor: colors.light,
    boxShadow: `0 4px 8px -8px ${colors.dark}`,
    hover: {
        hoverBackgroundColor: colors.secondary,
        hoverTextColor: colors.light,
    },
};

export const ButtonSecondary = styled(Button)`
    ${filledButtonCreator(ButtonSecondaryDefinition)}
`;

export const ButtonSecondarySmall = styled(ButtonSmall)`
    ${filledButtonCreator(ButtonSecondaryDefinition)}
`;

export const ButtonSecondaryLarge = styled(ButtonLarge)`
    ${filledButtonCreator(ButtonSecondaryDefinition)}
`;

/**
 *  Method which can be created filled button
 * @param backgroundColor
 * @param textColor
 * @param boxShadow
 * @param hoverBackgroundColor
 * @param hoverTextColor
 * @returns {string}
 */
function filledButtonCreator({
    backgroundColor,
    textColor,
    boxShadow,
    hover: { hoverBackgroundColor, hoverTextColor },
}) {
    return `
        background-color: ${backgroundColor};
        box-shadow: ${boxShadow};
        color: ${textColor};
    
        :hover {
            background-color: ${hoverBackgroundColor};
            color: ${hoverTextColor};
        }`;
}
