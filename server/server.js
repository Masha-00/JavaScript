import http from 'http'; 
import fs from 'fs'; 
import path from 'path'; 
 
const serverPath = path.dirname(process.argv[1]); 
const homeworks = JSON.parse(fs.readFileSync(path.join(serverPath, 'static', 'homeworks.json'), 'utf-8')); 
 
const PORT = 5000; 

const server = http.createServer((req, res) => { 
    const findId = req.url.split('/')[2]; //get id homework
    //console.log(findId);
    if(req.url.includes(`/homework/${findId}`) && findId){
        let hw = homeworks.find(item => item._id === findId); //find homowork on id
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homework</title>
        <link rel="stylesheet" href="/styles/style.css">
    </head>
    <body>
        <h1 class="hw_id">Homework ID ${hw._id}</h1>
        <div class="container">
            <div class="number">Номер</div>
            <div class="title">Название</div>
            <div class="description">Описание</div>
            <div class="author">Автор</div>
            <div class="number_id">${hw.number}</div>
            <div class="title_id">${hw.title}</div>
            <div class="description_id">${hw.description}</div>
            <div class="author_id">${hw.author.first_name} ${hw.author.last_name}</div>
        </div>
    `);
    res.write(`
    </body>
    </html>
    `);
    res.end();}
    else if (req.url === '/homework' || req.url === '/homework/') { 
        res.write(` 
        <!DOCTYPE html> 
            <html lang="en"> 
            <head> 
                <meta charset="UTF-8"> 
                <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                <title>Document</title> 
            </head> 
            <body> 
                <ol> 
        `); 
        homeworks.forEach(homework => { 
            res.write(`<li><a href = "/homework/${homework._id}">${homework.title}</a></li>`); 
        }); 
 
        res.write(` 
                </ol> 
            </body> 
        </html> 
        `); 
        // res.write(homeworks); 
        res.end(); 
    } else { 
 
        const indexPath = path.join(serverPath, 'static', req.url); 
 
        fs.readFile(indexPath, (err, htmlContent) => { 
            if (err) { 
                res.statusCode = 404; 
                res.end(); 
            } 
            //console.log(`sending ${req.url} ${htmlContent.length} bytes`); 
            res.end(htmlContent); 
        }); 
    } 
}); 
 
server.listen(PORT, () => { 
    console.log('Server is running ' + PORT); 
});