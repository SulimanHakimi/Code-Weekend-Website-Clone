import Footer from "../comps/footer";
import Nav from "../comps/nav";
export default function Home() {
  return (
    <>
      <Nav />

      <div
        className="h-screen w-full bg-mainImg px-24 relative bg-cover opacity-90  justify-start
      items-center flex bg-center"
      >
        <div className="opacity-100 h-1/2 w-2/3 flex flex-col justify-center gap-8">
          <h1 className="text-[50px] font-bold text-white line leading-[52px]	">
            Change your life, learn to code.
          </h1>
          <p className="text-[#eaeaea] text-xl">
            Through immersive coding bootcamps, CodeWeekend teaches you the
            skills and entrepreneurial mindset you need to thrive - now and in
            the future.
          </p>
          <button className="rounded-3xl px-2 font-semibold py-3 self-start w-32 hover:bg-[#36b0e8e1] bg-[#36afe8]">
            Apply
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
