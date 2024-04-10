import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
const Other = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other Documents</CardTitle>
        <CardDescription>
          Here are the other documents for signing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>These Documents will be published.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>NNC1 Form (Signed)</TableHead>
              <TableHead>Article of Association (A&A)</TableHead>
              <TableHead>Share Agreement</TableHead>
              <TableHead>Minutes</TableHead>
              <TableHead>Certificate of Incorporate</TableHead>
              <TableHead>Business Registration Notice</TableHead>
              <TableHead>Receipt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Link
                  href="/documents/NNC1.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href="/documents/AA.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href="/documents/SA.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href="/documents/MOM.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href="/documents/MOM.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href="/documents/MOM.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href="/documents/MOM.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <CardFooter className="justify-end items-center">
          <Button size="lg">Continue</Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default Other;
