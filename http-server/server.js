import http from 'http';
import fs from 'fs';
import path from 'path';
import Mustache from 'mustache';
import queryString from 'query-string';
import util from 'util';
import { title } from 'process';

const serverPath = path.dirname(process.argv[1]);
const homeworksTemplatePath = path.join(serverPath, 'templates', 'homeworks.html'); // all hw
const editHomeworksTemplatePath = path.join(serverPath, 'templates', 'edit-homework.html'); // edit
const addHomeworksTemplatePath = path.join(serverPath, 'templates', 'add-homework.html'); // add
const deleteHomeworksTemplatePath = path.join(serverPath, 'templates', 'delete-homework.html'); // delete
const detailsHomeworksTemplatePath = path.join(serverPath, 'templates', 'homework-details.html'); // details
const pathToHomeworkJSON = path.join(serverPath, 'static', 'homeworks.json'); 

const homeworks = JSON.parse(fs.readFileSync(pathToHomeworkJSON, 'utf-8'));
homeworks.forEach(hw => {
    delete hw.results;
    delete hw.author;
});

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);
const PORT = 5000;

function getId(){
    let id = 0;
    return function(){
        return ++id;
    }
}
let hwId = getId();

const server = http.createServer(async (req, res) => {
    console.log(req.url);
    const homeworkId = req.url.split('/')[2];
    const homework = homeworks.find(hw => hw._id === homeworkId);
    const idHomework = homeworks.findIndex(hw => hw._is === homeworkId);

    if (/^\/homework\/?$/.test(req.url)) {
        let template = await readFilePromise(homeworksTemplatePath, 'utf-8');
        const output = Mustache.render(template, { homeworks });
        res.end(output);
        // add
    } else if (req.url.startsWith('/add-homework')) {
        if(req.method === 'POST') {
            let data = '';
            console.log('Starting...');
            req.on('data', (chunk) => {
                console.log('Getting data...', chunk);
                data += chunk;
            });
            req.on('end', () => {
                console.log('Finished');
                console.log(data);
                const parsed = queryString.parse(data);
                parsed._id = '6121f3c' + hwId();
                console.log(parsed);
                homeworks.unshift(parsed); // add to start
                fs.writeFile(pathToHomeworkJSON, JSON.stringify(homeworks), 'utf-8', (err) => {
                    if (err) {
                        res.statusCode = 400;
                        res.end();
                    }
                    res.end('Successfully');
                });
            });    
        } else {
            let template = await readFilePromise(addHomeworksTemplatePath, 'utf-8');
            const output = Mustache.render(template, {
                number: ``,
                title: ``,
                description: ``,
            });
            res.end(output);
        }
        // delete 
    } else if (req.url.startsWith('/delete-homework') && homeworkId) {
        if(req.method === 'POST') {
            homeworks.splice(idHomework, 1); // delete 1 hw
                fs.writeFile(pathToHomeworkJSON, JSON.stringify(homeworks), 'utf-8', (err) => {
                    if (err) {
                        res.statusCode = 400;
                        res.end();
                    }
                    res.writeHead(302, {'Location': '/homework'});
                    res.end('Successfully');
                });  
        }
            let template = await readFilePromise(deleteHomeworksTemplatePath, 'utf-8');
            const output = Mustache.render(template, {
                id: homework._id,
                number: homework.number,
                title: homework.title,
                description: homework.description,
            });
            res.end(output);
    } else if (req.url.startsWith('/homework-details') && homeworkId) {
        let template = await readFilePromise(detailsHomeworksTemplatePath, 'utf-8');
        const output = Mustache.render(template, {
            _id: homework._id,
            title: homework.title,
            number: homework.number,
            description: homework.description,
        });
        res.end(output);
    } else if (req.url.includes('.html') || req.url.includes('.css')) {
        try {
            const indexPath = path.join(serverPath, 'static', req.url);
            const fileContent = await readFilePromise(indexPath);

            console.log(`sending ${req.url} ${fileContent.length} bytes`);
            res.end(fileContent);
        } catch(err) {
            res.statusCode = 400;
            res.end(err);
        }
        // edit homework
    } else if (req.url.startsWith('/edit-homework') && homeworkId) {
        if(req.method === 'POST') {
            let data = '';
            console.log('Starting...');
            req.on('data', (chunk) => {
                console.log('Getting data...', chunk);
                data += chunk;
            });
            req.on('end', () => {
                console.log('Finished');
                console.log(data);
                const parsed = queryString.parse(data);
                console.log(parsed);
                homework._id = parsed._id;
                homework.title = parsed.title;
                homework.number = parsed.number;
                homework.description = parsed.description;

                fs.writeFile(pathToHomeworkJSON, JSON.stringify(homeworks), 'utf-8', (err) => {
                    if (err) {
                        res.statusCode = 400;
                        res.end();
                    }

                    fs.readFile(editHomeworksTemplatePath, 'utf-8', (err, template) => {
                        if (err) {
                            res.statusCode = 400;
                            res.end();
                        } else {
                            const output = Mustache.render(template, {
                                _id: homework._id,
                                title: homework.title,
                                number: homework.number,
                                description: homework.description,
                             });
                            res.end(output);
                        }
                    });
                });
            });

        } else {
            fs.readFile(editHomeworksTemplatePath, 'utf-8', (err, template) => {
                if (err) {
                    res.statusCode = 400;
                    res.end();
                } else {
                    const output = Mustache.render(template, {
                        title: homework.title,
                        number: homework.number,
                        description: homework.description,
                        _id: homework._id,
                     });
                    res.end(output);
                }
            });
        }
    } else  {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log('Server is running ' + PORT);
});