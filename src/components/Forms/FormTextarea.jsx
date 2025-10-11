/**
 * FormTextarea Component
 * Modern textarea with floating label, character counter, and validation
 */

/* eslint-disable react/prop-types */
import { useState } from "react";

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  touched,
  required = false,
  disabled = false,
  helperText,
  rows = 4,
  maxLength,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasError = touched && error;
  const hasValue = value && value.length > 0;
  const showFloatingLabel = isFocused || hasValue;
  const characterCount = value ? value.length : 0;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Textarea Container */}
      <div className="relative">
        {/* Textarea Field */}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={showFloatingLabel ? placeholder : ""}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          className={`
            w-full
            px-3 sm:px-4
            py-3 sm:py-3.5 md:py-4
            text-sm sm:text-base
            bg-white
            border-2 rounded-lg sm:rounded-xl
            transition-all duration-300
            resize-none
            placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-base
            disabled:bg-gray-100 disabled:cursor-not-allowed
            focus:outline-none focus:ring-4 focus:ring-opacity-20
            ${
              hasError
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : isFocused
                ? "border-grad1 focus:border-grad1 focus:ring-grad1"
                : "border-gray-300 hover:border-gray-400"
            }
          `}
        />

        {/* Floating Label */}
        <label
          className={`
            absolute left-3 sm:left-4
            pointer-events-none
            transition-all duration-300 ease-out
            font-medium
            ${
              showFloatingLabel
                ? "top-0 -translate-y-1/2 text-xs sm:text-sm px-2 bg-white"
                : "top-5 text-sm sm:text-base"
            }
            ${
              hasError
                ? "text-red-500"
                : isFocused
                ? "text-grad1"
                : "text-gray-600"
            }
          `}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>

      {/* Footer: Error/Helper Text and Character Counter */}
      <div className="flex justify-between items-start mt-1.5 sm:mt-2 px-1">
        {/* Helper Text or Error Message */}
        <div className={`text-xs sm:text-sm transition-all duration-200 ${hasError ? "text-red-500" : "text-gray-500"}`}>
          {hasError ? (
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          ) : (
            helperText
          )}
        </div>

        {/* Character Counter */}
        {maxLength && (
          <div className={`text-xs sm:text-sm ${characterCount > maxLength * 0.9 ? "text-orange-500 font-medium" : "text-gray-400"}`}>
            {characterCount}/{maxLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormTextarea;
