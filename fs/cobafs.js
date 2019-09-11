const fs = require('fs')

console.log('star reading a file...');

//proses
fs.readFile('text.txt', 'utf-8', (err, content) => {
    if (err) {
        console.log('eror happened during reading the file')
        return console.log(err)
    }

    //lskuksn sesuatu disini jika berhasil

    //jika berhasil rename text.txt ke terserah txt
    fs.rename('text.txt', 'terserah.txt', (err) => {
        if(err) console.log("gagal Rename!"=err);
    
        console.log("yeay. berhasil");
    })

    
})

console.log('end of the file')
