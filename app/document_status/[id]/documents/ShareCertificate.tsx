"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShareCertificateSchema } from "@/app/validationSchemas";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
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
              name="incorporate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Incorporate Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
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
