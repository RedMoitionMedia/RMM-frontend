const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Phone: ${body.phone}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const messageClient = `
    Dear ${body.name},\r\n
    \r\n
    your Message was sent successfully.\r\n
    \r\n
    Thank you for getting in contact.\r\n
    We will respond to your inquiry as soon as possible.\r\n
    \r\n
    [This is an auto-generated response. Please do not reply to this]\r\n
    \r\n
    Kind regards,\r\n
    \r\n
    Your RedRyder team
  `;

  await mail.send({
    to: `${body.email}`,
    from: "no-reply@redryder.at",
    subject: `Message sent successfully`,
    text: messageClient,
    html: messageClient.replace(/\r\n/g, "<br>"),
  });

  await mail.send({
    to: "office@redryder.at",
    from: "webContact@redryder.at",
    subject: `${body.subject}`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  });

  res.status(200).json({ status: "Ok" });
};
