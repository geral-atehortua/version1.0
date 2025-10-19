import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Configuración del transportador SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.mi.com.co",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true para puerto 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Configuración del correo
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || "contacto@sitemaestro.com",
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      text: `
        Nuevo mensaje de contacto
        
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || "No proporcionado"}
        Mensaje: ${message}
      `,
    }

    // Enviar el correo
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Correo enviado exitosamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 })
  }
}
