var fs = require('fs');

fs.writeFile('./output.txt', '박정아', (err) => {
    if (err) throw err;
});

fs.readFile('./output.txt', 'UTF-8', function(err, data) {
    if(err){
        console.error('File Read Error : ', err);
        return;
    }
    console.log(data);
});