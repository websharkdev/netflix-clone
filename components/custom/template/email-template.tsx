import * as React from "react";

interface EmailTemplateProps {
  name: string;
  link: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  link,
  name,
}) => (
  <div style={{ margin: 0 }}>
    <table
      align="center"
      width="100%"
      border={0}
      cellPadding="0"
      cellSpacing="0"
      role="presentation"
      style={{
        maxWidth: "600px",
        minWidth: "300px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0.5rem",
      }}
    >
      <tbody>
        <tr style={{ width: "100%" }}>
          <td>
            <h3
              style={{
                margin: "0 0 12px 0",
                textAlign: "left",
                color: "#111827",
                fontSize: "24px",
                lineHeight: "38px",
                fontWeight: 600,
              }}
            >
              <span style={{ color: "#e70541" }}>NEFFLIX</span>
            </h3>

            <h2
              style={{
                margin: "0 0 12px 0",
                textAlign: "left",
                color: "#111827",
                fontSize: "30px",
                lineHeight: "36px",
                fontWeight: 700,
              }}
            >
              <strong>Reset Password</strong>
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "26.25px",
                margin: "0 0 20px 0",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                color: "#374151",
              }}
            >
              <strong>Hey, {name}</strong>
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "26.25px",
                margin: "0 0 20px 0",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                color: "#374151",
              }}
            >
              We received a request to reset the password for your Nefflix
              account. If you didn't make this request, you can safely ignore
              this email.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "26.25px",
                margin: "0 0 20px 0",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                color: "#374151",
              }}
            >
              To reset your password, click the button below:
            </p>

            <table
              align="center"
              width="100%"
              border={0}
              cellPadding="0"
              cellSpacing="0"
              role="presentation"
              style={{
                maxWidth: "100%",
                textAlign: "left",
                marginBottom: "0px",
              }}
            >
              <tbody>
                <tr style={{ width: "100%" }}>
                  <td>
                    <a
                      href={link}
                      style={{
                        lineHeight: "100%",
                        textDecoration: "none",
                        display: "inline-block",
                        maxWidth: "100%",
                        color: "#ffffff",
                        backgroundColor: "#000000",
                        borderColor: "#000000",
                        borderWidth: "2px",
                        borderStyle: "solid",
                        fontSize: "14px",
                        fontWeight: 500,
                        borderRadius: "9999px",
                        padding: "12px 32px",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span
                        style={{
                          maxWidth: "100%",
                          display: "inline-block",
                          lineHeight: "120%",
                        }}
                      >
                        Reset password →
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={{ height: "16px" }} />

            <p
              style={{
                fontSize: "15px",
                lineHeight: "26.25px",
                margin: "0 0 20px 0",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                color: "#374151",
              }}
            >
              This link will expire in 24 hours. If you need to request a new
              password reset, please visit our website.
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "26.25px",
                margin: "0 0 20px 0",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                color: "#374151",
              }}
            >
              Made with ❤️ by
              <a
                href="https://www.linkedin.com/in/bortnytskyi-oleksii/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: 4,
                  textDecoration: "underline",
                }}
              >
                Oleksii Bortnytskyi
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
