const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Server is running' });
});

// Contact form API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.'
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    body {
      margin: 0;
      padding: 0;
      background: #eef3fb;
      font-family: Arial, Helvetica, sans-serif;
      color: #111827;
    }

    .email-wrapper {
      width: 100%;
      background: #eef3fb;
      padding: 32px 14px;
    }

    .email-card {
      max-width: 620px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 22px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
      box-shadow: 0 18px 50px rgba(15, 23, 42, 0.12);
    }

    .top-bar {
      background: linear-gradient(135deg, #0f172a, #111827);
      padding: 30px 34px;
      color: #ffffff;
    }

    .brand {
      font-size: 30px;
      font-weight: 900;
      letter-spacing: -1px;
      margin-bottom: 8px;
    }

    .brand span {
      color: #22c55e;
    }

    .subtitle {
      color: #cbd5e1;
      font-size: 15px;
      line-height: 1.5;
    }

    .content {
      padding: 36px 34px 30px;
    }

    .badge {
      display: inline-block;
      background: #dcfce7;
      color: #166534;
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 800;
      margin-bottom: 18px;
    }

    h1 {
      margin: 0;
      font-size: 34px;
      line-height: 1.18;
      color: #0f172a;
      letter-spacing: -1px;
    }

    .intro {
      margin: 16px 0 28px;
      font-size: 16px;
      line-height: 1.7;
      color: #64748b;
    }

    .detail-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 18px 20px;
      margin-bottom: 14px;
    }

    .label {
      font-size: 12px;
      font-weight: 900;
      color: #2563eb;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 8px;
    }

    .value {
      font-size: 17px;
      line-height: 1.6;
      color: #111827;
      word-break: break-word;
    }

    .email-link {
      color: #2563eb;
      text-decoration: none;
      font-weight: 700;
    }

    .message-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-left: 5px solid #2563eb;
      border-radius: 16px;
      padding: 20px;
      margin-top: 14px;
    }

    .reply-btn {
      display: inline-block;
      margin-top: 28px;
      background: linear-gradient(135deg, #22c55e, #14b8a6);
      color: #ffffff !important;
      text-decoration: none;
      font-size: 15px;
      font-weight: 900;
      padding: 15px 24px;
      border-radius: 999px;
      box-shadow: 0 10px 24px rgba(20, 184, 166, 0.28);
    }

    .footer {
      background: #f8fafc;
      padding: 20px 34px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
      color: #64748b;
      font-size: 13px;
      line-height: 1.6;
    }

    .footer strong {
      color: #0f172a;
    }

    @media only screen and (max-width: 600px) {
      .email-wrapper {
        padding: 18px 8px;
      }

      .top-bar,
      .content,
      .footer {
        padding-left: 24px;
        padding-right: 24px;
      }

      .brand {
        font-size: 26px;
      }

      h1 {
        font-size: 30px;
      }

      .value {
        font-size: 16px;
      }
    }
  </style>
</head>

<body>
  <div class="email-wrapper">
    <div class="email-card">

      <div class="top-bar">
        <div class="brand">&lt;Rakesh <span>05</span> /&gt;</div>
        <div class="subtitle">
          Portfolio Contact Notification
        </div>
      </div>

      <div class="content">
        <div class="badge">New message received</div>

        <h1>New Opportunity Message</h1>

        <p class="intro">
          Someone submitted your portfolio contact form. Review the details below and reply directly if needed.
        </p>

        <div class="detail-box">
          <div class="label">Name</div>
          <div class="value">${name}</div>
        </div>

        <div class="detail-box">
          <div class="label">Email</div>
          <div class="value">
            <a class="email-link" href="mailto:${email}">${email}</a>
          </div>
        </div>

        <div class="detail-box">
          <div class="label">Subject</div>
          <div class="value">${subject}</div>
        </div>

        <div class="message-box">
          <div class="label">Message</div>
          <div class="value">${message}</div>
        </div>

        <a class="reply-btn" href="mailto:${email}?subject=Reply from Rakesh Portfolio">
          Reply to ${name}
        </a>
      </div>

      <div class="footer">
        Sent from <strong>Rakesh Portfolio Website</strong><br />
        This message was generated from your custom contact form.
      </div>

    </div>
  </div>
</body>
</html>
`;

    await transporter.sendMail({
      from: `"Rakesh Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Portfolio Message - ${subject}`,
      html: htmlTemplate
    });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully.'
    });

  } catch (error) {
    console.error('Email Error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to send message.'
    });
  }
});

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Thank you page
app.get('/thank-you.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'thank-you.html'));
});

app.listen(PORT, () => {
  console.log(`Live: http://localhost:${PORT}`);
});