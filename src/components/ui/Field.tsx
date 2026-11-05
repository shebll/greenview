const input =
  "w-full rounded-[30px] bg-field px-7 py-4.5 text-base text-ink placeholder:text-gray-800 outline-none transition-shadow focus:ring-2 focus:ring-ink/30";

export function Input({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        {...props}
        placeholder={label + (props.required ? "*" : "")}
        className={input}
      />
    </label>
  );
}

export function Textarea({
  label,
  ...props
}: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <textarea
        {...props}
        placeholder={label + "..."}
        className={`${input} h-44 resize-y`}
      />
    </label>
  );
}
