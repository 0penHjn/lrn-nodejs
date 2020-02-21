const fs = require('fs');
const superagent = require('superagent');

//callback hell
/*fs.readFile(`${__dirname}/source.txt`,'utf-8',(err,url)=>{
  if(err){
      return console.log(`ERR fsRead:${err}`);
  }
  superagent
      .get(`${url}/2.jpg`)
      .end((err,res)=>{
          if(err) {
              return console.log(`ERR response:${err}`);
          }
          fs.writeFile('image.jpg','aplication/jpg',res.body, err => {
              if(err) {return console.log(`ERR fsWrite:${err}`);}
          })
      });
});*/

/*fs.readFile(`${__dirname}/source.txt`, 'utf-8', (err, url) => {
    if (err) return console.log(`ERR:${err}`);
    superagent
        .get(`${url}/2.jpg`)
        .then(res => {
            fs.writeFile(`${__dirname}/images/image.jpg`, res.body, err => {
                if (err) return console.log(`ERR:${err}`)
            })
        })
        .catch(err=>{
            console.log(`ERR:${err}`)
        });
});*/

/*readFilePro(`${__dirname}/source.txt`)
    .then(res => {superagent.get(`${res}/2.jpg`)})
    .then(res => writeFilePro(`${__dirname}/images/image.jpg`, res))
    .then(res => console.log(`file ${res} created!`))
    .catch(err => {console.log(`ERR:${err}`);});*/

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject(`Can\'t to read file:${err}`);
            resolve(data);
        })
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject(`Can\'t to write file:${err}`);
            resolve('success');
        })
    })
};


const readAndWrite = async () => {
    try {
        const data = await readFilePro(`${__dirname}/source.txt`);
        const res = await writeFilePro(`${__dirname}/images/image.jpg`, data);
        console.log(`file ${res} created!`);
    } catch (err) {
        //console.log(err);
        throw err;
    }
    return 2;
};
/*
readAndWrite()
    .then(x =>{} )
    .catch(err=>console.log(`ERROR:${err}`));*/

( async()=>{
    console.log(1);
    const x = await readAndWrite();
    console.log(x);
    console.log(3)
})();