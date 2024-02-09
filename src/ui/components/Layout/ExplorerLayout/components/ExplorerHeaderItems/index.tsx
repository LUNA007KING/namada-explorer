import { EXPLORER } from "@/contants";

import Link from "next/link";

// import { SmallDot } from "icons/src";
// import { Button, Tooltips } from "ui";

export const ExplorerHeaderItems = () => {
  return (
    <>
      {/* <div className="bg-black-2 flex items-center gap-2 rounded-tl-[0.625rem] rounded-tr-[0.625rem] px-4 py-3"> */}
      {/* <Tooltips
          childrenContent={
            <>
              <span className="text-white-0 text-center font-medium leading-6">
                Green Net Network
              </span>
              <span className="text-white-0 text-center font-medium leading-6">
                Operation Status
              </span>
              <div className="flex flex-row items-center justify-center gap-1.5">
                <SmallDot height={8} width={8} />
                <div className="text-white-0 font-medium leading-6">Online</div>
              </div>
            </>
          }
        >
          <div className="flex flex-row items-center justify-center gap-1.5">
            <SmallDot height={8} width={8} />
            <div className="text-white-0 font-medium leading-6">Green Net</div>
          </div>
        </Tooltips>
      </div>
      <Link href={EXPLORER.MAIN}>
        <Button variant="secondaryWhite" size="medium" title="Block Explorer" />
      </Link> */}
    </>
  );
};
