export interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  sitesCount: string;
  workforceSize: string;
}

export function generateDemoConfirmationEmailHtml(data: DemoFormData): string {
  const { name, email, phone, company, sitesCount, workforceSize } = data;
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your MR Facility Demo Request is Confirmed</title>
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; }
      .content-padding { padding: 24px 18px !important; }
      .two-column { width: 100% !important; display: block !important; }
      .mobile-center { text-align: center !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #F1F5F9;">
  <!-- Preheader text (invisible preview text in inbox) -->
  <div style="display: none; font-size: 1px; color: #F1F5F9; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Your personalized MR Facility Enterprise Demo request for ${company} is confirmed. A facility specialist will connect with you shortly.
  </div>

  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F1F5F9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Email Container (Max 600px) -->
        <table border="0" cellpadding="0" cellspacing="0" width="600" class="email-container" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08); border: 1px solid #E2E8F0;">
          
          <!-- Top Brand Accent Bar (Gradient from Navy to Green) -->
          <tr>
            <td height="6" style="background: linear-gradient(90deg, #151B6B 0%, #00A651 50%, #151B6B 100%); font-size: 0px; line-height: 0px;">&nbsp;</td>
          </tr>

          <!-- Header Section with Logo & Brand Name -->
          <tr>
            <td style="background-color: #0F172A; padding: 28px 36px; text-align: left; border-bottom: 1px solid #1E293B;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: #151B6B; border: 1px solid #00A651; border-radius: 8px; padding: 6px 12px; vertical-align: middle;">
                          <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 17px; font-weight: 900; color: #FFFFFF; letter-spacing: 1px;">MR FACILITY</span>
                        </td>
                      </tr>
                    </table>
                    <p style="margin: 6px 0 0 0; font-size: 11px; color: #94A3B8; letter-spacing: 0.5px; text-transform: uppercase; font-weight: 600;">
                      Intelligent Facility Management Ecosystem
                    </p>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; background-color: rgba(0, 166, 81, 0.15); border: 1px solid #00A651; color: #00E676; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px;">
                      ● Live Sync
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Body Content -->
          <tr>
            <td class="content-padding" style="padding: 36px 36px 28px 36px; background-color: #FFFFFF;">
              
              <!-- Confirmation Badge -->
              <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                <tr>
                  <td style="background-color: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 24px; padding: 6px 14px;">
                    <span style="color: #00A651; font-size: 12px; font-weight: 700; display: inline-block;">
                      ✓ Demo Request Confirmed
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Greeting -->
              <h1 style="margin: 0 0 12px 0; font-size: 24px; font-weight: 800; color: #0F172A; line-height: 32px;">
                Hi ${name}, your demo request is confirmed!
              </h1>
              
              <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 24px; color: #475569;">
                Thank you for your interest in <strong style="color: #151B6B;">MR Facility</strong>. We have received your enterprise demo request for <strong style="color: #0F172A;">${company}</strong>. Our facility engineering team is currently preparing a live demonstration tailored specifically to your organization's operational scope.
              </p>

              <!-- Submission Overview Card -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; margin-bottom: 28px; overflow: hidden;">
                <tr>
                  <td style="background-color: #151B6B; padding: 12px 20px;">
                    <span style="color: #FFFFFF; font-size: 12px; font-weight: 800; letter-spacing: 0.8px; text-transform: uppercase;">
                      Your Request Summary
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="38%" style="padding: 6px 0; font-size: 13px; color: #64748B; font-weight: 600;">Contact Name:</td>
                        <td width="62%" style="padding: 6px 0; font-size: 13px; color: #0F172A; font-weight: 700;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #64748B; font-weight: 600;">Organization:</td>
                        <td style="padding: 6px 0; font-size: 13px; color: #0F172A; font-weight: 700;">${company}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #64748B; font-weight: 600;">Work Email:</td>
                        <td style="padding: 6px 0; font-size: 13px; color: #151B6B; font-weight: 700;">${email}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #64748B; font-weight: 600;">Phone Number:</td>
                        <td style="padding: 6px 0; font-size: 13px; color: #0F172A; font-weight: 600;">${phone}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #64748B; font-weight: 600;">Deployment Sites:</td>
                        <td style="padding: 6px 0; font-size: 13px; color: #00A651; font-weight: 700;">${sitesCount}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 13px; color: #64748B; font-weight: 600;">Workforce Scale:</td>
                        <td style="padding: 6px 0; font-size: 13px; color: #0F172A; font-weight: 600;">${workforceSize}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What to Expect Next (Step-by-Step) -->
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 800; color: #151B6B; text-transform: uppercase; letter-spacing: 0.5px;">
                What Happens Next
              </h2>

              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 28px;">
                <tr>
                  <td style="vertical-align: top; width: 36px; padding-bottom: 14px;">
                    <div style="width: 28px; height: 28px; background-color: #151B6B; color: #FFFFFF; font-size: 13px; font-weight: 800; border-radius: 50%; text-align: center; line-height: 28px;">1</div>
                  </td>
                  <td style="vertical-align: top; padding-bottom: 14px; padding-left: 10px;">
                    <strong style="color: #0F172A; font-size: 14px;">Specialist Outreach within 24 Hours</strong>
                    <p style="margin: 3px 0 0 0; font-size: 13px; color: #64748B; line-height: 20px;">
                      A dedicated solutions specialist will contact you via email or phone to confirm your preferred walkthrough date and time.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="vertical-align: top; width: 36px; padding-bottom: 14px;">
                    <div style="width: 28px; height: 28px; background-color: #00A651; color: #FFFFFF; font-size: 13px; font-weight: 800; border-radius: 50%; text-align: center; line-height: 28px;">2</div>
                  </td>
                  <td style="vertical-align: top; padding-bottom: 14px; padding-left: 10px;">
                    <strong style="color: #0F172A; font-size: 14px;">Live Interactive Platform Demonstration</strong>
                    <p style="margin: 3px 0 0 0; font-size: 13px; color: #64748B; line-height: 20px;">
                      We will walk you through live facial recognition attendance, GPS geofencing radius validation, salary calculation engines, and multi-site incident reporting.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="vertical-align: top; width: 36px;">
                    <div style="width: 28px; height: 28px; background-color: #151B6B; color: #FFFFFF; font-size: 13px; font-weight: 800; border-radius: 50%; text-align: center; line-height: 28px;">3</div>
                  </td>
                  <td style="vertical-align: top; padding-left: 10px;">
                    <strong style="color: #0F172A; font-size: 14px;">Custom Deployment Roadmap</strong>
                    <p style="margin: 3px 0 0 0; font-size: 13px; color: #64748B; line-height: 20px;">
                      Receive an exact pilot rollout plan and customized onboarding schedule configured to your specific site count.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Call to Action Button -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td align="center" style="background: linear-gradient(135deg, #151B6B 0%, #1e268a 100%); border-radius: 12px; padding: 24px 20px; text-align: center;">
                    <h3 style="margin: 0 0 8px 0; color: #FFFFFF; font-size: 18px; font-weight: 800;">
                      Explore The Platform Online
                    </h3>
                    <p style="margin: 0 0 16px 0; color: #CBD5E1; font-size: 13px; line-height: 20px; max-width: 440px;">
                      In the meantime, visit our desktop administrative portal to learn more about enterprise-grade workforce and site management.
                    </p>
                    <div>
                      <!--[if mso]>
                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://app.mrfacility.in/" style="height:44px;v-text-anchor:middle;width:240px;" arcsize="18%" stroke="f" fillcolor="#00A651">
                        <w:anchorlock/>
                        <center style="color:#ffffff;font-family:sans-serif;font-size:14px;font-weight:bold;">Access MR Facility Portal &rarr;</center>
                      </v:roundrect>
                      <![endif]-->
                      <a href="https://app.mrfacility.in/" target="_blank" style="mso-hide:all; display: inline-block; background-color: #00A651; color: #FFFFFF; font-size: 14px; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 166, 81, 0.35);">
                        Access MR Facility Portal &rarr;
                      </a>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Contact & Support Note -->
              <p style="margin: 0; font-size: 13px; line-height: 22px; color: #64748B;">
                Need to make immediate changes to your request? Reply directly to this email or write to us at <a href="mailto:contact@mrfacility.com" style="color: #151B6B; font-weight: 700; text-decoration: underline;">contact@mrfacility.com</a>.
              </p>

            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="background-color: #0F172A; padding: 28px 36px; text-align: center; border-top: 1px solid #1E293B;">
              <p style="margin: 0 0 10px 0; font-size: 13px; color: #E2E8F0; font-weight: 700;">
                MR Facility &bull; Enterprise Operations Platform
              </p>
              
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #94A3B8; line-height: 18px;">
                Operated by <strong style="color: #CBD5E1;">TOT Hygiene Private Limited</strong><br />
                Designed, Developed & Maintained by <strong style="color: #CBD5E1;">Brainbric Innovations Private Limited</strong>
              </p>

              <div style="margin: 12px 0; font-size: 11px; color: #64748B;">
                <span style="color: #94A3B8;">&copy; ${currentYear} TOT Hygiene Private Limited. All rights reserved.</span>
              </div>

              <p style="margin: 0; font-size: 10px; color: #64748B; line-height: 16px;">
                This is an automated confirmation sent regarding your demo request on mrfacility.com.<br />
                Your data is handled securely under AES-256 encryption according to our Privacy Policy.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateAdminLeadNotificationEmailHtml(data: DemoFormData): string {
  const { name, email, phone, company, sitesCount, workforceSize } = data;
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>New Enterprise Demo Request - ${company}</title>
</head>
<body style="margin:0; padding:20px; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color:#F8FAFC; color:#0F172A;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; margin:0 auto; background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; overflow:hidden;">
    <tr>
      <td style="background:#151B6B; padding:20px; color:#FFFFFF;">
        <h2 style="margin:0; font-size:18px; font-weight:800;">🚀 New Enterprise Demo Request</h2>
        <p style="margin:4px 0 0; font-size:12px; color:#A7F3D0;">MR Facility Lead Notification</p>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">
        <p style="font-size:14px; margin-top:0;">A new prospective client has requested a platform walkthrough:</p>
        <table border="0" cellpadding="6" cellspacing="0" width="100%" style="border:1px solid #E2E8F0; border-radius:8px; font-size:13px;">
          <tr style="background:#F1F5F9;"><td width="35%"><strong>Prospect Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Company</strong></td><td><strong>${company}</strong></td></tr>
          <tr style="background:#F1F5F9;"><td><strong>Work Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Phone Number</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
          <tr style="background:#F1F5F9;"><td><strong>Number of Sites</strong></td><td>${sitesCount}</td></tr>
          <tr><td><strong>Workforce Scale</strong></td><td>${workforceSize}</td></tr>
          <tr style="background:#F1F5F9;"><td><strong>Received At</strong></td><td>${new Date().toLocaleString()}</td></tr>
        </table>
        <div style="margin-top:20px; text-align:center;">
          <a href="mailto:${email}?subject=Your%20MR%20Facility%20Enterprise%20Demo" style="display:inline-block; padding:10px 20px; background:#00A651; color:#FFFFFF; text-decoration:none; font-weight:700; font-size:13px; border-radius:6px;">
            Reply to ${name} &rarr;
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background:#0F172A; padding:14px; text-align:center; font-size:11px; color:#94A3B8;">
        MR Facility Lead Dispatcher &bull; TOT Hygiene Private Limited &bull; ${currentYear}
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
