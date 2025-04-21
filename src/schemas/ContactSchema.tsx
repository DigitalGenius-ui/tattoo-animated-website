import * as z from "zod";

export const conactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required." }),
  lastName: z.string().min(1, { message: "Last Name is required." }),
  email: z.string().email({ message: "Email is required!!" }),
  phoneNumber: z.string().min(11, { message: "Phone number is required!!" }),
  bookingDate: z.string().min(1, { message: "Booking Date is required!!" }),
  imageSmaple: z.custom<FileList>(
    (val) => val instanceof FileList && val.length > 0,
    {
      message: "This field is required!!",
    }
  ),
  tattooNumber: z.string().min(1, { message: "This filed is required!!" }),
  message: z.string().min(20, { message: "Please write a message!!" }),
  firstTattoo: z.boolean({ message: "This filed is required!!" }),
  everTattooed: z.boolean({ message: "This filed is required!!" }),
  confirmTerms: z.boolean({ message: "This filed is required!!" }),
});
