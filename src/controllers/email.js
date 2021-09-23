const nodemailer = require('nodemailer')
const userModel = require('../models/User')
emailCtrl = {}

emailCtrl.sendTestEmail = async (req,res) =>{
nodemailer.createTestAccount((err, account) =>{
    const htmlEmail = `
    <h2>Email enviado automaticamente desde Rent_A_Car</h2>
    <h3>Gracias ${req.body.username} por crearte  una cuenta en nuestro sitio ... Active las notificaciones en su cuenta para recibir notificaciones de ofertas</h3>
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
        from: 'Rent_A_Car.Cuba',
        to: req.body.email,
        replyTo: '0rentacar.cu@gmail.com',
        subject: req.body.asunto,
        text: req.body.mensaje,
        html:htmlEmail
    };

   await transporter.sendMail(mailOptions,(err,info)=>{
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
    const {car,email,asunto,mensaje,rent} = req.body
    nodemailer.createTestAccount((err, account) =>{
        const htmlEmail = `
        <p>Email enviado automaticamente desde Rent_A_Car</p>
         <h2>Datos de la reserva :</h2>
         <img src=${car.imageUrl} alt="" witdh=${200}/>
         <h3>Marca : ${car.brand} ...Modelo : ${car.model}</h3>
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
    
        await transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
               res.json({err})
            }
            else{
                res.json("sendd")
            }
        })
    })
    }

    emailCtrl.sendEmailWorkConfirmed = async (req,res) =>{
        const {name,email} = req.body
        nodemailer.createTestAccount((err, account) =>{
            const htmlEmail = `
            <p>Email enviado automaticamente desde Rent_A_Car</p>
             <h2>Estimado ${name} tenemos el placer de informarle que su petición de trabajo como chofer de la empresa ha sido aceptada</h2>
             <h3>Accese a su cuenta en nuestro sitio web y aparecerá una nueva opcion en la barra de navegacion en la que podrá ver sus estadisticas y los dias que tiene pendiente un trabajo</h3>
           
            <h3>Gracias por usar nuestro servicio y Bienvenido </h3>
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
                subject: "Felicitaciones",
                text: '',
                html:htmlEmail
            };
        
            await transporter.sendMail(mailOptions,(err,info)=>{
                if(err){
                   res.json({err})
                }
                else{
                    res.json("send")
                }
            })
        })
        }
    emailCtrl.sendEmailWorkCanceled = async (req,res) =>{
        const {name,email,exp} = req.body
        nodemailer.createTestAccount((err, account) =>{
            const htmlEmail = `
            <p>Email enviado automaticamente desde Rent_A_Car</p>
             <h2>Estimado ${name} lamentamos informarle que su petición de trabajo como chofer de la empresa ha sido rechazada</h2>
             <h3>Razón :</h3>
             <p>${exp}</p>
           
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
                subject: "Solicitación rechazada",
                text: '',
                html:htmlEmail
            };
        
            await transporter.sendMail(mailOptions,(err,info)=>{
                if(err){
                   res.json({err})
                }
                else{
                    res.json("send")
                }
            })
        })
        }
    emailCtrl.sendNotificationForm = async (req,res) =>{
       
        const usersComercial = await userModel.find({role:"comercial"})
        var emailList = []
        usersComercial.forEach(user => {
            user.role == "comercial" && emailList.push(user.email)
        });

        nodemailer.createTestAccount((err, account) =>{
            const htmlEmail = `
            <p>Email enviado automaticamente desde Rent_A_Car</p>
             <h2>Se ha registrado una nueva petición de chofer en el sistema. Accese con su cuenta comercial y responda lo antes posible </h2>
            
           
           
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
                to: emailList,
                replyTo: '0rentacar.cu@gmail.com',
                subject: "Nueva petición registrada",
                text: '',
                html:htmlEmail
            };
        
            await  transporter.sendMail(mailOptions,(err,info)=>{
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