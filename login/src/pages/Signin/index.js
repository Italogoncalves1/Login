import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo-black.png";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [cnpj, setCnpj] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!cnpj | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(cnpj, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Login_container>
      <C.Logo_container> <img src={logo} alt="Logo" 
      width={120} height={64}/>
					<h1>
						Bem vindo ao <strong>Dash</strong>
					</h1> </C.Logo_container>
          
      <C.Content>
      <C.Label>CNPJ</C.Label>
      
        <Input
          type="text"
          
          autoComplete="off"
          value={cnpj}
          onChange={(e) => [setCnpj(e.target.value), setError("")]}
        />
        


        <C.Label>Senha</C.Label>
        <Input
          type="password"
         
          value={senha}
          autoComplete="off"
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
      
        
        </C.Content>
        < C.Span>Esqueci a senha</C.Span>
        <C.labelError>{error}</C.labelError>
        <C.ButtonS Text="Entrar" onClick={handleLogin}>
          Entrar
        </C.ButtonS>

        <br />
        <C.LabelSignup>
          Não tem uma conta?
          <br />
          <C.Strong>
            <Link to="/signup">&nbsp;Fazer cadastro</Link>
          </C.Strong>
        </C.LabelSignup>
      
    </C.Login_container>
  );
};

export default Signin;