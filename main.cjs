const puppeteer = require('puppeteer');
const fs = require("fs");
const axios = require("axios");
const { GoogleAuth } = require('google-auth-library');
const express = require("express");
const admin = require("firebase-admin");
const app = express();
app.get("/getfile",(req,res)=>{
    res.sendFile(__dirname + "/data.json");
});
app.listen(12345, (err)=>{
    console.log('live');
});

setInterval(()=>{
    try {
        axios.get("https://scrap-t8xu.onrender.com");
    } catch (e){
    }
},10000);

const auth = new GoogleAuth({
  keyFile: './firebase-service-account.json', // caminho para o .json
  scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
});

const user_tokens = JSON.stringify(["e9p6KIj1QkimIwlBOzQtm8:APA91bE608K8NUeKnyXfLx08kqGDF654Qt5V62-Q4dgjPpN_Wt4zuVniR_QFy_KfRkK8kHVBGiEZmILHvm3lZO-tmU9ffdn6K7o78Jzz_tbeuwT3y2xgwKE"]);
const username = "2025111ISINF0063";
const password = "Eneagonlosamigos2*";

const names = [
    "Informática Básica",
    "Sistemas Operacionais",
    "Fundamentos de Redes de Computadores",
    "Gestão de Tempo Acadêmico",
    "Projeto Integrador",
    "História 1",
    "Geografia 1",
    "Química 1",
    "Matemática 1",
    "Língua Portuguesa 1",
    "Inglês 1",
    "Educação física 1",
    "Biologia 1"
];
const material_nums = [
    49531,
    49537,
    49528,
    50779,
    49535,
    49530,
    49529,
    49536,
    49534,
    49533,
    49532,
    49527,
    49526
];
const inversed_material_nums = {};
material_nums.map(( material_num, index ) => inversed_material_nums[material_num] = index);

