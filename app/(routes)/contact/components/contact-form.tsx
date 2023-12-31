"use client"

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

import { Separator } from "@/components/ui/separator";

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/shadcn-button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { useForm } from "react-hook-form"
import { Heading } from "@/components/ui/heading";

const formSchema = z.object({
 email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
      }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }).max(200, {
    message: "Message cannot exceed 200 characters.",
  }),
})

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {

    const router = useRouter();
    
    const [loading, setLoading] = useState(false);

    const toastMessage = "Your message has been delivered!"

    const onSubmit = async (data: ContactFormValues)=>{
        try {
            setLoading(true);

            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, data);

            router.refresh();
            router.push("/");
            toast.success(toastMessage)
        } catch (error) {
            toast.success(toastMessage);
        } finally{
            setLoading(false);
        }
    }
    
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            title: "",
            message: "",
        },
      })


  return (
    <div className="space-y-10 pb-10 my-5">
      <div className="flex flex-col items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="sm: w-3/4 md:w-full md:max-w-lg space-y-8">
            {/* İçeriği yatayda daraltmak için "max-w-md" eklenmiştir */}
            <div className="w-full space-y-4">
              {/* İçeriği yatayda daraltmak için "w-full" eklenmiştir */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-reverse">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                          placeholder="name@example.com"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          disabled={loading} 
                          {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-reverse">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-reverse">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea disabled={loading} placeholder="Your Message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-center">
              <Button size={"lg"} disabled={loading} className="" type="submit">
              Submit
            </Button>
            </div>
          </form>
        </Form>
      </div>

    </div>
  )
}
