"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { data } from "@/lib/constants";
import { Slash } from "lucide-react";
import download from "downloadjs";

const page = ({ params }: { params: { id: string } }) => {
  const projectToFetch = data.find((project) => project.id === params.id);

  const handleDirector1Person = () => {
    const filePath = "/documents/D1P.pdf";
    download(filePath, "D1P.pdf", "application/pdf");
  };
  const handleDirector1Company = () => {
    const filePath = "/documents/D1P.pdf";
    download(filePath, "D1P.pdf", "application/pdf");
  };
  const handleNNC1 = () => {
    const filePath = "/documents/NNC1.pdf";
    download(filePath, "NNC1.pdf", "application/pdf");
  };

  return (
    <Card className="my-6 container">
      <Breadcrumb className="py-4 px-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{projectToFetch?.company}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink>
              Project - {projectToFetch?.project} (id: {params.id})
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <CardHeader>
        <CardTitle>Document Status</CardTitle>
        <CardDescription>
          This is the status of documents prepared by the project of your
          company.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sr No.</TableHead>
              <TableHead>Documents</TableHead>
              <TableHead>Generated</TableHead>
              <TableHead>Pending</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reminder</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>NNC1 Form</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                  onClick={() => window.open('/documents/NNC1.pdf', '_blank')}
                >
                  Preview Merged
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                  onClick={handleNNC1}
                >
                  Print
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({ className: "cursor-pointer" })}
                >
                  3 Signed
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                >
                  Resend
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>Article of Association (A & A)</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                >
                  Preview
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                >
                  Print
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({ className: "cursor-pointer" })}
                >
                  3 Signed
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                >
                  Resend
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">3</TableCell>
              <TableCell>Share Agreement</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                >
                  Preview
                </span>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "destructive",
                    className: "cursor-pointer",
                  })}
                >
                  3 Unsigned
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                >
                  Resend
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">4</TableCell>
              <TableCell>Minutes</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                >
                  Preview (Signed)
                </span>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({ className: "cursor-pointer" })}
                >
                  3 Signed
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "outline",
                    className: "cursor-pointer",
                  })}
                >
                  Resend
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">5</TableCell>
              <TableCell>IRBRI</TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                >
                  Preview
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({
                    variant: "secondary",
                    className: "cursor-pointer",
                  })}
                >
                  Print
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={buttonVariants({ className: "cursor-pointer" })}
                >
                  3 Signed
                </span>
              </TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Card>
          <CardHeader>
            <CardTitle>User Details</CardTitle>
            <CardDescription>Details about Users</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sr No.</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Generated</TableHead>
                  <TableHead>Pending</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reminder</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Chang Kun Lee</TableCell>
                  <TableCell>Shareholder 1</TableCell>
                  <TableCell>Person</TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                    >
                      Preview
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                    >
                      Print
                    </span>
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>Tencent Games Pvt. Ltd.</TableCell>
                  <TableCell>Shareholder 2</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                    >
                      Preview
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                    >
                      Print
                    </span>
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>Minamoto Riotsu</TableCell>
                  <TableCell>Shareholder 3</TableCell>
                  <TableCell>Person</TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                    >
                      Preview
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                    >
                      Print
                    </span>
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">4</TableCell>
                  <TableCell>Om Patel</TableCell>
                  <TableCell>Director 1</TableCell>
                  <TableCell>Person</TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                      onClick={() =>
                        window.open("/documents/D1P.pdf", "_blank")
                      }
                    >
                      Preview
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                      onClick={handleDirector1Person}
                    >
                      Print
                    </span>
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5</TableCell>
                  <TableCell>Way to Web Pvt. Ltd.</TableCell>
                  <TableCell>Director 1</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                      onClick={() =>
                        window.open("/documents/D1C.pdf", "_blank")
                      }
                    >
                      Preview
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                      onClick={handleDirector1Company}
                    >
                      Print
                    </span>
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">6</TableCell>
                  <TableCell>Curtis Mar</TableCell>
                  <TableCell>Company Secretary</TableCell>
                  <TableCell>Person</TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                    >
                      Preview
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={buttonVariants({
                        variant: "secondary",
                        className: "cursor-pointer",
                      })}
                    >
                      Print
                    </span>
                  </TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default page;
