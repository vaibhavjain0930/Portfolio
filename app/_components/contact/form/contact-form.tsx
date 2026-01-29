"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { fields } from "./contact-type";
import { FormField } from "./form-field";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const initialState = { success: false, error: "" };

export function Form() {
  const [state, action, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={action} className="flex-1">
      {fields.map((field, index) => (
        <FormField key={field.name} index={index} field={field} />
      ))}

      <Button
        disabled={pending}
        type="submit"
        className="float-right mt-8 w-full cursor-pointer rounded-none text-shadow-2xs"
      >
        {pending ? (
          <>
            <Loader2 className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
