import * as env from 'config'

// internal
import { TemplateType } from '../config/config'

// valiable
const TEMPLATE_RESET: TemplateType = env.get('MAILER.TEMPLATE.RESET')
// const TEMPLATE_RESET = env.get('MAILER.TEMPLATE.RESET')
const TITLE = TEMPLATE_RESET.TITLE
const TEXT_TITLE = TEMPLATE_RESET.TEXT_TITLE
const TEXT_BTN = TEMPLATE_RESET.TEXT_BTN
const LOGO_URL = TEMPLATE_RESET.LOGO_URL
const LOGO_IMG = TEMPLATE_RESET.LOGO_IMG
const TEXT_SUBJECT = TEMPLATE_RESET.TEXT_SUBJECT
const TEXT_MESSAGE = TEMPLATE_RESET.TEXT_MESSAGE
const EMAIL_CONTACT = TEMPLATE_RESET.EMAIL_CONTACT
const EMAIL_SUPPORT = TEMPLATE_RESET.EMAIL_SUPPORT
const COMPANY = TEMPLATE_RESET.COMPANY

export const templateForgot = (url: string, name: string) => {
  return `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title> ${TITLE}${TEXT_TITLE} </title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        #outlook a {
            padding: 0;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass * {
            line-height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        p {
            display: block;
            margin: 13px 0;
        }
    </style>
    <!--[if !mso]><!-->
    <style type="text/css">
        @media only screen and (max-width:480px) {
            @-ms-viewport {
                width: 320px;
            }
            @viewport {
                width: 320px;
            }
        }
    </style>
    <!--<![endif]-->
    <!--[if mso]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
        .outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
        @media only screen and (min-width:480px) {
            .mj-column-per-100 {
                width: 100% !important;
                max-width: 100%;
            }
            .mj-column-per-50 {
                width: 50% !important;
                max-width: 50%;
            }
        }
    </style>
    <style type="text/css">
        @media only screen and (max-width:480px) {
            table.full-width-mobile {
                width: 100% !important;
            }
            td.full-width-mobile {
                width: auto !important;
            }
        }
    </style>
</head>

<body style="background-color:#EDF2F9;">
<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Reset Link </div>
<div style="background-color:#EDF2F9;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#28a7de;background-color:#28a7de;width:100%;">
        <tbody>
        <tr>
            <td>
                <!--[if mso | IE]>
                <table
                        align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                >
                    <tr>
                        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                <![endif]-->
                <div style="Margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                        <tr>
                            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;text-align:center;vertical-align:top;">
                                <!--[if mso | IE]>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">

                                    <tr>

                                        <td
                                                class="" style="vertical-align:top;width:600px;"
                                        >
                                <![endif]-->
                                <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                        <tr>
                                            <td align="center" style="font-size:0px;padding:15px 0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                    <tbody>
                                                    <tr>
                                                        <td style="width:90px;"> <a href="${LOGO_URL}" target="_blank">

                                                            <img alt="" height="auto" src="${LOGO_IMG}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;margin-bottom: 20px;" width="80">

                                                        </a> </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                    <tbody>
                                                    <tr>
                                                        <td style="width:600px;"> <a href="${LOGO_URL}" target="_blank">

                                                            <img alt="" height="auto" src="https://gallery.mailchimp.com/ef3bf10c922fc1ccc23d773aa/images/b4f61bc4-f3a0-4cec-bc63-fb3130debb42.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="600">

                                                        </a> </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
                                </td>

                                </tr>

                                </table>
                                <![endif]-->
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--[if mso | IE]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
        </tbody>
    </table>
    <!--[if mso | IE]>
    <table
            align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
        <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
    <div style="background:#28304e;background-color:#28304e;Margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#28304e;background-color:#28304e;width:100%;">
            <tbody>
            <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                    <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">

                        <tr>

                            <td
                                    class="" style="vertical-align:top;width:600px;"
                            >
                    <![endif]-->
                    <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tr>
                                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                    <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:center;color:#ffffff;"> ${TEXT_TITLE} </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!--[if mso | IE]>
                    </td>

                    </tr>

                    </table>
                    <![endif]-->
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <!--[if mso | IE]>
    </td>
    </tr>
    </table>

    <table
            align="center" border="0" cellpadding="0" cellspacing="0" class="body-section-outlook" style="width:600px;" width="600"
    >
        <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
    <div class="body-section" style="-webkit-box-shadow: 0 25px 50px rgba(8,21,66,.06); -moz-box-shadow: 0 25px 50px rgba(8,21,66,.06); box-shadow: 0 25px 50px rgba(8,21,66,.06); Margin: 0px auto; max-width: 600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
            <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                    <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">

                        <tr>
                            <td
                                    class="" width="600px"
                            >

                                <table
                                        align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                                >
                                    <tr>
                                        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                    <![endif]-->
                    <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                            <tbody>
                            <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;padding-left:15px;padding-right:15px;text-align:center;vertical-align:top;">
                                    <!--[if mso | IE]>
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">

                                        <tr>

                                            <td
                                                    class="" style="vertical-align:top;width:570px;"
                                            >
                                    <![endif]-->
                                    <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;"> ${TEXT_SUBJECT} ${name} </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;"> ${TEXT_MESSAGE}
                                                        perspiciatis. </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:300px;line-height:100%;">
                                                        <tr>
                                                            <td align="center" bgcolor="#28a7de" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#28a7de;" valign="middle">
                                                                <a href="${url}" style="background:#28a7de;color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-size:17px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;"
                                                                                                                                                                                                                                 target="_blank">
                                                                ${TEXT_BTN}
                                                            </a> </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;line-height:24px;text-align:left;color:#637381;"> ${EMAIL_CONTACT} <a href="mailto:support@softnix.co.th" style="color:#28a7de">${EMAIL_SUPPORT}</a> </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <!--[if mso | IE]>
                                    </td>

                                    </tr>

                                    </table>
                                    <![endif]-->
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]>
                    </td>
                    </tr>
                    </table>

                    </td>
                    </tr>

                    <tr>
                        <td
                                class="" width="600px"
                        >

                            <table
                                    align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                            >
                                <tr>
                                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                    <![endif]-->
                    <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                            <tbody>
                            <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;padding-left:15px;padding-right:15px;padding-top:0;text-align:center;vertical-align:top;">
                                    <!--[if mso | IE]>
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">

                                        <tr>

                                            <td
                                                    class="" style="vertical-align:top;width:570px;"
                                            >
                                    <![endif]-->
                                    <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                            <tr>
                                                <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <p style="border-top:solid 1px #DFE3E8;font-size:1;margin:0px auto;width:100%;"> </p>
                                                    <!--[if mso | IE]>
                                                    <table
                                                            align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #DFE3E8;font-size:1;margin:0px auto;width:520px;" role="presentation" width="520px"
                                                    >
                                                        <tr>
                                                            <td style="height:0;line-height:0;">
                                                                &nbsp;
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <![endif]-->
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <!--[if mso | IE]>
                                    </td>

                                    </tr>

                                    </table>
                                    <![endif]-->
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]>
                    </td>
                    </tr>
                    </table>

                    </td>
                    </tr>

                    <tr>
                        <td
                                class="" width="600px"
                        >

                            <table
                                    align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                            >
                                <tr>
                                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                    <![endif]-->
                    <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                            <tbody>
                            <tr>
                                <td style="direction:ltr;font-size:0px;padding:0 15px 0 15px;text-align:center;vertical-align:top;">
                                    
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]>
                    </td>
                    </tr>
                    </table>

                    </td>
                    </tr>

                    <tr>
                        <td
                                class="" width="600px"
                        >

                            <table
                                    align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                            >
                                <tr>
                                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                    <![endif]-->
                    <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                            <tbody>
                            <tr>
                                <td style="direction:ltr;font-size:0px;padding:20px 0;padding-left:15px;padding-right:15px;text-align:center;vertical-align:top;">
                                   
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]>
                    </td>
                    </tr>
                    </table>

                    </td>
                    </tr>

                    </table>
                    <![endif]-->
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <!--[if mso | IE]>
    </td>
    </tr>
    </table>
    <![endif]-->
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
        <tr>
            <td>
                <!--[if mso | IE]>
                <table
                        align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                >
                    <tr>
                        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                <![endif]-->
                <div style="Margin:0px auto;max-width:600px;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                        <tr>
                            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                                <!--[if mso | IE]>
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">

                                    <tr>
                                        <td
                                                class="" width="600px"
                                        >

                                            <table
                                                    align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                                            >
                                                <tr>
                                                    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                <![endif]-->
                                <div style="Margin:0px auto;max-width:600px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                        <tbody>
                                        <tr>
                                            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                                                <!--[if mso | IE]>
                                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">

                                                    <tr>

                                                        <td
                                                                class="" style="vertical-align:top;width:600px;"
                                                        >
                                                <![endif]-->
                                                <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td style="vertical-align:top;padding:0;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                                                    <tr>
                                                                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                            <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#445566;"> &copy; ${COMPANY},Ltd., All Rights Reserved. </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--[if mso | IE]>
                                                </td>

                                                </tr>

                                                </table>
                                                <![endif]-->
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
                                </td>
                                </tr>
                                </table>

                                </td>
                                </tr>

                                <tr>
                                    <td
                                            class="" width="600px"
                                    >

                                        <table
                                                align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
                                        >
                                            <tr>
                                                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
                                <![endif]-->
                                <div style="Margin:0px auto;max-width:600px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                        <tbody>
                                        <tr>
                                            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-top:0;text-align:center;vertical-align:top;">
                                                <!--[if mso | IE]>
                                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">

                                                    <tr>

                                                        <td
                                                                class="" style="width:600px;"
                                                        >
                                                <![endif]-->
                                                <div class="mj-column-per-100 outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                                                    <!--[if mso | IE]>
                                                    <table  role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                        <tr>

                                                            <td
                                                                    style="vertical-align:top;width:600px;"
                                                            >
                                                    <![endif]-->
                                                    <!-- <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                            <tbody>
                                                            <tr>
                                                                <td style="vertical-align:top;padding-right:0;">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                                                        <tr>
                                                                            <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                                                <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:bold;line-height:16px;text-align:center;color:#445566;"> <a class="footer-link" href="https://www.softnix.co.th/privacy-policy/" style="color: #888888;">Privacy</a></div>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div> -->
                                                    <!--[if mso | IE]>
                                                    </td>

                                                    </tr>
                                                    </table>
                                                    <![endif]-->
                                                </div>
                                                <!--[if mso | IE]>
                                                </td>

                                                </tr>

                                                </table>
                                                <![endif]-->
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]>
                                </td>
                                </tr>
                                </table>

                                </td>
                                </tr>

                                </table>
                                <![endif]-->
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--[if mso | IE]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
        </tbody>
    </table>
</div>
</body>

</html>

`
}
