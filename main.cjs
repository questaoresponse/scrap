const puppeteer = require('puppeteer');
const fs = require("fs");
const axios = require("axios");
const { GoogleAuth } = require('google-auth-library');
const express = require("express");
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

const text = "eyJ0eXBlIjoic2VydmljZV9hY2NvdW50IiwicHJvamVjdF9pZCI6InNjcmFwLWVmNGQ5IiwicHJpdmF0ZV9rZXlfaWQiOiIwYjY5MTNlMmYxZTg5NDZmN2MyMWFhMDdhZGIyYjM0OGUyODhmOWYyIiwicHJpdmF0ZV9rZXkiOiItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRRFRBL0NtWkV3dDJIcFBcbmRXMFRrS1gxZ1VuR0xqM3lvbTltUC9MbzZlMjlUYjVyMHBFNGYydjBUQ2tQY2gwU0V2UXhYa2l3NGNhK1RPbTRcbk9RRlR5ZVNsbUZZTG5JeU0vWEZLUW9kbVhURC9ldkQzL1VFZ09ESjdLS05qZ1VTTXdyMTEwRXdoQm9rT2twMEhcbnh4STJuMGYvTENMYlpMeE5DR3FrRmk3bnFCVC9PazMzU3p2RGUyK0NTRk8xcTg5ZCtoaGd5VUdhTFplNHlpOWRcbnhVOVljSDBxTUR6VWZ1RTRBcEhMYTVrbllNV2JLMXFPVHp4YUE5U0hQN0hYUUx6MlRYRS9HR0dsN0xaU0lkVVVcbnVrQUlKR3JZZjNBT1I1WFNWMWZybXBCSjVBcmFZcURzbGlwZENwVDM1UXZkNjRBcUU5NEJ2OHBYM1JvOFFkMHhcbjQ2VFhtdG9KQWdNQkFBRUNnZ0VBQVJsaVI2V2FXWHRKRU5Da1phK1JVN3p0aXRNYkZzQldtdlpla0N6R3hKK0tcbjdFSWJxRXNPbjRaRmlQdHYwQlFwOGpkaTRzdjhSbW05Wm15aWw0S0Qxc0o3UVVKNm4zSGpCUTloWit5NG1INFdcbkV2NmVXQm4rMWxJay9ydlJ4UGR2Ti9YQ3JjSGNWU2Q1bXF5a2FVVXRZWFNFQm5kSS9WQTd5UGpHSEFZTnZQSVpcbkFRaEd3Zkk2cXVWYXFaa3djeGdXRHFCZWZLa1lNZXRXam9CS3IwT3FnQ3RPMXM0d21EckNJM21tb21sa0RyR2pcblRPWVpqVlI3Q2FwbndTUE0vSGduczhlanZiZmROQzIwLy81VU5UTXNaQ1kwbUU0Rm0zQnEzSWd2RFpvQTRjVUNcbjFDOTcrY2EzMlkxUTQ4WUxIRUk3YUNHa2plUHNqMEl4M0l2VXIwRUtNUUtCZ1FEejVhVlNqWmJyYnE1V1E2NGpcbkJnTmI1ajNSNjJqL05BTWFHSFNDbXA2SFQxa0Qra203Mi9vbDBWUFV4b2pRa1lyOVZ5TTdEai9zRUMwNVNBMGJcblA5a29tb08vTjd1MDZPczRYeTVUdGxRSEd6TkpXaTA4cWRsYWtiN0pUQVd1ZktUV2o2bCtOTG9BU0REM0EzQ3lcbit6U3QzT0h1bFZYbkVSZzI5dUx5L1U3a3NRS0JnUURkZkpTNkZLQVlYdk4zYjBvNHZTeTF3ZTlleVp3ZGhmaXdcblYxVlk3cTBjSVVuRHNCanBiV1FhYjh5QnJ1aXFjNitOMXBvdlI4M0JqRFMrMUZiZ2FLT1dOcVp0MnlGbzNjd1ZcbncwUlg2T3A1YnF3TTB2THpTeWd1VWd0VktxSVphMm5xRmpMREJaUnlYT2JXY3pyZGRGdEVmbkdMZnExN2xkVjVcbnpoOHNsaXNBMlFLQmdRQ2Vob1JIUFJwOEdpdWNqRThTR3FWeVJSdW5adENQRjlwd1NyYm44T0hiWnZxZnVEM1dcbnFldFVTMU9tdUFoVE1GWmJ4aGh6R1JiNU02YUJWZENYQm8vNmNUdnl2S0gzdTNDdjZrV3RTWlFpTGs3T2ZadHJcbms2WmYxTjFoNzFTK0Rld0NQY3hYNktPQTdXdE9FbUZkSkNRZ1liSkVKYko1QnNacmExc2x2dmxaY1FLQmdDa1VcbklSVitHODlKVlFpU3lJWkxkODVpSUw1STBENmRpV2xUV1UzOFBua1lKM0UyNlBmcVJRV3VOSlRjMXVRK1BwSWtcbitrWElvSDNFUGtnaVk5YU5NY0g3Y3RTdkxyd2ZYdW11WksrVlVGK2pTaCs2eERxaGR0dFlkaWVlbDUvMVR4aU9cbmMyMitUREVGei81NE1yTytEK3RkTkR2MkM4RC9JaS9NTGZYOENBL0pBb0dBTmZMbzB1d2xscllqZW5pVGRHWGVcblVlUmxwQzlqazdWeVkzN0pVR3ZDM3FDSksrcHRNVUY2WUJ5RG56MGlNVzR4Kyt3ZUNiV3hRSDJlNXFjejE1bWpcblJOQ3pSa3ZIcE9JWmhQNk5FQWFxNHpGQnBUOFk1YUZKTUg1eUF1Sy9tVitsYVdzMDlET040MTMzdjVjRHN6bU1cblJhQTdKMDQ1UjBMZ25tTXFMcXczMGtjPVxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwiY2xpZW50X2VtYWlsIjoiZmlyZWJhc2UtYWRtaW5zZGstZmJzdmNAc2NyYXAtZWY0ZDkuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJjbGllbnRfaWQiOiIxMDgzMDI1NzI4MDU2OTA3MjkwODAiLCJhdXRoX3VyaSI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwidG9rZW5fdXJpIjoiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLCJjbGllbnRfeDUwOV9jZXJ0X3VybCI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZmlyZWJhc2UtYWRtaW5zZGstZmJzdmMlNDBzY3JhcC1lZjRkOS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVuaXZlcnNlX2RvbWFpbiI6Imdvb2dsZWFwaXMuY29tIn0=";
const auth = new GoogleAuth({
    keyFile: "./firebase-service-account.json", // caminho para o .json
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
        await axios.post('https://fcm.googleapis.com/v1/projects/scrap-ef4d9/messages:send', notification, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Erro ao enviar notificação:', error.response?.data || error.message);
    }
};
async function getAccessToken() {
  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();
  return accessToken.token;
}

(async () => {
    const token = await getAccessToken();
    
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