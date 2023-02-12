"use client"
import { nanoid } from "nanoid"
import Image from "next/image"

export function ContactForm() {
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   const form = event.target as HTMLFormElement
  //   console.log(form.elements)

  //   const formData = Object.fromEntries(new FormData(form).entries())

  //   const filteredData = {
  //     "First Name": formData["First Name"],
  //     "Last Name": formData["Last Name"],
  //     "Company Name": formData["Company Name"],
  //     "Position Name": formData["Position Name"],
  //     Email: formData["Email"],
  //     Telephone: formData["Telephone"],
  //     "Inquiry Type": formData["Inquiry Type"], // the chosoe your type shouldn't be in here
  //     "Choose Your Inquiry Urgency": formData["Choose Your Inquiry Urgency"],
  //     "Fabric Width (Inches)": formData["Fabric Width (Inches)"],
  //     "Fabric Weight (GSM)": formData["Fabric Weight (GSM)"],
  //     "Linear Oz": formData["Linear Oz"],
  //     "Country Of Origin": formData["Country Of Origin"],
  //     "Fabric Content": formData["Fabric Content"],
  //     "Fabric Goal": formData["Fabric Goal"],
  //     "Other Instructions": formData["Other Instructions"],
  //     Message: formData["Message"],
  //   }
  //   console.log(filteredData)
  // }
  return (
    <form
      action="https://formspree.io/f/mjvdyeng"
      method="post"
      // onSubmit={handleSubmit}
      className="md:mx-auto flex flex-col mx-4 mt-16  mb-16 gap-3  md:w-[44rem]"
    >
      <H3>General Information</H3>
      <TextInput
        label="First Name"
        icon="/assets/icons/contact/user.svg"
        required
      />
      <TextInput
        label="Last Name"
        icon="/assets/icons/contact/user.svg"
        required
      />
      <TextInput
        label="Company Name"
        icon="/assets/icons/contact/office-building.svg"
        required
      />
      <TextInput
        label="Position Name"
        icon="/assets/icons/contact/user.svg"
        required
      />
      <TextInput
        label="Email"
        icon="/assets/icons/contact/mail.svg"
        required
        type="email"
      />
      <TextInput
        label="Telephone"
        icon="/assets/icons/contact/phone.svg"
        required
        type="tel"
      />

      <RadioInput
        label="Inquiry Type"
        icon="/assets/icons/contact/cheveron-down.svg"
        options={[
          "Current Production",
          "Test",
          "Development",
          "General Question",
        ]}
        required
        defaultOption="Choose Your Inquiry Type"
      />
      <RadioInput
        label="Choose Your Inquiry Urgency"
        icon="/assets/icons/contact/cheveron-down.svg"
        defaultOption="Choose Urgency"
        options={["Emergency", "Immediate", "Not Urgent"]}
        required
      />

      <fieldset>
        <RadioInput
          multiple
          label="Request Information For"
          // icon="/assets/icons/contact/cheveron-down.svg"
          // defaultOption="Choose Urgency"
          className=""
          options={[
            "Made In USA Knit Fabrics",
            "Marketing & Sales Opportunities",
            "Core Styles",
            "Custom Development",
            "Garment Manufacturing",
          ]}
          required
        />
        {/* <CheckboxSection title="Request Info For*"> */}
        {/* <Checkbox label="Made in USA Knit Fabrics" description="" />
          <Checkbox label="Marketing & Sales Opportunities" description="" />
          <Checkbox
            label="Core Styles"
            description="Jersey, Terry, Fleece, Rib, Thermal"
          />
          <Checkbox
            label="Custom Development"
            description="Novelty, Specialty, Functional, Certified, etc."
          />
          <Checkbox
            label="Garment Manufacturing"
            description="Including cut, sew, print, garment dye, etc."
          />
        </CheckboxSection> */}
      </fieldset>
      <H3>Free Fabric Assessment (optional)</H3>
      <fieldset className="flex flex-col md:grid md:grid-flow-row gap-y-4 gap-x-2 md:grid-cols-2 transition w-full rounded-md">
        {/* <p className="absolute text-md text-neutral-500 duration-300 transform -translate-x-4 -translate-y-8 scale-75 "> */}
        {/* Choose Your Type */}
        {/* </p> */}
        <CheckboxSection title="" className="col-span-2">
          <Checkbox
            label="Please Analyze My Fabric"
            description='Mail 8"x8" swatch to address below'
          />
        </CheckboxSection>
        <p className="my-2 col-span-2">
          Please Provide As Much Information As Possible
        </p>

        <TextInput label="Fabric Width (Inches)" type="number" />
        <TextInput label="Fabric Weight (GSM)" />
        <TextInput label="Linear Oz" />
        <TextInput label="Country Of Origin" />
        <TextInput label="Fabric Content" className="col-span-2" />
        <RadioInput
          className="col-span-2"
          label="Fabric Goal"
          defaultOption="Choose your Fabric Goal"
          options={["I want to replicate", "I will accept similar"]}
          icon="/assets/icons/contact/cheveron-down.svg"
        />
        <TextInput label="Other Instructions" className="col-span-2" />
      </fieldset>

      <H3>Leave A Message (Optional)</H3>
      <TextInput
        label="Message"
        icon="/assets/icons/contact/pencil-alt.svg"
        textarea
      />
      <input
        type="submit"
        value="Submit Inquiry"
        className="bg-black1 text-white1 font-normal md:text-[1rem] text-[0.85rem] transition ease-in-out duration-100
    outline-4 outline outline-[#00000005]  hover:scale-105 rounded-md py-3 px-4 hover:cursor-pointer"
      />
    </form>
  )
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="my-4 font-semibold text-lg text-neutral-900 ">{children}</h3>
  )
}
type InputTypes =
  | "text"
  | "tel"
  | "button"
  | "checkbox"
  | "date"
  | "number"
  | "password"
  | "submit"
  | "url"
  | "range"
  | "email"
  | "radio"

