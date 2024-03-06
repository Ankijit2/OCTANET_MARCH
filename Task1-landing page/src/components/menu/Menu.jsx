import React, { useState, useEffect } from "react";
import './menu.css'
function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState()
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  function submit(e) {
    e.preventDefault()
    setSearch("")
  }

  function menushow() {
    setShowMenu(!showMenu)
    console.log(showMenu)
  }

  return (
    <>
      <div id="menu" className={`${isScrolled ? 'scrollmenu' : ''} flex w-full   p-7 justify-between  top-0 bg-[#fdf5e6] z-20`}>
        <h1 id="name" className={`basis-1/12 sm:text-3xl text-2xl font-bold leading-8 text-orange-500`}>Savor</h1>
        <span className="material-symbols-outlined lg:hidden " onClick={menushow}>
          menu
        </span>
        <nav className={`flex lg:flex-row flex-col basis-11/12 justify-between gap-10 ${showMenu ? "hide" : ""}`} id="sidemenu">
          <span className="material-symbols-outlined lg:hidden " onClick={menushow}>
            close
          </span>
          <ul id="category" className=" flex lg:flex-row flex-col basis-7/12 justify-evenly  gap-6 lg:text-2xl text-xl lg:font-light">
            <li>Home</li>
            <li>Menu</li>

            <li>Locations</li>
            <li>About</li>

          </ul>
          <form id="searchbox" className="basis-3/12 flex " onSubmit={submit}>
            <input type="text" name="" id="" className="basis-11/12 pl-3 lg:bg-[#fdf5e6]" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search your favorites" />
            <button type="submit" className="basis-1/12 srch"><span className="material-symbols-outlined">
              search
            </span></button>
          </form>
          <div id="others" className="flex lg:flex-row flex-col basis-2/12 gap-7 lg:text-base text-xl">
            <div>
              <span className="material-symbols-outlined">
                person
              </span>
              <p>Account</p>
            </div>
            <div>
              <span className="material-symbols-outlined">
                orders
              </span>
              <p>Orders</p>
            </div>
            <div>
              <span className="material-symbols-outlined">
                gallery_thumbnail
              </span>
              <p>Gallery</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  )

}

export default Menu;