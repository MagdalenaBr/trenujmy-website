interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  firstName,
  lastName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>Wiadomość z formularza kontaktowego.</h1>
      <p>
        {" "}
        Od:{" "}
        <strong>
          {firstName}
          {lastName}
        </strong>
        , email {email}
      </p>
      <h2>Wiadomość:</h2>
      <p>{message}</p>
    </div>
  );
}
