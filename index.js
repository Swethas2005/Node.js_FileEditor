const fs = require('fs');
const path = require('path');

// Retrieve the command line arguments
const operation = process.argv[2];
const filePath = process.argv[3];
const content = process.argv[4];

// Switch case to handle different file operations based on the command
switch (operation) {
    case 'read':
        readFile(filePath);
        break;
    case 'delete':
        deleteFile(filePath);
        break;
    case 'create':
        createFile(filePath);
        break;
    case 'append':
        appendToFile(filePath, content);
        break;
    case 'rename':
        renameFile(filePath, content);
        break;
    case 'list':
        listDirectory(filePath);
        break;
    default:
        console.log(`Invalid operation '${operation}'`);
}

// Function to read a file
function readFile(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
        } else {
            console.log(data);
        }
    });
}

// Function to delete a file
function deleteFile(file) {
    fs.unlink(file, (err) => {
        if (err) {
            console.error(`Error deleting file: ${err.message}`);
        } else {
            console.log(`File '${file}' deleted`);
        }
    });
}

// Function to create a file
function createFile(file) {
    fs.writeFile(file, '', (err) => {
        if (err) {
            console.error(`Error creating file: ${err.message}`);
        } else {
            console.log(`File '${file}' created`);
        }
    });
}

// Function to append content to a file
function appendToFile(file, content) {
    fs.appendFile(file, content + '\n', (err) => {
        if (err) {
            console.error(`Error appending to file: ${err.message}`);
        } else {
            console.log(`Content appended to the file '${file}'`);
        }
    });
}

// Function to rename a file
function renameFile(oldFile, newFile) {
    fs.rename(oldFile, newFile, (err) => {
        if (err) {
            console.error(`Error renaming file: ${err.message}`);
        } else {
            console.log(`File '${oldFile}' renamed to '${newFile}'`);
        }
    });
}

// Function to list directory contents
function listDirectory(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error listing directory: ${err.message}`);
        } else {
            console.log(files.join('\n'));
        }
    });
}
