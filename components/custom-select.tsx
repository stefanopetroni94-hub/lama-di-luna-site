"use client"

import { useEffect, useRef, useState } from "react"

type Option = { value: string; label: string }

/** A drop-down list for the enquiry forms. It looks like the other fields, opens with a click, and the option under the
 *  cursor turns bordeaux. A real (hidden) <select> keeps the value, so the form reads it and "required" still works. */
export function CustomSelect({
  name,
  label,
  options,
  required = false,
}: {
  name: string
  label: string
  options: Option[]
  required?: boolean
}) {
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  const selected = options.find((o) => o.value === value)

  // close with a click outside or Escape; start again when the form is reset after sending
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const form = root.current?.closest("form")
    const onReset = () => setValue("")
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    form?.addEventListener("reset", onReset)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
      form?.removeEventListener("reset", onReset)
    }
  }, [])

  const choose = (v: string) => {
    setValue(v)
    setOpen(false)
  }

  return (
    <div className="cs" ref={root}>
      <select
        className="cs-native"
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        tabIndex={-1}
        aria-hidden="true"
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        className={`cs-button${selected ? " has-value" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => {
          setActive(Math.max(0, options.findIndex((o) => o.value === value)))
          setOpen((v) => !v)
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault()
            if (!open) {
              setOpen(true)
              return
            }
            setActive((i) => (e.key === "ArrowDown" ? Math.min(options.length - 1, i + 1) : Math.max(0, i - 1)))
          } else if (e.key === "Enter" && open) {
            e.preventDefault()
            choose(options[active].value)
          }
        }}
      >
        {selected ? selected.label : label}
      </button>
      {open ? (
        <ul className="cs-list" role="listbox" aria-label={label}>
          {options.map((o, i) => (
            <li
              key={o.value}
              role="option"
              aria-selected={o.value === value}
              className={`cs-option${i === active ? " is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => {
                e.preventDefault()
                choose(o.value)
              }}
            >
              {o.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
