import { ErrorMessage, Field } from "formik";

interface Props {
  fieldName: string;
  label: string;
  large?: boolean;
  type?: string;
}

export default function FormField({
  fieldName,
  label,
  large = false,
  type = "text",
}: Props) {
  return (
    <div>
      <label htmlFor={fieldName} className="block font-medium mb-2">
        {label}
      </label>
      <Field
        id={fieldName}
        className="bg-gray-200 appearance-none border-2 border-gray-300 rounded py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
        as={large ? "textarea" : "input"}
        type={type}
        name={fieldName}
        required={true}
      />
      <ErrorMessage
        className="text-red-500 text-sm"
        name={fieldName}
        component="p"
      />
    </div>
  );
}
