var nodemailer = require('nodemailer')
const config = require('../config')

exports.mailService = async (props) => {
  let content = ``
  console.log(props)
  if (props.type === 'password-reset') {
    content = `
	<!DOCTYPE html>
	<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
	</head>
	<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;">
		<tbody>
			<tr>
				<td>
					<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 500px;" width="500">
						<tbody>
							<tr>
								<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 15px; padding-bottom: 20px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
									<table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
										<tr>
											<td style="padding-bottom:5px;padding-left:5px;padding-right:5px;width:100%;">
												<div align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/2966/gif-resetpass.gif" style="display: block; height: auto; border: 0; width: 350px; max-width: 100%;" width="350" alt="reset-password" title="hello"></div>
											</td>
										</tr>
									</table>
									<table class="heading_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
										<tr>
											<td style="text-align:center;width:100%;">
												<h1 style="margin: 0; color: #393d47; direction: ltr; font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 25px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Forgot your password?</strong></h1>
											</td>
										</tr>
									</table>
									<table class="text_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
										<tr>
											<td>
												<div style="font-family: Tahoma, Verdana, sans-serif">
													<div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #393d47; line-height: 1.5;">
														<p style="margin: 0; font-size: 14px; text-align: center; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px;"><span style="font-size:14px;"><span style>Not to worry, we got you! </span><span style>Let’s get you a new password. Please change your password after login.</span></span></p>
													</div>
												</div>
											</td>
										</tr>
									</table>
									<table class="button_block" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
										<tr>
											<td>
												<div align="center">
													<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.yourwebsite.com" style="height:58px;width:272px;v-text-anchor:middle;" arcsize="35%" strokeweight="0.75pt" strokecolor="#FFC727" fillcolor="#ffc727"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#393d47; font-family:Tahoma, Verdana, sans-serif; font-size:18px"><![endif]--><a href="http://localhost:3000/reset" target="_blank" style="text-decoration:none;display:inline-block;color:#393d47;background-color:#ffc727;border-radius:20px;width:auto;border-top:1px solid #FFC727;border-right:1px solid #FFC727;border-bottom:1px solid #FFC727;border-left:1px solid #FFC727;padding-top:10px;padding-bottom:10px;font-family:Tahoma, Verdana, Segoe, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:50px;padding-right:50px;font-size:18px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; font-family: Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 32px;"><span style="font-size: 18px; line-height: 36px;" data-mce-style="font-size: 18px; line-height: 36px;"><strong>${props.password}</strong></span></span></span></a>
													<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
												</div>
											</td>
										</tr>
									</table>
									<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
										<tr>
											<td style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
												<div style="font-family: Tahoma, Verdana, sans-serif">
													<div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Tahoma, Verdana, Segoe, sans-serif; text-align: center; mso-line-height-alt: 18px; color: #393d47; line-height: 1.5;"><span style="font-size:13px;">If you didn’t request to change your password, simply ignore this email.</span></div>
												</div>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
	</body>
	</html>
	`
  }  else {
    content ='Please ignore this email'
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.sendEmailAddress,
      pass: config.sendEmailPassword,
    },
  })

  if (props.email) {
    let info = await transporter.sendMail({
      from: `"Your email name" <${config.sendEmailAddress}>`,
      to: props.email,
      subject: props.subject,
      html: content,
    })

    console.log('Message sent: %s', info.messageId)
  }
}
