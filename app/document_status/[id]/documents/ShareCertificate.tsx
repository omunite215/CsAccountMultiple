"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ShareCertificateSchema } from "@/app/validationSchemas";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

const ShareCertificate = () => {
  const form = useForm<z.infer<typeof ShareCertificateSchema>>({
    resolver: zodResolver(ShareCertificateSchema),
  });

  function onSubmit(values: z.infer<typeof ShareCertificateSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Enter Incorporate Date and Select a Share Certificate Template
        </CardTitle>
        <CardDescription>
          You need to enter the following information to proceed.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="template"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Choose a Template</FormLabel>
                  <FormMessage />
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid max-w-md grid-cols-2 gap-8 pt-2"
                  >
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="default" className="sr-only" />
                        </FormControl>
                        <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent">
                          <Image
                            src="/templates/default.png"
                            width={500}
                            height={450}
                            className=""
                            alt="default-template"
                          />
                        </div>
                        <span className="block w-full p-2 text-center font-normal">
                          Default Template
                        </span>
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="blue" className="sr-only" />
                        </FormControl>
                        <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent">
                          <Image
                            src="/templates/blue.png"
                            width={500}
                            height={450}
                            alt="blue-template"
                          />
                        </div>
                        <span className="block w-full p-2 text-center font-normal">
                          Blue Template
                        </span>
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ShareCertificate;
