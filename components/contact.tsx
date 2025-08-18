"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { sendContactEmail } from "@/app/actions/contact"
import { useToast } from "@/hooks/use-toast"
import { useTranslations } from "next-intl"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  date: z.date().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const { toast } = useToast()
  const t = useTranslations('contact')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      date: undefined,
    },
  })

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const result = await sendContactEmail(data)
      
      if (result.success) {
        setShowSuccess(true)
        form.reset()
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
          variant: "default",
        })
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle id="book-session" className="text-gray-900">{t('form.title')}</CardTitle>
                <CardDescription className="text-gray-600">
                  {t('form.subtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900">{t('form.name')}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-white border-gray-300 text-gray-900"
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900">{t('form.email')}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="bg-white border-gray-300 text-gray-900"
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900">{t('form.phone')}</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-white border-gray-300 text-gray-900"
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900">{t('form.date')}</FormLabel>
                            <FormControl>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full justify-start text-left font-normal bg-white border-gray-300 text-gray-900",
                                      !field.value && "text-muted-foreground"
                                    )}
                                    disabled={isSubmitting}
                                  >
                                    {field.value ? field.value.toLocaleDateString() : t('form.pickDate')}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    className="rounded-md"
                                  />
                                </PopoverContent>
                              </Popover>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-900">{t('form.message')}</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-white border-gray-300 text-gray-900 min-h-[120px]"
                              placeholder={t('form.messagePlaceholder')}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {showSuccess && (
                      <div className="flex space-x-2 text-[#c6a16c] font-medium">
                        <CheckCircle className="h-4 w-4" />
                        <span>{t('form.success')}</span>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-[#c6a16c] hover:bg-[#b8956b] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('form.sending') : t('form.sendMessage')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#c6a16c]">{t('info.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#c6a16c] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('info.address.label')}</h4>
                    <p className="text-gray-600">
                      {t('info.address.value')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#c6a16c] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('info.phone.label')}</h4>
                    <p className="text-gray-600">{t('info.phone.value')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#c6a16c] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('info.email.label')}</h4>
                    <p className="text-gray-600">{t('info.email.value')}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">{t('rates.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('rates.musicRecording')}</span>
                    <span className="text-gray-900 font-semibold">{t('rates.musicPrice')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('rates.videoRecording')}</span>
                    <span className="text-gray-900 font-semibold">{t('rates.videoPrice')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('rates.equipmentRental')}</span>
                    <span className="text-gray-900 font-semibold">{t('rates.equipmentPrice')}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="text-sm text-[#c6a16c] font-medium">
                      * {t('rates.discountNote')} <span className="font-bold">{t('rates.discountPrice')}</span> {t('rates.discountFor')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
