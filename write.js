let fs = require('fs')

let s = "Magloire 4 Mukendi\n"

fs.writeFile('tt.txt', s, err =>{
    if (err){
        console.error(err)
        return
    }
})

