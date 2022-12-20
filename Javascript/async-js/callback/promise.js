const paymentSucess = true;
const marks = 80;

function enroll(){
    console.log('Course enrollment is in progress..');
    
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(paymentSucess){
                resolve() //next step
            } else {
                reject('Payment failed!')
            }
    
        }, 2000);
    })
    return promise;
    
}

function progress(){

    console.log('Course is in progress!');

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve() //next task
            } else {
                reject('Your marks is not sufficient!');
            }
            
        }, 3000);
    })
    return promise;
    
}

function getCertificate(){
    console.log('Preparing your certificate..');

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Hey, you got your certificate!');
        }, 1000)
    })
    return promise;

}

/* enroll(function(){
    progress(getCertificate)
}) */

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value)
    })
    .catch(function(err){
        console.log(err)
    })