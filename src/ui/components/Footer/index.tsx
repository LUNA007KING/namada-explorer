import { Input } from "@/components/ui/input";
import NamadaLogo from "../LogoNamada";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default async function Footer() {
  return (
    <div
      className="flex w-full flex-col items-center gap-6 p-[2rem] pb-10 sm:items-start sm:pl-[3.75rem] sm:pr-[3.75rem] sm:pt-[6.25rem]"
      id="section-3"
    >
      <div className="flex flex-wrap items-start justify-between gap-2 self-stretch sm:flex-row sm:gap-0">
        <div className="flex flex-col items-start gap-8">
          <div className="logo-2 flex items-center">
            <NamadaLogo height={32} width={32} />
            <div className="text-white-0  text-center text-[1.0625rem] font-semibold leading-[1.375rem]">
              NAMADA
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="get_our_newsletter  text-white-0 text-2xl font-semibold leading-8">
              Get our newsletter
            </div>
            <Input placeholder="Enter your email" />
          </div>
          <div className="flex items-start gap-6">
            <Twitter height={32} width={32} color="white" />
            <Facebook height={32} width={32} color="white" />
            <Instagram height={32} width={32} color="white" />
          </div>
        </div>
        {/* {subfooter.data.slices.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-start gap-4">
              <div className="text-white-0 font-semibold leading-6">
                <PrismicRichText field={item.primary.title} />
              </div>
              <div className="flex flex-col items-start gap-4">
                {item?.items?.map((link, i) => {
                  return (
                    <PrismicNextLink key={i} field={item.link}>
                      <div className=" text-gray-5 text-sm leading-5">
                        <PrismicRichText field={link.name} />
                      </div>
                    </PrismicNextLink>
                  );
                })}
              </div>
            </div>
          );
        })} */}
      </div>
      <div className="flex w-32 items-center justify-center sm:w-full">
        <NamadaLogo height={218} width={176} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 self-stretch sm:justify-between">
        <div className="flex items-center gap-1">
          <div className="text-gray-11  text-center text-sm leading-5">
            {" "}
            2023
          </div>
          <div className="text-gray-11  text-center text-sm leading-5">-</div>
          <div className="text-gray-11  text-center text-sm leading-5">
            © NAMADA
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-10">
          <div className="text-gray-11  text-center text-sm leading-5">
            Privacy Policy
          </div>
          <div className="text-gray-11  text-center text-sm leading-5">
            Terms &amp; Conditions
          </div>
          <div className="text-gray-11  text-center text-sm leading-5">
            Cookies Policy
          </div>
        </div>
      </div>
    </div>
  );
}
