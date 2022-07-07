import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
			border-radius: 20px;
			color: #cccccc;
			background-color: #1a1a1a;
			padding: 16px 16px 14px 16px;
			border: none;
      margin-bottom: 30px;

			&:-webkit-autofill,
			&:-webkit-autofill:hover,
			&:-webkit-autofill:focus {
				box-shadow: 0 0 0 1000px #1a1a1a inset;
				color: #cccccc;}
`;