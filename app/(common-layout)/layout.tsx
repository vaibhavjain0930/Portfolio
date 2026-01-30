// app/(home)/layout.tsx
import { ContactPage } from "../_components/contact/contact-page";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-6 md:px-14">
      {children}
      <ContactPage />
    </main>
  );
}