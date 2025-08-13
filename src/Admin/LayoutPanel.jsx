import Dashboard from "./Dashboart.jsx";
import Project from "./Project.jsx";
import News from "./News.jsx";
import Teach from "./Teach.jsx";
import { useState } from "react";

export default function AdminPanel() {
  const [selected, setselected] = useState("Dashboard");

  function RenderContent() {
    switch (selected) {
      case "Dashboard":
        return <Dashboard />;
      case "Project":
        return <Project />;
      case "News":
        return <News />;
      case "Teachers":
        return <Teach />;
    }
  }

  const admin = [
    {
      img: "Dashboart.png",
      imgClick: "DashboartClick.png",
      name: "Dashboard",
    },
    {
      img: "execute.png",
      imgClick: "executeClick.png",
      name: "Project",
    },
    {
      img: "newsClick.png",
      imgClick: "newsClick.png",
      name: "News",
    },
    {
      img: "teach.png",
      imgClick: "teachClick.png",
      name: "Teachers",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Сайдбар */}
      <section className="bg-[#001063] w-64 flex flex-col">
        <div className="flex items-center border-b justify-center py-4">
          <img
            className="w-10 h-10 mr-2"
            src={"user.png" || undefined}
            alt="User"
          />
          <div>
            <span className="text-white font-bold text-xs ml-4 block">
              PROFICIENCY
            </span>
            <p className="text-white font-medium text-xl">AdminPanel</p>
          </div>
        </div>

        <div className="mt-6">
          {admin.map((item) => (
            <div key={item.name} className="flex items-center ml-6 my-3">
              <ul>
                <li
                  className="flex items-center text-white cursor-pointer hover:underline"
                  onClick={() => setselected(item.name)}
                >
                  <img
                    src={
                      selected === item.name
                        ? item.imgClick || undefined
                        : item.img || undefined
                    }
                    className="w-9 h-9 mr-3"
                    alt={item.name}
                  />
                  {item.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Контентная часть */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        {RenderContent()}
      </main>
    </div>
  );
}

