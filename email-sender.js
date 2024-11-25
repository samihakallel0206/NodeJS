let sendMail=require('nodemailer')

let transporter = sendMail.createTransport({
    service: 'gmail',
    auth: {
        user: ' xxxxxxx@gmail.com',
        pass: '********** '
    }
});

let mailOptions = {
    from: 'xxxxxxx@gmail.com',
    to: 'xxxxxx@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hello World!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
