import styled from 'styled-components';

// is inline ? - 是否为行内
// default: false; 默认：否
const isBlock = (props) => {
  return Object.prototype.hasOwnProperty.call(props, 'inline') ? props.inline : false;
};

const getInlineStyle = (props) => {
  const rule = `
    margin-left: ${props.theme.scpx(-10)};
    margin-right: ${props.theme.scpx(-10)};
    li {
      display: inline-block;
      padding: ${props.theme.scpx(10)};
    }
  `;

  return rule;
};

const getDefaultStyle = (props) => {
  const rule = `
    li {
      &:not(:first-child) {
        margin-top: ${props.theme.scpx(10)};
      }
    }
  `;

  return rule;
};

export const StyledList = styled.ul`
  padding: ${props => props.theme.scpx(10)} ${props => props.theme.scpx(20)};
  ${props => isBlock(props) ? getInlineStyle(props) : getDefaultStyle(props)}
`;

export const StyledItem = styled.li`
  /* ${props => isBlock(props) ? getInlineStyle(props) : getDefaultStyle(props)} */
`;

export default StyledList;
