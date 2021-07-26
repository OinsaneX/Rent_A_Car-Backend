const nodemailer = require('nodemailer')
emailCtrl = {}

emailCtrl.sendTestEmail = async (req,res) =>{
nodemailer.createTestAccount((err, account) =>{
    const htmlEmail = `
    <h2>Email enviado automaticamente desde Rent_A_Car</h2>
    <h3>Gracias por crearte ${req.body.username} una cuenta en nuestro sitio ... Active las notificaciones en su cuenta para recibir notificaciones de ofertas</h3>
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


emailCtrl.sendEmailConfirm = async (req,res) =>{
    const {email,asunto,mensaje,rent} = req.body
    nodemailer.createTestAccount((err, account) =>{
        const htmlEmail = `
        <p>Email enviado automaticamente desde Rent_A_Car</p>
         <h2>Datos de la reserva :</h2>
         <h3>Fecha de recogida : ${new Date(rent.pickUp).getDate()}/${new Date(rent.pickUp).getMonth()+1}/${new Date(rent.pickUp).getFullYear()}</h3>
         <h3>Fecha de entrega : ${new Date(rent.dropOff).getDate()}/${new Date(rent.dropOff).getMonth()+1}/${new Date(rent.dropOff).getFullYear()}</h3>  
         <h3>Lugar de recogida : ${rent.location}</h3>
         <h3>Precio : ${rent.price}</h3>
         <h3>Hora de recogida : ${rent.pickHour<13 ? `${rent.pickHour} AM` : `${rent.pickHour} PM`}</h3>
         <h3>Hora de entrega : ${rent.dropHour<13 ? `${rent.dropHour} AM` : `${rent.dropHour} PM`}</h3>

        <h3>Gracias por usar nuestro servicio .Para confirmar su reserva haga click <a href="https://rent-a-car-zeta.vercel.app/rent/confirm/${rent._id}">aqui</a></h3>
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
            to: email,
            replyTo: '0rentacar.cu@gmail.com',
            subject: asunto,
            text: mensaje,
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