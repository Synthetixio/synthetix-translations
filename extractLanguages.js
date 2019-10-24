'use strict';
const fs = require('fs');

const APPS = ['synthetix-mintr'];

const writeFile = content => {
  return fs.writeFileSync(`translations.json`, JSON.stringify(content), 'utf8');
};

const readDirs = apps => {
  return Promise.all(
    apps.map(async app => {
      console.log(`Processing data for ${app}`);
      const dirs = await fs.readdirSync(`${__dirname}/${app}`);
      return dirs.map(lang => {
        console.log(`Found language: ${lang}`);
        return {
          app,
          lang,
          path: `${__dirname}/${app}/${lang}/translation.json`,
        };
      });
    })
  );
};

const readFiles = dirs => {
  return Promise.all(
    dirs.map(async file => {
      console.log(`Processing ${file.app} ${file.lang} lang...`);
      const fileContent = await fs.readFileSync(file.path);
      console.log(`${file.app} ${file.lang} lang done`);
      return { ...file, content: JSON.parse(fileContent) };
    })
  );
};

const generateTranslations = async () => {
  const directories = await readDirs(APPS);
  const files = await readFiles([].concat.apply([], directories));
  let translations = {};
  files.forEach(file => {
    if (!translations[file.app]) {
      translations[file.app] = {};
    }
    translations[file.app][file.lang] = file.content;
  });
  await writeFile(translations);
};

generateTranslations();
