import Link from "next/link";
import content from "./content.json";

export default async function Nav() {
  const data = content;

  return (
    <div className="border-yellow-1 z-50 hidden items-center gap-6 rounded-full border-[0.5px] px-6 py-4 sm:inline-flex ">
      {data?.map((item, i) => {
        return (
          <Link key={i} href={item.link.url}>
            <div className="product text-yellow-1 text-center hover:text-green-0 text-[1.0625rem] font-medium leading-[1.375rem]">
              {item.text[0].text}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
