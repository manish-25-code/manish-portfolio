import { useEffect, useRef, useState } from "react"

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["certifications", "Certifications"],
  ["contact", "Contact"],
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8)
  const [active, setActive] = useState("home")
  const navRef = useRef(null)
  const buttonRef = useRef(null)
  const closeMenu = () => setOpen(false)

  // Menu behaviour: Escape, outside tap, resize to desktop, scrolled state.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return
      if (!navRef.current?.querySelector(".nav-links.open")) return
      setOpen(false)
      buttonRef.current?.focus()
    }
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    const onScroll = () => setScrolled(window.scrollY > 8)

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("resize", onResize)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  // Highlight the link for the section currently in view.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    links.forEach(([id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      ref={navRef}
      className={`navbar${scrolled ? " is-scrolled" : ""}`}
      aria-label="Main"
    >
      <div className="container navbar-inner">
        <a className="logo" href="#home" onClick={closeMenu}>
          Manish
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div id="nav-menu" className={`nav-links${open ? " open" : ""}`}>
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
