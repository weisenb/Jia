import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NotFoundPage.css'

export function NotFoundPage() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 80)

    return () => window.clearInterval(timer)
  }, [])

  const milliseconds = time.getMilliseconds()
  const seconds = time.getSeconds() + milliseconds / 1000
  const minutes = time.getMinutes() + seconds / 60
  const hours = (time.getHours() % 12) + minutes / 60
  const timeLabel = time.toLocaleTimeString('zh-CN', { hour12: false })
  const dateLabel = time.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
  const ticks = Array.from({ length: 60 }, (_, index) => index)
  const numbers = Array.from({ length: 12 }, (_, index) => index + 1)

  return (
    <section className="not-found">
      <div className="not-found__dial">
        <div className="not-found__dial-glow" />
        <div className="not-found__dial-ring not-found__dial-ring--outer" />
        <div className="not-found__dial-ring not-found__dial-ring--inner" />
        <div className="not-found__ticks">
          {ticks.map((tick) => (
            <span
              className={`not-found__tick${tick % 5 === 0 ? ' not-found__tick--major' : ''}`}
              key={tick}
              style={{ transform: `rotate(${tick * 6}deg)` }}
            />
          ))}
        </div>
        <div className="not-found__numbers">
          {numbers.map((number) => (
            <span
              className="not-found__number"
              key={number}
              style={{ transform: `rotate(${number * 30}deg)` }}
            >
              <span style={{ transform: `rotate(${-number * 30}deg)` }}>{number}</span>
            </span>
          ))}
        </div>
        <span className="not-found__hand not-found__hand--hour" style={{ transform: `rotate(${hours * 30 - 90}deg)` }} />
        <span className="not-found__hand not-found__hand--minute" style={{ transform: `rotate(${minutes * 6 - 90}deg)` }} />
        <span className="not-found__hand not-found__hand--second" style={{ transform: `rotate(${seconds * 6 - 90}deg)` }} />
        <span className="not-found__hand-tail" style={{ transform: `rotate(${seconds * 6 + 90}deg)` }} />
        <span className="not-found__center-ring" />
        <span className="not-found__center" />
      </div>
      <div className="not-found__copy">
        <h1 className="not-found__title" id="page-title">此刻不在这里</h1>
        <p className="not-found__description">这段路径暂时没有抵达任何页面，但时间仍在向前。</p>
        <div className="not-found__readout">
          <span className="not-found__readout-label">LOCAL TIME</span>
          <strong className="not-found__time">{timeLabel}</strong>
          <span className="not-found__date">{dateLabel}</span>
        </div>
        <Link className="not-found__link" to="/">返回主页</Link>
      </div>
    </section>
  )
}
