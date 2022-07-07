import styled from "styled-components";


export const Login_container = styled.div`
padding: 20% 15% 15% 15%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	box-sizing: border-box;
  h1 {
		font-size: 1.2rem;
		font-weight: 400;
    margin-top: 20px ;
	}
`;

export const Logo_container = styled.div`
		$imgSize: 4rem;
		display: flex;
		align-items: center;
		flex-direction: column;
    padding-bottom: 30px;
    
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  
`;



export const Span = styled.label`
text-decoration: underline;
text-align: center;

`;

export const Content = styled.div`
padding-top: 32px;
`;

export const Label = styled.label`
 width: 100%;
			text-align: left;
			margin-top: 40px;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
  
`;

export const labelError = styled.label`
  margin: 0;
				font-size: 1rem;
				text-align: center;
				font-weight: 400;
`;

export const ButtonS = styled.button`
border-radius: 30px;
		border: 4px solid #1a1a1a;
		background-color: white;
		padding: 0.8rem 2rem;
		font-weight: bold;
		font-size: 1rem;
		width: 60%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;`

export const Strong = styled.strong`
  cursor: pointer;

  a {
    color: black;
    text-decoration: underline;
				font-weight: bold;
  }
`;