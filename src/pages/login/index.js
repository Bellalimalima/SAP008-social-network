import { loginEmailPassword, logout, signInGoogle } from '../../lib/auth.js';

export default () => {
  const container = document.createElement('div');
  const template = `

    <section class="login">

    <div class="op">
    <img src="./img/picsfem.png" class="login-logo">

    <h1 class="login__title">Fazer login</h1>

    <div id="form-container"></div>

    <form id="login-form">

    <div class="email-pass">
      <div>
        <label class="login-label">
        <span>Email:</span>
        <input id="txtEmail" type="email" name="email" class="input">
        </label>
      </div>
      <div>
        <label class="login-label">
        <span>Senha</span>
        <input id="txtPassword" type="password" name="password" class="input">
        </label>
        <div class="txt-error" id="txt-error">Senha invalida</div>
      </div>
    </div>
    
    <div class="ads">
    <label class="login-label-checkbox">
    <input type="checkbox" class="input-checkbox">Manter login 
    </label>
    <a href="#" class="login-link">Esqueceu a senha?</a>
    </div>

    <div class="entrar">
    <button id="btnLogin" type="button" class="button">Entrar</button>
    </div>
    
    <div class="Criar">
    <a href="#signup" id="btnSignupSpa" type="button" class="button2">Criar conta</a>
    </div>
    <a class="login-link2">Logar como:</a>
    <div class="login-icons">
    <button id="btn-gmail" type="button" class="icons-button">
    <img src="./img/icongmail.png" alt="gmail">
    </button>
    
    </div> 

    </form>
    </div>
    </section>

    <div class="wallpaper">
    <img src="./img/foto.png">
    </div>
    <button id="btnLogout" type="button" class="button buttonBlue">Log out</button>

    `;

  container.innerHTML = template;

  const txtEmail = container.querySelector('#txtEmail');
  const txtPassword = container.querySelector('#txtPassword');
  const btnLogin = container.querySelector('#btnLogin');
  const btnLogout = container.querySelector('#btnLogout');
  const btnGmail = container.querySelector('#btn-gmail');
  /* const txtError = container.querySelector('#txt-error');
  function errormsg(){
    return txtError;
  }*/
  btnLogin.addEventListener('click', () => {
    const email = txtEmail.value;
    const password = txtPassword.value;
    loginEmailPassword(email, password);
  });

  btnLogout.addEventListener('click', logout);

  btnGmail.addEventListener('click', signInGoogle);
  
  return container;
};