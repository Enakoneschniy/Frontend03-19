'use strict';


const btn = document.getElementById('btn');
btn.addEventListener('click', onClick);
let counter = 1;

function onClick(e) {
    if (counter >= 10) {
        btn.removeEventListener('click', onClick);
    }
    e.target.innerText = `Click (${counter++})`;
}

$('.container').on('click', '.btn1', function (e) {
    console.log(e.target);
});
$('#add').click(e => {
    $('.container').append('<button class="btn1">jQuery Click (3)</button>')
});


function install(diskNum, cbFn) {
    console.log(`Install ${diskNum} disk`);
    setTimeout(() => {
        console.log(`Disk ${diskNum} installed`);
        cbFn(diskNum + 1);
    }, 1500);
}

function propmtDisk(diskNum, cbFn) {
    console.log(`Put ${diskNum}`);
    setTimeout(() => {
        cbFn(diskNum);
    }, 1000);
}

/*propmtDisk(1, function (diskNum) {
    install(diskNum, function (diskNum) {
        propmtDisk(diskNum, function (diskNum) {
            install(diskNum, function (diskNum) {
                propmtDisk(diskNum, function (diskNum) {
                    install(diskNum, function (diskNum) {
                        console.log('Finish');
                    })
                });
            })
        });
    })
});*/


function installPromise(diskNum) {
    return new Promise((resolve, reject) => {
        console.log(`Install ${diskNum} disk`);
        setTimeout(() => {
            if(Math.random() >= 0.5) {
                console.log(`Disk ${diskNum} installed`);
                resolve(diskNum  + 1);
            } else {
                reject('error');
            }
        }, 1500);
    });

}

function propmtDiskPromise(diskNum) {
    return new Promise((resolve, reject) => {
        console.log(`Put ${diskNum}`);
        setTimeout(() => {
            if(Math.random() >= 0.5) {
                resolve(diskNum);
            } else {
                reject('error');
            }
        }, 1000);
    });
}
/*propmtDiskPromise(1)
    .then(installPromise)
    .then(propmtDiskPromise)
    .then(installPromise)
    .then(propmtDiskPromise)
    .then(installPromise)
    .then(function () {
        console.log('Finish Promise');
    })
    .catch(function (error) {
        console.log(error);
    });*/

async function start() {
    try {
        let diskNum = await propmtDiskPromise(1);
        diskNum = await installPromise(diskNum);
        diskNum = await propmtDiskPromise(diskNum);
        diskNum = await installPromise(diskNum);
        await propmtDiskPromise(diskNum);
        console.log('Finish Async');
    } catch (error) {
        console.error(error)
    } finally {
        console.info('finally')
    }
}
start();

function divide(a, b) {
    if(b === 0) {
        throw new Error('Divide by zero!');
    }
    return a / b;
}

try {
    console.log(divide(1, 0));
    console.log(divide(1, 4));
} catch (e) {
    console.error(e.message);
}







