interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div className="bg-gray-100 p-6 font-sans">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow">
        <h1 className="text-xl font-semibold text-gray-800">
          Hey there, you've got a new message!
        </h1>

        <div className="mt-4 space-y-2 text-gray-700">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-medium text-gray-800">Message:</p>
          <p className="mt-1 whitespace-pre-line text-gray-700">{message}</p>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Sent from your website contact form.
        </p>
      </div>
    </div>
  );
}
