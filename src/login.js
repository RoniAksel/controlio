
    const main = document.querySelector('main');
    const divLog = document.createElement('div');
    const div = document.createElement('div');
    const svgBg = document.createElement('div');
    const divTop = document.createElement('div');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const btnsBlock = document.createElement('div');
    const btnLog = document.createElement('button');
    const btnReg = document.createElement('button');
    const labelEmail = document.createElement('label');
    const inpEmail = document.createElement('input');
    const labelPass = document.createElement('label');
    const inpPass = document.createElement('input');
    const h1 = document.createElement('h1');
    const h1Purp = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h4 = document.createElement('h4');
    const a = document.createElement('a');

const LogIn = () =>{

    divLog.className = "logIn";
    labelEmail.className = "regTxt";
    labelPass.className = "regTxt";
    btnsBlock.className = "btnsBlock";
    btnLog.className = "block btnFull";
    btnReg.className = "block btnLight";
    h1Purp.className = "txtCenter purp_F"
    h2.className = "txtCenter gray_F sHeadTxt"
    a.className = "regTxt purp_F";
    svgBg.className = "svgBg";
    divTop.className = "top";
    divImg.className = "flex flex_center";

    img.src = "https://i.pinimg.com/originals/45/af/00/45af00c2d6a3786243b77e057f18fe45.png";

    inpEmail.type = "email";
    inpEmail.placeholder = "name@example.com";

    inpPass.type = "password";
    inpPass.placeholder = "at least 8 chars";

    btnLog.type = "submit";
    
    a.href = '#';

    h4.className = 'vGray_F regTxt fw_light';
    h4.innerText = 'log in with your data that you entered during your registration'
    h1.innerText = 'Log in.';
    labelEmail.innerText = 'Enter your email address'
    labelPass.innerText = 'Enter your password';
    btnLog.innerText = 'Log in';
    btnReg.innerText = 'Register Here';
    a.innerText = `Forgot your password?`;
    h2.innerText = 'Nice to see you again';
    h1Purp.innerText = 'Welcome to toDo';

    btnReg.addEventListener('click', Modal);

    divLog.appendChild(h1);
    divLog.appendChild(h4);
    div.appendChild(labelEmail);
    div.appendChild(inpEmail);
    div.appendChild(labelPass);
    div.appendChild(inpPass);

    btnsBlock.appendChild(btnLog);
    btnsBlock.appendChild(btnReg);
    btnsBlock.appendChild(a);

    div.appendChild(btnsBlock);

    divLog.appendChild(div);

    divImg.appendChild(img);

    divTop.appendChild(h2);
    divTop.appendChild(h1Purp);
    divTop.appendChild(divImg);

    svgBg.appendChild(divTop)

    main.appendChild(divLog);
    main.appendChild(svgBg);

}

const Modal = () =>{
    const div = document.createElement('div');
    const divInpt = document.createElement('div');
    const modalCont = document.createElement('div');
    const closeBtn = document.createElement('button');
    const btnsBlock = document.createElement('div');
    const labelEmail = document.createElement('label');
    const inpEmail = document.createElement('input');
    const labelPass = document.createElement('label');
    const inpPass = document.createElement('input');
    const h1 = document.createElement('h1');
    const h4 = document.createElement('h4');


    labelEmail.className = "regTxt";
    labelPass.className = "regTxt";
    h4.className = 'vGray_F regTxt fw_light';


    h1.innerText = "Register Here."
    h4.innerText = "Fill in the required details below"

    closeBtn.className = "btnFull block"


    inpEmail.type = "email";
    inpEmail.placeholder = "name@example.com";

    inpPass.type = "password";
    inpPass.placeholder = "at least 8 chars";

    modalCont.className = "modal-content";

    closeBtn.innerText = "close me"
    div.className = 'modal'

    labelEmail.innerText = 'Enter your email address'
    labelPass.innerText = 'Enter your password';


    divInpt.appendChild(h1);
    divInpt.appendChild(h4);
    divInpt.appendChild(labelEmail);
    divInpt.appendChild(inpEmail);

    divInpt.appendChild(labelPass);
    divInpt.appendChild(inpPass);
    
    modalCont.appendChild(divInpt)

    modalCont.appendChild(btnsBlock)

    modalCont.appendChild(closeBtn);
    div.appendChild(modalCont);
    main.appendChild(div);

    closeBtn.addEventListener('click', () =>{
        main.removeChild(div);
    })
} 

LogIn()