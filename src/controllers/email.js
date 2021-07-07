const nodemailer = require('nodemailer')
emailCtrl = {}

emailCtrl.sendTestEmail = async (req,res) =>{
nodemailer.createTestAccount((err, account) =>{
    const htmlEmail = `
    <h2>Email enviado automaticamente desde Rent_A_Car</h2>
    <h3>Gracias por crearte una cuenta en nuestro sitio ... Active las notificaciones en su cuenta para recibir notificaciones de ofertas</h3>
    `;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:587,
        auth: {
            user: '0rentacar.cu@gmail.com',
            pass: 'm!FQYWdCD6WYhg6'
        }
    });

    let mailOptions = {
        from: '0rentacar.cu@gmail.com',
        to: req.body.email,
        replyTo: '0rentacar.cu@gmail.com',
        subject: req.body.asunto,
        text: req.body.mensaje,
        html:htmlEmail
    };

    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
           res.json({err})
        }
        else{
            res.json("send")
        }
    })
})
}

module.exports = emailCtrl