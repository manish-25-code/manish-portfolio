import { useEffect, useRef } from "react"

// Two purely decorative layers that react to scrolling:
//   1. a thin progress bar fixed to the top of the viewport
//   2. a soft gradient background whose glows drift as you scroll
//
// Both are updated through refs + requestAnimationFrame, so scrolling never
// re-renders React. The animation is eased, so it feels smooth rather than jumpy.
// With `prefers-reduced-motion`, the background stays still; the progress bar
// still shows your position (it is an indicator, not an animation).
function ScrollEffects() {
  const barRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    const scene = sceneRef.current
    if (!bar || !scene) return

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    let reduceMotion = motionQuery.matches
    let target = 0 // real scroll position, 0 (top) to 1 (bottom)
    let shown = 0 // eased value that drives the background
    let frame = 0

    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      target = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0
    }

    const paint = () => {
      frame = 0
      bar.style.transform = `scaleX(${target})`

      if (reduceMotion) {
        shown = 0
        scene.style.setProperty("--p", "0")
        return
      }

      shown += (target - shown) * 0.1
      if (Math.abs(target - shown) < 0.0005) shown = target
      scene.style.setProperty("--p", shown.toFixed(4))
      if (shown !== target) frame = requestAnimationFrame(paint)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }

    const update = () => {
      measure()
      schedule()
    }

    const onMotionChange = (e) => {
      reduceMotion = e.matches
      schedule()
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    motionQuery.addEventListener("change", onMotionChange)

    // Page height can change after fonts/images load; keep the measurement honest.
    let resizeObserver
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(update)
      resizeObserver.observe(document.body)
    }

    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
      motionQuery.removeEventListener("change", onMotionChange)
      resizeObserver?.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar" ref={barRef} />
      </div>

      <div className="bg-scene" aria-hidden="true" ref={sceneRef}>
        <span className="bg-grid" />
        <span className="bg-blob bg-blob--a" />
        <span className="bg-blob bg-blob--b" />
        <span className="bg-blob bg-blob--c" />
      </div>
    </>
  )
}

export default ScrollEffects