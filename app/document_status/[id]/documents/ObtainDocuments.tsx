"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ObtainDocumentsFormSchema } from "@/app/validationSchemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ObtainDocuments = () => {
  const form = useForm<z.infer<typeof ObtainDocumentsFormSchema>>({
    resolver: zodResolver(ObtainDocumentsFormSchema),
  });

  const certificateRef = form.register("certificateOfIncorporate", {
    required: true,
  });
  const noticeRef = form.register("notice", { required: true });
  const recieptsRef = form.register("reciepts");

  function onSubmit(values: z.infer<typeof ObtainDocumentsFormSchema>) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Obtain the company certificate & documents from Companies Registry
        </CardTitle>
        <CardDescription>These documents will be published</CardDescription>
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
              name="certificateOfIncorporate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Certificate of Incorporate</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Certificate of Incorporate"
                      type="file"
                      {...certificateRef}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
              <FormField
                name="noticeNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Registration Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Eg: XXXX" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="notice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Registration Notice</FormLabel>
                    <FormControl>
                      <Input placeholder="Notice" type="file" {...noticeRef} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="reciepts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receipt</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Reciepts"
                      type="file"
                      {...recieptsRef}
                    />
                  </FormControl>
                  <FormMessage />
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

export default ObtainDocuments;
