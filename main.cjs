const puppeteer = require('puppeteer');
const fs = require("fs");



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

(async () => {
    const browser = await puppeteer.launch({
        headless: true, // Executa com interface gráfica
        defaultViewport: null, // Usa o tamanho da janela padrão
        args: ['--start-maximized'] // (opcional) Inicia maximizado
    });

    const page = await browser.newPage();
    await page.goto('https://suap.ifpi.edu.br');
    await page.type("#id_username","2025111ISINF0063");
    await page.type("#id_password","Eneagonlosamigos2*");
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'load' }), // ou 'networkidle0'
        page.click(".success"),              // clica no botão
      ]);

    await page.goto("https://suap.ifpi.edu.br/edu/disciplinas/");
    const materials = [
        "https://suap.ifpi.edu.br/edu/disciplina/49531/",
        "https://suap.ifpi.edu.br/edu/disciplina/49537/",
        "https://suap.ifpi.edu.br/edu/disciplina/49528/",
        "https://suap.ifpi.edu.br/edu/disciplina/50779/",
        "https://suap.ifpi.edu.br/edu/disciplina/49535/",
        "https://suap.ifpi.edu.br/edu/disciplina/49530/",
        "https://suap.ifpi.edu.br/edu/disciplina/49529/",
        "https://suap.ifpi.edu.br/edu/disciplina/49536/",
        "https://suap.ifpi.edu.br/edu/disciplina/49534/",
        "https://suap.ifpi.edu.br/edu/disciplina/49533/",
        "https://suap.ifpi.edu.br/edu/disciplina/49532/",
        "https://suap.ifpi.edu.br/edu/disciplina/49527/",
        "https://suap.ifpi.edu.br/edu/disciplina/49526/"
    ]
    while (true){
        var data = {};
        await fs.readFile("data.json", "UTF-8", (err,content)=>{
            data = err ? Object.keys(names).map(name=>data[name]={n_materials:0,n_works:0,score: 0}) : JSON.parse(content);
        });
        await page.goto("https://suap.ifpi.edu.br/edu/aluno/2025111ISINF0063/?tab=boletim");
        const diffs = {};
        for (let i=0;i < 12; i++){
            const note = await page.$eval(`#content > div:nth-child(11) > div:nth-child(2) > div > table > tbody > tr:nth-child(${i+1}) > td:nth-child(8) > span`, el => el.textContent);
            console.log(`Nota em ${names[i]}: ${note}`);
            if (data[i].score !== note){
                if (!(String(i)) in diffs) diffs[String(i)] = {};
                diffs[String(i)] = { score: note };
                data[i].score = note;
            }
        }
        for (let i=0; i < 12; i++){
            const current_material_link = materials[i];
            await page.goto(current_material_link+"?tab=materiais");
            const materials_length = await page.$$eval('#content > div:nth-child(8) > div > div > table > tbody > *', elementos => elementos.length);
            await page.goto(current_material_link+"?tab=trabalhos");
            const works_length = await page.$$eval('#content > div:nth-child(10) > div > div > div', elementos => elementos.length);
            if (data[i].n_materials !== materials_length || data[i].n_works !== works_length){
                if (!(String(i)) in diffs) diffs[String(i)] = {};

                if (data[i].n_materials !== materials_length) data[i].n_materials = materials_length;
                if (data[i].n_works !== works_length) data[i].n_works = works_length;
            }
            console.log(`Quantidade de materias de aula encontrado em ${names[i]}: ${materials_length}`);
            console.log(`Quantidade de trabalhos encontrados em ${names[i]}: ${works_length}`);
        }
        console.log(diffs);
        fs.writeFile('data.json', JSON.stringify(data), (err) => {
            if (err) {
              console.error('Erro ao salvar o arquivo:', err);
            } else {
              console.log('Arquivo salvo com sucesso!');
            }
        });
    }

  // Aguarda para observar a página (opcional)
//   await page.waitForTimeout(10000); // espera 10 segundos
//   await new Promise((r)=>setTimeout(()=>r(),10000));
  
  await browser.close();
})();
