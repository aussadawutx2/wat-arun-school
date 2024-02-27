import { useState } from 'react'

// ฟังก์ชันนับวันเวลาถอยหลัง
function countDown(startDate: Date, daysToSubtract: number): Date {
  const millisecondsPerDay = 24 * 60 * 60 * 1000 // 1 วันมี 86400000 มิลลิวินาที
  const millisecondsToSubtract = daysToSubtract * millisecondsPerDay
  const endDate = new Date(startDate.getTime() - millisecondsToSubtract)
  return endDate
}

export default function Countdown() {
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [daysToSubtract, setDaysToSubtract] = useState<number>(7)

  const handleCountdown = () => {
    const startDate = new Date()
    const calculatedEndDate = countDown(startDate, daysToSubtract)
    setEndDate(calculatedEndDate)
  }

  return (
    <div>
      <h1>Countdown</h1>
      <p>Enter number of days to subtract:</p>
      <input
        type="number"
        value={daysToSubtract}
        onChange={(e) => setDaysToSubtract(parseInt(e.target.value))}
      />
      <button onClick={handleCountdown}>Start Countdown</button>
      {endDate && <p>End Date: {endDate.toLocaleDateString()}</p>}
    </div>
  )
}
