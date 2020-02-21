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

const readFilePro = file =>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file, 'utf-8',(err,data)=>{
            if(err) reject(`Can't read file: ${err}`);
            resolve(data)
        })
    });
};

const 

readFilePro(`${__dirname}/source.txt`)
    .then(res =>{
        superagent
            .get(`${res}/2.jpg`)
            .then(res => {
                fs.writeFile(`${__dirname}/images/image.jpg`, res.body, err => {
                    if (err) return console.log(`ERR:${err}`)
                })
            })
            .catch(err=>{
                console.log(`ERR:${err}`)
            });
    })
    .catch(err=>{
        console.log(`ERR:${err}`);
    });

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


