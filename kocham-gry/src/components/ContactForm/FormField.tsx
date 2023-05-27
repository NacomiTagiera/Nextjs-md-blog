import { Fragment } from "react";
import { ErrorMessage, Field, useField } from "formik";

interface Props {
  fieldName: string;
  label: string;
  multiline?: boolean;
}

export default function FormField({
  fieldName,
  label,
  multiline = false,
}: Props) {
  const [field, meta] = useField(fieldName);

  return (
    <Fragment>
      <Field
        className="bg-gray-200 appearance-none border-2 border-gray-300 rounded py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
        type="text"
        name={fieldName}
        label={label}
        value={field.value}
        required={true}
        errors={meta.error}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
      <ErrorMessage
        className="text-red-500 text-sm"
        name={fieldName}
        component="p"
      />
    </Fragment>
  );
}
