import { Cloud, Code, Sparkles } from 'lucide-react'

// Purely decorative 3D-style artwork built from CSS shapes (no image files).
// aria-hidden hides it from screen readers, since it carries no information.
function HeroVisual() {
  return (
    <div className="visual" aria-hidden="true">
      <div className="visual__glow" />
      <div className="visual__orb" />
      <div className="visual__panel" />
      <div className="visual__ring visual__ring--outer" />
      <div className="visual__ring visual__ring--inner" />

      {/* Two stacked W's: one dark with a long shadow (depth), one gradient (face) */}
      <div className="visual__w">
        <span className="visual__w-depth">W</span>
        <span className="visual__w-face">W</span>
      </div>

      <div className="visual__chip visual__chip--cloud"><Cloud size={18} /> Cloud</div>
      <div className="visual__chip visual__chip--code"><Code size={18} /> Code</div>
      <div className="visual__chip visual__chip--ai"><Sparkles size={18} /> AI</div>
    </div>
  )
}

export default HeroVisual