interface CustomInputParams {
  label: string
  icon?: string
  required?: boolean
  className?: string
}
interface CustomTextInput extends CustomInputParams {
  textarea?: boolean
  type?: InputTypes
  half?: boolean
}
interface CustomDropdownParams extends CustomInputParams {
  defaultOption?: string
  options: string[]
  multiple?: boolean
}
interface CustomCheckboxParams extends CustomInputParams {
  description: string
}

export function CheckboxSection({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`flex flex-col md:grid md:grid-flow-row md:grid-cols-2 gap-2 transition pt-3 pb-6 px-4 w-full rounded-md bg-grayInput ${className}`}
    >
      {/* <p className="absolute text-md text-neutral-500 duration-300 transform -translate-x-4 -translate-y-8 scale-75 "> */}
      {/* Choose Your Type */}
      {/* </p> */}
      <p className="col-span-2 text-base text-neutral-500">{title}</p>
      {children}
    </div>
  )
}
export function Checkbox({
  label,
  icon,
  description,
  required = false,
}: CustomCheckboxParams) {
  return (
    <div className="flex">
      <div className="flex h-5 pt-1">
        <input
          id={label}
          type="checkbox"
          required={required}
          name={label}
          value={label}
          className="w-[1.15rem]  h-[1.15rem] accent-green-600 bg-green-100 shadow border-green-300 rounded-md    "
        />
      </div>
      <div className="ml-2 text-base">
        <label htmlFor={label} className="font-medium text-neutral-700">
          {label}
        </label>
        <p
          id="helper-checkbox-text"
          className="text-xs font-normal text-gray-500 "
        >
          {description}
        </p>
      </div>
    </div>
  )
}
export function TextInput({
  label,
  icon,
  textarea = false,
  type = "text",
  half = false,
  required = false,
  className,
}: CustomTextInput) {
  return (
    <div className={`relative ${half ? "w-1/2" : "w-full"} ${className} `}>
      {textarea ? (
        <textarea
          name={label}
          id={label}
          className="focus:outline-2 focus:outline-neutral-200 transition pb-3 pt-6 px-4 w-full rounded-md bg-grayInput text-neutral-800 appearance-none  placeholder-neutral-800 text-base peer pr-10  h-60"
          placeholder="  "
          required={required}
        />
      ) : (
        <input
          name={label}
          id={label}
          className={`focus:outline-2 focus:outline-neutral-200 transition pb-3 pt-6 px-4 w-full rounded-md bg-grayInput text-neutral-800 appearance-none placeholder-neutral-800 text-base peer pr-10 shadow-sm ${
            half && "shadow-md"
          } `}
          type={type}
          placeholder="  "
          required={required}
        />
      )}

      <label
        htmlFor={label}
        className="absolute text-base :not(peer-empty:text-green-600) :not(peer-valid:font-medium) peer-placeholder-shown:text-neutral-500 duration-300 transform -translate-y-4 scale-75 top-[1.20rem] z-10 origin-[0] left-4 peer-focus:text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
        {required && "*"}
      </label>
      {icon && (
        <Image
          src={icon}
          alt="Icon For Input"
          width="20"
          height="20"
          className="absolute z-50 right-4 top-[1.30rem]"
        />
      )}
    </div>
  )
}

export function RadioInput({
  label,
  icon,
  required = false,
  multiple = false,
  defaultOption,
  options,
  className,
}: CustomDropdownParams) {
  return (
    <div className={`relative ${className} `}>
      <select
        name={label}
        defaultValue={defaultOption}
        id={label}
        className="focus:outline-2 focus:outline-neutral-200 transition pb-3 pt-6 px-4 w-full rounded-md bg-grayInput text-neutral-800 appearance-none  placeholder-neutral-800 text-base font-normal peer pr-10 hover:cursor-pointer "
        placeholder="Radio"
        required={required}
        multiple={multiple}
      >
        {defaultOption && <option>{defaultOption}</option>}
        {options.map((option) => (
          <option value={option} className="whitespace-normal" key={nanoid()}>
            {option}
          </option>
        ))}
      </select>

      <label
        htmlFor={label}
        className="bg-grayInput  pr-4 absolute text-md text-neutral-500 duration-300 transform -translate-y-4 scale-75 top-[1.20rem] z-10 origin-[0] left-4 "
      >
        {label}
      </label>
      {icon && (
        <Image
          src={icon}
          alt="Icon For Input"
          width="20"
          height="20"
          className="absolute  z-50 right-4 top-[1.30rem]"
        />
      )}
    </div>
  )
}
export interface LandingParameters {
  title: string
  children?: React.ReactNode
  background: string
}
export function Landing({
  title,
  background = "#",
  children,
}: LandingParameters) {
  return (
    <div className="relative h-[70vh] flex flex-col items-center justify-center gap-10 ">
      <Image
        src={background}
        className="-z-50"
        fill
        alt="Background Of Landing Page"
      />
      <h1
        className="md:text-[4rem] text-[2.35rem] text-center md:w-8/12 w-10/12 font-semibold text-neutral-900
       md:tracking-wider tracking-wide md:leading-[4.5rem] leading-[3.25rem]"
      >
        {title}
      </h1>
      <div className="buttonSection flex flex-row gap-5">{children}</div>
    </div>
  )
}

export function TextWithIcon({
  children,
  src,
  alt,
  className,
}: {
  children: React.ReactNode
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className="flex items-baseline my-5 font-normal text-neutral-800  gap-x-2">
      <Image src={src} width={20} height={20} alt={alt} />
      <p>{children}</p>
    </div>
  )
}
