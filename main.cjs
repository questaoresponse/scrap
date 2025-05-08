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

const text = "eyJ0eXBlIjoic2VydmljZV9hY2NvdW50IiwicHJvamVjdF9pZCI6InNjcmFwLWVmNGQ5IiwicHJpdmF0ZV9rZXlfaWQiOiIyNDc0YTUwNmM2YmQzOGVkYjkyMzYyODQ2MDhlYzFkMDg3ZTY3NjEwIiwicHJpdmF0ZV9rZXkiOiItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2QUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktZd2dnU2lBZ0VBQW9JQkFRQ2ZMT3I4VHBpeDVDT3Jcbmx5VTVXYlMxNGdrNW9CS3R3V09raVBwTWJ1MlJYUThMQ1pkbGVuR0FOaWZodHF6QWk0YmM3VmI0K1pjVEJsdDFcblBBUmtLeU9YUDZidFJ4cnRGOVNjSDVlV0prcjZyWGR2cFdvaWFhZFlyU0Z0YmtxK25TNVZieVl4dkNEYW9Fd3lcbmpwMnQ1U3VBcGhwaTlsU2xXbmk3Wnl0dEF0dFpjckJKMERNUExJUWtwSVZUYi82RVQrQTlCU1pVOEw0YWFpYlBcbnJGdmhBNTJ4VHNTVG9UMElHTGtCZXVvVWtYVThzRkplVVo2WldCSjNuWVdGQzIvaFhTTUM5eUphbmFxTXM2VWNcblVpUHo3TEwyemJHalhzd05FazdVU3pGMlpUUUo4aHBDa0VzVThNclpLUTlYS3UrVlJPajNmY2NwV3hYM1pTeUxcbnZqSzRnSjlGQWdNQkFBRUNnZ0VBQ0FKSkVvZmIyL3VJSmU2VmMyVEZtRzgybXAwb3czQmJGS0RGdzBuRGoxQllcbjNPdlBIODZBM253YkZwckw1Mlk5MDJqbnV1QklEeTkvTTQ5aEF5OCtlN0k2c202azlxLy94Ums3MWRTNGFoT0hcblVtbEd4Vk4rbFpJa2YrNlFPVFlNYWtVTTdXeXpWSHpEU0xudlNod2hTN2hQMUpIallXeURiWjU3eTJEYzY0dXFcbjZkOFdkVS84YWNiT1NCMFRxcDZvbTBjNFNuR0s1QVkwWWp0anZ5anBDelN2QjlXOTNEVEVNN0lxMHJpZDFWRnBcbllTYVZERlhjSjEwWmtMNFg0aUV2UGtkOFJlZERvcVMxeFRTQ3pTMktRRFgzWi9pRFhaRFh0NG1MZEVEeS93TnFcblk1VFhsTHNBVWlCT3ZvMFFVWi9XZ2VZRVNFWnJaemJGWnducXpCNUY0UUtCZ1FEUnlPZFNQR1BjUGpOKzh1bm5cbkZqMmNxb2RPMjhleVIxd2JSQ0NjaThDRVFUaHJYMmNjYnVjOUtKY1V0TUJpOXBGQjVhbEV6blJjZGhNQmY4eGhcbk1TVFlxaHg5N0NVdEdrWVc0Vk5BVmdlV1RSSkFseDAzZkFTZTk1Y0ZaRENTSXFvVXJiR2VjaEd6R1o2YmhuakZcbnFLK0JWblRLR2huOWhpUGZISXBNZGNDM2RRS0JnUURDUGRWVDJNUVl3cXg5RERsQUdHQll4WGplSXgySHcwbWpcbkE5dTJjS2VvdmdQR2d4VW9lM3o5azlnYjgrakkxakV0T3ViOGhWLzNSNEpLdlFpcUltQlNKdlRESlFhRS9CWUhcbmdKSytZRmZTbElWbUd6VUVLUUhKYzdpMjVicCtiV2JqbmR1RWZsYUhraWRJeHg5N3ZJUUJJZy9ZV3Nic2M3blNcbk5FckdpMVVla1FLQmdGT2lBMDVPa3dVSHF5SHVGMyt2NXlvZzljWmphZzVSMG85d0xvd2FUc3FxOGFJa3E0ZXpcblV1NlgwdnRIUC9kMEV0NnhmelRXRlorUzF1cmZGd3ljT2ZOQ2hnOVJhRlM5eDdseFpPNGVIZkkya1pNOGEwSm1cblo3VTBRWG05d250UDVIeFA3cUtiR1NGTWttV3dTMCtKZTBaVndFT2Qra1NQQ0pmMjJjKzNsZmZOQW9HQWZtOUhcblErdXVRVHUra1NyNnZRamc5Z2VjRkdRaEhiVDFZcUhwUzBqcktVQitMcUkyaklKTktyWW9qcEZtcmd3V09JM0ZcbnV3dUtHdWkyRzdZT1JNaFprRUFCUkdEK2JHTzJaeTIrMXlMWko1NDdjdW8weVQ5MEJWQkpKT3hHUjNNbzdQSmNcbjZGSmdPcURjNTFlTjI3b3E1cDNvV0hsR1VMVkhlRmRIY1JOUzFiRUNnWUJ0RlFzWllhclBDc21TMWMzNThzLzFcbmtVYk9DaDJCS0FpaC9EZzU1R1V3a1NBaEcvc3F3bE5yQ0VVejJFYlFJZHl0aHk3bzNQd1VtVWEyVEphVVJpSEdcbkNiOUpLVS9VSG84OEROaXEvbURvK3NzSHZoNTBBdzR2S1E0SEdwMXFLZlcxcVdoc3VnMndaYWxVaDlzai83S0dcbnlKNUJ2Q1U5SmxyOEtLcWRzOWdPMkE9PVxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwiY2xpZW50X2VtYWlsIjoiZmlyZWJhc2UtYWRtaW5zZGstZmJzdmNAc2NyYXAtZWY0ZDkuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJjbGllbnRfaWQiOiIxMDgzMDI1NzI4MDU2OTA3MjkwODAiLCJhdXRoX3VyaSI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwidG9rZW5fdXJpIjoiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLCJjbGllbnRfeDUwOV9jZXJ0X3VybCI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZmlyZWJhc2UtYWRtaW5zZGstZmJzdmMlNDBzY3JhcC1lZjRkOS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVuaXZlcnNlX2RvbWFpbiI6Imdvb2dsZWFwaXMuY29tIn0=";
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