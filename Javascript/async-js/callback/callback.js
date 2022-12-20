const paymentSucess = true;
const marks = 70;

function enroll(callback){
    console.log('Course enrollment is in progress..');
    setTimeout(function(){
        if(paymentSucess){
            callback() //next step
        } else {
            console.log('Payment failed!')
        }

    }, 2000);
}

function progress(callback){

    console.log('Course is in progress!');

    setTimeout(function(){
        if(marks >= 80){
            callback() //next task
        } else {
            console.log('Your marks is not sufficient!');
        }
        
    }, 3000);
}

function getCertificate(){
    console.log('Preparing your certificate..');

    setTimeout(function(){
        console.log('Hey, you got your certificate!');
    }, 5000)
}

enroll(function(){
    progress(getCertificate)
})
