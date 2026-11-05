"use client";

import { useState } from "react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Field";
import { project } from "@/content/project";

// Frontend only: uses native required/email validation, then shows a success message.
export function InquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <Section>
      <div className="mx-auto max-w-form">
        <h2 className="mx-auto max-w-90 text-center text-h2">
          {project.form.title}
        </h2>
        {sent ? (
          <p
            role="status"
            className="mt-8 rounded-input bg-brand-soft p-6 text-center font-semibold text-ink"
          >
            Thank you! We&apos;ll get back to you shortly.
          </p>
        ) : (
          <form
            className="mt-8 space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="First Name"
                name="firstName"
                required
                autoComplete="given-name"
              />
              <Input
                label="Last Name"
                name="lastName"
                required
                autoComplete="family-name"
              />
            </div>
            <Input
              label="Email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
            <Textarea label="Message" name="message" />
            <div className="pt-2 text-center">
              <Button type="submit" variant="arrow">
                {project.form.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}
