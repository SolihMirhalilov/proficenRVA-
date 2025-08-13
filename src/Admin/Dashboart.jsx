export default function Dashboart() {
  return (
    <>
      <section className="w-full max-w-[1140px] mx-auto px-4">
        <h2 className="text-black font-bold text-4xl mt-10">Data</h2>

        <div className="flex flex-wrap gap-16 justify-center mt-10">
          <div className="w-full xl:w-[430px] lg:w-[300px] md:w-[300px] bg-[#0020BD] rounded-2xl p-4 text-center">
            <img src="userAdmin.png" alt="" className="mx-auto mb-2" />
            <span className="text-white block">Registered users</span>
            <p className="font-bold text-3xl text-white">15</p>
          </div>
          <div className="w-full xl:w-[430px] lg:w-[300px] md:w-[300px] bg-[#0020BD] rounded-2xl p-4 text-center">
            <img src="userAdmin.png" alt="" className="mx-auto mb-2" />
            <span className="text-white block">Registered users</span>
            <p className="font-bold text-3xl text-white">15</p>
          </div>
        </div>

        <h2 className="text-black font-bold text-4xl mt-10">Active projects</h2>

        <div className="mt-20 grid grid-cols-3 gap-4">
          <div>
            <div className="bg-slate-300 w-[300px] h-[200px] "></div>
            <h3 className="font-medium text-xl">Team projects</h3>
            <p>Group assignments completed in collaboration between students. They</p>
          </div>

          <div>
            <div className="bg-slate-300 w-[300px] h-[200px] "></div>
            <h3 className="font-medium text-xl">Team projects</h3>
            <p>Group assignments completed in collaboration between students. They</p>
          </div>

          <div>
            <div className="bg-slate-300 w-[300px] h-[200px] "></div>
            <h3 className="font-medium text-xl">Team projects</h3>
            <p>Group assignments completed in collaboration between students. They</p>
          </div>
        </div>
      </section>
    </>
  );
}
