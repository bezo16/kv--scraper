const fs = require('fs')
const cheerio = require('cheerio')
const axios = require('axios')
// CONFIGS

async function fetchHTML(url) {
    const { data } = await axios.get(url)
    return cheerio.load(data)
  }












// VEDABASE SRIMAD BHAGAVATAM 
// VEDABASE SRIMAD BHAGAVATAM 
// VEDABASE SRIMAD BHAGAVATAM 
// VEDABASE SRIMAD BHAGAVATAM 
// VEDABASE SRIMAD BHAGAVATAM 
// VEDABASE SRIMAD BHAGAVATAM 








// CONFIG
// let canto = 1
// let language = 'cs'



// let counter = 0
// let chapters = [19,10,33,31,26,19,15,24,24,90,31,13]

// async function SrimadBhagavatam() {
    
//     let logStream = fs.createWriteStream(`./srimad-bhagavatam/SB-${language}-${canto}.json`, {flags: 'a'});
//     const $ = await fetchHTML(`https://vedabase.io/${language}/library/sb/${canto}/${counter + 1}/`)
//     if(counter === 0)logStream.write(`[`);
//     logStream.write(`[`);
    
//     let length = $('dl').length 
    
//     $('dl').each(function (i, elm) {
//         let text = $(elm).find('dd').text()
//         let num = $(elm).find('dt a').text()
//         let result = `"${text}",`
//         if(num.includes('-')) {
//             let num1 = num.split(' ')[1].split('-')[0]
//             let num2 = num.split(' ')[1].split('-')[1]
//             num2 = num2.slice(0,num2.length - 1)
//             for(let j = 0;j < (num2 - num1); j++) {
//                 logStream.write(result + '\n');
//             }
//         } 
//         if(i === length - 1) result = `"${text}"`
//         logStream.write(result + '\n');
        
            
//           });
//         if(counter === chapters[canto - 1] - 1)logStream.write(`]`);
//         else logStream.write(`],`);
//         if(counter === chapters[canto - 1] - 1)logStream.write(`]`);
//         if(counter !== chapters[canto - 1] - 1) {
//             counter++ 
//             SrimadBhagavatam()
//         } else {
//             canto++
//             console.log(canto)
//             if(canto === 13) return
//             counter = 0
//             SrimadBhagavatam()
//         }
          
//     }
//      SrimadBhagavatam()

    
    
    
    
    
    
    










// VEDABASE BHAGAVAD GITA
// VEDABASE BHAGAVAD GITA
// VEDABASE BHAGAVAD GITA
// VEDABASE BHAGAVAD GITA
// VEDABASE BHAGAVAD GITA
// VEDABASE BHAGAVAD GITA
// VEDABASE BHAGAVAD GITA
// VEDABASE BHAGAVAD GITA




// CONFIG
let language = 'cs'



let counter = 0
let chapters = 18
// let quotes = [46,72,43,42,29,47,30,28,34,42,55,20,35,27,20,24,28,78] 

async function BhagavadGita() {
    
    let logStream = fs.createWriteStream(`./bhagavad-gita/BG-${language}.json`, {flags: 'a'});
    const $ = await fetchHTML(`https://vedabase.io/${language}/library/bg/${counter + 1}/`)
    if(counter === 0)logStream.write(`[`);
    logStream.write(`[\n`);
    
    let length = $('dl').length 
    
    $('dl').each(function (i, elm) {
        let text = $(elm).find('dd').text()
        let num = $(elm).find('dt a').text()
        let result = `"${text}",`
        if(num.includes('-')) {
            let num1 = num.split(' ')[1].split('-')[0]
            let num2 = num.split(' ')[1].split('-')[1]
            num2 = num2.slice(0,num2.length - 1)
            for(let j = 0;j < (num2 - num1); j++) {
                logStream.write(result + '\n');
            }
        } 
        if(i === length - 1) result = `"${text}"`
        logStream.write(result + '\n');
          });
          if(counter != chapters - 1) {
              logStream.write(`],\n\n`);
              counter++
              BhagavadGita()
            } else {
              logStream.write(`]\n`);
              logStream.write(`]`);

          }
     
          
    }
    BhagavadGita()














