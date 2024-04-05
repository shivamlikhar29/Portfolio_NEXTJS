// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import nodemailer from 'nodemailer'

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { name,email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{name}</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// const data = await resend.emails.send({
//   from: fromEmail,
//   to: [fromEmail, email],
//   subject: subject,
//   react: (
//     <>
//       <h1>{subject}</h1>
//       <p>Thank you for contacting us!</p>
//       <p>New message submitted:</p>
//       <p>{message}</p>
//     </>
//   ),
// });


// export async function POST(req, res) {
//   console.log(process.env.USERMAIL)
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {

//     let mailTransporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.USERMAIL,
//             pass: process.env.USERPASSWORD
//         }
//     });

    
//     let mailDetails = {
//        from: email,
//        to: process.env.USERMAIL,
//        subject: subject,
//        html: `<h1>${subject}</h1>
//        <p>Thank you for contacting us!</p>
//        <p>${message}</p>`
//     };
    
//     mailTransporter.sendMail(mailDetails, function(err, data) {
//        if(err) {
//            console.log(err);
//            return NextResponse.json(err);
//        } else {
//            console.log('Email sent successfully');
//            return NextResponse.json(data);
//        }
//     });


//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

 
