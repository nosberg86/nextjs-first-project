"use client";
import { taskFormValues } from "@/models/taskSchema";
import { Control, Controller, FieldError } from "react-hook-form";

interface props {
  name: keyof taskFormValues;
  control: Control<taskFormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

export default function CustomInput({
  name,
  control,
  label,
  type,
  error,
}: props) {
  return (
    <div className="form-group">
      <label htmlFor={name} className="font-bold text-sm">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`border border-gray-400 p-2 mb-1 w-full text-black ${
              error ? "border-red-600" : ""
            }`}
          />
        )}
      />
      {error && (
        <p className="text-red-500 font-bold text-sm mb-6 ">{error.message}</p>
      )}
    </div>
  );
}