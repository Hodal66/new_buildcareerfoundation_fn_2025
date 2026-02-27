
'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function LogInComponent() {
  return (
    // Responsive form with adaptive width and spacing: Mobile: gap-3 max-w-sm, Tablet: gap-3.5 max-w-md, Desktop: gap-4 max-w-md
    <form className="flex flex-col
      gap-3 max-w-sm w-full
      sm:gap-3.5 sm:max-w-md
      md:gap-4
      px-4
      sm:px-0">
      {/* Email field */}
      <div>
        <div className="mb-1.5 sm:mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
            className="text-sm sm:text-base"
          />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
          className="text-sm sm:text-base"
        />
      </div>
      {/* Password field */}
      <div>
        <div className="mb-1.5 sm:mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
            className="text-sm sm:text-base"
          />
        </div>
        <TextInput
          id="password1"
          required
          type="password"
          className="text-sm sm:text-base"
        />
      </div>
      {/* Remember me checkbox with responsive spacing */}
      <div className="flex items-center
        gap-1.5
        sm:gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-sm sm:text-base">
          Remember me
        </Label>
      </div>
      {/* Submit button with responsive text */}
      <Button type="submit" className="text-sm sm:text-base">
        Submit
      </Button>
    </form>
  )
}


