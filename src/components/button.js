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
        paddingTop: '.5em',
        paddingBottom: '.5em',
    },
    large: {
        paddingLeft: '4em',
        paddingRight: '4em',
        paddingTop: '1em',
        paddingBottom: '1em',
    },
};

export const ButtonBasic = styled.button`
    border-radius: 4px;
    font-weight: 500;
    display: inline-block;
    background-position: center;
    transition: background 0.8s;

    :hover {
        text-decoration: none;
    }

    :active {
        transition: background 0s;
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
    active: {
        activeBackgroundColor: colors.primaryLight,
        activeTextColor: colors.light,
    }
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

    active: {
        activeBackgroundColor: colors.secondaryLight,
        activeTextColor: colors.light,
    }
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
 * @param activeBackgroundColor
 * @param activeTextColor
 * @returns {string}
 */
function filledButtonCreator({
    backgroundColor,
    textColor,
    boxShadow,
    hover: { hoverBackgroundColor, hoverTextColor },
    active: { activeBackgroundColor, activeTextColor },
}) {
    return `
        background-color: ${backgroundColor};
        box-shadow: ${boxShadow};
        color: ${textColor};
    
        :hover {
            color: ${hoverTextColor};
            background: ${hoverBackgroundColor} radial-gradient(circle, transparent 1%, ${hoverBackgroundColor} 1%) center/15000%;
        }
        
        :active {
            background-color: ${activeBackgroundColor};
            color: ${activeTextColor};
            background-size: 100%;
        }`;
}
