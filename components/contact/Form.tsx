'use client'
import CustomImage from "@components/ui/CustomImage"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormData, formSchema } from "@/schemas/formSchema"


const Form = () => {
    const [sent, setSent] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data: FormData) => {
        console.log("Message sent:", data)
        alert("Message sent successfully!")
        setSent(true)
        reset()
    }

    return (
        <div className="mt-[95px]">
            <div className="text-center mb-[103px] mx-auto">
                <h1 className="text-[48px] w-[1200px] mx-auto font-[500] text-[#000]">
                    Let’s collaborate ! Reach out to me for tech and design solutions.                     </h1>
            </div>


            <div className="flex-[2] max-900:mt-[40px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-10 max-900:block mb-[20px]">
                        <div className="flex-[1] max-900:w-full max-900:mb-[30px]">
                            <label className="text-grey90 capitalize">First Name</label>
                            <input
                                {...register("firstName")}
                                className="w-full border-b border-dark20 h-[50px] mt-[5px] text-grey90 bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90"
                                placeholder="FIRST NAME"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm mt-[5px]">{errors.firstName.message}</p>}
                        </div>

                        <div className="flex-[1] max-900:w-full">
                            <label className="text-grey90 capitalize">Last Name</label>
                            <input
                                {...register("lastName")}
                                className="w-full border-b border-dark20 h-[50px] mt-[5px] text-grey90 bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90"
                                placeholder="LAST NAME"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm mt-[5px]">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    <div className="flex gap-10 max-900:block mb-[20px]">
                        <div className="flex-[1] max-900:w-full max-900:mb-[30px]">
                            <label className="text-grey90 capitalize">Email</label>
                            <input
                                {...register("email")}
                                className="w-full border-b border-dark20 h-[50px] mt-[5px] text-grey90 bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90"
                                placeholder="EMAIL ADDRESS"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-[5px]">{errors.email.message}</p>}
                        </div>

                        <div className="flex-[1] max-900:w-full">
                            <label className="text-grey90 capitalize">Phone Number</label>
                            <input
                                {...register("phone")}
                                className="w-full border-b border-dark20 h-[50px] mt-[5px] text-grey90 bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90"
                                placeholder="PHONE NUMBER"
                            />
                        </div>
                    </div>

                    <div className="mt-[30px]">
                        <label className="text-grey90 capitalize">Your Message</label>
                        <textarea
                            {...register("message")}
                            rows={2}
                            className="w-full border-b border-dark20 mt-[10px] text-grey90 pb-[5px] bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90 resize-none"
                            placeholder="MESSAGE"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-[5px]">{errors.message.message}</p>}
                    </div>

                    <div className="mt-[30px]">
                        <div className="flex items-center gap-2">
                            <h1 className="text-[40px]">SEND MESSAGE</h1>
                            <button type="submit">
                                <CustomImage src="/images/button.png" alt="Hero" width={80} height={100} />
                            </button>
                        </div>
                        {sent && <p className="text-green-500 mt-2">Your message was sent successfully!</p>}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Form
