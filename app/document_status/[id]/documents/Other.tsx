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
import { Mail } from "lucide-react";
const Other = ({ disabled = true }: { disabled?: boolean }) => {
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
          <TableHeader>
            <TableRow>
              <TableHead>Sr No.</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead>Preview</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>NNC1 Form (Signed)</TableCell>
              <TableCell>
                <Link
                  href="/documents/NNC1.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Article of Association (A&A)</TableCell>
              <TableCell>
                <Link
                  href="/documents/AA.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Share Agreement</TableCell>
              <TableCell>
                <Link
                  href="/documents/SA.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Minutes</TableCell>

              <TableCell>
                <Link
                  href="/documents/MOM.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Certificate of Incorporate</TableCell>
              <TableCell>
                <Link
                  href="/documents/MOM.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>Business Registration Notice</TableCell>
              <TableCell>
                <Link
                  href="/documents/MOM.pdf"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Preview
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>Receipt</TableCell>
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
        {disabled && (
          <CardFooter className="justify-end items-center">
            <Button size="lg">
              <Mail />
              &nbsp;Send E-mail
            </Button>
          </CardFooter>
        )}
      </CardContent>
    </Card>
  );
};

export default Other;
