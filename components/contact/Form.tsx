'use client'
import CustomImage from "@components/ui/CustomImage"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { FormData, formSchema } from "@/schemas/formSchema"
import Link from "next/link"
import useSendEmail from "@/hooks/useSendEmail"


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



    const resetForm = () => {
        reset({
            fullName: "",
            email: "",
            message: "",
        });
        resetStatus();
    };

    const { sendEmail, isLoading, isSuccess, error, resetStatus } = useSendEmail(resetForm);

    const onSubmit = (data: FormData) => {
        sendEmail(data); // ✅ send email
        setSent(true);
    };

    useEffect(() => {
        if (isSuccess) {
            alert("Your message has been sent successfully!");
            resetForm(); // now only called AFTER alert
        }
    }, [isSuccess]);

    useEffect(() => {
        if (error) {
            alert(`Error: ${error}`);
            resetStatus(); // reset after showing alert
        }
    }, [error]);


    return (
        <div className="mt-[95px]">

            <div className=" text-center mb-[103px] " >

                <h1 className="text-[20px] md:text-[48px] w-full md:w-[1200px] mx-auto font-[500] text-[#000]">  Let’s collaborate ! Reach out to me for tech and design solutions.    </h1>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[40px]">

                {/* Address Card */}
                <div className=" p-6 card">
                    <h3 className="text-lg font-semibold text-black mb-4">Address</h3>
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-black">
                            <p className="leading-relaxed">
                                5, Kofoworola Akah Street,<br />
                                Oke afa, Isolo Ikeja,<br />
                                Lagos, Nigeria.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mail Card */}
                <div className=" p-6 card ">
                    <h3 className="text-lg font-semibold text-black mb-4">Mail</h3>
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <div className="text-black">
                            <p>ademolasamuel280@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Phone Number Card */}
                <div className="p-6 card">
                    <h3 className="text-lg font-semibold text-black mb-4">Phone Number</h3>
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <div className="text-black">
                            <p>+234 913 411 8514</p>
                            <p>+234 908 230 7362</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="flex-[2] max-900:mt-[40px] pb-[150px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-10 max-900:block mb-[20px]">
                        <div className="flex-[1] max-900:w-full max-900:mb-[30px]">
                            <label className="text-[#000] capitalize">Full Name</label>
                            <input
                                {...register("fullName")}
                                className="w-full border-b border-dark20 h-[50px] mt-[5px] text-[#000] bg-transparent placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#000]"
                                placeholder="FULL NAME"
                            />
                            {errors.fullName && <p className="text-red-500 text-sm mt-[5px]">{errors.fullName.message}</p>}
                        </div>
                        <div className="flex-[1] max-900:w-full max-900:mb-[30px]">
                            <label className="text-[#000] capitalize">Email</label>
                            <input
                                {...register("email")}
                                className="w-full border-b border-dark20 h-[50px] mt-[5px] text-[#000] bg-transparent placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#000]"
                                placeholder="EMAIL ADDRESS"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-[5px]">{errors.email.message}</p>}
                        </div>



                    </div>


                    <div className="mt-[30px]">
                        <label className="text-[#000] capitalize">Drop a message</label>
                        <textarea
                            {...register("message")}
                            rows={2}
                            className="w-full border-b border-dark20 mt-[10px] text-grey90 pb-[5px] bg-transparent placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#000] resize-none"
                            placeholder="Write a message"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-[5px]">{errors.message.message}</p>}
                    </div>

                    <button type="submit" disabled={isLoading} className="mt-[30px] px-[50px] py-[8px] talk text-white text-[22px] font-[500] transition-transform">
                        {isLoading ? "Sending..." : "Send"}
                    </button>


                </form>
            </div>

        </div>
    )
}

export default Form
