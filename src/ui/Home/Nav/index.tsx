export default async function Nav() {
  return (
    <div className="border-white-0 hidden items-center gap-6 rounded-full border-[0.5px] px-6 py-4 sm:inline-flex">
      <div className="text-white-0 text-center hover:text-green-0 text-[1.0625rem] font-medium leading-[1.375rem] cursor-pointer">
        Token
      </div>
      <div className="text-white-0 text-center hover:text-green-0 text-[1.0625rem] font-medium leading-[1.375rem] cursor-pointer">
        Validators
      </div>
      <div className="text-white-0 text-center hover:text-green-0 text-[1.0625rem] font-medium leading-[1.375rem] cursor-pointer">
        White Paper
      </div>
    </div>
  );
}
