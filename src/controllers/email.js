const nodemailer = require('nodemailer')
emailCtrl = {}

emailCtrl.sendTestEmail = async (req,res) =>{
nodemailer.createTestAccount((err, account) =>{
    const htmlEmail = `
    <h2>Email enviado automaticamente desde Rent_A_Car</h2>
    <img src="https://th.bing.com/th/id/R.fac273276de2be63dece6b444aeefb86?rik=fLhDXMNwvYNiaQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f--d8w6Xaxe9M%2fVeO-YpZoezI%2fAAAAAAAADXI%2fjqZRfnoIWH8%2fs1600%2frent-a-car-compressed.jpg&ehk=aZSX6iRRM7QEgwQr1DiKWIzLyjSMnJbnEoC2xvP7%2bNg%3d&risl=&pid=ImgRaw" width="200" alt="" />
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