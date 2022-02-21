import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./Index";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    defaultValue,
    border,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          border={border}
          placeholder={placeholder}
          onChange={_onChange}
          defaultValue={defaultValue}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid height="auto">
        {label && <Text margin="0px">{label}</Text>}
        <ElInput
          type={type}
          border={border}
          placeholder={placeholder}
          onChange={_onChange}
          defaultValue={defaultValue}
        />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  _onChange: () => {},
  defaultValue: "",
  border: false,
};

const ElTextarea = styled.textarea`
  border: ${(props) => props.border};
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  border: ${(props) => props.border};
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