async function sendNotification(notification, token){
    try {
        messaging.send(notification);
    } catch (error) {
        console.error('Erro ao enviar notificação:', error.response?.data || error.message);
    }
};
const serviceAccount = {
    "type": "service_account",
    "project_id": "scrap-ef4d9",
    "private_key_id": "45495a6efbea8ea72395992fcbac016d26367a24",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCeec5Uy+60Ke4k\nIQotyGm79LhyWnUk70vLqfAeThxNv6XDaqaRt73SFhOyoF9Wp1RvDqJqZVuNpLGf\n8vlCretKrvbso3piHgnNg6DkoF5CUxc8upH/u7BZ9t577R/5W8+xM509hq1f6j75\nxD7bRai9XSOLSvWycfBKobBHEfer7uVRdAdLUo9PwgWoH985kUW0xG2tf3G1dh30\n/uOBO7ZFxVrp4qGr9LpsdbDs5n1otbfP7l30srfk+QXiUMDBCne0m3KgAfL4yCVM\nBwQN+XQvFQVM+uDwHAa2xXarkTV6UeYO9SKg37dmFmsu/UWqfMyaGvYWtLxp8Gaf\nIobQzCbxAgMBAAECggEAAsuA0pOy1uBDGsWvEXCj62nc/j351pgWfPXhzhRa68TH\nWSNz4u+xJtfh1WLTsPUMMwCN5794NmQjB9Wir2+JeKHjqU0WzE0y/LoSEoYriL2W\nFCmcMpJDrB/Y+6mKc1I7Cakwium+/Ak8aW5HHNnlKHXQjyqCxni7oAKrAmM0PDGC\nzqBIeJWJMR8sW4t73H1k6MK0R7DWWeK7g7DUb8sdVS4GC9BzN/6zTAzGztzhxqSk\nuT9AsXmUgMt9A5mRNRRmjhN2McXEsWl3lexnaU4fTWf/78QCKmYk8UQPJz51WqZM\nUrNQgdHF/j6doMZ+j67Fu30T6uppGfMHMpTEzkMRywKBgQDPTh86vk0hHiaXOl/d\nEwei+LbrBLZMoVBZ4x1Xb5TH3TfK8RDE3N+eyDrCINlYLNi7FAE8LVUnF0PI6gBM\nYI8MkYpnBa4wlERAjjztI+yOMqT5NOd0gkQoz31fkZgjN3luFqNKiZY3Rtg2xlE1\nnGPCoy2YW7nUlBSGWMnq1Y9vdwKBgQDDs23OKubXXUUFEG3bsRgJP3qoHRON+fTz\nVkfYV+NxUJcvEjezloLKCujBnsCg5A/r43d2ckqiLlB3wThkby/cuicY1w8uLdjC\nglwfLHObVtj0js3bAfK9Edfjk27OUKeZrEhsA3BgL/DlzkUSRIJfu3aru0bMJNOc\nljxlHr1G1wKBgQCGSICKOMMVdMZip3l5Zt5Hfvxd+EtuEABQeYGEJc8mN/HwD39h\nRgHEhMcrAMRJDaPGawrxxBuomrVZ69oNn26KIayZV2CiLyiW+IwWwHJ3Ge8rTk2v\ndsJX/S+lPFZkWYba/OcBXWZkoAtmT8hDBe7JIZJjYudZACLbc6A38eZbuQJ/ImZn\n5tWjvjem6jz5EqUOlJGT/fkedtZ5OEzyVBUe5cxExwFsySSr2NgSEfbV5XIxWkWh\nujBc7iU1/9b3ErB4uVP/i15CTNvCPm6rws8Ng0DA4jw380dkY9e/G0HPOHT1AQ5H\nrLTuC/phXgPkIFHqmOla8tT4nOncSKof86ZznwKBgFu0cBP48R9aNX80Bu2I+ql4\nK4OAiau7Kkc50XfJ5OBQ11Vj98boMJROWWCdQnPIud+l1C8MmE6Kjy/w6c3y7ILX\noWtJtoUHBbiaICpf8jlorz7pFdBVKiuVTSKjJszRvemMfBuGIMPhV7xAzRx1U9Gq\nT3ri9WypYXrCpf0cabR5\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fbsvc@scrap-ef4d9.iam.gserviceaccount.com",
    "client_id": "108302572805690729080",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40scrap-ef4d9.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}  
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const messaging = admin.messaging();
(async () => {    
    const token = "";
    const browser = await puppeteer.launch({
        headless: true, // Executa com interface gráfica
        defaultViewport: null, // Usa o tamanho da janela padrão
        args: ['--start-maximized'] // (opcional) Inicia maximizado
    });

    const page = await browser.newPage();
    await page.goto('https://suap.ifpi.edu.br');
    await page.type("#id_username", username);
    await page.type("#id_password", password);
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'load' }), // ou 'networkidle0'
        page.click(".success"),              // clica no botão
      ]);

    await page.goto("https://suap.ifpi.edu.br/edu/disciplinas/");
    const materials = [
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/",
        "https://suap.ifpi.edu.br/edu/disciplina/"
    ]
    while (true){
        var data = { 
            content: [],
            modifications: {}
        };
        await fs.readFile("data.json", "UTF-8", (err,content)=>{
            data = err || content === "" ? { content: Object.keys(names).map(name=>data[name]={n_materials:0,n_works:0,score: "-"}), modifications: {} } : JSON.parse(content);
        });
        await page.goto(`https://suap.ifpi.edu.br/edu/aluno/${username}/?tab=boletim`);
        const diffs = {};
        for (let index=0;index < 12; index++){
            const note = await page.$eval(`#content > div:nth-child(11) > div:nth-child(2) > div > table > tbody > tr:nth-child(${index + 1}) > td:nth-child(8) > span`, el => el.textContent);
            const current_material_num = await page.$eval(`#content > div:nth-child(11) > div:nth-child(2) > div > table > tbody > tr:nth-child(${index + 1}) > td:nth-child(1)`, el => el.textContent);
            const i = inversed_material_nums[current_material_num.trim()];
            if (data.content[i].score !== note){
                if (!(String(i)) in diffs) diffs[String(i)] = {};
                diffs[String(i)] = { score: note };
                data.content[i].score = note;
            }
        }
        for (let i=0; i < 12; i++){
            const current_material_link = materials[i] + material_nums[i] + "/";
            await page.goto(current_material_link+"?tab=materiais");
            const materials_length = await page.$$eval('#content > div:nth-child(8) > div > div > table > tbody > *', elementos => elementos.length);
            await page.goto(current_material_link+"?tab=trabalhos");
            const works_length = await page.$$eval('#content > div:nth-child(10) > div > div > div', elementos => elementos.length);
            if (data.content[i].n_materials !== materials_length || data.content[i].n_works !== works_length){
                if (!(String(i) in diffs)) diffs[String(i)] = {};

                if (data.content[i].n_materials !== materials_length){
                    data.content[i].n_materials = materials_length;
                    diffs[String(i)].n_materials = materials_length;
                }
                if (data.content[i].n_works !== works_length){
                    data.content[i].n_works = works_length;
                    diffs[String(i)].n_works = works_length;
                }
            }
        }
        data.modifications[new Date().getTime()] = diffs;
        manageNotifications(diffs, token);
        fs.writeFile('data.json', JSON.stringify(data), (err) => {
            if (err) {
                console.error('Erro ao salvar o arquivo:', err);
                const notification = {
                    message:{
                        token: user_tokens,
                        notification:{
                            body: err,
                            title:"Erro ao salvar o arquivo:"
                        }
                    }   
                }
                sendNotification(notification, token);
            }
        });
    }

  // Aguarda para observar a página (opcional)
//   await page.waitForTimeout(10000); // espera 10 segundos
//   await new Promise((r)=>setTimeout(()=>r(),10000));
  
  await browser.close();
})();

function manageNotifications(diffs, token){
    Object.keys(diffs).map(async key=>{
        const current_material = diffs[key];
        const notification = {
            message:{
                token: user_tokens,
                notification:{
                }
            }
        }

        const title = [];
        const title_maps = {
            n_materials: "novos materiais",
            n_works: "novos trabalhos",
            score: "novas notas",
        }
        Object.keys(current_material).map(el=>{
            title.push(title_maps[el]);
        });
        const content = [];
        const content_maps = {
            n_materials: "Quantidade de materiais novos: ",
            n_works: "Quantidade de trabalhos novos: ",
            score: "Nota da prova: ",
        }
        Object.keys(current_material).map(el=>{
            content.push(content_maps[el] + current_material[el]);
        });
        notification.message.notification.title = `Você recebeu ${title.join(", ")} em ${names[Number(key)]}`;
        notification.message.notification.body = content.join("; ");
        sendNotification(notification, token);
    });
}