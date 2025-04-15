import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
type WorkProps = {
  url: string;
  Image: string;
  title: string;
  role: string;
  date: string;
};
export const WORK: WorkProps[] = [
  {
    url: "https://www.interstis.fr/",
    Image:
      "https://media.licdn.com/dms/image/v2/D4E0BAQELRz9Somdo5g/company-logo_200_200/company-logo_200_200/0/1730735474619/interstis_logo?e=1749686400&v=beta&t=8oi9PGqcCd4A6lsLeRdbUdys4OSb0u9gTjJ8wewwfD0",
    title: "Interstis",
    role: "Développeur Symfony",
    date: "2023 - Now",
  },
  {
    url: "https://www.permisapoints.fr/",
    Image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQGNs32SUY4-zw/company-logo_200_200/company-logo_200_200/0/1630526367607/protagoras_permisapoints_logo?e=1749686400&v=beta&t=I6Bs95rvWkhAH33YVKa9iqnC8yqY5TNwY7pZFLCmeW4",
    title: "Permis à Points",
    role: "Développeur Symfony",
    date: "2022-2023",
  },
  {
    url: "http://www.visionopticien.com/",
    Image:
      "data:image/png;base64,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",
    title: "Vision",
    role: "Developeur Frontend",
    date: "2021-2022",
  },
  {
    url: "https://www.lilmod-lelamed.fr/",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9fawNp_1glFFGT6hwfZs3o2rpCrLzePt0g&s",
    title: "Lilmod et lelamed",
    role: "Developeur Angular",
    date: "2020",
  },
];
export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url || "/"}
      className="inline-flex items-center gap-2 hover:bg-[hsl(var(--accent))] transition-colors p-1 rounded duration-200"
    >
      <img
        src={props.Image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div className=" p-2 rounded-md mr-auto">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
