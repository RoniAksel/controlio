    const body = document.querySelector('body')
    const main = document.querySelector('main');
    const divLog = document.createElement('div');
    const div = document.createElement('div');
    const svgBg = document.createElement('div');
    const divTop = document.createElement('div');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const btnsBlock = document.createElement('div');
    const btnsBlock2 = document.createElement('div');
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
    const form = document.createElement('form');

const LogIn = () =>{

    divLog.className = "logIn";
    labelEmail.className = "regTxt";
    labelPass.className = "regTxt";
    btnsBlock.className = "btnsBlock";
    btnsBlock2.className = "btnsBlock";
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
    inpEmail.id = "email";
    inpEmail.placeholder = "name@example.com";
    inpPass.id = "password"
    inpPass.type = "password";
    inpPass.placeholder = "at least 8 chars";

    btnLog.type = "submit";
    btnReg.type ="none"
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

    form.appendChild(labelEmail);
    form.appendChild(inpEmail);
    form.appendChild(labelPass);
    form.appendChild(inpPass);

    btnsBlock.appendChild(btnLog);
    btnsBlock.appendChild(btnReg);

    form.appendChild(btnsBlock);

    divLog.appendChild(form);
    btnsBlock2.appendChild(btnReg)
    btnsBlock2.appendChild(a)
    divLog.appendChild(btnsBlock2);


    divImg.appendChild(img);

    divTop.appendChild(h2);
    divTop.appendChild(h1Purp);
    divTop.appendChild(divImg);

    svgBg.appendChild(divTop)

    main.appendChild(divLog);
    main.appendChild(svgBg);

    form.addEventListener('submit', e=>{
        e.preventDefault();
        const email = form["email"].value;
        const pass = form["password"].value;
        auth.signInWithEmailAndPassword (email, pass).then(()=>{
            console.log('login invoked');
            location="indexu.html";
        }).catch(err=>{
            console.log("error");
        })
    })

}

const Modal = () =>{
    const div = document.createElement('div');
    const divInpt = document.createElement('div');
    const modalCont = document.createElement('div');
    const closeBtn = document.createElement('button');
    const regBtn = document.createElement('button');
    const btnsBlock = document.createElement('div');
    const form = document.createElement('form');
    const labelName = document.createElement('label');
    const inpName = document.createElement('input');
    const labelEmail = document.createElement('label');
    const inpEmail = document.createElement('input');
    const labelPass = document.createElement('label');
    const inpPass = document.createElement('input');
    const h1 = document.createElement('h1');
    const h4 = document.createElement('h4');

    labelName.className = "regTxt";
    labelEmail.className = "regTxt";
    labelPass.className = "regTxt";
    h4.className = 'vGray_F regTxt fw_light';
    inpName.placeholder = "Full Name";


    h1.innerText = "Register Here."
    h4.innerText = "Fill in the required details below"
    btnsBlock.className = "btnsBlock";
    regBtn.className = "btnFull block"
    closeBtn.className = "btnLight block"
    inpName.type = "text";
    inpName.placeholder = "Full Name";
    inpName.id = "name";


    inpEmail.type = "email";
    inpEmail.placeholder = "name@example.com";
    inpEmail.id = "email";


    inpPass.type = "password";
    inpPass.placeholder = "at least 8 chars";
    inpPass.id = "password";

    modalCont.className = "modal-content";

    closeBtn.innerText = "Close"
    regBtn.innerText = "Register"
    div.className = 'modal'

    labelName.innerText = 'Enter your full name'
    labelEmail.innerText = 'Enter your email address'
    labelPass.innerText = 'Enter your password';


    divInpt.appendChild(h1);
    divInpt.appendChild(h4);

    form.appendChild(labelName);
    form.appendChild(inpName);
    form.appendChild(labelEmail);
    form.appendChild(inpEmail);
    form.appendChild(labelPass);
    form.appendChild(inpPass);
    form.appendChild(regBtn);


    
    modalCont.appendChild(divInpt)
    modalCont.appendChild(form)


    btnsBlock.appendChild(regBtn)
    btnsBlock.appendChild(closeBtn)

    form.appendChild(btnsBlock);
    div.appendChild(modalCont);
    body.appendChild(div);

    closeBtn.addEventListener('click', () =>{
        body.removeChild(div);
    })

    form.addEventListener('submit', e=>{
        e.preventDefault();
        const name = form["name"].value;
        const email = form["email"].value;
        const pass = form["password"].value;
        const createId = () => Math.random().toString(36).substr(2,9)
        console.log(name, email,pass)
        form.reset();
        auth.createUserWithEmailAndPassword(email,pass).then(cred=>{
            return db.collection('users').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: pass,
                Id: createId()
            }).then(()=>{
                console.log("succses");
                location="indexu.html";
            }).catch(err=>{
                console.log("error")
            })
        })
    })
} 



LogIn()
