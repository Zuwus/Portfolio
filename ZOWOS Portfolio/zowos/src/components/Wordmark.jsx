import './Wordmark.css'

// The zoWos brand name as pure typography (no logo image).
// `size` is a prop: the parent decides how big it is, e.g. <Wordmark size="lg" />.
function Wordmark({ size = 'md' }) {
  return (
    <span className={`wordmark wordmark--${size}`}>
      zo<span className="wordmark__w">W</span>os
    </span>
  )
}

export default Wordmark
